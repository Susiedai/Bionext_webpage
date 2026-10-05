# MU BioNext website: guide for Claude Code

Static website for **mubionext.com**, the hub for biological engineering (BE)
faculty and students at the University of Missouri (Mizzou).
Tagline: "Biological Engineering for Next Generation BioManufacturing: Food, Water, Energy Nexus."
Hosted on GitHub Pages; `CNAME` points the site at mubionext.com.

## Structure

- `index.html` holds all layout, styling (CSS), and page logic (JavaScript). Single-page site with hash routes:
  `#/` home, `#/news`, `#/faculty`, `#/faculty/<slug>`, `#/research`, `#/degree` (BE degree & careers; `#/careers` jumps to its careers section), `#/community` (organizations), `#/resources`.
- `data/*.js` holds all content as plain JavaScript lists, loaded by `<script>` tags in `index.html`:
  - `faculty.js` (`faculty`): profiles; sorted by last name automatically
  - `news.js` (`news`): stories; `faculty` field = faculty slug
  - `events.js` (`events`): past events hide automatically after their date
  - `announcements.js` (`announcements`): optional `until` date hides them
  - `courses.js` (`CATALOG`, `courseGroups`)
  - `employers.js` (`employers`)
  - `organizations.js` (`orgs`, `studentOrgs`)
- `images/`: faculty photos named by last name (`Dai.jpg`, etc.) and banner photos
  (`Bionext.jpg`, `faculty.jpg`, `research.jpg`, `degrees&jobs.jpg`, `organizations.jpg`, `resources.jpg`, optional `news.jpg`).
- If a data file has a syntax error, the site shows "This page could not load" and names the file.

## How to make changes

- Content updates (news, events, announcements, courses, faculty, employers, organizations): edit only the matching `data/*.js` file. Copy an existing entry's format exactly.
- Dates are `YYYY-MM-DD`. Faculty slugs: `aloysius`, `chen`, `dai`, `krishnaswamy`, `somavat`, `wan`, `yang`.
- Design, page text, menu, or layout changes: edit `index.html`.
- After editing a data file, check its syntax: `node -e "require('vm').runInNewContext(require('fs').readFileSync('data/news.js','utf8'))"`.
- Preview with the Live Server extension (Go Live) or by opening `index.html` in a browser.
- Commit with a short, clear message, then push.

## Content rules (from the site owner)

- Never invent content: no made-up news, jobs, events, emails, phone numbers, statistics, or course numbers. Use only information from the owner or verifiable sources, and link sources for news.
- News: include only 2026 stories. Write summaries in your own words (no copied paragraphs) and add a `source` link.
- Dr. Susie Dai's only website link is https://dai-lab.com (and its pages). Yang Group link: https://sites.google.com/view/yang-group-at-ndsu-2/home?pli=1&authuser=0.
- Courses follow the MU Academic Catalog (`BIOL_EN` prefix); new courses not yet in the catalog use the owner's numbers (for example `BION 4750 / 7750`) with `status:"new"`. Show credits as "(3 credits)".
- The four emphasis areas are equal (no featured area): Bioenergy & bioprocessing; Food engineering; Water & environment; Biotechnology & biochemical engineering.
- National organizations order: SBE, ASABE, IBE, then others. Do not list BMES.
- Style: Mizzou black and gold, with green for sustainability. Keep it accessible (readable contrast, alt text).
- Do not add placeholder emails; contact for employers goes to the department website.
