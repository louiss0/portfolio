# Shelton's Web: Portfolio

This website is a site that uses Astro as is static site generator. The point of this site is to show off my projects and
my resume. I use vue as my framework of choice. This site has information about all of the projects I have written. How I did them and What they do.

## The Stack

Since this project is small I decided not to configure vue but just rely on it and vue use to control the app.
I use tailwind to make sure that all of the things are styled. I use a concept called utility class layering to style
everything. I tweaked the Astro HeaderLink to become a vue file. And the Nav as well. I installed two libraries that I created called `astro-gap` and `astro-template-outlet`.

Astro Gap is a library that allows you to add space in between elements in astro files. Astro Template Outlet is a library that is used to render
templates inside of Astro files. I decided to self host by using `@fontsource`. I use Lato and Raleway for this one. I use a library called `@vueuse/core` to get some nice functionality.

- Astro
- Vue
- Tailwind

## Pages

These pages are the pages that I want for this project.

The index page is the first page that is supposed to be seen.
The about page is the introduction to my self and what want to do.
It is supposed to have the resume inside of it.  
The projects page is a list of all the projects that I have done.
The project page slug is a markdown file of all the pages that I

- 404
- about
- index
- projects
- project/[slug]

## Layouts

- Default
- HMF(_Header Main Footer_)
- project

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
