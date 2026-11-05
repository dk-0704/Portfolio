# Devkishan Koshti — Resume Website

Personal resume site for Devkishan Koshti, Backend & AI Engineer. Built on the free
"Resume" Next.js template by getnextjstemplates (MIT), distributed by ThemeWagon.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into /out
```

## Where to edit content

| What | File |
| --- | --- |
| Email, phone, LinkedIn, GitHub, education, skills | `public/data/page-data.json` |
| Projects | `public/data/work-data.json` (add a URL in `slug` to make a title clickable) |
| Hero text | `src/app/components/home/hero-section/index.tsx` |
| About text, stats, languages | `src/app/components/home/about-me/index.tsx` |
| Experience timeline | `src/app/components/home/experience-sec/index.tsx` |
| Photo | replace `public/images/home/banner/banner-img.png` (about 1370×1300, PNG) |

Social links left as `""` are hidden until you add a URL.

The contact form sends to devkishankoshti07@gmail.com through formsubmit.co. The first
submission sends a one-time activation email to that address. Click it, and the form works from then on.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo on the `main` branch, including the hidden `.github` folder and `package-lock.json`.
2. In the repo, go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Wait for the green check in the **Actions** tab.

The workflow detects your repo name automatically, so the site works at
`https://<username>.github.io/<repo>/` or `https://<username>.github.io/`.
