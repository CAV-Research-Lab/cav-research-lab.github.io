# Setup
1. Install Node.js and npm:
```
https://nodejs.org/en/download/
```
2. Clone the repository:
```
git clone https://github.com/CAV-Research-Lab/cav-research-lab.github.io.git
```

3. Install required npm packages:
```
npm install
```
4. Download `cavlab_vision.mp4` to `/src/images/` directory.
```
https://drive.google.com/file/d/1rdM-qFGH8rLCgH96WuimZJYVF6251HEw/view?usp=sharing
```

# Running the website
To run locally:
```
npm run dev
```

To create a production build:
```
npm run build
```

# Deployment

This site can be deployed to either GitHub Pages or Cloudflare. The production build is written to the `build/` directory.

## GitHub Pages

To deploy only to GitHub Pages:
```
npm run deploy:github
```

This runs a fresh build and publishes the `build/` directory using `gh-pages`.

## Cloudflare

### Manual Cloudflare upload

To deploy manually through the Cloudflare dashboard:
```
npm run build
```

Then upload the generated `build/` folder in Cloudflare:
1. Go to Workers & Pages.
2. Open the `cav-lab` project.
3. Choose New deployment.
4. Choose Upload static files.
5. Upload the `build/` folder.

### Cloudflare CLI deployment

The Cloudflare CLI deployment uses `wrangler.jsonc`, which points Cloudflare to the `build/` directory.

First-time setup:
```
npx wrangler login
```

To deploy only to Cloudflare:
```
npm run deploy:cloudflare
```

This runs a fresh build and deploys it to the `cav-lab` Cloudflare Worker/static-assets project.

## Deploy to both GitHub and Cloudflare

To deploy the same build to both hosts:
```
npm run deploy
```

This runs a fresh build, publishes to GitHub Pages, then publishes to Cloudflare.

## Legacy update script

To push to update everything using the local helper:
```
python ./update_server.py
```
If the above doesn't work, use Git manually and then deploy:
```
git add .
git commit -m "Your message"
git push

npm run deploy:github
```

# Source structure

- `src/pages/`: route-level pages used by `src/App.js`.
- `src/pages/styles/`: page styles split by area, with `src/pages/Pages.css` acting as the import map.
- `src/components/layout/`: shared navigation and footer.
- `src/components/home/`: homepage sections.
- `src/components/news/`: news rendering components.
- `src/components/shared/`: reusable UI helpers.
- `src/data/research/`: research programme and funding content.
- `src/data/impact/`: impact, publications, books, patents, policy, and engagement content.
- `src/data/team/`: team and alumni content.
- `src/data/blog/`: blog post summaries.
- `src/assets/images/`: images and media grouped by purpose.
- `src/archive/`: old or unused code/assets kept only for reference.
