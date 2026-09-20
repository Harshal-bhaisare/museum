# Indonesia's Road to Independence — Interactive Timeline

A self-contained, single-page interactive historical timeline built with plain HTML, CSS and JavaScript (no framework, no backend, no build step).

## File structure

```
indonesia-independence-timeline/
├── index.html          → page structure (hero, timeline, about, footer, modal, search, My Timeline)
├── styles.css           → all styling (museum/exhibition aesthetic, responsive)
├── script.js            → all behaviour (rendering, animations, modal, search, filters, bookmarks)
├── README.md             → this file
└── assets/
    ├── hero-bg.jpg
    ├── budi-utomo.jpg
    ├── sarekat-islam.jpg
    ├── sukarno.jpg
    ├── youth-pledge.jpg
    ├── japanese-occupation.jpg
    ├── putera.jpg
    ├── proclamation.jpg
    ├── revolution.jpg
    ├── diplomacy.jpg
    ├── round-table-conference.jpg
    ├── transfer-sovereignty.jpg
    ├── legacy.jpg
    └── building-nation.jpg
```

All fourteen images from your project material are already placed in `assets/` under the filenames above (plus `hero-bg.jpg`, used as the full-screen landing background). If you want to swap any image later, just replace the file — keep the same filename and `script.js` will pick it up automatically. If a file is ever missing, the page falls back to a styled placeholder instead of breaking.

## Running it locally

You don't need Node, npm or any build tool.

**Option A — just open it**
Double-click `index.html`, or drag it into a browser window. Everything works, including images, since they're loaded as relative paths from `assets/`.

**Option B — a local server (recommended, avoids any browser file:// quirks)**

With Python 3 installed:
```
cd indonesia-independence-timeline
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

With Node installed:
```
cd indonesia-independence-timeline
npx serve .
```

## What's implemented

- **Landing section** — full-screen hero with background image, title, subtitle, intro paragraph, "Explore the Timeline" button (smooth-scrolls to the timeline) and a scroll indicator.
- **Timeline** — 13 events in order, each with date, title, category tag, image, description and a "View Details" button. The Proclamation of Independence (17 August 1945) is styled as a visually prominent, full-width featured event. The Youth Pledge event displays its three principles (One Homeland / One Nation / One Language) as pill labels.
- **Sticky timeline navigation** — a left-hand rail on desktop (becomes a horizontal scrollable strip on mobile/tablet) listing every date; clicking jumps to that event; the current event is highlighted as you scroll (via `IntersectionObserver`).
- **Scroll animations** — events fade/slide in and their image gently un-zooms as they enter the viewport. Respects `prefers-reduced-motion`.
- **Event modal** — "View Details" opens a full-screen modal with a large image, date, category, title, full description, a bookmark button, and Previous/Next navigation. Closes on the × button, clicking outside, or `Esc`. `←`/`→` move between events while the modal is open.
- **Search** — the search icon in the header opens an overlay with a live-filtering search box (matches year, title, category or keyword). Selecting a result closes search, clears filters, and scrolls to that event. Keyboard shortcut: `/` or `Ctrl/Cmd+K`.
- **Filters** — All / Nationalism / Occupation / Independence / Legacy chips show or hide matching events and update the visible count.
- **Progress bar** — a thin bar at the very top of the page fills as you scroll through the whole page.
- **Event counter** — "01 / 13" in the timeline column, tracking the event currently in view (and the filtered total when a filter is active).
- **My Timeline (bookmarks)** — a bookmark icon on every event card and inside the modal; saved events persist in `localStorage` (no login) and appear in the "My Timeline" side panel, opened from the header. Items can be reopened or removed from there.
- **Responsive** — desktop uses a two-column event layout with a sticky side rail; tablet reduces image/columns; mobile switches to a single column with a horizontal date strip, full-width touch targets, and a modal that fits the screen with no horizontal overflow.
- **Accessibility** — semantic HTML, `alt` text on every image, visible focus states, `aria-label`/`aria-pressed`/`aria-expanded` on interactive controls, a keyboard-operable and `Esc`-closable modal, and `prefers-reduced-motion` support throughout.
- **Performance** — images are `loading="lazy"` (except the hero), no external JS libraries or frameworks, animations are CSS-driven, and there are no network/API calls.

## Editing the content

All event content lives in one place: the `EVENTS` array at the top of `script.js`. Each entry has `date`, `title`, `category`, `img`, `alt` and `desc` (an array of paragraphs); the Proclamation entry additionally sets `featured: true`, and the Youth Pledge entry sets a `principles` array. Add, reorder or edit events there — the page, the sticky nav, the search index, the filters and the modal all render from that same array, so nothing else needs to change.

## Note on image licensing

The images in `assets/` are the historical photographs and documents supplied for this project. Verify ownership and licensing before any public or commercial publication.
