# Prompt-to-App Builder

> A simple browser-based workshop app that helps people turn an app idea into a clear build prompt for an AI coder assistant.

No installation, no backend, and no coding experience required to try it. Open the files in a browser, fill in the prompt blocks, and copy the generated build prompt into your coding assistant.

---

## Who this is for

This repo is designed for workshop participants who may:

- Have never written code before.
- Be brand new to GitHub or Git.
- Want a visual way to understand what a strong app-building prompt looks like.
- Want to use an AI coder assistant to build a first version of a browser-based tool.

---

## What this app does

The app is a single-page prompt builder that runs entirely in the browser. It helps participants break a build prompt into clear parts:

- **Your role**: who you are or what perspective you are bringing.
- **AI role**: what kind of expertise you want from the coding assistant.
- **App goal**: the simple browser-based app you want built.
- **Context and details**: the audience, situation, or constraints.
- **Must-haves**: the pieces the app needs in version one.

As people type, the app:

- Updates a **live build-prompt preview**.
- Saves their entries in `localStorage`.
- Lets them **copy one finished prompt** and paste it into an AI coder assistant.

---

## Workshop context

This repo was adapted for a live workshop focused on showing that prompting is not magic. It is structured communication.

Instead of asking people to design "an assistant," this app helps them describe:

- who they are,
- what kind of coding help they want,
- what app they want built,
- and what details matter.

That makes the final prompt much easier for an AI coder assistant to act on.

---

## Quick start

You do not need to install anything to use the app.

### Option A: Open it directly in your browser

1. Go to the repository on GitHub.
2. Click **Code**.
3. Click **Download ZIP**.
4. Unzip the downloaded folder.
5. Open the folder and double-click `index.html`.

The app will open in your default browser.

### Option B: Clone the repo with Git

1. Install Git if needed: https://git-scm.com/downloads
2. Open a terminal.
3. Move to the folder where you want the project:

```bash
cd Desktop
```

4. Clone the repository:

```bash
git clone https://github.com/tfp24601/emu-summit-build.git
```

5. Move into the project:

```bash
cd emu-summit-build
```

6. Open `index.html` in your browser.

### Option C: Serve it locally on a simple local URL

If you prefer viewing the app through `http://127.0.0.1`, you can run a lightweight static server:

```bash
python -m http.server 8000
```

Then open [http://127.0.0.1:8000](http://127.0.0.1:8000).

---

## How to use the app

1. Enter **your role**.
2. Describe what role the **AI coder assistant** should take on.
3. Describe the **browser-based app** you want built.
4. Add any **context and details** that matter.
5. List the **must-have pieces** for version one.
6. Review the live prompt preview.
7. Click **Copy Prompt**.
8. Paste the prompt into your AI coder assistant and ask them to build the first version.

The generated prompt already asks the coding assistant to:

- keep the app browser-based,
- prefer lightweight tools,
- make reasonable assumptions when details are missing,
- and explain what to customize next.

---

## How this connects to AI coding assistants

The output of this app is not a configuration summary anymore. It is a **build prompt**.

After copying the prompt, paste it into your preferred AI coder assistant and continue with follow-up requests like:

- "Build the first version in plain HTML, CSS, and JavaScript."
- "Explain the structure like I am a beginner."
- "Add one improvement at a time so I can follow the changes."
- "Show me what to edit if I want to adapt this for a different audience."

This makes the app a bridge between idea formation and implementation.

---

## Bring it into your own GitHub

Once you want to save your own changes, you should make your own copy of the repo.

### Option 1: Fork the repository

1. Log in to GitHub.
2. Open `https://github.com/tfp24601/emu-summit-build`.
3. Click **Fork**.
4. Choose your own account.
5. Clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/emu-summit-build.git
cd emu-summit-build
```

6. Make changes and push them:

```bash
git add .
git commit -m "Update prompt builder for my workshop"
git push
```

### Option 2: Create a new repo and copy the files

1. Create a new repository in your GitHub account.
2. Download this repo as a ZIP.
3. Copy the files into your new repo folder.
4. Run:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

---

## Customize the app

The app is intentionally small so it is easy to adjust for your audience.

### Change the wording or labels

Open `index.html` and edit:

- the header copy,
- field labels,
- helper text,
- placeholders,
- and footer text.

This is the fastest way to tailor the app for a different workshop or use case.

### Change the generated prompt

Open `script.js` and look at the `buildPrompt()` function.

That function controls:

- the opening instruction for the coding assistant,
- the section headings in the generated prompt,
- the built-in build requirements,
- and the closing instruction about what to customize next.

If you want a different prompt style, this is the main place to change.

### Change the default fallback bullets

Also in `script.js`, the arrays near the top provide fallback content when the user leaves fields blank:

- `defaultContextItems`
- `defaultMustHaveItems`

Update those arrays if you want different starter guidance.

### Change the look and feel

Open `style.css` and start with the `:root` block near the top.

That section controls:

- colors,
- typography,
- border radius,
- shadows,
- and page width.

### Add another prompt block

If you want one more field, common additions include:

- target audience,
- tone or style,
- sample input,
- output format,
- or success criteria.

To add one:

1. Copy one of the prompt blocks in `index.html`.
2. Give the new input a unique `id`.
3. Grab that element in `script.js`.
4. Save its value to `localStorage`.
5. Add the new value into `buildPrompt()`.

---

## Files in this repo

- `index.html`: page structure and form fields
- `style.css`: layout, colors, and visual style
- `script.js`: live prompt generation, local storage, and copy behavior
- `docs/for-workshop-facilitators.md`: facilitator notes for running this in a session

---

## Ideas for next steps

- Add a **target audience** field.
- Add a **sample input / sample output** section.
- Let users switch between **short prompt** and **detailed prompt** modes.
- Export the prompt as a `.txt` file.
- Save multiple prompt drafts in `localStorage`.
- Host the app on GitHub Pages for easier sharing before a workshop.

---

## Workshop credits

| | |
|---|---|
| **Workshop** | AI Builder Workshop |
| **Facilitator** | Ben Linford |
| **Website / contact** | https://sharedsapience.com/consultation-personalized-help/ |
| **Date & location** | 2026 |

---

Built for workshop participants who want a practical way to move from idea to prompt to working app.
