# For Workshop Facilitators

> Use this guide if you want to reuse or adapt this repository for your own workshop, classroom, or training session.

---

## What this repo is

The **Prompt-to-App Builder** is a deliberately simple browser app that helps participants see prompt structure in a visual way.

Instead of generating an "assistant configuration," the app now helps people build a prompt for an **AI coder assistant** by asking for:

- their role,
- the AI role,
- the app goal,
- context and details,
- and the must-have pieces.

The app then generates a live build prompt that participants can copy into a coding assistant.

This makes the repo useful for workshops where the goal is to help people move from:

**idea -> structured prompt -> first working app**

The app is designed to be:

- **beginner-friendly**: no install or account required to open it
- **easy to live-code**: plain HTML, CSS, and JavaScript
- **easy to fork**: participants can adapt the repo quickly

---

## Suggested run of show (60-90 minutes)

### 1. Set the stage (10 minutes)

- Ask participants what small browser-based tool would actually help them.
- Collect examples from different contexts like teaching, parenting, ministry, student life, administration, or small business.
- Frame the session around one idea: strong prompts are structured, not mysterious.

### 2. Demo the app live (10 minutes)

- Open `index.html` in the browser.
- Fill in the five prompt blocks with a concrete example.
- Point out how the build prompt updates live as you type.
- Click **Copy Prompt**.
- Paste the result into your AI coder assistant and ask them to build version one.

### 3. Show AI-assisted iteration on the code (15-20 minutes)

- Open the project in VS Code or another editor.
- Show `index.html`, `script.js`, and `style.css`.
- Use your coding assistant to make one small improvement live, such as:
  - adding a new field,
  - changing the prompt wording,
  - adjusting the visual design,
  - or exporting the prompt to a file.
- Emphasize that participants do not need to understand every line before they can start making useful changes.

### 4. Let participants customize their own copy (20-30 minutes)

- Have them fork or download the repo.
- Give them a concrete task, such as:
  - changing placeholders to match their audience,
  - adding a target audience field,
  - or adjusting the generated prompt to fit their app idea.
- Encourage them to ask their coding assistant to explain anything confusing.

### 5. Share out and close (10 minutes)

- Invite a few participants to show the prompt they built.
- Ask what changed once they made their prompt more specific.
- Point them back to the README for setup, forking, and customization ideas.

---

## Recommended facilitator prompt for live editing

Use a prompt like this when you want to demonstrate how to improve the app during the session:

```text
I have a beginner-friendly browser app called "Prompt-to-App Builder."
It is written in plain HTML, CSS, and vanilla JavaScript with no frameworks.

The app helps workshop participants build a prompt for an AI coder assistant.
Right now it has fields for:
- my role
- AI role
- app goal
- context and details
- must-have pieces

It also shows a live prompt preview and lets users copy the finished prompt.

Please help me add a new field called "Target audience."

Requirements:
1. Add the new input to index.html.
2. Save and restore the field with localStorage in script.js.
3. Include the new value in the generated prompt.
4. Keep the code beginner-friendly and easy to explain live.
5. Explain each change in plain English.
```

That example is better aligned with the current version of the repo than the old "use-case templates" workflow.

---

## Technical prerequisites for facilitators

- A GitHub account
- Git installed locally: https://git-scm.com/downloads
- A text editor such as VS Code: https://code.visualstudio.com/
- A browser
- Access to an AI coder assistant for the live demo

No Node.js, package manager, or backend setup is required.

If you want to serve the files on a local URL during the workshop, a simple command like this is enough:

```bash
python -m http.server 8000
```

---

## How to adapt this repo for your own workshop

1. Fork the repo into your own GitHub account.
2. Update the header and footer text in `index.html`.
3. Update the workshop credits in `README.md`.
4. Adjust the prompt language in `script.js` so it matches your audience.
5. Optionally change the colors and layout in `style.css`.
6. Share your forked repo or a hosted version with participants.

If your audience works in a specific domain, consider pre-customizing:

- placeholder examples,
- fallback bullet points,
- and the wording inside `buildPrompt()`.

---

## Tips for mixed-experience groups

- **Beginners**: steer them toward downloading the ZIP and double-clicking `index.html`.
- **Intermediate participants**: encourage them to fork the repo and make one small change.
- **Advanced participants**: challenge them to add a feature like prompt export, saved drafts, or GitHub Pages deployment.
- **Everyone**: normalize asking a coding assistant to explain code in plain English.

---

## Good extension ideas for workshop follow-up

- Add a target audience field.
- Add a sample input field.
- Add prompt mode toggles like "quick draft" vs. "detailed brief."
- Save multiple prompts in the browser.
- Add a button that downloads the generated prompt as a text file.
- Publish the app with GitHub Pages so participants can share it easily.

---

This facilitator guide is part of the Prompt-to-App Builder workshop kit and is intended to be adapted.
