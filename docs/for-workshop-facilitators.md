# 🎙️ For Workshop Facilitators

> This document is for people who want to **reuse or adapt this repository** in their own AI workshop, classroom, or training session.

---

## What this repo is

The **Personalized Assistant Starter** is a deliberately simple, self-contained web app that runs in the browser with no build step, no backend, and no required accounts. It's designed to be:

- **Safe to hand to a beginner** — they can download the ZIP and double-click `index.html` without installing anything.
- **Easy to live-code alongside** — the JS is well-commented and split into labeled sections so you can walk through it line by line.
- **Easy to fork and extend** — participants can fork the repo on GitHub and immediately start making it their own.

---

## Suggested run of show (~60–90 minutes)

Use this as a rough agenda template. Adjust timing to your audience.

### 1. Set the stage (~10 min)

- Ask the audience: *"What's a small, annoying, repetitive task in your work or home life that you wish you had a helper for?"*
- Collect a few examples (grading, chores, emails, study planning, etc.).
- Introduce the idea: **LLMs are great at following structured instructions — so our job is to structure the instructions clearly.**

### 2. Demo the app live (~10 min)

- Open `index.html` in your browser (or share your screen from a hosted version).
- Fill in the form with a concrete example (e.g., "grading assistant for a 10th-grade composition class").
- Walk through the generated configuration — point out each section and explain why it's useful.
- Click "Copy to clipboard" and paste the result into ChatGPT or Claude live to show the output.

### 3. Use an LLM to scaffold and edit the app together (~20 min)

- Open Claude or ChatGPT alongside VS Code (or your editor of choice).
- Paste in the recommended facilitator prompt (see below) and show participants how to:
  - Add a new field to the form.
  - Change the placeholder text.
  - Edit the generated output for a specific use case.
- Emphasize: *"You don't have to understand every line. You just have to be able to read it, ask good questions, and test the result."*

### 4. Participants customize their own copy (~20–30 min)

- Walk participants through forking the repo (or downloading the ZIP).
- Give them a specific customization task, e.g.:
  - *"Change the placeholder text in the 'assistant role' field to something relevant to your own context."*
  - *"Edit the `teacher` template in `script.js` to add one more example prompt that fits your class."*
- Circulate and help as needed. Encourage use of an AI coding assistant for any confusion.

### 5. Share and next steps (~10 min)

- Ask 2–3 participants to briefly share what they changed and why.
- Point people to the **README** for how to clone, commit, and push.
- Leave them with the "next steps" ideas from the README as homework.

---

## Recommended facilitator prompt for LLM iteration

Use this prompt (or adapt it) to demonstrate live AI-assisted code editing during the workshop. Paste it into Claude or ChatGPT with the contents of `script.js` appended at the end.

```
I have a beginner-friendly browser app called "Personalized Assistant Starter".
It's written in plain HTML, CSS, and vanilla JavaScript — no frameworks.

Here is the JavaScript file (script.js):

[PASTE THE CONTENTS OF script.js HERE]

Please help me do the following:
1. Add a new use-case type called "librarian" to the `templates` object.
2. Give it realistic inputItems, outputItems, and example prompts relevant to a school librarian.
3. Add a corresponding <option> to the dropdown in index.html.
4. Keep all comments in place and match the existing code style.

Explain each change you make in plain English so a beginner can follow along.
```

Feel free to substitute a different customization task (e.g., adding an export button, changing colors, adding a new output section) based on your audience's interests.

---

## Technical prerequisites for facilitators

- A GitHub account (free): https://github.com
- Git installed locally (for live cloning demo): https://git-scm.com/downloads
- VS Code (recommended editor, free): https://code.visualstudio.com/
- A Claude or ChatGPT account for the live AI demo

No Node.js, no npm, no build tools — just a text editor and a browser.

---

## How to reuse this repo in your own workshop

1. **Fork** this repo into your own GitHub account (click the Fork button at the top of the repo page).
2. Update the **footer** in `index.html` with your workshop name and your name.
3. Update the **Workshop credits** section in `README.md`.
4. Optionally, pre-fill the `templates` object in `script.js` with examples relevant to your audience's domain.
5. Share your fork's GitHub URL with participants so they can fork *your* version.

That's it! The app is designed to be reused with minimal setup.

---

## Tips for mixed-experience audiences

- **Absolute beginners:** Steer them toward Option A in the README (download ZIP, double-click). Don't require Git on day one.
- **Intermediate participants:** Encourage them to fork the repo and try making a small change, then commit and push.
- **More advanced participants:** Challenge them to add a new feature (export, localStorage list of saved configs, API integration) and share it with the group.
- **Everyone:** Encourage use of AI tools to explain code they don't understand. Normalize saying "I asked Claude to explain this line to me."

---

*This facilitator guide is part of the Personalized Assistant Starter workshop kit. Feel free to adapt it for your own use.*
