# GULP project
- A Front-End task of creating a markup of a one-page design to learn:  
- BEM methodology
![BEM methodology](https://en.bem.info/methodology/quick-start/)
- Gulp built tool to build a project automatically
![Gulp](https://gulpjs.com/)
- Sass/SCSS

## Tech Stack
- Node.js
- Gulp
- BrowserSync
- SASS

## Setup

1. Clone this repo to your local mashine
```bash
git clone https://github.com/nikaffa/gulp-project
cd gulp-project
```
2. Install the gulp command line utility globally
```
npm install --global gulp-cli
```
3. Install dependencies 
```bash
npm i
```
4. Run the task from the gulpfile.js 
- For example, to run browserSync task:
```
gulp sync
```
- Server will be run at `http://localhost:3001/`
- Tasks execute asynchronously

- Note: BrowserSync is used, so you should not have to restart your server
