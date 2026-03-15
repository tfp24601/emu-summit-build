# 🤖 Personalized Assistant Starter

> **A simple browser-based starter app that helps you design your own AI assistant or micro-tool idea.**

No installation, no backend, no coding experience required — just open a file in your browser and go.

---

## 👋 Who this is for

This repo is for **beginners at an AI workshop** who may:

- Have **never written a line of code** before.
- Have **never used Git or GitHub** before.
- Want to take a working example and **adapt it to their own situation** — whether that's a grading helper for a class, a chore tracker for their kids, a study planner, or anything else.

If any of the steps below feel confusing, that's completely normal. Read the plain-English explanations in parentheses, ask a neighbor, or ask an AI tool like ChatGPT to explain it to you. You've got this! 🙌

---

## 🧩 What this app does

The **Personalized Assistant Starter** is a one-page web app that lives entirely in your browser. Here's what it lets you do:

- **Choose your role** (teacher, parent, student, professional, or other).
- **Describe your assistant's job** — for example, "grading assistant for my composition class" or "chore tracker coach for my kids".
- **Add some context** — like the name of your course, the chores you're tracking, or the topics you're studying.
- **Click a button** and instantly see a structured configuration summary with:
  - What your assistant does (Overview)
  - What information you need to give it
  - What outputs you can expect
  - Ready-to-use example prompts for ChatGPT, Claude, or any AI tool

**Example use cases:**

| Who | How they might use it |
|---|---|
| 🍎 Teacher | Define a grading helper for a composition class with rubric categories |
| 👨‍👩‍👧 Parent | Set up a chore/behavior tracker coach for their kids |
| 📚 Student | Create a study planner for an upcoming biology exam |
| 💼 Professional | Draft a workflow assistant for email, reporting, or project planning |

---

## 🔬 Live workshop context

We built this app together during a **live AI summit workshop** to show how large language models can help you quickly design and spin up browser-based tools — even if you've never coded before.

This repo is your **starting point**. During the workshop, we used an AI assistant to scaffold the initial code, talked through how it works, and showed you how to customize it for your own use case.

Take it home, make it yours, and keep building! 🚀

---

## ⚡ Quick start

You don't need to install anything to run this app. Choose the option that works best for you.

---

### Option A: Run it in your browser (no Git needed)

This is the easiest way to get started.

1. **Go to this repository page** on GitHub (you're probably already here!).
2. Click the green **Code** button near the top right of the file list.
3. Click **Download ZIP**.
4. Find the downloaded `.zip` file on your computer (usually in your **Downloads** folder) and **unzip it** (double-click on Mac; right-click → "Extract All" on Windows).
5. Open the unzipped folder. You'll see `index.html`, `style.css`, and `script.js`.
6. **Double-click `index.html`** — it will open in your default web browser.
7. That's it! The app is running. 🎉

---

### Option B: Clone the repo using Git

This option gives you a proper local copy that's easy to update and sync with GitHub later.

**What is Git?** Git is a free tool that tracks changes to files and lets you download ("clone") code from GitHub onto your computer. [Download Git here](https://git-scm.com/downloads) — the installer will guide you through setup.

1. **Install Git** if you haven't already: https://git-scm.com/downloads
2. **Open a terminal** (on Mac: search for "Terminal"; on Windows: search for "Command Prompt" or "PowerShell").
3. **Navigate to where you want to save the project.** For example, to put it on your Desktop:
   ```
   cd Desktop
   ```
   (`cd` stands for "change directory" — it's how you move between folders in a terminal.)
4. **Clone (download) the repository:**
   ```
   git clone https://github.com/tfp24601/emu-summit-build.git
   ```
5. **Move into the new folder:**
   ```
   cd emu-summit-build
   ```
6. **Open `index.html` in your browser** by double-clicking it in your file explorer, or open the whole folder in VS Code (a free code editor: https://code.visualstudio.com/) and use its built-in browser preview.

---

## 🍴 How to bring this into your own GitHub

Once you want to save your own changes, you'll need your own copy of the repository. There are two easy ways to do this.

---

### Option 1: Fork the repository (recommended for beginners)

**What is a fork?** A fork is like making a personal photocopy of someone else's notebook. You get your own copy that you can write in, and the original stays untouched.

1. Make sure you're **logged in to GitHub** (create a free account at https://github.com if you don't have one).
2. Go to this repository: `https://github.com/tfp24601/emu-summit-build`
3. Click the **Fork** button in the top-right corner of the page.
4. GitHub will ask where to fork it — choose **your own account**.
5. After a moment, you'll be on a page like `https://github.com/YOUR-USERNAME/emu-summit-build`. That's your personal copy!

**Now clone your fork to your computer:**

```
git clone https://github.com/YOUR-USERNAME/emu-summit-build.git
cd emu-summit-build
```

Replace `YOUR-USERNAME` with your actual GitHub username.

**Make changes, then save them back to GitHub:**

```
git add .
git commit -m "My first change — updated the placeholder text"
git push
```

- `git add .` — stages all changed files (tells Git "I want to save these").
- `git commit -m "..."` — takes a snapshot with a short message describing what you changed.
- `git push` — sends your changes up to GitHub so they're saved online.

---

### Option 2: Create a brand-new repo and copy the files

Use this if you'd rather start completely fresh under your own account name.

1. On GitHub, click the **+** icon in the top-right and choose **New repository**.
2. Give it a name (e.g., `my-assistant-starter`) and click **Create repository**.
3. Download the ZIP of this repo (see Option A above), unzip it, and copy the files into your new repo folder.
4. Run these commands in that folder:
   ```
   git init
   git add .
   git commit -m "Initial commit — my assistant starter"
   git remote add origin https://github.com/YOUR-USERNAME/my-assistant-starter.git
   git push -u origin main
   ```

---

## 🎨 How to customize the app for your own use case

The app is intentionally simple so that it's easy to edit. Here are some concrete things you can change.

### Change text labels and placeholder hints

Open `index.html` and look for the `<label>` tags and `placeholder="..."` attributes. For example:

```html
<!-- Change this placeholder to match your context: -->
<input
  type="text"
  id="assistantRole"
  placeholder="Describe the job you want your assistant to do…"
/>
```

Change `"Describe the job you want your assistant to do…"` to something more specific, like `"Describe your grading categories…"`.

### Change the generated output content

Open `script.js` and find the `templates` object near the top (around **line 93**). Each key (`teacher`, `parent`, `student`, etc.) contains three arrays:

```js
teacher: {
  inputItems: [
    'Course name and level (e.g., "10th grade Composition")',
    // Add or edit items here ↑
  ],
  outputItems: [ ... ],
  prompts: [ ... ],
},
```

Edit the strings inside these arrays to change what gets generated for each use-case type. You can also **add a new use-case type** by copying an existing block and giving it a new key.

### Add a new section to the output

In `index.html`, copy one of the existing `.card` blocks and give the new elements unique `id` values. Then in `script.js`, grab the new element with `document.getElementById()` and call `renderList()` on it inside `generateConfiguration()`.

### Change colors and fonts

Open `style.css` and look for the `:root { ... }` block near the top. It lists all the colors used in the app:

```css
:root {
  --color-primary: #4f46e5;   /* main accent color — change this! */
  --color-bg:      #f7f8fc;   /* page background */
  ...
}
```

Change any of those hex color codes to update the whole app's color scheme at once.

---

## 🤖 How this connects to AI tools like Claude or ChatGPT

The configuration this app generates isn't just for reading — it's a **ready-to-use starting prompt** for any AI tool.

Here's how to use it:

1. Fill in the form and click **Generate My Configuration**.
2. Click **Copy configuration to clipboard**.
3. Open [ChatGPT](https://chat.openai.com) or [Claude](https://claude.ai).
4. Paste the configuration as your first message (or as a "system prompt" if the tool supports it).
5. Start asking questions — the AI now has context about your role and goals.

**Want to go further? Try asking the AI to help you:**

- **Turn your configuration into a more detailed rubric** — "Based on this, help me build a full grading rubric for a 10-point writing assignment."
- **Build a prompt library** — "Give me 10 variations of these example prompts I can use week to week."
- **Extend the app itself** — "Here is my `script.js`. Add a button that exports the configuration as a `.txt` file." (Paste the file contents after that message.)

> 💡 This starter app is a **bridge**: it helps you clarify your idea in a structured way, which makes it much easier for an AI coding assistant to help you take the next step.

---

## 💡 Next steps / ideas to try

Once you're comfortable with the basics, here are some ways to extend the app:

- [ ] **Export to a text or JSON file** — add a button that downloads the configuration.
- [ ] **Save multiple configurations** — use `localStorage` to keep a list of previous configs you've built.
- [ ] **Add a theme switcher** — let users toggle between light and dark mode.
- [ ] **Add a "tone of voice" field** — e.g., "formal", "friendly", "encouraging".
- [ ] **Add an "age group" or "subject area" field** — to make prompts more specific.
- [ ] *(Advanced/optional)* **Connect to a real AI API** — use the [OpenAI API](https://platform.openai.com/docs) or [Anthropic API](https://docs.anthropic.com) to generate dynamic responses instead of fixed templates.

---

## 🏅 Workshop credits

| | |
|---|---|
| **Workshop** | [Workshop Name — update me] |
| **Facilitator** | [Your Name — update me] |
| **Website / contact** | [Your Website — update me] |
| **Date & location** | [Date and Location — update me] |

---

*Made with ❤️ for workshop participants who are just getting started. Every expert was once a beginner — keep going!*
