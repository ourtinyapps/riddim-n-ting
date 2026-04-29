# Riddim + Ting Learning Guide

Interactive learning guide for the Teenage Engineering EP-40 Riddim and EP-2350 Ting. Skeuomorphic visual mockup, full button-combo reference, and a reverse "what does this combo do?" search.

## Features

- Photo-accurate skeuomorphic mockup of the Riddim front panel and Ting microphone
- **Forward search** — type a command name, action, or keyword to find combos
- **Reverse search (combo mode)** — hold `Shift` (desktop) or tap `+ COMBO` (mobile), then click multiple buttons in sequence to discover what they do
- **Sections panel** — full command reference organised per the official TE EP-40 guide structure (sections 4, 6, 8, 9, 10, 11, 12, 14)
- **Click any button** on the device to see all commands that start with it
- Click a command to highlight the buttons in numbered colour-coded sequence
- Slide-out Ting panel with effect presets and modulation reference
- Mobile-responsive: tightened layout, larger tap targets, single-column command rows under 700px

## File structure

```
riddim-n-ting/
├── index.html          Main page — structure + inline SVG icon library
├── README.md           This file
├── css/
│   └── main.css        All styling
└── js/
    ├── data.js         Commands database + TE section taxonomy
    └── app.js          Search, highlight, combo mode, sections rendering
```

No build step. No dependencies. Pure HTML / CSS / vanilla JavaScript.

## Local preview

Open `index.html` directly in a browser — works without a server. For a local server (recommended for clean asset paths):

```bash
cd riddim-n-ting
python3 -m http.server 8000
# then open http://localhost:8000
```

## Adding more commands

Edit `js/data.js`. Each command entry follows this shape:

```js
{
  id: 'unique-id',
  section: '4.4',                  // TE guide section
  name: 'Human-readable name',
  cat: 'category-tag',             // for filtering / display
  desc: 'Long description shown in the info card.',
  seq: [
    ['shift', 'Hold'],             // button data-btn, action label
    ['group-a', 'Tap']
  ],
  kw: ['search', 'keywords']
}
```

The `data-btn` IDs map to the `data-btn` attributes on each button in `index.html`. To add a new section, add an entry to `window.SECTIONS` in `data.js`.

## Sources

- [teenage.engineering/guides/ep-40](https://teenage.engineering/guides/ep-40)
- [teenage.engineering/guides/ep-2350](https://teenage.engineering/guides/ep-2350)
- [dbroesch EP-40 cheatsheet](https://dbroesch.github.io/cheat-sheets/ep40-cheatsheet.pdf)

Built for personal use by [Dr. Dominic Rafael](https://gotinylabs.com/founder) from [TINYLabs](https://gotinylabs.com). Not affiliated with Teenage Engineering.