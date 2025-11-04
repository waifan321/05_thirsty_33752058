# The Thirsty Student (05_thirsty_33752058)

A small Express + EJS demo web app created for the "Thirsty Student" assignment. It demonstrates a basic Express server, EJS views, simple routing, form handling and serving static assets (CSS).

---

## At a glance

- Node + Express (CommonJS)
- Templating: EJS
- Static files: served from `public/` (stylesheets, images, client JS)
- Main entry: `index.js`
- Views: `views/*.ejs`
- Routes: defined in `routes/main.js`

This project is intended as a learning/demo app rather than production-ready code.

---

## Features

- Home page with product categories
- About page
- Search form (GET) and search results view
- Registration form (POST) and registered confirmation view
- Survey form and results (example of form handling)
- Static styling from `public/css/styles.css`

---

## Quick start

Requirements
- Node.js (v14+ recommended)

1. Install dependencies

```powershell
npm install
```

2. Start the app

You can run directly with Node:

```powershell
node .\index.js
```

If you prefer npm script, add a `start` script to `package.json`:

```json
"scripts": {
  "start": "node index.js"
}
```

Then run:

```powershell
npm start
```

3. Open the app in your browser:

http://localhost:8000/

(The app listens on port 8000 by default — see `index.js`.)

---

## Project structure

- `index.js` — Express app setup and middleware (EJS setup, body parser, static files, loads routes)
- `routes/main.js` — All route handlers and page data
- `views/` — EJS templates (pages and partials)
- `public/` — Static assets (CSS, images, client-side JS). Example: `public/css/styles.css`
- `package.json` — Project metadata and dependencies

---

## Routes (implemented)

The app exposes the following routes (in `routes/main.js`):

- GET `/` — Home (`views/index.ejs`)
- GET `/about` — About (`views/about.ejs`)
- GET `/search` — Search form (`views/search.ejs`)
- GET `/search_result` — Search results (`views/search_result.ejs`) — expects `search_text` and `category` query params
- GET `/register` — Registration form (`views/register.ejs`)
- POST `/registered` — Registration confirmation (`views/registered.ejs`) — expects `first`, `last`, `email` in body
- GET `/survey` — Survey form
- POST `/survey_result` — Survey results

Note: Views referenced above must exist in `views/`. If you add pages, add the corresponding route or render them directly from a route.

---

## Styling and assets

Static files are served from the `public/` folder (via `express.static`). Example:

- `public/css/styles.css` — site styles (already added)

Link CSS from your EJS templates with an absolute path from the server root, e.g.:

```html
<link rel="stylesheet" href="/css/styles.css">
```

If you prefer to use a shared header partial (DRY), you can put the `<head>` contents into `views/partials/head.ejs` and include it where needed.

---

## Development notes & suggestions

- Add a `start` script to `package.json` for convenience (see Quick start).
- Consider using `nodemon` for live-reload during development:

```powershell
npm install --save-dev nodemon
npx nodemon index.js
```

- For larger projects, split routes and controllers into multiple modules.
- Use environment variables for configuration (port, DB credentials) — consider the `dotenv` package.

---

## Troubleshooting

- If the page looks unstyled, open DevTools → Network and confirm `/css/styles.css` returns `200`.
- If the app fails to start, check the console for syntax errors and confirm dependencies are installed (`node_modules` present).
- If you see EJS rendering errors, verify the template exists in `views/` and the route calls `res.render()` with the expected variable names.

---

## Extending this project (ideas)

- Add a simple data store (JSON file or in-memory list) and a page to display items dynamically.
- Add authentication (e.g., passport/local) to protect certain routes.
- Use a CSS preprocessor (Sass) or a bundler if adding many assets.
- Add unit/integration tests (Jest + Supertest for route tests).

---

## License & author

- License: ISC (as in `package.json`)
- Author: (you)

---

If you'd like, I can:
- Add a `start` script to `package.json` and enable `nodemon` dev script.
- Create a `views/partials/head.ejs` and update all templates to include it.
- Add small route tests using Jest + Supertest.

Tell me which of the above you'd like next and I will implement it.