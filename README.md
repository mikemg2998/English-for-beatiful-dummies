# English For Beautiful Dummies

Everyday British English for a Spanish speaker living in Malta (A2–B1). A static, installable web app: no account, no server, works offline.

## What's inside

| File | Purpose |
|---|---|
| `index.html` | Page shell |
| `styles.css` | Design (white, sun yellow, tangerine orange). Phone and desktop layouts |
| `app.js` | All app logic: lessons, exercises, spaced repetition, speaking, progress |
| `content.js` | **All lessons.** Edit this to add content |
| `pron.js` | Pronunciation guide for tricky words (respelled for Spanish speakers) |
| `grammar.js` | **Grammar section:** the 12 tenses plus *be going to*, tense comparisons, "which tense is it?" sentences and irregular verbs |
| `tricky.js` | Data for "almost the same" options: sound-alike words, typical mistakes of Spanish speakers, curated gap sentences for connectors and phrasal verbs |
| `visual.js` | Visual units drawn in SVG: prepositions of place, British time, in/on/at, comparatives with buildings, quantities, tense timelines |
| `sw.js` | Offline support (network first, cache fallback) |
| `manifest.webmanifest`, `icons/` | Install as an app on phone and desktop |

## How updates reach her

The service worker fetches files from the network first and only falls back to the cache when offline. Any change pushed to the site is picked up the next time she opens the app with a connection. New lessons get a "Nueva" badge and a "¡Novedades!" notice.

## Adding lessons

1. Append lesson objects to `LESSONS` in `content.js`, following the existing shape:
   - `phrases`: `[english, spanish, tip]` (7 per lesson)
   - `words`: `[english, spanish, 1 if British-specific]` (8)
   - `dialogue`: `[speaker, english, spanish]` (6 lines, two speakers; use `"You"` for her role)
   - `quiz`: `[kind, prompt, [correct, wrong, wrong, wrong], why the right one is right, [why wrong 1, why wrong 2, why wrong 3]]` (5; kind is `translate`, `natural`, `complete` or `meaning`). Wrong options should be near misses (a typical mistake, a false friend, a literal translation), not obviously absurd answers
   - `scen`: `work`, `meet`, `daily` or `social`; work lessons also need `sub`: `job`, `igaming` or `office`
   - Optional `req`: the exact text of one of her lesson requests, so the app marks that request as ready
2. Bump `VERSION` at the top of `content.js`.
3. If you change `sw.js` itself, bump `CACHE` too.

## Adding grammar content

Everything lives in `grammar.js`; explanations are in Spanish, examples in British English.

- A tense has `form` (affirmative / negative / question: formula + two examples), `uses`, `signals`, `tricks`, `mistakes`, optional `spelling`, a timeline key `tl`, and `ex` (exercises).
- Exercise formats in `ex` (also used by `compare`):
  - `['g', 'She ___ (work) here.', 'works', [three wrong options], why]` choose the form
  - `['t', 'She ___ (work) here.', ['works'], spanish, why]` type the form (contractions, capitals and punctuation are tolerated)
  - `['o', english, spanish]` put the words in order
  - `['s', situation in Spanish, right sentence, [two wrong], why]` what would you say?
  - `['f', right sentence, [two wrong], why]` spot the correct one
- `which`: `[sentence, tenseId]`, only sentences with one clear verb.
- `irregular`: `[base, past, participle, spanish, group]`; `irrAlt` lists other accepted spellings (e.g. *learned*), which are never shown as wrong options.

Bump `VERSION` in `content.js` after editing so the update notice appears.

## How wrong options are built

Every multiple-choice question explains the chosen wrong option, the right one, and the others.

- Hand-written questions (lessons, grammar, connector and phrasal verb gaps) carry their own explanation per option.
- Generated questions (listening, translation, vocabulary) take the right sentence and change one small thing: a sound-alike word (soup / soap), a typical Spanish-speaker mistake (say me, I'm agree, in Monday), a missing -s, a tense, a negation, word order, a missing word. Each change comes with its own explanation. The rules live in `mutations()` in `app.js`; the word lists in `tricky.js`.
- Listening questions only use changes you can hear; reading questions also use spelling and homophones.

## Features

- Visual units: learn with pictures, play (choose the picture, place the sweet, read the clock, type the time) and describe the pictures aloud
- Grammar: the 12 tenses plus *going to*, each with idea + timeline, structure, uses, signal words, tricks, typical mistakes, exercises and speaking; 7 comparisons of tenses that get confused; 74 irregular verbs grouped by pattern; games (which tense is it?, mixed tenses, 60-second rounds)
- Lessons in five steps: learn phrases, listen to a dialogue, words, exercises, speaking (phrases + role-play of the dialogue)
- Every English word is tappable: hear it, slow playback, pronunciation hint
- Endless practice generated from lesson content: word order, listening, translation, vocabulary, typing
- Spaced repetition (1, 3, 7, 14, 30 days) and a mistakes bank
- Speaking with the microphone (Web Speech API, Chrome and Safari); typing or keyboard dictation as fallback
- "¿Qué situación quieres practicar?": searches existing lessons and lets her send a request for a new one
- Progress stored on the device; transfer between devices with a copy/paste code

## Hosting

Any static host works. GitHub Pages: repository Settings → Pages → Deploy from a branch → `main` / root.
