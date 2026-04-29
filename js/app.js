// =============================================================================
// app.js — Interaction logic
// Search, click-to-highlight, reverse combo mode, section accordion, ting panel
// =============================================================================

(function () {
  'use strict';

  // -- DOM refs --
  const $ = (id) => document.getElementById(id);
  const search = $('rdSearch');
  const results = $('rdResults');
  const info = $('rdInfo');
  const tingBtn = $('rdTingBtn');
  const ting = $('rdTing');
  const clearBtn = $('rdClearBtn');
  const comboBtn = $('rdComboBtn');
  const comboBar = $('rdComboBar');
  const comboBuffer = $('rdComboBuffer');
  const comboMatch = $('rdComboMatch');
  const comboClear = $('rdComboClear');
  const comboDone = $('rdComboDone');
  const sectionsList = $('rdSections');

  // -- State --
  let comboActive = false;
  let comboSeq = [];
  let shiftHeld = false;

  // -- Initial state on info card --
  const DEFAULT_INFO = `
    <div class="rd-info-title">Welcome to the Riddim guide</div>
    <div class="rd-info-body">Type a command above, click any button on the device, or hold <kbd>Shift</kbd> + click multiple buttons (or use <b>+ COMBO</b> on mobile) to discover what a combo does. Combos highlight in numbered colour-coded sequence.</div>
  `;
  info.innerHTML = DEFAULT_INFO;

  // -- Reset all highlights --
  function clearHighlights() {
    document.querySelectorAll('[data-btn]').forEach((el) => {
      el.classList.remove('h-1', 'h-2', 'h-3', 'h-4', 'h-5');
      const badge = el.querySelector('.rd-step-badge');
      if (badge) badge.remove();
    });
  }

  // -- Display a command (highlight buttons + show in info card) --
  function showCommand(cmd) {
    clearHighlights();
    if (!cmd) return;

    const isTing = cmd.cat === 'ting' || cmd.seq.some((s) => s[0].startsWith('ting-'));
    if (isTing && !ting.classList.contains('open')) {
      ting.classList.add('open');
      tingBtn.classList.add('active');
    }

    cmd.seq.forEach((step, i) => {
      const target = document.querySelector(`[data-btn="${step[0]}"]`);
      if (target) {
        target.classList.add(`h-${i + 1}`);
        const badge = document.createElement('div');
        badge.className = `rd-step-badge s${i + 1}`;
        badge.textContent = i + 1;
        target.appendChild(badge);
      }
    });

    const seqHtml = cmd.seq
      .map((s, i) => `<span class="step s${i + 1}">${i + 1}</span> ${escapeHtml(s[1])} <code>${s[0]}</code>`)
      .join(' &rarr; ');

    info.innerHTML = `
      <div class="rd-info-title">${escapeHtml(cmd.name)}</div>
      <div class="rd-info-meta"><span class="rd-info-cat">${cmd.cat.toUpperCase()}</span><span class="rd-info-section">§ ${cmd.section}</span></div>
      <div class="rd-info-seq">${seqHtml}</div>
      <div class="rd-info-body">${escapeHtml(cmd.desc)}</div>
    `;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  // -- Search --
  function searchMatch(q) {
    q = q.trim().toLowerCase();
    if (!q) return [];
    return window.COMMANDS.filter((c) => {
      return (
        c.name.toLowerCase().includes(q) ||
        c.cat.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q) ||
        c.kw.some((k) => k.toLowerCase().includes(q)) ||
        c.id.toLowerCase().includes(q)
      );
    }).slice(0, 12);
  }

  search.addEventListener('input', () => {
    const matches = searchMatch(search.value);
    if (matches.length === 0) {
      results.classList.remove('visible');
      results.innerHTML = '';
      return;
    }
    results.innerHTML = matches
      .map(
        (c) =>
          `<div class="rd-result" data-id="${c.id}"><div class="rd-r-name">${escapeHtml(c.name)}</div><div class="rd-r-cat">${c.cat.toUpperCase()} &middot; § ${c.section}</div></div>`
      )
      .join('');
    results.classList.add('visible');
  });

  results.addEventListener('click', (e) => {
    const r = e.target.closest('.rd-result');
    if (!r) return;
    const cmd = window.COMMANDS.find((c) => c.id === r.dataset.id);
    showCommand(cmd);
    results.classList.remove('visible');
    search.value = cmd.name;
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.rd-search-wrap') && !e.target.closest('.rd-results')) {
      results.classList.remove('visible');
    }
  });

  // -- Combo mode (reverse search) --
  function setComboMode(on) {
    comboActive = on;
    document.body.classList.toggle('combo-active', on);
    comboBtn.classList.toggle('active', on);
    comboBar.classList.toggle('visible', on);
    if (!on) {
      resetCombo();
    }
  }

  function resetCombo() {
    comboSeq = [];
    clearHighlights();
    updateComboDisplay();
  }

  function addToCombo(btnId) {
    if (comboSeq.length >= 5) return;
    comboSeq.push(btnId);
    const target = document.querySelector(`[data-btn="${btnId}"]`);
    if (target && !target.querySelector('.rd-step-badge')) {
      target.classList.add(`h-${comboSeq.length}`);
      const badge = document.createElement('div');
      badge.className = `rd-step-badge s${comboSeq.length}`;
      badge.textContent = comboSeq.length;
      target.appendChild(badge);
    }
    updateComboDisplay();
    findComboMatch();
  }

  function updateComboDisplay() {
    if (comboSeq.length === 0) {
      comboBuffer.innerHTML = '<span class="rd-combo-hint">Click buttons in sequence...</span>';
      comboMatch.innerHTML = '';
      return;
    }
    comboBuffer.innerHTML = comboSeq
      .map((b, i) => `<span class="rd-combo-chip s${i + 1}">${i + 1}. ${b}</span>`)
      .join('');
  }

  function findComboMatch() {
    const exact = window.COMMANDS.find(
      (c) =>
        c.seq.length === comboSeq.length &&
        c.seq.every((s, i) => s[0] === comboSeq[i])
    );
    if (exact) {
      comboMatch.innerHTML = `<div class="rd-combo-found">&check; <b>${escapeHtml(exact.name)}</b> &mdash; ${escapeHtml(exact.desc)}</div>`;
      // Update info card too
      info.innerHTML = `
        <div class="rd-info-title">${escapeHtml(exact.name)}</div>
        <div class="rd-info-meta"><span class="rd-info-cat">${exact.cat.toUpperCase()}</span><span class="rd-info-section">§ ${exact.section}</span></div>
        <div class="rd-info-seq">${exact.seq.map((s, i) => `<span class="step s${i + 1}">${i + 1}</span> ${escapeHtml(s[1])} <code>${s[0]}</code>`).join(' &rarr; ')}</div>
        <div class="rd-info-body">${escapeHtml(exact.desc)}</div>
      `;
      return;
    }
    // Partial: find any command starting with this sequence
    const partial = window.COMMANDS.filter((c) =>
      c.seq.length > comboSeq.length &&
      comboSeq.every((b, i) => c.seq[i] && c.seq[i][0] === b)
    );
    if (partial.length > 0) {
      comboMatch.innerHTML = `<div class="rd-combo-partial">&hellip; ${partial.length} possible match${partial.length === 1 ? '' : 'es'} &mdash; keep adding buttons</div>`;
    } else {
      comboMatch.innerHTML = `<div class="rd-combo-none">&times; No match for this combo</div>`;
    }
  }

  comboBtn.addEventListener('click', () => setComboMode(!comboActive));
  comboClear.addEventListener('click', resetCombo);
  comboDone.addEventListener('click', () => setComboMode(false));

  // Desktop: hold Shift to enable combo mode
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Shift' && !shiftHeld && document.activeElement !== search) {
      shiftHeld = true;
      if (!comboActive) setComboMode(true);
    }
    if (e.key === 'Escape' && comboActive) setComboMode(false);
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Shift') {
      shiftHeld = false;
    }
  });

  // -- Device button clicks --
  document.querySelectorAll('[data-btn]').forEach((b) => {
    b.addEventListener('click', () => {
      const btnId = b.dataset.btn;

      if (comboActive) {
        addToCombo(btnId);
        return;
      }

      // Default: show commands starting with this button
      const matching = window.COMMANDS.filter((c) =>
        c.seq.some((s) => s[0] === btnId)
      );
      if (matching.length === 0) {
        clearHighlights();
        info.innerHTML = `<div class="rd-info-title">${btnId.toUpperCase().replace(/-/g, ' ')}</div><div class="rd-info-body">No command starts here. Try the search bar or hold Shift to build a combo.</div>`;
        return;
      }
      results.innerHTML = matching
        .slice(0, 12)
        .map(
          (c) =>
            `<div class="rd-result" data-id="${c.id}"><div class="rd-r-name">${escapeHtml(c.name)}</div><div class="rd-r-cat">${c.cat.toUpperCase()} &middot; § ${c.section}</div></div>`
        )
        .join('');
      results.classList.add('visible');
      search.value = btnId;
    });
  });

  // -- Ting panel --
  tingBtn.addEventListener('click', () => {
    ting.classList.toggle('open');
    tingBtn.classList.toggle('active');
  });

  document.querySelectorAll('.rd-ting-preset').forEach((b) => {
    b.addEventListener('click', () => {
      const cmd = window.COMMANDS.find((c) => c.id === b.dataset.cmd);
      if (cmd) {
        showCommand(cmd);
        search.value = cmd.name;
      }
    });
  });

  // -- Clear all --
  clearBtn.addEventListener('click', () => {
    clearHighlights();
    search.value = '';
    results.classList.remove('visible');
    info.innerHTML = DEFAULT_INFO;
    resetCombo();
  });

  // -- Render sections panel --
  function renderSections() {
    const html = window.SECTIONS.map((sec) => {
      const cmds = window.COMMANDS.filter((c) => c.section.startsWith(sec.num + '.') || c.section === sec.num);
      if (cmds.length === 0) return '';
      const cmdHtml = cmds
        .map((c) => {
          const seqStr = c.seq
            .map((s, i) => `<span class="rd-cmd-chip s${i + 1}">${s[0]}</span>`)
            .join('<span class="rd-cmd-arr">+</span>');
          return `<button class="rd-cmd-row" data-cmd-id="${c.id}"><div class="rd-cmd-info"><div class="rd-cmd-name">${escapeHtml(c.name)}</div><div class="rd-cmd-section">§ ${c.section}</div></div><div class="rd-cmd-seq">${seqStr}</div></button>`;
        })
        .join('');
      return `<details class="rd-sec" open><summary class="rd-sec-summary"><span class="rd-sec-num">${sec.num}</span><span class="rd-sec-title">${escapeHtml(sec.title)}</span><span class="rd-sec-count">${cmds.length}</span></summary><div class="rd-sec-body">${cmdHtml}</div></details>`;
    }).join('');
    sectionsList.innerHTML = html;

    sectionsList.querySelectorAll('.rd-cmd-row').forEach((b) => {
      b.addEventListener('click', () => {
        const cmd = window.COMMANDS.find((c) => c.id === b.dataset.cmdId);
        if (cmd) {
          showCommand(cmd);
          // Smooth scroll to device on mobile
          if (window.innerWidth < 700) {
            document.querySelector('.rd-device').scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  renderSections();
})();