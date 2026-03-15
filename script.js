// ================================================
// PERSONALIZED ASSISTANT STARTER — script.js
// ================================================
// This file controls everything the app "does":
//   1. Reads what the user typed into the form.
//   2. Builds a configuration summary from those inputs.
//   3. Displays the summary in the results section.
//   4. Saves the inputs to localStorage so they survive a page refresh.
//   5. Lets the user copy the result to the clipboard.
//
// Every major block has a plain-English comment above it.
// Feel free to read, edit, and experiment!
// ================================================


// ------------------------------------------------
// SECTION 1: GRAB REFERENCES TO HTML ELEMENTS
// ------------------------------------------------
// We use document.getElementById() to "find" each element
// on the page by the id="..." attribute we gave it in index.html.
// Storing them in variables means we don't have to search
// the page every single time we need them.

const useCaseTypeSelect  = document.getElementById('useCaseType');
const assistantRoleInput = document.getElementById('assistantRole');
const contextDetailsArea = document.getElementById('contextDetails');
const generateBtn        = document.getElementById('generateBtn');
const resultsSection     = document.getElementById('resultsSection');
const copyBtn            = document.getElementById('copyBtn');
const copyFeedback       = document.getElementById('copyFeedback');

// Output elements — these live inside the results section
const outputOverview = document.getElementById('outputOverview');
const outputInputs   = document.getElementById('outputInputs');
const outputOutputs  = document.getElementById('outputOutputs');
const outputPrompts  = document.getElementById('outputPrompts');


// ------------------------------------------------
// SECTION 2: RESTORE SAVED VALUES FROM LOCALSTORAGE
// ------------------------------------------------
// localStorage is like a tiny notebook built into your browser.
// We can write key-value pairs to it and they'll still be there
// even after the user closes the tab and comes back later.
//
// Here, when the page first loads, we check whether we saved
// any values from a previous visit and, if so, put them back
// into the form fields automatically.

function restoreSavedValues() {
  const savedRole    = localStorage.getItem('assistantRole');
  const savedContext = localStorage.getItem('contextDetails');
  const savedType    = localStorage.getItem('useCaseType');

  if (savedRole)    assistantRoleInput.value = savedRole;
  if (savedContext) contextDetailsArea.value = savedContext;
  if (savedType)    useCaseTypeSelect.value  = savedType;
}

// Call the function right away when the page loads
restoreSavedValues();


// ------------------------------------------------
// SECTION 3: SAVE FORM VALUES AS THE USER TYPES
// ------------------------------------------------
// The 'input' event fires every time the user types a character
// or selects an option. We listen for it on each field and
// immediately save the new value to localStorage.

assistantRoleInput.addEventListener('input', function () {
  localStorage.setItem('assistantRole', assistantRoleInput.value);
});

contextDetailsArea.addEventListener('input', function () {
  localStorage.setItem('contextDetails', contextDetailsArea.value);
});

useCaseTypeSelect.addEventListener('change', function () {
  localStorage.setItem('useCaseType', useCaseTypeSelect.value);
});


// ------------------------------------------------
// SECTION 4: HELPER — BUILD TEMPLATE DATA
// ------------------------------------------------
// This object holds "template" content for each use-case type.
// When the user picks "teacher", we pull teacher-specific
// suggestions for inputs, outputs, and example prompts.
// You can freely edit this object to change the content
// that gets generated, or add new use-case types.

const templates = {
  teacher: {
    inputItems: [
      'Course name and level (e.g., "10th grade Composition")',
      'Grading categories and their point weights',
      'Assignment description or rubric criteria',
      'Specific writing skills you want to emphasize',
    ],
    outputItems: [
      'Rubric-aligned feedback on student work',
      'Suggested comments for common writing issues',
      'Grade estimates based on your criteria',
      'Revision suggestions for the student',
    ],
    prompts: [
      '"Using the rubric I provided, give feedback on this student essay: [paste essay here]"',
      '"Suggest three encouraging comments I could leave on a draft that needs work on transitions."',
      '"Generate five example prompts I can give students to help them revise their introductions."',
    ],
  },

  parent: {
    inputItems: [
      "Your child's name and age",
      'The chores or behaviors you are tracking',
      'Your reward or consequence system',
      'How often you want to check in (daily, weekly)',
    ],
    outputItems: [
      'A weekly chore chart template',
      'Suggested reward milestones',
      'Positive reinforcement scripts for common situations',
      'A quick-check summary of what got done this week',
    ],
    prompts: [
      '"My 8-year-old needs to do [chores]. Help me write a fun chore chart they will actually want to use."',
      '"Suggest three ways I can positively motivate a child who keeps forgetting to make their bed."',
      '"Write a short script I can use to explain our new reward system to my kids in an encouraging way."',
    ],
  },

  student: {
    inputItems: [
      'Course name and current topic',
      'Upcoming exam date or assignment deadline',
      'Topics or concepts you find most confusing',
      'How much time you have available each day to study',
    ],
    outputItems: [
      'A personalized study schedule',
      'A list of key concepts to review in priority order',
      'Practice questions on difficult topics',
      'Flashcard prompts for memorization',
    ],
    prompts: [
      '"I have a biology exam on [topic] in one week and two hours per day to study. Build me a study plan."',
      '"Explain [difficult concept] to me as if I have never heard of it before, using a simple analogy."',
      '"Give me ten practice questions on [topic] with answers so I can quiz myself."',
    ],
  },

  professional: {
    inputItems: [
      'Your role or job title',
      'The specific task or workflow you want help with',
      'Any constraints (tone, format, audience)',
      'Tools or systems you use (e.g., email, spreadsheets)',
    ],
    outputItems: [
      'Draft emails or messages in your preferred tone',
      'Structured summaries or reports',
      'Step-by-step process checklists',
      'Meeting agenda templates',
    ],
    prompts: [
      '"Draft a professional email to a client explaining a project delay, keeping a calm and solutions-focused tone."',
      '"Summarize this meeting transcript into three bullet-point action items: [paste transcript]"',
      '"Create a one-page onboarding checklist for a new team member joining my [department] team."',
    ],
  },

  other: {
    inputItems: [
      'Who will use this assistant',
      'The main goal or task it should help with',
      'Any important context, constraints, or preferences',
      "How you'll know if the output is useful",
    ],
    outputItems: [
      'Tailored responses based on your context',
      'Suggestions and ideas specific to your situation',
      'Step-by-step guidance when needed',
      'Examples or templates you can adapt',
    ],
    prompts: [
      '"Based on my context, help me [describe your goal] by giving me [type of output]."',
      '"What information do you need from me to help with [task]? Ask me one question at a time."',
      '"Here is my situation: [describe context]. What three things should I do first?"',
    ],
  },
};

// Fallback template used when no use-case type is selected
const defaultTemplate = templates.other;


// ------------------------------------------------
// SECTION 5: HELPER — BUILD THE OVERVIEW TEXT
// ------------------------------------------------
// This function returns a plain-English overview paragraph
// based on whatever the user typed in.
//
// We use template literals (the backtick ` characters) to
// embed variables directly inside a string — this is a
// clean way to build text that changes based on user input.

function buildOverviewText(role, context, typeLabel) {
  const roleText    = role.trim()    || 'a custom assistant';
  const contextText = context.trim() || 'the context you described';
  const typePart    = typeLabel      ? ` for a ${typeLabel}` : '';

  return (
    `This is a starter configuration${typePart} built around the role: ` +
    `"${roleText}". It is designed to help you work with an AI tool using ` +
    `${contextText}. Use this summary as a starting point — paste it into ` +
    `ChatGPT or Claude as a system prompt, or share it with an AI coding ` +
    `assistant to help you build a more complete app.`
  );
}


// ------------------------------------------------
// SECTION 6: HELPER — RENDER A LIST INTO THE DOM
// ------------------------------------------------
// The results section shows several bullet-point lists.
// Rather than repeating the same code three times, we
// write one helper function and call it for each list.
//
// Parameters:
//   ulElement — the <ul> HTML element we want to fill
//   items     — an array of strings to turn into <li> items

function renderList(ulElement, items) {
  // Clear any old content before adding new items
  ulElement.innerHTML = '';

  items.forEach(function (itemText) {
    const li = document.createElement('li');
    li.textContent = itemText;
    ulElement.appendChild(li);
  });
}


// ------------------------------------------------
// SECTION 7: MAIN FUNCTION — GENERATE CONFIGURATION
// ------------------------------------------------
// This is the function that runs when the user clicks
// "Generate My Configuration".
//
// It:
//   1. Reads all the form values.
//   2. Picks the right template based on the dropdown.
//   3. Builds each section of the output.
//   4. Shows the results section (which starts hidden).

function generateConfiguration() {
  // Step 1: Read form values
  const selectedType   = useCaseTypeSelect.value;
  const role           = assistantRoleInput.value;
  const context        = contextDetailsArea.value;

  // Step 2: Decide which template to use.
  // If the user picked a type from the dropdown, use that template.
  // Otherwise fall back to the "other" / default template.
  const template  = templates[selectedType] || defaultTemplate;

  // Get a human-readable label for the selected type
  // (we read it from the <option> element's text content)
  const selectedOption = useCaseTypeSelect.options[useCaseTypeSelect.selectedIndex];
  const typeLabel = selectedType ? selectedOption.text : '';

  // Step 3: Build each section of the output

  // Overview: a paragraph describing the assistant
  outputOverview.textContent = buildOverviewText(role, context, typeLabel);

  // Inputs: what the user needs to provide to the AI
  renderList(outputInputs, template.inputItems);

  // Outputs: what the AI will produce
  renderList(outputOutputs, template.outputItems);

  // Prompts: ready-to-use example prompts
  renderList(outputPrompts, template.prompts);

  // Step 4: Show the results section
  // The "hidden" attribute makes an element invisible in HTML.
  // Removing it makes the element appear.
  resultsSection.removeAttribute('hidden');

  // Scroll smoothly down so the results are visible
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// ------------------------------------------------
// SECTION 8: COPY TO CLIPBOARD
// ------------------------------------------------
// When the user clicks "Copy configuration to clipboard",
// we assemble all the generated text into one big string
// and use the Clipboard API to copy it.
//
// The Clipboard API returns a Promise (an async operation).
// We use .then() and .catch() to handle success and failure.

function copyConfigurationToClipboard() {
  // Build a plain-text version of the configuration
  const overview = outputOverview.textContent;
  const inputs   = Array.from(outputInputs.querySelectorAll('li'))
                     .map(li => '  → ' + li.textContent)
                     .join('\n');
  const outputs  = Array.from(outputOutputs.querySelectorAll('li'))
                     .map(li => '  → ' + li.textContent)
                     .join('\n');
  const prompts  = Array.from(outputPrompts.querySelectorAll('li'))
                     .map(li => '  → ' + li.textContent)
                     .join('\n');

  const fullText = [
    '=== ASSISTANT CONFIGURATION ===',
    '',
    '📋 OVERVIEW',
    overview,
    '',
    '📥 INPUTS YOU PROVIDE',
    inputs,
    '',
    '📤 OUTPUTS YOU GET',
    outputs,
    '',
    '💬 EXAMPLE PROMPTS',
    prompts,
  ].join('\n');

  // navigator.clipboard is the modern, secure way to copy text
  navigator.clipboard.writeText(fullText)
    .then(function () {
      // Success! Show a short confirmation message
      copyFeedback.textContent = '✅ Copied to clipboard!';
      // Clear the message after 3 seconds so it doesn't linger
      setTimeout(function () {
        copyFeedback.textContent = '';
      }, 3000);
    })
    .catch(function () {
      // Something went wrong (e.g., browser permissions)
      copyFeedback.textContent = '⚠️ Copy failed — try selecting and copying manually.';
    });
}


// ------------------------------------------------
// SECTION 9: ATTACH EVENT LISTENERS TO BUTTONS
// ------------------------------------------------
// An event listener "listens" for something to happen
// (like a button click) and then runs a function when it does.

generateBtn.addEventListener('click', generateConfiguration);
copyBtn.addEventListener('click', copyConfigurationToClipboard);
