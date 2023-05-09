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
npm install react-scroll react-animate-on-scroll react-icons react-scripts gh-pages
```
4. Download `cavlab_vision.mp4` to `/src/images/` directory.
```
https://drive.google.com/file/d/1rdM-qFGH8rLCgH96WuimZJYVF6251HEw/view?usp=sharing
```

# Running the website
To run locally:
```
npm start
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
