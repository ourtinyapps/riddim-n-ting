// =============================================================================
// data.js — RIDDIM + TING command database & TE official guide sections
// All button/combo information sourced from teenage.engineering/guides/ep-40
// =============================================================================

window.SECTIONS = [
  {
    num: '4', title: 'Buttons and combos',
    children: [
      { num: '4.1', title: 'Groups' },
      { num: '4.3', title: '− and +' },
      { num: '4.4', title: 'Shift' },
      { num: '4.5', title: 'Fader' },
      { num: '4.6', title: 'X and Y knobs' },
    ]
  },
  {
    num: '6', title: 'Workflow',
    children: [
      { num: '6.1', title: 'Commit' },
      { num: '6.2', title: 'Song mode' },
      { num: '6.3', title: 'Live state' },
    ]
  },
  {
    num: '8', title: 'Modes',
    children: [
      { num: '8.1', title: 'Sound' },
      { num: '8.1.1', title: 'Supertones' },
      { num: '8.2', title: 'Sound edit' },
      { num: '8.3', title: 'Main' },
      { num: '8.4', title: 'Live state' },
      { num: '8.5', title: 'Tempo' },
      { num: '8.5.2', title: 'Tempo match' },
    ]
  },
  {
    num: '9', title: 'Play and record',
    children: [
      { num: '9.1', title: 'Live record' },
      { num: '9.2', title: 'Step sequence' },
      { num: '9.3', title: 'Loop startup sequence' },
      { num: '9.4', title: 'Keys mode' },
      { num: '9.5', title: 'Fader' },
      { num: '9.6', title: 'Copy / paste' },
      { num: '9.7', title: 'Erase and undo' },
      { num: '9.8', title: 'Offset notes' },
    ]
  },
  {
    num: '10', title: 'Functions',
    children: [
      { num: '10.1', title: 'Sample' },
      { num: '10.2', title: 'Sample tool' },
      { num: '10.3', title: 'Chop' },
      { num: '10.4.2', title: 'Timing correct' },
      { num: '10.5', title: 'Loop' },
    ]
  },
  {
    num: '11', title: 'Effects (FX)',
    children: [
      { num: '11.0', title: 'Browse FX' },
      { num: '11.8', title: 'Punch-in FX 2.0' },
      { num: '11.10', title: 'Output / master' },
      { num: '11.10.1', title: 'Sidechain' },
    ]
  },
  {
    num: '12', title: 'How to',
    children: [
      { num: '12.3', title: 'Enable velocity sensitivity' },
      { num: '12.4', title: 'Change keys scale' },
      { num: '12.7', title: 'Sync PO → Riddim' },
      { num: '12.8', title: 'Sync Riddim → PO' },
    ]
  },
  {
    num: '14', title: 'System',
    children: [
      { num: '14.0', title: 'System settings' },
    ]
  },
  {
    num: 'T', title: 'Ting (EP-2350)',
    children: [
      { num: 'T.1', title: 'Effect presets' },
      { num: 'T.2', title: 'Modulation' },
      { num: 'T.3', title: 'Samples' },
    ]
  },
];

window.COMMANDS = [
  // ===== Section 4 — Buttons and combos =====
  { id: 'shift-group-a', section: '4.4', name: 'New pattern', cat: 'patterns', desc: 'Creates a new empty pattern in the current group.', seq: [['shift','Hold'],['group-a','Tap']], kw: ['new','pattern','empty','create','blank'] },
  { id: 'shift-group-b', section: '4.4', name: 'Undo', cat: 'editing', desc: 'Undoes the last action. The house icon on the LCD lights up when an undo is available.', seq: [['shift','Hold'],['group-b','Tap']], kw: ['undo','revert','back'] },
  { id: 'shift-group-c', section: '4.4', name: 'Copy bar (1×) or pattern (2×)', cat: 'editing', desc: 'Press once to copy the current bar, twice to copy the full pattern.', seq: [['shift','Hold'],['group-c','Tap 1× or 2×']], kw: ['copy','duplicate','clone','bar','pattern'] },
  { id: 'shift-group-d', section: '4.4', name: 'Paste', cat: 'editing', desc: 'Pastes the most recently copied bar or pattern into the current location.', seq: [['shift','Hold'],['group-d','Tap']], kw: ['paste','insert'] },
  { id: 'shift-knob', section: '4.6', name: 'Fine knob adjustment', cat: 'controls', desc: 'Hold SHIFT while turning either knob to make slow, precise adjustments.', seq: [['shift','Hold'],['knob-x','Turn slowly']], kw: ['fine','slow','precise','knob','adjust','small'] },
  { id: 'group-pm', section: '4.1', name: 'Switch pattern in group', cat: 'patterns', desc: 'Hold a group button + −/+ (or numpad) to switch patterns within that group. Hold multiple groups to change them together.', seq: [['group-a','Hold any group'],['plus','Tap − or +']], kw: ['pattern','switch','group','navigate','change'] },
  { id: 'shift-minus', section: '4.3', name: 'Bar back (multi-bar pattern)', cat: 'editing', desc: 'Move to the previous bar within a multi-bar pattern.', seq: [['shift','Hold'],['minus','Tap']], kw: ['bar','navigate','previous','back'] },
  { id: 'shift-plus', section: '4.3', name: 'Bar forward (multi-bar pattern)', cat: 'editing', desc: 'Move to the next bar within a multi-bar pattern.', seq: [['shift','Hold'],['plus','Tap']], kw: ['bar','navigate','next','forward'] },
  { id: 'shift-fader', section: '4.5', name: 'Reset fader (RES)', cat: 'mixing', desc: 'Resets the fader to its default position for the current assignment.', seq: [['shift','Hold'],['fader-btn','Tap']], kw: ['reset','fader','default','centre'] },
  { id: 'fader-pad', section: '4.5', name: 'Reassign fader', cat: 'mixing', desc: 'Hold FADER and tap any pad to assign the fader to that label (LEVEL, PITCH, TIME, LPF, HPF, →FX, ATK, REL, PAN, TUNE, VEL, MOD).', seq: [['fader-btn','Hold'],['pad-1','Tap label pad']], kw: ['fader','assign','reassign','function','reroute'] },

  // ===== Section 6 — Workflow =====
  { id: 'commit', section: '6.1', name: 'Commit scene', cat: 'song', desc: 'The dedicated COMMIT button (under MAIN in the LIVE cluster) duplicates the current scene as a new scene. Used when building song arrangements.', seq: [['commit','Tap']], kw: ['commit','duplicate','scene','snapshot'] },
  { id: 'shift-main', section: '6.1', name: 'Commit scene (via shift)', cat: 'song', desc: 'Same as the dedicated COMMIT button. Duplicates current scene.', seq: [['shift','Hold'],['main','Tap']], kw: ['commit','scene','duplicate'] },
  { id: 'main-enter', section: '6.2', name: 'Open song list', cat: 'song', desc: 'Opens the song list view, where committed scenes are arranged into a song.', seq: [['main','Hold'],['pad-enter','Tap']], kw: ['song','list','arrange','arrangement'] },
  { id: 'main-pm', section: '6.2', name: 'Switch scenes', cat: 'song', desc: 'Step through scenes one at a time.', seq: [['main','Hold'],['plus','Tap − or +']], kw: ['scene','navigate','next','previous'] },
  { id: 'main-numpad', section: '6.2', name: 'Quick-jump scene', cat: 'song', desc: 'Hold MAIN + tap pad 1–9 to jump directly to that scene number.', seq: [['main','Hold'],['pad-1','Tap pad number']], kw: ['scene','select','quick','jump'] },
  { id: 'loop', section: '6.3', name: 'Enter live state (LOOP button)', cat: 'live', desc: 'The dedicated LOOP button enters live state for performance.', seq: [['loop','Tap']], kw: ['loop','live','state','perform'] },
  { id: 'edit', section: '6.3', name: 'Sound edit (LIVE button)', cat: 'sounds', desc: 'The dedicated EDIT button jumps to sound edit. Same as shift+sound.', seq: [['edit','Tap']], kw: ['edit','sound','live'] },

  // ===== Section 8 — Modes =====
  { id: 'sound-mode', section: '8.1', name: 'Enter sound mode', cat: 'sounds', desc: 'Browse the sample bank. Press a pad to assign that pad. −/+ steps one at a time, SHIFT+−/+ jumps by 10.', seq: [['sound','Tap']], kw: ['sound','browse','samples','select','assign'] },
  { id: 'sound-pm', section: '8.1', name: 'Browse sounds', cat: 'sounds', desc: 'In SOUND mode, −/+ steps one sound at a time. Hold pad to preview the sample name.', seq: [['sound','Enter sound mode'],['plus','Tap − or +']], kw: ['sound','browse','navigate','samples'] },
  { id: 'sound-numpad', section: '8.1', name: 'Direct sample number', cat: 'sounds', desc: 'In SOUND mode, hold SOUND and type a number on the pads to jump directly to that slot.', seq: [['sound','Hold'],['pad-1','Type digits']], kw: ['sound','direct','number','slot','jump'] },
  { id: 'sound-dot', section: '8.1.1', name: 'Supertone synth select', cat: 'sounds', desc: 'In SOUND mode, hold SOUND + dot pad to access the Supertone synth voices on pads 0–9.', seq: [['sound','Hold'],['pad-dot','Tap dot']], kw: ['supertone','synth','synthesizer','bass','lead','siren'] },
  { id: 'shift-sound', section: '8.2', name: 'Sound edit mode', cat: 'sounds', desc: 'Adjust play mode, pan, trim, supertone parameters, envelope, time stretch, MIDI per pad. Hold SHIFT+SOUND for 2 seconds to save edits.', seq: [['shift','Hold'],['sound','Tap (or hold 2s to save)']], kw: ['sound','edit','adjust','tweak','envelope','trim','attack','release'] },
  { id: 'tempo-mode', section: '8.5', name: 'Enter tempo mode', cat: 'tempo', desc: 'Display and adjust tempo. Knob X = coarse, Knob Y = fine. Range 40-399 BPM.', seq: [['tempo','Tap']], kw: ['tempo','bpm','speed'] },
  { id: 'hold-tempo-numpad', section: '8.5', name: 'Type exact tempo', cat: 'tempo', desc: 'Hold TEMPO and type a number on the pads. Use the dot pad for decimals (e.g. 120.51 BPM).', seq: [['tempo','Hold'],['pad-1','Type digits'],['pad-dot','Decimal (optional)'],['pad-enter','ENTER']], kw: ['tempo','bpm','exact','specific','type'] },
  { id: 'main-tempo', section: '8.5.1', name: 'Set time signature', cat: 'tempo', desc: 'Hold MAIN + TEMPO to access time signature settings.', seq: [['main','Hold'],['tempo','Hold both']], kw: ['time','signature','meter','beat'] },
  { id: 'sample-tempo', section: '8.5.2', name: 'Detect BPM (tempo match)', cat: 'tempo', desc: 'Hold SAMPLE + TEMPO, then play audio into the mic or line in. Riddim listens, finds the tempo, and sets the project to match.', seq: [['sample','Hold'],['tempo','Hold both']], kw: ['detect','bpm','tempo','match','listen','tap'] },
  { id: 'hold-main-numpad', section: '8.3', name: 'Switch project', cat: 'song', desc: 'Hold MAIN longer + numpad (1–9) to switch between user projects. 9 projects available.', seq: [['main','Hold longer'],['pad-1','Tap project number']], kw: ['project','switch','load','open'] },

  // ===== Section 9 — Play and record =====
  { id: 'record-play', section: '9.1', name: 'Live record (with count-in)', cat: 'recording', desc: 'Press and release RECORD, then PLAY. Riddim plays a 4-beat count-in then starts recording.', seq: [['record','Press & release'],['play','Tap']], kw: ['record','live','count-in','recording'] },
  { id: 'record-play-hold', section: '9.1', name: 'Live record (instant, no count-in)', cat: 'recording', desc: 'Hold RECORD and tap PLAY simultaneously. Recording starts immediately with no count-in.', seq: [['record','Hold'],['play','Tap']], kw: ['record','instant','immediate','live'] },
  { id: 'record-pad', section: '9.2', name: 'Step record', cat: 'recording', desc: 'Use −/+ to navigate to a step (when stopped), then RECORD + pad to write a note onto that step.', seq: [['record','Hold'],['pad-1','Tap any pad']], kw: ['step','sequence','sequencer','grid','program'] },
  { id: 'record-pm', section: '9.2', name: 'Change pattern length', cat: 'patterns', desc: 'Hold RECORD + −/+ to change pattern length, up to 99 bars per group.', seq: [['record','Hold'],['plus','Tap − or +']], kw: ['pattern','length','bars','long','extend'] },
  { id: 'group-rec-2s', section: '9.3', name: 'Save Loop Startup Sequence (LSS)', cat: 'patterns', desc: 'Set desired mute/unmute states on LOoP pads, then hold the current group + RECORD for 2 seconds until "LSS SAV" flashes.', seq: [['group-a','Hold'],['record','Hold both 2s']], kw: ['LSS','loop','startup','save','mute','state'] },
  { id: 'group-rec-erase-2s', section: '9.3', name: 'Clear LSS', cat: 'patterns', desc: 'Hold current group + RECORD + ERASE for 2 seconds until "LSS DEL" flashes.', seq: [['group-a','Hold'],['record','Hold'],['erase','Hold all 2s']], kw: ['LSS','clear','delete','remove'] },
  { id: 'keys-mode', section: '9.4', name: 'Enter keys mode', cat: 'keys', desc: 'Tap KEYS to play the pads as a chromatic / scale keyboard. The pads remap to scale notes.', seq: [['keys','Tap']], kw: ['keys','scale','melodic','play'] },
  { id: 'keys-pm', section: '9.4', name: 'Octave up/down', cat: 'keys', desc: 'In KEYS mode, hold KEYS + −/+ to shift octave.', seq: [['keys','Hold'],['plus','Tap − or +']], kw: ['octave','keys','transpose','up','down'] },
  { id: 'keys-pad', section: '9.4', name: 'Transpose / scale', cat: 'keys', desc: 'In KEYS mode, hold KEYS + tap a pad to set root note or scale (12T, maj, min, dor, phr, lyd, mix, loc, ma.p, mi.p).', seq: [['keys','Hold'],['pad-1','Tap pad']], kw: ['scale','root','transpose','keys','12T','major','minor','dorian','phrygian','lydian','mixolydian','locrian','pentatonic'] },
  { id: 'shift-pad-step', section: '9.8', name: 'Edit note velocity / duration', cat: 'recording', desc: 'On a recorded step, SHIFT + pad lets you adjust velocity (Knob X) and duration (Knob Y).', seq: [['shift','Hold'],['pad-1','Tap step pad']], kw: ['velocity','duration','step','edit','adjust','expression'] },
  { id: 'shift-pm-pad', section: '9.8', name: 'Nudge note timing', cat: 'recording', desc: 'SHIFT + pad + −/+ nudges that note backward or forward in time per-tick (1/96 of a beat).', seq: [['shift','Hold'],['pad-1','Hold pad'],['plus','− or + to nudge']], kw: ['nudge','tick','timing','micro','offset','swing'] },
  { id: 'erase-pad', section: '9.7', name: 'Erase notes on a pad', cat: 'editing', desc: 'Hold ERASE + tap a pad to remove its notes from the current pattern. Hold longer to erase the entire track.', seq: [['erase','Hold'],['pad-1','Tap pad to clear']], kw: ['erase','delete','clear','remove'] },
  { id: 'erase-group', section: '9.7', name: 'Erase pattern (PTN)', cat: 'editing', desc: 'Hold ERASE + group button to clear the entire pattern for that group.', seq: [['erase','Hold'],['group-a','Tap any group']], kw: ['erase','pattern','clear','reset'] },
  { id: 'erase-fader', section: '9.7', name: 'Erase fader automation', cat: 'editing', desc: 'Hold ERASE + FADER until "FDR DEL" flashes. Clears all fader automation.', seq: [['erase','Hold'],['fader','Hold until FDR DEL']], kw: ['erase','fader','automation','clear'] },
  { id: 'erase-sound', section: '9.7', name: 'Permanently delete sample', cat: 'sounds', desc: 'Hold ERASE + SOUND to delete a sample permanently. Cannot be undone.', seq: [['erase','Hold'],['sound','Tap']], kw: ['delete','sample','permanent','remove'] },

  // ===== Section 10 — Functions =====
  { id: 'sample-mode', section: '10.1', name: 'Enter sample mode', cat: 'sampling', desc: 'Tap SAMPLE to enter recording mode. Pads light up; hold a pad to record audio to it.', seq: [['sample','Tap']], kw: ['sample','record','audio','capture'] },
  { id: 'sample-pad', section: '10.1', name: 'Record sample to pad', cat: 'sampling', desc: 'In SAMPLE mode, hold a pad to record audio to it. Recording stops when released.', seq: [['sample','Tap to enter mode'],['pad-1','Hold pad to record']], kw: ['sample','record','audio','capture','pad'] },
  { id: 'shift-pad-sample', section: '10.2', name: 'Hands-free sampling', cat: 'sampling', desc: 'In SAMPLE mode, SHIFT + pad triggers threshold-based hands-free recording. Knob Y sets the threshold.', seq: [['sample','Enter sample mode'],['shift','Hold'],['pad-1','Tap pad']], kw: ['hands-free','threshold','automatic','sample','tool'] },
  { id: 'shift-sample', section: '10.3', name: 'Chop mode', cat: 'sampling', desc: 'Auto-chop with a group + −/+, or live-chop by tapping pads as the sample plays.', seq: [['shift','Hold'],['sample','Tap']], kw: ['chop','slice','split','divide','dice'] },
  { id: 'timing-mode', section: '10.4.2', name: 'Enter timing mode', cat: 'timing', desc: 'Apply note repeat or quantisation to incoming notes. 8 timing modes: 1/4, 1/8, 1/16, 1/32, 1/8 triplet, 1/16 triplet, 1/32 triplet, off.', seq: [['timing','Tap']], kw: ['timing','correct','quantise','quantize','repeat','grid'] },
  { id: 'shift-timing', section: '10.4.2', name: 'Timing correct (per-note quantise)', cat: 'timing', desc: 'Apply quantisation to individual notes after recording without losing groove.', seq: [['shift','Hold'],['timing','Tap']], kw: ['timing','correct','quantise','quantize','snap','grid'] },
  { id: 'shift-tempo', section: '10.5', name: 'Loop mode (via shift)', cat: 'sampling', desc: 'Knob X = loop length, Knob Y = slide position. TEMPO exits immediately, MAIN exits on next bar.', seq: [['shift','Hold'],['tempo','Tap']], kw: ['loop','length','slide','repeat'] },

  // ===== Section 11 — Effects =====
  { id: 'fx-mode', section: '11.0', name: 'Enter FX mode', cat: 'fx', desc: 'Apply effects to the master output. Cycle through delay, reverb, distortion, chorus, filter, compressor, phaser.', seq: [['fx','Tap']], kw: ['fx','effects','master','enter'] },
  { id: 'fx-pm', section: '11.0', name: 'Browse FX', cat: 'fx', desc: 'In FX mode, −/+ cycles through: delay, reverb, distortion, chorus, filter, compressor, phaser.', seq: [['fx','Enter FX mode'],['plus','Tap − or +']], kw: ['fx','effects','browse','cycle','delay','reverb','distortion','chorus','filter','compressor','phaser'] },
  { id: 'fx-pad', section: '11.8', name: 'Punch-in FX 2.0', cat: 'fx', desc: 'Hold FX + pads. Pressure-sensitive and combinable. Each pad triggers a different effect for live performance.', seq: [['fx','Hold'],['pad-1','Press pads']], kw: ['punch-in','effects','live','pressure','perform'] },
  { id: 'shift-fx', section: '11.10', name: 'Master output / sidechain', cat: 'fx', desc: 'Master output processing including compressor and sidechain. Knob X = drive / duck length, Knob Y = speed / shape.', seq: [['shift','Hold'],['fx','Tap']], kw: ['master','compressor','sidechain','duck','output','glue'] },

  // ===== Section 12 — How to =====
  { id: 'velocity-on', section: '12.3', name: 'Enable velocity sensitivity', cat: 'system', desc: 'SHIFT + ERASE → navigate to setting 304 → ENTER → ON. Pads now respond to how hard you press.', seq: [['shift','Hold'],['erase','Tap'],['plus','Navigate to 304'],['pad-enter','Confirm ON']], kw: ['velocity','sensitivity','expression','dynamics','304'] },
  { id: 'scale-keys', section: '12.4', name: 'Change keys mode scale', cat: 'keys', desc: 'In KEYS mode, hold KEYS + tap a pad to set scale: 12T (chromatic), maj, min, dor, phr, lyd, mix, loc, ma.p (major pent), mi.p (minor pent).', seq: [['keys','Hold'],['pad-1','Tap scale pad']], kw: ['scale','keys','major','minor','dorian','phrygian','lydian','mixolydian','locrian','pentatonic'] },
  { id: 'sync-out-po', section: '12.8', name: 'Sync Riddim → Pocket Operator', cat: 'sync', desc: 'Cable: Riddim SYNC OUT → PO INPUT. PO: function + BPM until SY1. Riddim: SHIFT + ERASE → sync (200s) → out → 8 → ENTER.', seq: [['shift','Hold'],['erase','Tap'],['plus','Navigate to sync'],['pad-enter','Confirm each step']], kw: ['sync','pocket','operator','PO','clock','master','out'] },
  { id: 'sync-in-po', section: '12.7', name: 'Sync Pocket Operator → Riddim', cat: 'sync', desc: 'Cable splitter: PO output → ring (red) into Riddim INPUT, tip into Riddim SYNC IN. Riddim: SHIFT + ERASE → sync → in → 8 → ENTER.', seq: [['shift','Hold'],['erase','Tap'],['plus','Navigate to sync'],['pad-enter','Confirm each step']], kw: ['sync','pocket','operator','PO','clock','slave','in'] },

  // ===== Section 14 — System =====
  { id: 'shift-eraser', section: '14.0', name: 'Open system settings', cat: 'system', desc: 'Navigate with −/+, confirm with ENTER. MIDI 100s, sync 200s, pad 300s, sequencer 400s, live mode 900s.', seq: [['shift','Hold'],['erase','Tap']], kw: ['system','settings','config','setup','preferences'] },
  { id: 'shift-play', section: '8.4', name: 'Play from pattern start', cat: 'playback', desc: 'Restarts the pattern from step 1 instead of resuming from the current step.', seq: [['shift','Hold'],['play','Tap']], kw: ['play','restart','start','from','beginning'] },

  // ===== Ting (EP-2350) =====
  { id: 'ting-echo', section: 'T.1', name: 'Ting — Echo preset', cat: 'ting', desc: 'Clean delay effect. Lever modulates wet amount.', seq: [['ting-orange','Tap orange button to cycle']], kw: ['ting','echo','delay','effect'] },
  { id: 'ting-spring', section: 'T.1', name: 'Ting — Echo + Spring', cat: 'ting', desc: 'Delay layered with spring reverb for that classic dub feel.', seq: [['ting-orange','Tap orange button to cycle']], kw: ['ting','echo','spring','reverb','dub','effect'] },
  { id: 'ting-pixie', section: 'T.1', name: 'Ting — Pixie', cat: 'ting', desc: 'High-pitched fairy / chipmunk pitch shift.', seq: [['ting-orange','Tap orange button to cycle']], kw: ['ting','pixie','pitch','high','fairy','chipmunk'] },
  { id: 'ting-robot', section: 'T.1', name: 'Ting — Robot', cat: 'ting', desc: 'Vocoded mechanical voice effect.', seq: [['ting-orange','Tap orange button to cycle']], kw: ['ting','robot','vocoder','mechanical','effect'] },
  { id: 'ting-secret', section: 'T.2', name: 'Ting — Secret button', cat: 'ting', desc: 'Press the lever fully down to trigger the hidden secret button.', seq: [['ting-handle','Press fully down']], kw: ['ting','secret','hidden','easter','egg'] },
  { id: 'ting-shake', section: 'T.2', name: 'Ting — Motion modulation', cat: 'ting', desc: 'Shake Ting — the internal accelerometer modulates effect intensity.', seq: [['ting-handle','Shake the device']], kw: ['ting','shake','motion','accelerometer','modulate'] },
  { id: 'ting-sample', section: 'T.3', name: 'Ting — Trigger sample', cat: 'ting', desc: 'Tap any of the 4 side buttons to trigger one of the sample slots (default: air horn, laser, etc.).', seq: [['ting-s1','Tap any side button']], kw: ['ting','sample','trigger','horn','laser','side'] },
];
