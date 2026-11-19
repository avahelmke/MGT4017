# ProjectBridge — Website Prototype

A responsive front-end prototype for **ProjectBridge**, a marketplace concept connecting university students with businesses through short, paid projects.

## What's included

- Responsive landing page inspired by the supplied homepage wireframe and application mock-ups.
- Student and business sign-up flows (front-end demo only).
- Project catalogue with keyword search and category filters.
- Project detail view with an application call-to-action.
- Student/business "How it works" tabs.
- About, pricing, FAQ and contact sections.
- Login modal and mobile navigation.
- Accessible labels, keyboard support for project cards, and reduced-motion support.

## Run locally

No build tools, package installation or framework is required.

1. Download or clone this repository.
2. Open `index.html` in a modern browser.

For a local development server, run this command from the project folder:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Upload to GitHub

1. Sign in to GitHub and create a new repository named `projectbridge`.
2. Keep it public if you want to publish it using GitHub Pages.
3. Upload `index.html`, `styles.css`, `app.js`, this README and the `docs` folder.
4. Commit the files to the `main` branch.
5. To publish: open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The published URL will appear in the Pages settings.

## Prototype limitations

This is a clickable front-end prototype, not a production marketplace. Forms show demo confirmation messages in the browser only. No account details, passwords, applications or contact messages are sent to a server or saved. Login, payment processing, messaging, user verification, moderation, reviews and admin tools would need a secure backend and appropriate integrations before a real launch.

The project examples and prices are illustrative prototype content, not live vacancies or confirmed offers. The pricing section is a proposed concept and should be validated before launch.

## Suggested next development steps

1. Choose a backend and database for user accounts, project listings and applications.
2. Add secure authentication, email verification and role-based permissions.
3. Add project review/moderation, user reporting and dispute handling.
4. Integrate a compliant payment provider and define the fee/commission model.
5. Add messaging, project milestones, completion records and reviews.
6. Add privacy, safeguarding, accessibility and legal review before launch.

## Project structure

```text
projectbridge/
├── index.html
├── styles.css
├── app.js
├── README.md
└── docs/
    ├── ai-prompt-evidence.md
    └── business-model-summary.md
```
