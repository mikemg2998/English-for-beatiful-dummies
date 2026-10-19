/* English For Beautiful Dummies — visual exercises.
   Everything is drawn with SVG, so it works offline and looks sharp on any screen.
   Loaded before app.js; it only uses app.js helpers (esc, shuffle, pick1…) when a screen is drawn. */

/* ---------- prepositions of place (cups and a sweet, like the photo) ---------- */
const PREPS = [
  ['in', 'dentro de', 'The sweet is in the cup.', 'El caramelo está dentro del vaso.'],
  ['on', 'encima de, tocándolo', 'The sweet is on the cup.', 'El caramelo está encima del vaso.'],
  ['under', 'debajo de', 'The sweet is under the cup.', 'El caramelo está debajo del vaso.'],
  ['in front of', 'delante de', 'The sweet is in front of the cup.', 'El caramelo está delante del vaso.'],
  ['behind', 'detrás de', 'The sweet is behind the cup.', 'El caramelo está detrás del vaso.'],
  ['next to', 'justo al lado de, pegado', 'The sweet is next to the cup.', 'El caramelo está justo al lado del vaso.'],
  ['near', 'cerca de, pero con espacio', 'The sweet is near the cup.', 'El caramelo está cerca del vaso.'],
  ['between', 'entre dos cosas', 'The sweet is between the cups.', 'El caramelo está entre los dos vasos.'],
  ['above', 'por encima, sin tocarlo', 'The sweet is above the cup.', 'El caramelo está por encima del vaso.']
];
const PREP_OF = p => PREPS.find(x => x[0] === p);
const PREP_CONF = {'in':['under','on','behind'], 'on':['above','in','behind'], 'under':['in','on','behind'], 'in front of':['behind','next to','near'], 'behind':['in front of','on','above'], 'next to':['near','between','in front of'], 'near':['next to','between','in front of'], 'between':['next to','near','in front of'], 'above':['on','behind','near']};
const CUP = '#ff7a1a', CUP_D = '#c2410c', CUP_L = '#ffab6b';
const vsvg = (inner, label, vb = '0 0 200 150') => `<svg class="vsvg" viewBox="${vb}" role="img" aria-label="${esc(label || '')}">${inner}</svg>`;
const vfloor = '<line class="vfloor" x1="6" y1="131" x2="194" y2="131"/>';
function cupDown(x, op = 1){
  const y = 130, t = y - 54;
  return `<g opacity="${op}"><path d="M${x-30} ${y} L${x-21} ${t} Q${x} ${t-5} ${x+21} ${t} L${x+30} ${y} Q${x} ${y+6} ${x-30} ${y}Z" fill="${CUP}" stroke="${CUP_D}" stroke-width="2"/>`
    + [-16,-8,0,8,16].map(d => `<path d="M${x+d*1.6} ${y+2} L${x+d*1.1} ${t+3}" stroke="${CUP_D}" stroke-width="1.5" opacity=".45"/>`).join('')
    + `<ellipse cx="${x}" cy="${t}" rx="21" ry="5" fill="${CUP_L}" stroke="${CUP_D}" stroke-width="1.5"/></g>`;
}
function cupUp(x){
  const y = 130, t = y - 54;
  return `<path d="M${x-21} ${y} L${x-30} ${t} L${x+30} ${t} L${x+21} ${y} Q${x} ${y+5} ${x-21} ${y}Z" fill="${CUP}" stroke="${CUP_D}" stroke-width="2"/>`
    + [-16,-8,0,8,16].map(d => `<path d="M${x+d*1.1} ${y} L${x+d*1.6} ${t+4}" stroke="${CUP_D}" stroke-width="1.5" opacity=".45"/>`).join('')
    + `<ellipse cx="${x}" cy="${t}" rx="30" ry="8" fill="#7a2a05" stroke="${CUP_D}" stroke-width="2"/>`;
}
const sweet = (x, y, r = 9, col = '#1f9d5a') => `<g class="vsweet"><ellipse cx="${x}" cy="${y}" rx="${r}" ry="${(r*.84).toFixed(1)}" fill="${col}" stroke="#0f6b3b" stroke-width="1.5"/><ellipse cx="${(x-r*.35).toFixed(1)}" cy="${(y-r*.32).toFixed(1)}" rx="${(r*.3).toFixed(1)}" ry="${(r*.2).toFixed(1)}" fill="#fff" opacity=".6"/></g>`;
function drawPrep(p){
  let g = vfloor;
  if (p === 'in') g += cupUp(100) + `<clipPath id="cupin"><rect x="60" y="40" width="80" height="36"/></clipPath><g clip-path="url(#cupin)">${sweet(100, 74)}</g><path d="M70 76 A30 8 0 0 0 130 76" fill="none" stroke="${CUP_D}" stroke-width="2.5"/>`;
  else if (p === 'on') g += cupDown(100) + sweet(100, 67);
  else if (p === 'under') g += sweet(104, 122) + cupDown(100, .5) + `<path d="M${100-30} 130 L${100-21} 76 M${100+30} 130 L${100+21} 76" stroke="${CUP_D}" stroke-width="1.5" stroke-dasharray="4 3" fill="none"/>`;
  else if (p === 'in front of') g += cupDown(100) + sweet(100, 138);
  else if (p === 'behind') g += sweet(118, 69) + cupDown(100);
  else if (p === 'next to') g += cupDown(90) + sweet(129, 122);
  else if (p === 'near') g += cupDown(72) + sweet(152, 122);
  else if (p === 'between') g += cupDown(56) + cupDown(144) + sweet(100, 122);
  else if (p === 'above') g += cupDown(100) + `<path d="M100 45 V66" stroke="#8a7e71" stroke-width="1.5" stroke-dasharray="3 3"/>` + sweet(100, 34) + '<ellipse cx="100" cy="76" rx="9" ry="2.5" fill="#000" opacity=".12"/>';
  return vsvg(g, PREP_OF(p) ? PREP_OF(p)[2] : p);
}
/* the "put the sweet there" game: two cups and spots to tap */
const PLACE_SPOTS = [
  {id:'onL', x:60, y:67, en:'on the left cup', es:'encima del vaso de la izquierda', p:'on'},
  {id:'onR', x:140, y:67, en:'on the right cup', es:'encima del vaso de la derecha', p:'on'},
  {id:'aboveR', x:140, y:28, en:'above the right cup', es:'por encima del vaso de la derecha, sin tocarlo', p:'above'},
  {id:'aboveL', x:60, y:28, en:'above the left cup', es:'por encima del vaso de la izquierda, sin tocarlo', p:'above'},
  {id:'between', x:100, y:122, en:'between the cups', es:'entre los dos vasos', p:'between'},
  {id:'nextL', x:19, y:122, en:'next to the left cup', es:'pegado al vaso de la izquierda', p:'next to'},
  {id:'nextR', x:181, y:122, en:'next to the right cup', es:'pegado al vaso de la derecha', p:'next to'},
  {id:'frontL', x:60, y:141, en:'in front of the left cup', es:'delante del vaso de la izquierda', p:'in front of'},
  {id:'frontR', x:140, y:141, en:'in front of the right cup', es:'delante del vaso de la derecha', p:'in front of'}
];
function placeSVG(it){
  const r = it.raw; const T = PLACE_SPOTS.find(s => s.id === r.target); const C = it.chosen && PLACE_SPOTS.find(s => s.id === it.chosen);
  let g = vfloor + cupDown(60) + cupDown(140);
  if (!it.checked) g += PLACE_SPOTS.map(s => `<g class="vspot" data-act="place" data-s="${s.id}" role="button" tabindex="0" aria-label="${esc(s.es)}"><circle cx="${s.x}" cy="${s.y}" r="11"/><circle class="dot" cx="${s.x}" cy="${s.y}" r="2.5"/></g>`).join('');
  else {
    if (!it.ok) g += `<circle class="vring ok" cx="${T.x}" cy="${T.y}" r="13"/>`;
    g += sweet(C.x, C.y) + `<circle class="vring ${it.ok ? 'ok' : 'no'}" cx="${C.x}" cy="${C.y}" r="14"/>`;
  }
  return vsvg(g, 'Toca dónde va el caramelo');
}
function placeView(q, it, head, nextB){
  const r = it.raw; const T = PLACE_SPOTS.find(s => s.id === r.target); const C = it.chosen && PLACE_SPOTS.find(s => s.id === it.chosen);
  const say = `Put the sweet ${T.en}.`;
  const fb = !it.checked ? '' : `<div class="fb ${it.ok ? 'good' : 'bad'}" role="status"><b>${it.ok ? '¡Bien!' : 'Casi.'}</b>${it.ok ? `<span>«${esc(T.en)}» = ${esc(T.es)}.</span>`
    : `<div class="fbx no"><span class="fl">${ic('x')}Donde lo pusiste</span><p class="fw">${esc(C.es)}: eso sería «${esc(C.en)}».</p></div><div class="fbx ok"><span class="fl">${ic('check')}Donde iba</span><p class="fw">«${esc(T.en)}» = ${esc(T.es)}.${T.p !== C.p ? ` Recuerda: «${esc(T.p)}» = ${esc(PREP_OF(T.p)[1])}.` : ' Fíjate en «left» (izquierda) y «right» (derecha).'}</p></div>`}</div>`;
  return {html:`<div class="quiz">${head}<div class="row" style="flex-wrap:nowrap;align-items:flex-start;gap:12px"><h3 class="q-prompt" style="flex:1;min-width:0">${tw(say)}</h3>${play(say)}</div>
    <div class="vpic place">${placeSVG(it)}</div>${it.checked ? '' : '<p class="note">Toca el círculo donde va el caramelo.</p>'}${fb}</div>`,
    act: it.checked ? nextB : `<button class="btn ghost" data-act="skip"${tt('Pasar a la siguiente sin responder')}>Saltar</button>`};
}
function placePick(id){
  const q = st.quiz; const it = q && q.items[q.i]; if (!it || it.kind !== 'place' || it.checked) return;
  it.chosen = id; it.ok = id === it.raw.target; it.checked = true; if (it.ok) q.correct++;
  q.picked = 0; recordAnswer(it, it.ok); render(); revealFb();
  speak(`The sweet is ${PLACE_SPOTS.find(s => s.id === it.raw.target).en}.`);
}

/* ---------- telling the time, British style ---------- */
const NUM_W = ['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
const MIN_W = {5:'five', 10:'ten', 20:'twenty', 25:'twenty-five'};
const hNext = h => h % 12 + 1, hPrev = h => (h + 10) % 12 + 1;
function timePhrase(h, m){
  if (m === 0) return `${NUM_W[h]} o'clock`; if (m === 15) return `quarter past ${NUM_W[h]}`; if (m === 30) return `half past ${NUM_W[h]}`; if (m === 45) return `quarter to ${NUM_W[hNext(h)]}`;
  return m < 30 ? `${MIN_W[m]} past ${NUM_W[h]}` : `${MIN_W[60-m]} to ${NUM_W[hNext(h)]}`;
}
const timeEs = (h, m) => `${h === 1 ? 'la' : 'las'} ${h}:${String(m).padStart(2, '0')}`;
function digital(h, m){ const MW = {5:'oh five', 10:'ten', 15:'fifteen', 20:'twenty', 25:'twenty-five', 30:'thirty', 35:'thirty-five', 40:'forty', 45:'forty-five', 50:'fifty', 55:'fifty-five'}; return m === 0 ? `${NUM_W[h]} o'clock` : `${NUM_W[h]} ${MW[m]}`; }
function drawClock(h, m){
  const cx = 100, cy = 74, R = 60; let g = `<circle cx="${cx}" cy="${cy}" r="${R}" class="vclock"/>`;
  for (let i = 0; i < 60; i++) { const a = i * 6 * Math.PI / 180, l = i % 5 ? 4 : 9; g += `<line x1="${(cx + Math.sin(a)*(R-3)).toFixed(1)}" y1="${(cy - Math.cos(a)*(R-3)).toFixed(1)}" x2="${(cx + Math.sin(a)*(R-3-l)).toFixed(1)}" y2="${(cy - Math.cos(a)*(R-3-l)).toFixed(1)}" class="${i % 5 ? 'vtick' : 'vtick big'}"/>`; }
  [12,3,6,9].forEach(n => { const a = n * 30 * Math.PI / 180; g += `<text x="${(cx + Math.sin(a)*(R-21)).toFixed(1)}" y="${(cy - Math.cos(a)*(R-21) + 5).toFixed(1)}" text-anchor="middle" class="vnum">${n}</text>`; });
  const ha = ((h % 12) + m / 60) * 30 * Math.PI / 180, ma = m * 6 * Math.PI / 180;
  g += `<line x1="${cx}" y1="${cy}" x2="${(cx + Math.sin(ha)*30).toFixed(1)}" y2="${(cy - Math.cos(ha)*30).toFixed(1)}" class="vhand h"/>`;
  g += `<line x1="${cx}" y1="${cy}" x2="${(cx + Math.sin(ma)*46).toFixed(1)}" y2="${(cy - Math.cos(ma)*46).toFixed(1)}" class="vhand m"/><circle cx="${cx}" cy="${cy}" r="4.5" fill="#201a14"/>`;
  return vsvg(g, timeEs(h, m));
}
/* wrong times that look almost the same: past/to swapped, hour off by one, 15↔45 */
function clockNear(h, m){
  const c = [];
  if (m !== 0 && m !== 30) { c.push({h: m < 30 ? hPrev(h) : hNext(h), m: 60 - m, tip:'«past» = y (después de la hora); «to» = menos (antes de la hora).'}); }
  c.push({h: hNext(h), m, tip:'Mira la aguja corta: marca la hora.'});
  c.push({h: hPrev(h), m, tip:'Mira la aguja corta: marca la hora.'});
  if (m === 30) c.push({h: hNext(h), m: 30, tip:'«half past three» son las 3:30, no las 2:30: se cuenta desde la hora que ya pasó.'});
  if (m === 0) c.push({h, m: 30, tip:'La aguja larga en el 12 = «o\'clock»; en el 6 = «half past».'});
  if (m === 15 || m === 45) c.push({h, m: 30, tip:'«quarter» = un cuarto (15 minutos); «half» = media hora.'});
  const seen = new Set([`${h}:${m}`]); return c.filter(x => { const k = `${x.h}:${x.m}`; if (seen.has(k)) return false; seen.add(k); return true; }).slice(0, 3);
}
const randTime = () => ({h: 1 + Math.floor(Math.random() * 12), m: pick1([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 15, 30, 45])});

/* ---------- in / on / at (time) ---------- */
const IOT_RULE = {in:'periodos largos: meses, años, estaciones y partes del día', on:'días y fechas', at:'horas y momentos concretos'};
const IOT = [
  ['Monday', 'on', 'un día'], ['July', 'in', 'un mes'], ['2015', 'in', 'un año'], ['the morning', 'in', 'una parte del día'], ['night', 'at', 'un momento fijo: se dice «at night»'],
  ["seven o'clock", 'at', 'una hora'], ['the weekend', 'at', 'en inglés británico, «at the weekend»'], ['my birthday', 'on', 'un día concreto'], ['Christmas Day', 'on', 'un día concreto'],
  ['Christmas', 'at', 'una época festiva («at Christmas»)'], ['summer', 'in', 'una estación'], ['lunchtime', 'at', 'un momento del día'], ['5th May', 'on', 'una fecha'],
  ['the evening', 'in', 'una parte del día'], ['midnight', 'at', 'una hora'], ['Friday night', 'on', 'un día concreto (el día manda)'], ['the 1990s', 'in', 'una década'],
  ["New Year's Eve", 'on', 'un día concreto'], ['half past six', 'at', 'una hora'], ['Sunday morning', 'on', 'un día concreto (el día manda)'], ['winter', 'in', 'una estación'],
  ['the afternoon', 'in', 'una parte del día'], ['noon', 'at', 'una hora'], ['Easter', 'at', 'una época festiva'], ['the end of the month', 'at', 'un momento concreto'],
  ['December', 'in', 'un mes'], ['Saturday', 'on', 'un día'], ['10:30', 'at', 'una hora'], ['the 21st century', 'in', 'un siglo'], ['Valentine\'s Day', 'on', 'un día concreto']
];
const IOT_SAY = [['See you on Monday.', '¡Nos vemos el lunes!'], ['The shop closes at six.', 'La tienda cierra a las seis.'], ['I love Malta in summer.', 'Me encanta Malta en verano.'], ["Let's meet at the weekend.", 'Quedemos el fin de semana.'], ['I was born in July.', 'Nací en julio.'], ['I work on Saturday mornings.', 'Trabajo los sábados por la mañana.'], ['I usually go to bed at midnight.', 'Normalmente me acuesto a medianoche.'], ['The gallery opened in 2015.', 'La galería abrió en 2015.']];
function drawIot(hi){
  const band = (k, y, w, label, ex) => `<g class="viot ${hi === k ? 'on' : ''}"><path d="M${100-w} ${y} H${100+w} L${100+w-16} ${y+40} H${100-w+16}Z"/><text x="100" y="${y+19}" text-anchor="middle" class="viot-k">${label}</text><text x="100" y="${y+33}" text-anchor="middle" class="viot-e">${ex}</text></g>`;
  return vsvg(band('in', 4, 96, 'IN', 'July · 2015 · summer') + band('on', 48, 78, 'ON', 'Monday · 5th May') + band('at', 92, 60, 'AT', '7:00 · night'), 'IN, ON, AT', '0 0 200 136');
}

/* ---------- comparatives with buildings ---------- */
const BCOL = [['yellow', 'amarillo', '#ffc61a'], ['orange', 'naranja', '#ff7a1a'], ['grey', 'gris', '#8a7e71']];
function newBuildings(){ const hs = shuffle([58, 84, 112]), ys = shuffle([1890, 1968, 2021]); return {t:'bld', b: BCOL.map((c, i) => ({c:c[0], h:hs[i], y:ys[i]}))}; }
function drawBuildings(sp){
  let g = '<line class="vfloor" x1="6" y1="128" x2="194" y2="128"/>';
  sp.b.forEach((b, i) => { const x = 22 + i * 58, w = 42, top = 128 - b.h, col = BCOL.find(c => c[0] === b.c)[2];
    g += `<rect x="${x}" y="${top}" width="${w}" height="${b.h}" rx="2" fill="${col}" stroke="#201a14" stroke-width="1.5"/>`;
    for (let yy = top + 8; yy < 118; yy += 14) for (let xx = x + 7; xx < x + w - 6; xx += 12) g += `<rect x="${xx}" y="${yy}" width="6" height="7" rx="1" fill="#fff" opacity=".75"/>`;
    g += `<rect x="${x + w/2 - 5}" y="116" width="10" height="12" fill="#201a14" opacity=".75"/><text x="${x + w/2}" y="143" text-anchor="middle" class="vyear">${b.y}</text>`; });
  return vsvg(g, 'Tres edificios', '0 0 200 150');
}
const colEs = c => BCOL.find(x => x[0] === c)[1];
const tallest = sp => sp.b.slice().sort((a, b) => b.h - a.h)[0], oldest = sp => sp.b.slice().sort((a, b) => a.y - b.y)[0], newest = sp => sp.b.slice().sort((a, b) => b.y - a.y)[0], shortest = sp => sp.b.slice().sort((a, b) => a.h - b.h)[0];

/* ---------- quantities ---------- */
const COUNT_IT = [['🍎', 'apples', 'manzanas'], ['🥚', 'eggs', 'huevos'], ['🍌', 'bananas', 'plátanos'], ['🍋', 'lemons', 'limones'], ['🍅', 'tomatoes', 'tomates'], ['🧁', 'cupcakes', 'magdalenas']];
const MASS_IT = [['milk', 'leche', '#ebe3cf', 'glass'], ['water', 'agua', '#9fd3f5', 'glass'], ['orange juice', 'zumo de naranja', '#ffab2e', 'glass'], ['coffee', 'café', '#6b4226', 'glass'], ['sugar', 'azúcar', '#f4efe3', 'jar'], ['rice', 'arroz', '#efe6cf', 'jar']];
function drawQty(sp){
  if (sp.k === 'count') {
    if (!sp.n) return vsvg('<path d="M40 92 Q100 140 160 92 Z" fill="#fff8de" stroke="#c2410c" stroke-width="2.5"/><ellipse cx="100" cy="92" rx="60" ry="10" fill="#fff0bf" stroke="#c2410c" stroke-width="2.5"/>', 'Un cuenco vacío');
    const cols = sp.n > 6 ? 5 : sp.n > 3 ? 3 : sp.n; let g = '';
    for (let i = 0; i < sp.n; i++) { const r = Math.floor(i / cols), c = i % cols, rows = Math.ceil(sp.n / cols); const x = 100 + (c - (cols - 1) / 2) * 34, y = 75 + (r - (rows - 1) / 2) * 34; g += `<text x="${x}" y="${y + 11}" text-anchor="middle" font-size="30">${sp.e}</text>`; }
    return vsvg(g, `${sp.n} ${sp.w}`);
  }
  const it = MASS_IT.find(x => x[0] === sp.w); const col = it[2];
  if (it[3] === 'glass') { const top = 26, bot = 132, lvl = bot - (bot - top - 6) * sp.lvl;
    return vsvg(`<clipPath id="glass"><path d="M68 ${top} L132 ${top} L124 ${bot} L76 ${bot}Z"/></clipPath>${sp.lvl ? `<rect x="60" y="${lvl}" width="80" height="${bot - lvl}" fill="${col}" clip-path="url(#glass)"/><line x1="60" y1="${lvl}" x2="140" y2="${lvl}" stroke="#8a7e71" stroke-width="1.5" opacity=".55" clip-path="url(#glass)"/>` : ''}<path d="M68 ${top} L132 ${top} L124 ${bot} L76 ${bot}Z" fill="none" stroke="#8a7e71" stroke-width="2.5"/><path d="M80 ${top + 10} L78 ${bot - 12}" stroke="#fff" stroke-width="3" opacity=".7"/>`, sp.w); }
  const top = 30, bot = 132, lvl = bot - (bot - top - 8) * sp.lvl;
  return vsvg(`<rect x="62" y="${top}" width="76" height="${bot - top}" rx="12" fill="#fff"/>${sp.lvl ? `<rect x="64" y="${lvl}" width="72" height="${bot - lvl - 2}" rx="10" fill="${col}"/><g opacity=".35">${Array.from({length: 14}, (_, i) => `<circle cx="${70 + (i * 37) % 60}" cy="${Math.min(bot - 6, lvl + 6 + (i * 13) % Math.max(8, bot - lvl - 10))}" r="1.6" fill="#8a7e71"/>`).join('')}</g>` : ''}<rect x="62" y="${top}" width="76" height="${bot - top}" rx="12" fill="none" stroke="#8a7e71" stroke-width="2.5"/><rect x="70" y="${top - 12}" width="60" height="12" rx="4" fill="#c2410c"/>`, sp.w);
}

/* ---------- one entry point for every picture ---------- */
function drawPic(sp){
  if (!sp) return '';
  if (sp.t === 'prep') return drawPrep(sp.p);
  if (sp.t === 'clock') return drawClock(sp.h, sp.m);
  if (sp.t === 'bld') return drawBuildings(sp);
  if (sp.t === 'qty') return drawQty(sp);
  if (sp.t === 'iot') return drawIot(sp.hi);
  if (sp.t === 'tl') return timeline(sp.k, true);
  return '';
}

/* ---------- exercise generators ---------- */
function genPrep(n){
  const out = [];
  for (let i = 0; i < n; i++) {
    const [p, es, en, sEs] = pick1(PREPS); const conf = PREP_CONF[p]; const roll = i % 3;
    if (roll === 0) out.push({k:'mc', kind:'vprep', uid:`vp:${p}`, pic:{t:'prep', p}, prompt:'¿Dónde está el caramelo?', opts:[p, ...conf], whys:['', ...conf.map(c => `«${c}» = ${PREP_OF(c)[1]}.`)], explain:`«${p}» = ${es}.`, ex:en});
    else if (roll === 1) out.push({k:'mc', kind:'vpick', uid:`vq:${p}`, prompt:en, say:en, opts:[{t:'prep', p, label:p}, ...conf.map(c => ({t:'prep', p:c, label:c}))], whys:['', ...conf.map(c => `Este dibujo es «${c}» (${PREP_OF(c)[1]}).`)], explain:`«${p}» = ${es}.`});
    else { const s = pick1(PLACE_SPOTS); out.push({k:'place', uid:`vplace:${s.id}`, target:s.id}); }
  }
  return out;
}
function genClock(n){
  const out = [];
  for (let i = 0; i < n; i++) {
    const {h, m} = randTime(); const ph = timePhrase(h, m); const near = clockNear(h, m); const roll = i % 3;
    if (roll === 0) out.push({k:'mc', kind:'vclock', uid:`vc:${h}:${m}`, pic:{t:'clock', h, m}, prompt:'What time is it?', opts:[ph, ...near.map(x => timePhrase(x.h, x.m))], whys:['', ...near.map(x => `«${timePhrase(x.h, x.m)}» son ${timeEs(x.h, x.m)}. ${x.tip}`)], explain:`Son ${timeEs(h, m)}: «${ph}».`, ex:`It's ${ph}.`});
    else if (roll === 1) out.push({k:'mc', kind:'vpick', uid:`vcp:${h}:${m}`, prompt:`It's ${ph}.`, say:`It's ${ph}.`, opts:[{t:'clock', h, m, label:timeEs(h, m)}, ...near.map(x => ({t:'clock', h:x.h, m:x.m, label:timeEs(x.h, x.m)}))], whys:['', ...near.map(x => `Este reloj marca ${timeEs(x.h, x.m)}. ${x.tip}`)], explain:`«${ph}» = ${timeEs(h, m)}.`});
    else { const acc = uniq([ph, (m === 15 || m === 45) ? 'a ' + ph : ph, digital(h, m), `it's ${ph}`, `it is ${ph}`]); out.push({k:'form', uid:`vct:${h}:${m}`, pic:{t:'clock', h, m}, s:'Escribe la hora en inglés (estilo británico)', a:acc, why:`Son ${timeEs(h, m)}. También se oye «${digital(h, m)}».`, say:`It's ${ph}.`}); }
  }
  return out;
}
function genIot(n){
  return shuffle(IOT.slice()).slice(0, n).map(([w, p, cat]) => {
    const wr = ['in', 'on', 'at'].filter(x => x !== p);
    return {k:'mc', kind:'viot', uid:`vi:${w}`, prompt:`___ ${w}`, opts:[p, ...wr], whys:['', ...wr.map(x => `«${x}» es para ${IOT_RULE[x]}; «${w}» es ${cat} → «${p}».`)], explain:`«${p} ${w}»: ${cat}.`, ex:`${p} ${w}`};
  });
}
function genComp(n){
  const out = [];
  for (let i = 0; i < n; i++) {
    const sp = newBuildings(); const [A, B] = shuffle(sp.b.slice()).slice(0, 2); const roll = i % 5;
    const nm = b => `The ${b.c} building`;
    if (roll === 0) { const taller = A.h > B.h; const right = taller ? 'taller than' : 'shorter than'; const opp = taller ? 'shorter than' : 'taller than';
      out.push({k:'mc', kind:'vcomp', uid:`vb:${right}`, pic:sp, prompt:`${nm(A)} is ___ the ${B.c} one.`, opts:[right, taller ? 'more tall than' : 'more short than', taller ? 'the tallest' : 'the shortest', opp],
        whys:['', `Con adjetivos cortos se añade -er: «${right.split(' ')[0]}», no «more ${taller ? 'tall' : 'short'}».`, `«The ${taller ? 'tallest' : 'shortest'}» es para el máximo de un grupo; para comparar dos: -er + than.`, `Mira el dibujo: el ${colEs(A.c)} es ${taller ? 'más alto' : 'más bajo'} que el ${colEs(B.c)}.`], explain:`El ${colEs(A.c)} es ${taller ? 'más alto' : 'más bajo'}: «${right}».`, ex:`${nm(A)} is ${right} the ${B.c} one.`}); }
    else if (roll === 1) { const T = tallest(sp);
      out.push({k:'mc', kind:'vcomp', uid:'vb:tallest', pic:sp, prompt:`${nm(T)} is ___.`, opts:['the tallest', 'the taller', 'the most tall', 'tallest than'],
        whys:['', '«The taller» se usa para comparar dos; con tres o más: «the tallest».', 'Con adjetivos cortos se añade -est: «the tallest», no «the most tall».', 'El superlativo no lleva «than»: «the tallest».'], explain:'Es el más alto de los tres: superlativo «the tallest».', ex:`${nm(T)} is the tallest.`}); }
    else if (roll === 2) { const older = A.y < B.y;
      out.push({k:'mc', kind:'vcomp', uid:`vb:old`, pic:sp, prompt:`${nm(A)} is ___ the ${B.c} one.`, opts:[older ? 'older than' : 'newer than', older ? 'more old than' : 'more new than', older ? 'elder than' : 'newest than', older ? 'newer than' : 'older than'],
        whys:['', 'Con adjetivos cortos se añade -er, no «more».', older ? '«Elder» solo se usa para personas de una familia (my elder sister).' : '«Newest» es superlativo y no lleva «than».', `Mira los años: el ${colEs(A.c)} es de ${A.y} y el ${colEs(B.c)} de ${B.y}.`], explain:`El ${colEs(A.c)} es de ${A.y} y el ${colEs(B.c)} de ${B.y}.`, ex:`${nm(A)} is ${older ? 'older' : 'newer'} than the ${B.c} one.`}); }
    else if (roll === 3) { const modern = A.y > B.y; const right = modern ? 'more modern than' : 'less modern than';
      out.push({k:'mc', kind:'vcomp', uid:'vb:modern', pic:sp, prompt:`${nm(A)} is ___ the ${B.c} one.`, opts:[right, 'moderner than', 'the most modern than', modern ? 'less modern than' : 'more modern than'],
        whys:['', 'Con adjetivos largos (modern, expensive, beautiful) no se añade -er: «more modern».', 'No se mezcla el superlativo (the most) con «than».', `Mira los años: el ${colEs(A.c)} es de ${A.y} y el ${colEs(B.c)} de ${B.y}.`], explain:`El ${colEs(A.c)} es de ${A.y}: «${right}».`, ex:`${nm(A)} is ${right} the ${B.c} one.`}); }
    else { const O = oldest(sp), N = newest(sp), T = tallest(sp), Sh = shortest(sp);
      const trueS = pick1([`${nm(O)} is the oldest.`, `${nm(T)} is the tallest.`, `${nm(N)} is the newest.`, `${nm(Sh)} is the shortest.`]);
      const wrongs = [[`${nm(Sh)} is taller than the ${T.c} one.`, `Mira el dibujo: el ${colEs(Sh.c)} es el más bajo.`], [`${nm(O)} is the most old.`, 'Con adjetivos cortos: «the oldest», no «the most old».'], [`${nm(T)} is more tall than the ${Sh.c} one.`, 'Con adjetivos cortos: «taller», no «more tall».'], [`${nm(N)} is the oldest.`, `Mira los años: el ${colEs(N.c)} es de ${N.y}, el más nuevo.`]];
      const w3 = shuffle(wrongs).slice(0, 3);
      out.push({k:'mc', kind:'vtrue', uid:'vb:true', pic:sp, prompt:'¿Qué frase es verdad y está bien dicha?', opts:[trueS, ...w3.map(x => x[0])], whys:['', ...w3.map(x => x[1])], explain:'Es verdad según el dibujo y está bien formada.', ex:trueS}); }
  }
  return out;
}
function genQty(n){
  const out = [];
  const T = [
    () => { const [e, w, es] = pick1(COUNT_IT); const k = 2 + Math.floor(Math.random() * 2); return {pic:{t:'qty', k:'count', e, w, n:k}, prompt:`There are ___ ${w}.`, opts:['a few', 'a little', 'a lot of', 'much'], whys:['', `«A little» es para incontables (agua, leche). «${w}» se cuentan: «a few».`, `Mira: solo hay ${k}. «A lot of» sería muchas.`, '«Much» es para incontables, y casi siempre en preguntas y negativas.'], explain:`Hay pocas (${k}) y se pueden contar: «a few».`}; },
    () => { const [e, w] = pick1(COUNT_IT); const k = 10 + Math.floor(Math.random() * 3); return {pic:{t:'qty', k:'count', e, w, n:k}, prompt:`There are ___ ${w}.`, opts:['a lot of', 'a few', 'much', 'a little'], whys:['', `Mira: hay ${k}. «A few» es solo unas pocas.`, `«Much» es para incontables; «${w}» se cuentan.`, `«A little» es para incontables; «${w}» se cuentan.`], explain:'Hay muchas: «a lot of» (sirve para contables e incontables).'}; },
    () => { const [w, es] = pick1(MASS_IT); return {pic:{t:'qty', k:'mass', w, lvl:.14}, prompt:`There's ___ ${w}.`, opts:['a little', 'a few', 'a lot of', 'many'], whys:['', `«A few» es para cosas que se cuentan; «${w}» no se cuenta: «a little».`, 'Mira: queda muy poco. «A lot of» sería mucho.', `«Many» es para cosas que se cuentan; «${w}» es incontable.`], explain:`Queda poca ${es} y no se cuenta: «a little».`}; },
    () => { const [w, es] = pick1(MASS_IT); return {pic:{t:'qty', k:'mass', w, lvl:.9}, prompt:`There's ___ ${w}.`, opts:['a lot of', 'a little', 'many', 'a few'], whys:['', 'Mira: está casi lleno. «A little» sería poco.', `«Many» es para cosas que se cuentan; «${w}» es incontable.`, `«A few» es para cosas que se cuentan.`], explain:'Hay mucha: «a lot of».'}; },
    () => { const [e, w] = pick1(COUNT_IT); return {pic:{t:'qty', k:'count', e, w, n:0}, prompt:`There aren't ___ ${w}.`, opts:['any', 'some', 'no', 'much'], whys:['', 'En frases negativas se usa «any», no «some».', '«No» no va con «aren\'t» (sería doble negación): «There are no…» o «There aren\'t any…».', `«Much» es para incontables; «${w}» se cuentan.`], explain:'Negativa → «any».'}; },
    () => { const [w] = pick1(MASS_IT); return {pic:{t:'qty', k:'mass', w, lvl:0}, prompt:`There isn't ___ ${w}.`, opts:['any', 'some', 'many', 'no'], whys:['', 'En frases negativas se usa «any», no «some».', `«Many» es para cosas que se cuentan; «${w}» es incontable.`, '«No» con «isn\'t» sería doble negación: «There\'s no…» o «There isn\'t any…».'], explain:'Negativa → «any».'}; },
    () => { const [e, w] = pick1(COUNT_IT); const k = 3 + Math.floor(Math.random() * 6); return {pic:{t:'qty', k:'count', e, w, n:k}, prompt:`How ___ ${w} are there?`, opts:['many', 'much', 'a lot', 'few'], whys:['', `«How much» es para incontables; «${w}» se cuentan: «How many».`, '«How a lot» no existe; se pregunta «How many».', '«How few» no se usa para preguntar cantidad.'], explain:'Cosas que se cuentan → «How many…?».'}; },
    () => { const [w] = pick1(MASS_IT); return {pic:{t:'qty', k:'mass', w, lvl:.5}, prompt:`How ___ ${w} is there?`, opts:['much', 'many', 'a lot', 'few'], whys:['', `«How many» es para cosas que se cuentan; «${w}» es incontable: «How much».`, '«How a lot» no existe; se pregunta «How much».', '«How few» no se usa para preguntar cantidad.'], explain:'Incontable → «How much…?».'}; },
    () => { const [w, es] = pick1(MASS_IT); return {pic:{t:'qty', k:'mass', w, lvl:.6}, prompt:`Would you like ___ ${w}?`, opts:['some', 'any', 'many', 'a few'], whys:['', 'Al ofrecer algo se usa «some», aunque sea una pregunta.', `«Many» es para cosas que se cuentan; «${w}» es incontable.`, `«A few» es para cosas que se cuentan; «${w}» es incontable.`], explain:`Ofrecer → «some»: «Would you like some ${w}?».`}; }
  ];
  for (let i = 0; i < n; i++) { const o = T[i % T.length](); out.push({k:'mc', kind:'vqty', uid:`vq:${o.prompt}`, ...o, ex:fillGap(o.prompt, o.opts[0])}); }
  return shuffle(out);
}
function genTl(n){
  const list = shuffle(G.which.slice()).slice(0, n);
  return list.map(([en, id], i) => {
    const T = getTense(id); const others = shuffle(TENSES.filter(x => x.id !== id && x.tl !== T.tl)).slice(0, 3);
    if (i % 2 === 0) return {k:'mc', kind:'vtl', uid:`vt:${en}`, prompt:en, say:en, opts:[{t:'tl', k:T.tl, label:T.name}, ...others.map(D => ({t:'tl', k:D.tl, label:D.name}))], whys:['', ...others.map(D => `Esta línea es la del ${D.name}: ${D.idea.charAt(0).toLowerCase() + D.idea.slice(1)}`)], explain:`${T.name}: ${T.idea}`};
    const sents = others.map(D => G.which.find(w => w[1] === D.id)).filter(Boolean);
    return {k:'mc', kind:'vtl2', uid:`vt2:${id}`, pic:{t:'tl', k:T.tl}, prompt:'¿Qué frase encaja con esta línea de tiempo?', opts:[en, ...sents.map(s => s[0])], whys:['', ...sents.map(s => `Esa frase es ${getTense(s[1]).name}: ${getTense(s[1]).idea.charAt(0).toLowerCase() + getTense(s[1]).idea.slice(1)}`)], explain:`${T.name}: ${T.idea}`, say:en};
  });
}

/* ---------- the units ---------- */
const VUNITS = [
  {id:'prep', title:'Preposiciones de lugar', sub:'in, on, under, behind, next to…', pic:{t:'prep', p:'behind'}, gen:n => genPrep(n),
    speak:() => shuffle(PREPS.slice()).slice(0, 4).map(([p, es, en, sEs]) => ({en, es:sEs, pic:{t:'prep', p}})),
    learn:() => `<p class="lead" style="margin-bottom:14px">Como con los vasitos y los caramelos: mira dónde está el caramelo y toca para oír la frase.</p>
      <div class="vgrid">${PREPS.map(([p, es, en]) => `<button class="vcard" data-act="say" data-say="${esc(en)}"${tt('Escuchar: ' + en)}>${drawPrep(p)}<b>${esc(p)}</b><span>${esc(es)}</span></button>`).join('')}</div>
      <section class="card g-tricks" style="margin-top:18px"><h3 class="g-h">${ic('bulb')}Trucos</h3><ul>
        <li>«Next to» es pegado, justo al lado. «Near» es cerca, pero con espacio entre los dos.</li>
        <li>«On» toca la superficie; «above» está por encima, sin tocar.</li>
        <li>«Between» es entre dos cosas; si son más de dos, se dice «among».</li>
        <li>«In front of» lleva «of»; «behind» no: «behind the cup», nunca «behind of».</li>
        <li>En británico, «sweet» es un caramelo («candy» en americano).</li></ul></section>`},
  {id:'clock', title:'La hora en inglés', sub:'quarter past, half past, quarter to…', pic:{t:'clock', h:3, m:15}, gen:n => genClock(n),
    speak:() => Array.from({length:4}, () => { const {h, m} = randTime(); return {en:`It's ${timePhrase(h, m)}.`, es:`Son ${timeEs(h, m)}.`, pic:{t:'clock', h, m}}; }),
    learn:() => `<p class="lead" style="margin-bottom:14px">En Malta y Reino Unido se dice la hora así. Toca cada reloj para oírlo.</p>
      <div class="vgrid">${[[3,0],[3,5],[3,15],[3,30],[3,40],[3,45]].map(([h, m]) => `<button class="vcard" data-act="say" data-say="${esc(`It's ${timePhrase(h, m)}.`)}"${tt('Escuchar')}>${drawClock(h, m)}<b>${esc(timePhrase(h, m))}</b><span>${timeEs(h, m)}</span></button>`).join('')}</div>
      <section class="card g-tricks" style="margin-top:18px"><h3 class="g-h">${ic('bulb')}Trucos</h3><ul>
        <li>«Past» = y (pasan minutos de la hora). «To» = menos (faltan minutos para la siguiente).</li>
        <li>«Quarter» = un cuarto; «half past» = y media. Ojo: «half past three» son las 3:30, no las 2:30.</li>
        <li>En Malta oirás también «half three» (= 3:30) y la forma digital: «three fifteen», «nine forty-five».</li>
        <li>Para la mañana y la tarde: «a.m.» y «p.m.», o «in the morning», «in the afternoon», «in the evening».</li>
        <li>Para preguntar: «What time is it?» o «Have you got the time?».</li></ul></section>`},
  {id:'iot', title:'IN, ON, AT (tiempo)', sub:'in July · on Monday · at seven', pic:{t:'iot'}, gen:n => genIot(n),
    speak:() => shuffle(IOT_SAY.slice()).slice(0, 4).map(([en, es]) => ({en, es, pic:{t:'iot', hi: (en.match(/\b(in|on|at) /) || [])[1]}})),
    learn:() => `<p class="lead" style="margin-bottom:14px">Piensa en una pirámide al revés: arriba lo más grande (IN), en medio los días (ON) y abajo el punto exacto (AT).</p>
      <div class="vpic" style="max-width:520px">${drawIot()}</div>
      <div class="g-uses" style="margin-top:16px">${['in','on','at'].map(p => `<li style="list-style:none"><span class="n">${p.toUpperCase()}</span><div><b>${esc(IOT_RULE[p])}</b><div class="chips">${IOT.filter(x => x[1] === p).slice(0, 6).map(x => `<button class="wchip" data-act="say" data-say="${esc(p + ' ' + x[0])}"${tt('Escuchar')}>${esc(p + ' ' + x[0])}</button>`).join('')}</div></div></li>`).join('')}</div>
      <section class="card g-tricks" style="margin-top:18px"><h3 class="g-h">${ic('bulb')}Excepciones que hay que saber</h3><ul>
        <li>«in the morning / afternoon / evening», pero «at night».</li>
        <li>Si hay un día, manda el día: «on Friday night», «on Sunday morning».</li>
        <li>Británico: «at the weekend». Americano: «on the weekend».</li>
        <li>«at Christmas» (la época), pero «on Christmas Day» (el día).</li>
        <li>Con «this, next, last, every» no va preposición: «next Monday», «last July», «every day».</li></ul></section>`},
  {id:'comp', title:'Comparar con edificios', sub:'taller, the tallest, more modern…', pic:{t:'bld', b:[{c:'yellow', h:84, y:1968}, {c:'orange', h:112, y:2021}, {c:'grey', h:58, y:1890}]}, gen:n => genComp(n),
    speak:() => { const sp = {t:'bld', b:[{c:'yellow', h:84, y:1968}, {c:'orange', h:112, y:2021}, {c:'grey', h:58, y:1890}]}; return [['The orange building is the tallest.', 'El edificio naranja es el más alto.'], ['The grey building is older than the yellow one.', 'El gris es más antiguo que el amarillo.'], ['The yellow building is taller than the grey one.', 'El amarillo es más alto que el gris.'], ['The orange building is the most modern.', 'El naranja es el más moderno.']].map(([en, es]) => ({en, es, pic:sp})); },
    learn:() => { const sp = {t:'bld', b:[{c:'yellow', h:84, y:1968}, {c:'orange', h:112, y:2021}, {c:'grey', h:58, y:1890}]};
      const ex = [['The orange building is the tallest.', 'el naranja es el más alto'], ['The yellow building is taller than the grey one.', 'el amarillo es más alto que el gris'], ['The grey building is the oldest.', 'el gris es el más antiguo (1890)'], ['The orange building is more modern than the yellow one.', 'el naranja es más moderno que el amarillo']];
      const rules = [['Adjetivo corto', 'tall → taller → the tallest', 'old → older → the oldest'], ['Corto con vocal + consonante', 'big → bigger → the biggest', 'se dobla la consonante'], ['Termina en -y', 'easy → easier → the easiest', 'la y cambia a -ier / -iest'], ['Adjetivo largo', 'modern → more modern → the most modern', 'expensive, beautiful, comfortable…'], ['Irregulares', 'good → better → the best', 'bad → worse → the worst · far → further → the furthest'], ['Igual que', 'as tall as', 'not as tall as = menos alto que']];
      return `<p class="lead" style="margin-bottom:14px">Para ti que eres arquitecta: compara edificios. Toca cada frase para oírla.</p><div class="vpic" style="max-width:420px">${drawBuildings(sp)}</div>
        <div class="cmp-pairs" style="margin-top:14px">${ex.map(([en, es]) => `<div class="cpair">${exLine(en)}<p class="es">${esc(es)}</p></div>`).join('')}</div>
        <h3 class="g-h" style="margin-top:22px">${ic('layers')}Cómo se forman</h3><div class="g-form">${rules.map(r => `<div class="fbox"><b>${esc(r[0])}</b><p class="formula">${esc(r[1])}</p><p class="note">${esc(r[2])}</p></div>`).join('')}</div>
        <section class="card g-tricks" style="margin-top:18px"><h3 class="g-h">${ic('bulb')}Trucos</h3><ul><li>Para comparar dos cosas: -er + «than». Para la más de un grupo: «the» + -est.</li><li>Nunca juntes los dos: «more taller» y «the most tallest» están mal.</li><li>«Than» (que) se escribe con a; «then» (luego) con e.</li></ul></section>`; }},
  {id:'qty', title:'Cantidades', sub:'much, many, a few, a little, some, any', pic:{t:'qty', k:'count', e:'🍎', w:'apples', n:3}, gen:n => genQty(n),
    speak:() => shuffle([['There are a few apples.', 'Hay unas pocas manzanas.', {t:'qty', k:'count', e:'🍎', w:'apples', n:3}], ["There's a little milk.", 'Hay un poco de leche.', {t:'qty', k:'mass', w:'milk', lvl:.14}], ["There aren't any eggs.", 'No hay huevos.', {t:'qty', k:'count', e:'🥚', w:'eggs', n:0}], ['There are a lot of lemons.', 'Hay muchos limones.', {t:'qty', k:'count', e:'🍋', w:'lemons', n:11}], ["There's a lot of orange juice.", 'Hay mucho zumo de naranja.', {t:'qty', k:'mass', w:'orange juice', lvl:.9}]]).slice(0, 4).map(([en, es, pic]) => ({en, es, pic})),
    learn:() => `<p class="lead" style="margin-bottom:14px">Lo primero: ¿se puede contar? Manzanas sí (one apple, two apples). Leche no (no se dice «two milks»).</p>
      <div class="vgrid">${[[{t:'qty', k:'count', e:'🍎', w:'apples', n:3}, 'a few apples', 'unas pocas (contables)'], [{t:'qty', k:'count', e:'🍎', w:'apples', n:11}, 'a lot of apples', 'muchas'], [{t:'qty', k:'mass', w:'milk', lvl:.14}, 'a little milk', 'un poco (incontables)'], [{t:'qty', k:'mass', w:'orange juice', lvl:.9}, 'a lot of juice', 'mucho'], [{t:'qty', k:'count', e:'🥚', w:'eggs', n:0}, "there aren't any eggs", 'no hay (negativa → any)'], [{t:'qty', k:'mass', w:'sugar', lvl:.55}, 'some sugar', 'algo de (afirmativa → some)']].map(([pic, en, es]) => `<button class="vcard" data-act="say" data-say="${esc(en)}"${tt('Escuchar')}>${drawPic(pic)}<b>${esc(en)}</b><span>${esc(es)}</span></button>`).join('')}</div>
      <div class="tbl-wrap" style="margin-top:18px"><table class="gtbl" style="min-width:0"><thead><tr><th></th><th>Contables 🍎</th><th>Incontables 🥛</th></tr></thead><tbody>
        <tr><td>Mucho</td><td>many · a lot of</td><td>much · a lot of</td></tr><tr><td>Poco</td><td>a few</td><td>a little</td></tr><tr><td>¿Cuánto?</td><td>How many…?</td><td>How much…?</td></tr><tr><td>Algo / nada</td><td colspan="2">some (afirmativas y ofrecimientos) · any (negativas y preguntas)</td></tr></tbody></table></div>
      <section class="card g-tricks" style="margin-top:18px"><h3 class="g-h">${ic('bulb')}Trucos</h3><ul><li>«A lot of» vale para todo; «much» suena raro en frases afirmativas («I have much money» ✘).</li><li>Incontables típicos: money, water, information, advice, furniture, work, time.</li><li>«Would you like some coffee?»: al ofrecer, «some» aunque sea pregunta.</li></ul></section>`},
  {id:'tl', title:'Líneas de tiempo', sub:'mira el dibujo y elige el tiempo verbal', pic:{t:'tl', k:'pastprog'}, gen:n => genTl(n),
    speak:() => shuffle(G.which.slice()).slice(0, 4).map(([en, id]) => ({en, es:getTense(id).name, pic:{t:'tl', k:getTense(id).tl}})),
    learn:() => `<p class="lead" style="margin-bottom:14px">Cada tiempo verbal tiene su dibujo. Apréndete las líneas y sabrás cuál usar.</p>
      <div class="vgrid wide">${TENSES.map(T => `<button class="vcard" data-act="tense" data-id="${T.id}"${tt('Abrir ' + T.name)}>${timeline(T.tl)}<b>${esc(T.name)}</b><span>${esc(T.idea)}</span></button>`).join('')}</div>`}
];
const getVU = id => VUNITS.find(u => u.id === id);
function visMixRaws(n){ const out = []; for (let i = 0; i < n; i++) out.push(...pick1(VUNITS).gen(1)); return shuffle(out); }
