# MU BioNext

Biological Engineering for Next Generation BioManufacturing: Food, Water, Energy Nexus.
Website for mubionext.com, hosted on GitHub Pages.

## Where to edit content

Content lives in the `data` folder. You do not need to touch `index.html`.

| To update...                | Edit this file              |
|-----------------------------|-----------------------------|
| News stories                | `data/news.js`              |
| Seminars and events         | `data/events.js`            |
| Faculty profiles            | `data/faculty.js`           |
| BE courses                  | `data/courses.js`           |
| Employers (Careers section) | `data/employers.js`         |
| Organizations               | `data/organizations.js`     |
| Faculty photos              | `images/` (named by last name, e.g. `Dai.jpg`) |

Each file starts with instructions and an example entry.

## Editing on GitHub (no coding)

1. Open the file (for example `data/news.js`) and click the pencil icon.
2. Copy an existing entry, paste it, and change the words.
3. Keep the quote marks and the comma after each entry's closing `}`.
4. Click **Commit changes**. The live site updates in a minute or two.

If the site shows "This page could not load", it names the file with the typo.
Fix it, or use the file's **History** to restore the previous version.

## Editing on your computer (VS Code + Claude Code)

Clone this repository, ask Claude Code to make the change, preview by opening
`index.html` in your browser, then Commit and Sync in VS Code.

## VS Code setup

Open this folder in VS Code. When prompted, install the recommended extensions:
**Claude Code** (ask it to make edits) and **Live Server** (click **Go Live** in the
status bar for a live preview that refreshes as you save). `CLAUDE.md` tells Claude Code
how the site is organized and the content rules to follow.
