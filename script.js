const STORAGE_KEYS = {
  sourceText: "tilde-taller.source-text",
  memory: "tilde-taller.memory",
};

const SAMPLE_TEXT = [
  "como estas?",
  "tambien practicamos espanol con vocabulario como nino, pais, leccion, pinguino y grua.",
  "mi companera pregunto: que facil se vuelve la lectura aqui.",
].join("\n\n");

const SAFE_WORD_RULES = {
  tambien: { replacement: "también", category: "Lexical accent", reason: "Common adverb written with an accent.", confidence: 0.98 },
  aqui: { replacement: "aquí", category: "Lexical accent", reason: "Location adverb written with an accent.", confidence: 0.97 },
  alli: { replacement: "allí", category: "Lexical accent", reason: "Location adverb written with an accent.", confidence: 0.97 },
  ahi: { replacement: "ahí", category: "Lexical accent", reason: "Location adverb written with an accent.", confidence: 0.97 },
  asi: { replacement: "así", category: "Lexical accent", reason: "This adverb carries a written accent.", confidence: 0.97 },
  espanol: { replacement: "español", category: "Letter n tilde", reason: "Spanish language names need the letter ñ.", confidence: 0.99 },
  ingles: { replacement: "inglés", category: "Lexical accent", reason: "Language adjective with final written accent.", confidence: 0.97 },
  musica: { replacement: "música", category: "Lexical accent", reason: "This classroom word is stressed with an accent.", confidence: 0.95 },
  matematicas: { replacement: "matemáticas", category: "Lexical accent", reason: "This subject name requires a written accent.", confidence: 0.95 },
  gramatica: { replacement: "gramática", category: "Lexical accent", reason: "This classroom word requires a written accent.", confidence: 0.95 },
  leccion: { replacement: "lección", category: "Lexical accent", reason: "Nouns ending in -ción carry an accent.", confidence: 0.99 },
  cancion: { replacement: "canción", category: "Lexical accent", reason: "Nouns ending in -ción carry an accent.", confidence: 0.99 },
  oracion: { replacement: "oración", category: "Lexical accent", reason: "This noun requires a written accent.", confidence: 0.97 },
  comunicacion: { replacement: "comunicación", category: "Lexical accent", reason: "This noun requires a written accent.", confidence: 0.98 },
  informacion: { replacement: "información", category: "Lexical accent", reason: "This noun requires a written accent.", confidence: 0.98 },
  explicacion: { replacement: "explicación", category: "Lexical accent", reason: "This noun requires a written accent.", confidence: 0.98 },
  telefono: { replacement: "teléfono", category: "Lexical accent", reason: "This noun requires a written accent.", confidence: 0.96 },
  pelicula: { replacement: "película", category: "Lexical accent", reason: "This noun requires a written accent.", confidence: 0.96 },
  numero: { replacement: "número", category: "Lexical accent", reason: "This noun requires a written accent.", confidence: 0.96 },
  pagina: { replacement: "página", category: "Lexical accent", reason: "This noun requires a written accent.", confidence: 0.96 },
  arbol: { replacement: "árbol", category: "Lexical accent", reason: "This noun requires a written accent.", confidence: 0.95 },
  lapiz: { replacement: "lápiz", category: "Lexical accent", reason: "This noun requires a written accent.", confidence: 0.95 },
  facil: { replacement: "fácil", category: "Lexical accent", reason: "This adjective requires a written accent.", confidence: 0.96 },
  dificil: { replacement: "difícil", category: "Lexical accent", reason: "This adjective requires a written accent.", confidence: 0.96 },
  rapido: { replacement: "rápido", category: "Lexical accent", reason: "This adjective requires a written accent.", confidence: 0.95 },
  util: { replacement: "útil", category: "Lexical accent", reason: "This adjective requires a written accent.", confidence: 0.95 },
  ultimo: { replacement: "último", category: "Lexical accent", reason: "This adjective requires a written accent.", confidence: 0.96 },
  proximo: { replacement: "próximo", category: "Lexical accent", reason: "This adjective requires a written accent.", confidence: 0.96 },
  jovenes: { replacement: "jóvenes", category: "Lexical accent", reason: "This plural form requires a written accent.", confidence: 0.95 },
  examenes: { replacement: "exámenes", category: "Lexical accent", reason: "This plural form requires a written accent.", confidence: 0.95 },
  imagenes: { replacement: "imágenes", category: "Lexical accent", reason: "This plural form requires a written accent.", confidence: 0.95 },
  pais: { replacement: "país", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.98 },
  paises: { replacement: "países", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.98 },
  dia: { replacement: "día", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.95 },
  dias: { replacement: "días", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.95 },
  baul: { replacement: "baúl", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.98 },
  baules: { replacement: "baúles", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.98 },
  oido: { replacement: "oído", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.95 },
  oidos: { replacement: "oídos", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.95 },
  rio: { replacement: "río", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.95 },
  rios: { replacement: "ríos", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.95 },
  frio: { replacement: "frío", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.95 },
  fria: { replacement: "fría", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.95 },
  grua: { replacement: "grúa", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.98 },
  gruas: { replacement: "grúas", category: "Hiatus accent", reason: "The stressed hiatus requires a written accent.", confidence: 0.98 },
  senor: { replacement: "señor", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  senora: { replacement: "señora", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  senorita: { replacement: "señorita", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  nino: { replacement: "niño", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  nina: { replacement: "niña", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  ninos: { replacement: "niños", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  ninas: { replacement: "niñas", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  manana: { replacement: "mañana", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  companero: { replacement: "compañero", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  companera: { replacement: "compañera", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  companeros: { replacement: "compañeros", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  companeras: { replacement: "compañeras", category: "Letter n tilde", reason: "This word requires the letter ñ.", confidence: 0.99 },
  pinguino: { replacement: "pingüino", category: "Diaeresis", reason: "The syllable güi needs a diaeresis here.", confidence: 0.99 },
  pinguinos: { replacement: "pingüinos", category: "Diaeresis", reason: "The syllable güi needs a diaeresis here.", confidence: 0.99 },
  verguenza: { replacement: "vergüenza", category: "Diaeresis", reason: "The syllable güe needs a diaeresis here.", confidence: 0.99 },
  bilingue: { replacement: "bilingüe", category: "Diaeresis", reason: "The syllable güe needs a diaeresis here.", confidence: 0.99 },
  linguistica: { replacement: "lingüística", category: "Diaeresis", reason: "This academic term needs a diaeresis and an accent.", confidence: 0.99 },
};

const QUESTION_WORD_RULES = {
  que: "qué",
  quien: "quién",
  quienes: "quiénes",
  cual: "cuál",
  cuales: "cuáles",
  cuando: "cuándo",
  donde: "dónde",
  como: "cómo",
  cuanto: "cuánto",
  cuantos: "cuántos",
  cuanta: "cuánta",
  cuantas: "cuántas",
  adonde: "adónde",
};

const DIACRITICAL_RULES = {
  tu: { replacement: "tú", category: "Diacritical accent", reason: "Pronoun versus possessive determiner.", confidence: 0.45 },
  mi: { replacement: "mí", category: "Diacritical accent", reason: "Pronoun versus possessive determiner.", confidence: 0.42 },
  el: { replacement: "él", category: "Diacritical accent", reason: "Pronoun versus article.", confidence: 0.46 },
  si: { replacement: "sí", category: "Diacritical accent", reason: "Affirmation or pronoun versus conjunction.", confidence: 0.44 },
  te: { replacement: "té", category: "Diacritical accent", reason: "Noun versus pronoun.", confidence: 0.3 },
  se: { replacement: "sé", category: "Diacritical accent", reason: "Verb versus pronoun.", confidence: 0.3 },
  de: { replacement: "dé", category: "Diacritical accent", reason: "Verb versus preposition.", confidence: 0.28 },
  mas: { replacement: "más", category: "Diacritical accent", reason: "Adverb versus conjunction.", confidence: 0.82 },
  aun: { replacement: "aún", category: "Diacritical accent", reason: "Still versus even.", confidence: 0.36 },
};

const PREPOSITIONS = new Set(["a", "ante", "bajo", "con", "contra", "de", "desde", "en", "entre", "hacia", "hasta", "para", "por", "segun", "sin", "sobre", "tras"]);
const COMMON_VERBS = new Set([
  "eres", "esta", "estas", "está", "estás", "fue", "fui", "fueron", "seras", "serás", "vas", "van",
  "vienes", "viene", "vienen", "dices", "dice", "dicen", "sabes", "sabe", "saben", "puedes", "puede",
  "pueden", "quieres", "quiere", "quieren", "aprendes", "aprende", "aprenden", "lees", "lee", "leen",
  "practicas", "practica", "practican", "tienes", "tiene", "tienen", "hablas", "habla", "hablan",
]);

const state = {
  sourceText: "",
  correctedText: "",
  suggestions: [],
  memory: loadMemory(),
};

const dom = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  dom.sourceText = document.querySelector("#sourceText");
  dom.fileInput = document.querySelector("#fileInput");
  dom.sampleButton = document.querySelector("#sampleButton");
  dom.clearButton = document.querySelector("#clearButton");
  dom.analyzeButton = document.querySelector("#analyzeButton");
  dom.statusMessage = document.querySelector("#statusMessage");
  dom.originalPreview = document.querySelector("#originalPreview");
  dom.correctedPreview = document.querySelector("#correctedPreview");
  dom.exportPreview = document.querySelector("#exportPreview");
  dom.suggestionList = document.querySelector("#suggestionList");
  dom.queueSummary = document.querySelector("#queueSummary");
  dom.applyFlaggedButton = document.querySelector("#applyFlaggedButton");
  dom.resetReviewButton = document.querySelector("#resetReviewButton");
  dom.learnButton = document.querySelector("#learnButton");
  dom.memoryForm = document.querySelector("#memoryForm");
  dom.memorySource = document.querySelector("#memorySource");
  dom.memoryReplacement = document.querySelector("#memoryReplacement");
  dom.memoryNotes = document.querySelector("#memoryNotes");
  dom.memoryList = document.querySelector("#memoryList");
  dom.exportMemoryButton = document.querySelector("#exportMemoryButton");
  dom.memoryImportInput = document.querySelector("#memoryImportInput");
  dom.clearMemoryButton = document.querySelector("#clearMemoryButton");
  dom.copyButton = document.querySelector("#copyButton");
  dom.downloadButton = document.querySelector("#downloadButton");
  dom.suggestionCount = document.querySelector("#suggestionCount");
  dom.appliedCount = document.querySelector("#appliedCount");
  dom.memoryCount = document.querySelector("#memoryCount");

  bindEvents();
  restoreSavedText();
  renderMemory();

  if (state.sourceText.trim()) {
    analyzeText();
  } else {
    renderEmptyReview();
    renderSuggestionList();
    updateSummary();
    setStatus("Paste text or load the sample to begin.");
  }
}

function bindEvents() {
  dom.sourceText.addEventListener("input", handleSourceInput);
  dom.fileInput.addEventListener("change", handleFileUpload);
  dom.sampleButton.addEventListener("click", loadSample);
  dom.clearButton.addEventListener("click", clearAll);
  dom.analyzeButton.addEventListener("click", analyzeText);
  dom.applyFlaggedButton.addEventListener("click", applyAllFlagged);
  dom.resetReviewButton.addEventListener("click", resetReview);
  dom.learnButton.addEventListener("click", learnAcceptedChanges);
  dom.memoryForm.addEventListener("submit", handleMemorySubmit);
  dom.exportMemoryButton.addEventListener("click", exportMemory);
  dom.memoryImportInput.addEventListener("change", importMemory);
  dom.clearMemoryButton.addEventListener("click", clearMemory);
  dom.copyButton.addEventListener("click", copyCorrectedText);
  dom.downloadButton.addEventListener("click", downloadCorrectedText);
}

function restoreSavedText() {
  const savedText = localStorage.getItem(STORAGE_KEYS.sourceText);

  if (!savedText) {
    return;
  }

  state.sourceText = savedText;
  dom.sourceText.value = savedText;
}

function handleSourceInput(event) {
  state.sourceText = event.target.value;
  localStorage.setItem(STORAGE_KEYS.sourceText, state.sourceText);
}

function loadSample() {
  state.sourceText = SAMPLE_TEXT;
  dom.sourceText.value = SAMPLE_TEXT;
  localStorage.setItem(STORAGE_KEYS.sourceText, state.sourceText);
  analyzeText();
}

function clearAll() {
  state.sourceText = "";
  state.correctedText = "";
  state.suggestions = [];
  dom.sourceText.value = "";
  localStorage.removeItem(STORAGE_KEYS.sourceText);
  renderEmptyReview();
  renderSuggestionList();
  updateSummary();
  setStatus("Cleared the current draft.");
}

function handleFileUpload(event) {
  const [file] = event.target.files || [];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    const result = typeof reader.result === "string" ? reader.result : "";
    state.sourceText = result;
    dom.sourceText.value = result;
    localStorage.setItem(STORAGE_KEYS.sourceText, result);
    analyzeText();
    event.target.value = "";
  };

  reader.onerror = () => {
    setStatus("The selected file could not be read.");
    event.target.value = "";
  };

  reader.readAsText(file);
}

function analyzeText() {
  const text = dom.sourceText.value.trimEnd();
  state.sourceText = text;
  localStorage.setItem(STORAGE_KEYS.sourceText, state.sourceText);

  if (!text.trim()) {
    state.correctedText = "";
    state.suggestions = [];
    renderEmptyReview();
    renderSuggestionList();
    updateSummary();
    setStatus("Add some Spanish text before analyzing.");
    return;
  }

  state.suggestions = buildSuggestions(text);
  rebuildCorrectedText();
  renderReview();
  renderSuggestionList();
  updateSummary();

  const safeCount = state.suggestions.filter((suggestion) => suggestion.defaultAccepted).length;
  const flaggedCount = state.suggestions.length - safeCount;
  setStatus(`Analyzed ${countWords(text)} words. ${safeCount} safe fixes applied, ${flaggedCount} flagged for review.`);
}

function buildSuggestions(text) {
  const tokens = tokenizeWords(text);
  const suggestions = [];
  const memoryMap = buildMemoryMap(state.memory);

  tokens.forEach((token, tokenIndex) => {
    const key = token.text.toLowerCase();

    if (hasAccentOrSpecialMark(token.text)) {
      return;
    }

    const previousToken = tokens[tokenIndex - 1] || null;
    const nextToken = tokens[tokenIndex + 1] || null;
    const memoryEntry = memoryMap.get(key);

    if (memoryEntry && memoryEntry.replacement.toLowerCase() !== key) {
      suggestions.push(createSuggestion({
        text,
        token,
        replacement: applySourceCasing(token.text, memoryEntry.replacement),
        category: "Memory",
        reason: memoryEntry.notes || "Saved correction memory matched this word.",
        confidence: 1,
        accepted: true,
        source: "memory",
      }));
      return;
    }

    const safeRule = SAFE_WORD_RULES[key];

    if (safeRule) {
      suggestions.push(createSuggestion({
        text,
        token,
        replacement: applySourceCasing(token.text, safeRule.replacement),
        category: safeRule.category,
        reason: safeRule.reason,
        confidence: safeRule.confidence,
        accepted: true,
        source: "rule",
      }));
      return;
    }

    if (shouldAccentQuestionWord(token, text)) {
      const replacement = QUESTION_WORD_RULES[key];

      if (replacement) {
        suggestions.push(createSuggestion({
          text,
          token,
          replacement: applySourceCasing(token.text, replacement),
          category: "Question word",
          reason: "Direct questions and exclamations use accented interrogative words.",
          confidence: 0.92,
          accepted: true,
          source: "rule",
        }));
        return;
      }
    }

    const diacriticalRule = DIACRITICAL_RULES[key];

    if (!diacriticalRule) {
      return;
    }

    if (!shouldFlagDiacriticalWord(key, previousToken, nextToken)) {
      return;
    }

    suggestions.push(createSuggestion({
      text,
      token,
      replacement: applySourceCasing(token.text, diacriticalRule.replacement),
      category: diacriticalRule.category,
      reason: diacriticalRule.reason,
      confidence: diacriticalRule.confidence,
      accepted: diacriticalRule.confidence >= 0.8,
      source: "rule",
    }));
  });

  return suggestions.concat(buildOpeningPunctuationSuggestions(text)).sort(sortSuggestions);
}

function tokenizeWords(text) {
  const tokens = [];
  const regex = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    tokens.push({
      index: tokens.length,
      text: match[0],
      start: match.index,
      end: match.index + match[0].length,
    });
  }

  return tokens;
}

function createSuggestion({ text, token, replacement, category, reason, confidence, accepted, source, insertion = false, insertText = "" }) {
  const start = token.start;
  const end = insertion ? token.start : token.end;
  return {
    id: createId(),
    start,
    end,
    original: insertion ? "" : token.text,
    replacement: insertion ? insertText : replacement,
    category,
    reason,
    confidence,
    accepted,
    defaultAccepted: accepted,
    source,
    insertion,
    snippet: buildSnippet(text, start, end),
  };
}

function shouldAccentQuestionWord(token, text) {
  const key = token.text.toLowerCase();

  if (!QUESTION_WORD_RULES[key]) {
    return false;
  }

  const bounds = findClauseBounds(text, token.start, token.end);
  const clause = text.slice(bounds.start, bounds.end);
  return /[?¿!¡]/.test(clause);
}

function shouldFlagDiacriticalWord(key, previousToken, nextToken) {
  if (key === "mas") {
    return true;
  }

  const previous = previousToken ? previousToken.text.toLowerCase() : "";
  const next = nextToken ? nextToken.text.toLowerCase() : "";

  switch (key) {
    case "mi":
      return PREPOSITIONS.has(previous);
    case "tu":
    case "el":
      return COMMON_VERBS.has(next);
    case "si":
      return previous === "";
    case "aun":
      return next === "no" || next === "asi" || next === "así";
    case "de":
      return ["que", "quien", "quienes", "como"].includes(previous);
    case "se":
      return ["yo", "tu", "usted", "nosotros"].includes(previous) || ["claro", "firme", "amable"].includes(next);
    case "te":
      return ["el", "un", "este"].includes(previous);
    default:
      return true;
  }
}

function buildOpeningPunctuationSuggestions(text) {
  const suggestions = [];
  const terminalRegex = /[?!]/g;
  let match;

  while ((match = terminalRegex.exec(text)) !== null) {
    const closing = match[0];
    const closingIndex = match.index;
    const bounds = findClauseBounds(text, closingIndex, closingIndex + 1);
    const clause = text.slice(bounds.start, closingIndex + 1);
    const opening = closing === "?" ? "¿" : "¡";

    if (closing === "!" && clause.includes("?")) {
      continue;
    }

    if (clause.includes(opening)) {
      continue;
    }

    const insertAt = findOpeningInsertPosition(text, bounds.start);

    if (insertAt >= closingIndex) {
      continue;
    }

    suggestions.push({
      id: createId(),
      start: insertAt,
      end: insertAt,
      original: "",
      replacement: opening,
      category: "Opening punctuation",
      reason: `Spanish usually opens ${closing === "?" ? "questions" : "exclamations"} with ${opening}.`,
      confidence: 0.95,
      accepted: true,
      defaultAccepted: true,
      source: "rule",
      insertion: true,
      snippet: buildSnippet(text, insertAt, insertAt),
    });
  }

  return suggestions;
}

function findClauseBounds(text, startIndex, endIndex) {
  let start = 0;
  let end = text.length;

  for (let index = startIndex - 1; index >= 0; index -= 1) {
    if (/[.!?\n]/.test(text[index])) {
      start = index + 1;
      break;
    }
  }

  for (let index = endIndex; index < text.length; index += 1) {
    if (/[.!?\n]/.test(text[index])) {
      end = index + 1;
      break;
    }
  }

  return { start, end };
}

function findOpeningInsertPosition(text, startIndex) {
  let index = startIndex;

  while (index < text.length && /\s/.test(text[index])) {
    index += 1;
  }

  while (index < text.length && /["'([{“‘]/.test(text[index])) {
    index += 1;
  }

  return index;
}

function rebuildCorrectedText() {
  const acceptedSuggestions = state.suggestions.filter((suggestion) => suggestion.accepted).sort(sortSuggestions);
  let cursor = 0;
  let output = "";

  acceptedSuggestions.forEach((suggestion) => {
    if (suggestion.start < cursor) {
      return;
    }

    output += state.sourceText.slice(cursor, suggestion.start);
    output += suggestion.replacement;
    cursor = suggestion.end;
  });

  output += state.sourceText.slice(cursor);
  state.correctedText = output;
}

function renderReview() {
  const acceptedSuggestions = state.suggestions.filter((suggestion) => suggestion.accepted).sort(sortSuggestions);
  dom.originalPreview.classList.remove("empty-state");
  dom.correctedPreview.classList.remove("empty-state");
  dom.originalPreview.innerHTML = buildSourceMarkup(state.sourceText, acceptedSuggestions);
  dom.correctedPreview.innerHTML = buildCorrectedMarkup(state.sourceText, acceptedSuggestions);
  dom.exportPreview.value = state.correctedText;
}

function renderEmptyReview() {
  dom.originalPreview.classList.add("empty-state");
  dom.correctedPreview.classList.add("empty-state");
  dom.originalPreview.textContent = "Your imported text will appear here.";
  dom.correctedPreview.textContent = "Accepted corrections will be highlighted here.";
  dom.exportPreview.value = "";
}

function buildSourceMarkup(text, suggestions) {
  if (!text) {
    return "Your imported text will appear here.";
  }

  let cursor = 0;
  let html = "";

  suggestions.forEach((suggestion) => {
    html += escapeHtml(text.slice(cursor, suggestion.start));

    if (!suggestion.insertion) {
      html += `<mark class="diff diff-source">${escapeHtml(text.slice(suggestion.start, suggestion.end))}</mark>`;
    }

    cursor = suggestion.end;
  });

  html += escapeHtml(text.slice(cursor));
  return html;
}

function buildCorrectedMarkup(text, suggestions) {
  if (!text) {
    return "Accepted corrections will be highlighted here.";
  }

  let cursor = 0;
  let html = "";

  suggestions.forEach((suggestion) => {
    if (suggestion.start < cursor) {
      return;
    }

    html += escapeHtml(text.slice(cursor, suggestion.start));
    html += `<mark class="diff diff-corrected">${escapeHtml(suggestion.replacement)}</mark>`;
    cursor = suggestion.end;
  });

  html += escapeHtml(text.slice(cursor));
  return html;
}

function renderSuggestionList() {
  if (!state.suggestions.length) {
    dom.suggestionList.innerHTML = '<article class="suggestion-card"><p class="context-snippet">No corrections detected yet.</p></article>';
    dom.queueSummary.textContent = "No suggestions yet.";
    return;
  }

  const appliedCount = state.suggestions.filter((suggestion) => suggestion.accepted).length;
  const flaggedCount = state.suggestions.filter((suggestion) => !suggestion.accepted).length;
  dom.queueSummary.innerHTML = `
    <span class="pill">${state.suggestions.length} total suggestions</span>
    <span class="pill">${appliedCount} currently applied</span>
    <span class="pill">${flaggedCount} still held for review</span>
  `;

  dom.suggestionList.innerHTML = state.suggestions.map(renderSuggestionCard).join("");

  dom.suggestionList.querySelectorAll("[data-action='accept']").forEach((button) => {
    button.addEventListener("click", () => setSuggestionDecision(button.dataset.id, true));
  });

  dom.suggestionList.querySelectorAll("[data-action='reject']").forEach((button) => {
    button.addEventListener("click", () => setSuggestionDecision(button.dataset.id, false));
  });
}

function renderSuggestionCard(suggestion) {
  const decisionBadge = suggestion.accepted
    ? '<span class="badge safe">Applied</span>'
    : '<span class="badge flagged">Review needed</span>';
  const original = suggestion.original || "(insert)";
  const confidence = `${Math.round(suggestion.confidence * 100)}% confidence`;

  return `
    <article class="suggestion-card">
      <header>
        <div>
          <div class="pair"><span>${escapeHtml(original)}</span><strong>${escapeHtml(suggestion.replacement)}</strong></div>
          <div class="suggestion-meta">
            ${decisionBadge}
            <span class="pill">${escapeHtml(suggestion.category)}</span>
            <span class="pill">${escapeHtml(confidence)}</span>
          </div>
        </div>
      </header>
      <p class="context-snippet">${escapeHtml(suggestion.reason)}</p>
      <p class="context-snippet"><strong>Context:</strong> ${escapeHtml(suggestion.snippet)}</p>
      <div class="decision-actions">
        <button
          type="button"
          class="ghost-button decision-button ${suggestion.accepted ? "active accept" : ""}"
          data-action="accept"
          data-id="${escapeHtml(suggestion.id)}"
        >
          Apply
        </button>
        <button
          type="button"
          class="ghost-button decision-button ${!suggestion.accepted ? "active reject" : ""}"
          data-action="reject"
          data-id="${escapeHtml(suggestion.id)}"
        >
          Hold
        </button>
      </div>
    </article>
  `;
}

function setSuggestionDecision(id, accepted) {
  state.suggestions = state.suggestions.map((suggestion) => (
    suggestion.id === id
      ? { ...suggestion, accepted }
      : suggestion
  ));

  rebuildCorrectedText();
  renderReview();
  renderSuggestionList();
  updateSummary();
}

function applyAllFlagged() {
  if (!state.suggestions.length) {
    return;
  }

  state.suggestions = state.suggestions.map((suggestion) => ({ ...suggestion, accepted: true }));
  rebuildCorrectedText();
  renderReview();
  renderSuggestionList();
  updateSummary();
  setStatus("Applied every flagged suggestion so you can review the full corrected draft.");
}

function resetReview() {
  if (!state.suggestions.length) {
    return;
  }

  state.suggestions = state.suggestions.map((suggestion) => ({ ...suggestion, accepted: suggestion.defaultAccepted }));
  rebuildCorrectedText();
  renderReview();
  renderSuggestionList();
  updateSummary();
  setStatus("Restored the original review defaults.");
}

function learnAcceptedChanges() {
  const learnable = state.suggestions.filter((suggestion) => suggestion.accepted && !suggestion.insertion);

  if (!learnable.length) {
    setStatus("There are no accepted word changes to learn yet.");
    return;
  }

  learnable.forEach((suggestion) => {
    upsertMemoryEntry({
      source: suggestion.original,
      replacement: suggestion.replacement,
      notes: `${suggestion.category}: ${suggestion.reason}`,
    });
  });

  renderMemory();
  analyzeText();
  setStatus(`Learned ${learnable.length} accepted changes into local memory.`);
}

function handleMemorySubmit(event) {
  event.preventDefault();

  const source = dom.memorySource.value.trim();
  const replacement = dom.memoryReplacement.value.trim();
  const notes = dom.memoryNotes.value.trim();

  if (!source || !replacement) {
    setStatus("Both memory fields are required.");
    return;
  }

  upsertMemoryEntry({ source, replacement, notes });
  dom.memoryForm.reset();
  renderMemory();

  if (state.sourceText.trim()) {
    analyzeText();
  }

  setStatus(`Saved ${source} -> ${replacement} to local correction memory.`);
}

function upsertMemoryEntry({ source, replacement, notes }) {
  const normalizedSource = source.toLowerCase();
  const existingIndex = state.memory.findIndex((entry) => entry.source.toLowerCase() === normalizedSource);
  const timestamp = new Date().toISOString();
  const nextEntry = {
    id: existingIndex >= 0 ? state.memory[existingIndex].id : createId(),
    source,
    replacement,
    notes,
    createdAt: existingIndex >= 0 ? state.memory[existingIndex].createdAt : timestamp,
    updatedAt: timestamp,
  };

  if (existingIndex >= 0) {
    state.memory[existingIndex] = nextEntry;
  } else {
    state.memory.unshift(nextEntry);
  }

  persistMemory();
}

function renderMemory() {
  dom.memoryCount.textContent = String(state.memory.length);

  if (!state.memory.length) {
    dom.memoryList.innerHTML = '<article class="memory-card"><p class="memory-notes">No memory entries yet. Accept corrections or add one manually here.</p></article>';
    return;
  }

  dom.memoryList.innerHTML = state.memory.map((entry) => `
    <article class="memory-card">
      <header>
        <div>
          <div class="pair"><span>${escapeHtml(entry.source)}</span><strong>${escapeHtml(entry.replacement)}</strong></div>
          <div class="memory-meta">
            <span class="pill">Updated ${escapeHtml(formatDate(entry.updatedAt))}</span>
          </div>
        </div>
        <button type="button" class="ghost-button" data-memory-remove="${escapeHtml(entry.id)}">Remove</button>
      </header>
      <p class="memory-notes">${escapeHtml(entry.notes || "No notes saved.")}</p>
    </article>
  `).join("");

  dom.memoryList.querySelectorAll("[data-memory-remove]").forEach((button) => {
    button.addEventListener("click", () => removeMemoryEntry(button.dataset.memoryRemove));
  });
}

function removeMemoryEntry(id) {
  state.memory = state.memory.filter((entry) => entry.id !== id);
  persistMemory();
  renderMemory();

  if (state.sourceText.trim()) {
    analyzeText();
  }

  setStatus("Removed one memory entry.");
}

function exportMemory() {
  const blob = new Blob([JSON.stringify(state.memory, null, 2)], { type: "application/json" });
  downloadBlob(blob, "tilde-taller-memory.json");
  setStatus("Exported correction memory as JSON.");
}

function importMemory(event) {
  const [file] = event.target.files || [];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || "[]"));

      if (!Array.isArray(parsed)) {
        throw new Error("Memory import must be an array.");
      }

      parsed.forEach((entry) => {
        if (entry && entry.source && entry.replacement) {
          upsertMemoryEntry({
            source: String(entry.source),
            replacement: String(entry.replacement),
            notes: String(entry.notes || ""),
          });
        }
      });

      renderMemory();

      if (state.sourceText.trim()) {
        analyzeText();
      }

      setStatus(`Imported ${parsed.length} memory entries.`);
    } catch (error) {
      setStatus("That memory file could not be imported.");
    } finally {
      event.target.value = "";
    }
  };

  reader.onerror = () => {
    setStatus("That memory file could not be read.");
    event.target.value = "";
  };

  reader.readAsText(file);
}

function clearMemory() {
  if (!state.memory.length) {
    return;
  }

  state.memory = [];
  persistMemory();
  renderMemory();

  if (state.sourceText.trim()) {
    analyzeText();
  }

  setStatus("Cleared local correction memory.");
}

async function copyCorrectedText() {
  if (!state.correctedText.trim()) {
    setStatus("There is no corrected text to copy yet.");
    return;
  }

  try {
    await navigator.clipboard.writeText(state.correctedText);
    setStatus("Copied corrected text to the clipboard.");
  } catch (error) {
    fallbackCopy(state.correctedText);
    setStatus("Copied corrected text with a fallback clipboard method.");
  }
}

function downloadCorrectedText() {
  if (!state.correctedText.trim()) {
    setStatus("There is no corrected text to download yet.");
    return;
  }

  const blob = new Blob([state.correctedText], { type: "text/plain;charset=utf-8" });
  downloadBlob(blob, "tilde-taller-corrected.txt");
  setStatus("Downloaded the corrected text as a plain-text file.");
}

function updateSummary() {
  dom.suggestionCount.textContent = String(state.suggestions.length);
  dom.appliedCount.textContent = String(state.suggestions.filter((suggestion) => suggestion.accepted).length);
  dom.memoryCount.textContent = String(state.memory.length);
}

function buildMemoryMap(memoryEntries) {
  return new Map(memoryEntries.map((entry) => [entry.source.toLowerCase(), entry]));
}

function loadMemory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.memory);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function persistMemory() {
  localStorage.setItem(STORAGE_KEYS.memory, JSON.stringify(state.memory));
}

function setStatus(message) {
  dom.statusMessage.textContent = message;
}

function buildSnippet(text, start, end) {
  const before = text.slice(Math.max(0, start - 24), start).trimStart();
  const focus = text.slice(start, end);
  const after = text.slice(end, Math.min(text.length, end + 24)).trimEnd();
  const middle = focus ? `[${focus}]` : "[insert]";
  return `${before}${middle}${after}`;
}

function formatDate(isoString) {
  if (!isoString) {
    return "today";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(isoString));
}

function countWords(text) {
  const matches = text.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g);
  return matches ? matches.length : 0;
}

function sortSuggestions(left, right) {
  if (left.start === right.start) {
    return Number(right.insertion) - Number(left.insertion);
  }

  return left.start - right.start;
}

function hasAccentOrSpecialMark(word) {
  return /[áéíóúüñÁÉÍÓÚÜÑ]/.test(word);
}

function applySourceCasing(source, replacement) {
  if (source === source.toUpperCase()) {
    return replacement.toUpperCase();
  }

  if (source[0] === source[0].toUpperCase()) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }

  return replacement;
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createId() {
  return globalThis.crypto && typeof globalThis.crypto.randomUUID === "function"
    ? globalThis.crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function fallbackCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "true");
  area.style.position = "absolute";
  area.style.left = "-9999px";
  document.body.append(area);
  area.select();
  document.execCommand("copy");
  area.remove();
}
