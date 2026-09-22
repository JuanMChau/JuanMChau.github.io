# Personal site

Plain HTML/CSS, no build step — three pages (Home, Publications, CV) sharing
one stylesheet (`style.css`).

## Fill in the placeholders

Every `[bracketed]` piece of text is a placeholder — search for `[` across
the files and replace with your own details: name, title, bio, links,
news items, publications, and CV entries. There are three copies of the
sidebar (one per page), so links and your name need updating in all three
of `index.html`, `publications.html`, and `cv.html`.

Add a real photo by replacing the `.avatar` div in each page with an
`<img>` tag pointing at a file in `images/`.

If you want a downloadable CV, drop a `cv.pdf` file next to `cv.html` —
the "Download PDF" button already points at it.

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
   Pages settings page.
