# Personal site

Plain static HTML/CSS/JS, no build step.

## Structure

```
sidebar.html   the ONE copy of the sidebar — photo, name, links, nav, theme toggle
index.html     Home — embeds sidebar.html via <iframe>
publications.html
cv.html
style.css      shared by every page, including sidebar.html
nav.js         mobile slide-in drawer (button tap / backdrop tap / edge swipe)
```

## Why an iframe

`sidebar.html` is a real, standalone HTML document. Each page embeds it with:

```html
<iframe src="sidebar.html?active=home" class="sidebar" id="sidebar"></iframe>
```

The `?active=` value (`home`, `publications`, or `cv`) tells the sidebar
which nav link to mark current. Nothing fetches or injects HTML at
runtime — the browser just loads `sidebar.html` as its own document,
the same way it would load an image or any other embedded resource.
Edit your name, photo, or links once, in `sidebar.html`, and it's
reflected everywhere.

Trade-off worth knowing: links inside the sidebar use `target="_top"`
so clicking them navigates the whole page rather than just the iframe.
The theme toggle (also inside the sidebar) writes to `localStorage`
and reloads the top-level page so the color scheme applies consistently
across both documents.

## Editing the site

- **Sidebar** (name, photo, links, nav) → edit `sidebar.html` directly.
- **Page content** (bio, news, publications, CV entries) → edit the
  relevant page (`index.html`, `publications.html`, `cv.html`) directly.
- Add a real photo by replacing the `.avatar` div in `sidebar.html` with
  an `<img>` pointing at a file in `images/`.
- If you want a downloadable CV, drop a `cv.pdf` next to `cv.html` — the
  "Download PDF" button already points at it.

Nothing needs regenerating — every file here is exactly what gets served.

## Deploy to GitHub Pages

1. Create a new repository on GitHub. If you want the site at
   `https://<your-username>.github.io`, name the repo exactly
   `<your-username>.github.io`. Any other name works too — it'll just be
   served at `https://<your-username>.github.io/<repo-name>/` instead.
2. Push these files to the repo's default branch:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment →
   Source**, select "Deploy from a branch," branch `main`, folder `/ (root)`.
4. Wait a minute or two, then visit the URL GitHub shows on that same
   Pages settings page. Future pushes redeploy automatically.
