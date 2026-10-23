# My-Portfolio

## Profile assets

- The hero profile photo is `public/assets/my_profile_photo.jpeg`.
- Add your résumé PDF at `public/assets/shruti-bhandari-cv.pdf`, then set `hasCv` to `true` in `src/app/sections/hero.component.ts`. The download uses the filename `Shruti_Bhandari_CV.pdf`.

The production build uses `/shruti-portfolio/` as its base path for GitHub Pages. Public assets are copied from `public/` during the Angular build.

## Deploy to GitHub Pages

The repository includes a GitHub Actions workflow that builds and deploys the portfolio whenever code is pushed to `main`. You can also start a deployment manually from the Actions tab.

One-time GitHub setup:

1. Open `https://github.com/1799Shruti/My-Portfolio` and go to **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push the workflow and site changes to the `main` branch, or run **Deploy portfolio to GitHub Pages** from the Actions tab.
4. When the workflow succeeds, the site will be available at `https://1799Shruti.github.io/My-Portfolio/`.

The workflow runs `npm ci`, builds the production Angular app, and deploys `dist/shruti-portfolio/browser`. The production base path is already configured in `angular.json`.
