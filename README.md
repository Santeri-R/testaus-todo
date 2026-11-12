# Testing in web applications -course: Basic CRUD ToDo web app (JS + localStorage)

A minimal full-stack JavaScript Todo application intended for learning unit testing with Vitest and end-to-end testing with Cypress. This version has no database; tasks are stored in the browser's localStorage.

## Technology stack

- **Backend**: Node.js (Express) serving static files and simple health/version endpoints
- **Frontend**: Vanilla JavaScript, HTML, CSS (no framework)
- **Storage**: `localStorage` in the browser (`todo_tasks_v1`)
- **Dev tooling**: Vitest for unit tests and Cypress for end-to-end tests

### Features

- Create a task (topic, priority, status, description)
- Update a task (edit all fields)
- Mark task as complete (toggle complete/undo)
- Delete a task
- Sorted list: not-done first, higher priority first, newest first

### Getting started

1. Ensure Node.js 20+ is installed.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   npm start
   ```

4. Open the app at `http://localhost:5173`

### Project structure

```text
.
├─ public/
│  ├─ index.html     # UI markup
│  ├─ styles.css     # styling
│  ├─ taskStore.js   # pure task logic (no DOM) - unit test this
│  └─ app.js         # DOM wiring: event listeners, rendering
├─ tests/            # Vitest unit tests
├─ cypress/          # Cypress end-to-end tests
├─ .github/workflows/ # GitHub Actions workflows
├─ server.js         # Express static server + health/version
├─ vitest.config.js
├─ cypress.config.js
├─ package.json
└─ README.md
```

### Testing

- Run unit tests with `npm test`, or use `npm run test:watch` during development.
- Run end-to-end tests with `npm start` in one terminal and `npm run test:e2e` in another.
- GitHub Actions runs the unit and end-to-end tests for every push and pull request.
