# Website

## Useful Info

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. As always, it is best to read their documentation for help because some of the information here could be wrong or outdated. Use it at your own risk!

**Important:** do NOT touch any files in the `build` folder. You must write your documentation in the `docs` folder.
**Important:** do NOT modify the `node_modules` folder and do NOT remove it from the `.gitignore`.
**Important:** do NOT modify any docker related files.

Want to add custom assets? Add it in the corresponding unit folder or add it in the `static` folder for site-wide access. For example, files for Latex support have been added there.

Want to the change the style of something? Go to the `src/css/custom.css` folder. If you want to change the site's info, modify the configuration files there OR change the `docusaurus.config.js` in the root directory.

- When developing a table, use [this website](https://www.tablesgenerator.com/markdown_tables).
- When making latex, use [this website](https://latexeditor.lagrida.com/).
- When making a diagram, use [this website](https://drive.google.com/file/d/1L6r8jAqQatDtlMlTHIBmHaUcrfzt4tAQ/view?usp=sharing).
  - **Important:** Follow these instructions below to make sure your diagram is exported properly:
    - At the top right, click File > Export as > SVG
    - Set Zoom to 100%, enable Transparent Background, set Appearance to Automatic. Keep everything else as default.
    - Select Export
    - You can set your file name here. Set Where to Download. This saves it locally to your computer.
    - Drag the SVG file to the site files and place it where you need it to be.

## Development Environment

### Devcontainers

1. Open the Devcontainer
2. Run `npm run start` to start the site or `npm run build` to build the site
3. Go to `http://localhost:3000` to view the site

Note: you might have to do `dos2unix post-create.sh`.

### Docker

1. Pull the docker image using `docker pull kinetekenergy/learn-physics-enm:latest`. You can view it [here](https://hub.docker.com/repository/docker/kinetekenergy/learn-physics-enm/general) on DockerHub.
2. Run `docker compose up --build` to start the site.
   1. Run `docker compose down` to stop the site.
3. Go to `http://localhost:3000/` in your browser to see the site.
4. Changes made to docs should update instantly

Note: when building the site, docusaurus will give unsupported file type errors for the SVGs. Ignore them.

## Deployment

**I would suggest using GitHub pages.**

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

### GitHub Pages

I would highly recommend checking out [this link](https://docusaurus.io/docs/deployment#deploying-to-github-pages) that describes how to deploy using Pages. Pages is really easy to use and is what this site uses.

**Important:** once GitHub Pages is set up, you don't ever have to worry about it. The site automatically rebuilds when you make a commit, so you don't need to type any commands to build it. It's easy and automatic!

## Design

Our color scheme comes from [Google's Material 3](https://m3.material.io/styles/color/static/baseline).


