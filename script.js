const userRoleInput = document.getElementById('userRole');
const aiRoleInput = document.getElementById('aiRole');
const appIdeaArea = document.getElementById('appIdea');
const contextDetailsArea = document.getElementById('contextDetails');
const mustHavesArea = document.getElementById('mustHaves');
const promptOutput = document.getElementById('promptOutput');
const copyBtn = document.getElementById('copyBtn');
const copyFeedback = document.getElementById('copyFeedback');

const storageKeys = {
  userRole: 'promptBuilder.userRole',
  aiRole: 'promptBuilder.aiRole',
  appIdea: 'promptBuilder.appIdea',
  contextDetails: 'promptBuilder.contextDetails',
  mustHaves: 'promptBuilder.mustHaves',
};

const defaultContextItems = [
  'The audience, setting, or real-world scenario the app should fit.',
  'Any examples, inputs, or constraints the app needs to handle.',
];

const defaultMustHaveItems = [
  'One clear core workflow the user can complete in the browser.',
  'A simple, understandable interface with helpful labels.',
  'An output, summary, or result the user can immediately use.',
];

function restoreSavedValues() {
  userRoleInput.value = localStorage.getItem(storageKeys.userRole) || '';
  aiRoleInput.value = localStorage.getItem(storageKeys.aiRole) || '';
  appIdeaArea.value = localStorage.getItem(storageKeys.appIdea) || '';
  contextDetailsArea.value = localStorage.getItem(storageKeys.contextDetails) || '';
  mustHavesArea.value = localStorage.getItem(storageKeys.mustHaves) || '';
}

function saveValue(key, value) {
  localStorage.setItem(key, value);
}

function getUserRoleText() {
  return userRoleInput.value.trim() || '[describe your role]';
}

function toBulletItems(text, fallbackItems) {
  const items = text
    .split(/\r?\n|;/)
    .map(function (item) {
      return item.trim();
    })
    .filter(Boolean);

  return items.length ? items : fallbackItems;
}

function buildPrompt() {
  const userRole = getUserRoleText();
  const aiRole =
    aiRoleInput.value.trim() || '[describe the expertise the AI should bring]';
  const appIdea =
    appIdeaArea.value.trim() ||
    '[describe the browser-based app you want built]';
  const contextItems = toBulletItems(
    contextDetailsArea.value,
    defaultContextItems
  );
  const mustHaveItems = toBulletItems(
    mustHavesArea.value,
    defaultMustHaveItems
  );

  return [
    'Act as ' + aiRole + ' while helping me build this app.',
    '',
    'My role:',
    userRole,
    '',
    'What I want you to build:',
    appIdea,
    '',
    'Context and details:',
    ...contextItems.map(function (item) {
      return '- ' + item;
    }),
    '',
    'Must-have pieces:',
    ...mustHaveItems.map(function (item) {
      return '- ' + item;
    }),
    '',
    'Build requirements:',
    '- Make this a simple browser-based app.',
    '- Prefer HTML, CSS, and JavaScript unless another lightweight stack is clearly better.',
    '- Keep the interface clear, beginner-friendly, and usable on desktop and mobile.',
    '- Make reasonable assumptions when details are missing and note those assumptions briefly.',
    '- Return a working first version plus the main files needed to run locally.',
    '',
    'After building the app, explain what to customize next so I can adapt it to my own audience.',
  ].join('\n');
}

function updatePrompt() {
  promptOutput.textContent = buildPrompt();
}

function handleFieldUpdate(key, value) {
  saveValue(key, value);
  copyFeedback.textContent = '';
  updatePrompt();
}

function copyPromptToClipboard() {
  navigator.clipboard
    .writeText(promptOutput.textContent)
    .then(function () {
      copyFeedback.textContent = 'Copied prompt to clipboard.';

      setTimeout(function () {
        copyFeedback.textContent = '';
      }, 2500);
    })
    .catch(function () {
      copyFeedback.textContent = 'Copy failed. Select the prompt and copy it manually.';
    });
}

restoreSavedValues();
updatePrompt();

userRoleInput.addEventListener('input', function () {
  handleFieldUpdate(storageKeys.userRole, userRoleInput.value);
});

aiRoleInput.addEventListener('input', function () {
  handleFieldUpdate(storageKeys.aiRole, aiRoleInput.value);
});

appIdeaArea.addEventListener('input', function () {
  handleFieldUpdate(storageKeys.appIdea, appIdeaArea.value);
});

contextDetailsArea.addEventListener('input', function () {
  handleFieldUpdate(storageKeys.contextDetails, contextDetailsArea.value);
});

mustHavesArea.addEventListener('input', function () {
  handleFieldUpdate(storageKeys.mustHaves, mustHavesArea.value);
});

copyBtn.addEventListener('click', copyPromptToClipboard);
