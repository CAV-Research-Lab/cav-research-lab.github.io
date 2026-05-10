# Setup
1. Install npm:
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

To push to update everything:
```
python ./update_server.py
```
If the above doesn't work try:
```
git add .
git commit -m "Your message"
git push

npm run deploy
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
