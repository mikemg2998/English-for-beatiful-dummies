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
  plus:'<path d="M12 5v14M5 12h14"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'
};
const ic = (n, cls='') => `<svg class="ic ${n==='flame'?'fill ':''}${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n]||''}</svg>`;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tt = s => ` data-tip="${esc(s)}"`;
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
const KIND = {translate:'Traduce al inglés', natural:'Elige la respuesta natural', complete:'Completa la frase', meaning:'¿Qué significa?', order:'Ordena la frase en inglés', listen:'Escucha y elige lo que oíste', type:'Escríbelo en inglés', gap:'Completa la frase', trap:'¿Qué significa de verdad?', ukus:'Británico o americano', sound:'¿Cómo suena?', gform:'Elige la forma correcta', gsit:'¿Qué dirías?', gfix:'Detecta el error', gwhich:'¿Qué tiempo es?', form:'Escribe la forma del verbo', irr:'Verbos irregulares', vprep:'Mira el dibujo', vpick:'Elige el dibujo', vclock:'Mira el reloj', viot:'¿In, on o at?', vcomp:'Mira los edificios', vtrue:'Mira el dibujo', vqty:'Mira el dibujo', vtl:'Elige la línea de tiempo', vtl2:'Mira la línea de tiempo', place:'Coloca el caramelo'};
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
const fresh = () => ({v:3, name:'', done:{}, days:{}, saved:[], srs:{}, mistakes:[], requests:[], known:null, rate:1, q:0, c:0, lastVersion:'', updatedAt:0, installHidden:false, packs:{}, best:{}, goal:10, gram:{}, cmp:{}, vis:{}});
let S = fresh();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch(e) {}
function save(){ S.updatedAt = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {} }
const pad = n => String(n).padStart(2,'0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const today = () => iso(new Date());
const addDays = n => { const d = new Date(); d.setDate(d.getDate()+n); return iso(d); };
function day(k = today()){ return S.days[k] || (S.days[k] = {l:0,q:0,p:0,s:0,a:0}); }
const active = k => !!(S.days[k] && (S.days[k].q > 0 || S.days[k].l > 0 || S.days[k].s > 0 || S.days[k].a > 0));
function streak(){ let n = 0; const d = new Date(); if (!active(iso(d))) d.setDate(d.getDate()-1); while (active(iso(d))) { n++; d.setDate(d.getDate()-1); } return n; }
function last7(){ const t = {l:0,q:0,p:0,s:0,a:0}; const d = new Date(); for (let i=0;i<7;i++){ const x = S.days[iso(d)]; if (x){ t.l+=x.l||0; t.q+=x.q||0; t.p+=x.p||0; t.s+=x.s||0; t.a+=x.a||0; } d.setDate(d.getDate()-1); } return t; }
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
    if (k === 'listen') { const nr = nearOptions(en, 'listen'); return {k:'listen', en, es, opts:[en, ...nr.map(x => x.t)], whys:['', ...nr.map(x => x.why)], id}; }
    if (k === 'type') return {k:'type', en, es, id};
    const nr = nearOptions(en, 'read');
    return {k:'mc', kind:'translate', prompt:`«${es}»`, opts:[en, ...nr.map(x => x.t)], whys:['', ...nr.map(x => x.why)], explain: tip || '', id};
  }
  const [en, es] = r.item; const roll = Math.random(); const nw = nearWords(en);
  const wy = x => x.why || (x.es ? `«${x.w}» significa «${x.es}».` : `«${x.w}» es otra palabra.`);
  if ((hint === 'listen' || roll >= .85) && TTS) return {k:'listen', en, es, opts:[en, ...nw.map(x => x.w)], whys:['', ...nw.map(x => `Esa es «${x.w}»${x.es ? ` (${x.es})` : ''}; en el audio suena «${en}».`)], id};
  if (roll < .45) { const ne = nw.filter(x => x.es && x.es !== es); const fill = distract(ALL_WORDS_ES, es, 6).filter(e => !ne.some(x => x.es === e)); const opts = [...ne.map(x => ({t:x.es, why:`Eso es «${x.w}».`})), ...fill.map(e => ({t:e, why:''}))].slice(0,3);
    return {k:'mc', kind:'meaning', prompt:en, opts:[es, ...opts.map(o => o.t)], whys:['', ...opts.map(o => o.why)], explain:`«${en}» = ${es}.`, id}; }
  return {k:'mc', kind:'translate', prompt:`«${es}»`, opts:[en, ...nw.map(x => x.w)], whys:['', ...nw.map(wy)], explain:`«${en}» = ${es}.`, id};
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
const play = (t, cls='icon-btn') => TTS ? `<button class="${cls}" data-act="say" data-say="${esc(t)}" aria-label="Escuchar"${tt('Escuchar con voz británica')}>${ic('speaker')}</button>` : '';
const playSlow = t => TTS ? `<button class="slow" data-act="say-slow" data-say="${esc(t)}" aria-label="Escuchar despacio"${tt('Escuchar más despacio')}>Lento</button>` : '';

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
const st = {view:'today', lessonId:null, step:0, card:0, revealed:{}, showTr:false, quiz:null, speak:null, dlg:null, practice:null, res:{tool:'connectors', mode:'packs'}, gram:{tab:'tenses'}, tense:null, cmp:null, vis:null, pack:null, match:null, backTo:null, find:{q:'', results:null}, word:null, confirmReset:false, importOpen:false, importErr:'', toast:''};
const mq = window.matchMedia('(max-width: 899px)');
const isM = () => mq.matches;
try { mq.addEventListener('change', () => rr()); } catch(e) {}
let installEvt = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; if (st.view === 'today' || st.view === 'progress') rr(); });
const standalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const IOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

/* ---------- exercises ---------- */
const toRaw = q => ({k:'mc', kind:q[0], prompt:q[1], opts:q[2], explain:q[3], whys:['', ...(q[4] || [])]});
const rawId = r => r.uid || r.id || (r.k === 'mc' ? 'mc:' + r.prompt : r.k === 'form' ? 'form:' + r.s : r.k + ':' + r.en);
function mkItem(raw){
  if (raw.k === 'order') {
    const words = raw.en.replace(/[.,!?¿¡;:…]/g,'').split(/\s+/).filter(Boolean);
    const tiles = words.map((w,i) => ({w: i === 0 && !/^I($|')/.test(w) && w !== w.toUpperCase() && !/^[A-Z][a-z]*[A-Z]/.test(w) && !/^(Malta|Valletta|Sliema|Gozo|Mdina|Gżira|Golden|Manchester|Monday|Friday|Saturday|Thursday|Sunday|Tuesday|Wednesday|Karen|Tom|Ana|Ben|Sam|Emma|Ollie|Sophie|Liam|Marco|Helen|Juan|Sarah|Mark|Priya|LinkedIn|AutoCAD|Revit)$/.test(w) ? w[0].toLowerCase() + w.slice(1) : w, id:i}));
    let sh = shuffle(tiles.slice()); let guard = 0;
    while (sh.length > 1 && sh.every((t,i) => t.id === i) && guard++ < 6) sh = shuffle(tiles.slice());
    return {kind:'order', raw, en:raw.en, es:raw.es, words, tiles:sh, built:[], checked:false, ok:null};
  }
  if (raw.k === 'listen') return {kind:'listen', raw, say:raw.en, es:raw.es, opts: shuffle(raw.opts.map((t,i) => ({t, ok:i===0, why:(raw.whys || [])[i] || ''}))), explain: raw.es ? 'Significa: ' + raw.es : ''};
  if (raw.k === 'type') return {kind:'type', raw, en:raw.en, es:raw.es, typed:'', res:null, checked:false, ok:null};
  if (raw.k === 'form') return {kind:'form', raw, typed:'', checked:false, ok:null, close:false};
  if (raw.k === 'place') return {kind:'place', raw, chosen:null, checked:false, ok:null};
  return {kind:raw.kind, raw, prompt:raw.prompt, explain:raw.explain, opts: shuffle(raw.opts.map((t,i) => ({...(t && typeof t === 'object' ? {t: t.label || '', pic: t} : {t}), ok:i===0, why:(raw.whys || [])[i] || ''})))};
}
function newQuiz(key, raws, title){ return {key, title, items: raws.filter(Boolean).map(mkItem), i:0, picked:null, correct:0, finished:false}; }
function lessonRaws(L){
  const mc = L.quiz.map(toRaw);
  const cand = shuffle(L.phrases.map((p,i) => ({p, i})).filter(x => wc(x.p[0]) >= 3 && wc(x.p[0]) <= 10));
  const ord = cand.slice(0,2).map(x => ({k:'order', en:x.p[0], es:x.p[1], id:`p:${L.id}:${x.i}`}));
  let listen = null;
  if (TTS && L.phrases.length >= 4) { const cs = L.phrases.map((p,i) => i).filter(i => wc(L.phrases[i][0]) <= 14); const i = pick1(cs.length ? cs : [0]); const p = L.phrases[i]; const nr = nearOptions(p[0], 'listen'); listen = {k:'listen', en:p[0], es:p[1], opts:[p[0], ...nr.map(x => x.t)], whys:['', ...nr.map(x => x.why)], id:`p:${L.id}:${i}`}; }
  return [mc[0], ord[0], mc[1], listen, mc[2], ord[1], mc[3], mc[4], ...mc.slice(5)].filter(Boolean);
}
function newSpeak(key, items){ return {key, items, i:0, said:'', res:null, listening:false, err:'', done:false, typeMode:!SR}; }
function speakPickLesson(L, n=3){ return shuffle(L.phrases.filter(p => wc(p[0]) <= 12).slice()).slice(0,n).map(p => ({en:p[0], es:p[1]})); }
function newDlg(L){ return {lid:L.id, role:null, i:0, res:{}, said:'', listening:false, err:'', showEn:false, typeMode:!SR, done:false}; }

/* ---------- near-miss options: wrong answers that differ in one small thing ---------- */
const TK = window.CHEERS_TRICKY || {pairs:[], swaps:[], verbs:[], adjs:[], gaps:{connectors:[], phrasal:[]}};
const VERBS = new Set(TK.verbs), ADJS = new Set(TK.adjs);
const IRRV = (window.CHEERS_GRAMMAR && window.CHEERS_GRAMMAR.irregular) || [];
const IRR_BY_BASE = Object.fromEntries(IRRV.map(v => [v[0], v]));
const IRR_BY_PAST = {}; IRRV.forEach(v => v[1].split(' / ').forEach(p => { if (p !== v[0] && !IRR_BY_PAST[p]) IRR_BY_PAST[p] = v; }));
const IRR_BY_PART = {}; IRRV.forEach(v => { if (v[2] !== v[1] && v[0] !== 'be') IRR_BY_PART[v[2]] = v; });
const PAIRS = []; TK.pairs.forEach(([a, ae, b, be, h]) => { PAIRS.push([a, ae, b, be, !!h]); PAIRS.push([b, be, a, ae, !!h]); });
const PHRASE_ES = (() => { const m = {}; LESSONS.forEach(l => l.phrases.forEach(p => { m[p[0]] = p[1]; })); return m; })();
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const capLike = (src, rep) => /^[A-Z]/.test(src) && rep ? rep[0].toUpperCase() + rep.slice(1) : rep;
const cap1 = s => s ? s[0].toUpperCase() + s.slice(1) : s;
const nkey = s => String(s).toLowerCase().replace(/[’]/g, "'").replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();
/* replace the first whole-word match of `from` (any capitals) with `to`, keeping a leading capital */
function swapWord(s, from, to){
  const re = new RegExp(`(^|[^A-Za-z'’])(${reEsc(from)})(?![A-Za-z'’])`, 'i'); const m = s.match(re); if (!m) return null;
  return s.slice(0, m.index) + m[1] + capLike(m[2], to) + s.slice(m.index + m[0].length);
}
const third = v => v === 'have' ? 'has' : v === 'do' ? 'does' : v === 'go' ? 'goes' : /(s|sh|ch|x|o)$/.test(v) ? v + 'es' : /[^aeiou]y$/.test(v) ? v.slice(0,-1) + 'ies' : v + 's';
const unthird = w => { if (w === 'has') return 'have'; if (/ies$/.test(w)) return w.slice(0,-3) + 'y'; if (/(s|sh|ch|x|o)es$/.test(w) && VERBS.has(w.slice(0,-2))) return w.slice(0,-2); if (/s$/.test(w)) return w.slice(0,-1); return null; };
const pastOf = v => IRR_BY_BASE[v] ? IRR_BY_BASE[v][1].split(' / ')[0] : regularEd(v);
const regularPastBase = w => { if (!/ed$/.test(w)) return null; const c = [w.slice(0,-2), w.slice(0,-1), w.slice(0,-3) + 'y', w.slice(0,-3)]; return c.find(x => VERBS.has(x) && regularEd(x) === w) || null; };
const DAYS_RE = 'Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday';
const MONTHS_RE = 'January|February|March|April|May|June|July|August|September|October|November|December';
const NUMW = 'a|an|one|two|three|four|five|six|seven|eight|nine|ten|twenty|\\d+|many|several|a few';
const UNIT = '(?:minute|hour|day|week|month|year)s?';
const COMP = {bigger:'big', cheaper:'cheap', smaller:'small', older:'old', newer:'new', faster:'fast', longer:'long', shorter:'short', taller:'tall', warmer:'warm', colder:'cold', hotter:'hot', nicer:'nice', easier:'easy', busier:'busy', earlier:'early', quicker:'quick', cleaner:'clean', closer:'close', cooler:'cool'};
const NOUN_STOP = new Set('and or but to for with at in on of as than enough that this the a an is are was were be been very really so too also just not it its my your'.split(' '));
const PAST_SKIP = new Set(['was','were','did','had','left','lost','broke','won','saw','found','felt','read']);
const SUBJ_ES = {he:'él', she:'ella', him:'a él', his:'de él', her:'de ella'};

function mutations(en){
  const out = []; const base = nkey(en);
  const add = (t, why, k, L = true, R = true) => { if (t && nkey(t) !== base) out.push({t, why, k, L, R}); };
  let m;
  /* typical Spanish-speaker mistakes */
  TK.swaps.forEach(([right, wrong, why]) => { const t = swapWord(en, right, wrong); if (t) add(t, why, 'swap', !/escribe|lleva doble|lleva una sola|termina en/.test(why), true); });
  /* words that sound almost the same */
  PAIRS.forEach(([a, ae, b, be, h]) => { const t = swapWord(en, a, b); if (t) add(t, `Esta dice «${b}» (${be}); la frase correcta lleva «${a}» (${ae}).${h ? ' Suenan igual, pero se escriben distinto.' : ''}`, 'pair', !h, true); });
  /* yes / no flips */
  [['can',"can't"],['could',"couldn't"],['is',"isn't"],['are',"aren't"],['was',"wasn't"],['were',"weren't"],['will',"won't"],['do',"don't"],['does',"doesn't"],['did',"didn't"],['have',"haven't"],['has',"hasn't"],['should',"shouldn't"],['would',"wouldn't"]].forEach(([p, n]) => {
    let t = swapWord(en, n, p); if (t) add(t, `Esta es afirmativa («${p}»); la frase correcta es negativa: «${n}».${p === 'can' ? ' En británico «can\'t» suena «kaant», larga.' : ''}`, 'neg');
    t = swapWord(en, p, n); if (t) add(t, `Esta es negativa («${n}»); la frase correcta es afirmativa: «${p}».`, 'neg');
  });
  /* he / she (only for listening: in Spanish «su» can be both) */
  [['he','she'],['she','he'],['him','her'],['his','her']].forEach(([a, b]) => { const t = swapWord(en, a, b); if (t) add(t, `Esta dice «${b}» (${SUBJ_ES[b]}); la frase dice «${a}» (${SUBJ_ES[a]}).`, 'pron', true, false); });
  /* missing subject: «Es…» → «Is…» */
  if (/^It's /.test(en)) add(en.replace(/^It's /, 'Is '), 'En inglés el sujeto es obligatorio: «It\'s…». En español decimos «Es…», pero en inglés no puede faltar el «it».', 'subj');
  if (/^It was /.test(en)) add(en.replace(/^It was /, 'Was '), 'En inglés el sujeto es obligatorio: «It was…». No puede faltar el «it».', 'subj');
  if (/^There(?:'s| is) /.test(en)) add(en.replace(/^There(?:'s| is) /, 'Is '), '«Hay» = «there is»: no se puede empezar solo con «Is».', 'subj');
  if (/^There are /.test(en)) add(en.replace(/^There are /, 'Are '), '«Hay» (plural) = «there are».', 'subj');
  /* questions */
  if ((m = en.match(/^(Do|Does|Did) (you|we|they|I|he|she|it)\b(.*)$/))) add(cap1(m[2]) + m[3], `En inglés las preguntas necesitan «${m[1]}» delante: «${m[1]} ${m[2]}…?».`, 'aux');
  if ((m = en.match(/^(Can|Could|Will|Would|Shall|Should|Are|Is|Was|Were|Have|Has|Am) (you|we|they|I|he|she|it|there)\b(.*\?)$/))) add(cap1(m[2]) + ' ' + m[1].toLowerCase() + m[3], `En las preguntas el auxiliar va antes del sujeto: «${m[1]} ${m[2]}…?».`, 'aux');
  if ((m = en.match(/^(What time|How long|How much|How many|How often|What|Where|When|Why|How|Who|Which) (do|does|did) (you|we|they|I|he|she|it)\b(.*\?)$/))) add(`${m[1]} ${m[3]}${m[4]}`, `Falta el auxiliar: «${m[1]} ${m[2]} ${m[3]}…?».`, 'aux');
  if ((m = en.match(/^(What time|How long|What|Where|When|Why|How|Who|Which) (are|is|was|were|can|could|will|would|have|has) (you|we|they|I|he|she|it)\b(.*\?)$/))) add(`${m[1]} ${m[3]} ${m[2]}${m[4]}`, `En las preguntas el auxiliar va antes del sujeto: «${m[1]} ${m[2]} ${m[3]}…?».`, 'aux');
  /* -s with he / she / it */
  for (const x of en.matchAll(/\b(he|she|it)\s+([a-z]+)\b/gi)) {
    const w = x[2], b = unthird(w);
    if (b && VERBS.has(b) && !['is','was','does'].includes(w)) add(en.slice(0, x.index) + x[1] + ' ' + b + en.slice(x.index + x[0].length), w === 'has' ? 'Con he / she / it, «have» es «has».' : `Con he / she / it el verbo lleva -s: «${w}».`, 'sfx');
  }
  for (const x of en.matchAll(/\b(I|you|we|they)\s+([a-z]+)\b/gi)) {
    const w = x[2]; if (!VERBS.has(w) || w === 'do') continue;
    const before = en.slice(0, x.index).trim().split(/\s+/).pop().toLowerCase().replace(/[^a-z']/g, '');
    const modal = ['can','could','will','would','should','shall','must','do','did',"don't","didn't","can't","won't","let's"].includes(before);
    add(en.slice(0, x.index) + x[1] + ' ' + third(w) + en.slice(x.index + x[0].length), modal ? `Después de «${before}» el verbo va en forma base, sin -s.` : `Con ${x[1].toLowerCase() === 'i' ? 'I' : x[1].toLowerCase()} el verbo va sin -s: «${w}».`, 'sfx');
  }
  if ((m = en.match(/\b(doesn't|does not)\s+([a-z]+)\b/i)) && VERBS.has(m[2])) add(en.replace(m[0], `${m[1]} ${third(m[2])}`), `Con «doesn't» la -s ya la lleva el auxiliar: «doesn't ${m[2]}».`, 'sfx');
  if ((m = en.match(/\b(Does (?:he|she|it|your \w+|the \w+))\s+([a-z]+)\b/)) && VERBS.has(m[2])) add(en.replace(m[0], `${m[1]} ${third(m[2])}`), `Con «does» el verbo va sin -s: «${m[2]}».`, 'sfx');
  /* past forms */
  if ((m = en.match(/\b(didn't|did not|Did (?:you|he|she|it|we|they|I))\s+([a-z]+)\b/)) && (VERBS.has(m[2]) || IRR_BY_BASE[m[2]])) add(en.replace(m[0], `${m[1]} ${pastOf(m[2])}`), `Después de «did / didn't» va la forma base: «${m[2]}», no el pasado.`, 'past');
  for (const x of en.matchAll(/\b([a-z]+)\b/gi)) { const w = x[1].toLowerCase(), v = IRR_BY_PAST[w]; if (v && !PAST_SKIP.has(w) && regularEd(v[0]) !== w) { add(en.slice(0, x.index) + capLike(x[1], regularEd(v[0])) + en.slice(x.index + x[1].length), `«${v[0]}» es irregular: el pasado es «${w}», no «${regularEd(v[0])}».`, 'past'); break; } }
  for (const x of en.matchAll(/\b(have|has|had|haven't|hasn't|hadn't|\w+'ve|\w+'s|\w+'d)((?: just| already| never| ever| always| not)?) ([a-z]+)\b/gi)) {
    const v = IRR_BY_PART[x[3]]; if (!v) continue; const p = v[1].split(' / ')[0];
    add(en.slice(0, x.index) + x[1] + x[2] + ' ' + p + en.slice(x.index + x[0].length), `Después de «have» va el participio («${x[3]}»), no el pasado («${p}»).`, 'past');
  }
  if (/\b(yesterday|last (?:week|year|month|night|summer|time)|ago|in (?:19|20)\d\d)\b/i.test(en)) {
    for (const x of en.matchAll(/\b([a-z]+)\b/g)) { const w = x[1]; const v = IRR_BY_PAST[w]; const b = v ? v[0] : regularPastBase(w); if (b && b !== 'be') { add(en.slice(0, x.index) + b + en.slice(x.index + w.length), `Habla del pasado (yesterday, last…, ago): el verbo va en pasado, «${w}».`, 'past'); break; } }
  }
  /* modals + to */
  if ((m = en.match(/\b(will|won't|'ll|can|can't|must|should|could)\s+([a-z]+)\b/i)) && (VERBS.has(m[2]) || IRR_BY_BASE[m[2]] || m[2] === 'be')) add(en.replace(m[0], `${m[1]} to ${m[2]}`), `Después de «${m[1].replace(/^'/, 'wi')}» el verbo va sin «to».`, 'will');
  if ((m = en.match(/\b(I'm|I am|you're|we're|they're|he's|she's|it's)\s+going to\b/i))) {
    const s0 = m[1].split(/'| /)[0]; const g = /^(he|she|it)$/i.test(s0) ? 'goes to' : 'go to';
    add(en.replace(m[0], `${s0} ${g}`), '«Voy a…» se dice «I\'m going to…», no «I go to…».', 'going');
  }
  if ((m = en.match(/\b(I'm|you're|we're|they're|he's|she's)\s+([a-z]+ing)\b/i)) && !/^going$/.test(m[2])) add(en.replace(m[0], `${m[1].split("'")[0]} ${m[2]}`), `Falta el verbo be: «${m[1]} ${m[2]}».`, 'be');
  /* word order */
  if ((m = en.match(/\b(I|you|we|they|he|she)\s+(always|usually|often|sometimes|never|rarely)\s+([a-z]+)\b/i))) add(en.replace(m[0], `${m[1]} ${m[3]} ${m[2]}`), `«${m[2]}» va antes del verbo: «${m[1]} ${m[2]} ${m[3]}».`, 'order');
  for (const x of en.matchAll(/\b(a|an|the|my|your|his|her|our|their|this|that|some)\s+([a-z]+)\s+([a-z]+)\b/gi)) {
    const adj = x[2].toLowerCase(), noun = x[3]; if (!ADJS.has(adj) || NOUN_STOP.has(noun.toLowerCase()) || ADJS.has(noun.toLowerCase()) || /ly$/.test(noun)) continue;
    let det = x[1]; if (/^an?$/i.test(det)) det = capLike(det, /^[aeiou]/i.test(noun) ? 'an' : 'a');
    add(en.slice(0, x.index) + `${det} ${noun} ${x[2]}` + en.slice(x.index + x[0].length), `En inglés el adjetivo va antes del nombre: «${x[2]} ${noun}», no «${noun} ${x[2]}».`, 'adjorder'); break;
  }
  if ((m = en.match(/\b(like|love|enjoy|miss|thank)( [a-z]+)( very much| so much| a lot)\b/i))) add(en.replace(m[0], `${m[1]}${m[3]}${m[2]}`), `«${m[3].trim()}» va al final: «${m[1]}${m[2]}${m[3]}».`, 'order');
  /* prepositions of time */
  if ((m = en.match(new RegExp(`\\bon (${DAYS_RE})`)))) add(en.replace(m[0], `in ${m[1]}`), 'Con los días se usa «on»: «on Monday».', 'time');
  if ((m = en.match(new RegExp(`\\bin (${MONTHS_RE}|summer|winter|spring|autumn|(?:19|20)\\d\\d)\\b`)))) add(en.replace(m[0], `on ${m[1]}`), 'Con meses, años y estaciones se usa «in».', 'time');
  if ((m = en.match(/\bat (\d{1,2}(?::\d\d)?|noon|midnight|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\b/))) add(en.replace(m[0], `in ${m[1]}`), 'Con las horas se usa «at»: «at seven».', 'time');
  if ((m = en.match(/\bin the (morning|afternoon|evening)\b/))) add(en.replace(m[0], `at the ${m[1]}`), `Partes del día: «in the ${m[1]}» (pero «at night»).`, 'time');
  if ((m = en.match(new RegExp(`\\bfor ((?:${NUMW}) ${UNIT})\\b`)))) {
    add(en.replace(m[0], `since ${m[1]}`), 'Con una duración se usa «for»; «since» es para el punto de inicio (since 2023).', 'dur');
    add(en.replace(m[0], `during ${m[1]}`), 'Para una duración se usa «for»; «during» es durante un evento (during the meeting).', 'dur');
  }
  if ((m = en.match(new RegExp(`\\bsince ((?:19|20)\\d\\d|${MONTHS_RE}|${DAYS_RE}|yesterday|last \\w+)\\b`)))) {
    add(en.replace(m[0], `for ${m[1]}`), 'Con un punto de inicio (2023, Monday) se usa «since»; «for» es para duraciones.', 'dur');
    add(en.replace(m[0], `from ${m[1]}`), '«From» necesita un final (from… to…). Desde entonces hasta ahora es «since».', 'dur');
  }
  if ((m = en.match(new RegExp(`\\b((?:${NUMW}) ${UNIT}) ago\\b`)))) add(en.replace(m[0], `ago ${m[1]}`), '«Ago» va después del tiempo: «two years ago».', 'ago');
  /* countable / uncountable, comparatives, double negatives */
  if ((m = en.match(/\bmuch (money|time|water|work|information|coffee|milk|traffic|noise|space|food|luck|fun|experience)\b/))) add(en.replace(m[0], `many ${m[1]}`), `«${m[1]}» es incontable: «much», no «many».`, 'many');
  if ((m = en.match(/\bmany (people|things|times|days|years|hours|friends|emails|ideas|questions|places|clients|photos|books)\b/))) add(en.replace(m[0], `much ${m[1]}`), `«${m[1]}» es contable (plural): «many», no «much».`, 'many');
  for (const x of en.matchAll(/\b([a-z]+er)\b/g)) { const b = COMP[x[1]]; if (b) { add(en.slice(0, x.index) + `more ${b}` + en.slice(x.index + x[1].length), `Con adjetivos cortos se añade -er: «${x[1]}», no «more ${b}».`, 'comp'); break; } }
  if ((m = en.match(/\bbetter\b/))) add(en.replace(m[0], 'more good'), '«Good» es irregular: «better», nunca «more good».', 'comp');
  if ((m = en.match(/\bthe best\b/i))) add(en.replace(m[0], capLike(m[0], 'the most good')), '«Good» es irregular: «the best», nunca «the most good».', 'comp');
  if ((m = en.match(/n't ((?:\w+ )?)(anything|anyone|anybody|anywhere)\b/))) add(en.replace(m[0], `n't ${m[1]}${({anything:'nothing', anyone:'nobody', anybody:'nobody', anywhere:'nowhere'})[m[2]]}`), `En inglés no hay doble negación: con «n't» va «${m[2]}».`, 'dneg');
  /* professions need a / an */
  if ((m = en.match(/\b(I'm|I am|she's|he's|You're) (a|an) (architect|designer|teacher|engineer|student|nurse|doctor|presenter|artist|manager|developer|waiter|waitress)\b/i))) add(en.replace(m[0], `${m[1]} ${m[3]}`), `Con profesiones se usa «${m[2]}»: «${m[1]} ${m[2]} ${m[3]}».`, 'art');
  /* listening only: a word missing or added */
  const words = en.split(/\s+/);
  const di = words.findIndex((w, i) => i > 0 && /^(really|very|just|also|so|quite|too|always|still|already|actually|maybe|all|much|now|again|here|there|today|later|soon)$/i.test(w.replace(/[.,!?]/g, '')));
  if (di > 0) { const w0 = words[di].replace(/[.,!?]/g, ''); const ws = words.slice(); const tail = words[di].slice(w0.length); ws.splice(di, 1); if (tail) ws[di-1] += tail; add(ws.join(' '), `Falta «${w0}»: en el audio sí se oye.`, 'drop', true, false); }
  if ((m = en.match(/\b(I|you|we|they) (like|love|need|want|enjoy|hope|miss)\b/i))) add(en.replace(m[0], `${m[1]} really ${m[2]}`), 'Sobra «really»: en el audio no lo dice.', 'insert', true, false);
  /* present ↔ past of be */
  const BE = [["I'm", "I was", 'presente', 'pasado'], ["I was", "I am", 'pasado', 'presente'], ["am", "was"], ["is", "was"], ["are", "were"], ["was", "is", 'pasado', 'presente'], ["were", "are", 'pasado', 'presente'], ["it's", "it was"], ["that's", "that was"], ["you're", "you were"], ["we're", "we were"], ["they're", "they were"]];
  for (const [a, b, t1 = 'presente', t2 = 'pasado'] of BE) { const t = swapWord(en, a, b); if (t) { add(t, `Esta está en ${t2} («${b}»); la frase correcta está en ${t1} («${a}»).`, 'tense'); break; } }
  /* present ↔ past of other verbs */
  for (const x of en.matchAll(/\b(I|you|we|they|he|she|it)\s+([a-z]+)\b/gi)) {
    const w = x[2]; const b3 = VERBS.has(w) ? w : (unthird(w) && VERBS.has(unthird(w)) ? unthird(w) : null);
    if (b3 && !['do','have'].includes(b3)) { const pv = pastOf(b3); add(en.slice(0, x.index) + x[1] + ' ' + pv + en.slice(x.index + x[0].length), `Esta está en pasado («${pv}»); la frase correcta está en presente («${w}»).`, 'tense'); break; }
    const pb = IRR_BY_PAST[w] ? IRR_BY_PAST[w][0] : regularPastBase(w);
    if (pb && !PAST_SKIP.has(w)) { const pr = /^(he|she|it)$/i.test(x[1]) ? third(pb) : pb; add(en.slice(0, x.index) + x[1] + ' ' + pr + en.slice(x.index + x[0].length), `Esta está en presente («${pr}»); la frase correcta habla del pasado («${w}»).`, 'tense'); break; }
  }
  /* my ↔ your, this ↔ these, I ↔ we */
  const POSS = {my:['your','tu'], your:['my','mi'], our:['their','su (de ellos)'], their:['our','nuestro']}, POSS_ES = {my:'mi', your:'tu', our:'nuestro', their:'su (de ellos)'};
  for (const x of en.matchAll(/\b(my|your|our|their)\b/gi)) { const a = x[1].toLowerCase(), [b, bes] = POSS[a]; add(en.slice(0, x.index) + capLike(x[1], b) + en.slice(x.index + x[1].length), `Esta dice «${b}» (${bes}); la frase dice «${a}» (${POSS_ES[a]}).`, 'poss'); break; }
  if ((m = en.match(/\bthis\b/i))) add(swapWord(en, 'this', 'these'), '«These» es plural (estos); con una sola cosa es «this».', 'this');
  if ((m = en.match(/\b(I'm|I've|I'll|I'd)\b/))) add(swapWord(en, m[1], {"I'm":"we're", "I've":"we've", "I'll":"we'll", "I'd":"we'd"}[m[1]]), `Esta habla de «we» (nosotros); la frase dice «I» (yo).`, 'subj2');
  else if ((m = en.match(/^I ([a-z]+)\b/)) && (VERBS.has(m[1]) || IRR_BY_PAST[m[1]] || regularPastBase(m[1]))) add(en.replace(/^I /, 'We '), 'Esta dice «we» (nosotros); la frase dice «I» (yo).', 'subj2');
  /* adverbs in the wrong place */
  if ((m = en.match(/\b(just|really|already|also|still|never|only|always)\s+([a-z]+)\b/i)) && (VERBS.has(m[2]) || IRR_BY_PAST[m[2]] || regularPastBase(m[2]) || /ing$/.test(m[2]))) add(en.replace(m[0], `${m[2]} ${m[1]}`), `«${m[1]}» va antes del verbo: «${m[1]} ${m[2]}».`, 'order');
  /* prepositions */
  const PREP = {in:['on','at'], on:['in','at'], at:['in','on'], to:['for','at'], for:['to','of'], of:['from','for'], with:['of','to'], about:['of','on'], from:['of','since'], by:['with','until']};
  const wsP = en.split(/\s+/);
  const clean = w => w.replace(/[.,!?;:]/g, '');
  for (let i = 1; i < wsP.length - 1; i++) { const a = wsP[i].toLowerCase(); if (!PREP[a]) continue; const nx = clean(wsP[i+1]).toLowerCase(); const w2 = wsP.slice();
    if (a === 'to' && (VERBS.has(nx) || IRR_BY_BASE[nx] || nx === 'be')) { w2.splice(i, 1); add(w2.join(' '), `Falta «to»: «${clean(wsP[i-1])} to ${nx}».`, 'prep'); break; }
    w2[i] = pick1(PREP[a]); add(w2.join(' '), `Aquí la preposición es «${a}»: «${clean(wsP[i-1])} ${a} ${clean(wsP[i+1])}».`, 'prep'); break; }
  /* last resort: a word missing, or two words swapped */
  const cand = wsP.map((w, i) => i).filter(i => i > 0 && clean(wsP[i]).length >= 3 && !/^\d/.test(wsP[i]));
  if (cand.length) { const i = pick1(cand); const w0 = clean(wsP[i]); const w2 = wsP.slice(); const tail = wsP[i].slice(wsP[i].indexOf(w0) + w0.length); w2.splice(i, 1); if (tail && i - 1 >= 0) w2[i-1] += tail; add(w2.join(' '), `Falta «${w0}».`, 'drop2'); }
  const pairsI = wsP.map((w, i) => i).filter(i => i < wsP.length - 1 && /^[A-Za-z']+$/.test(wsP[i]) && /^[A-Za-z']+[.,!?]?$/.test(wsP[i+1]) && wsP[i].toLowerCase() !== clean(wsP[i+1]).toLowerCase());
  if (pairsI.length) { const i = pick1(pairsI); const a = wsP[i], b = clean(wsP[i+1]), tail = wsP[i+1].slice(b.length); const w2 = wsP.slice(); w2[i] = i === 0 ? cap1(b) : b; w2[i+1] = (i === 0 && !/^I\b/.test(a) ? a.toLowerCase() : a) + tail; const lc = w => /^I('|$)/.test(w) ? w : w.toLowerCase(); add(w2.join(' '), `El orden de las palabras es «${lc(a)} ${lc(b)}», no «${lc(b)} ${lc(a)}».`, 'swap2'); }
  /* a lesson word swapped for one that looks or sounds alike */
  for (const x of en.matchAll(/\b([A-Za-z]{4,})\b/g)) { const w = x[1].toLowerCase(); if (!VOCAB[w]) continue; const nw = nearWords(w, 3).filter(c => c.s <= 3 && c.es && !/\s/.test(c.w)); if (!nw.length) continue; const c = nw[0];
    add(en.slice(0, x.index) + capLike(x[1], c.w) + en.slice(x.index + x[1].length), `Esta dice «${c.w}» (${c.es}); la frase dice «${w}» (${VOCAB[w]}).`, 'vocab'); break; }
  /* numbers */
  if ((m = en.match(/\d+(?:[.,]\d+)*/))) { const n = m[0]; const d = n.replace(/\d/, c => String((+c + (Math.random() < .5 ? 1 : 8)) % 10)); if (d !== n) add(en.replace(n, d), `Esta dice ${d}; el número correcto es ${n}.`, 'num'); }
  return out;
}
const NEAR_PRIO = {
  listen: ['pair','swap','sfx','tense','neg','num','drop','pron','past','vocab','insert','aux','will','going','be','order','adjorder','this','poss','time','dur','comp','many','dneg','subj','subj2','ago','art','prep','drop2','swap2'],
  read: ['swap','sfx','aux','subj','past','will','going','be','order','adjorder','time','dur','ago','comp','many','dneg','art','tense','vocab','prep','this','poss','subj2','pair','num','neg','drop2','swap2']
};
function nearOptions(en, mode, n = 3){
  const pr = NEAR_PRIO[mode] || NEAR_PRIO.read; const prio = k => { const i = pr.indexOf(k); return i < 0 ? 99 : i; };
  const all = mutations(en).filter(c => mode === 'listen' ? c.L : c.R);
  const byK = {}; shuffle(all).forEach(c => (byK[c.k] = byK[c.k] || []).push(c));
  const kinds = Object.keys(byK).sort((a, b) => prio(a) - prio(b) + (/2$/.test(a) || /2$/.test(b) ? 0 : (Math.random() - .5) * 8));
  const seen = new Set([nkey(en)]); const out = [];
  const take = c => { if (out.length < n && !seen.has(nkey(c.t))) { out.push(c); seen.add(nkey(c.t)); } };
  kinds.forEach(k => { const c = byK[k].find(c => !seen.has(nkey(c.t))); if (c) take(c); });
  all.forEach(take);
  if (out.length < n) distract(ALL_PHRASES, en, 6).forEach(p => take({t:p, why: PHRASE_ES[p] ? `Es otra frase: significa «${PHRASE_ES[p]}».` : 'Es otra frase distinta.', k:'other'}));
  return out.slice(0, n);
}
/* single words: similar spelling or sound, typical confusions */
function nearWords(w, n = 3){
  const wl = String(w).toLowerCase(); const c = [];
  PAIRS.forEach(p => { if (p[0] === wl) c.push({w:p[2], es:p[3], s:0}); });
  TK.swaps.forEach(([r, x, why]) => { if (r.toLowerCase() === wl && !/\s/.test(x)) c.push({w:x, es:VOCAB[x.toLowerCase()] || '', why, s:0}); });
  ALL_WORDS.forEach(x => { const xl = x.toLowerCase(); if (xl === wl || !VOCAB[xl]) return; const d = lev(xl, wl); const sim = d <= Math.max(2, Math.floor(wl.length / 3)) ? d : xl.slice(0,3) === wl.slice(0,3) ? 3 + Math.abs(xl.length - wl.length) / 4 : xl.split(' ').some(p => wl.split(' ').includes(p)) ? 4 : 99; if (sim < 99) c.push({w:x, es:VOCAB[xl], s:sim}); });
  const seen = new Set([wl]), seenEs = new Set([VOCAB[wl]]); const out = [];
  c.sort((a, b) => a.s - b.s + (Math.random() - .5)).forEach(x => { if (out.length < n && !seen.has(x.w.toLowerCase()) && !(x.es && seenEs.has(x.es))) { out.push(x); seen.add(x.w.toLowerCase()); if (x.es) seenEs.add(x.es); } });
  shuffle(ALL_WORDS.slice()).forEach(x => { const xl = x.toLowerCase(); if (out.length < n && !seen.has(xl) && VOCAB[xl] && !seenEs.has(VOCAB[xl])) { out.push({w:x, es:VOCAB[xl], s:99}); seen.add(xl); seenEs.add(VOCAB[xl]); } });
  return out;
}
/* feedback: compare the chosen option with the right one, word by word */
const isEnSentence = s => typeof s === 'string' && /[a-z]/i.test(s) && !/[áéíóúñ¿¡«»]/i.test(s) && wc(s) >= 2;
function diffWords(a, b){
  const A = a.split(/\s+/), B = b.split(/\s+/); const k = w => w.toLowerCase().replace(/[^a-z0-9']/g, '');
  const na = A.map(k), nb = B.map(k); const dp = Array.from({length:na.length+1}, () => new Array(nb.length+1).fill(0));
  for (let i = na.length - 1; i >= 0; i--) for (let j = nb.length - 1; j >= 0; j--) dp[i][j] = na[i] === nb[j] ? dp[i+1][j+1] + 1 : Math.max(dp[i+1][j], dp[i][j+1]);
  const ia = new Array(na.length).fill(false), ib = new Array(nb.length).fill(false); let i = 0, j = 0;
  while (i < na.length && j < nb.length) { if (na[i] === nb[j]) { ia[i] = ib[j] = true; i++; j++; } else if (dp[i+1][j] >= dp[i][j+1]) i++; else j++; }
  return {a: A.map((w, x) => ({w, c: ia[x] ? '' : 'x'})), b: B.map((w, x) => ({w, c: ib[x] ? '' : 'y'}))};
}
function mcFeedback(it, q){
  const P = it.opts[q.picked]; const right = P.ok; const R = it.opts.find(o => o.ok);
  const label = o => o.pic ? `<span class="fpic">${drawPic(o.pic)}</span>` : esc(o.t);
  const others = it.opts.filter(o => !o.ok && o !== P && o.why);
  let h = `<div class="fb ${right ? 'good' : 'bad'}" role="status"><b>${right ? '¡Bien!' : 'Casi.'}</b>`;
  if (right) h += it.explain ? `<span>${esc(it.explain)}</span>` : '';
  else {
    h += `<div class="fbx no"><span class="fl">${ic('x')}Tu respuesta</span><div class="ft">${label(P)}</div>${P.why ? `<p class="fw"><b>Por qué no:</b> ${esc(P.why)}</p>` : ''}</div>
      <div class="fbx ok"><span class="fl">${ic('check')}La correcta</span><div class="ft">${label(R)}</div>${it.explain ? `<p class="fw"><b>Por qué sí:</b> ${esc(it.explain)}</p>` : ''}</div>`;
    if (!P.pic && isEnSentence(P.t) && isEnSentence(R.t)) { const d = diffWords(P.t, R.t); h += `<div class="fdiff" aria-label="Diferencias"><p><span class="fl">Tú</span>${d.a.map(x => `<span class="${x.c}">${esc(x.w)}</span>`).join(' ')}</p><p><span class="fl">Bien</span>${d.b.map(x => `<span class="${x.c}">${esc(x.w)}</span>`).join(' ')}</p></div>`; }
  }
  if (it.raw.ex) h += `<div class="row" style="flex-wrap:nowrap">${play(it.raw.ex, 'say')}<span class="ctx">“${tw(it.raw.ex)}”</span></div>`;
  if (others.length) h += `<details class="fothers"${right ? '' : ' open'}><summary>${right ? 'Por qué las otras no' : 'Y las demás opciones'}</summary>${others.map(o => `<div class="fo"><div class="ft">${label(o)}</div><p>${esc(o.why)}</p></div>`).join('')}</details>`;
  return h + '</div>';
}


/* ---------- navigation ---------- */
function stopAll(){ abortRec(); hush(); clearInterval(TIMER); }
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
  stopAll(); st.view = 'practice'; st.backTo = null;
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
  } else if (mode === 'match') {
    st.match = newMatch(pick1(TOOL_KEYS)); st.practice = 'match';
  } else if (mode === 'gmix') {
    st.quiz = gramGame('mix'); st.practice = 'quiz';
  } else if (mode === 'vmix') {
    st.quiz = gramGame('vis'); st.practice = 'quiz';
  } else if (mode === 'timed') {
    startTimed(null); st.practice = 'quiz';
  } else if (mode === 'dialogue') {
    const done = LESSONS.filter(l => S.done[l.id]); const L = pick1(done.length ? done : LESSONS);
    st.dlg = newDlg(L); st.practice = 'dialogue';
  }
  render(); scrollTo(0,0);
}

/* ---------- chrome ---------- */
const NAV = [['today','Hoy','sun','Tu lección del día, tu plan y tu racha'],['topics','Temas','grid','Todas las lecciones por situación y el buscador de temas'],['grammar','Gramática','clock','Todos los tiempos verbales: estructura, cuándo usarlos, trucos y ejercicios'],['practice','Practicar','layers','Ejercicios y juegos que no se acaban'],['tools','Recursos','book','Conectores, phrasal verbs, falsos amigos, UK vs US y pronunciación'],['progress','Progreso','bars','Tu avance, frases guardadas y ajustes']];
const navKey = () => ({lesson:'topics', tense:'grammar', cmp:'grammar', vis:'grammar', pack:'tools'})[st.view] || (st.view === 'practice' && st.backTo ? st.backTo : st.view);
function renderChrome(){
  const k = navKey();
  document.getElementById('side-nav').innerHTML = NAV.map(([id,label,icon,tip]) => `<button data-nav="${id}" class="${k===id?'on':''}" ${k===id?'aria-current="page"':''}${tt(tip)}>${ic(icon)}${label}</button>`).join('');
  document.getElementById('tabbar').innerHTML = NAV.map(([id,label,icon,tip]) => `<button data-nav="${id}" class="${k===id?'on':''}" ${k===id?'aria-current="page"':''}${tt(tip)}><span class="tb-ic">${ic(icon)}</span><span>${label}</span></button>`).join('');
  const doneN = LESSONS.filter(l => S.done[l.id]).length;
  document.getElementById('level-card').innerHTML = `<span class="eyebrow">Tu avance</span><b class="num">${doneN} de ${LESSONS.length}</b><div class="bar"><span style="width:${Math.round(doneN/Math.max(1,LESSONS.length)*100)}%"></span></div><span class="note">lecciones completadas</span>`;
  const off = !navigator.onLine;
  document.getElementById('top-chips').innerHTML = `${off ? '<span class="chip offline">Sin conexión</span>' : ''}<span class="chip num"${tt('Días seguidos practicando')}>${ic('flame')}${streak()}</span>`;
  document.getElementById('side-status').innerHTML = off ? '<span class="chip offline">Sin conexión · todo sigue funcionando</span>' : '';
}
function toast(msg){ st.toast = msg; const el = document.getElementById('toast'); el.textContent = msg; el.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => { el.hidden = true; }, 3200); }

/* ---------- views ---------- */
function greet(){ const h = new Date().getHours(); const g = h < 12 ? 'Good morning' : h < 19 ? 'Good afternoon' : 'Good evening'; return S.name ? `${g}, ${S.name}!` : `${g}!`; }
function heatmap(){
  const now = new Date(); const t = iso(now);
  const mon = new Date(now); mon.setDate(now.getDate() - ((now.getDay()+6)%7) - 28);
  let h = DAYS.map(d => `<span class="d">${d}</span>`).join('');
  for (let i=0;i<35;i++){ const d = new Date(mon); d.setDate(mon.getDate()+i); const k = iso(d); const x = S.days[k]; const sc = x ? (x.q||0) + (x.l||0)*4 + (x.s||0)*2 + (x.a||0)*3 : 0; const lv = !sc ? '' : sc < 6 ? 'l1' : sc < 14 ? 'l2' : 'l3'; h += `<span class="c ${k > t ? 'future' : lv} ${k===t?'today':''}" title="${k}"></span>`; }
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
  match:['grid','Parejas','Une palabras con su pareja'],
  timed:['flame','Contrarreloj','60 segundos, todo mezclado'],
  find:['search','¿Qué quieres practicar?','Busca o pide un tema']
};
TILES.gmix = ['clock','Gramática','Tiempos verbales mezclados'];
TILES.vmix = ['spark','Con imágenes','Preposiciones, la hora, cantidades…'];
const TILE_TIP = {gmix:'Ejercicios de tiempos verbales mezclados', vmix:'Ejercicios con dibujos: preposiciones, la hora, comparativos, cantidades y líneas de tiempo', infinite:'10 ejercicios mezclados de tus lecciones; nunca son iguales', due:'Lo que toca repasar hoy para no olvidarlo (repetición espaciada)', order:'Ordena las palabras para formar frases correctas', listen:'Escucha una frase y elige la que oíste', vocab:'Practica las palabras de tus lecciones', type:'Escribe en inglés la frase que ves en español', speak:'Di frases en voz alta y mira qué se entendió', dialogue:'Haz un papel de un diálogo; la app hace el otro', mistakes:'Repasa las preguntas que fallaste', find:'Busca una situación o pide una lección nueva', match:'Juego: une cada palabra con su pareja', timed:'Juego: responde todo lo que puedas en 60 segundos'};
function tiles(list){ return list.map((m,i) => { const [icn, b, s] = TILES[m]; return `<button class="qt ${i===0?'hot':''}" ${m==='find' ? 'data-act="goto-find"' : `data-act="practice" data-m="${m}"`}${tt(TILE_TIP[m] || b)}><span class="qi">${ic(icn)}</span><b>${b}</b><span>${typeof s === 'function' ? s() : s}</span></button>`; }).join(''); }
function installCard(){
  if (standalone() || S.installHidden) return '';
  const how = installEvt ? `<button class="btn primary sm" data-act="install"${tt('Instalar como app en este dispositivo')}>${ic('download')}Instalar</button>` : IOS ? `<span class="note">En Safari: toca Compartir y luego «Añadir a pantalla de inicio».</span>` : `<span class="note">En el menú del navegador, elige «Instalar app» o «Añadir a pantalla de inicio».</span>`;
  return `<section class="card install a-install"><div style="min-width:0;flex:1"><h3>Tenla como app</h3><p class="note">Con ícono propio y funcionando sin internet.</p></div><div class="row">${how}<button class="link" style="color:var(--ink-3)" data-act="install-hide">Ahora no</button></div></section>`;
}
function viewToday(){
  const L = nextLesson(); const n = streak(); const t7 = last7(); const doneToday = active(today());
  const pool = [...TOOLS.phrasal.items, ...TOOLS.connectors.items];
  const w = pool[Math.floor(Date.now()/864e5) % pool.length];
  const hero = L ? `<article class="hero a-lesson"><div class="meta"><span class="pill">${ic(scenOf(L).icon)}${esc(areaName(L))}</span><span class="pill num">${esc(L.level)} · ${L.mins} min</span></div>
      <p class="eyebrow" style="color:var(--ink)">Tu lección de hoy</p><h2>${esc(L.title)}</h2><p>${esc(L.summary)}</p>
      <div class="row"><button class="btn dark" data-act="open" data-id="${L.id}"${tt('Abrir la lección recomendada para hoy')}>Empezar ${ic('right')}</button><button class="btn ghost" data-nav="topics" style="background:rgba(255,255,255,.6);border-color:transparent"${tt('Ver todas las lecciones por tema')}>Otro tema</button></div></article>`
    : `<article class="hero a-lesson"><p class="eyebrow" style="color:var(--ink)">Tu lección de hoy</p><h2>¡Completaste todas las lecciones!</h2><p>Sigue con los packs de recursos, la práctica infinita y tu repaso del día. Las lecciones nuevas aparecerán aquí en cuanto se publiquen.</p>
      <div class="row"><button class="btn dark" data-act="practice" data-m="infinite"${tt('10 ejercicios mezclados de tus lecciones')}>Práctica infinita ${ic('right')}</button><button class="btn ghost" data-act="goto-find" style="background:rgba(255,255,255,.6);border-color:transparent"${tt('Buscar o pedir una lección sobre lo que quieras')}>Pedir un tema</button></div></article>`;
  const words = (L || LESSONS[0]).words.slice(0,6);
  const note = doneToday ? 'Racha a salvo por hoy. Vuelve mañana.' : n ? `Practica hoy para llegar a ${n+1} días.` : 'Completa una actividad para empezar tu racha.';
  return {html:`
  <div class="hello"><p class="eyebrow">${esc(greet())}</p><h1>Let's learn some English</h1></div>
  <div class="today">
    ${hero}
    ${planHTML()}
    <article class="card streak a-streak"><div class="st-top"><span class="st-flame">${ic('flame')}</span><div><div class="st-n num">${n}</div><div class="note">${n===1?'día':'días'} seguidos</div></div></div>${heatmap()}<p class="note">${note}</p></article>
    <section class="a-quick"><div class="block-head"><h3>Practica rápido</h3><button class="link" data-nav="practice"${tt('Ver todos los ejercicios y juegos')}>Ver todo ${ic('right')}</button></div><div class="quick">${tiles(['infinite','due','speak','find'])}</div></section>
    <section class="card a-words"><div class="block-head"><h3>Palabras de hoy</h3><span class="note">Toca para escuchar</span></div>
      <div class="chips">${words.map(x => `<button class="wchip" data-act="word" data-w="${esc(x[0])}"${tt('Escuchar y ver cómo se pronuncia')}>${esc(x[0])} <span>${esc(x[1])}</span></button>`).join('')}</div></section>
    <section class="card wotd a-wotd"><p class="eyebrow">Expresión del día</p>
      <div class="row" style="justify-content:space-between;margin:8px 0 4px"><span class="w-en ctx">${tw(w[0])}</span>${play(w[0]+'. '+w[2])}</div>
      <p><b>${esc(w[1])}</b></p><p class="w-ex ctx">“${tw(w[2])}”</p></section>
    <section class="card a-week"><p class="eyebrow">Últimos 7 días</p>
      <div class="stats3"><div><b>${t7.a}</b><span>actividades</span></div><div><b>${t7.l}</b><span>lecciones</span></div><div><b>${t7.q}</b><span>ejercicios</span></div><div><b>${t7.s}</b><span>frases dichas</span></div></div></section>
  </div>${installCard() ? `<div style="margin-top:16px">${installCard()}</div>` : ''}`};
}

function lessonRow(L){
  const d = S.done[L.id];
  return `<button class="lrow" data-act="open" data-id="${L.id}"${tt('Abrir la lección: ' + L.summary)}><span class="lr-main"><span class="lr-t">${esc(L.title)}${isNew(L) ? `<span class="newb">${ic('spark')}Nueva</span>` : ''}</span><span class="lr-m num">${esc(L.level)} · ${L.mins} min${d ? ` · ${d.score}/${d.total}` : ''}</span></span><span class="lr-s ${d?'done':''}">${d ? ic('check') : ic('right')}</span></button>`;
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
    <div class="row-in"><input class="field" id="find-in" maxlength="120" placeholder="Ej.: pedir una cita en el médico" value="${esc(f.q)}"><button class="btn primary slim" data-act="find" aria-label="Buscar"${tt('Buscar lecciones sobre esta situación')}>${ic('search')}</button></div>
    ${res ? (res.length ? `<p class="note"><b>Esto ya lo tienes:</b></p><div class="lrows" style="border-top:0">${res.map(L => `<div class="lrow-wrap">${lessonRow(L)}</div>`).join('')}</div>` : `<p class="note">Todavía no hay una lección sobre esto.</p>`)
      + `<div class="row"><button class="btn ${res.length ? 'ghost' : 'primary'} sm" data-act="request"${tt('Enviar tu petición por WhatsApp u otra app para que preparen esta lección')}>${ic('send')}Pedir una lección sobre «${esc(f.q.slice(0,40))}»</button></div>` : ''}
    ${S.requests.length ? `<details><summary class="note" style="cursor:pointer;font-weight:700">Tus peticiones (${S.requests.length})</summary>${S.requests.map((r,i) => { const ready = LESSONS.find(l => l.req && deaccent(l.req) === deaccent(r.t)); return `<div class="req"><div style="min-width:0"><b>${esc(r.t)}</b><p class="note">${esc(r.d)}</p></div>${ready ? `<button class="status-pill ready" data-act="open" data-id="${ready.id}">Lista · abrir</button>` : `<span class="status-pill">Pedida</span>`}<button class="link" style="color:var(--ink-3)" data-act="req-del" data-i="${i}" aria-label="Quitar"${tt('Quitar esta petición de la lista')}>${ic('x')}</button></div>`; }).join('')}</details>` : ''}
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
  const cont = `<button class="btn primary" data-act="step" data-n="${s+1}"${tt('Ir al siguiente paso de la lección')}>Continuar ${ic('right')}</button>`;
  if (s === 0) {
    if (m) {
      const i = Math.min(st.card, L.phrases.length-1); const p = L.phrases[i];
      body = `<article class="flash"><p class="eyebrow num">Frase ${i+1} de ${L.phrases.length}</p><p class="ph-en ctx">${tw(p[0])}</p>
        <div class="ph-btns">${play(p[0])}${playSlow(p[0])}<button class="icon-btn ${isSaved(p[0])?'on':''}" data-act="mark" data-en="${esc(p[0])}" data-es="${esc(p[1])}" aria-label="Guardar frase"${tt('Guardar esta frase en Progreso › Frases guardadas')}>${ic('mark')}</button></div>
        <button class="reveal ${st.revealed[i]?'':'blur'}" data-act="reveal" data-i="${i}"${tt('Ver la traducción al español')}><span>${esc(p[1])}</span>${st.revealed[i]?'':'<br><small class="note">Toca para ver la traducción</small>'}</button>
        ${p[2] ? `<p class="ph-note">${esc(p[2])}</p>` : ''}</article>
        <div class="dots">${L.phrases.map((_,k) => `<i class="${k===i?'on':''}"></i>`).join('')}</div>`;
      act = `${i > 0 ? `<button class="btn ghost slim" data-act="card" data-n="${i-1}" aria-label="Anterior"${tt('Frase anterior')}>${ic('left')}</button>` : ''}${i < L.phrases.length-1 ? `<button class="btn primary" data-act="card" data-n="${i+1}"${tt('Ver la siguiente frase')}>Siguiente frase ${ic('right')}</button>` : cont}`;
    } else {
      body = `<div class="phrases">${L.phrases.map(p => `<article class="card phrase"><p class="ph-en ctx">${tw(p[0])}</p><p class="ph-es">${esc(p[1])}</p>${p[2] ? `<p class="ph-note">${esc(p[2])}</p>` : ''}
        <div class="ph-btns">${play(p[0])}${playSlow(p[0])}<button class="icon-btn ${isSaved(p[0])?'on':''}" data-act="mark" data-en="${esc(p[0])}" data-es="${esc(p[1])}" aria-label="Guardar frase"${tt('Guardar esta frase en Progreso › Frases guardadas')}>${ic('mark')}</button></div></article>`).join('')}</div>`;
      act = cont;
    }
  }
  if (s === 1) {
    const order = []; L.dialogue.forEach(d => { if (!order.includes(d[0])) order.push(d[0]); });
    body = `<div class="dlg-tools"><button class="switch ${st.showTr?'on':''}" data-act="tr" aria-pressed="${st.showTr}"${tt('Mostrar u ocultar la traducción al español')}><i></i>Traducción</button>${TTS ? `<button class="btn ghost sm" data-act="say-all"${tt('Escuchar el diálogo completo de seguido')}>${ic('speaker')}Escuchar todo</button>` : ''}</div>
      <div class="dialogue ${st.showTr?'':'hide-tr'}">${L.dialogue.map(d => `<div class="bub ${order.indexOf(d[0])%2?'r':''}"><span class="who">${esc(d[0])}</span><div class="tx"><div><p class="en ctx">${tw(d[1])}</p><p class="es">${esc(d[2])}</p></div>${play(d[1],'say')}</div></div>`).join('')}</div>`;
    act = cont;
  }
  if (s === 2) { body = `<div class="words">${L.words.map(w => `<button class="word" data-act="word" data-w="${esc(w[0])}"${tt('Escuchar y ver cómo se pronuncia')}><div style="min-width:0"><b>${esc(w[0])} ${w[2]?'<span class="uk">UK</span>':''}</b><span>${esc(w[1])}</span></div>${ic('speaker')}</button>`).join('')}</div>`; act = cont; }
  if (s === 3) { const r = quizView(st.quiz, 'lesson'); body = r.html; act = r.act; }
  if (s === 4) {
    if (!st.speak.done) { const r = speakView(st.speak, 'lesson'); body = r.html; act = r.act; }
    else { const r = dlgView(st.dlg, 'lesson'); body = r.html; act = r.act; }
  }
  const side = `<aside class="lsteps"><button class="back" data-nav="topics"${tt('Volver a la lista de temas')}>${ic('left')}Temas</button><span class="tag">${ic(sc.icon)}${esc(areaName(L))}</span><h2>${esc(L.title)}</h2>
    ${STEPS.map((x,i) => `<button class="st ${i===s?'on':''} ${done(i)?'done':''}" data-act="step" data-n="${i}"${tt(x.how)}><span class="n">${done(i) && i!==s ? ic('check') : i+1}</span>${x.name}</button>`).join('')}</aside>`;
  const head = `<div class="lhead"><button class="icon-btn" data-nav="topics" aria-label="Salir de la lección"${tt('Salir de la lección (lo que completaste queda guardado)')}>${ic('x')}</button><div class="lprog">${STEPS.map((x,i) => `<button class="${i===s?'on':''} ${done(i)?'done':''}" data-act="step" data-n="${i}" aria-label="${x.name}"></button>`).join('')}</div></div>`;
  return {immersive:true, actClass:'lesson-act', act, html:`<div class="lesson">${head}${side}<section style="min-width:0">
    <div class="ltitle"><p class="eyebrow num">Paso ${s+1} de 5 · ${esc(m ? L.title : sc.name)}</p><h2>${STEPS[s].name}</h2><p class="how">${STEPS[s].how}</p></div>${body}</section></div>`};
}

/* ----- quiz ----- */
function quizView(q, ctx){
  const n = q.items.length;
  if (!n) return {html:`<p class="note">No hay ejercicios todavía. Completa una lección primero.</p>`, act:`<button class="btn primary" data-act="practice-home">Volver</button>`};
  if (q.finished) {
    const r = q.correct / n;
    if (q.timed) { const best = S.best[q.key]; return {html:`<div class="result"><span class="confetti">${ic('flame')}</span><div class="big">${q.correct}<small> aciertos</small></div><p class="lead">en 60 segundos. ${best === q.correct && q.correct ? '¡Nuevo récord!' : best ? `Tu récord: ${best}.` : ''}</p></div>`, act:`<button class="btn ghost" data-act="practice-home">Listo</button><button class="btn primary" data-act="quiz-again"${tt('Jugar otra vez con preguntas nuevas')}>${ic('refresh')}Otra vez</button>`}; }
    const msg = r === 1 ? '¡Perfecto! Esto ya es tuyo.' : r >= .6 ? 'Muy bien. Lo que fallaste volverá en tu repaso.' : 'Buen comienzo. Repasa y vuelve a intentarlo, sin prisa.';
    let act = `<button class="btn ghost" data-act="quiz-again"${tt('Repetir con preguntas nuevas')}>${ic('refresh')}${ctx === 'practice' ? 'Otra ronda' : 'Repetir'}</button>`;
    if (ctx === 'lesson') act += `<button class="btn primary" data-act="step" data-n="4"${tt('Último paso: decir las frases en voz alta')}>${ic('mic')}Ahora a hablar</button>`;
    else if (ctx === 'pack') act += `<button class="btn primary" data-act="pack-step" data-n="2"${tt('Último paso: decirlo en voz alta')}>${ic('mic')}Ahora a decirlo</button>`;
    else if (ctx === 'vis') act += `<button class="btn primary" data-act="vis-step" data-n="2"${tt('Último paso: describir los dibujos en voz alta')}>${ic('mic')}Ahora a decirlo</button>`;
    else if (ctx === 'tense') act += `<button class="btn primary" data-act="tense-step" data-n="2"${tt('Último paso: decir los ejemplos en voz alta')}>${ic('mic')}Ahora a decirlo</button>`;
    else if (ctx === 'cmp') act += `<button class="btn primary" data-act="gram-back"${tt('Volver a Gramática')}>Gramática ${ic('right')}</button>`;
    else act += `<button class="btn primary" data-act="practice-home">Listo</button>`;
    return {html:`<div class="result"><span class="confetti">${ic('trophy')}</span><div class="big">${q.correct}<small>/${n}</small></div><p class="lead">${msg}</p>${['lesson','pack','tense','vis'].includes(ctx) ? '<p class="note">Último paso: decirlo en voz alta.</p>' : ''}</div>`, act};
  }
  const it = q.items[q.i];
  const head = (q.timed ? `<div class="q-meta num"><span class="chip" id="qtimer">${Math.max(0, Math.ceil((q.timed.end - Date.now())/1000))} s</span><span>${q.correct} aciertos</span></div>` : `<div class="q-meta num"><span>${q.i+1} de ${n}</span><span>${q.correct} correctas</span></div><div class="bar"><span style="width:${Math.round(q.i/n*100)}%"></span></div>`) + `<p class="q-kind">${KIND[it.kind] || 'Elige'}</p>`;
  const nextB = `<button class="btn primary" data-act="next"${tt('Ir al siguiente ejercicio')}>${q.i === n-1 ? 'Ver resultado' : 'Siguiente'} ${ic('right')}</button>`;
  if (it.kind === 'order') {
    let fb = '';
    if (it.checked) {
      const isQ = /\?\s*$/.test(it.en);
      fb = it.ok ? `<div class="fb good" role="status"><b>¡Perfecto!</b><div class="row">${play(it.en,'say')}<span class="ctx">${tw(it.en)}</span></div></div>`
        : `<div class="fb bad" role="status"><b>Casi. El orden correcto es:</b><div class="row">${play(it.en,'say')}<span class="ctx" style="font-weight:700">${tw(it.en)}</span></div><span>${isQ ? 'En preguntas, el verbo auxiliar va primero: Could you…? / Do you…? / Have you got…?' : 'En inglés el orden casi siempre es: quién + verbo + lo demás. Los adjetivos van antes del nombre.'}</span></div>`;
    }
    return {html:`<div class="quiz">${head}<h3 class="q-prompt">${esc(it.es)}</h3>
      <div class="slots ${it.checked ? (it.ok?'ok':'no') : ''}">${it.built.length ? it.built.map((t,idx) => `<button class="tile in" data-act="untile" data-i="${idx}" ${it.checked?'disabled':''}${tt('Quitar esta palabra de tu frase')}>${esc(t.w)}</button>`).join('') : '<span class="slots-ph">Toca las palabras en el orden correcto</span>'}</div>
      <div class="bank">${it.tiles.map(t => `<button class="tile ${it.built.includes(t)?'used':''}" data-act="tile" data-id="${t.id}" ${it.built.includes(t)||it.checked?'disabled':''}${tt('Añadir esta palabra a tu frase')}>${esc(t.w)}</button>`).join('')}</div>${fb}</div>`,
      act: it.checked ? nextB : `<button class="btn ghost slim" data-act="tile-clear" ${it.built.length?'':'disabled'}${tt('Vaciar tu frase y empezar de nuevo')}>Borrar</button><button class="btn primary" data-act="order-check" ${it.built.length===it.tiles.length?'':'disabled'}${tt('Ver si el orden es correcto')}>Comprobar</button>`};
  }
  if (it.kind === 'form') return formView(q, it, head, nextB);
  if (it.kind === 'place') return placeView(q, it, head, nextB);
  if (it.kind === 'type') {
    return {html:`<div class="quiz">${head}<h3 class="q-prompt">${esc(it.es)}</h3>
      <div class="type-row"><textarea class="field" id="type-in" rows="2" lang="en-GB" autocapitalize="sentences" autocorrect="off" spellcheck="false" maxlength="200" placeholder="Escribe la frase en inglés…" ${it.checked?'disabled':''}>${esc(it.typed)}</textarea></div>
      ${it.checked ? `<div class="fb ${it.ok?'good':'bad'}" role="status"><b>${it.ok ? '¡Bien!' : 'Casi. La frase es:'}</b><div class="row">${play(it.en,'say')}<span class="ctx" style="font-weight:700">${tw(it.en)}</span></div>${!it.ok ? `<div class="heard" style="font-size:16px">${it.res.disp.map(d => `<span class="${d.cls}">${esc(d.w)}</span>`).join('')}</div><span class="note">Verde: lo tenías. Amarillo: otro orden. Rojo: faltó o estaba distinto.</span>` : ''}</div>` : ''}</div>`,
      act: it.checked ? nextB : `<button class="btn ghost slim" data-act="skip"${tt('Pasar a la siguiente sin responder')}>Saltar</button><button class="btn primary" data-act="type-check"${tt('Comparar con la frase correcta')}>Comprobar</button>`};
  }
  const prompt = it.kind === 'listen' ? `<div class="listen-box"><button class="play-big" data-act="say" data-say="${esc(it.say)}" aria-label="Escuchar">${ic('speaker')}</button><div class="row">${playSlow(it.say)}<span class="note">Escucha las veces que quieras</span></div></div>` : `${it.raw.pic ? `<div class="vpic">${drawPic(it.raw.pic)}</div>` : ''}<div class="row" style="flex-wrap:nowrap;align-items:flex-start;gap:12px"><h3 class="q-prompt" style="flex:1;min-width:0">${gapHTML(it.prompt)}</h3>${it.raw.say && TTS ? play(it.raw.say) : ''}${it.raw.say && TTS && it.raw.pic ? playSlow(it.raw.say) : ''}</div>`;
  const pics = it.opts.some(o => o.pic);
  const opts = it.opts.map((o,i) => { let cls = ''; if (q.picked !== null) { if (o.ok) cls = 'ok'; else if (i === q.picked) cls = 'no'; } return pics ? `<button class="opt pic ${cls}" data-act="pick" data-i="${i}" ${q.picked!==null?'disabled':''} aria-label="Opción ${'ABCD'[i]}"><span class="k">${'ABCD'[i]}</span>${drawPic(o.pic)}</button>` : `<button class="opt ${cls}" data-act="pick" data-i="${i}" ${q.picked!==null?'disabled':''}><span class="k">${'ABCD'[i]}</span><span>${esc(o.t)}</span></button>`; }).join('');
  const fb = q.picked === null ? '' : mcFeedback(it, q);
  return {html:`<div class="quiz">${head}${prompt}<div class="opts ${pics ? 'pics' : ''} ${it.kind === 'viot' ? 'iot' : ''}">${opts}</div>${fb}</div>`, act: q.picked === null ? `<button class="btn ghost" data-act="skip"${tt('Pasar a la siguiente sin responder')}>Saltar</button>` : nextB};
}

/* ----- speaking ----- */
function micBlock(listening, live, typeMode, inputId, placeholder){
  if (typeMode) return `<textarea class="field speak-in" id="${inputId}" lang="en-GB" autocapitalize="sentences" autocorrect="off" spellcheck="false" maxlength="300" placeholder="${esc(placeholder)}">${esc(live)}</textarea>
    <p class="note" style="margin-top:6px">${SR ? `<button class="link" data-act="mic-mode"${tt('Volver a usar el micrófono')}>${ic('mic')}Usar el micrófono</button>` : 'Tu navegador no permite usar el micrófono aquí. Escribe la frase o usa el dictado por voz del teclado.'}</p>`;
  return `<div class="mic-wrap"><button class="mic-btn ${listening?'on':''}" data-act="mic" aria-label="${listening?'Terminar':'Hablar'}"${tt(listening ? 'Terminar de hablar' : 'Toca, di la frase en inglés y vuelve a tocar para terminar')}>${ic(listening ? 'stop' : 'mic')}</button>
    <span class="mic-label">${listening ? 'Te escucho… toca para terminar' : 'Toca y di la frase en inglés'}</span>
    <div class="live ${live ? '' : 'empty'}" id="live">${live ? esc(live) : 'Lo que digas aparecerá aquí'}</div>
    <button class="link" style="color:var(--ink-3)" data-act="type-mode"${tt('Escribir la frase en vez de decirla')}>${ic('pencil')}Prefiero escribir</button></div>`;
}
function speakView(sp, ctx){
  if (!sp.items.length) return {html:`<p class="note">No hay frases para practicar todavía.</p>`, act:''};
  if (sp.done && ctx === 'pack') { const nx = nextPack(); return {html:`<div class="result"><span class="confetti">${ic('trophy')}</span><h2>¡Pack completado!</h2><p class="lead">Suma una actividad a tu plan de hoy. Estas palabras ya aparecerán en tus juegos.</p></div>`, act:`<button class="btn ghost" data-act="pack-back">Recursos</button>${nx ? `<button class="btn primary" data-act="pack" data-id="${nx.id}"${tt('Abrir el siguiente pack recomendado')}>Siguiente pack ${ic('right')}</button>` : ''}`}; }
  if (sp.done && ctx === 'vis') { const nv = VUNITS.find(u => !S.vis[u.id]); return {html:`<div class="result"><span class="confetti">${ic('trophy')}</span><h2>¡Tema completado!</h2><p class="lead">Suma una actividad a tu plan de hoy. Sus ejercicios ya salen en «Con imágenes».</p></div>`, act:`<button class="btn ghost" data-act="gram-back" data-t="visual">Gramática</button>${nv ? `<button class="btn primary" data-act="vis" data-id="${nv.id}"${tt('Abrir el siguiente tema visual')}>${esc(nv.title)} ${ic('right')}</button>` : ''}`}; }
  if (sp.done && ctx === 'tense') { const nt = nextTense(); return {html:`<div class="result"><span class="confetti">${ic('trophy')}</span><h2>¡Tiempo completado!</h2><p class="lead">Suma una actividad a tu plan de hoy. Sus ejercicios ya entran en «Mezcla de tiempos».</p></div>`, act:`<button class="btn ghost" data-act="gram-back">Gramática</button>${nt ? `<button class="btn primary" data-act="tense" data-id="${nt.id}"${tt('Abrir el siguiente tiempo verbal recomendado')}>${esc(nt.name)} ${ic('right')}</button>` : ''}`}; }
  if (sp.done) return {html:`<div class="result"><span class="confetti">${ic('trophy')}</span><h2>¡Muy bien!</h2><p class="lead">Practicaste ${sp.items.length} frases. Cada vez se te entiende mejor.</p></div>`,
    act:`<button class="btn ghost" data-act="practice" data-m="speak">${ic('refresh')}Otras frases</button><button class="btn primary" data-act="practice-home">Listo</button>`};
  const it = sp.items[sp.i]; const n = sp.items.length;
  const html = `<div class="say-card">${it.pic ? `<div class="vpic">${drawPic(it.pic)}</div>` : ''}<p class="eyebrow num">Frase ${sp.i+1} de ${n}</p><p class="say-en ctx">${tw(it.en)}</p><p class="ph-es">${esc(it.es)}</p><div class="ph-btns">${play(it.en)}${playSlow(it.en)}<span class="note">Escúchala primero</span></div></div>
    ${sp.res ? '' : micBlock(sp.listening, sp.said, sp.typeMode, 'speak-in', 'Escribe o dicta la frase en inglés…')}
    ${sp.err ? `<p class="err" style="margin-top:8px">${esc(sp.err)}</p>` : ''}
    ${sp.res ? `<p class="note" style="margin-top:14px">Dijiste: <b>${esc(sp.said)}</b></p>${coachHTML(sp.res, it.en)}` : ''}`;
  const act = !sp.res ? (sp.typeMode ? `<button class="btn primary" data-act="speak-check"${tt('Comparar lo que dijiste con la frase')}>${ic('check')}Comprobar</button>` : '')
    : `<button class="btn ghost slim" data-act="speak-retry"${tt('Intentar decir la frase otra vez')}>${ic('refresh')}Otra vez</button><button class="btn primary" data-act="speak-next"${tt('Pasar a la siguiente frase')}>${sp.i === n-1 ? (ctx === 'lesson' ? 'Ahora el diálogo' : 'Terminar') : 'Siguiente frase'} ${ic('right')}</button>`;
  return {html, act};
}

/* ----- dialogue role-play ----- */
function dlgView(d, ctx){
  const L = getLesson(d.lid); if (!L) return {html:'', act:''};
  const lines = L.dialogue; const speakers = uniq(lines.map(x => x[0]));
  const intro = ctx === 'lesson' && !d.role ? `<div class="result" style="margin-bottom:18px"><h2>Ahora, el diálogo</h2><p class="lead">Tú haces un papel y la app hace el otro. Tus frases las dices en voz alta.</p></div>` : '';
  if (!d.role) {
    return {html:`${intro}${ctx !== 'lesson' ? `<p class="lead" style="margin-bottom:14px">Diálogo de «${esc(L.title)}».</p>` : ''}<p class="eyebrow" style="margin-bottom:10px">¿Qué papel haces?</p>
      <div class="role-pick">${speakers.map(sp => `<button class="qt ${sp === 'You' ? 'hot' : ''}" data-act="dlg-role" data-r="${esc(sp)}"${tt('Tú dices las frases de este personaje; la app dice las del otro')}><span class="qi">${ic('people')}</span><b>Hacer de ${esc(sp === 'You' ? 'ti (You)' : sp)}</b><span>${lines.filter(x => x[0] === sp).length} frases que dirás tú</span></button>`).join('')}</div>`,
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
    act = `<button class="btn primary" data-act="dlg-next"${tt('Seguir con el diálogo')}>Continuar ${ic('right')}</button>`;
  } else if (!r) {
    turn = `<div class="dlg-turn"><p class="eyebrow">Tu turno</p><p><b>${esc(cur[2])}</b></p>
      ${d.showEn ? `<p class="say-en ctx" style="font-size:20px">${tw(cur[1])}</p><div class="ph-btns">${play(cur[1])}${playSlow(cur[1])}</div>` : `<button class="link" data-act="dlg-show"${tt('Mostrar la frase en inglés como ayuda')}>${ic('bulb')}Ver la frase en inglés</button>`}
      ${micBlock(d.listening, d.said, d.typeMode, 'dlg-in', 'Escribe o dicta tu frase en inglés…')}${d.err ? `<p class="err">${esc(d.err)}</p>` : ''}</div>`;
    act = d.typeMode ? `<button class="btn primary" data-act="dlg-check">${ic('check')}Comprobar</button>` : `<button class="btn ghost" data-act="dlg-skip"${tt('Saltar tu frase y seguir')}>Saltar</button>`;
  } else {
    turn = `<div class="dlg-turn"><p class="eyebrow">Tu turno</p><p class="note">Dijiste: <b>${esc(d.said)}</b></p>${coachHTML(r, cur[1])}</div>`;
    act = `<button class="btn ghost slim" data-act="dlg-retry"${tt('Decir tu frase otra vez')}>${ic('refresh')}Otra vez</button><button class="btn primary" data-act="dlg-next">Siguiente ${ic('right')}</button>`;
  }
  return {html:`${ctx !== 'lesson' ? `<p class="lead" style="margin-bottom:14px">«${esc(L.title)}» · haces de ${esc(d.role)}</p>` : ''}<div class="dialogue" style="margin-bottom:14px">${past}</div>${turn}`, act};
}

/* ----- practice hub ----- */
function viewPractice(){
  const back = `<button class="back" data-act="practice-home"${tt('Volver sin terminar')}>${ic('left')}${st.backTo === 'tools' ? 'Recursos' : st.backTo === 'grammar' ? 'Gramática' : 'Practicar'}</button>`;
  if (st.practice === 'match') { const r = matchView(st.match); return {immersive:true, act:r.act, html:`${back}<div class="page-head" style="margin-bottom:10px"><h2>Parejas</h2></div>${r.html}`}; }
  if (st.practice === 'quiz') { const r = quizView(st.quiz, 'practice'); return {immersive:true, act:r.act, html:`${back}<div class="page-head" style="margin-bottom:14px"><h2>${esc(st.quiz.title || 'Ejercicios')}</h2></div>${r.html}`}; }
  if (st.practice === 'speak') { const r = speakView(st.speak, 'practice'); return {immersive:true, act:r.act, html:`${back}<div class="page-head" style="margin-bottom:14px"><h2>Habla</h2><p class="lead">Escucha, di la frase y mira qué se entendió.</p></div>${r.html}`}; }
  if (st.practice === 'dialogue') { const r = dlgView(st.dlg, 'practice'); return {immersive:true, act:r.act, html:`${back}<div class="page-head" style="margin-bottom:14px"><h2>Haz un diálogo</h2></div>${r.html}`}; }
  const due = dueIds().length;
  return {html:`<div class="page-head"><h1>Practicar</h1><p class="lead">Ejercicios que no se acaban. Salen de tus lecciones y lo que fallas vuelve en el repaso.</p></div>
    <div class="quick" style="margin-bottom:22px">${tiles(['infinite','due','gmix','vmix','order','listen','vocab','type','speak','dialogue','match','timed'])}</div>
    <section class="card" style="display:flex;flex-direction:column;gap:10px"><h3>Tus errores</h3><p class="note">${S.mistakes.length ? `Tienes ${S.mistakes.length} preguntas que fallaste. Repásalas hasta acertarlas.` : 'Cuando falles algo, aparecerá aquí para repasarlo.'}</p><div><button class="btn ghost" data-act="practice" data-m="mistakes" ${S.mistakes.length?'':'disabled'}>Repasar errores</button></div></section>
    <p class="note" style="margin-top:16px">${due ? `Hoy toca repasar ${due} frases y palabras.` : 'Repaso del día al corriente.'} El repaso usa repetición espaciada: lo que aciertas vuelve cada vez más tarde, y lo que fallas vuelve pronto.</p>`};
}

/* ----- resources: packs, games and lists ----- */
const TOOL_KEYS = ['connectors','phrasal','false','ukus','pron'];
const TOOL_NAME = {connectors:'Conectores', phrasal:'Phrasal verbs', false:'Falsos amigos', ukus:'UK vs US', pron:'Pronunciación'};
const TOOL_TIP = {connectors:'Palabras para unir ideas: however, although, so…', phrasal:'Verbos con partícula que se usan a diario: find out, give up…', false:'Palabras que parecen español pero significan otra cosa', ukus:'Diferencias entre el inglés británico (Malta) y el americano', pron:'Palabras difíciles de pronunciar para hispanohablantes'};
const TOOL_INTRO = {connectors:TOOLS.connectors.intro, phrasal:TOOLS.phrasal.intro, false:TOOLS.false.intro, ukus:TOOLS.ukus.intro, pron:'Palabras que a los hispanohablantes nos cuesta pronunciar.'};
const ROUND_NAME = {connectors:'Completa la frase', phrasal:'Completa la frase', false:'¿Trampa o no?', ukus:'¿Cuál es británico?', pron:'¿Cómo suena?'};
const toolItems = tool => tool === 'pron' ? Object.entries(PRON).map(([w,[s,t]]) => [w, s, t]) : TOOLS[tool].items;
const slug = s => deaccent(s).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const PACKS = (() => {
  const out = [];
  ['connectors','phrasal'].forEach(tool => {
    const items = TOOLS[tool].items; const groups = uniq(items.map(x => x[3]));
    groups.forEach(g => { const its = items.filter(x => x[3] === g); const n = Math.ceil(its.length / 6); const size = Math.ceil(its.length / n);
      for (let k=0; k<n; k++) out.push({id:`${tool}-${slug(g)}-${k+1}`, tool, title: g + (n > 1 ? ' ' + (k+1) : ''), items: its.slice(k*size, (k+1)*size)}); });
  });
  [['false',6],['ukus',7],['pron',8]].forEach(([tool, size]) => { const its = toolItems(tool); for (let i=0, k=1; i<its.length; i+=size, k++) out.push({id:`${tool}-${k}`, tool, title:`${TOOL_NAME[tool]} ${k}`, items: its.slice(i, i+size)}); });
  return out;
})();
const getPack = id => PACKS.find(p => p.id === id);
function nextPack(){
  const done = t => PACKS.filter(p => p.tool === t && S.packs[p.id]).length;
  const order = TOOL_KEYS.slice().sort((a,b) => done(a) - done(b));
  for (const t of order) { const p = PACKS.find(x => x.tool === t && !S.packs[x.id]); if (p) return p; }
  return null;
}
function blank(ex, term){ if (/[\/…]/.test(term)) return null; const re = new RegExp('\\b' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i'); return re.test(ex) ? ex.replace(re, '___') : null; }
function gameRaw(tool, it){
  const pool = toolItems(tool);
  if (tool === 'connectors' || tool === 'phrasal') {
    const [en, es, ex, grp] = it; const g = (TK.gaps[tool] || [])[pool.indexOf(it)];
    /* near meanings: same group first, then the rest */
    const near = [...shuffle(pool.filter(x => x[0] !== en && x[3] === grp)), ...shuffle(pool.filter(x => x[3] !== grp))];
    if (g && Math.random() < .65) {
      const prompt = tool === 'phrasal' ? g[0].replace('___', `___ (${g[2]})`) : g[0]; const wr = tool === 'phrasal' ? g[3] : g[2];
      return {k:'mc', kind:'gap', prompt, opts:[g[1], ...wr.map(x => x[0])], whys:['', ...wr.map(x => x[1])], explain:`«${en}» = ${es}.`, ex: fillGap(prompt, g[1])};
    }
    if (Math.random() < .5) { const o = []; near.forEach(x => { if (o.length < 3 && x[1] !== es && !o.some(y => y[1] === x[1])) o.push(x); });
      return {k:'mc', kind:'meaning', prompt:en, opts:[es, ...o.map(x => x[1])], whys:['', ...o.map(x => `Eso es «${x[0]}».`)], explain:`«${en}» = ${es}.`, ex}; }
    const o = near.slice(0,3);
    return {k:'mc', kind:'translate', prompt:`«${es}»`, opts:[en, ...o.map(x => x[0])], whys:['', ...o.map(x => `«${x[0]}» = ${x[1]}.`)], explain:`«${en}» = ${es}.`, ex};
  }
  if (tool === 'false') { const [en, real, trap, trapEn] = it; const others = shuffle(pool.filter(x => x[0] !== en && x[1] !== real && x[1] !== trap)).slice(0,2);
    return {k:'mc', kind:'trap', prompt:`«${en}» significa…`, opts:[real, trap, ...others.map(x => x[1])], whys:['', `Esa es la trampa: «${trap}» en inglés se dice «${trapEn}».`, ...others.map(x => `Eso es «${x[0]}».`)], explain:`«${en}» = ${real}.`, say:en}; }
  if (tool === 'ukus') { const [uk, us, es] = it; return {k:'mc', kind:'ukus', prompt:`«${es}»: ¿cuál es la forma británica?`, opts:[uk, us], whys:['', `«${us}» es americano. En UK y Malta se dice «${uk}».`], explain:`«${uk}» es británico. En Malta oirás sobre todo «${uk}».`}; }
  const [w, snd, t] = it; const others = pool.filter(x => x[0] !== w && x[1] !== snd).map(x => ({x, d: lev(x[1], snd) + Math.random()})).sort((a, b) => a.d - b.d).slice(0,3).map(o => o.x);
  return {k:'mc', kind:'sound', prompt:w, opts:[snd, ...others.map(x => x[1])], whys:['', ...others.map(x => `Así suena «${x[0]}», no «${w}».`)], explain:t, say:w};
}
function roundRaws(tool, n){ return shuffle(toolItems(tool).slice()).slice(0, n).map(it => gameRaw(tool, it)); }
function mixedRaws(n){ const out = []; for (let i=0; i<n; i++) { const t = pick1(TOOL_KEYS); out.push(gameRaw(t, pick1(toolItems(t)))); } return out; }
function cardOf(tool, it){
  if (tool === 'connectors' || tool === 'phrasal') return {term:it[0], mean:it[1], ex:it[2]};
  if (tool === 'false') return {term:it[0], mean:it[1], warn:`No es «${it[2]}» (eso es «${it[3]}»).`};
  if (tool === 'ukus') return {term:it[0], mean:it[2], us:it[1]};
  return {term:it[0], sounds:it[1], mean:it[2]};
}
function speakFromPack(P){
  return P.items.slice(0,4).map(it => { const c = cardOf(P.tool, it); return c.ex ? {en:c.ex, es:`${c.term} = ${c.mean}`} : {en:c.term, es: c.sounds ? `suena «${c.sounds}»` : c.mean}; });
}
function openPack(id){
  const P = getPack(id); if (!P) return; stopAll();
  st.view = 'pack'; st.pack = {id, step:0};
  const raws = [...P.items.map(it => gameRaw(P.tool, it)), ...shuffle(P.items.slice()).slice(0,2).map(it => gameRaw(P.tool, it))];
  st.quiz = newQuiz('pack:' + id, shuffle(raws), P.title);
  st.speak = newSpeak('pack:' + id, speakFromPack(P));
  render(); scrollTo(0,0);
}
function markPackDone(id){
  const q = st.quiz && st.quiz.key === 'pack:' + id ? st.quiz : null; const prev = S.packs[id];
  S.packs[id] = {score: Math.max(q ? q.correct : 0, prev ? prev.score : 0), total: q ? q.items.length : 0, date: today()};
  activity(); save();
}
const PACK_STEPS = ['Aprende','Juega','Dilo'];
function viewPack(){
  const P = getPack(st.pack.id); if (!P) { st.view = 'tools'; return viewTools(); }
  const s = st.pack.step; let body = '', act = '';
  if (s === 0) {
    body = `<div class="pack-cards">${P.items.map(it => { const c = cardOf(P.tool, it); return `<article class="card pcard"><div class="row" style="justify-content:space-between;align-items:flex-start;flex-wrap:nowrap"><div style="min-width:0"><p class="t-en ctx">${tw(c.term)}</p>${c.sounds ? `<p class="pron-sounds">suena «${esc(c.sounds)}»</p>` : ''}${c.us ? `<p class="note">En americano: ${esc(c.us)}</p>` : ''}<p class="es"><b>${esc(c.mean)}</b></p></div><div class="ph-btns">${play(c.ex ? c.term + '. ' + c.ex : c.term)}${playSlow(c.ex || c.term)}</div></div>${c.ex ? `<p class="ex ctx">“${tw(c.ex)}”</p>` : ''}${c.warn ? `<p class="warn">${esc(c.warn)}</p>` : ''}</article>`; }).join('')}</div>`;
    act = `<button class="btn primary" data-act="pack-step" data-n="1"${tt('Jugar con estas palabras para fijarlas')}>A jugar ${ic('right')}</button>`;
  }
  if (s === 1) { const r = quizView(st.quiz, 'pack'); body = r.html; act = r.act; }
  if (s === 2) { const r = speakView(st.speak, 'pack'); body = r.html; act = r.act; }
  const head = `<button class="back" data-act="pack-back"${tt('Volver a los recursos; tu avance del pack no se guarda hasta terminarlo')}>${ic('left')}Recursos</button>
    <div class="page-head" style="margin-bottom:10px"><p class="eyebrow">${esc(TOOL_NAME[P.tool])} · pack de ${P.items.length}</p><h2>${esc(P.title)}</h2></div>
    <div class="steps" role="tablist">${PACK_STEPS.map((x,i) => `<button role="tab" aria-selected="${i===s}" class="${i===s?'on':''}" data-act="pack-step" data-n="${i}"${tt(['Ver y escuchar las palabras del pack','Ejercicios con estas palabras','Decir en voz alta los ejemplos'][i])}><span class="n">${i+1}</span>${x}</button>`).join('')}</div>`;
  return {immersive:true, act, html: head + body};
}

/* ----- matching game ----- */
function newMatch(tool){
  const all = toolItems(tool); const groups = uniq(all.map(x => x[3]).filter(Boolean)).filter(g => all.filter(x => x[3] === g).length >= 6);
  /* pairs from the same group look alike, so she has to really know them */
  const its = shuffle((groups.length ? all.filter(x => x[3] === pick1(groups)) : all).slice()).slice(0,6);
  const pairs = its.map((it,i) => { const c = cardOf(tool, it); return {id:i, left:c.term, right: tool === 'ukus' ? c.us : c.sounds ? c.sounds : c.mean}; });
  return {tool, pairs, lo: shuffle(pairs.map(p => p.id)), ro: shuffle(pairs.map(p => p.id)), sel:null, done:[], wrong:0, bad:null, start:Date.now(), secs:0, finished:false};
}
function matchView(m){
  const head = `<p class="lead" style="margin-bottom:14px">${esc(TOOL_NAME[m.tool])}: toca una palabra de la izquierda y luego su pareja de la derecha.</p>`;
  if (m.finished) {
    const best = S.best['match-' + m.tool];
    return {html:`<div class="result"><span class="confetti">${ic('trophy')}</span><div class="big">${m.secs}<small>s</small></div><p class="lead">${m.wrong ? `${m.wrong} fallo${m.wrong === 1 ? '' : 's'}.` : '¡Sin fallos!'} ${best === m.secs ? '¡Nuevo récord!' : best ? `Tu récord: ${best} s.` : ''}</p></div>`,
      act:`<button class="btn ghost" data-act="practice-home">Listo</button><button class="btn primary" data-act="match-again"${tt('Jugar otra partida con palabras nuevas')}>${ic('refresh')}Otra partida</button>`};
  }
  const P = id => m.pairs.find(p => p.id === id);
  const cls = (side, id) => m.done.includes(id) ? 'ok' : m.bad && m.bad[side] === id ? 'no' : side === 0 && m.sel === id ? 'sel' : '';
  return {html:`${head}<div class="match"><div class="mcol">${m.lo.map(id => `<button class="mtile ${cls(0,id)}" data-act="m-left" data-id="${id}" ${m.done.includes(id)?'disabled':''}>${esc(P(id).left)}</button>`).join('')}</div>
    <div class="mcol">${m.ro.map(id => `<button class="mtile ${cls(1,id)}" data-act="m-right" data-id="${id}" ${m.done.includes(id)?'disabled':''}>${esc(P(id).right)}</button>`).join('')}</div></div>
    <p class="note" style="margin-top:12px">${m.done.length} de ${m.pairs.length} parejas · ${m.wrong} fallos</p>`, act:''};
}
function matchPick(side, id){
  const m = st.match; if (!m || m.finished) return;
  if (side === 0) { m.sel = id; m.bad = null; speak(m.pairs.find(p => p.id === id).left); render(); return; }
  if (m.sel === null) { toast('Primero toca una palabra de la izquierda.'); return; }
  if (m.sel === id) { m.done.push(id); m.sel = null; m.bad = null; if (m.done.length === m.pairs.length) { m.finished = true; m.secs = Math.max(1, Math.round((Date.now() - m.start) / 1000)); const k = 'match-' + m.tool; if (!S.best[k] || m.secs < S.best[k]) S.best[k] = m.secs; activity(); save(); } render(); return; }
  m.wrong++; m.bad = [m.sel, id]; m.sel = null; render();
  setTimeout(() => { if (st.match === m) { m.bad = null; render(); } }, 650);
}

/* ----- timed round ----- */
let TIMER = null;
function startTimed(tool){
  const raws = tool === 'gram' ? gramTimedRaws(60) : tool === 'irr' ? Array.from({length:60}, () => irrMc(pick1(IRR))) : tool ? roundRaws(tool, 40).concat(roundRaws(tool, 20)) : mixedRaws(60);
  const name = tool === 'gram' ? ' · tiempos verbales' : tool === 'irr' ? ' · irregulares' : tool ? ' · ' + TOOL_NAME[tool] : '';
  st.quiz = newQuiz('timed:' + (tool || 'all'), raws, `Contrarreloj${name}`);
  st.quiz.timed = {end: Date.now() + 60000};
  clearInterval(TIMER);
  TIMER = setInterval(() => {
    const q = st.quiz; if (!q || !q.timed || q.finished) { clearInterval(TIMER); return; }
    const left = Math.max(0, Math.ceil((q.timed.end - Date.now()) / 1000));
    const el = document.getElementById('qtimer'); if (el) el.textContent = left + ' s';
    if (left <= 0) { clearInterval(TIMER); finishQuiz(); render(); }
  }, 250);
}

function viewTools(){
  const tool = st.res.tool, mode = st.res.mode;
  const tabs = `<div class="tabs" role="tablist">${TOOL_KEYS.map(k => `<button role="tab" aria-selected="${k===tool}" class="${k===tool?'on':''}" data-act="res-tool" data-t="${k}"${tt(TOOL_TIP[k])}>${esc(TOOL_NAME[k])}</button>`).join('')}</div>`;
  const seg = `<div class="seg" style="margin-bottom:16px">${[['packs','Packs','Mini-lecciones de 6 a 8 palabras: aprende, juega y dilo'],['play','Jugar','Juegos para practicar estas palabras'],['list','Lista','Ver todas las palabras de una vez']].map(([k,l,t]) => `<button class="${k===mode?'on':''}" data-act="res-mode" data-m="${k}"${tt(t)}>${l}</button>`).join('')}</div>`;
  let body;
  if (mode === 'packs') {
    const ps = PACKS.filter(p => p.tool === tool); const dn = ps.filter(p => S.packs[p.id]).length;
    body = `<p class="note" style="margin-bottom:12px">${dn} de ${ps.length} packs completados. Cada pack cuenta como una actividad de tu plan del día.</p>
      <div class="pack-grid">${ps.map(p => { const d = S.packs[p.id]; return `<button class="qt pack ${d ? '' : 'hot'}" data-act="pack" data-id="${p.id}"${tt('Abrir este pack: ' + p.items.map(it => it[0]).slice(0,4).join(', ') + '…')}><span class="qi">${d ? ic('check') : ic('layers')}</span><b>${esc(p.title)}</b><span>${esc(p.items.map(it => it[0]).slice(0,3).join(' · '))}</span><span class="note num">${d ? `Hecho · ${d.score}/${d.total}` : `${p.items.length} palabras`}</span></button>`; }).join('')}</div>`;
  } else if (mode === 'play') {
    const best = S.best['match-' + tool]; const bt = S.best['timed:' + tool];
    body = `<div class="quick">
      <button class="qt hot" data-act="game" data-g="round" data-t="${tool}"${tt('10 preguntas rápidas con estas palabras')}><span class="qi">${ic('target')}</span><b>${esc(ROUND_NAME[tool])}</b><span>Ronda de 10 preguntas</span></button>
      <button class="qt" data-act="game" data-g="match" data-t="${tool}"${tt('Une cada palabra con su pareja lo más rápido posible')}><span class="qi">${ic('grid')}</span><b>Parejas</b><span>${best ? `Récord: ${best} s` : 'Une las parejas'}</span></button>
      <button class="qt" data-act="game" data-g="timed" data-t="${tool}"${tt('Responde todas las que puedas en 60 segundos')}><span class="qi">${ic('flame')}</span><b>Contrarreloj</b><span>${bt ? `Récord: ${bt} aciertos` : '60 segundos'}</span></button>
      <button class="qt" data-act="game" data-g="timed" data-t=""${tt('Contrarreloj con preguntas de todos los recursos mezclados')}><span class="qi">${ic('shuffle')}</span><b>Contrarreloj mixto</b><span>${S.best['timed:all'] ? `Récord: ${S.best['timed:all']}` : 'Todo mezclado'}</span></button></div>`;
  } else {
    const items = toolItems(tool);
    if (tool === 'ukus') body = `<div class="tbl-wrap"><table class="ukus"><thead><tr><th>UK (Malta)</th><th>US</th><th>Español</th></tr></thead><tbody>${items.map(r => `<tr><td><span class="w" data-w="${esc(r[0])}">${esc(r[0])}</span></td><td style="color:var(--ink-3)">${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</tbody></table></div>`;
    else if (tool === 'pron') body = `<div class="tlist">${items.map(([w,s,t]) => `<div class="titem"><div style="min-width:0"><p class="t-en">${esc(w)}</p><p class="pron-sounds">suena «${esc(s)}»</p><p class="es">${esc(t)}</p></div><div class="ph-btns">${play(w)}${playSlow(w)}</div></div>`).join('')}</div>`;
    else if (tool === 'false') body = `<div class="tlist">${items.map(r => `<div class="titem"><div style="min-width:0"><p class="t-en ctx">${tw(r[0])}</p><p class="es"><b>${esc(r[1])}</b></p><p class="warn">No es «${esc(r[2])}» (eso es «${esc(r[3])}»).</p></div>${play(r[0])}</div>`).join('')}</div>`;
    else body = uniq(items.map(r => r[3])).map(g => `<h3 style="margin:18px 0 10px">${esc(g)}</h3><div class="tlist">${items.filter(r => r[3] === g).map(r => `<div class="titem"><div style="min-width:0"><p class="t-en ctx">${tw(r[0])}</p><p class="es">${esc(r[1])}</p><p class="ex ctx">“${tw(r[2])}”</p></div>${play(r[0] + '. ' + r[2])}</div>`).join('')}</div>`).join('');
  }
  return {html:`<div class="page-head"><h1>Recursos</h1><p class="lead">Lo que hace que tu inglés suene natural. Aprende en packs, juega o consulta la lista.</p></div>${tabs}<p class="note" style="margin-bottom:12px">${esc(TOOL_INTRO[tool])} · ${toolItems(tool).length} palabras</p>${seg}${body}`};
}

/* ----- grammar: verb tenses, comparisons and irregular verbs ----- */
const G = window.CHEERS_GRAMMAR || {aspects:[], times:[], order:[], tenses:[], compare:[], irrGroups:[], irregular:[], irrAlt:{}, irrNote:{}, which:[]};
const TENSES = G.tenses, CMPS = G.compare, IRR = G.irregular;
const getTense = id => TENSES.find(t => t.id === id);
const getCmp = id => CMPS.find(c => c.id === id);
const ASP = Object.fromEntries(G.aspects.map(a => [a[0], a]));
const TIME_NAME = Object.fromEntries(G.times);
const nextTense = () => { const id = G.order.find(i => !S.gram[i]); return id ? getTense(id) : null; };
const fillGap = (s, a) => s.replace(/___\s*(\([^)]*\))?/, a);
const gapHTML = s => esc(s).replace(/___/g, '<span class="gap">?</span>');

/* exercise data → quiz items */
function gRaw(e, uid){
  const wo = a => a.map(x => Array.isArray(x) ? x[0] : x), ww = a => ['', ...a.map(x => Array.isArray(x) ? x[1] : '')];
  if (e[0] === 'g') return {k:'mc', kind:'gform', uid, prompt:e[1], opts:[e[2], ...wo(e[3])], whys:ww(e[3]), explain:e[4], ex:fillGap(e[1], e[2])};
  if (e[0] === 't') return {k:'form', uid, s:e[1], a:e[2], es:e[3], why:e[4]};
  if (e[0] === 'o') return {k:'order', uid, en:e[1], es:e[2]};
  if (e[0] === 's') return {k:'mc', kind:'gsit', uid, prompt:e[1], opts:[e[2], ...wo(e[3])], whys:ww(e[3]), explain:e[4], ex:e[2]};
  return {k:'mc', kind:'gfix', uid, prompt:'Solo una está bien dicha. ¿Cuál?', opts:[e[1], ...wo(e[2])], whys:ww(e[2]), explain:e[3], ex:e[1]};
}
function tenseRaws(T){
  const r = T.ex.map((e,i) => gRaw(e, `g:${T.id}:${i}`));
  const of = ks => shuffle(r.filter(x => ks.includes(x.kind || x.k)));
  return [...of(['gform','gfix']), ...of(['order','gsit']), ...of(['form'])];
}
const cmpRaws = Cm => shuffle(Cm.ex.map((e,i) => gRaw(e, `c:${Cm.id}:${i}`)));
function whichRaws(n){
  const list = shuffle(G.which.slice()).slice(0, n);
  return list.map(([en, id]) => {
    const T = getTense(id); const same = TENSES.filter(x => x.id !== id && (x.time === T.time || x.aspect === T.aspect));
    const others = uniq([...shuffle(same).slice(0,2), ...shuffle(TENSES.filter(x => x.id !== id))]).slice(0,3);
    return {k:'mc', kind:'gwhich', uid:'w:' + en, prompt:en, say:en, opts:[T.name, ...others.map(x => x.name)], whys:['', ...others.map(D => `${D.name} se forma con «${D.form.aff[0].replace(/^Sujeto \+ /, '')}» y sirve para: ${D.idea.charAt(0).toLowerCase() + D.idea.slice(1)}`)], explain:`${T.name}: ${T.idea} Fórmula: ${T.form.aff[0]}.`};
  });
}
function gramPool(){
  const done = TENSES.filter(t => S.gram[t.id]);
  const src = done.length >= 2 ? done : G.order.slice(0,5).map(getTense);
  return src.flatMap(T => T.ex.map((e,i) => gRaw(e, `g:${T.id}:${i}`)));
}
const gramMixRaws = n => shuffle(gramPool()).slice(0, n);
function gramTimedRaws(n){
  const pool = [...whichRaws(G.which.length), ...TENSES.flatMap(T => T.ex.map((e,i) => [e,i,T]).filter(x => x[0][0] === 'g' || x[0][0] === 'f').map(([e,i,T]) => gRaw(e, `g:${T.id}:${i}`)))];
  const out = []; while (out.length < n) out.push(...shuffle(pool.slice())); return out.slice(0, n);
}

/* irregular verbs */
const irrAlts = f => [f, ...(G.irrAlt[f] || [])];
const irrSay = v => `${v[0]}, ${v[1].replace(' / ', ' or ')}, ${v[2]}`;
const irrWhy = v => `${v[0]} – ${v[1]} – ${v[2]}.${G.irrNote[v[0]] ? ' ' + G.irrNote[v[0]] : ''}`;
function irrForm(v, which){ const f = which === 1 ? v[1] : v[2]; return {k:'form', uid:`i${which}:${v[0]}`, s:`${which === 1 ? 'Pasado' : 'Participio'} de «${v[0]}» (${v[3]})`, a:irrAlts(f), why:irrWhy(v), say:irrSay(v)}; }
const regularEd = b => /e$/.test(b) ? b + 'd' : /[^aeiou]y$/.test(b) ? b.slice(0,-1) + 'ied' : b + 'ed';
function irrMc(v){
  const which = v[1] === v[2] ? 1 : pick1([1,2]); const f = which === 1 ? v[1] : v[2];
  const bad = new Set(irrAlts(f).map(x => x.toLowerCase()));
  const other = which === 1 ? v[2] : v[1]; const name = which === 1 ? 'el pasado' : 'el participio';
  const cands = [{t:regularEd(v[0]), why:`«${v[0]}» es irregular: no lleva -ed. ${cap1(name)} es «${f}».`}, {t:other, why:`«${other}» es ${which === 1 ? 'el participio' : 'el pasado'}, no ${name}.`}, {t:v[0], why:'Esa es la forma base (presente).'}, ...shuffle(IRR.filter(x => x[0] !== v[0])).map(x => ({t: which === 1 ? x[1] : x[2], why:`«${which === 1 ? x[1] : x[2]}» es ${name} de «${x[0]}».`}))];
  const seen = new Set(bad); const o = []; cands.forEach(c => { const k = c.t.toLowerCase(); if (o.length < 3 && !seen.has(k)) { o.push(c); seen.add(k); } });
  return {k:'mc', kind:'irr', uid:`im:${v[0]}:${which}`, prompt:`${which === 1 ? 'Pasado' : 'Participio'} de «${v[0]}» (${v[3]})`, opts:[f, ...o.map(c => c.t)], whys:['', ...o.map(c => c.why)], explain:irrWhy(v), ex:irrSay(v)};
}
const IRR_INFO = (() => { const m = {}; IRR.forEach(v => { const line = `${v[0]} – ${v[1]} – ${v[2]}`; if (!m[v[0]]) m[v[0]] = `Verbo irregular: ${line}`; v[1].split(' / ').forEach(x => { if (!m[x]) m[x] = `Pasado de «${v[0]}» (${v[3]}) · ${line}`; }); if (!m[v[2]]) m[v[2]] = `Participio de «${v[0]}» (${v[3]}) · ${line}`; }); return m; })();

/* typed answers: tolerant to contractions, punctuation and capitals */
const GC = {"won't":'will not', "can't":'can not', cannot:'can not', "shan't":'shall not', "let's":'let us'};
function gnorm(s){
  return String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?¿¡;:"“”()]/g, ' ').split(/\s+/).filter(Boolean).flatMap(w => {
    if (GC[w]) return GC[w].split(' ');
    let m = w.match(/^([a-z]+)n't$/); if (m) return [m[1], 'not'];
    m = w.match(/^([a-z]*)'(m|re|s|ve|ll|d)$/); if (m) { const x = {m:'am', re:'are', s:'is', ve:'have', ll:'will', d:'would'}[m[2]]; return m[1] ? [m[1], x] : [x]; }
    return [w];
  }).join(' ');
}
function lev(a, b){ const d = Array.from({length:a.length+1}, (_,i) => [i]); for (let j=1;j<=b.length;j++) d[0][j] = j; for (let i=1;i<=a.length;i++) for (let j=1;j<=b.length;j++) d[i][j] = Math.min(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1)); return d[a.length][b.length]; }
function formCheck(){
  const q = st.quiz; const it = q.items[q.i]; const el = document.getElementById('form-in'); const v = el ? el.value.trim() : '';
  if (!v) { el && el.focus(); return; }
  const r = it.raw; const t = gnorm(v); const acc = r.a.map(gnorm);
  let ok = acc.includes(t);
  if (!ok && /___/.test(r.s)) { const before = gnorm(r.s.split('___')[0]).split(' ').filter(Boolean); ok = acc.some(a => [1,2,3].some(k => k <= before.length && t === before.slice(-k).join(' ') + ' ' + a)); }
  it.typed = v; it.ok = ok; it.close = !ok && acc.some(a => lev(a, t) <= (a.length > 12 ? 2 : 1)); it.checked = true; if (ok) q.correct++;
  q.picked = 0; recordAnswer(it, ok); render(); revealFb(); speak(r.say || (/___/.test(r.s) ? fillGap(r.s, r.a[0]) : r.a[0]));
}
function formView(q, it, head, nextB){
  const r = it.raw; const gap = /___/.test(r.s); const full = gap ? fillGap(r.s, r.a[0]) : r.a[0];
  const alts = uniq(r.a.slice(1).filter(x => !/^'/.test(x) && gnorm(x) !== gnorm(r.a[0])));
  const fb = !it.checked ? '' : `<div class="fb ${it.ok ? 'good' : 'bad'}" role="status"><b>${it.ok ? '¡Bien!' : it.close ? '¡Casi! Revisa la ortografía.' : 'Casi.'}</b>${it.ok ? '' : `<span>La respuesta: <b style="color:var(--ink)">${esc(r.a[0])}</b>${it.typed ? ` · escribiste «${esc(it.typed)}»` : ''}</span>`}${alts.length ? `<span class="note">También vale: ${esc(alts.join(' · '))}</span>` : ''}
    <div class="row" style="flex-wrap:nowrap">${play(r.say || full, 'say')}<span class="ctx" style="font-weight:700">${tw(r.say || full)}</span></div>${r.why ? `<span>${esc(r.why)}</span>` : ''}</div>`;
  return {html:`<div class="quiz">${head}${r.pic ? `<div class="vpic">${drawPic(r.pic)}</div>` : ''}<h3 class="q-prompt">${gap ? gapHTML(r.s) : esc(r.s)}</h3>${r.es ? `<p class="note">Significa: ${esc(r.es)}</p>` : ''}
    <div class="type-row"><input class="field big" id="form-in" lang="en-GB" autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false" maxlength="60" placeholder="${gap ? 'Escribe solo lo que falta…' : 'Escribe la forma…'}" value="${esc(it.typed || '')}" ${it.checked ? 'disabled' : ''}></div>${fb}</div>`,
    act: it.checked ? nextB : `<button class="btn ghost slim" data-act="skip"${tt('Pasar a la siguiente sin responder')}>Saltar</button><button class="btn primary" data-act="form-check"${tt('Comprobar tu respuesta')}>Comprobar</button>`};
}

/* timeline drawing for each tense */
function timeline(kind, bare){
  const X = p => +(18 + p * 3.04).toFixed(1); const Y = 52;
  const txt = (p, y, s, cls='', anchor='middle') => bare && !/tl-t/.test(cls) ? '' : `<text class="${cls}" x="${X(p)}" y="${y}" text-anchor="${anchor}">${esc(s)}</text>`;
  const wave = (a, b) => { let d = `M${X(a)} ${Y}`, up = true; for (let p = a; p < b - .01; p += 2.5) { const n = Math.min(b, p + 2.5); d += ` Q${X((p+n)/2)} ${up ? Y-8 : Y+8} ${X(n)} ${Y}`; up = !up; } return `<path class="tl-wave" d="${d}"/>`; };
  const bar = (a, b) => `<rect class="tl-bar" x="${X(a)}" y="${Y-6}" width="${(X(b)-X(a)).toFixed(1)}" height="12" rx="6"/>`;
  const dot = p => `<path class="tl-x" d="M${X(p)-6} ${Y-6}l12 12M${X(p)+6} ${Y-6}l-12 12"/>`;
  const ref = (p, s) => `<line class="tl-ref" x1="${X(p)}" y1="${Y-22}" x2="${X(p)}" y2="${Y+9}"/>${txt(p, Y-27, s, 'tl-r')}`;
  const arc = (a, b) => `<path class="tl-arr" d="M${X(a)} ${Y-9} Q${X((a+b)/2)} ${Y-32} ${X(b)-2} ${Y-10}" marker-end="url(#tlh)"/>`;
  const up = (p, s) => txt(p, Y-16, s), down = (p, s) => txt(p, Y+22, s);
  const S2 = {
    habit: [6,20,34,64,78,92].map(dot).join('') + up(20, 'una y otra vez') + up(78, 'siempre'),
    now: wave(40, 60) + up(50, 'ahora · estos días'),
    pastnow: dot(18) + down(18, 'antes') + arc(18, 50) + txt(34, Y-27, 'conecta con ahora', 'tl-r'),
    pastnowdur: bar(14, 50) + up(32, 'llevo… hasta ahora'),
    past: ref(26, 'ayer · en 2015') + dot(26) + down(26, 'terminado'),
    pastprog: wave(6, 42) + up(24, 'estaba…') + dot(30) + down(30, '¡y de pronto!'),
    pastpast: dot(10) + down(10, '1.º había…') + dot(36) + down(36, '2.º pasado') + arc(10, 36),
    pastpastdur: bar(4, 34) + up(18, 'llevaba…') + ref(34, 'cuando…'),
    future: dot(76) + up(76, 'trabajaré · te ayudo'),
    goingto: arc(50, 76) + txt(63, Y-27, 'ya decidido', 'tl-r') + dot(76) + down(76, 'voy a…'),
    futprog: wave(62, 90) + ref(76, 'mañana a las 10') + down(76, 'estaré…'),
    futperf: dot(64) + down(64, 'habré…') + ref(84, 'para el viernes'),
    futperfdur: bar(52, 86) + up(68, 'llevaré…') + ref(86, 'en junio')
  };
  return `<svg class="tl" viewBox="0 0 340 106" role="img" aria-label="Línea de tiempo"><defs><marker id="tlh" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--orange)"/></marker></defs>
    <line class="tl-axis" x1="${X(0)}" y1="${Y}" x2="${X(100)}" y2="${Y}"/><path class="tl-axis" d="M${X(100)-6} ${Y-5}L${X(100)} ${Y}L${X(100)-6} ${Y+5}"/>
    <line class="tl-now" x1="${X(50)}" y1="${Y-12}" x2="${X(50)}" y2="${Y+12}"/>
    ${S2[kind] || ''}
    ${txt(0, 102, 'PASADO', 'tl-t', 'start')}${txt(50, 102, 'AHORA', 'tl-t tl-tn')}${txt(100, 102, 'FUTURO', 'tl-t', 'end')}</svg>`;
}
/* highlight auxiliaries and verb slots inside a formula */
const FORMULA_RE = /(\b(?:will have been|won't have been|have been|has been|had been|will have|won't have|will be|won't be|going to|am not|haven't|hasn't|hadn't|isn't|aren't|wasn't|weren't|don't|doesn't|didn't|won't|am|is|are|was|were|have|has|had|will|do|does|did|been)\b|verbo-ing|participio|verbo(?: \+ s)?(?: en pasado)?)/i;
const formulaHTML = f => f.split(FORMULA_RE).map((p,i) => i % 2 ? (/^(verbo|participio)/i.test(p) ? `<i class="vb">${esc(p)}</i>` : `<b class="aux">${esc(p)}</b>`) : esc(p)).join('');
const exLine = (en, cls='') => `<div class="fex ${cls}">${play(en, 'say')}<span class="ctx">${tw(en)}</span></div>`;
const tenseBadge = id => { const d = S.gram[id]; return d ? `<span class="tbadge ok">${ic('check')}${d.total ? `${d.score}/${d.total}` : 'Hecho'}</span>` : ''; };

/* ----- views ----- */
function openTense(id){
  const T = getTense(id); if (!T) return; stopAll(); st.practice = null;
  st.view = 'tense'; st.tense = {id, step:0};
  st.quiz = newQuiz('tense:' + id, tenseRaws(T), T.name);
  st.speak = newSpeak('tense:' + id, T.uses.filter(u => wc(u[1]) <= 14).slice(0,4).map(u => ({en:u[1], es:u[2]})));
  render(); scrollTo(0,0);
}
function openCmp(id){
  const Cm = getCmp(id); if (!Cm) return; stopAll(); st.practice = null;
  st.view = 'cmp'; st.cmp = {id, step:0};
  st.quiz = newQuiz('cmp:' + id, cmpRaws(Cm), Cm.title);
  render(); scrollTo(0,0);
}
function markTenseDone(id){
  const q = st.quiz && st.quiz.key === 'tense:' + id ? st.quiz : null; const prev = S.gram[id];
  S.gram[id] = {score: Math.max(q && q.finished ? q.correct : 0, prev ? prev.score : 0), total: q ? q.items.length : (prev ? prev.total : 0), date: today()};
  activity(); save();
}
function gramGame(g){
  if (g === 'which') return newQuiz('gram:which', whichRaws(10), '¿Qué tiempo es?');
  if (g === 'mix') return newQuiz('gram:mix', gramMixRaws(10), 'Mezcla de tiempos');
  if (g === 'vis') return newQuiz('gram:vis', visMixRaws(10), 'Con imágenes');
  if (g === 'irr-past') return newQuiz('gram:irr-past', shuffle(IRR.slice()).slice(0,10).map(v => irrForm(v, 1)), 'Escribe el pasado');
  if (g === 'irr-part') return newQuiz('gram:irr-part', shuffle(IRR.slice()).slice(0,10).map(v => irrForm(v, 2)), 'Escribe el participio');
  return newQuiz('gram:irr-mc', shuffle(IRR.slice()).slice(0,10).map(irrMc), 'Elige la forma');
}
const T_STEPS = ['Entiende','Practica','Dilo'];
function stepsHTML(names, cur, act, tips){ return `<div class="steps" role="tablist">${names.map((x,i) => `<button role="tab" aria-selected="${i===cur}" class="${i===cur?'on':''}" data-act="${act}" data-n="${i}"${tt(tips[i])}><span class="n">${i+1}</span>${x}</button>`).join('')}</div>`; }
function tenseLearnHTML(T){
  const rel = CMPS.filter(c => c.tenses.includes(T.id));
  const form = [['aff','+','Afirmativa'],['neg','−','Negativa'],['q','?','Pregunta']].map(([k,sym,lab]) => { const f = T.form[k];
    return `<div class="fbox"><div class="fhead"><span class="sym ${k}">${sym}</span><b>${lab}</b></div><p class="formula">${formulaHTML(f[0])}</p>${f.slice(1).map(e => exLine(e)).join('')}</div>`; }).join('');
  return `<div class="g-learn">
    <section class="card g-idea"><p class="eyebrow">La idea</p><p class="g-big">${esc(T.idea)}</p>${timeline(T.tl)}</section>
    <section><h3 class="g-h">${ic('layers')}Estructura</h3><div class="g-form">${form}</div>
      <p class="note" style="margin-top:10px">Respuestas cortas: <b style="color:var(--ink)">${esc(T.short)}</b></p>${T.beNote ? `<p class="g-note">${esc(T.beNote)}</p>` : ''}</section>
    <section><h3 class="g-h">${ic('target')}¿Cuándo se usa?</h3><ol class="g-uses">${T.uses.map(([t,en,es],i) => `<li><span class="n">${i+1}</span><div><b>${esc(t)}</b>${exLine(en)}<p class="es">${esc(es)}</p></div></li>`).join('')}</ol></section>
    <section><h3 class="g-h">${ic('search')}Palabras que lo delatan</h3><div class="chips">${T.signals.map(w => `<button class="wchip" data-act="say" data-say="${esc(w.replace('…',''))}"${tt('Escuchar')}>${esc(w)}</button>`).join('')}</div></section>
    <section class="card g-tricks"><h3 class="g-h">${ic('bulb')}Trucos</h3><ul>${T.tricks.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
    <section><h3 class="g-h">${ic('alert')}Errores típicos</h3><div class="g-mist">${T.mistakes.map(([w,r,why]) => `<div class="mist"><p class="bad-s">${ic('x')}<s>${esc(w)}</s></p><div class="good-s">${ic('check')}${exLine(r)}</div><p class="note">${esc(why)}</p></div>`).join('')}</div></section>
    ${T.spelling ? `<section><h3 class="g-h">${ic('pencil')}Ortografía</h3><ul class="g-list">${T.spelling.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>` : ''}
    ${rel.length ? `<section><h3 class="g-h">${ic('shuffle')}No lo confundas</h3><div class="g-rel">${rel.map(c => `<button class="btn ghost sm" data-act="cmp" data-id="${c.id}"${tt('Ver la diferencia con ejemplos y ejercicios')}>${esc(c.title)}</button>`).join('')}</div></section>` : ''}
  </div>`;
}
function viewTense(){
  const T = getTense(st.tense && st.tense.id); if (!T) { st.view = 'grammar'; return viewGrammar(); }
  const s = st.tense.step; let body = '', act = '';
  if (s === 0) { body = tenseLearnHTML(T); act = `<button class="btn primary" data-act="tense-step" data-n="1"${tt('Ejercicios de este tiempo verbal')}>A practicar ${ic('right')}</button>`; }
  if (s === 1) { const r = quizView(st.quiz, 'tense'); body = r.html; act = r.act; }
  if (s === 2) { const r = speakView(st.speak, 'tense'); body = r.html; act = r.act; }
  const head = `<button class="back" data-act="gram-back"${tt('Volver a Gramática')}>${ic('left')}Gramática</button>
    <div class="page-head" style="margin-bottom:10px"><p class="eyebrow">${esc(TIME_NAME[T.time])} · ${T.extra ? 'forma de futuro' : esc(ASP[T.aspect][1])} · ${esc(T.level)}</p><h2>${esc(T.name)}</h2><p class="lead">En español: «${esc(T.esEx)}»</p></div>
    ${stepsHTML(T_STEPS, s, 'tense-step', ['Explicación, estructura, usos, trucos y errores típicos','Ejercicios de este tiempo','Decir los ejemplos en voz alta'])}`;
  return {immersive:true, act, html: head + body};
}
function viewCmp(){
  const Cm = getCmp(st.cmp && st.cmp.id); if (!Cm) { st.view = 'grammar'; return viewGrammar(); }
  const s = st.cmp.step; let body = '', act = '';
  if (s === 0) {
    body = `<div class="g-learn"><section class="card g-idea"><p class="eyebrow">La diferencia</p><p class="g-big">${esc(Cm.idea)}</p></section>
      <section><div class="ccards">${Cm.rows.map(r => `<div class="crow"><b>${esc(r[0])}</b>${Cm.cols.map((c,i) => `<div class="cf"><span class="cl">${esc(c)}</span><span>${esc(r[i+1])}</span></div>`).join('')}</div>`).join('')}</div><div class="tbl-wrap"><table class="gtbl"><thead><tr><th>${esc(Cm.first || '')}</th>${Cm.cols.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${Cm.rows.map(r => `<tr>${r.map((c,i) => `<td>${i && /[a-z]/.test(c) && /^[A-Z][^á-úñ¿]*[.?!]$/.test(c) ? `<span class="ctx">${tw(c)}</span>` : esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>
      <section><h3 class="g-h">${ic('chat')}Compara los ejemplos</h3><div class="cmp-pairs">${Cm.pairs.map(([en,es]) => `<div class="cpair">${exLine(en)}<p class="es">${esc(es)}</p></div>`).join('')}</div></section>
      <section class="card g-tricks"><h3 class="g-h">${ic('bulb')}El truco</h3><p>${esc(Cm.trick)}</p></section>
      <section><h3 class="g-h">${ic('book')}Repasa cada tiempo</h3><div class="g-rel">${Cm.tenses.map(id => `<button class="btn ghost sm" data-act="tense" data-id="${id}"${tt('Abrir la explicación completa')}>${esc(getTense(id).name)}</button>`).join('')}</div></section></div>`;
    act = `<button class="btn primary" data-act="cmp-step" data-n="1"${tt('Ejercicios para no confundirlos')}>A practicar ${ic('right')}</button>`;
  } else { const r = quizView(st.quiz, 'cmp'); body = r.html; act = r.act; }
  const head = `<button class="back" data-act="gram-back"${tt('Volver a Gramática')}>${ic('left')}Gramática</button>
    <div class="page-head" style="margin-bottom:10px"><p class="eyebrow">Comparar</p><h2>${esc(Cm.title)}</h2></div>
    ${stepsHTML(['Entiende','Practica'], s, 'cmp-step', ['La diferencia con tabla y ejemplos','Ejercicios para no confundirlos'])}`;
  return {immersive:true, act, html: head + body};
}
/* ----- visual units: learn with pictures, play, say it ----- */
function openVis(id){
  const U = getVU(id); if (!U) return; stopAll(); st.practice = null;
  st.view = 'vis'; st.vis = {id, step:0};
  st.quiz = newQuiz('vis:' + id, U.gen(10), U.title);
  st.speak = newSpeak('vis:' + id, U.speak());
  render(); scrollTo(0,0);
}
function markVisDone(id){
  const q = st.quiz && st.quiz.key === 'vis:' + id ? st.quiz : null; const prev = S.vis[id];
  S.vis[id] = {score: Math.max(q && q.finished ? q.correct : 0, prev ? prev.score : 0), total: q ? q.items.length : (prev ? prev.total : 0), date: today()};
  activity(); save();
}
function viewVis(){
  const U = getVU(st.vis && st.vis.id); if (!U) { st.view = 'grammar'; return viewGrammar(); }
  const s = st.vis.step; let body = '', act = '';
  if (s === 0) { body = U.learn(); act = `<button class="btn primary" data-act="vis-step" data-n="1"${tt('Juegos con dibujos de este tema')}>A jugar ${ic('right')}</button>`; }
  if (s === 1) { const r = quizView(st.quiz, 'vis'); body = r.html; act = r.act; }
  if (s === 2) { const r = speakView(st.speak, 'vis'); body = r.html; act = r.act; }
  const head = `<button class="back" data-act="gram-back" data-t="visual"${tt('Volver a Gramática')}>${ic('left')}Gramática</button>
    <div class="page-head" style="margin-bottom:10px"><p class="eyebrow">Visual</p><h2>${esc(U.title)}</h2><p class="lead">${esc(U.sub)}</p></div>
    ${stepsHTML(['Mira','Juega','Dilo'], s, 'vis-step', ['Aprende con dibujos','Juegos con dibujos','Describe los dibujos en voz alta'])}`;
  return {immersive:true, act, html: head + body};
}
const G_TABS = [['tenses','Tiempos','Los 12 tiempos verbales más el going to, uno por uno'],['visual','Visual','Ejercicios con dibujos: preposiciones, la hora, comparativos, cantidades'],['compare','Comparar','Los tiempos que más se confunden, lado a lado'],['irregular','Irregulares','Los verbos irregulares más usados, agrupados por patrón'],['play','Jugar','Juegos para practicar todos los tiempos']];
function viewGrammar(){
  const tab = st.gram.tab;
  const tabs = `<div class="tabs" role="tablist">${G_TABS.map(([k,l,t]) => `<button role="tab" aria-selected="${k===tab}" class="${k===tab?'on':''}" data-act="gram-tab" data-t="${k}"${tt(t)}>${l}</button>`).join('')}</div>`;
  let body = '';
  if (tab === 'tenses') {
    const N = nextTense(); const dn = TENSES.filter(t => S.gram[t.id]).length;
    const hero = N ? `<article class="hero" style="margin-bottom:22px"><div class="meta"><span class="pill">${ic('clock')}${esc(TIME_NAME[N.time])}</span><span class="pill num">${esc(N.level)}</span></div><p class="eyebrow" style="color:var(--ink)">${dn ? 'Tu siguiente tiempo' : 'Empieza aquí'}</p><h2>${esc(N.name)}</h2><p>${esc(N.idea)}</p><div class="row"><button class="btn dark" data-act="tense" data-id="${N.id}"${tt('Abrir la explicación y los ejercicios')}>Empezar ${ic('right')}</button></div></article>`
      : `<article class="hero" style="margin-bottom:22px"><p class="eyebrow" style="color:var(--ink)">¡Todos completados!</p><h2>Ya pasaste por los ${TENSES.length} tiempos</h2><p>Ahora juega para no olvidarlos: «¿Qué tiempo es?» y la mezcla de tiempos.</p><div class="row"><button class="btn dark" data-act="gram-tab" data-t="play">Jugar ${ic('right')}</button></div></article>`;
    const key = `<section class="card" style="margin-bottom:8px"><p class="eyebrow">La clave</p><h3 style="margin:6px 0 4px">3 tiempos × 4 formas</h3><p class="note" style="margin-bottom:14px">Combina presente, pasado o futuro con una de estas 4 formas y tienes los 12 tiempos verbales. Más el «going to», que vas a usar muchísimo.</p>
      <div class="g-key">${G.aspects.map(a => `<div class="asp asp-${a[0]}"><b>${esc(a[1])}</b><span class="formula">${formulaHTML(a[2])}</span><span class="note">${esc(a[3])}</span></div>`).join('')}</div></section>`;
    const AO = ['simple','continuous','perfect','perfcont']; const inTime = tk => TENSES.filter(t => t.time === tk).sort((a,b) => (a.extra ? 9 : AO.indexOf(a.aspect)) - (b.extra ? 9 : AO.indexOf(b.aspect)));
    const map = G.times.map(([tk, tn]) => `<section class="g-time"><h3>${esc(tn)} <span class="note">${TENSES.filter(t => t.time === tk && S.gram[t.id]).length} de ${TENSES.filter(t => t.time === tk).length}</span></h3><div class="tgrid">${inTime(tk).map(T => `<button class="tcard asp-${T.aspect} ${S.gram[T.id] ? 'done' : ''} ${N && N.id === T.id ? 'next' : ''}" data-act="tense" data-id="${T.id}"${tt(T.idea)}><span class="asp-l"><i class="adot"></i>${T.extra ? 'Plan / intención' : esc(ASP[T.aspect][1])}</span><b>${esc(T.name)}</b><span class="es">«${esc(T.esEx)}»</span><span class="foot"><span class="num">${esc(T.level)}</span>${tenseBadge(T.id)}${N && N.id === T.id ? '<span class="tbadge">Siguiente</span>' : ''}</span></button>`).join('')}</div></section>`).join('');
    body = `${hero}${key}${map}<p class="note" style="margin-top:18px">${dn} de ${TENSES.length} completados. Cada tiempo tiene 3 pasos: entiende, practica y dilo. Cuenta como una actividad de tu plan del día.</p>`;
  } else if (tab === 'visual') {
    const dn = VUNITS.filter(u => S.vis[u.id]).length;
    body = `<p class="note" style="margin-bottom:14px">Aprende viendo: cada tema tiene dibujos para entender, juegos con dibujos y frases para decir en voz alta. ${dn} de ${VUNITS.length} completados.</p>
      <div class="vunits">${VUNITS.map(u => { const d = S.vis[u.id]; return `<button class="vunit ${d ? 'done' : ''}" data-act="vis" data-id="${u.id}"${tt(u.sub)}><span class="vthumb">${drawPic(u.pic)}</span><span class="vtxt"><b>${esc(u.title)}</b><span>${esc(u.sub)}</span>${d ? `<span class="tbadge ok">${ic('check')}${d.total ? `${d.score}/${d.total}` : 'Hecho'}</span>` : ''}</span></button>`; }).join('')}</div>
      <div style="margin-top:18px"><button class="btn ghost" data-act="ggame" data-g="vis"${tt('10 ejercicios con dibujos de todos los temas')}>${ic('shuffle')}Mezcla con imágenes</button></div>`;
  } else if (tab === 'compare') {
    body = `<p class="note" style="margin-bottom:14px">Los tiempos que más se confunden, con tabla, ejemplos, un truco y ejercicios.</p><div class="pack-grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))">${CMPS.map(c => { const d = S.cmp[c.id]; return `<button class="qt ${d ? '' : 'hot'}" data-act="cmp" data-id="${c.id}"${tt(c.idea)}><span class="qi">${d ? ic('check') : ic('shuffle')}</span><b>${esc(c.title)}</b><span>${esc(c.idea)}</span><span class="note num">${d ? `Hecho · ${d.score}/${d.total}` : `${c.ex.length} ejercicios`}</span></button>`; }).join('')}</div>`;
  } else if (tab === 'irregular') {
    const b = k => S.best[k];
    body = `<p class="note" style="margin-bottom:14px">Los ${IRR.length} verbos irregulares más usados, agrupados por patrón para memorizarlos mejor. Los necesitas para el past simple y los tiempos perfect.</p>
      <div class="quick" style="margin-bottom:22px">
        <button class="qt hot" data-act="ggame" data-g="irr-past"${tt('10 verbos: escribe su pasado')}><span class="qi">${ic('pencil')}</span><b>Escribe el pasado</b><span>go → went</span></button>
        <button class="qt" data-act="ggame" data-g="irr-part"${tt('10 verbos: escribe su participio')}><span class="qi">${ic('pencil')}</span><b>Escribe el participio</b><span>go → gone</span></button>
        <button class="qt" data-act="ggame" data-g="irr-mc"${tt('Elige la forma correcta entre 4 opciones')}><span class="qi">${ic('target')}</span><b>Elige la forma</b><span>Ronda de 10</span></button>
        <button class="qt" data-act="ggame" data-g="irr-timed"${tt('Todas las que puedas en 60 segundos')}><span class="qi">${ic('flame')}</span><b>Contrarreloj</b><span>${b('timed:irr') ? `Récord: ${b('timed:irr')}` : '60 segundos'}</span></button></div>
      ${G.irrGroups.map(([gk, gn, gt]) => `<section style="margin-bottom:22px"><h3 style="margin-bottom:4px">${esc(gn)}</h3><p class="note" style="margin-bottom:10px">${esc(gt)}</p>
        <div class="irr-head"><span>Base</span><span>Pasado</span><span>Participio</span><span></span></div>
        <div class="irr-list">${IRR.filter(v => v[4] === gk).map(v => `<div class="irr-row"><b class="w" data-w="${esc(v[0])}">${esc(v[0])}</b><span>${esc(v[1])}</span><span>${esc(v[2])}</span>${play(irrSay(v), 'say')}<small>${esc(v[3])}${G.irrNote[v[0]] ? ' · ' + esc(G.irrNote[v[0]]) : ''}</small></div>`).join('')}</div></section>`).join('')}`;
  } else {
    const b = k => S.best[k];
    body = `<div class="quick">
      <button class="qt hot" data-act="ggame" data-g="which"${tt('Lee o escucha una frase y di qué tiempo verbal es')}><span class="qi">${ic('ear')}</span><b>¿Qué tiempo es?</b><span>Ronda de 10</span></button>
      <button class="qt" data-act="ggame" data-g="mix"${tt('Ejercicios de los tiempos que ya hiciste, mezclados')}><span class="qi">${ic('shuffle')}</span><b>Mezcla de tiempos</b><span>10 ejercicios</span></button>
      <button class="qt" data-act="ggame" data-g="timed"${tt('Responde todas las que puedas en 60 segundos')}><span class="qi">${ic('flame')}</span><b>Contrarreloj</b><span>${b('timed:gram') ? `Récord: ${b('timed:gram')}` : '60 segundos'}</span></button>
      <button class="qt" data-act="ggame" data-g="irr-past"${tt('Escribe el pasado de 10 verbos irregulares')}><span class="qi">${ic('pencil')}</span><b>Irregulares</b><span>Escribe el pasado</span></button></div>
      <p class="note" style="margin-top:16px">La mezcla usa los tiempos que ya completaste (si aún no hay dos, usa los primeros). Lo que falles irá a «Tus errores» en Practicar.</p>`;
  }
  return {html:`<div class="page-head"><h1>Gramática</h1><p class="lead">Los tiempos verbales y la gramática del día a día, explicados en español y con dibujos: estructura, cuándo usarlo, trucos, errores típicos y ejercicios.</p></div>${tabs}${body}`};
}

/* ----- daily plan ----- */
function activity(){ const d = day(); d.a = (d.a || 0) + 1; }
function planHTML(){
  const done = (S.days[today()] || {}).a || 0; const goal = S.goal || 10; const p = Math.min(100, Math.round(done / goal * 100));
  const items = []; const L = nextLesson(); const Pk = nextPack(); const due = dueIds().length;
  if (L) items.push(`<button class="plan-i" data-act="open" data-id="${L.id}"${tt('Abrir la siguiente lección recomendada')}>${ic('book')}<span><b>${esc(L.title)}</b><small>Lección</small></span></button>`);
  const Tn = nextTense(); if (Tn) items.push(`<button class="plan-i" data-act="tense" data-id="${Tn.id}"${tt('Explicación, ejercicios y práctica oral de este tiempo verbal')}>${ic('clock')}<span><b>${esc(Tn.name)}</b><small>Gramática</small></span></button>`);
  if (Pk) items.push(`<button class="plan-i" data-act="pack" data-id="${Pk.id}"${tt('Mini-lección de recursos: aprende, juega y dilo')}>${ic('layers')}<span><b>${esc(Pk.title)}</b><small>Pack de ${esc(TOOL_NAME[Pk.tool].toLowerCase())}</small></span></button>`);
  if (due) items.push(`<button class="plan-i" data-act="practice" data-m="due"${tt('Repasar lo que toca hoy según tu memoria')}>${ic('calendar')}<span><b>Repaso del día</b><small>${due} por repasar</small></span></button>`);
  items.push(`<button class="plan-i" data-act="practice" data-m="infinite"${tt('10 ejercicios mezclados de tus lecciones')}>${ic('spark')}<span><b>Práctica infinita</b><small>10 ejercicios</small></span></button>`);
  return `<article class="card plan a-plan"><div class="plan-top"><div class="plan-ring num" style="--p:${p}"><span><b>${done}</b>/${goal}</span></div><div><h3>Tu plan de hoy</h3><p class="note">${done >= goal ? '¡Meta cumplida! Si quieres, sigue un poco más.' : `Te ${goal - done === 1 ? 'falta 1 actividad' : `faltan ${goal - done} actividades`} para tu meta.`}</p></div></div>
    <div class="plan-list">${items.slice(0,5).join('')}</div></article>`;
}

/* ----- progress ----- */
const b64e = s => btoa(unescape(encodeURIComponent(s)));
const b64d = s => decodeURIComponent(escape(atob(s)));
function exportCode(){ const {installHidden, ...rest} = S; return 'CHEERS1:' + b64e(JSON.stringify(rest)); }
function mergeState(a, b){
  const newer = (b.updatedAt||0) > (a.updatedAt||0) ? b : a; const older = newer === a ? b : a;
  const out = Object.assign(fresh(), newer);
  out.done = {...(older.done||{})}; Object.entries(newer.done||{}).forEach(([k,v]) => { const x = out.done[k]; if (!x || (v.score||0) >= (x.score||0)) out.done[k] = v; });
  out.days = {...(older.days||{})}; Object.entries(newer.days||{}).forEach(([k,v]) => { const x = out.days[k] || {}; out.days[k] = {l:Math.max(x.l||0,v.l||0), q:Math.max(x.q||0,v.q||0), p:Math.max(x.p||0,v.p||0), s:Math.max(x.s||0,v.s||0), a:Math.max(x.a||0,v.a||0)}; });
  out.srs = {...(older.srs||{})}; Object.entries(newer.srs||{}).forEach(([k,v]) => { const x = out.srs[k]; if (!x || (v.b||0) >= (x.b||0)) out.srs[k] = v; });
  const seen = new Set(); out.saved = [...arr(newer.saved), ...arr(older.saved)].filter(s => s && !seen.has(s[0]) && seen.add(s[0]));
  const seenR = new Set(); out.requests = [...arr(newer.requests), ...arr(older.requests)].filter(r => r && !seenR.has(r.t) && seenR.add(r.t));
  const seenM = new Set(); out.mistakes = [...arr(newer.mistakes), ...arr(older.mistakes)].filter(m => { const id = rawId(m); return m && !seenM.has(id) && seenM.add(id); }).slice(0,80);
  ['packs','gram','cmp','vis'].forEach(f => { out[f] = {...(older[f]||{})}; Object.entries(newer[f]||{}).forEach(([k,v]) => { const x = out[f][k]; if (!x || (v.score||0) >= (x.score||0)) out[f][k] = v; }); });
  out.best = {...(older.best||{}), ...(newer.best||{})}; Object.entries(older.best||{}).forEach(([k,v]) => { if (k.startsWith('match-')) out.best[k] = Math.min(v, out.best[k] || v); else out.best[k] = Math.max(v, out.best[k] || 0); });
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
  const saved = S.saved.length ? S.saved.map(s => `<div class="word"><div style="min-width:0"><b class="ctx">${tw(s[0])}</b><span>${esc(s[1])}</span></div><div class="ph-btns">${play(s[0])}<button class="icon-btn on" data-act="mark" data-en="${esc(s[0])}" data-es="${esc(s[1])}" aria-label="Quitar"${tt('Quitar de tus frases guardadas')}>${ic('mark')}</button></div></div>`).join('') : `<p class="note">Toca el marcador en cualquier frase para guardarla aquí.</p>`;
  const installRow = standalone() ? '<span class="note">Ya la tienes instalada.</span>' : installEvt ? `<button class="btn primary sm" data-act="install"${tt('Instalar como app en este dispositivo')}>${ic('download')}Instalar</button>` : IOS ? '<span class="note" style="max-width:420px">En Safari: toca Compartir y luego «Añadir a pantalla de inicio».</span>' : '<span class="note" style="max-width:420px">En el menú del navegador: «Instalar app» o «Añadir a pantalla de inicio».</span>';
  return {html:`<div class="page-head"><h1>Progreso</h1></div>
  <div class="kpis"><div class="card kpi"><b>${n}</b><span>días de racha</span></div><div class="card kpi"><b>${doneL.length}</b><span>lecciones completadas</span></div><div class="card kpi"><b>${phrasesSeen}</b><span>frases aprendidas</span></div><div class="card kpi"><b>${acc}%</b><span>aciertos · ${S.q} ejercicios</span></div></div>
  <p class="note" style="margin:-6px 0 16px">Packs de recursos completados: <b>${Object.keys(S.packs).length}</b> de ${PACKS.length} · Tiempos verbales: <b>${Object.keys(S.gram).filter(k => getTense(k)).length}</b> de ${TENSES.length} · Comparaciones: <b>${Object.keys(S.cmp).filter(k => getCmp(k)).length}</b> de ${CMPS.length} · Temas visuales: <b>${Object.keys(S.vis).filter(k => getVU(k)).length}</b> de ${VUNITS.length}.</p><div class="prog-grid">${per}</div>
  <section style="margin-top:28px"><h2 style="margin-bottom:12px">Frases guardadas</h2><div class="words">${saved}</div></section>
  <section class="card" style="margin-top:28px"><h2 style="margin-bottom:4px">Ajustes</h2>
    <div class="set-row"><span class="lab">Meta diaria</span><div class="seg">${[5,10,15].map(g => `<button class="${S.goal===g?'on':''}" data-act="goal" data-g="${g}" aria-pressed="${S.goal===g}"${tt('Actividades al día: lecciones, packs, repasos y juegos')}>${g} al día</button>`).join('')}</div></div>
    <div class="set-row"><label class="lab" for="name-in">Tu nombre</label><input class="field" id="name-in" maxlength="30" value="${esc(S.name)}" placeholder="Para saludarte"></div>
    ${TTS ? `<div class="set-row"><span class="lab">Velocidad de la voz</span><div class="seg">${[[1,'Normal'],[.8,'Más lenta']].map(([r,lab]) => `<button class="${S.rate===r?'on':''}" data-act="rate" data-r="${r}" aria-pressed="${S.rate===r}"${tt('Cambiar la velocidad de la voz británica')}>${lab}</button>`).join('')}</div></div>` : ''}
    <div class="set-row"><span class="lab">Instalar como app</span>${installRow}</div>
    <div class="set-row" style="flex-direction:column;align-items:stretch"><span class="lab">Pasar tu progreso a otro dispositivo</span>
      <p class="note">Tu progreso se guarda en este dispositivo. Para seguir en el celular o en el computador: copia tu código aquí y pégalo en el otro.</p>
      <div class="row"><button class="btn ghost sm" data-act="export"${tt('Copiar un código con todo tu progreso para pasarlo a otro dispositivo')}>${ic('send')}Copiar mi código</button><button class="btn ghost sm" data-act="import-open"${tt('Pegar el código de otro dispositivo para unir el progreso')}>Pegar un código</button></div>
      ${st.importOpen ? `<textarea class="field" id="import-in" placeholder="Pega aquí el código que empieza por CHEERS1:" style="min-height:90px"></textarea><div class="row"><button class="btn primary sm" data-act="import">Unir progreso</button><button class="link" data-act="import-close">Cancelar</button>${st.importErr ? `<span class="err">${esc(st.importErr)}</span>` : ''}</div>` : ''}</div>
    <div class="set-row"><span class="lab">Borrar todo el progreso</span>${st.confirmReset ? `<div class="row"><span class="note">No se puede deshacer.</span><button class="btn ghost danger sm" data-act="reset-yes">Sí, borrar</button><button class="btn ghost sm" data-act="reset-no">Cancelar</button></div>` : `<button class="btn ghost sm" data-act="reset"${tt('Borrar todo tu progreso de este dispositivo')}>Borrar progreso</button>`}</div>
  </section>
  <p class="note" style="margin-top:16px">Contenido versión ${esc(C.version)} · ${LESSONS.length} lecciones</p>`};
}

/* ---------- word sheet ---------- */
function renderSheet(){
  const root = document.getElementById('sheet-root'); const W = st.word;
  if (!W) { root.innerHTML = ''; return; }
  const k = W.w.toLowerCase(); const pr = PRON[k]; const es = VOCAB[k]; const irr = IRR_INFO[k];
  root.innerHTML = `<div class="sheet" role="dialog" aria-label="Pronunciación de ${esc(W.w)}"><div class="sheet-top"><div><p class="sw">${esc(W.w)}</p></div><button class="icon-btn" data-act="sheet-close" aria-label="Cerrar"${tt('Cerrar')}>${ic('x')}</button></div>
    ${pr ? `<p>Suena como <span class="sounds">«${esc(pr[0])}»</span></p>${pr[1] ? `<p class="note">${esc(pr[1])}</p>` : ''}` : ''}${es ? `<p><b>${esc(es)}</b></p>` : ''}${irr ? `<p class="note">${esc(irr)}</p>` : ''}
    ${!pr && !es && !irr ? `<p class="note">Escúchala en lento y repítela en voz alta.</p>` : ''}
    <div class="row">${TTS ? `<button class="btn primary sm" data-act="say" data-say="${esc(W.w)}">${ic('speaker')}Escuchar</button><button class="btn ghost sm" data-act="say-slow" data-say="${esc(W.w)}">Lento</button>` : '<span class="note">Este navegador no tiene voz.</span>'}</div></div>`;
}
function openWord(w){ w = String(w).replace(/^['’]+|['’]+$/g,''); if (!w) return; speak(w); st.word = {w}; renderSheet(); }

/* ---------- render ---------- */
const VIEWS = {today:viewToday, topics:viewTopics, lesson:viewLesson, practice:viewPractice, tools:viewTools, progress:viewProgress, pack:viewPack, grammar:viewGrammar, tense:viewTense, cmp:viewCmp, vis:viewVis};
function render(){
  hideTip();
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
const rr = () => keep(['find-in','speak-in','dlg-in','type-in','form-in','name-in','import-in'], render);

/* ---------- quiz actions ---------- */
function recordAnswer(it, ok){
  S.q++; if (ok) S.c++; day().q++;
  const raw = it.raw; const id = rawId(raw);
  srsTouch(raw.id, ok);
  if (!ok) { if (!S.mistakes.some(m => rawId(m) === id)) S.mistakes.unshift(raw); S.mistakes = S.mistakes.slice(0,80); }
  else if (st.quiz.key === 'mistakes') S.mistakes = S.mistakes.filter(m => rawId(m) !== id);
  save();
}
/* after answering on a phone, bring the explanation into view */
function revealFb(){ const fb = document.querySelector('.quiz .fb'); if (!fb) return; const r = fb.getBoundingClientRect(); if (r.top > innerHeight - (isM() ? 210 : 80)) window.scrollBy({top: r.top - innerHeight * .28, behavior:'smooth'}); }
function pick(i){ const q = st.quiz; const it = q.items[q.i]; if (q.picked !== null) return; q.picked = i; const ok = it.opts[i].ok; if (ok) q.correct++; recordAnswer(it, ok); if (it.kind === 'listen' && !ok) speak(it.say); render(); if (!q.timed) revealFb(); if (q.timed && !q.finished) setTimeout(() => { if (st.quiz === q && !q.finished && q.picked !== null) nextQ(); }, ok ? 450 : 900); }
function nextQ(){ const q = st.quiz; q.i++; q.picked = null; hush(); if (q.i >= q.items.length) finishQuiz(); render(); autoListen(); }
function autoListen(){ const q = st.quiz; if (!q || q.finished) return; const it = q.items[q.i]; if (it && it.kind === 'listen') speak(it.say); }
function finishQuiz(){
  const q = st.quiz; q.finished = true;
  if (q.key.startsWith('lesson:')) { const id = q.key.slice(7); const L = getLesson(id); const prev = S.done[id]; S.done[id] = {score:Math.max(q.correct, prev ? prev.score : 0), total:q.items.length, date:today()}; if (!prev) { day().l++; day().p += L.phrases.length; } srsAddLesson(L); }
  if (q.key.startsWith('cmp:')) { const id = q.key.slice(4); const prev = S.cmp[id]; S.cmp[id] = {score:Math.max(q.correct, prev ? prev.score : 0), total:q.items.length, date:today()}; }
  if (!/^(pack|tense|vis):/.test(q.key)) activity();
  if (q.timed) { clearInterval(TIMER); if (!S.best[q.key] || q.correct > S.best[q.key]) S.best[q.key] = q.correct; }
  save();
}
function orderCheck(){
  const q = st.quiz; const it = q.items[q.i];
  const a = it.built.map(t => t.w.toLowerCase()).join(' '); const b = it.words.map(w => w.toLowerCase()).join(' ');
  it.checked = true; it.ok = a === b; if (it.ok) q.correct++;
  q.picked = 0; recordAnswer(it, it.ok); render(); revealFb(); speak(it.en);
}
function typeCheck(){
  const q = st.quiz; const it = q.items[q.i]; const el = document.getElementById('type-in'); const v = el ? el.value.trim() : '';
  if (!v) { el && el.focus(); return; }
  it.typed = v; it.res = compare(it.en, v); it.ok = it.res.score >= 85 && !it.res.orderIssue; it.checked = true; if (it.ok) q.correct++;
  q.picked = 0; recordAnswer(it, it.ok); render(); revealFb(); speak(it.en);
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
  if (d.i >= L.dialogue.length && !d.counted && st.view === 'practice') { d.counted = true; activity(); save(); }
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
    case 'form-check': formCheck(); break;
    case 'quiz-again': { const k = st.quiz.key;
      if (k.startsWith('lesson:')) { st.quiz = newQuiz(k, lessonRaws(getLesson(st.lessonId))); render(); }
      else if (k.startsWith('pack:')) { const P = getPack(k.slice(5)); st.quiz = newQuiz(k, shuffle(P.items.map(it => gameRaw(P.tool, it))), P.title); render(); }
      else if (k.startsWith('round:')) { const tl = k.slice(6); st.quiz = newQuiz(k, roundRaws(tl, 10), ROUND_NAME[tl]); render(); }
      else if (k.startsWith('tense:')) { const T = getTense(k.slice(6)); st.quiz = newQuiz(k, tenseRaws(T), T.name); render(); }
      else if (k.startsWith('cmp:')) { const Cm = getCmp(k.slice(4)); st.quiz = newQuiz(k, cmpRaws(Cm), Cm.title); render(); }
      else if (k.startsWith('gram:')) { st.quiz = gramGame(k.slice(5)); render(); scrollTo(0,0); }
      else if (k.startsWith('vis:')) { const U = getVU(k.slice(4)); st.quiz = newQuiz(k, U.gen(10), U.title); render(); scrollTo(0,0); }
      else if (k.startsWith('timed:')) { const tl = k.slice(6); startTimed(tl === 'all' ? null : tl); render(); }
      else { const back = st.backTo; startPractice(k); st.backTo = back; }
      break; }
    case 'mic': { if (st.view === 'lesson' && st.step === 4 && st.speak.done || st.practice === 'dialogue') micToggle(st.dlg, () => { const d = st.dlg; d.res[d.i] = compare(getLesson(d.lid).dialogue[d.i][1], d.said); day().s++; save(); rr(); document.querySelector('.coach')?.scrollIntoView({behavior:'smooth', block:'center'}); });
      else micToggle(st.speak, () => { const sp = st.speak; sp.res = compare(sp.items[sp.i].en, sp.said); day().s++; save(); rr(); document.querySelector('.coach')?.scrollIntoView({behavior:'smooth', block:'center'}); });
      break; }
    case 'type-mode': { abortRec(); const o = (st.view === 'lesson' && st.step === 4 && st.speak.done) || st.practice === 'dialogue' ? st.dlg : st.speak; o.typeMode = true; o.listening = false; o.err = ''; rr(); document.getElementById(o === st.dlg ? 'dlg-in' : 'speak-in')?.focus(); break; }
    case 'mic-mode': { const o = (st.view === 'lesson' && st.step === 4 && st.speak.done) || st.practice === 'dialogue' ? st.dlg : st.speak; o.typeMode = false; o.err = ''; rr(); break; }
    case 'speak-check': speakCheck(); break;
    case 'speak-retry': { const sp = st.speak; stopAll(); sp.said = ''; sp.res = null; sp.err = ''; sp.listening = false; render(); break; }
    case 'speak-next': { const sp = st.speak; stopAll(); sp.i++; sp.said = ''; sp.res = null; sp.err = ''; sp.listening = false; if (sp.i >= sp.items.length) { sp.done = true; if (sp.key.startsWith('pack:')) markPackDone(sp.key.slice(5)); else if (sp.key.startsWith('tense:')) markTenseDone(sp.key.slice(6)); else if (sp.key.startsWith('vis:')) markVisDone(sp.key.slice(4)); else if (sp.key === 'free') { activity(); save(); } } render(); scrollTo(0,0); break; }
    case 'dlg-role': { const d = st.dlg; d.role = b.dataset.r; d.i = 0; d.res = {}; render(); const L = getLesson(d.lid); if (L.dialogue[0][0] !== d.role) speak(L.dialogue[0][1]); break; }
    case 'dlg-next': dlgAdvance(); break;
    case 'dlg-skip': dlgAdvance(); break;
    case 'dlg-show': st.dlg.showEn = true; rr(); break;
    case 'dlg-check': dlgCheck(); break;
    case 'dlg-retry': { const d = st.dlg; stopAll(); delete d.res[d.i]; d.said = ''; d.err = ''; d.listening = false; render(); break; }
    case 'dlg-again': { st.dlg = newDlg(getLesson(st.dlg.lid)); render(); scrollTo(0,0); break; }
    case 'lesson-finish': { st.dlg.role = 'skip'; st.dlg.i = getLesson(st.dlg.lid).dialogue.length; render(); break; }
    case 'practice': startPractice(b.dataset.m); break;
    case 'practice-home': { stopAll(); const to = st.backTo; st.backTo = null; st.practice = null; st.view = to === 'tools' || to === 'grammar' ? to : 'practice'; render(); scrollTo(0,0); break; }
    case 'pack': openPack(b.dataset.id); break;
    case 'tense': openTense(b.dataset.id); break;
    case 'tense-step': { stopAll(); st.tense.step = Number(b.dataset.n); render(); scrollTo(0,0); break; }
    case 'cmp': openCmp(b.dataset.id); break;
    case 'cmp-step': { stopAll(); st.cmp.step = Number(b.dataset.n); render(); scrollTo(0,0); break; }
    case 'gram-back': stopAll(); st.view = 'grammar'; if (b.dataset.t) st.gram.tab = b.dataset.t; render(); scrollTo(0,0); break;
    case 'vis': openVis(b.dataset.id); break;
    case 'vis-step': { stopAll(); st.vis.step = Number(b.dataset.n); render(); scrollTo(0,0); break; }
    case 'place': placePick(b.dataset.s); break;
    case 'gram-tab': st.gram.tab = b.dataset.t; render(); break;
    case 'ggame': { const g = b.dataset.g; stopAll(); st.view = 'practice'; st.backTo = 'grammar'; st.practice = 'quiz';
      if (g === 'timed' || g === 'irr-timed') startTimed(g === 'timed' ? 'gram' : 'irr'); else st.quiz = gramGame(g);
      render(); scrollTo(0,0); break; }
    case 'pack-step': { stopAll(); st.pack.step = Number(b.dataset.n); render(); scrollTo(0,0); break; }
    case 'pack-back': stopAll(); st.view = 'tools'; st.res.mode = 'packs'; render(); scrollTo(0,0); break;
    case 'res-tool': st.res.tool = b.dataset.t; render(); break;
    case 'res-mode': st.res.mode = b.dataset.m; render(); break;
    case 'game': { const g = b.dataset.g, tl = b.dataset.t || null; stopAll(); st.view = 'practice'; st.backTo = 'tools';
      if (g === 'round') { st.quiz = newQuiz('round:' + tl, roundRaws(tl, 10), ROUND_NAME[tl]); st.practice = 'quiz'; }
      else if (g === 'match') { st.match = newMatch(tl); st.practice = 'match'; }
      else { startTimed(tl); st.practice = 'quiz'; }
      render(); scrollTo(0,0); break; }
    case 'm-left': matchPick(0, Number(b.dataset.id)); break;
    case 'm-right': matchPick(1, Number(b.dataset.id)); break;
    case 'match-again': st.match = newMatch(st.match.tool); render(); break;
    case 'goal': S.goal = Number(b.dataset.g); save(); render(); break;
    case 'goto-find': stopAll(); st.view = 'topics'; st.practice = null; render(); setTimeout(() => { document.getElementById('finder')?.scrollIntoView({behavior:'smooth', block:'start'}); document.getElementById('find-in')?.focus(); }, 50); break;
    case 'find': { const el = document.getElementById('find-in'); st.find.q = el ? el.value.trim() : ''; st.find.results = st.find.q ? searchLessons(st.find.q) : null; rr(); break; }
    case 'request': requestLesson(); break;
    case 'req-del': S.requests.splice(Number(b.dataset.i), 1); save(); rr(); break;
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
  if (e.target.id === 'form-in' && e.key === 'Enter') { e.preventDefault(); formCheck(); }
  if (e.target.id === 'speak-in' && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); speakCheck(); }
  if (e.target.id === 'dlg-in' && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); dlgCheck(); }
  if (e.key === 'Escape' && st.word) { st.word = null; renderSheet(); }
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('[data-act="place"]')) { e.preventDefault(); placePick(e.target.dataset.s); }
});
document.addEventListener('change', e => { if (e.target.id === 'name-in') { S.name = e.target.value.trim().slice(0,30); save(); } });
document.addEventListener('input', e => {
  if (e.target.id === 'find-in') st.find.q = e.target.value;
  if (e.target.id === 'speak-in' && st.speak) st.speak.said = e.target.value;
  if (e.target.id === 'dlg-in' && st.dlg) st.dlg.said = e.target.value;
  if ((e.target.id === 'type-in' || e.target.id === 'form-in') && st.quiz) { const it = st.quiz.items[st.quiz.i]; if (it) it.typed = e.target.value; }
});
window.addEventListener('online', () => renderChrome());
window.addEventListener('offline', () => renderChrome());

/* ---------- tooltips (mouse hover and keyboard focus) ---------- */
const TIPEL = document.getElementById('tip'); let tipT = null, tipFor = null, px = 0, py = 0;
function hideTip(){ clearTimeout(tipT); tipT = null; tipFor = null; if (TIPEL) TIPEL.hidden = true; }
function placeTip(x, y){ TIPEL.hidden = false; const r = TIPEL.getBoundingClientRect(); let l = x + 14, tp = y + 20; if (l + r.width > innerWidth - 8) l = Math.max(8, x - r.width - 12); if (tp + r.height > innerHeight - 8) tp = Math.max(8, y - r.height - 12); TIPEL.style.left = l + 'px'; TIPEL.style.top = tp + 'px'; }
document.addEventListener('pointermove', e => { px = e.clientX; py = e.clientY; }, {passive:true});
document.addEventListener('pointerover', e => {
  if (!TIPEL || (e.pointerType && e.pointerType !== 'mouse')) return;
  const el = e.target.closest('[data-tip]'); if (el === tipFor) return;
  hideTip(); if (!el) return;
  tipFor = el; tipT = setTimeout(() => { if (tipFor === el && document.contains(el)) { TIPEL.textContent = el.dataset.tip; placeTip(px, py); } }, 450);
});
document.addEventListener('pointerout', e => { if (tipFor && (!e.relatedTarget || !tipFor.contains(e.relatedTarget))) hideTip(); });
document.addEventListener('pointerdown', hideTip, true);
window.addEventListener('scroll', hideTip, true);
document.addEventListener('focusin', e => { const el = e.target.closest && e.target.closest('[data-tip]'); if (!TIPEL || !el) return; let fv = false; try { fv = el.matches(':focus-visible'); } catch(err) {} if (!fv) return; hideTip(); tipFor = el; TIPEL.textContent = el.dataset.tip; const r = el.getBoundingClientRect(); placeTip(r.left, r.bottom - 6); });
document.addEventListener('focusout', hideTip);

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
