/* English For Beautiful Dummies — app logic. No account, no AI: everything runs in the browser and works offline. */
'use strict';

/* ---------- icons ---------- */
const P = {
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/>',
  book:'<path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2 2 2 0 0 0 2 2h14"/><path d="M8 7h8M8 11h5"/>',
  bars:'<path d="M3 21h18M6 17v-5M11 17V5M16 17V9"/>',
  layers:'<path d="M12 3 2 8l10 5 10-5z"/><path d="M2 13l10 5 10-5"/>',
  speaker:'<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
  flame:'<path d="M12 2c1 3.6 5.5 5.6 5.5 11a5.5 5.5 0 0 1-11 0c0-2.3 1.1-4 2.3-5.1.1 2.1 1.1 3.2 2.2 3.2C11 8 10 5 12 2z"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  right:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  left:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  mark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
  spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/>',
  case:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
  chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5.1A8 8 0 1 1 21 12z"/>',
  bag:'<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  people:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
  mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>',
  stop:'<rect x="6" y="6" width="12" height="12" rx="2"/>',
  bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  refresh:'<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>',
  shuffle:'<path d="M3 7h3.5l10 10H21M3 17h3.5l3-3M14 10l3-3h4M18 4l3 3-3 3M18 14l3 3-3 3"/>',
  alert:'<path d="M12 3.5 2.5 20h19z"/><path d="M12 10v4.5M12 17.2v.3"/>',
  trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  send:'<path d="M4 12l16-8-6 16-2.5-6.5z"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  pencil:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/>',
  ear:'<path d="M7 9a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0"/><path d="M10 9a2 2 0 0 1 4 0"/>',
  download:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  plus:'<path d="M12 5v14M5 12h14"/>'
};
const ic = (n, cls='') => `<svg class="ic ${n==='flame'?'fill ':''}${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n]||''}</svg>`;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tw = t => String(t ?? '').split(/([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’\-]*)/).map((p,i) => i % 2 ? `<span class="w" data-w="${esc(p)}">${esc(p)}</span>` : esc(p)).join('');
function shuffle(a){ for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
const uniq = a => [...new Set(a)];
const arr = v => Array.isArray(v) ? v : [];
const wc = s => String(s).split(/\s+/).filter(Boolean).length;
const pick1 = a => a[Math.floor(Math.random()*a.length)];

/* ---------- content ---------- */
const C = window.CHEERS_CONTENT || {version:'0', scen:[], lessons:[], tools:{}};
const PRON = window.CHEERS_PRON || {};
const SCEN = C.scen, LESSONS = C.lessons, TOOLS = C.tools;
const getLesson = id => LESSONS.find(l => l.id === id);
const scenOf = L => SCEN.find(s => s.id === L.scen) || {name:'Tema', en:'', icon:'spark'};
const groupKey = L => L.scen + (L.sub ? '/' + L.sub : '');
const SUB_LABEL = {job:'Looking for a job', igaming:'iGaming', office:'En la oficina'};
const areaName = L => (L.sub && SUB_LABEL[L.sub]) || scenOf(L).name;
/* recommended order: round-robin across groups, job search first */
const GROUPS = ['work/job','work/igaming','daily','social','work/office','meet'];
const ORDER = (() => { const g = GROUPS.map(k => LESSONS.filter(l => groupKey(l) === k)); const out = []; for (let i=0; g.some(x => x[i]); i++) g.forEach(x => { if (x[i]) out.push(x[i].id); }); LESSONS.forEach(l => { if (!out.includes(l.id)) out.push(l.id); }); return out; })();
const VOCAB = (() => { const m = {}; LESSONS.forEach(l => l.words.forEach(w => { const k = w[0].toLowerCase(); if (!m[k]) m[k] = w[1]; })); return m; })();
const KIND = {translate:'Traduce al inglés', natural:'Elige la respuesta natural', complete:'Completa la frase', meaning:'¿Qué significa?', order:'Ordena la frase en inglés', listen:'Escucha y elige lo que oíste', type:'Escríbelo en inglés'};
const DAYS = ['L','M','X','J','V','S','D'];
const STEPS = [
  {name:'Aprende',  how:'Escucha cada frase y repítela en voz alta. Toca cualquier palabra para oírla sola.'},
  {name:'Escucha',  how:'Escucha el diálogo completo. Intenta entenderlo antes de activar la traducción.'},
  {name:'Palabras', how:'Toca cada palabra para oír cómo suena.'},
  {name:'Practica', how:'Ejercicios cortos. Si fallas, te explicamos por qué y volverá en tu repaso.'},
  {name:'Habla',    how:'Di las frases en voz alta y luego haz el diálogo. Te corregimos palabra por palabra.'}
];

/* ---------- saved progress (this device) ---------- */
const KEY = 'cheers-english';
const fresh = () => ({v:3, name:'', done:{}, days:{}, saved:[], srs:{}, mistakes:[], requests:[], known:null, rate:1, q:0, c:0, lastVersion:'', updatedAt:0, installHidden:false});
let S = fresh();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch(e) {}
function save(){ S.updatedAt = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {} }
const pad = n => String(n).padStart(2,'0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const today = () => iso(new Date());
const addDays = n => { const d = new Date(); d.setDate(d.getDate()+n); return iso(d); };
function day(k = today()){ return S.days[k] || (S.days[k] = {l:0,q:0,p:0,s:0}); }
const active = k => !!(S.days[k] && (S.days[k].q > 0 || S.days[k].l > 0 || S.days[k].s > 0));
function streak(){ let n = 0; const d = new Date(); if (!active(iso(d))) d.setDate(d.getDate()-1); while (active(iso(d))) { n++; d.setDate(d.getDate()-1); } return n; }
function last7(){ const t = {l:0,q:0,p:0,s:0}; const d = new Date(); for (let i=0;i<7;i++){ const x = S.days[iso(d)]; if (x){ t.l+=x.l||0; t.q+=x.q||0; t.p+=x.p||0; t.s+=x.s||0; } d.setDate(d.getDate()-1); } return t; }
const isSaved = en => S.saved.some(s => s[0] === en);
const nextLesson = () => { const id = ORDER.find(i => !S.done[i]); return id ? getLesson(id) : null; };
/* new lessons since her last visit get a badge */
if (!S.known) { S.known = LESSONS.map(l => l.id); save(); }
const isNew = L => !S.known.includes(L.id);

/* ---------- spaced repetition ---------- */
const BOX = [0,1,3,7,14,30];
function srsTouch(id, ok){ if (!id) return; const it = S.srs[id] || {b:0}; it.b = ok ? Math.min(5, (it.b||0) + 1) : 0; it.d = addDays(ok ? BOX[it.b] : 0); S.srs[id] = it; }
function srsAddLesson(L){ L.phrases.forEach((_,i) => { const id = `p:${L.id}:${i}`; if (!S.srs[id]) S.srs[id] = {b:0, d:addDays(1)}; }); L.words.forEach((_,i) => { const id = `w:${L.id}:${i}`; if (!S.srs[id]) S.srs[id] = {b:0, d:addDays(1)}; }); }
const dueIds = () => Object.entries(S.srs).filter(([id,v]) => v.d <= today() && resolveId(id)).map(([id]) => id);
function resolveId(id){ const [t, lid, ix] = String(id).split(':'); const L = getLesson(lid); if (!L) return null; const list = t === 'p' ? L.phrases : t === 'w' ? L.words : null; const item = list && list[Number(ix)]; return item ? {t, L, item} : null; }
function poolIds(type){ const done = LESSONS.filter(l => S.done[l.id]); const src = done.length >= 2 ? done : LESSONS; const out = []; src.forEach(L => { if (type !== 'w') L.phrases.forEach((_,i) => out.push(`p:${L.id}:${i}`)); if (type !== 'p') L.words.forEach((_,i) => out.push(`w:${L.id}:${i}`)); }); return out; }
const ALL_PHRASES = LESSONS.flatMap(l => l.phrases.map(p => p[0]));
const ALL_WORDS = uniq(LESSONS.flatMap(l => l.words.map(w => w[0])));
const ALL_WORDS_ES = uniq(LESSONS.flatMap(l => l.words.map(w => w[1])));
function distract(pool, target, n){ const t = target.toLowerCase(); const tw0 = wc(target); const cands = shuffle(pool.filter(x => x.toLowerCase() !== t)); const near = cands.filter(x => Math.abs(wc(x) - tw0) <= 3); return uniq([...near, ...cands]).slice(0, n); }
function exFromId(id, hint){
  const r = resolveId(id); if (!r) return null;
  if (r.t === 'p') {
    const [en, es, tip] = r.item; const n = wc(en); const kinds = ['pick'];
    if (n >= 3 && n <= 11) kinds.push('order');
    if (TTS) kinds.push('listen');
    if (n <= 9) kinds.push('type');
    const k = hint && kinds.includes(hint) ? hint : pick1(kinds);
    if (k === 'order') return {k:'order', en, es, id};
    if (k === 'listen') return {k:'listen', en, es, opts:[en, ...distract(ALL_PHRASES, en, 3)], id};
    if (k === 'type') return {k:'type', en, es, id};
    return {k:'mc', kind:'translate', prompt:`«${es}»`, opts:[en, ...distract(ALL_PHRASES, en, 3)], explain: tip || '', id};
  }
  const [en, es] = r.item; const roll = Math.random();
  if (hint === 'listen' && TTS) return {k:'listen', en, es, opts:[en, ...distract(ALL_WORDS, en, 3)], id};
  if (roll < .45) return {k:'mc', kind:'meaning', prompt:en, opts:[es, ...distract(ALL_WORDS_ES, es, 3)], explain:'', id};
  if (roll < .85 || !TTS) return {k:'mc', kind:'translate', prompt:`«${es}»`, opts:[en, ...distract(ALL_WORDS, en, 3)], explain:'', id};
  return {k:'listen', en, es, opts:[en, ...distract(ALL_WORDS, en, 3)], id};
}

/* ---------- voice (British English, works offline with device voices) ---------- */
const TTS = typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined';
let voices = [];
function loadVoices(){ try { voices = speechSynthesis.getVoices() || []; } catch(e) {} }
if (TTS) { loadVoices(); try { speechSynthesis.onvoiceschanged = loadVoices; } catch(e) {} }
function gbVoice(){
  const gb = voices.filter(v => /en[-_]GB/i.test(v.lang)); const pool = navigator.onLine ? gb : gb.filter(v => v.localService);
  const list = pool.length ? pool : gb;
  return list.find(v => /natural|premium|enhanced|serena|daniel|kate|google/i.test(v.name)) || list[0] || voices.find(v => /^en/i.test(v.lang));
}
function utter(t, rate){ const u = new SpeechSynthesisUtterance(t); u.lang = 'en-GB'; const v = gbVoice(); if (v) u.voice = v; u.rate = rate || S.rate; return u; }
function speak(t, rate){ if (!TTS || !t) return; try { speechSynthesis.cancel(); speechSynthesis.speak(utter(t, rate)); } catch(e) {} }
function speakAll(lines){ if (!TTS) return; try { speechSynthesis.cancel(); lines.forEach(l => speechSynthesis.speak(utter(l))); } catch(e) {} }
function hush(){ if (TTS) try { speechSynthesis.cancel(); } catch(e) {} }
const play = (t, cls='icon-btn') => TTS ? `<button class="${cls}" data-act="say" data-say="${esc(t)}" aria-label="Escuchar">${ic('speaker')}</button>` : '';
const playSlow = t => TTS ? `<button class="slow" data-act="say-slow" data-say="${esc(t)}" aria-label="Escuchar despacio">Lento</button>` : '';

/* ---------- microphone (speech recognition) ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
let REC = null;
function startRec(onText, onDone){
  if (!SR) return false;
  abortRec(); hush();
  let r; try { r = new SR(); } catch(e) { return false; }
  r.lang = 'en-GB'; r.interimResults = true; r.continuous = false; r.maxAlternatives = 1;
  let fin = '', mid = '', err = '';
  r.onresult = e => { fin = ''; mid = ''; for (let i=0;i<e.results.length;i++){ const t = e.results[i][0].transcript; if (e.results[i].isFinal) fin += t + ' '; else mid += t + ' '; } onText((fin + mid).trim()); };
  r.onerror = e => { err = e.error || 'error'; };
  r.onend = () => { if (REC === r) REC = null; onDone((fin || mid).trim(), err); };
  try { r.start(); } catch(e) { return false; }
  REC = r; return true;
}
function stopRec(){ if (REC) try { REC.stop(); } catch(e) {} }
function abortRec(){ if (REC) { const r = REC; REC = null; try { r.onend = null; r.abort(); } catch(e) {} } }
const MIC_ERR = {
  'not-allowed':'No hay permiso para usar el micrófono. Actívalo en los ajustes del navegador o escribe la frase.',
  'service-not-allowed':'Este navegador no deja usar el micrófono aquí. Escribe la frase o usa el dictado del teclado.',
  'no-speech':'No te oí. Toca el micrófono y habla cerca del teléfono.',
  'audio-capture':'No se encontró ningún micrófono.',
  'network':'El reconocimiento de voz necesita internet en este navegador. Escribe la frase mientras tanto.'
};

/* ---------- compare what she said with the target ---------- */
const CONTR = {"i'm":"i am","you're":"you are","we're":"we are","they're":"they are","it's":"it is","that's":"that is","there's":"there is","what's":"what is","how's":"how is","he's":"he is","she's":"she is","i've":"i have","you've":"you have","we've":"we have","i'll":"i will","you'll":"you will","we'll":"we will","it'll":"it will","i'd":"i would","you'd":"you would","we'd":"we would","don't":"do not","doesn't":"does not","didn't":"did not","can't":"cannot","won't":"will not","isn't":"is not","aren't":"are not","wasn't":"was not","haven't":"have not","couldn't":"could not","shouldn't":"should not","wouldn't":"would not","let's":"let us","name's":"name is","four's":"four is","monday's":"monday is","printer's":"printer is","he's":"he is"};
const NUMS = {'0':'zero','1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine','10':'ten','11':'eleven','12':'twelve','15':'fifteen','20':'twenty','30':'thirty'};
function norm(s){
  return String(s).toLowerCase().replace(/[’`]/g,"'").replace(/-/g,' ').replace(/[^a-z0-9' ]+/g,' ').split(/\s+/).filter(Boolean)
    .flatMap(t => { t = t.replace(/^'+|'+$/g,''); if (CONTR[t]) return CONTR[t].split(' '); if (t === 'okay') return ['ok']; if (NUMS[t]) return [NUMS[t]]; return t ? [t] : []; });
}
function compare(target, said){
  const T = norm(target), H = norm(said), m = T.length, n = H.length;
  const dp = Array.from({length:m+1}, () => new Array(n+1).fill(0));
  for (let i=m-1;i>=0;i--) for (let j=n-1;j>=0;j--) dp[i][j] = T[i] === H[j] ? dp[i+1][j+1] + 1 : Math.max(dp[i+1][j], dp[i][j+1]);
  const hit = new Array(m).fill(false); let i = 0, j = 0;
  while (i < m && j < n) { if (T[i] === H[j]) { hit[i] = true; i++; j++; } else if (dp[i+1][j] >= dp[i][j+1]) i++; else j++; }
  const setH = new Set(H); const present = T.map(t => setH.has(t));
  const words = String(target).split(/\s+/).filter(Boolean); let k = 0;
  const disp = words.map(w => { const tk = norm(w); const h = !tk.length || tk.every((_,x) => hit[k+x]); const p = tk.length && tk.every((_,x) => present[k+x]); k += tk.length; return {w, cls: h ? 'ok' : p ? 'moved' : 'miss'}; });
  const missed = disp.filter(d => d.cls === 'miss').map(d => d.w.replace(/[.,!?¿¡;:…"“”]/g,''));
  const orderIssue = disp.some(d => d.cls === 'moved');
  const score = Math.round(hit.filter(Boolean).length / Math.max(1, m) * 100);
  return {disp, missed, orderIssue, score};
}
function wordTip(w){
  const k = String(w).toLowerCase().replace(/[^a-z']/g,''); const d = PRON[k];
  if (d) return {word:w, sounds:d[0], tip:d[1] || ''};
  let tip;
  if (/^s[ptkcmnlwq]/.test(k)) tip = 'No añadas una «e» al principio: empieza directo con «s».';
  else if (/th/.test(k)) tip = 'Para la «th», pon la punta de la lengua entre los dientes.';
  else if (/^h/.test(k)) tip = 'La «h» inglesa sí suena: es un soplo suave, como una «j» muy ligera.';
  else if (/v/.test(k)) tip = 'La «v» inglesa: dientes de arriba sobre el labio de abajo, no como «b».';
  else if (/^w/.test(k)) tip = 'La «w» suena como una «u» rápida al empezar.';
  else if (/^j|^g[ei]/.test(k)) tip = 'Esta «j» o «g» suena «dy», con la lengua pegada arriba.';
  else if (/ed$/.test(k)) tip = 'La terminación «-ed» casi nunca es «ed»: suena «t», «d» o «id».';
  else if (/[^aeiouy]$/.test(k)) tip = 'Pronuncia el final de la palabra; en español tendemos a cortarlo.';
  else tip = 'Escúchala en lento y repítela marcando cada sílaba.';
  return {word:w, sounds:'', tip};
}
function coachHTML(res, target){
  const tips = uniq(res.missed.map(w => w.toLowerCase())).slice(0,3).map(w => wordTip(w));
  const msg = res.score >= 90 && !res.orderIssue ? '¡Excelente! Se te entendió muy bien.' : res.score >= 60 ? 'Muy bien. Revisa las palabras marcadas.' : 'Vamos otra vez, despacio. Escucha primero y repite.';
  const color = res.score >= 90 ? 'var(--good-bg)' : res.score >= 60 ? 'var(--move-bg)' : 'var(--bad-bg)';
  return `<div class="coach" style="margin-top:14px"><div class="score-line"><span class="ring num" style="background:${color}">${res.score}%</span><div><b>${msg}</b><p class="note">Así se entendió cada palabra:</p></div></div>
    <div class="heard">${res.disp.map(d => `<span class="${d.cls} w" data-w="${esc(d.w.replace(/[.,!?¿¡;:…"“”]/g,''))}">${esc(d.w)}</span>`).join('')}</div>
    <div class="legend"><span><i style="background:var(--good-bg)"></i>Bien dicha</span><span><i style="background:var(--move-bg)"></i>En otro orden</span><span><i style="background:var(--bad-bg)"></i>No se entendió</span></div>
    ${tips.map(t => `<div class="tipw">${play(t.word,'say')}<div><b>${esc(t.word)}</b>${t.sounds ? ` · <span class="sounds">suena «${esc(t.sounds)}»</span>` : ''}<p>${esc(t.tip)}</p></div></div>`).join('')}
    ${res.orderIssue ? `<p><b>Orden de las palabras:</b> dijiste las palabras, pero en otro orden. En inglés el orden es fijo; repite la frase tal cual: <span class="ctx">${tw(target)}</span></p>` : ''}</div>`;
}

/* ---------- UI state ---------- */
const st = {view:'today', lessonId:null, step:0, card:0, revealed:{}, showTr:false, quiz:null, speak:null, dlg:null, practice:null, tool:'connectors', find:{q:'', results:null}, word:null, confirmReset:false, importOpen:false, importErr:'', toast:''};
const mq = window.matchMedia('(max-width: 899px)');
const isM = () => mq.matches;
try { mq.addEventListener('change', () => rr()); } catch(e) {}
let installEvt = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; if (st.view === 'today' || st.view === 'progress') rr(); });
const standalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const IOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

/* ---------- exercises ---------- */
const toRaw = q => ({k:'mc', kind:q[0], prompt:q[1], opts:q[2], explain:q[3]});
const rawId = r => r.id || (r.k === 'mc' ? 'mc:' + r.prompt : r.k + ':' + r.en);
function mkItem(raw){
  if (raw.k === 'order') {
    const words = raw.en.replace(/[.,!?¿¡;:…]/g,'').split(/\s+/).filter(Boolean);
    const tiles = words.map((w,i) => ({w: i === 0 && !/^I($|')/.test(w) && w !== w.toUpperCase() && !/^[A-Z][a-z]*[A-Z]/.test(w) && !/^(Malta|Valletta|Sliema|Gozo|Mdina|Gżira|Golden|Manchester|Monday|Friday|Saturday|Thursday|Sunday|Tuesday|Wednesday|Karen|Tom|Ana|Ben|Sam|Emma|Ollie|Sophie|Liam|Marco|Helen|Juan|Sarah|Mark|Priya|LinkedIn|AutoCAD|Revit)$/.test(w) ? w[0].toLowerCase() + w.slice(1) : w, id:i}));
    let sh = shuffle(tiles.slice()); let guard = 0;
    while (sh.length > 1 && sh.every((t,i) => t.id === i) && guard++ < 6) sh = shuffle(tiles.slice());
    return {kind:'order', raw, en:raw.en, es:raw.es, words, tiles:sh, built:[], checked:false, ok:null};
  }
  if (raw.k === 'listen') return {kind:'listen', raw, say:raw.en, es:raw.es, opts: shuffle(raw.opts.map((t,i) => ({t, ok:i===0}))), explain: raw.es ? 'Significa: ' + raw.es : ''};
  if (raw.k === 'type') return {kind:'type', raw, en:raw.en, es:raw.es, typed:'', res:null, checked:false, ok:null};
  return {kind:raw.kind, raw, prompt:raw.prompt, explain:raw.explain, opts: shuffle(raw.opts.map((t,i) => ({t, ok:i===0})))};
}
function newQuiz(key, raws, title){ return {key, title, items: raws.filter(Boolean).map(mkItem), i:0, picked:null, correct:0, finished:false}; }
function lessonRaws(L){
  const mc = L.quiz.map(toRaw);
  const cand = shuffle(L.phrases.map((p,i) => ({p, i})).filter(x => wc(x.p[0]) >= 3 && wc(x.p[0]) <= 10));
  const ord = cand.slice(0,2).map(x => ({k:'order', en:x.p[0], es:x.p[1], id:`p:${L.id}:${x.i}`}));
  let listen = null;
  if (TTS && L.phrases.length >= 4) { const i = Math.floor(Math.random()*L.phrases.length); const p = L.phrases[i]; listen = {k:'listen', en:p[0], es:p[1], opts:[p[0], ...shuffle(L.phrases.filter((_,x) => x !== i)).slice(0,3).map(o => o[0])], id:`p:${L.id}:${i}`}; }
  return [mc[0], ord[0], mc[1], listen, mc[2], ord[1], mc[3], mc[4], ...mc.slice(5)].filter(Boolean);
}
function newSpeak(key, items){ return {key, items, i:0, said:'', res:null, listening:false, err:'', done:false, typeMode:!SR}; }
function speakPickLesson(L, n=3){ return shuffle(L.phrases.filter(p => wc(p[0]) <= 12).slice()).slice(0,n).map(p => ({en:p[0], es:p[1]})); }
function newDlg(L){ return {lid:L.id, role:null, i:0, res:{}, said:'', listening:false, err:'', showEn:false, typeMode:!SR, done:false}; }

/* ---------- navigation ---------- */
function stopAll(){ abortRec(); hush(); }
function go(view){ stopAll(); st.view = view; st.confirmReset = false; st.practice = null; render(); scrollTo(0,0); }
function openLesson(id, step=0){
  const L = getLesson(id); if (!L) return;
  stopAll(); st.practice = null;
  st.view = 'lesson'; st.lessonId = id; st.step = step; st.card = 0; st.revealed = {};
  st.quiz = newQuiz('lesson:'+id, lessonRaws(L));
  st.speak = newSpeak('lesson:'+id, speakPickLesson(L));
  st.dlg = newDlg(L);
  if (!S.known.includes(id)) { S.known.push(id); save(); }
  render(); scrollTo(0,0);
}
function setStep(n){ stopAll(); st.step = Math.max(0, Math.min(4, n)); st.card = 0; render(); scrollTo(0,0); }
function startPractice(mode){
  stopAll(); st.view = 'practice';
  const ids = poolIds();
  const build = (list, hint) => list.map(id => exFromId(id, hint)).filter(Boolean);
  if (mode === 'infinite') {
    const due = shuffle(dueIds()).slice(0,4);
    const nu = shuffle(ids.filter(id => !S.srs[id])).slice(0, 4);
    const rest = shuffle(ids.slice()).slice(0, 10);
    st.quiz = newQuiz('infinite', build(uniq([...due, ...nu, ...rest]).slice(0,10)), 'Práctica infinita'); st.practice = 'quiz';
  } else if (mode === 'due') {
    const due = shuffle(dueIds()).slice(0,15);
    if (!due.length) { toast('No tienes repasos pendientes hoy. ¡Bien!'); st.practice = null; render(); return; }
    st.quiz = newQuiz('due', build(due), 'Repaso del día'); st.practice = 'quiz';
  } else if (mode === 'order') {
    st.quiz = newQuiz('order', build(shuffle(poolIds('p').filter(id => { const r = resolveId(id); const n = wc(r.item[0]); return n >= 3 && n <= 11; })).slice(0,8), 'order'), 'Ordena frases'); st.practice = 'quiz';
  } else if (mode === 'listen') {
    st.quiz = newQuiz('listen', build(shuffle(ids.slice()).slice(0,8), 'listen'), 'Escucha y elige'); st.practice = 'quiz';
  } else if (mode === 'vocab') {
    st.quiz = newQuiz('vocab', build(shuffle(poolIds('w')).slice(0,10)), 'Vocabulario'); st.practice = 'quiz';
  } else if (mode === 'type') {
    st.quiz = newQuiz('type', build(shuffle(poolIds('p').filter(id => wc(resolveId(id).item[0]) <= 9)).slice(0,6), 'type'), 'Escríbelo en inglés'); st.practice = 'quiz';
  } else if (mode === 'mistakes') {
    if (!S.mistakes.length) { toast('No tienes errores pendientes. ¡Bien!'); st.practice = null; render(); return; }
    st.quiz = newQuiz('mistakes', shuffle(S.mistakes.slice()).slice(0,10), 'Tus errores'); st.practice = 'quiz';
  } else if (mode === 'speak') {
    const ps = shuffle(poolIds('p')).slice(0,4).map(id => { const r = resolveId(id); return {en:r.item[0], es:r.item[1]}; });
    st.speak = newSpeak('free', ps); st.practice = 'speak';
  } else if (mode === 'dialogue') {
    const done = LESSONS.filter(l => S.done[l.id]); const L = pick1(done.length ? done : LESSONS);
    st.dlg = newDlg(L); st.practice = 'dialogue';
  }
  render(); scrollTo(0,0);
}

/* ---------- chrome ---------- */
const NAV = [['today','Hoy','sun'],['topics','Temas','grid'],['practice','Practicar','layers'],['tools','Recursos','book'],['progress','Progreso','bars']];
const navKey = () => st.view === 'lesson' ? 'topics' : st.view;
function renderChrome(){
  const k = navKey();
  document.getElementById('side-nav').innerHTML = NAV.map(([id,label,icon]) => `<button data-nav="${id}" class="${k===id?'on':''}" ${k===id?'aria-current="page"':''}>${ic(icon)}${label}</button>`).join('');
  document.getElementById('tabbar').innerHTML = NAV.map(([id,label,icon]) => `<button data-nav="${id}" class="${k===id?'on':''}" ${k===id?'aria-current="page"':''}><span class="tb-ic">${ic(icon)}</span><span>${label}</span></button>`).join('');
  const doneN = LESSONS.filter(l => S.done[l.id]).length;
  document.getElementById('level-card').innerHTML = `<span class="eyebrow">Tu avance</span><b class="num">${doneN} de ${LESSONS.length}</b><div class="bar"><span style="width:${Math.round(doneN/Math.max(1,LESSONS.length)*100)}%"></span></div><span class="note">lecciones completadas</span>`;
  const off = !navigator.onLine;
  document.getElementById('top-chips').innerHTML = `${off ? '<span class="chip offline">Sin conexión</span>' : ''}<span class="chip num" title="Racha">${ic('flame')}${streak()}</span>`;
  document.getElementById('side-status').innerHTML = off ? '<span class="chip offline">Sin conexión · todo sigue funcionando</span>' : '';
}
function toast(msg){ st.toast = msg; const el = document.getElementById('toast'); el.textContent = msg; el.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => { el.hidden = true; }, 3200); }

/* ---------- views ---------- */
function greet(){ const h = new Date().getHours(); const g = h < 12 ? 'Good morning' : h < 19 ? 'Good afternoon' : 'Good evening'; return S.name ? `${g}, ${S.name}!` : `${g}!`; }
function heatmap(){
  const now = new Date(); const t = iso(now);
  const mon = new Date(now); mon.setDate(now.getDate() - ((now.getDay()+6)%7) - 28);
  let h = DAYS.map(d => `<span class="d">${d}</span>`).join('');
  for (let i=0;i<35;i++){ const d = new Date(mon); d.setDate(mon.getDate()+i); const k = iso(d); const x = S.days[k]; const sc = x ? (x.q||0) + (x.l||0)*4 + (x.s||0)*2 : 0; const lv = !sc ? '' : sc < 6 ? 'l1' : sc < 14 ? 'l2' : 'l3'; h += `<span class="c ${k > t ? 'future' : lv} ${k===t?'today':''}" title="${k}"></span>`; }
  return `<div class="heat" role="img" aria-label="Actividad de las últimas cinco semanas">${h}</div>`;
}
const TILES = {
  infinite:['spark','Práctica infinita','Ejercicios nuevos cada vez'],
  due:['calendar','Repaso del día', () => { const n = dueIds().length; return n ? `${n} por repasar hoy` : 'Al día, sin pendientes'; }],
  order:['shuffle','Ordena frases','El orden de las palabras'],
  listen:['ear','Escucha y elige','Entrenar el oído'],
  vocab:['grid','Vocabulario','Palabras de tus lecciones'],
  type:['pencil','Escríbelo','De español a inglés'],
  speak:['mic','Habla','Pronuncia y te corrige'],
  dialogue:['chat','Haz un diálogo','Tú haces un papel'],
  mistakes:['alert','Tus errores', () => S.mistakes.length ? `${S.mistakes.length} por repasar` : 'Ninguno pendiente'],
  find:['search','¿Qué quieres practicar?','Busca o pide un tema']
};
function tiles(list){ return list.map((m,i) => { const [icn, b, s] = TILES[m]; return `<button class="qt ${i===0?'hot':''}" ${m==='find' ? 'data-act="goto-find"' : `data-act="practice" data-m="${m}"`}><span class="qi">${ic(icn)}</span><b>${b}</b><span>${typeof s === 'function' ? s() : s}</span></button>`; }).join(''); }
function installCard(){
  if (standalone() || S.installHidden) return '';
  const how = installEvt ? `<button class="btn primary sm" data-act="install">${ic('download')}Instalar</button>` : IOS ? `<span class="note">En Safari: toca Compartir y luego «Añadir a pantalla de inicio».</span>` : `<span class="note">En el menú del navegador, elige «Instalar app» o «Añadir a pantalla de inicio».</span>`;
  return `<section class="card install a-install"><div style="min-width:0;flex:1"><h3>Tenla como app</h3><p class="note">Con ícono propio y funcionando sin internet.</p></div><div class="row">${how}<button class="link" style="color:var(--ink-3)" data-act="install-hide">Ahora no</button></div></section>`;
}
function viewToday(){
  const L = nextLesson(); const n = streak(); const t7 = last7(); const doneToday = active(today());
  const pool = [...TOOLS.phrasal.items, ...TOOLS.connectors.items];
  const w = pool[Math.floor(Date.now()/864e5) % pool.length];
  const hero = L ? `<article class="hero a-lesson"><div class="meta"><span class="pill">${ic(scenOf(L).icon)}${esc(areaName(L))}</span><span class="pill num">${esc(L.level)} · ${L.mins} min</span></div>
      <p class="eyebrow" style="color:var(--ink)">Tu lección de hoy</p><h2>${esc(L.title)}</h2><p>${esc(L.summary)}</p>
      <div class="row"><button class="btn dark" data-act="open" data-id="${L.id}">Empezar ${ic('right')}</button><button class="btn ghost" data-nav="topics" style="background:rgba(255,255,255,.6);border-color:transparent">Otro tema</button></div></article>`
    : `<article class="hero a-lesson"><p class="eyebrow" style="color:var(--ink)">Tu lección de hoy</p><h2>¡Completaste todas las lecciones!</h2><p>Sigue con la práctica infinita y tu repaso del día. Las lecciones nuevas aparecerán aquí en cuanto se publiquen.</p>
      <div class="row"><button class="btn dark" data-act="practice" data-m="infinite">Práctica infinita ${ic('right')}</button><button class="btn ghost" data-act="goto-find" style="background:rgba(255,255,255,.6);border-color:transparent">Pedir un tema</button></div></article>`;
  const words = (L || LESSONS[0]).words.slice(0,6);
  const note = doneToday ? 'Racha a salvo por hoy. Vuelve mañana.' : n ? `Practica hoy para llegar a ${n+1} días.` : 'Completa una lección para empezar tu racha.';
  return {html:`
  <div class="hello"><p class="eyebrow">${esc(greet())}</p><h1>Let's learn some English</h1></div>
  <div class="today">
    ${hero}
    <article class="card streak a-streak"><div class="st-top"><span class="st-flame">${ic('flame')}</span><div><div class="st-n num">${n}</div><div class="note">${n===1?'día':'días'} seguidos</div></div></div>${heatmap()}<p class="note">${note}</p></article>
    <section class="a-quick"><div class="block-head"><h3>Practica rápido</h3><button class="link" data-nav="practice">Ver todo ${ic('right')}</button></div><div class="quick">${tiles(['infinite','due','speak','find'])}</div></section>
    <section class="card a-words"><div class="block-head"><h3>Palabras de hoy</h3><span class="note">Toca para escuchar</span></div>
      <div class="chips">${words.map(x => `<button class="wchip" data-act="word" data-w="${esc(x[0])}">${esc(x[0])} <span>${esc(x[1])}</span></button>`).join('')}</div></section>
    <section class="card wotd a-wotd"><p class="eyebrow">Expresión del día</p>
      <div class="row" style="justify-content:space-between;margin:8px 0 4px"><span class="w-en ctx">${tw(w[0])}</span>${play(w[0]+'. '+w[2])}</div>
      <p><b>${esc(w[1])}</b></p><p class="w-ex ctx">“${tw(w[2])}”</p></section>
    <section class="card a-week"><p class="eyebrow">Últimos 7 días</p>
      <div class="stats3"><div><b>${t7.l}</b><span>lecciones</span></div><div><b>${t7.q}</b><span>ejercicios</span></div><div><b>${t7.s}</b><span>frases dichas</span></div><div><b>${t7.p}</b><span>frases nuevas</span></div></div></section>
  </div>${installCard() ? `<div style="margin-top:16px">${installCard()}</div>` : ''}`};
}

function lessonRow(L){
  const d = S.done[L.id];
  return `<button class="lrow" data-act="open" data-id="${L.id}"><span class="lr-main"><span class="lr-t">${esc(L.title)}${isNew(L) ? `<span class="newb">${ic('spark')}Nueva</span>` : ''}</span><span class="lr-m num">${esc(L.level)} · ${L.mins} min${d ? ` · ${d.score}/${d.total}` : ''}</span></span><span class="lr-s ${d?'done':''}">${d ? ic('check') : ic('right')}</span></button>`;
}
const deaccent = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const STOP = new Set('que quiero como para una unos unas los las del con por sobre cuando donde algo hablar practicar aprender ingles english hacer tener ir the and you for with what have como esta este esto mas muy pero porque también tambien'.split(' '));
function searchLessons(q){
  const toks = deaccent(q).replace(/[^a-z0-9ñ ]+/g,' ').split(/\s+/).filter(t => t.length >= 3 && !STOP.has(t));
  if (!toks.length) return [];
  const stem = t => t.length > 5 ? t.slice(0, t.length - 2) : t;
  return LESSONS.map(L => {
    const fields = [[L.title,4],[L.summary,3],[L.phrases.map(p => p[1] + ' ' + p[0]).join(' '),1],[L.words.map(w => w[0] + ' ' + w[1]).join(' '),2],[L.dialogue.map(d => d[2]).join(' '),1]];
    let score = 0;
    toks.forEach(t => { const s = stem(t); fields.forEach(([txt, wt]) => { if (deaccent(txt).includes(s)) score += wt; }); });
    return {L, score};
  }).filter(x => x.score > 0).sort((a,b) => b.score - a.score).slice(0,5).map(x => x.L);
}
function finderHTML(){
  const f = st.find;
  const res = f.results;
  return `<section class="card finder" id="finder"><span class="ai-mark">${ic('search')}Tu tema</span><h3>¿Qué situación quieres practicar?</h3>
    <p class="note">Escríbelo como quieras: «ir al banco», «hablar con el casero», «una entrevista en un hotel»…</p>
    <div class="row-in"><input class="field" id="find-in" maxlength="120" placeholder="Ej.: pedir una cita en el médico" value="${esc(f.q)}"><button class="btn primary slim" data-act="find" aria-label="Buscar">${ic('search')}</button></div>
    ${res ? (res.length ? `<p class="note"><b>Esto ya lo tienes:</b></p><div class="lrows" style="border-top:0">${res.map(L => `<div class="lrow-wrap">${lessonRow(L)}</div>`).join('')}</div>` : `<p class="note">Todavía no hay una lección sobre esto.</p>`)
      + `<div class="row"><button class="btn ${res.length ? 'ghost' : 'primary'} sm" data-act="request">${ic('send')}Pedir una lección sobre «${esc(f.q.slice(0,40))}»</button></div>` : ''}
    ${S.requests.length ? `<details><summary class="note" style="cursor:pointer;font-weight:700">Tus peticiones (${S.requests.length})</summary>${S.requests.map((r,i) => { const ready = LESSONS.find(l => l.req && deaccent(l.req) === deaccent(r.t)); return `<div class="req"><div style="min-width:0"><b>${esc(r.t)}</b><p class="note">${esc(r.d)}</p></div>${ready ? `<button class="status-pill ready" data-act="open" data-id="${ready.id}">Lista · abrir</button>` : `<span class="status-pill">Pedida</span>`}<button class="link" style="color:var(--ink-3)" data-act="req-del" data-i="${i}" aria-label="Quitar">${ic('x')}</button></div>`; }).join('')}</details>` : ''}
  </section>`;
}
function viewTopics(){
  const scen = SCEN.map(s => {
    const ls = LESSONS.filter(l => l.scen === s.id); const dn = ls.filter(l => S.done[l.id]).length;
    const body = s.subs ? s.subs.map(sub => { const sl = ls.filter(l => l.sub === sub.id); return `<div class="sub-head"><b>${esc(sub.name)}</b>${sub.id === 'job' ? '<span class="pill">Para tu búsqueda</span>' : sub.id === 'igaming' ? '<span class="pill">Malta</span>' : ''}</div><p class="sub-desc">${esc(sub.desc)}</p><div class="lrows">${sl.map(L => `<div class="lrow-wrap">${lessonRow(L)}</div>`).join('')}</div>`; }).join('')
      : `<div class="lrows">${ls.map(L => `<div class="lrow-wrap">${lessonRow(L)}</div>`).join('')}</div>`;
    return `<section class="card scen"><div class="scen-head"><span class="scen-ic">${ic(s.icon)}</span><div style="min-width:0;flex:1"><span class="en">${esc(s.en)}</span><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p></div><span class="note num" style="flex:none">${dn}/${ls.length}</span></div>${body}</section>`;
  }).join('');
  return {html:`<div class="page-head"><h1>Temas</h1><p class="lead">Situaciones reales del día a día en Malta. Cada lección termina con speaking.</p></div>${finderHTML()}<div class="scen-grid">${scen}</div>`};
}

/* ----- lesson ----- */
function viewLesson(){
  const L = getLesson(st.lessonId); if (!L) { st.view = 'topics'; return viewTopics(); }
  const sc = scenOf(L); const s = st.step; const m = isM();
  const done = i => i < s || (i === 3 && S.done[L.id]);
  let body = '', act = '';
  const cont = `<button class="btn primary" data-act="step" data-n="${s+1}">Continuar ${ic('right')}</button>`;
  if (s === 0) {
    if (m) {
      const i = Math.min(st.card, L.phrases.length-1); const p = L.phrases[i];
      body = `<article class="flash"><p class="eyebrow num">Frase ${i+1} de ${L.phrases.length}</p><p class="ph-en ctx">${tw(p[0])}</p>
        <div class="ph-btns">${play(p[0])}${playSlow(p[0])}<button class="icon-btn ${isSaved(p[0])?'on':''}" data-act="mark" data-en="${esc(p[0])}" data-es="${esc(p[1])}" aria-label="Guardar frase">${ic('mark')}</button></div>
        <button class="reveal ${st.revealed[i]?'':'blur'}" data-act="reveal" data-i="${i}"><span>${esc(p[1])}</span>${st.revealed[i]?'':'<br><small class="note">Toca para ver la traducción</small>'}</button>
        ${p[2] ? `<p class="ph-note">${esc(p[2])}</p>` : ''}</article>
        <div class="dots">${L.phrases.map((_,k) => `<i class="${k===i?'on':''}"></i>`).join('')}</div>`;
      act = `${i > 0 ? `<button class="btn ghost slim" data-act="card" data-n="${i-1}" aria-label="Anterior">${ic('left')}</button>` : ''}${i < L.phrases.length-1 ? `<button class="btn primary" data-act="card" data-n="${i+1}">Siguiente frase ${ic('right')}</button>` : cont}`;
    } else {
      body = `<div class="phrases">${L.phrases.map(p => `<article class="card phrase"><p class="ph-en ctx">${tw(p[0])}</p><p class="ph-es">${esc(p[1])}</p>${p[2] ? `<p class="ph-note">${esc(p[2])}</p>` : ''}
        <div class="ph-btns">${play(p[0])}${playSlow(p[0])}<button class="icon-btn ${isSaved(p[0])?'on':''}" data-act="mark" data-en="${esc(p[0])}" data-es="${esc(p[1])}" aria-label="Guardar frase">${ic('mark')}</button></div></article>`).join('')}</div>`;
      act = cont;
    }
  }
  if (s === 1) {
    const order = []; L.dialogue.forEach(d => { if (!order.includes(d[0])) order.push(d[0]); });
    body = `<div class="dlg-tools"><button class="switch ${st.showTr?'on':''}" data-act="tr" aria-pressed="${st.showTr}"><i></i>Traducción</button>${TTS ? `<button class="btn ghost sm" data-act="say-all">${ic('speaker')}Escuchar todo</button>` : ''}</div>
      <div class="dialogue ${st.showTr?'':'hide-tr'}">${L.dialogue.map(d => `<div class="bub ${order.indexOf(d[0])%2?'r':''}"><span class="who">${esc(d[0])}</span><div class="tx"><div><p class="en ctx">${tw(d[1])}</p><p class="es">${esc(d[2])}</p></div>${play(d[1],'say')}</div></div>`).join('')}</div>`;
    act = cont;
  }
  if (s === 2) { body = `<div class="words">${L.words.map(w => `<button class="word" data-act="word" data-w="${esc(w[0])}"><div style="min-width:0"><b>${esc(w[0])} ${w[2]?'<span class="uk">UK</span>':''}</b><span>${esc(w[1])}</span></div>${ic('speaker')}</button>`).join('')}</div>`; act = cont; }
  if (s === 3) { const r = quizView(st.quiz, 'lesson'); body = r.html; act = r.act; }
  if (s === 4) {
    if (!st.speak.done) { const r = speakView(st.speak, 'lesson'); body = r.html; act = r.act; }
    else { const r = dlgView(st.dlg, 'lesson'); body = r.html; act = r.act; }
  }
  const side = `<aside class="lsteps"><button class="back" data-nav="topics">${ic('left')}Temas</button><span class="tag">${ic(sc.icon)}${esc(areaName(L))}</span><h2>${esc(L.title)}</h2>
    ${STEPS.map((x,i) => `<button class="st ${i===s?'on':''} ${done(i)?'done':''}" data-act="step" data-n="${i}"><span class="n">${done(i) && i!==s ? ic('check') : i+1}</span>${x.name}</button>`).join('')}</aside>`;
  const head = `<div class="lhead"><button class="icon-btn" data-nav="topics" aria-label="Salir de la lección">${ic('x')}</button><div class="lprog">${STEPS.map((x,i) => `<button class="${i===s?'on':''} ${done(i)?'done':''}" data-act="step" data-n="${i}" aria-label="${x.name}"></button>`).join('')}</div></div>`;
  return {immersive:true, actClass:'lesson-act', act, html:`<div class="lesson">${head}${side}<section style="min-width:0">
    <div class="ltitle"><p class="eyebrow num">Paso ${s+1} de 5 · ${esc(m ? L.title : sc.name)}</p><h2>${STEPS[s].name}</h2><p class="how">${STEPS[s].how}</p></div>${body}</section></div>`};
}

/* ----- quiz ----- */
function quizView(q, ctx){
  const n = q.items.length;
  if (!n) return {html:`<p class="note">No hay ejercicios todavía. Completa una lección primero.</p>`, act:`<button class="btn primary" data-act="practice-home">Volver</button>`};
  if (q.finished) {
    const r = q.correct / n;
    const msg = r === 1 ? 'Perfecto. Estas frases ya son tuyas.' : r >= .6 ? 'Muy bien. Lo que fallaste volverá en tu repaso.' : 'Buen comienzo. Repasa las frases y vuelve a intentarlo, sin prisa.';
    let act = `<button class="btn ghost" data-act="quiz-again">${ic('refresh')}${ctx === 'lesson' ? 'Repetir' : 'Otra ronda'}</button>`;
    act += ctx === 'lesson' ? `<button class="btn primary" data-act="step" data-n="4">${ic('mic')}Ahora a hablar</button>` : `<button class="btn primary" data-act="practice-home">Listo</button>`;
    return {html:`<div class="result"><span class="confetti">${ic('trophy')}</span><div class="big">${q.correct}<small>/${n}</small></div><p class="lead">${msg}</p>${ctx==='lesson' ? '<p class="note">Último paso: decir las frases en voz alta.</p>' : ''}</div>`, act};
  }
  const it = q.items[q.i];
  const head = `<div class="q-meta num"><span>${q.i+1} de ${n}</span><span>${q.correct} correctas</span></div><div class="bar"><span style="width:${Math.round(q.i/n*100)}%"></span></div><p class="q-kind">${KIND[it.kind] || 'Elige'}</p>`;
  const nextB = `<button class="btn primary" data-act="next">${q.i === n-1 ? 'Ver resultado' : 'Siguiente'} ${ic('right')}</button>`;
  if (it.kind === 'order') {
    let fb = '';
    if (it.checked) {
      const isQ = /\?\s*$/.test(it.en);
      fb = it.ok ? `<div class="fb good" role="status"><b>¡Perfecto!</b><div class="row">${play(it.en,'say')}<span class="ctx">${tw(it.en)}</span></div></div>`
        : `<div class="fb bad" role="status"><b>Casi. El orden correcto es:</b><div class="row">${play(it.en,'say')}<span class="ctx" style="font-weight:700">${tw(it.en)}</span></div><span>${isQ ? 'En preguntas, el verbo auxiliar va primero: Could you…? / Do you…? / Have you got…?' : 'En inglés el orden casi siempre es: quién + verbo + lo demás. Los adjetivos van antes del nombre.'}</span></div>`;
    }
    return {html:`<div class="quiz">${head}<h3 class="q-prompt">${esc(it.es)}</h3>
      <div class="slots ${it.checked ? (it.ok?'ok':'no') : ''}">${it.built.length ? it.built.map((t,idx) => `<button class="tile in" data-act="untile" data-i="${idx}" ${it.checked?'disabled':''}>${esc(t.w)}</button>`).join('') : '<span class="slots-ph">Toca las palabras en el orden correcto</span>'}</div>
      <div class="bank">${it.tiles.map(t => `<button class="tile ${it.built.includes(t)?'used':''}" data-act="tile" data-id="${t.id}" ${it.built.includes(t)||it.checked?'disabled':''}>${esc(t.w)}</button>`).join('')}</div>${fb}</div>`,
      act: it.checked ? nextB : `<button class="btn ghost slim" data-act="tile-clear" ${it.built.length?'':'disabled'}>Borrar</button><button class="btn primary" data-act="order-check" ${it.built.length===it.tiles.length?'':'disabled'}>Comprobar</button>`};
  }
  if (it.kind === 'type') {
    return {html:`<div class="quiz">${head}<h3 class="q-prompt">${esc(it.es)}</h3>
      <div class="type-row"><textarea class="field" id="type-in" rows="2" lang="en-GB" autocapitalize="sentences" autocorrect="off" spellcheck="false" maxlength="200" placeholder="Escribe la frase en inglés…" ${it.checked?'disabled':''}>${esc(it.typed)}</textarea></div>
      ${it.checked ? `<div class="fb ${it.ok?'good':'bad'}" role="status"><b>${it.ok ? '¡Bien!' : 'Casi. La frase es:'}</b><div class="row">${play(it.en,'say')}<span class="ctx" style="font-weight:700">${tw(it.en)}</span></div>${!it.ok ? `<div class="heard" style="font-size:16px">${it.res.disp.map(d => `<span class="${d.cls}">${esc(d.w)}</span>`).join('')}</div><span class="note">Verde: lo tenías. Amarillo: otro orden. Rojo: faltó o estaba distinto.</span>` : ''}</div>` : ''}</div>`,
      act: it.checked ? nextB : `<button class="btn ghost slim" data-act="skip">Saltar</button><button class="btn primary" data-act="type-check">Comprobar</button>`};
  }
  const prompt = it.kind === 'listen' ? `<div class="listen-box"><button class="play-big" data-act="say" data-say="${esc(it.say)}" aria-label="Escuchar">${ic('speaker')}</button><div class="row">${playSlow(it.say)}<span class="note">Escucha las veces que quieras</span></div></div>` : `<h3 class="q-prompt">${esc(it.prompt)}</h3>`;
  const opts = it.opts.map((o,i) => { let cls = ''; if (q.picked !== null) { if (o.ok) cls = 'ok'; else if (i === q.picked) cls = 'no'; } return `<button class="opt ${cls}" data-act="pick" data-i="${i}" ${q.picked!==null?'disabled':''}><span class="k">${'ABCD'[i]}</span><span>${esc(o.t)}</span></button>`; }).join('');
  const right = q.picked !== null && it.opts[q.picked].ok;
  const correct = it.opts.find(o => o.ok);
  const fb = q.picked === null ? '' : `<div class="fb ${right?'good':'bad'}" role="status"><b>${right ? '¡Bien!' : 'Casi.'}</b>${!right ? `<span>La correcta: <b style="color:var(--ink)">${esc(correct.t)}</b></span>` : ''}${it.explain ? `<span>${esc(it.explain)}</span>` : ''}</div>`;
  return {html:`<div class="quiz">${head}${prompt}<div class="opts">${opts}</div>${fb}</div>`, act: q.picked === null ? `<button class="btn ghost" data-act="skip">Saltar</button>` : nextB};
}

/* ----- speaking ----- */
function micBlock(listening, live, typeMode, inputId, placeholder){
  if (typeMode) return `<textarea class="field speak-in" id="${inputId}" lang="en-GB" autocapitalize="sentences" autocorrect="off" spellcheck="false" maxlength="300" placeholder="${esc(placeholder)}">${esc(live)}</textarea>
    <p class="note" style="margin-top:6px">${SR ? `<button class="link" data-act="mic-mode">${ic('mic')}Usar el micrófono</button>` : 'Tu navegador no permite usar el micrófono aquí. Escribe la frase o usa el dictado por voz del teclado.'}</p>`;
  return `<div class="mic-wrap"><button class="mic-btn ${listening?'on':''}" data-act="mic" aria-label="${listening?'Terminar':'Hablar'}">${ic(listening ? 'stop' : 'mic')}</button>
    <span class="mic-label">${listening ? 'Te escucho… toca para terminar' : 'Toca y di la frase en inglés'}</span>
    <div class="live ${live ? '' : 'empty'}" id="live">${live ? esc(live) : 'Lo que digas aparecerá aquí'}</div>
    <button class="link" style="color:var(--ink-3)" data-act="type-mode">${ic('pencil')}Prefiero escribir</button></div>`;
}
function speakView(sp, ctx){
  if (!sp.items.length) return {html:`<p class="note">No hay frases para practicar todavía.</p>`, act:''};
  if (sp.done) return {html:`<div class="result"><span class="confetti">${ic('trophy')}</span><h2>¡Muy bien!</h2><p class="lead">Practicaste ${sp.items.length} frases. Cada vez se te entiende mejor.</p></div>`,
    act:`<button class="btn ghost" data-act="practice" data-m="speak">${ic('refresh')}Otras frases</button><button class="btn primary" data-act="practice-home">Listo</button>`};
  const it = sp.items[sp.i]; const n = sp.items.length;
  const html = `<div class="say-card"><p class="eyebrow num">Frase ${sp.i+1} de ${n}</p><p class="say-en ctx">${tw(it.en)}</p><p class="ph-es">${esc(it.es)}</p><div class="ph-btns">${play(it.en)}${playSlow(it.en)}<span class="note">Escúchala primero</span></div></div>
    ${sp.res ? '' : micBlock(sp.listening, sp.said, sp.typeMode, 'speak-in', 'Escribe o dicta la frase en inglés…')}
    ${sp.err ? `<p class="err" style="margin-top:8px">${esc(sp.err)}</p>` : ''}
    ${sp.res ? `<p class="note" style="margin-top:14px">Dijiste: <b>${esc(sp.said)}</b></p>${coachHTML(sp.res, it.en)}` : ''}`;
  const act = !sp.res ? (sp.typeMode ? `<button class="btn primary" data-act="speak-check">${ic('check')}Comprobar</button>` : '')
    : `<button class="btn ghost slim" data-act="speak-retry">${ic('refresh')}Otra vez</button><button class="btn primary" data-act="speak-next">${sp.i === n-1 ? (ctx === 'lesson' ? 'Ahora el diálogo' : 'Terminar') : 'Siguiente frase'} ${ic('right')}</button>`;
  return {html, act};
}

/* ----- dialogue role-play ----- */
function dlgView(d, ctx){
  const L = getLesson(d.lid); if (!L) return {html:'', act:''};
  const lines = L.dialogue; const speakers = uniq(lines.map(x => x[0]));
  const intro = ctx === 'lesson' && !d.role ? `<div class="result" style="margin-bottom:18px"><h2>Ahora, el diálogo</h2><p class="lead">Tú haces un papel y la app hace el otro. Tus frases las dices en voz alta.</p></div>` : '';
  if (!d.role) {
    return {html:`${intro}${ctx !== 'lesson' ? `<p class="lead" style="margin-bottom:14px">Diálogo de «${esc(L.title)}».</p>` : ''}<p class="eyebrow" style="margin-bottom:10px">¿Qué papel haces?</p>
      <div class="role-pick">${speakers.map(sp => `<button class="qt ${sp === 'You' ? 'hot' : ''}" data-act="dlg-role" data-r="${esc(sp)}"><span class="qi">${ic('people')}</span><b>Hacer de ${esc(sp === 'You' ? 'ti (You)' : sp)}</b><span>${lines.filter(x => x[0] === sp).length} frases que dirás tú</span></button>`).join('')}</div>`,
      act: ctx === 'lesson' ? `<button class="btn ghost" data-act="lesson-finish">Saltar el diálogo</button>` : `<button class="btn ghost" data-act="practice" data-m="dialogue">${ic('refresh')}Otro diálogo</button>`};
  }
  const order = []; lines.forEach(x => { if (!order.includes(x[0])) order.push(x[0]); });
  const past = lines.slice(0, d.i).map((x,k) => { const mine = x[0] === d.role; const r = d.res[k]; return `<div class="bub ${order.indexOf(x[0])%2?'r':''}"><span class="who">${esc(x[0])}${mine && r ? ` · <span class="scorepill ${r.score >= 90 ? '' : r.score >= 60 ? 'mid' : 'low'}">${r.score}%</span>` : ''}</span><div class="tx"><div><p class="en ctx">${tw(x[1])}</p></div>${play(x[1],'say')}</div></div>`; }).join('');
  if (d.i >= lines.length) {
    const scores = Object.values(d.res).map(r => r.score); const avg = scores.length ? Math.round(scores.reduce((a,b) => a+b, 0) / scores.length) : null;
    const nx = ctx === 'lesson' ? nextLesson() : null;
    const sum = avg === null ? 'Vuelve mañana para mantener tu racha.' : `Se te entendió un ${avg}% de media en tus frases.${avg < 80 ? ' Repite el diálogo y verás cómo sube.' : ' ¡Muy bien!'}`;
    return {html:`<div class="result" style="margin-bottom:18px"><span class="confetti">${ic('trophy')}</span><h2>${ctx === 'lesson' ? '¡Lección completada!' : '¡Diálogo terminado!'}</h2><p class="lead">${sum}</p></div>${d.role === 'skip' ? '' : `<div class="dialogue">${past}</div>`}`,
      act: ctx === 'lesson' ? `<button class="btn ghost" data-act="dlg-again">${ic('refresh')}Repetir</button>${nx && nx.id !== L.id ? `<button class="btn primary" data-act="open" data-id="${nx.id}">Siguiente lección ${ic('right')}</button>` : `<button class="btn primary" data-nav="today">Volver a Hoy</button>`}`
        : `<button class="btn ghost" data-act="practice" data-m="dialogue">${ic('refresh')}Otro diálogo</button><button class="btn primary" data-act="practice-home">Listo</button>`};
  }
  const cur = lines[d.i]; const mine = cur[0] === d.role; const r = d.res[d.i];
  let turn, act;
  if (!mine) {
    turn = `<div class="bub ${order.indexOf(cur[0])%2?'r':''}"><span class="who">${esc(cur[0])}</span><div class="tx"><div><p class="en ctx">${tw(cur[1])}</p><p class="es">${esc(cur[2])}</p></div>${play(cur[1],'say')}</div></div>`;
    act = `<button class="btn primary" data-act="dlg-next">Continuar ${ic('right')}</button>`;
  } else if (!r) {
    turn = `<div class="dlg-turn"><p class="eyebrow">Tu turno</p><p><b>${esc(cur[2])}</b></p>
      ${d.showEn ? `<p class="say-en ctx" style="font-size:20px">${tw(cur[1])}</p><div class="ph-btns">${play(cur[1])}${playSlow(cur[1])}</div>` : `<button class="link" data-act="dlg-show">${ic('bulb')}Ver la frase en inglés</button>`}
      ${micBlock(d.listening, d.said, d.typeMode, 'dlg-in', 'Escribe o dicta tu frase en inglés…')}${d.err ? `<p class="err">${esc(d.err)}</p>` : ''}</div>`;
    act = d.typeMode ? `<button class="btn primary" data-act="dlg-check">${ic('check')}Comprobar</button>` : `<button class="btn ghost" data-act="dlg-skip">Saltar</button>`;
  } else {
    turn = `<div class="dlg-turn"><p class="eyebrow">Tu turno</p><p class="note">Dijiste: <b>${esc(d.said)}</b></p>${coachHTML(r, cur[1])}</div>`;
    act = `<button class="btn ghost slim" data-act="dlg-retry">${ic('refresh')}Otra vez</button><button class="btn primary" data-act="dlg-next">Siguiente ${ic('right')}</button>`;
  }
  return {html:`${ctx !== 'lesson' ? `<p class="lead" style="margin-bottom:14px">«${esc(L.title)}» · haces de ${esc(d.role)}</p>` : ''}<div class="dialogue" style="margin-bottom:14px">${past}</div>${turn}`, act};
}

/* ----- practice hub ----- */
function viewPractice(){
  const back = `<button class="back" data-act="practice-home">${ic('left')}Practicar</button>`;
  if (st.practice === 'quiz') { const r = quizView(st.quiz, 'practice'); return {immersive:true, act:r.act, html:`${back}<div class="page-head" style="margin-bottom:14px"><h2>${esc(st.quiz.title || 'Ejercicios')}</h2></div>${r.html}`}; }
  if (st.practice === 'speak') { const r = speakView(st.speak, 'practice'); return {immersive:true, act:r.act, html:`${back}<div class="page-head" style="margin-bottom:14px"><h2>Habla</h2><p class="lead">Escucha, di la frase y mira qué se entendió.</p></div>${r.html}`}; }
  if (st.practice === 'dialogue') { const r = dlgView(st.dlg, 'practice'); return {immersive:true, act:r.act, html:`${back}<div class="page-head" style="margin-bottom:14px"><h2>Haz un diálogo</h2></div>${r.html}`}; }
  const due = dueIds().length;
  return {html:`<div class="page-head"><h1>Practicar</h1><p class="lead">Ejercicios que no se acaban. Salen de tus lecciones y lo que fallas vuelve en el repaso.</p></div>
    <div class="quick" style="margin-bottom:22px">${tiles(['infinite','due','order','listen','vocab','type','speak','dialogue'])}</div>
    <section class="card" style="display:flex;flex-direction:column;gap:10px"><h3>Tus errores</h3><p class="note">${S.mistakes.length ? `Tienes ${S.mistakes.length} preguntas que fallaste. Repásalas hasta acertarlas.` : 'Cuando falles algo, aparecerá aquí para repasarlo.'}</p><div><button class="btn ghost" data-act="practice" data-m="mistakes" ${S.mistakes.length?'':'disabled'}>Repasar errores</button></div></section>
    <p class="note" style="margin-top:16px">${due ? `Hoy toca repasar ${due} frases y palabras.` : 'Repaso del día al corriente.'} El repaso usa repetición espaciada: lo que aciertas vuelve cada vez más tarde, y lo que fallas vuelve pronto.</p>`};
}

/* ----- tools ----- */
function viewTools(){
  const tabs = {...Object.fromEntries(Object.entries(TOOLS).map(([k,v]) => [k, v.name])), pron:'Pronunciación'};
  let list, intro;
  if (st.tool === 'pron') {
    intro = 'Palabras que a los hispanohablantes nos cuesta pronunciar. Toca para escucharlas.';
    list = `<div class="tlist">${Object.entries(PRON).map(([w,[s,t]]) => `<div class="titem"><div style="min-width:0"><p class="t-en">${esc(w)}</p><p class="pron-sounds">suena «${esc(s)}»</p><p class="es">${esc(t)}</p></div><div class="ph-btns">${play(w)}${playSlow(w)}</div></div>`).join('')}</div>`;
  } else {
    const t = TOOLS[st.tool]; intro = t.intro;
    list = st.tool === 'ukus'
      ? `<div class="tbl-wrap"><table class="ukus"><thead><tr><th>UK (Malta)</th><th>US</th><th>Español</th></tr></thead><tbody>${t.items.map(r => `<tr><td><span class="w" data-w="${esc(r[0])}">${esc(r[0])}</span></td><td style="color:var(--ink-3)">${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</tbody></table></div>`
      : `<div class="tlist">${t.items.map(r => `<div class="titem"><div style="min-width:0"><p class="t-en ctx">${tw(r[0])}</p><p class="es">${esc(r[1])}</p>${st.tool==='false' ? `<p class="warn">${esc(r[2])}</p>` : `<p class="ex ctx">“${tw(r[2])}”</p>`}</div>${play(st.tool==='false' ? r[0] : r[0]+'. '+r[2])}</div>`).join('')}</div>`;
  }
  return {html:`<div class="page-head"><h1>Recursos</h1><p class="lead">Lo que hace que tu inglés suene natural. Toca cualquier palabra para oírla.</p></div>
    <div class="tabs" role="tablist">${Object.entries(tabs).map(([k,v]) => `<button role="tab" aria-selected="${k===st.tool}" class="${k===st.tool?'on':''}" data-act="tool" data-t="${k}">${esc(v)}</button>`).join('')}</div>
    <p class="note" style="margin-bottom:14px">${esc(intro)}</p>${list}`};
}

/* ----- progress ----- */
const b64e = s => btoa(unescape(encodeURIComponent(s)));
const b64d = s => decodeURIComponent(escape(atob(s)));
function exportCode(){ const {installHidden, ...rest} = S; return 'CHEERS1:' + b64e(JSON.stringify(rest)); }
function mergeState(a, b){
  const newer = (b.updatedAt||0) > (a.updatedAt||0) ? b : a; const older = newer === a ? b : a;
  const out = Object.assign(fresh(), newer);
  out.done = {...(older.done||{})}; Object.entries(newer.done||{}).forEach(([k,v]) => { const x = out.done[k]; if (!x || (v.score||0) >= (x.score||0)) out.done[k] = v; });
  out.days = {...(older.days||{})}; Object.entries(newer.days||{}).forEach(([k,v]) => { const x = out.days[k] || {}; out.days[k] = {l:Math.max(x.l||0,v.l||0), q:Math.max(x.q||0,v.q||0), p:Math.max(x.p||0,v.p||0), s:Math.max(x.s||0,v.s||0)}; });
  out.srs = {...(older.srs||{})}; Object.entries(newer.srs||{}).forEach(([k,v]) => { const x = out.srs[k]; if (!x || (v.b||0) >= (x.b||0)) out.srs[k] = v; });
  const seen = new Set(); out.saved = [...arr(newer.saved), ...arr(older.saved)].filter(s => s && !seen.has(s[0]) && seen.add(s[0]));
  const seenR = new Set(); out.requests = [...arr(newer.requests), ...arr(older.requests)].filter(r => r && !seenR.has(r.t) && seenR.add(r.t));
  const seenM = new Set(); out.mistakes = [...arr(newer.mistakes), ...arr(older.mistakes)].filter(m => { const id = rawId(m); return m && !seenM.has(id) && seenM.add(id); }).slice(0,80);
  out.known = uniq([...arr(a.known), ...arr(b.known)]);
  out.q = Math.max(a.q||0, b.q||0); out.c = Math.max(a.c||0, b.c||0); out.installHidden = a.installHidden;
  out.updatedAt = Math.max(a.updatedAt||0, b.updatedAt||0);
  return out;
}
function viewProgress(){
  const n = streak(); const doneL = LESSONS.filter(l => S.done[l.id]);
  const phrasesSeen = doneL.reduce((a,l) => a + l.phrases.length, 0);
  const acc = S.q ? Math.round(S.c / S.q * 100) : 0;
  const per = SCEN.map(s => `<div class="card"><h3 style="margin-bottom:8px">${esc(s.name)}</h3>${LESSONS.filter(l => l.scen === s.id).map(l => `<div class="prow"><span>${esc(l.title)}</span><span class="sc">${S.done[l.id] ? `${S.done[l.id].score}/${S.done[l.id].total}` : '<span style="color:var(--ink-3)">—</span>'}</span></div>`).join('')}</div>`).join('');
  const saved = S.saved.length ? S.saved.map(s => `<div class="word"><div style="min-width:0"><b class="ctx">${tw(s[0])}</b><span>${esc(s[1])}</span></div><div class="ph-btns">${play(s[0])}<button class="icon-btn on" data-act="mark" data-en="${esc(s[0])}" data-es="${esc(s[1])}" aria-label="Quitar">${ic('mark')}</button></div></div>`).join('') : `<p class="note">Toca el marcador en cualquier frase para guardarla aquí.</p>`;
  const installRow = standalone() ? '<span class="note">Ya la tienes instalada.</span>' : installEvt ? `<button class="btn primary sm" data-act="install">${ic('download')}Instalar</button>` : IOS ? '<span class="note" style="max-width:420px">En Safari: toca Compartir y luego «Añadir a pantalla de inicio».</span>' : '<span class="note" style="max-width:420px">En el menú del navegador: «Instalar app» o «Añadir a pantalla de inicio».</span>';
  return {html:`<div class="page-head"><h1>Progreso</h1></div>
  <div class="kpis"><div class="card kpi"><b>${n}</b><span>días de racha</span></div><div class="card kpi"><b>${doneL.length}</b><span>lecciones completadas</span></div><div class="card kpi"><b>${phrasesSeen}</b><span>frases aprendidas</span></div><div class="card kpi"><b>${acc}%</b><span>aciertos · ${S.q} ejercicios</span></div></div>
  <div class="prog-grid">${per}</div>
  <section style="margin-top:28px"><h2 style="margin-bottom:12px">Frases guardadas</h2><div class="words">${saved}</div></section>
  <section class="card" style="margin-top:28px"><h2 style="margin-bottom:4px">Ajustes</h2>
    <div class="set-row"><label class="lab" for="name-in">Tu nombre</label><input class="field" id="name-in" maxlength="30" value="${esc(S.name)}" placeholder="Para saludarte"></div>
    ${TTS ? `<div class="set-row"><span class="lab">Velocidad de la voz</span><div class="seg">${[[1,'Normal'],[.8,'Más lenta']].map(([r,lab]) => `<button class="${S.rate===r?'on':''}" data-act="rate" data-r="${r}" aria-pressed="${S.rate===r}">${lab}</button>`).join('')}</div></div>` : ''}
    <div class="set-row"><span class="lab">Instalar como app</span>${installRow}</div>
    <div class="set-row" style="flex-direction:column;align-items:stretch"><span class="lab">Pasar tu progreso a otro dispositivo</span>
      <p class="note">Tu progreso se guarda en este dispositivo. Para seguir en el celular o en el computador: copia tu código aquí y pégalo en el otro.</p>
      <div class="row"><button class="btn ghost sm" data-act="export">${ic('send')}Copiar mi código</button><button class="btn ghost sm" data-act="import-open">Pegar un código</button></div>
      ${st.importOpen ? `<textarea class="field" id="import-in" placeholder="Pega aquí el código que empieza por CHEERS1:" style="min-height:90px"></textarea><div class="row"><button class="btn primary sm" data-act="import">Unir progreso</button><button class="link" data-act="import-close">Cancelar</button>${st.importErr ? `<span class="err">${esc(st.importErr)}</span>` : ''}</div>` : ''}</div>
    <div class="set-row"><span class="lab">Borrar todo el progreso</span>${st.confirmReset ? `<div class="row"><span class="note">No se puede deshacer.</span><button class="btn ghost danger sm" data-act="reset-yes">Sí, borrar</button><button class="btn ghost sm" data-act="reset-no">Cancelar</button></div>` : `<button class="btn ghost sm" data-act="reset">Borrar progreso</button>`}</div>
  </section>
  <p class="note" style="margin-top:16px">Contenido versión ${esc(C.version)} · ${LESSONS.length} lecciones</p>`};
}

/* ---------- word sheet ---------- */
function renderSheet(){
  const root = document.getElementById('sheet-root'); const W = st.word;
  if (!W) { root.innerHTML = ''; return; }
  const k = W.w.toLowerCase(); const pr = PRON[k]; const es = VOCAB[k];
  root.innerHTML = `<div class="sheet" role="dialog" aria-label="Pronunciación de ${esc(W.w)}"><div class="sheet-top"><div><p class="sw">${esc(W.w)}</p></div><button class="icon-btn" data-act="sheet-close" aria-label="Cerrar">${ic('x')}</button></div>
    ${pr ? `<p>Suena como <span class="sounds">«${esc(pr[0])}»</span></p>${pr[1] ? `<p class="note">${esc(pr[1])}</p>` : ''}` : ''}${es ? `<p><b>${esc(es)}</b></p>` : ''}
    ${!pr && !es ? `<p class="note">Escúchala en lento y repítela en voz alta.</p>` : ''}
    <div class="row">${TTS ? `<button class="btn primary sm" data-act="say" data-say="${esc(W.w)}">${ic('speaker')}Escuchar</button><button class="btn ghost sm" data-act="say-slow" data-say="${esc(W.w)}">Lento</button>` : '<span class="note">Este navegador no tiene voz.</span>'}</div></div>`;
}
function openWord(w){ w = String(w).replace(/^['’]+|['’]+$/g,''); if (!w) return; speak(w); st.word = {w}; renderSheet(); }

/* ---------- render ---------- */
const VIEWS = {today:viewToday, topics:viewTopics, lesson:viewLesson, practice:viewPractice, tools:viewTools, progress:viewProgress};
function render(){
  const r = (VIEWS[st.view] || viewToday)();
  document.body.classList.toggle('immersive', !!r.immersive && isM());
  document.body.classList.toggle('has-act', !!r.act);
  document.getElementById('main').innerHTML = r.html;
  const a = document.getElementById('actbar'); a.className = 'actbar ' + (r.actClass || ''); a.innerHTML = r.act || ''; a.hidden = !r.act;
  renderChrome(); renderSheet();
}
function keep(ids, fn){
  const saved = ids.map(id => { const el = document.getElementById(id); return el ? [id, el.value, document.activeElement === el] : null; }).filter(Boolean);
  fn();
  saved.forEach(([id, v, f]) => { const el = document.getElementById(id); if (el) { el.value = v; if (f) el.focus(); } });
}
const rr = () => keep(['find-in','speak-in','dlg-in','type-in','name-in','import-in'], render);

/* ---------- quiz actions ---------- */
function recordAnswer(it, ok){
  S.q++; if (ok) S.c++; day().q++;
  const raw = it.raw; const id = rawId(raw);
  srsTouch(raw.id, ok);
  if (!ok) { if (!S.mistakes.some(m => rawId(m) === id)) S.mistakes.unshift(raw); S.mistakes = S.mistakes.slice(0,80); }
  else if (st.quiz.key === 'mistakes') S.mistakes = S.mistakes.filter(m => rawId(m) !== id);
  save();
}
function pick(i){ const q = st.quiz; const it = q.items[q.i]; if (q.picked !== null) return; q.picked = i; const ok = it.opts[i].ok; if (ok) q.correct++; recordAnswer(it, ok); if (it.kind === 'listen' && !ok) speak(it.say); render(); }
function nextQ(){ const q = st.quiz; q.i++; q.picked = null; hush(); if (q.i >= q.items.length) finishQuiz(); render(); autoListen(); }
function autoListen(){ const q = st.quiz; if (!q || q.finished) return; const it = q.items[q.i]; if (it && it.kind === 'listen') speak(it.say); }
function finishQuiz(){
  const q = st.quiz; q.finished = true;
  if (q.key.startsWith('lesson:')) { const id = q.key.slice(7); const L = getLesson(id); const prev = S.done[id]; S.done[id] = {score:Math.max(q.correct, prev ? prev.score : 0), total:q.items.length, date:today()}; if (!prev) { day().l++; day().p += L.phrases.length; } srsAddLesson(L); save(); }
}
function orderCheck(){
  const q = st.quiz; const it = q.items[q.i];
  const a = it.built.map(t => t.w.toLowerCase()).join(' '); const b = it.words.map(w => w.toLowerCase()).join(' ');
  it.checked = true; it.ok = a === b; if (it.ok) q.correct++;
  q.picked = 0; recordAnswer(it, it.ok); render(); speak(it.en);
}
function typeCheck(){
  const q = st.quiz; const it = q.items[q.i]; const el = document.getElementById('type-in'); const v = el ? el.value.trim() : '';
  if (!v) { el && el.focus(); return; }
  it.typed = v; it.res = compare(it.en, v); it.ok = it.res.score >= 85 && !it.res.orderIssue; it.checked = true; if (it.ok) q.correct++;
  q.picked = 0; recordAnswer(it, it.ok); render(); speak(it.en);
}

/* ---------- speaking actions ---------- */
function liveUpdate(text){ const el = document.getElementById('live'); if (el) { el.textContent = text || 'Lo que digas aparecerá aquí'; el.classList.toggle('empty', !text); } }
function micToggle(obj, onFinal){
  if (obj.listening) { stopRec(); return; }
  obj.err = ''; obj.said = '';
  const ok = startRec(t => { obj.said = t; liveUpdate(t); }, (text, err) => {
    obj.listening = false;
    if (text) { obj.said = text; onFinal(); return; }
    if (err === 'not-allowed' || err === 'service-not-allowed') obj.typeMode = true;
    obj.err = MIC_ERR[err] || (err ? 'No se pudo usar el micrófono. Prueba otra vez o escribe la frase.' : MIC_ERR['no-speech']);
    rr();
  });
  if (!ok) { obj.typeMode = true; obj.err = 'No se pudo usar el micrófono aquí. Escribe la frase o usa el dictado del teclado.'; }
  else obj.listening = true;
  rr();
}
function speakCheck(){
  const sp = st.speak; const el = document.getElementById('speak-in'); if (el) sp.said = el.value.trim();
  if (!sp.said) { el && el.focus(); return; }
  sp.res = compare(sp.items[sp.i].en, sp.said); sp.err = ''; day().s++; save(); render();
  document.querySelector('.coach')?.scrollIntoView({behavior:'smooth', block:'center'});
}
function dlgCheck(){
  const d = st.dlg; const L = getLesson(d.lid); const el = document.getElementById('dlg-in'); if (el) d.said = el.value.trim();
  if (!d.said) { el && el.focus(); return; }
  d.res[d.i] = compare(L.dialogue[d.i][1], d.said); d.err = ''; day().s++; save(); render();
  document.querySelector('.coach')?.scrollIntoView({behavior:'smooth', block:'center'});
}
function dlgAdvance(){
  const d = st.dlg; const L = getLesson(d.lid); stopAll();
  d.i++; d.said = ''; d.err = ''; d.showEn = false;
  render();
  const cur = L.dialogue[d.i]; if (cur && cur[0] !== d.role) speak(cur[1]);
  document.querySelector('.dlg-turn, .dialogue .bub:last-child')?.scrollIntoView({behavior:'smooth', block:'center'});
}

/* ---------- requests ---------- */
async function copyText(t){ try { await navigator.clipboard.writeText(t); return true; } catch(e) { return false; } }
async function requestLesson(){
  const q = st.find.q.trim(); if (!q) return;
  if (!S.requests.some(r => deaccent(r.t) === deaccent(q))) { S.requests.unshift({t:q, d:today()}); save(); }
  const text = `Hola! Quiero practicar esto en English For Beautiful Dummies: «${q}»`;
  let shared = false;
  if (navigator.share) { try { await navigator.share({text}); shared = true; } catch(e) { if (e && e.name === 'AbortError') shared = true; } }
  if (!shared) { const ok = await copyText(text); toast(ok ? 'Petición copiada. Pégala en WhatsApp para que la preparen.' : 'Petición guardada en «Tus peticiones».'); }
  else toast('Petición guardada en «Tus peticiones».');
  rr();
}

/* ---------- events ---------- */
document.addEventListener('click', e => {
  const w = e.target.closest('.w');
  if (w && !e.target.closest('button:not(.w)')) { document.querySelectorAll('.w.tapped').forEach(x => x.classList.remove('tapped')); w.classList.add('tapped'); openWord(w.dataset.w); return; }
  const nav = e.target.closest('[data-nav]'); if (nav) { go(nav.dataset.nav); return; }
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act;
  switch (a) {
    case 'open': openLesson(b.dataset.id, Number(b.dataset.step || 0)); break;
    case 'step': setStep(Number(b.dataset.n)); break;
    case 'card': st.card = Number(b.dataset.n); hush(); render(); break;
    case 'reveal': st.revealed[b.dataset.i] = true; render(); break;
    case 'say': speak(b.dataset.say); break;
    case 'say-slow': speak(b.dataset.say, .7); break;
    case 'say-all': { const L = getLesson(st.lessonId); if (L) speakAll(L.dialogue.map(d => d[1])); break; }
    case 'word': openWord(b.dataset.w); break;
    case 'sheet-close': st.word = null; document.querySelectorAll('.w.tapped').forEach(x => x.classList.remove('tapped')); renderSheet(); break;
    case 'tr': st.showTr = !st.showTr; render(); break;
    case 'mark': { const en = b.dataset.en, es = b.dataset.es; if (isSaved(en)) S.saved = S.saved.filter(s => s[0] !== en); else S.saved.unshift([en, es]); save(); render(); break; }
    case 'pick': pick(Number(b.dataset.i)); break;
    case 'next': nextQ(); break;
    case 'skip': { const q = st.quiz; q.i++; q.picked = null; if (q.i >= q.items.length) finishQuiz(); render(); autoListen(); break; }
    case 'tile': { const it = st.quiz.items[st.quiz.i]; const t = it.tiles.find(x => String(x.id) === b.dataset.id); if (t && !it.built.includes(t)) { it.built.push(t); speak(t.w); } render(); break; }
    case 'untile': { const it = st.quiz.items[st.quiz.i]; it.built.splice(Number(b.dataset.i), 1); render(); break; }
    case 'tile-clear': st.quiz.items[st.quiz.i].built = []; render(); break;
    case 'order-check': orderCheck(); break;
    case 'type-check': typeCheck(); break;
    case 'quiz-again': { const k = st.quiz.key; if (k.startsWith('lesson:')) { st.quiz = newQuiz(k, lessonRaws(getLesson(st.lessonId))); render(); } else startPractice(k); break; }
    case 'mic': { if (st.view === 'lesson' && st.step === 4 && st.speak.done || st.practice === 'dialogue') micToggle(st.dlg, () => { const d = st.dlg; d.res[d.i] = compare(getLesson(d.lid).dialogue[d.i][1], d.said); day().s++; save(); rr(); document.querySelector('.coach')?.scrollIntoView({behavior:'smooth', block:'center'}); });
      else micToggle(st.speak, () => { const sp = st.speak; sp.res = compare(sp.items[sp.i].en, sp.said); day().s++; save(); rr(); document.querySelector('.coach')?.scrollIntoView({behavior:'smooth', block:'center'}); });
      break; }
    case 'type-mode': { abortRec(); const o = (st.view === 'lesson' && st.step === 4 && st.speak.done) || st.practice === 'dialogue' ? st.dlg : st.speak; o.typeMode = true; o.listening = false; o.err = ''; rr(); document.getElementById(o === st.dlg ? 'dlg-in' : 'speak-in')?.focus(); break; }
    case 'mic-mode': { const o = (st.view === 'lesson' && st.step === 4 && st.speak.done) || st.practice === 'dialogue' ? st.dlg : st.speak; o.typeMode = false; o.err = ''; rr(); break; }
    case 'speak-check': speakCheck(); break;
    case 'speak-retry': { const sp = st.speak; stopAll(); sp.said = ''; sp.res = null; sp.err = ''; sp.listening = false; render(); break; }
    case 'speak-next': { const sp = st.speak; stopAll(); sp.i++; sp.said = ''; sp.res = null; sp.err = ''; sp.listening = false; if (sp.i >= sp.items.length) sp.done = true; render(); scrollTo(0,0); break; }
    case 'dlg-role': { const d = st.dlg; d.role = b.dataset.r; d.i = 0; d.res = {}; render(); const L = getLesson(d.lid); if (L.dialogue[0][0] !== d.role) speak(L.dialogue[0][1]); break; }
    case 'dlg-next': dlgAdvance(); break;
    case 'dlg-skip': dlgAdvance(); break;
    case 'dlg-show': st.dlg.showEn = true; rr(); break;
    case 'dlg-check': dlgCheck(); break;
    case 'dlg-retry': { const d = st.dlg; stopAll(); delete d.res[d.i]; d.said = ''; d.err = ''; d.listening = false; render(); break; }
    case 'dlg-again': { st.dlg = newDlg(getLesson(st.dlg.lid)); render(); scrollTo(0,0); break; }
    case 'lesson-finish': { st.dlg.role = 'skip'; st.dlg.i = getLesson(st.dlg.lid).dialogue.length; render(); break; }
    case 'practice': startPractice(b.dataset.m); break;
    case 'practice-home': stopAll(); st.view = 'practice'; st.practice = null; render(); scrollTo(0,0); break;
    case 'goto-find': stopAll(); st.view = 'topics'; st.practice = null; render(); setTimeout(() => { document.getElementById('finder')?.scrollIntoView({behavior:'smooth', block:'start'}); document.getElementById('find-in')?.focus(); }, 50); break;
    case 'find': { const el = document.getElementById('find-in'); st.find.q = el ? el.value.trim() : ''; st.find.results = st.find.q ? searchLessons(st.find.q) : null; rr(); break; }
    case 'request': requestLesson(); break;
    case 'req-del': S.requests.splice(Number(b.dataset.i), 1); save(); rr(); break;
    case 'tool': st.tool = b.dataset.t; render(); break;
    case 'rate': S.rate = Number(b.dataset.r); save(); render(); speak('Lovely. This is how I sound now.'); break;
    case 'install': if (installEvt) { installEvt.prompt(); installEvt.userChoice.finally(() => { installEvt = null; rr(); }); } break;
    case 'install-hide': S.installHidden = true; save(); render(); break;
    case 'export': { const code = exportCode(); copyText(code).then(ok => { if (ok) toast('Código copiado. Pégalo en «Pegar un código» en tu otro dispositivo.'); else { st.importOpen = true; rr(); const el = document.getElementById('import-in'); if (el) { el.value = code; el.select(); } toast('Copia el código del recuadro.'); } }); break; }
    case 'import-open': st.importOpen = true; st.importErr = ''; rr(); document.getElementById('import-in')?.focus(); break;
    case 'import-close': st.importOpen = false; st.importErr = ''; render(); break;
    case 'import': {
      const el = document.getElementById('import-in'); const v = (el ? el.value : '').trim();
      try { if (!v.startsWith('CHEERS1:')) throw 0; const other = JSON.parse(b64d(v.slice(8))); if (!other || typeof other !== 'object' || !other.done) throw 0; S = mergeState(S, other); save(); st.importOpen = false; st.importErr = ''; render(); toast('¡Listo! Progreso unido.'); }
      catch(err) { st.importErr = 'Ese código no es válido. Cópialo completo, empieza por CHEERS1:'; rr(); }
      break; }
    case 'reset': st.confirmReset = true; render(); break;
    case 'reset-no': st.confirmReset = false; render(); break;
    case 'reset-yes': { const inst = S.installHidden; S = fresh(); S.known = LESSONS.map(l => l.id); S.installHidden = inst; save(); st.confirmReset = false; render(); toast('Progreso borrado.'); break; }
  }
});
document.addEventListener('keydown', e => {
  if (e.target.id === 'find-in' && e.key === 'Enter') { e.preventDefault(); document.querySelector('[data-act="find"]')?.click(); }
  if (e.target.id === 'type-in' && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); typeCheck(); }
  if (e.target.id === 'speak-in' && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); speakCheck(); }
  if (e.target.id === 'dlg-in' && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); dlgCheck(); }
  if (e.key === 'Escape' && st.word) { st.word = null; renderSheet(); }
});
document.addEventListener('change', e => { if (e.target.id === 'name-in') { S.name = e.target.value.trim().slice(0,30); save(); } });
document.addEventListener('input', e => {
  if (e.target.id === 'find-in') st.find.q = e.target.value;
  if (e.target.id === 'speak-in' && st.speak) st.speak.said = e.target.value;
  if (e.target.id === 'dlg-in' && st.dlg) st.dlg.said = e.target.value;
  if (e.target.id === 'type-in' && st.quiz) { const it = st.quiz.items[st.quiz.i]; if (it) it.typed = e.target.value; }
});
window.addEventListener('online', () => renderChrome());
window.addEventListener('offline', () => renderChrome());

/* ---------- start ---------- */
render();
(() => {
  const newOnes = LESSONS.filter(l => !S.known.includes(l.id)).length;
  if (S.lastVersion && S.lastVersion !== C.version) toast(newOnes ? `¡Novedades! ${newOnes} lección${newOnes === 1 ? '' : 'es'} nueva${newOnes === 1 ? '' : 's'}.` : 'La app se actualizó.');
  if (S.lastVersion !== C.version) { S.lastVersion = C.version; save(); }
})();
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}
