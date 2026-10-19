/* English For Beautiful Dummies — grammar content (verb tenses).
   Explanations in Spanish, examples in British English.
   Exercise formats (each wrong option is [option, why it is wrong]):
   ['g', sentence with ___ (verb), answer, [[wrong, why] x3], why right]  -> choose the right form
   ['t', sentence with ___ (verb), [accepted answers], Spanish, why]       -> type the verb form
   ['o', English sentence, Spanish]                                         -> put the words in order
   ['s', situation in Spanish, right sentence, [[wrong, why] x2], why]      -> what would you say?
   ['f', right sentence, [[wrong, why] x2], why]                            -> which one is correct? */
window.CHEERS_GRAMMAR = {
  aspects: [
    ["simple", "Simple", "El verbo solo (o con do / did / will).", "Hechos, rutinas y acciones completas."],
    ["continuous", "Continuous", "be + verbo-ing", "Algo en progreso en un momento."],
    ["perfect", "Perfect", "have + participio", "Algo que pasó ANTES de un momento y conecta con él."],
    ["perfcont", "Perfect continuous", "have been + verbo-ing", "Cuánto tiempo LLEVA algo hasta un momento."]
  ],
  times: [["present", "Presente"], ["past", "Pasado"], ["future", "Futuro"]],
  order: ["present-simple", "present-continuous", "past-simple", "future-will", "going-to", "present-perfect", "past-continuous", "present-perfect-continuous", "past-perfect", "future-continuous", "future-perfect", "past-perfect-continuous", "future-perfect-continuous"],

  tenses: [
  /* ===================== PRESENT ===================== */
  {
    id: "present-simple", name: "Present simple", time: "present", aspect: "simple", level: "A1", esEx: "trabajo", tl: "habit",
    idea: "Lo que es siempre así: rutinas, hechos, gustos y horarios.",
    form: {
      aff: ["Sujeto + verbo · con he / she / it: verbo + s", "I work in Sliema.", "She works at a gallery."],
      neg: ["Sujeto + don't / doesn't + verbo (sin s)", "I don't drink coffee.", "He doesn't speak Maltese."],
      q: ["Do / Does + sujeto + verbo (sin s)?", "Do you live in Malta?", "Does she work on Saturdays?"]
    },
    short: "Yes, I do. · No, she doesn't.",
    uses: [
      ["Rutinas y costumbres", "I go to the gym three times a week.", "Voy al gimnasio tres veces por semana."],
      ["Hechos y verdades generales", "It rarely rains in Malta in summer.", "En Malta casi nunca llueve en verano."],
      ["Gustos, opiniones y estados", "I love modern architecture.", "Me encanta la arquitectura moderna."],
      ["Horarios fijos (aunque sean futuros)", "The ferry to Gozo leaves at nine.", "El ferry a Gozo sale a las nueve."]
    ],
    signals: ["always", "usually", "often", "sometimes", "rarely", "never", "every day", "on Mondays", "twice a week"],
    tricks: [
      "La «s» de he / she / it: si el sujeto es UNA persona o cosa que no eres tú ni yo, el verbo lleva -s: she works, it costs, my boss likes.",
      "Cuando aparece do o does, el verbo vuelve a su forma base: She works → Does she work? → She doesn't work. La -s se la queda el auxiliar.",
      "Los adverbios de frecuencia (always, usually, never…) van ANTES del verbo, pero DESPUÉS de be: I usually walk. / I'm usually tired.",
      "En Malta oirás mucho «have got» para posesión: I've got two brothers = I have two brothers. Pregunta: Have you got a car?"
    ],
    mistakes: [
      ["She work in a gallery.", "She works in a gallery.", "Con he / she / it el verbo lleva -s."],
      ["I am agree.", "I agree.", "«Agree» ya es un verbo: no lleva am."],
      ["Does she works here?", "Does she work here?", "Con does, el verbo va sin -s."],
      ["He don't like it.", "He doesn't like it.", "Con he / she / it la negativa es doesn't."]
    ],
    spelling: [
      "La mayoría: + s → work → works, play → plays.",
      "Terminados en -s, -sh, -ch, -x, -o: + es → watch → watches, go → goes, do → does.",
      "Consonante + y: -ies → study → studies (pero play → plays, porque antes de la y hay vocal).",
      "Irregular: have → has."
    ],
    ex: [
      ["g", "My sister ___ (live) in Gozo.", "lives", [["live", "My sister = she: con he / she / it el verbo lleva -s."], ["is live", "No se mezcla be con el verbo: «lives», sin «is»."], ["living", "Falta el verbo be y no es algo temporal: lo estable va en present simple."]], "My sister = she → verbo + s."],
      ["g", "___ you like working at the gallery?", "Do", [["Does", "«Does» es para he / she / it. Con you: «Do»."], ["Are", "«Are» va con -ing o adjetivos (Are you tired?); con un verbo normal: «Do you like…?»."], ["Is", "«Is» es para he / she / it y no va con «like»: «Do you like…?»."]], "Pregunta con you: Do + sujeto + verbo."],
      ["g", "He ___ (not / speak) Maltese.", "doesn't speak", [["don't speak", "«Don't» es para I / you / we / they. Con he: «doesn't»."], ["doesn't speaks", "Con doesn't, la -s ya la lleva el auxiliar: «doesn't speak»."], ["not speaks", "Falta el auxiliar: la negativa es «doesn't speak»."]], "He → doesn't + verbo sin -s."],
      ["g", "The museum ___ (open) at ten on Sundays.", "opens", [["open", "The museum = it: lleva -s, «opens»."], ["is opening", "Un horario fijo va en present simple, no en continuous."], ["opening", "Falta el verbo conjugado; un horario fijo es «opens»."]], "Horario fijo → present simple. The museum = it → opens."],
      ["g", "I ___ (usually / take) the bus to work.", "usually take", [["take usually", "Los adverbios de frecuencia van ANTES del verbo: «usually take»."], ["am usually take", "Sobra «am»: con un verbo normal no se pone be."], ["usually takes", "Con I el verbo va sin -s."]], "El adverbio de frecuencia va antes del verbo. Con I, sin -s."],
      ["t", "She ___ (study) English every evening.", ["studies"], "Ella estudia inglés todas las tardes.", "Consonante + y → -ies: study → studies."],
      ["t", "My boss ___ (have) two dogs.", ["has", "has got"], "Mi jefe tiene dos perros.", "Have con he / she / it es has."],
      ["t", "We ___ (not / work) on Sundays.", ["don't work", "do not work"], "No trabajamos los domingos.", "Con we: don't + verbo."],
      ["o", "How often do you go to the beach?", "¿Cada cuánto vas a la playa?"],
      ["o", "She doesn't eat meat.", "Ella no come carne."],
      ["s", "Le cuentas a alguien a qué te dedicas.", "I design exhibitions for a gallery.", [["I am designing exhibitions for a gallery.", "El continuous sugiere algo temporal; tu trabajo estable va en present simple."], ["I designed exhibitions for a gallery.", "Es pasado: sonaría a que ya no trabajas allí."]], "Tu trabajo es algo estable → present simple."],
      ["f", "Does your brother work in Valletta?", [["Does your brother works in Valletta?", "Con does, el verbo va sin -s: «work»."], ["Do your brother work in Valletta?", "Your brother = he: la pregunta va con «Does»."]], "Your brother = he → Does + verbo sin -s."]
    ]
  },
  {
    id: "present-continuous", name: "Present continuous", time: "present", aspect: "continuous", level: "A1", esEx: "estoy trabajando", tl: "now",
    idea: "Lo que está pasando ahora mismo o estos días, y los planes ya organizados.",
    form: {
      aff: ["Sujeto + am / is / are + verbo-ing", "I'm working from home today.", "She's painting the walls."],
      neg: ["Sujeto + am not / isn't / aren't + verbo-ing", "I'm not listening.", "They aren't coming tonight."],
      q: ["Am / Is / Are + sujeto + verbo-ing?", "Are you working today?", "Is it raining?"]
    },
    short: "Yes, I am. · No, it isn't.",
    uses: [
      ["Algo que pasa justo ahora", "Hold on, I'm talking to a client.", "Espera, estoy hablando con un cliente."],
      ["Algo temporal, de estos días", "I'm looking for a new job at the moment.", "Ahora mismo estoy buscando trabajo."],
      ["Cambios que están ocurriendo", "Rents in Malta are going up.", "Los alquileres en Malta están subiendo."],
      ["Planes ya organizados (futuro)", "I'm meeting Sarah for lunch tomorrow.", "Mañana como con Sarah (ya lo quedamos)."]
    ],
    signals: ["now", "right now", "at the moment", "today", "this week", "these days", "currently", "Look!", "Listen!"],
    tricks: [
      "Nunca olvides el verbo be: «I working» está mal, es «I'm working». Piensa en «estoy + -ando / -iendo».",
      "Los verbos de estado NO suelen ir en -ing: know, like, love, hate, want, need, believe, understand, mean. Se dice «I know», nunca «I'm knowing».",
      "Para planes con día y hora, los británicos usan muchísimo este tiempo: «What are you doing this weekend?» es la pregunta típica del viernes.",
      "Con always expresa una queja: «He's always arriving late!» (¡siempre llega tarde!)."
    ],
    mistakes: [
      ["I working on a project.", "I'm working on a project.", "Falta el verbo be (am)."],
      ["I'm knowing the answer.", "I know the answer.", "«Know» es un verbo de estado: va en present simple."],
      ["Look! It rains.", "Look! It's raining.", "Para lo que pasa en este momento: present continuous."]
    ],
    spelling: [
      "La mayoría: + ing → work → working.",
      "Terminados en -e: quita la e → make → making, write → writing.",
      "Una vocal + una consonante al final (sílaba fuerte): dobla la consonante → sit → sitting, run → running, stop → stopping.",
      "Terminados en -ie: → -ying → lie → lying."
    ],
    ex: [
      ["g", "Be quiet! The baby ___ (sleep).", "is sleeping", [["sleeps", "«Be quiet!» indica que está pasando ahora: continuous (is sleeping)."], ["sleeping", "Falta el verbo be: «is sleeping»."], ["are sleeping", "The baby = it: con it va «is», no «are»."]], "«Be quiet!» → está pasando ahora. The baby = it → is sleeping."],
      ["g", "I ___ (look) for a job in design at the moment.", "am looking", [["look", "«At the moment» pide continuous: «am looking»."], ["looking", "Falta el verbo be: «I am looking»."], ["is looking", "Con I el verbo be es «am», no «is»."]], "At the moment = estos días → am + -ing."],
      ["g", "We ___ (not / go) out tonight, we're too tired.", "aren't going", [["don't go", "Para un plan de esta noche se usa present continuous: «aren't going»."], ["not going", "Falta el verbo be: «aren't going»."], ["isn't going", "Con we va «aren't», no «isn't»."]], "Plan para esta noche → present continuous en negativa."],
      ["g", "I ___ (want) a coffee.", "want", [["am wanting", "«Want» es un verbo de estado: no se usa con -ing."], ["wanting", "Falta el verbo conjugado, y «want» no va en -ing."], ["wants", "Con I el verbo va sin -s."]], "«Want» es un verbo de estado: no se usa con -ing."],
      ["t", "Look! It ___ (rain) again.", ["is raining", "'s raining"], "¡Mira! Está lloviendo otra vez.", "Look! → ahora mismo → is + -ing."],
      ["t", "They ___ (build) a new hotel in Sliema.", ["are building", "'re building"], "Están construyendo un hotel nuevo en Sliema.", "Algo en progreso estos meses → are + -ing."],
      ["t", "She ___ (write) her CV right now.", ["is writing", "'s writing"], "Está escribiendo su CV ahora mismo.", "Write termina en -e: quita la e → writing."],
      ["o", "What are you doing this weekend?", "¿Qué vas a hacer este fin de semana?"],
      ["o", "I'm working from home today.", "Hoy trabajo desde casa."],
      ["s", "Tu amiga te llama y estás cocinando. Se lo dices.", "I'm cooking dinner.", [["I cook dinner.", "«I cook dinner» es una costumbre (yo cocino la cena normalmente), no lo que haces ahora."], ["I cooked dinner.", "Eso es pasado: ya terminaste."]], "Está pasando en este momento → present continuous."],
      ["s", "Ya quedaste con Ana para cenar el viernes.", "I'm having dinner with Ana on Friday.", [["I have dinner with Ana on Friday.", "Suena a costumbre o a horario; un plan quedado se dice en continuous."], ["I had dinner with Ana on Friday.", "Eso es pasado: ya cenaste."]], "Plan ya organizado → present continuous con valor de futuro."],
      ["f", "I need a break.", [["I'm needing a break.", "«Need» es un verbo de estado: no va en -ing."], ["I needing a break.", "Falta el verbo be y, además, «need» no va en -ing."]], "«Need» es un verbo de estado: present simple."]
    ]
  },
  {
    id: "present-perfect", name: "Present perfect", time: "present", aspect: "perfect", level: "A2–B1", esEx: "he trabajado", tl: "pastnow",
    idea: "Algo del pasado que conecta con ahora: experiencias, resultados y cosas que empezaron antes y siguen.",
    form: {
      aff: ["Sujeto + have / has + participio", "I've finished the report.", "She's lived in Malta for two years."],
      neg: ["Sujeto + haven't / hasn't + participio", "I haven't seen that film.", "He hasn't called yet."],
      q: ["Have / Has + sujeto + participio?", "Have you ever been to Gozo?", "Has she sent the email?"]
    },
    short: "Yes, I have. · No, she hasn't.",
    uses: [
      ["Experiencias de tu vida (sin decir cuándo)", "I've worked with 3D printers before.", "Ya he trabajado con impresoras 3D antes."],
      ["Algo reciente con resultado ahora", "I've lost my keys, so I can't get in.", "He perdido las llaves, así que no puedo entrar."],
      ["Empezó en el pasado y sigue (for / since)", "I've lived in Malta since 2023.", "Vivo en Malta desde 2023."],
      ["Con just, already y yet", "Have you sent your CV yet?", "¿Ya enviaste tu CV?"]
    ],
    signals: ["ever", "never", "just", "already", "yet", "for", "since", "so far", "recently", "How long…?"],
    tricks: [
      "Si dices CUÁNDO pasó (yesterday, last year, in 2020, ago), no puedes usar present perfect: usa past simple. «I've been to Rome» ✔ · «I went to Rome last year» ✔ · «I've been to Rome last year» ✘.",
      "El gran truco para hispanohablantes: «Vivo aquí desde hace dos años» NO va en presente en inglés. Se dice «I've lived here for two years». Si algo empezó antes y sigue, usa have + participio.",
      "For = duración (for two years, for a week). Since = punto de inicio (since 2023, since Monday, since I arrived).",
      "Been vs gone: «She's been to Paris» = fue y ya volvió. «She's gone to Paris» = está allí ahora.",
      "En inglés británico se usa más que en el americano: en Malta oirás «Have you eaten yet?» donde un americano diría «Did you eat yet?»."
    ],
    mistakes: [
      ["I have seen him yesterday.", "I saw him yesterday.", "Con «yesterday» (tiempo terminado) se usa past simple."],
      ["I live here since 2023.", "I've lived here since 2023.", "Empezó antes y sigue: present perfect."],
      ["I've worked here since three years.", "I've worked here for three years.", "Con una cantidad de tiempo se usa for, no since."],
      ["Have you ever went to Gozo?", "Have you ever been to Gozo?", "Después de have va el participio (been), no el pasado."]
    ],
    spelling: [
      "Verbos regulares: el participio es igual que el pasado, con -ed → worked, finished, studied.",
      "Irregulares: hay que aprenderlos → go → gone, see → seen, write → written. Los tienes en la pestaña «Irregulares»."
    ],
    ex: [
      ["g", "Have you ever ___ (be) to Comino?", "been", [["was", "Después de «have» va el participio, no el pasado: «been»."], ["went", "«Went» es pasado; con «have» va participio. Para experiencias de viaje: «been»."], ["be", "Después de «have» va el participio: «been», no la forma base."]], "Have + participio. El participio de be es been."],
      ["g", "I ___ (live) in Malta since 2023.", "have lived", [["live", "Con «since» y algo que sigue, el español usa presente pero el inglés usa «have lived»."], ["am living", "«I'm living» es temporal y no va con since; algo que empezó y sigue: «have lived»."], ["lived", "«Lived» sonaría a que ya no vives aquí."]], "Since + empezó antes y sigue → have + participio."],
      ["g", "She ___ (not / finish) the project yet.", "hasn't finished", [["didn't finish", "Con «yet» el inglés británico usa present perfect: «hasn't finished»."], ["haven't finished", "She va con «has»: «hasn't»."], ["hasn't finish", "Después de «has» va el participio: «finished»."]], "Yet en negativa → present perfect. She → hasn't."],
      ["g", "I ___ (see) that exhibition last week.", "saw", [["have seen", "«Last week» es un momento terminado: past simple, «saw»."], ["has seen", "Con I no va «has»; y con «last week» va past simple."], ["seen", "«Seen» es el participio: solo va detrás de have / has."]], "«Last week» es un momento terminado → past simple."],
      ["g", "We've known each other ___ ten years.", "for", [["since", "«Since» va con un punto de inicio (since 2015); diez años es duración: «for»."], ["from", "«From» necesita un final (from 2015 to 2020)."], ["during", "«During» es durante un evento (during the meeting); para duración: «for»."]], "Ten years es una duración → for."],
      ["t", "I ___ (just / send) you the file.", ["have just sent", "'ve just sent"], "Te acabo de enviar el archivo.", "«Acabo de» = have just + participio. Send → sent."],
      ["t", "She ___ (work) here since January.", ["has worked", "'s worked", "has been working", "'s been working"], "Trabaja aquí desde enero.", "Desde enero hasta hoy → has + participio."],
      ["t", "Have you ___ (write) your cover letter yet?", ["written"], "¿Ya escribiste tu carta de presentación?", "Participio irregular: write → wrote → written."],
      ["o", "I've never been to London.", "Nunca he estado en Londres."],
      ["o", "How long have you lived in Malta?", "¿Cuánto tiempo llevas viviendo en Malta?"],
      ["s", "En una entrevista dices que usas AutoCAD desde hace muchos años (y lo sigues usando).", "I've used AutoCAD for many years.", [["I use AutoCAD for many years.", "El presente no sirve para «desde hace X años»: se dice «I've used»."], ["I used AutoCAD since many years.", "«Used» sonaría a que ya no lo usas, y con una duración va «for», no «since»."]], "Empezó antes y sigue hasta hoy, con for → present perfect."],
      ["f", "I've already had lunch.", [["I've had lunch an hour ago.", "Con «ago» (momento terminado) va past simple: «I had lunch an hour ago»."], ["I've already have lunch.", "Después de «have» va el participio: «had»."]], "Have + participio (had). Con «ago» se usaría past simple."]
    ]
  },
  {
    id: "present-perfect-continuous", name: "Present perfect continuous", time: "present", aspect: "perfcont", level: "B1", esEx: "llevo dos horas trabajando", tl: "pastnowdur",
    idea: "Algo que empezó antes y sigue (o acaba de parar), cuando importa cuánto tiempo lleva.",
    form: {
      aff: ["Sujeto + have / has been + verbo-ing", "I've been waiting for an hour.", "She's been working here since May."],
      neg: ["Sujeto + haven't / hasn't been + verbo-ing", "I haven't been sleeping well.", "It hasn't been raining."],
      q: ["Have / Has + sujeto + been + verbo-ing?", "How long have you been learning English?", "Has he been working late?"]
    },
    short: "Yes, I have. · No, he hasn't.",
    uses: [
      ["Cuánto tiempo llevas haciendo algo", "I've been learning English for a year.", "Llevo un año aprendiendo inglés."],
      ["Una actividad que acaba de parar y se nota", "Sorry, I'm out of breath. I've been running.", "Perdón, me falta el aire: he estado corriendo."],
      ["Algo repetido últimamente", "I've been going to job interviews all month.", "Llevo todo el mes yendo a entrevistas."]
    ],
    signals: ["for", "since", "How long…?", "all day", "all morning", "lately", "recently"],
    tricks: [
      "El truco estrella: «llevar + tiempo + -ando / -iendo» = have been + -ing. «Llevo tres horas esperando» = «I've been waiting for three hours».",
      "Pregunta típica: «How long have you been…?» = ¿Cuánto tiempo llevas…?",
      "Simple = cuántos / resultado (I've sent ten CVs). Continuous = cuánto tiempo / actividad (I've been sending CVs all week).",
      "Con verbos de estado (know, like, have = tener) no se usa: «I've known her for years», no «I've been knowing her»."
    ],
    mistakes: [
      ["I'm working here for two years.", "I've been working here for two years.", "Para «llevo X tiempo» se usa have been + -ing, no el presente."],
      ["I've been knowing him since 2020.", "I've known him since 2020.", "«Know» no va en -ing."],
      ["How long are you waiting?", "How long have you been waiting?", "¿Cuánto tiempo llevas…? → How long have you been…?"]
    ],
    ex: [
      ["g", "I ___ (wait) for the bus for forty minutes!", "have been waiting", [["am waiting", "«Llevo 40 minutos esperando» no es presente: «have been waiting»."], ["waited", "«Waited» sonaría a que ya terminó la espera."], ["have waiting", "Falta «been»: «have been waiting»."]], "Llevo 40 minutos esperando → have been + -ing."],
      ["g", "How long ___ you been living in Malta?", "have", [["are", "«How long are you living» es un calco; se dice «How long have you been living…?»."], ["do", "«Do» no va con «been»; es «have you been»."], ["did", "«Did» no va con «been»; es «have you been»."]], "How long + have + sujeto + been + -ing?"],
      ["g", "She ___ (paint) the gallery walls all morning.", "has been painting", [["have been painting", "She va con «has»: «has been painting»."], ["has painting", "Falta «been»: «has been painting»."], ["was painted", "Eso es pasiva en pasado (fue pintada), no lo que ella lleva haciendo."]], "All morning y sigue (o acaba de parar) → has been + -ing."],
      ["g", "I ___ (know) Tom for years.", "have known", [["have been knowing", "«Know» es un verbo de estado: no va en -ing."], ["know", "Con «for years» y algo que sigue: «have known»."], ["am knowing", "«Know» no va en -ing, y para «desde hace años» se usa have + participio."]], "«Know» es de estado: present perfect simple, sin -ing."],
      ["t", "It ___ (rain) all day.", ["has been raining", "'s been raining"], "Lleva todo el día lloviendo.", "Todo el día hasta ahora → has been + -ing."],
      ["t", "We ___ (work) on this design since Monday.", ["have been working", "'ve been working"], "Llevamos desde el lunes trabajando en este diseño.", "Since + llevar haciendo → have been + -ing."],
      ["t", "Your eyes are red. ___ you been crying?", ["Have"], "Tienes los ojos rojos. ¿Has estado llorando?", "Pregunta: Have + you + been + -ing."],
      ["o", "How long have you been learning English?", "¿Cuánto tiempo llevas aprendiendo inglés?"],
      ["o", "I've been looking for a job since June.", "Llevo buscando trabajo desde junio."],
      ["s", "Le dices a un amigo que llevas dos horas esperando al técnico.", "I've been waiting for the technician for two hours.", [["I'm waiting for the technician for two hours.", "El presente no sirve para «llevo X tiempo»: «I've been waiting»."], ["I waited for the technician for two hours.", "Pasado: sonaría a que la espera ya terminó."]], "Llevo X tiempo haciendo algo → have been + -ing."],
      ["s", "Quieres decir cuántos emails has enviado hoy (el resultado).", "I've sent twenty emails today.", [["I've been sending twenty emails today.", "Si cuentas cuántos (el resultado), se usa el simple: «I've sent»."], ["I'm sending twenty emails today.", "Suena a que los estás enviando ahora; el resultado de hoy es «I've sent»."]], "Cuando cuentas cuántos (resultado), se usa present perfect simple."],
      ["f", "She's been teaching yoga since 2019.", [["She's teaching yoga since 2019.", "Con «since» y algo que sigue no va el presente: «has been teaching»."], ["She has been teach yoga since 2019.", "Después de «been» va -ing: «teaching»."]], "Desde 2019 hasta hoy → has been + verbo-ing."]
    ]
  },

  /* ===================== PAST ===================== */
  {
    id: "past-simple", name: "Past simple", time: "past", aspect: "simple", level: "A2", esEx: "trabajé", tl: "past",
    idea: "Acciones terminadas en un momento concreto del pasado.",
    form: {
      aff: ["Sujeto + verbo en pasado (-ed o irregular)", "I worked at a gallery in 2022.", "We went to Mdina on Sunday."],
      neg: ["Sujeto + didn't + verbo (forma base)", "I didn't go to the party.", "She didn't like the film."],
      q: ["Did + sujeto + verbo (forma base)?", "Did you get the job?", "Where did you study?"]
    },
    beNote: "Con be: I / he / she / it was · you / we / they were. Negativa: wasn't / weren't. Pregunta: Was it…? Were you…?",
    short: "Yes, I did. · No, she didn't.",
    uses: [
      ["Acción terminada en un momento concreto", "I graduated in architecture in 2015.", "Me gradué en arquitectura en 2015."],
      ["Una serie de acciones (contar una historia)", "I got up, had a coffee and caught the bus.", "Me levanté, me tomé un café y cogí el bus."],
      ["Costumbres o estados del pasado", "When I was a child, I played the piano.", "Cuando era niña, tocaba el piano."],
      ["Con ago (hace…)", "I moved to Malta two years ago.", "Me mudé a Malta hace dos años."]
    ],
    signals: ["yesterday", "last week", "last year", "ago", "in 2020", "when I was…", "on Monday", "then"],
    tricks: [
      "Con did, el verbo vuelve a la forma base: She went → Did she go? → She didn't go. ¡El pasado se lo queda did!",
      "Pronunciación del -ed (¡muy importante!): suena /t/ después de sonidos sordos (worked suena «workt», stopped «stopt»), /d/ en la mayoría (played, called) y solo añade sílaba /id/ después de t o d (wanted, needed). Nunca digas «work-ed».",
      "El imperfecto español (trabajaba, vivía) muchas veces es past simple en inglés: «Cuando vivía en Madrid» = «When I lived in Madrid». Para costumbres pasadas también puedes decir «I used to…».",
      "Ago va al final: «two years ago» = hace dos años."
    ],
    mistakes: [
      ["I didn't went.", "I didn't go.", "Después de didn't, forma base."],
      ["Did you saw the email?", "Did you see the email?", "Después de did, forma base."],
      ["I have finished university in 2015.", "I finished university in 2015.", "Con un año concreto → past simple."],
      ["Ago two years I moved here.", "I moved here two years ago.", "«Ago» va después del tiempo, al final."]
    ],
    spelling: [
      "La mayoría: + ed → work → worked.",
      "Terminados en -e: + d → live → lived.",
      "Consonante + y: -ied → study → studied (pero play → played).",
      "Una vocal + una consonante al final (sílaba fuerte): dobla → stop → stopped, plan → planned.",
      "Los irregulares hay que aprenderlos: go → went, buy → bought. Los tienes en la pestaña «Irregulares»."
    ],
    ex: [
      ["g", "I ___ (start) my new job last Monday.", "started", [["start", "«Last Monday» es pasado: «started»."], ["have started", "Con «last Monday» (momento terminado) no va present perfect."], ["was start", "No se mezcla «was» con el verbo base: «started»."]], "Last Monday → past simple."],
      ["g", "We ___ (go) to Mdina on Sunday.", "went", [["goed", "«Go» es irregular: el pasado es «went»."], ["gone", "«Gone» es el participio; solo va con have / has."], ["have gone", "Con «on Sunday» (momento terminado) va past simple: «went»."]], "Go es irregular: go → went → gone."],
      ["g", "She ___ (not / come) to the meeting yesterday.", "didn't come", [["didn't came", "Después de «didn't», forma base: «come»."], ["not came", "Falta el auxiliar: «didn't come»."], ["doesn't come", "Es presente; «yesterday» pide pasado: «didn't come»."]], "Negativa en pasado: didn't + forma base."],
      ["g", "___ you enjoy the exhibition last night?", "Did", [["Do", "«Last night» es pasado: «Did»."], ["Were", "«Were» va con -ing o adjetivos; con el verbo «enjoy»: «Did you enjoy…?»."], ["Have", "Con «last night» (momento terminado) no va present perfect."]], "Pregunta en pasado: Did + sujeto + verbo."],
      ["g", "I ___ (be) really tired yesterday.", "was", [["were", "Con I el pasado de be es «was»."], ["did be", "Be no usa «did»: el pasado es «was / were»."], ["am", "Es presente; «yesterday» pide pasado."]], "Be en pasado: I was, you were."],
      ["t", "I ___ (buy) a new laptop last week.", ["bought"], "La semana pasada compré un portátil nuevo.", "Irregular: buy → bought."],
      ["t", "They ___ (move) to Malta three years ago.", ["moved"], "Se mudaron a Malta hace tres años.", "Regular terminado en -e: move → moved."],
      ["t", "He ___ (study) architecture in Barcelona.", ["studied"], "Estudió arquitectura en Barcelona.", "Consonante + y → -ied: studied."],
      ["o", "Where did you work before?", "¿Dónde trabajabas antes?"],
      ["o", "I moved to Malta two years ago.", "Me mudé a Malta hace dos años."],
      ["s", "En una entrevista explicas cuándo terminaste la carrera.", "I finished my degree in 2015.", [["I've finished my degree in 2015.", "Con un año concreto (in 2015) no va present perfect: «I finished»."], ["I finish my degree in 2015.", "Es presente; habla del pasado: «finished»."]], "Año concreto y terminado → past simple."],
      ["f", "Did you see the email?", [["Did you saw the email?", "Después de «did», forma base: «see»."], ["Saw you the email?", "En inglés la pregunta necesita «did» delante: «Did you see…?»."]], "Pregunta: Did + sujeto + forma base."]
    ]
  },
  {
    id: "past-continuous", name: "Past continuous", time: "past", aspect: "continuous", level: "A2", esEx: "estaba trabajando", tl: "pastprog",
    idea: "Lo que estaba pasando en un momento del pasado, a menudo cuando otra cosa lo interrumpió.",
    form: {
      aff: ["Sujeto + was / were + verbo-ing", "I was working at eight last night.", "They were talking about you."],
      neg: ["Sujeto + wasn't / weren't + verbo-ing", "I wasn't listening.", "We weren't expecting that."],
      q: ["Was / Were + sujeto + verbo-ing?", "What were you doing at ten?", "Was it raining?"]
    },
    short: "Yes, I was. · No, they weren't.",
    uses: [
      ["Acción en progreso en un momento del pasado", "At nine last night I was watching a series.", "Anoche a las nueve estaba viendo una serie."],
      ["Acción larga interrumpida por otra corta", "I was cooking when the phone rang.", "Estaba cocinando cuando sonó el teléfono."],
      ["Dos acciones a la vez (while)", "While I was working, my flatmate was cleaning.", "Mientras yo trabajaba, mi compañera de piso limpiaba."],
      ["El fondo de una historia", "The sun was shining and people were swimming.", "Brillaba el sol y la gente nadaba."]
    ],
    signals: ["while", "when", "at eight o'clock yesterday", "all evening", "at that moment"],
    tricks: [
      "La acción larga va en continuous y la corta que la interrumpe en past simple: «I was having a shower when you called».",
      "Normalmente: while + acción larga (continuous) · when + acción corta (simple).",
      "Es el «estaba + -ando / -iendo» del español. Si en español dices «estaba…», casi siempre es was / were + -ing.",
      "No lo uses para una acción terminada sin más: «Yesterday I went to the beach», no «Yesterday I was going to the beach»."
    ],
    mistakes: [
      ["I was cook when he arrived.", "I was cooking when he arrived.", "Falta el -ing."],
      ["We was waiting for you.", "We were waiting for you.", "Con we / you / they se usa were."],
      ["While I cooked, the phone was ringing.", "While I was cooking, the phone rang.", "La acción larga en continuous; la corta, en simple."]
    ],
    ex: [
      ["g", "I ___ (have) a shower when you called.", "was having", [["had", "«I had a shower when you called» sería que te duchaste después de la llamada. Si estaba en progreso: «was having»."], ["were having", "Con I va «was», no «were»."], ["am having", "Es presente; la llamada fue en pasado."]], "Acción larga interrumpida → was + -ing."],
      ["g", "What ___ you doing at eight last night?", "were", [["was", "Con you va «were»."], ["did", "«Did» no va con -ing: «What were you doing?»."], ["are", "Es presente; «last night» pide pasado: «were»."]], "Con you: were + -ing."],
      ["g", "While we ___ (walk) to Valletta, it started to rain.", "were walking", [["walked", "Con «while» y una acción larga interrumpida, va continuous: «were walking»."], ["was walking", "Con we va «were»."], ["are walking", "Es presente; la historia es pasada."]], "While + acción larga → were + -ing (we)."],
      ["g", "She was working when her boss ___ (arrive).", "arrived", [["was arriving", "La acción corta que interrumpe va en past simple: «arrived»."], ["arrives", "Es presente; la historia es pasada."], ["arriving", "Falta un verbo conjugado; la interrupción es «arrived»."]], "La acción corta que interrumpe → past simple."],
      ["g", "Sorry, I didn't hear you. I ___ (not / pay) attention.", "wasn't paying", [["didn't paying", "«Didn't» va con forma base, no con -ing; aquí es «wasn't paying»."], ["wasn't pay", "Después de «wasn't» va -ing: «paying»."], ["weren't paying", "Con I va «wasn't», no «weren't»."]], "En progreso en ese momento → wasn't + -ing."],
      ["t", "At ten o'clock last night I ___ (sleep).", ["was sleeping"], "Anoche a las diez estaba durmiendo.", "Momento concreto del pasado → was + -ing."],
      ["t", "They ___ (not / listen) to the presentation.", ["weren't listening", "were not listening"], "No estaban escuchando la presentación.", "They → weren't + -ing."],
      ["t", "I ___ (drive) home when I saw the accident.", ["was driving"], "Iba conduciendo a casa cuando vi el accidente.", "Acción larga → was + -ing; drive pierde la e: driving."],
      ["o", "I was cooking when the phone rang.", "Estaba cocinando cuando sonó el teléfono."],
      ["o", "What were you doing at nine?", "¿Qué estabas haciendo a las nueve?"],
      ["s", "Cuentas que tu jefe entró justo en medio de tu llamada personal.", "I was talking on the phone when my boss came in.", [["I talked on the phone when my boss was coming in.", "Está al revés: la llamada (larga) va en continuous y la entrada (corta) en simple."], ["I am talking on the phone when my boss came in.", "Mezcla presente y pasado; toda la historia va en pasado."]], "La llamada (larga) en continuous; la entrada del jefe (corta) en simple."],
      ["f", "We were waiting for the ferry when it started to rain.", [["We was waiting for the ferry when it started to rain.", "Con we va «were», no «was»."], ["We were wait for the ferry when it started to rain.", "Después de «were» va -ing: «waiting»."]], "We → were + verbo-ing."]
    ]
  },
  {
    id: "past-perfect", name: "Past perfect", time: "past", aspect: "perfect", level: "B1", esEx: "había trabajado", tl: "pastpast",
    idea: "El pasado del pasado: algo que pasó ANTES de otro momento pasado.",
    form: {
      aff: ["Sujeto + had + participio", "When I arrived, the meeting had started.", "She had already left."],
      neg: ["Sujeto + hadn't + participio", "I hadn't seen the email.", "They hadn't eaten yet."],
      q: ["Had + sujeto + participio?", "Had you been to Malta before?", "Had they finished?"]
    },
    short: "Yes, I had. · No, they hadn't.",
    uses: [
      ["Lo que pasó primero, cuando cuentas algo pasado", "When I got to the station, the train had left.", "Cuando llegué a la estación, el tren ya se había ido."],
      ["Experiencias antes de un momento pasado", "I had never used a 3D printer before I joined the studio.", "Nunca había usado una impresora 3D antes de entrar al estudio."],
      ["Explicar la causa de algo pasado", "She was nervous because she hadn't prepared.", "Estaba nerviosa porque no se había preparado."]
    ],
    signals: ["already", "before", "by the time", "when", "after", "never… before", "just"],
    tricks: [
      "Es exactamente el «había + participio» del español: había ido = had gone, había visto = had seen.",
      "Solo hace falta si hay DOS momentos pasados y quieres dejar claro cuál fue primero. Si cuentas en orden, basta el past simple: «I finished work and went home».",
      "Fíjate en la diferencia: «When I arrived, the film started» (empezó al llegar yo) vs «When I arrived, the film had started» (ya había empezado).",
      "Al hablar, had se contrae: I'd, she'd, we'd. «I'd already eaten.»"
    ],
    mistakes: [
      ["I had went there before.", "I had gone there before.", "Después de had va el participio (gone), no el pasado."],
      ["Yesterday I had visited the museum.", "Yesterday I visited the museum.", "Si no hay otro momento pasado posterior, usa past simple."],
      ["When I arrived, she already left.", "When I arrived, she had already left.", "Se fue antes de que llegaras → had + participio."]
    ],
    ex: [
      ["g", "When we got to the cinema, the film ___ (already / start).", "had already started", [["has already started", "La historia es pasada (got): el pasado del pasado es «had started»."], ["was already start", "No se mezcla «was» con el verbo base; es «had already started»."], ["already starts", "Es presente; necesitas «had started» (había empezado)."]], "Empezó antes de que llegáramos → had + participio."],
      ["g", "I couldn't pay because I ___ (forget) my wallet.", "had forgotten", [["have forgotten", "La historia es pasada (couldn't): «had forgotten»."], ["had forgot", "Después de «had» va el participio: «forgotten»."], ["was forgetting", "Olvidar no es una acción en progreso aquí: «had forgotten»."]], "Lo olvidé antes del momento de pagar → had + participio (forgotten)."],
      ["g", "She ___ (never / fly) before her trip to Malta.", "had never flown", [["has never flown", "Hablas de antes de un viaje pasado: «had never flown»."], ["had never flew", "Después de «had» va el participio: «flown»."], ["was never flying", "No es una acción en progreso; experiencia anterior: «had never flown»."]], "Experiencia antes de un momento pasado → had + participio (flown)."],
      ["g", "By the time the client arrived, we ___ (prepare) everything.", "had prepared", [["have prepared", "La historia es pasada (arrived): «had prepared»."], ["prepare", "Es presente; lo preparasteis antes: «had prepared»."], ["were prepare", "No se mezcla «were» con el verbo base."]], "By the time + pasado → la acción anterior va en had + participio."],
      ["t", "He was tired because he ___ (not / sleep) well.", ["hadn't slept", "had not slept"], "Estaba cansado porque no había dormido bien.", "La causa ocurrió antes → hadn't + participio (slept)."],
      ["t", "Until I visited Mdina, I ___ (never / see) such an old city.", ["had never seen", "'d never seen"], "Hasta que visité Mdina, nunca había visto una ciudad tan antigua.", "Experiencia hasta un momento pasado → had never + participio."],
      ["t", "The meeting ___ (finish) when I arrived.", ["had finished", "'d finished", "had already finished"], "La reunión ya había terminado cuando llegué.", "Terminó antes de que llegaras → had + participio."],
      ["o", "When I arrived, the train had already left.", "Cuando llegué, el tren ya se había ido."],
      ["o", "I hadn't seen the email before the meeting.", "No había visto el email antes de la reunión."],
      ["s", "Llegaste a la fiesta y tus amigos ya no estaban: se habían ido antes.", "When I arrived, my friends had left.", [["When I arrived, my friends left.", "Significa que se fueron justo cuando llegaste (después). Si se fueron antes: «had left»."], ["When I arrived, my friends have left.", "No se mezcla «arrived» (pasado) con «have left»: es «had left»."]], "Se fueron ANTES de que llegaras → had + participio. «My friends left» significaría que se fueron justo al llegar tú."],
      ["f", "She had already eaten when we arrived.", [["She had already ate when we arrived.", "Después de «had» va el participio: «eaten»."], ["She has already eaten when we arrived.", "Con «arrived» (pasado) va «had eaten», no «has»."]], "Had + participio (eaten)."]
    ]
  },
  {
    id: "past-perfect-continuous", name: "Past perfect continuous", time: "past", aspect: "perfcont", level: "B2", esEx: "llevaba dos horas trabajando", tl: "pastpastdur",
    idea: "Cuánto tiempo llevaba pasando algo antes de un momento del pasado.",
    form: {
      aff: ["Sujeto + had been + verbo-ing", "I had been waiting for an hour when he arrived.", "She'd been working there for years."],
      neg: ["Sujeto + hadn't been + verbo-ing", "I hadn't been sleeping well.", "They hadn't been working there long."],
      q: ["Had + sujeto + been + verbo-ing?", "How long had you been living there?", "Had it been raining?"]
    },
    short: "Yes, I had. · No, it hadn't.",
    uses: [
      ["Cuánto tiempo llevaba algo antes de otro momento pasado", "I had been working there for five years when the gallery closed.", "Llevaba cinco años trabajando allí cuando cerró la galería."],
      ["La causa visible de algo pasado", "The streets were wet because it had been raining.", "Las calles estaban mojadas porque había estado lloviendo."],
      ["Dar contexto al contar historias", "We had been walking for hours, so we stopped for pastizzi.", "Llevábamos horas caminando, así que paramos a comer pastizzi."]
    ],
    signals: ["for", "since", "How long…?", "before", "when", "all day"],
    tricks: [
      "«Llevaba + tiempo + -ando / -iendo» = had been + -ing. «Llevaba una hora esperando» = «I had been waiting for an hour».",
      "Es el present perfect continuous trasladado al pasado: I've been waiting (llevo) → I had been waiting (llevaba).",
      "Se usa poco al hablar. Lo importante es reconocerlo cuando lo leas o lo escuches. No te agobies con él."
    ],
    mistakes: [
      ["I was waiting for two hours when he came.", "I had been waiting for two hours when he came.", "Con duración hasta un momento pasado (llevaba) → had been + -ing."],
      ["She had been knowing him for years.", "She had known him for years.", "«Know» no va en -ing; su participio es known."]
    ],
    ex: [
      ["g", "I ___ (wait) for an hour when the bus finally came.", "had been waiting", [["have been waiting", "La historia es pasada (came): «had been waiting» (llevaba esperando)."], ["was waited", "Eso es pasiva (fue esperado); tú esperabas: «had been waiting»."], ["had waiting", "Falta «been»: «had been waiting»."]], "Llevaba una hora esperando → had been + -ing."],
      ["g", "Her eyes were red because she ___ (cry).", "had been crying", [["has been crying", "La historia es pasada (were red): «had been crying»."], ["had cried been", "El orden es «had been crying»."], ["was cry", "Falta -ing y el «had been»: «had been crying»."]], "Causa visible de algo pasado → had been + -ing."],
      ["g", "How long ___ you been working there before you left?", "had", [["have", "Es antes de que te fueras (left, pasado): «had you been»."], ["were", "«Were» no va con «been»."], ["did", "«Did» no va con «been»."]], "Duración antes de un momento pasado → How long had you been…?"],
      ["g", "We ___ (drive) for six hours, so we were exhausted.", "had been driving", [["have been driving", "Estabais agotados en el pasado (were): «had been driving»."], ["had been drive", "Después de «been» va -ing: «driving»."], ["are driving", "Es presente; la historia es pasada."]], "Llevábamos seis horas → had been + -ing."],
      ["t", "They ___ (talk) for hours when the waiter asked them to leave.", ["had been talking", "'d been talking"], "Llevaban horas hablando cuando el camarero les pidió que se fueran.", "Llevaban + tiempo → had been + -ing."],
      ["t", "The ground was wet because it ___ (rain).", ["had been raining", "'d been raining"], "El suelo estaba mojado porque había estado lloviendo.", "Causa visible en el pasado → had been + -ing."],
      ["t", "She ___ (work) at the gallery for two years when she got promoted.", ["had been working", "'d been working"], "Llevaba dos años trabajando en la galería cuando la ascendieron.", "Duración antes de otro momento pasado → had been + -ing."],
      ["o", "I had been waiting for an hour.", "Llevaba una hora esperando."],
      ["o", "How long had you been working there?", "¿Cuánto tiempo llevabas trabajando allí?"],
      ["s", "Cuentas que cuando por fin te llamó la empresa, llevabas tres meses buscando trabajo.", "I had been looking for a job for three months when they called me.", [["I have been looking for a job for three months when they called me.", "Con «called» (pasado) va «had been looking», no «have»."], ["I looked for a job since three months when they called me.", "Con una duración va «for», no «since», y hace falta «had been looking»."]], "Llevaba + tiempo antes de otro momento pasado → had been + -ing."],
      ["f", "We had been walking all day, so we were tired.", [["We had been walk all day, so we were tired.", "Después de «been» va -ing: «walking»."], ["We have been walking all day, so we were tired.", "Con «were tired» (pasado) va «had been walking»."]], "Had been + verbo-ing (walking)."]
    ]
  },

  /* ===================== FUTURE ===================== */
  {
    id: "future-will", name: "Future simple (will)", time: "future", aspect: "simple", level: "A2", esEx: "trabajaré · te ayudo", tl: "future",
    idea: "Decisiones del momento, promesas, ofrecimientos y predicciones (lo que crees que pasará).",
    form: {
      aff: ["Sujeto + will + verbo (forma base)", "I'll call you later.", "It will be hot tomorrow."],
      neg: ["Sujeto + won't + verbo", "I won't tell anyone.", "It won't take long."],
      q: ["Will + sujeto + verbo?", "Will you help me?", "Will it be expensive?"]
    },
    short: "Yes, I will. · No, it won't.",
    uses: [
      ["Decisiones que tomas en el momento", "The phone's ringing. I'll get it!", "Está sonando el teléfono. ¡Ya lo cojo yo!"],
      ["Ofrecimientos y promesas", "I'll help you with your CV, I promise.", "Te ayudo con tu CV, te lo prometo."],
      ["Predicciones y opiniones (I think…)", "I think you'll get the job.", "Creo que conseguirás el trabajo."],
      ["Pedir algo (Will you…?)", "Will you close the window, please?", "¿Cierras la ventana, por favor?"]
    ],
    signals: ["I think", "probably", "I'm sure", "maybe", "I promise", "tomorrow", "next week", "one day"],
    tricks: [
      "Will nunca lleva «to» detrás ni cambia: I will go, she will go (no «she wills», no «will to go»).",
      "Cuando en español ofreces algo en el momento («ahora te lo traigo», «yo te ayudo»), en inglés es will: «I'll bring it», «I'll help you».",
      "Después de when, if, as soon as, before y after NO se pone will: «I'll call you when I arrive», no «when I will arrive».",
      "Para ofrecer o proponer, los británicos usan shall con I / we: «Shall I open the window?» «Shall we go?»",
      "Contracciones: I'll, you'll, it'll. La negativa won't suena «uóunt» (rima con don't): no la confundas con want."
    ],
    mistakes: [
      ["I will to call you.", "I will call you.", "Después de will, verbo sin to."],
      ["I'll tell you when I will know.", "I'll tell you when I know.", "Después de when, presente."],
      ["I go to call him.", "I'm going to call him.", "«Voy a» no es «I go to»: es «I'm going to» (o «I'll call him» si lo decides ahora)."]
    ],
    ex: [
      ["g", "It's cold in here. I ___ (close) the window.", "will close", [["close", "El presente no expresa una decisión ahora; se dice «I'll close»."], ["am close", "No se mezcla «am» con el verbo base; la decisión del momento es «will close»."], ["closed", "Es pasado; lo vas a hacer ahora: «will close»."]], "Decisión en el momento → will."],
      ["g", "I think it ___ (rain) later.", "will rain", [["rains", "Una predicción con «I think» va con will: «will rain»."], ["is raining", "Eso es ahora mismo; «later» pide futuro: «will rain»."], ["rained", "Es pasado; hablas de luego."]], "Predicción con I think → will."],
      ["g", "Don't worry, I ___ (not / tell) anyone.", "won't tell", [["don't tell", "Una promesa de futuro va con will: «won't tell»."], ["will not to tell", "Después de will no va «to»: «will not tell»."], ["won't to tell", "Después de won't no va «to»: «won't tell»."]], "Promesa → won't + verbo sin to."],
      ["g", "I'll call you when I ___ (arrive).", "arrive", [["will arrive", "Después de «when» (futuro) va presente, no will: «when I arrive»."], ["arriving", "Falta el verbo conjugado: «when I arrive»."], ["arrived", "Es pasado; hablas del futuro y después de «when» va presente."]], "Después de when, presente (no will)."],
      ["g", "___ I help you with those bags?", "Shall", [["Will", "«Will I help you?» pregunta por el futuro; para ofrecerte se dice «Shall I…?»."], ["Do", "«Do I help you?» pregunta por una costumbre; para ofrecer: «Shall I…?»."], ["Am", "«Am» no va con el verbo base: «Shall I help you?»."]], "Para ofrecerte: Shall I…? (muy británico)."],
      ["t", "Maybe she ___ (be) late.", ["will be", "'ll be"], "Quizás llegue tarde.", "Predicción con maybe → will be."],
      ["t", "I promise I ___ (send) it tomorrow.", ["will send", "'ll send"], "Te prometo que lo envío mañana.", "Promesa → will + verbo."],
      ["t", "I ___ (not / forget) your birthday.", ["won't forget", "will not forget"], "No me olvidaré de tu cumpleaños.", "Negativa: won't + verbo."],
      ["o", "I'll call you later.", "Te llamo luego."],
      ["o", "I think you will get the job.", "Creo que conseguirás el trabajo."],
      ["s", "Tu compañero dice que no tiene bolígrafo. Le ofreces el tuyo en el momento.", "I'll lend you mine.", [["I lend you mine.", "El presente no sirve para ofrecer algo en el momento: «I'll lend you mine»."], ["I'm going to lend you mine.", "Going to suena a plan pensado antes; lo decides ahora: will."]], "Decisión espontánea, en el momento → will."],
      ["f", "I'll tell you when I know.", [["I'll tell you when I will know.", "Después de «when» no va will: «when I know»."], ["I tell you when I will know.", "Al revés: la parte principal lleva will y la de «when» va en presente."]], "Después de when, presente; en la parte principal, will."]
    ]
  },
  {
    id: "going-to", name: "Be going to", time: "future", aspect: "simple", level: "A2", esEx: "voy a trabajar", tl: "goingto", extra: true,
    idea: "Planes e intenciones que ya decidiste, y predicciones con pruebas que estás viendo.",
    form: {
      aff: ["Sujeto + am / is / are + going to + verbo", "I'm going to apply for that job.", "It's going to rain."],
      neg: ["Sujeto + am not / isn't / aren't + going to + verbo", "I'm not going to give up.", "They aren't going to come."],
      q: ["Am / Is / Are + sujeto + going to + verbo?", "Are you going to call her?", "What are you going to do?"]
    },
    short: "Yes, I am. · No, they aren't.",
    uses: [
      ["Planes e intenciones ya decididos", "I'm going to take an English exam in June.", "Voy a hacer un examen de inglés en junio."],
      ["Predicción con pruebas que ves", "Look at those clouds. It's going to rain.", "Mira esas nubes. Va a llover."],
      ["Algo a punto de pasar", "Watch out! You're going to fall!", "¡Cuidado! ¡Te vas a caer!"]
    ],
    signals: ["tomorrow", "next week", "this summer", "soon", "Look!", "in June"],
    tricks: [
      "Es el «voy a…» del español casi palabra por palabra: voy a llamar = I'm going to call. ¡No olvides am / is / are!",
      "Will = lo decides ahora. Going to = ya lo habías decidido. «I'll buy some milk» (se te ocurre ahora) vs «I'm going to buy a new laptop» (ya lo pensaste).",
      "Al hablar rápido suena «gonna»: «I'm gonna call her». Entiéndelo, pero escríbelo completo en emails de trabajo.",
      "No es técnicamente un «tiempo verbal», pero es una de las formas de futuro que más vas a usar."
    ],
    mistakes: [
      ["I going to call her.", "I'm going to call her.", "Falta am / is / are."],
      ["She is going to calls you.", "She is going to call you.", "Después de going to, forma base."],
      ["I go to study tonight.", "I'm going to study tonight.", "«Voy a» = am going to, no «go to»."]
    ],
    ex: [
      ["g", "Look at the sky! It ___ (rain).", "is going to rain", [["will rain", "«Will» es una opinión; si lo estás viendo venir (Look at the sky!), «going to»."], ["rains", "El presente no expresa predicción: «is going to rain»."], ["going to rain", "Falta el verbo be: «is going to rain»."]], "Predicción con pruebas que ves → going to."],
      ["g", "I ___ (apply) for the job at the museum. I decided last night.", "am going to apply", [["will apply", "Will es para decisiones del momento; lo decidiste anoche: «am going to apply»."], ["apply", "El presente no expresa una intención futura."], ["going to apply", "Falta el verbo be: «am going to apply»."]], "Plan decidido antes de hablar → going to."],
      ["g", "What ___ you going to do this weekend?", "are", [["do", "Con going to, el auxiliar es be: «What are you going to do?»."], ["will", "No se mezcla will con going to."], ["is", "Con you va «are»."]], "Pregunta: are + you + going to + verbo."],
      ["g", "She ___ (not / take) the job. The salary is too low.", "isn't going to take", [["won't to take", "Después de won't no va «to»; y ya lo decidió: «isn't going to take»."], ["not going to take", "Falta el verbo be: «isn't going to take»."], ["doesn't going to take", "Going to va con be, no con do: «isn't going to take»."]], "Decisión ya tomada → isn't going to + verbo."],
      ["t", "We ___ (visit) Gozo next month.", ["are going to visit", "'re going to visit", "are visiting", "'re visiting"], "Vamos a visitar Gozo el mes que viene.", "Plan decidido → are going to + verbo."],
      ["t", "Be careful! You ___ (drop) the plates!", ["are going to drop", "'re going to drop"], "¡Cuidado! ¡Se te van a caer los platos!", "Algo a punto de pasar, lo estás viendo → going to."],
      ["t", "I ___ (not / give) up.", ["'m not going to give", "am not going to give"], "No me voy a rendir.", "Intención firme → am not going to + verbo."],
      ["o", "I'm going to start a course in September.", "Voy a empezar un curso en septiembre."],
      ["o", "Are you going to call him?", "¿Lo vas a llamar?"],
      ["s", "Tu amiga te pregunta por tus planes de verano. Ya lo tienes decidido: vas a hacer un curso intensivo de inglés.", "I'm going to do an intensive English course.", [["I'll do an intensive English course.", "Will suena a que lo decides en ese momento; si ya lo tenías decidido: going to."], ["I do an intensive English course.", "El presente no expresa un plan futuro."]], "Plan ya decidido → going to. «I'll» sonaría a que lo decides en ese momento."],
      ["s", "Ves nubes negrísimas en el cielo.", "It's going to rain.", [["It rains.", "El presente simple es para hechos generales, no para una predicción."], ["It's raining tomorrow.", "El continuous de futuro es para planes organizados por personas, no para el tiempo."]], "Predicción con pruebas → going to."],
      ["f", "I'm going to call her tonight.", [["I going to call her tonight.", "Falta el verbo be: «I'm going to»."], ["I'm going to calling her tonight.", "Después de going to va la forma base: «call»."]], "Am + going to + forma base."]
    ]
  },
  {
    id: "future-continuous", name: "Future continuous", time: "future", aspect: "continuous", level: "B1–B2", esEx: "estaré trabajando", tl: "futprog",
    idea: "Lo que estará pasando en un momento concreto del futuro.",
    form: {
      aff: ["Sujeto + will be + verbo-ing", "This time tomorrow I'll be flying to London.", "I'll be working late tonight."],
      neg: ["Sujeto + won't be + verbo-ing", "I won't be using the car.", "She won't be working on Friday."],
      q: ["Will + sujeto + be + verbo-ing?", "Will you be using the printer?", "Will you be coming to the party?"]
    },
    short: "Yes, I will. · No, I won't.",
    uses: [
      ["En progreso en un momento futuro", "At ten tomorrow I'll be having my interview.", "Mañana a las diez estaré en mi entrevista."],
      ["Preguntar planes con educación", "Will you be using the meeting room this afternoon?", "¿Vas a usar la sala de reuniones esta tarde?"],
      ["Algo que pasará de todos modos", "I'll be seeing Tom at work, so I'll tell him.", "Veré a Tom en el trabajo de todos modos, así que se lo digo."]
    ],
    signals: ["this time tomorrow", "at eight tonight", "this time next week", "all day tomorrow"],
    tricks: [
      "Es el «estaré + -ando / -iendo» del español: estaré trabajando = I'll be working.",
      "«Will you be …ing?» es una forma muy educada de preguntar planes sin presionar. Ideal para el trabajo.",
      "Fórmula fija: will be + -ing, igual para todas las personas."
    ],
    mistakes: [
      ["This time tomorrow I will lie on the beach.", "This time tomorrow I'll be lying on the beach.", "En progreso en un momento futuro → will be + -ing."],
      ["I will being working.", "I will be working.", "Después de will va be (no being)."]
    ],
    ex: [
      ["g", "This time tomorrow I ___ (fly) to London.", "will be flying", [["will fly", "Para algo en progreso en un momento futuro (this time tomorrow): «will be flying»."], ["will flying", "Falta «be»: «will be flying»."], ["flew", "Es pasado; hablas de mañana."]], "En progreso en un momento futuro → will be + -ing."],
      ["g", "Don't call at eight. We ___ (have) dinner.", "will be having", [["will have", "«We'll have dinner» es empezar a cenar; a las ocho estaréis en plena cena: «will be having»."], ["have", "El presente no habla de ese momento futuro."], ["had", "Es pasado."]], "A las ocho estaremos en plena cena → will be + -ing."],
      ["g", "___ you be using the car tonight?", "Will", [["Are", "«Are you be» no existe; es «Will you be…?»."], ["Do", "«Do» no va con «be using»."], ["Shall", "«Shall» es para ofrecer o proponer con I / we; aquí es «Will you be…?»."]], "Pregunta educada: Will + you + be + -ing?"],
      ["t", "At three I ___ (work), so call me later.", ["will be working", "'ll be working"], "A las tres estaré trabajando, así que llámame luego.", "Momento concreto del futuro → will be + -ing."],
      ["t", "I ___ (not / use) the printer this afternoon.", ["won't be using", "will not be using"], "No voy a usar la impresora esta tarde.", "Negativa: won't be + -ing."],
      ["t", "This time next week we ___ (lie) on a beach in Gozo.", ["will be lying", "'ll be lying"], "La semana que viene a esta hora estaremos tumbados en una playa de Gozo.", "Will be + -ing. Lie → lying (ie → y)."],
      ["o", "I'll be working late tonight.", "Esta noche estaré trabajando hasta tarde."],
      ["o", "Will you be coming to the meeting?", "¿Vendrás a la reunión?"],
      ["s", "Quieres preguntarle a tu jefe, con mucha educación, si va a usar la sala esta tarde.", "Will you be using the room this afternoon?", [["Do you use the room this afternoon?", "Pregunta por una costumbre, no por esta tarde; lo educado es «Will you be using…?»."], ["Are you use the room this afternoon?", "No se mezcla «are» con el verbo base."]], "Will you be …ing? es la forma más educada de preguntar planes."],
      ["f", "I'll be waiting for you at the station.", [["I'll be wait for you at the station.", "Después de «be» va -ing: «waiting»."], ["I'll waiting for you at the station.", "Falta «be»: «I'll be waiting»."]], "Will be + verbo-ing."]
    ]
  },
  {
    id: "future-perfect", name: "Future perfect", time: "future", aspect: "perfect", level: "B2", esEx: "habré terminado", tl: "futperf",
    idea: "Lo que ya habrá terminado antes de un momento del futuro.",
    form: {
      aff: ["Sujeto + will have + participio", "I'll have finished the project by Friday.", "She will have left by then."],
      neg: ["Sujeto + won't have + participio", "I won't have finished by five.", "They won't have arrived yet."],
      q: ["Will + sujeto + have + participio?", "Will you have finished by Monday?", "Will they have arrived by then?"]
    },
    short: "Yes, I will. · No, they won't.",
    uses: [
      ["Algo terminado antes de un momento futuro", "I'll have sent the designs by Friday.", "Para el viernes habré enviado los diseños."],
      ["Cuentas y aniversarios", "In June I'll have lived in Malta for three years.", "En junio hará tres años que vivo en Malta."]
    ],
    signals: ["by Friday", "by then", "by the time", "by the end of the month", "before"],
    tricks: [
      "«By» es la palabra clave: by Friday = para el viernes (como muy tarde).",
      "Es el «habré + participio» del español: habré terminado = I'll have finished.",
      "Se usa sobre todo en el trabajo para hablar de plazos: «We'll have finished the installation by Monday».",
      "Después de will siempre have (nunca has): She will have finished."
    ],
    mistakes: [
      ["I will have finish by Friday.", "I will have finished by Friday.", "Will have + participio (finished)."],
      ["She will has left.", "She will have left.", "Después de will, siempre have."],
      ["I'll finish it until Friday.", "I'll have finished it by Friday.", "Para un plazo se usa by, no until."]
    ],
    ex: [
      ["g", "By Friday, I ___ (finish) the report.", "will have finished", [["have finished", "«By Friday» es futuro: «will have finished»."], ["will have finish", "Después de «have» va el participio: «finished»."], ["am finishing", "Eso es lo que haces ahora; para un plazo futuro: «will have finished»."]], "Terminado antes de un momento futuro (by) → will have + participio."],
      ["g", "By the time you arrive, we ___ (eat).", "will have eaten", [["will have ate", "Después de «have» va el participio: «eaten»."], ["have eaten", "Hablas del futuro (you arrive): «will have eaten»."], ["will eaten", "Falta «have»: «will have eaten»."]], "Will have + participio (eaten)."],
      ["g", "Next year I ___ (work) here for ten years.", "will have worked", [["will work", "«Will work here for ten years» sería trabajar diez años a partir de ahora; el aniversario es «will have worked»."], ["have worked", "«Next year» pide futuro: «will have worked»."], ["am working", "Es presente; hablas del año que viene."]], "Aniversario en el futuro → will have + participio."],
      ["t", "By the end of the month, she ___ (move) to her new flat.", ["will have moved", "'ll have moved"], "Para final de mes, se habrá mudado a su piso nuevo.", "Will have + participio (moved)."],
      ["t", "By tomorrow they ___ (not / fix) the printer.", ["won't have fixed", "will not have fixed"], "Para mañana no habrán arreglado la impresora.", "Negativa: won't have + participio."],
      ["t", "Will you ___ (finish) by six?", ["have finished"], "¿Habrás terminado para las seis?", "Pregunta: Will + you + have + participio?"],
      ["o", "I'll have finished by Friday.", "Habré terminado para el viernes."],
      ["o", "Will you have finished the designs by Monday?", "¿Habrás terminado los diseños para el lunes?"],
      ["s", "Le dices a un cliente que los planos estarán terminados, como muy tarde, el lunes.", "We'll have finished the plans by Monday.", [["We finish the plans until Monday.", "Para un plazo se usa «by», no «until», y hace falta «will have finished»."], ["We have finished the plans by Monday.", "Es un plazo futuro: «will have finished»."]], "Plazo futuro con by → will have + participio."],
      ["f", "She will have left by then.", [["She will has left by then.", "Después de will siempre «have», nunca «has»."], ["She will have leave by then.", "Después de «have» va el participio: «left»."]], "Will + have (siempre) + participio (left)."]
    ]
  },
  {
    id: "future-perfect-continuous", name: "Future perfect continuous", time: "future", aspect: "perfcont", level: "B2", esEx: "llevaré cinco años trabajando", tl: "futperfdur",
    idea: "Cuánto tiempo llevarás haciendo algo en un momento del futuro.",
    form: {
      aff: ["Sujeto + will have been + verbo-ing", "In May I'll have been living here for two years.", "By six she'll have been working for ten hours."],
      neg: ["Sujeto + won't have been + verbo-ing", "I won't have been waiting long.", "They won't have been working there long."],
      q: ["Will + sujeto + have been + verbo-ing?", "How long will you have been studying by then?", "Will she have been working all day?"]
    },
    short: "Yes, I will. · No, she won't.",
    uses: [
      ["Duración hasta un momento futuro", "By June, I'll have been learning English for two years.", "En junio llevaré dos años aprendiendo inglés."],
      ["Explicar cómo estará alguien", "She'll be tired. She'll have been working since seven.", "Estará cansada. Llevará trabajando desde las siete."]
    ],
    signals: ["by… for", "by the time", "by then", "for", "since"],
    tricks: [
      "«Llevaré + tiempo + -ando / -iendo» = will have been + -ing.",
      "Fórmula larga pero fija: will have been + -ing para todas las personas.",
      "Es el tiempo menos usado del inglés. Con reconocerlo es suficiente: en la vida real casi siempre puedes decirlo de forma más simple."
    ],
    mistakes: [
      ["By June I will be learning English for two years.", "By June I'll have been learning English for two years.", "Duración hasta un punto futuro → will have been + -ing."],
      ["I will have be working.", "I will have been working.", "Es have been (participio de be)."]
    ],
    ex: [
      ["g", "By December, I ___ (live) in Malta for three years.", "will have been living", [["will be living", "Para la duración hasta diciembre: «will have been living»."], ["have been living", "«By December» es futuro: «will have been living»."], ["will have living", "Falta «been»: «will have been living»."]], "Llevaré tres años → will have been + -ing."],
      ["g", "When she retires, she ___ (teach) for forty years.", "will have been teaching", [["will teach", "Sería enseñar 40 años a partir de ahora; la duración acumulada es «will have been teaching»."], ["has been teaching", "Hablas del momento en que se jubile (futuro): «will have been teaching»."], ["will have been teach", "Después de «been» va -ing: «teaching»."]], "Duración hasta un momento futuro → will have been + -ing."],
      ["g", "How long ___ you have been working here by next summer?", "will", [["do", "No se mezcla «do» con «have been»."], ["have", "Ya hay «have» después; falta «will» delante."], ["are", "No se mezcla «are» con «have been»."]], "How long + will + sujeto + have been + -ing?"],
      ["t", "By six, I ___ (work) for ten hours.", ["will have been working", "'ll have been working"], "A las seis llevaré diez horas trabajando.", "Llevaré + tiempo → will have been + -ing."],
      ["t", "Next month we ___ (go) out for a year.", ["will have been going", "'ll have been going"], "El mes que viene llevaremos un año saliendo juntos.", "Will have been + -ing (go out = salir con alguien)."],
      ["o", "By June I will have been learning English for two years.", "En junio llevaré dos años aprendiendo inglés."],
      ["s", "Quieres decir que en septiembre llevarás un año trabajando en la galería.", "In September I'll have been working at the gallery for a year.", [["In September I'm working at the gallery for a year.", "El presente no sirve para «llevaré X tiempo»: «will have been working»."], ["In September I've been working at the gallery for a year.", "Es un momento futuro (in September): «will have been working»."]], "Duración hasta un momento futuro → will have been + -ing."],
      ["f", "By then we'll have been waiting for hours.", [["By then we'll have been wait for hours.", "Después de «been» va -ing: «waiting»."], ["By then we'll be waited for hours.", "Eso sería pasiva (seremos esperados); es «will have been waiting»."]], "Will have been + verbo-ing."]
    ]
  }
  ],

  /* ===================== COMPARISONS ===================== */
  compare: [
    {
      id: "simple-vs-continuous", title: "Present simple vs present continuous", tenses: ["present-simple", "present-continuous"],
      idea: "¿Siempre o ahora? El simple es para lo habitual o permanente; el continuous, para lo que pasa ahora o es temporal.",
      cols: ["Present simple", "Present continuous"],
      rows: [
        ["Para qué", "Rutinas, hechos, gustos", "Ahora mismo, algo temporal, planes"],
        ["Ejemplo", "I work in Sliema.", "I'm working from home this week."],
        ["Palabras clave", "always, usually, every day", "now, at the moment, this week"],
        ["Verbos de estado", "know, like, want, need → siempre aquí", "No se usan en -ing"]
      ],
      pairs: [
        ["I live in Sliema.", "Vivo en Sliema (es mi casa)."],
        ["I'm staying with a friend this month.", "Me quedo con una amiga este mes (temporal)."],
        ["What do you do?", "¿A qué te dedicas?"],
        ["What are you doing?", "¿Qué estás haciendo?"]
      ],
      trick: "«What do you do?» pregunta por tu trabajo. «What are you doing?» pregunta qué haces ahora mismo. ¡Es la confusión más típica!",
      ex: [
        ["g", "She usually walks to work, but today she ___ (take) the bus.", "is taking", [["takes", "«Takes» es una costumbre; hoy es algo distinto y temporal: «is taking»."], ["take", "Con she va -s, y además hoy es temporal: «is taking»."], ["taking", "Falta el verbo be: «is taking»."]], "Usually → rutina; today → algo distinto, temporal → is + -ing."],
        ["g", "Water ___ (boil) at 100 degrees.", "boils", [["is boiling", "Un hecho científico va en simple; «is boiling» es que ahora mismo hierve."], ["boil", "Water = it: lleva -s, «boils»."], ["boiling", "Falta un verbo conjugado: «boils»."]], "Hecho científico → present simple."],
        ["g", "I ___ (not / understand) this word.", "don't understand", [["am not understanding", "«Understand» es un verbo de estado: no va en -ing."], ["not understand", "Falta el auxiliar: «don't understand»."], ["doesn't understand", "Con I va «don't»."]], "«Understand» es un verbo de estado: present simple."],
        ["s", "Quieres preguntarle a alguien a qué se dedica.", "What do you do?", [["What are you doing?", "Eso pregunta qué haces ahora mismo, no a qué te dedicas."], ["What do you doing?", "Mezcla los dos tiempos: o «What do you do?» o «What are you doing?»."]], "Trabajo = algo estable → present simple."],
        ["s", "Estás de vacaciones en Gozo y le escribes a una amiga.", "I'm having a great time in Gozo!", [["I have a great time in Gozo!", "Suena a costumbre (siempre lo paso bien); lo de estos días va en continuous."], ["I having a great time in Gozo!", "Falta el verbo be: «I'm having»."]], "Algo que está pasando estos días → continuous."],
        ["f", "I usually drink tea, but today I'm drinking coffee.", [["I'm usually drinking tea, but today I drink coffee.", "Está al revés: la costumbre va en simple y lo de hoy en continuous."], ["I usually drink tea, but today I drink coffee.", "Lo de hoy es temporal: «today I'm drinking»."]], "Rutina → simple; hoy, algo temporal → continuous."]
      ]
    },
    {
      id: "past-vs-perfect", title: "Past simple vs present perfect", tenses: ["past-simple", "present-perfect"],
      idea: "¿Sabes CUÁNDO pasó y ya terminó? Past simple. ¿No importa cuándo, o sigue conectado con ahora? Present perfect.",
      cols: ["Past simple", "Present perfect"],
      rows: [
        ["Para qué", "Momento terminado y concreto", "Experiencia, resultado ahora, hasta hoy"],
        ["Ejemplo", "I went to Rome in 2019.", "I've been to Rome."],
        ["Palabras clave", "yesterday, last year, ago, in 2019", "ever, never, just, already, yet, for, since"],
        ["Pregunta típica", "When did you…?", "Have you ever…?"]
      ],
      pairs: [
        ["I've lost my phone.", "He perdido el móvil (y sigo sin él)."],
        ["I lost my phone last week.", "Perdí el móvil la semana pasada."],
        ["I've worked at a gallery for two years.", "Trabajo en una galería desde hace dos años (sigo allí)."],
        ["I worked at a gallery for two years.", "Trabajé dos años en una galería (ya no)."]
      ],
      trick: "Así es una conversación típica: empiezas con present perfect («Have you ever been to Sicily?» «Yes, I have.») y, cuando das detalles, pasas a past simple («I went last summer. It was amazing.»).",
      ex: [
        ["g", "I ___ (meet) the director yesterday.", "met", [["have met", "«Yesterday» es un momento terminado: «met»."], ["meet", "Es presente; «yesterday» pide pasado."], ["have meet", "Después de have va el participio, y con yesterday no va present perfect."]], "Yesterday → past simple."],
        ["g", "I ___ (never / try) rabbit stew.", "have never tried", [["am never trying", "Una experiencia de tu vida se dice «have never tried»."], ["have never try", "Después de «have» va el participio: «tried»."], ["never try", "«I never try» = nunca lo intento (costumbre); la experiencia es «have never tried»."]], "Experiencia de tu vida → have + participio."],
        ["g", "She ___ (work) here since 2021.", "has worked", [["worked", "«Worked» sonaría a que ya no trabaja aquí; con since y sigue: «has worked»."], ["works", "El presente no va con «since»: «has worked»."], ["is working", "Con «since» no va el presente continuo: «has worked» o «has been working»."]], "Since + sigue hasta hoy → present perfect."],
        ["g", "When ___ you arrive in Malta?", "did", [["have", "«When» pregunta por un momento concreto y terminado: past simple, «did»."], ["do", "Es presente; llegaste en el pasado."], ["are", "«Are» no va con «arrive» en esta pregunta; es «When did you arrive?»."]], "When pregunta un momento concreto → past simple."],
        ["s", "En una entrevista cuentas que trabajaste cinco años en un estudio de arquitectura (ya no trabajas allí).", "I worked at an architecture studio for five years.", [["I've worked at an architecture studio for five years.", "Significaría que sigues trabajando allí."], ["I work at an architecture studio for five years.", "El presente no va con «for five years» y además ya no trabajas allí."]], "Ya no trabajas allí → past simple. «I've worked» significaría que sigues allí."],
        ["f", "I've already sent it.", [["I've sent it yesterday.", "Con «yesterday» va past simple: «I sent it yesterday»."], ["I already have send it.", "El orden es «have already» y va el participio: «sent»."]], "Already → present perfect (have + participio). Con yesterday sería past simple."]
      ]
    },
    {
      id: "past-simple-vs-continuous", title: "Past simple vs past continuous", tenses: ["past-simple", "past-continuous"],
      idea: "Simple = la acción completa y corta. Continuous = la acción en progreso, el fondo, lo largo.",
      cols: ["Past simple", "Past continuous"],
      rows: [
        ["Para qué", "Acción terminada; la que interrumpe", "Acción en progreso; la interrumpida"],
        ["Ejemplo", "…when the phone rang.", "I was cooking…"],
        ["Conector típico", "when", "while"],
        ["En español", "sonó, llegó", "estaba cocinando"]
      ],
      pairs: [
        ["I was cooking when the phone rang.", "Estaba cocinando cuando sonó el teléfono."],
        ["When the phone rang, I answered it.", "Cuando sonó el teléfono, contesté (una cosa después de la otra)."]
      ],
      trick: "Imagina una película: el continuous es la escena de fondo (llovía, la gente caminaba) y el simple es lo que pasa de repente (entonces alguien gritó).",
      ex: [
        ["g", "I ___ (walk) home when I saw Tom.", "was walking", [["walked", "Si caminabas cuando lo viste (acción en progreso), va continuous: «was walking»."], ["am walking", "Es presente; la historia es pasada."], ["were walking", "Con I va «was»."]], "Acción larga interrumpida → was + -ing."],
        ["g", "She was giving her presentation when the lights suddenly ___ (go) out.", "went", [["were going", "Suddenly = algo corto que pasa de golpe: past simple, «went»."], ["go", "Es presente; la historia es pasada."], ["gone", "«Gone» es participio: solo va con have / has / had."]], "Suddenly → acción corta que interrumpe → past simple."],
        ["g", "What ___ you doing when I called?", "were", [["did", "«Did» no va con -ing: «What were you doing?»."], ["was", "Con you va «were»."], ["are", "Es presente; «called» es pasado."]], "Acción en progreso → were + -ing."],
        ["s", "Cuentas una anécdota: estabais tumbados en la playa y de repente empezó a llover.", "We were lying on the beach when it started to rain.", [["We lay on the beach when it was starting to rain.", "Está al revés: lo largo (tumbados) en continuous y lo repentino (empezó) en simple."], ["We were lying on the beach when it was start to rain.", "No se mezcla «was» con el verbo base: «it started»."]], "Lo largo (tumbados) en continuous; lo repentino (empezó) en simple."],
        ["f", "I was having dinner when you called.", [["I was have dinner when you called.", "Después de «was» va -ing: «having»."], ["I having dinner when you called.", "Falta «was»: «I was having»."]], "Was + verbo-ing para la acción larga."]
      ]
    },
    {
      id: "perfect-vs-perfect-continuous", title: "Present perfect vs present perfect continuous", tenses: ["present-perfect", "present-perfect-continuous"],
      idea: "Simple = resultado, cuántos, terminado. Continuous = actividad, cuánto tiempo, puede que siga.",
      cols: ["Present perfect", "Present perfect continuous"],
      rows: [
        ["Se fija en", "El resultado (cuántos)", "La actividad (cuánto tiempo)"],
        ["Ejemplo", "I've written three emails.", "I've been writing emails all morning."],
        ["Pregunta", "How many…?", "How long…?"],
        ["Verbos de estado", "I've known her for years.", "No se usa"]
      ],
      pairs: [
        ["I've painted the room.", "He pintado la habitación (ya está pintada)."],
        ["I've been painting the room.", "He estado pintando la habitación (por eso tengo pintura en las manos; quizá no he terminado)."]
      ],
      trick: "Si puedes contar el resultado (tres emails, dos cuadros), usa el simple. Si hablas de cuánto tiempo llevas, usa el continuous.",
      ex: [
        ["g", "I ___ (read) three books this month.", "have read", [["have been reading", "Cuando cuentas cuántos (tres libros), va el simple: «have read»."], ["am reading", "Es lo que lees ahora; el resultado del mes es «have read»."], ["has read", "Con I va «have»."]], "Cuentas cuántos (resultado) → present perfect simple."],
        ["g", "I ___ (read) this book for weeks and I still haven't finished.", "have been reading", [["have read", "«Have read» significa que lo terminaste; aún no: «have been reading»."], ["am reading", "Con «for weeks» no va el presente: «have been reading»."], ["read", "En pasado sonaría terminado, y aún sigues."]], "Cuánto tiempo y aún no terminas → have been + -ing."],
        ["g", "We ___ (know) each other since school.", "have known", [["have been knowing", "«Know» es un verbo de estado: no va en -ing."], ["know", "Con «since» no va el presente: «have known»."], ["are knowing", "«Know» no va en -ing y con since va «have known»."]], "«Know» es de estado → present perfect simple."],
        ["s", "Tu amiga ve que tienes las manos llenas de pintura.", "I've been painting.", [["I've painted.", "Se fija en el resultado (está pintado); las manos manchadas muestran la actividad: «I've been painting»."], ["I paint.", "Eso dice que pintas en general, no lo que estuviste haciendo."]], "Actividad reciente que se nota → have been + -ing."],
        ["f", "She's sent ten applications this week.", [["She's been sending ten applications this week.", "Con un número (diez) se usa el simple: «She's sent»."], ["She sends ten applications this week.", "El presente no expresa el resultado de esta semana."]], "Cuántas (resultado) → present perfect simple."]
      ]
    },
    {
      id: "future-forms", title: "Will vs going to vs present continuous", tenses: ["future-will", "going-to", "present-continuous"],
      idea: "Will = lo decides ahora o lo predices. Going to = ya lo habías decidido o lo ves venir. Present continuous = ya está organizado (con hora, lugar u otra persona).",
      cols: ["Will", "Going to", "Present continuous"],
      rows: [
        ["Para qué", "Decisión en el momento, promesa, predicción", "Intención ya decidida, predicción con pruebas", "Plan organizado con hora, lugar u otra persona"],
        ["Ejemplo", "I'll call you back.", "I'm going to learn to drive.", "I'm meeting the recruiter at three."]
      ],
      pairs: [
        ["We've run out of milk. — I'll get some.", "Lo decide en ese momento."],
        ["I'm going to buy a bike this summer.", "Ya lo había pensado."],
        ["I'm flying to London on Friday.", "Ya tiene el billete."]
      ],
      trick: "Pregúntate: ¿lo acabo de decidir? → will. ¿Ya lo tenía pensado? → going to. ¿Está en mi agenda con hora? → present continuous.",
      ex: [
        ["s", "Suena el timbre y dices que abres tú.", "I'll get it!", [["I'm going to get it!", "Going to suena a plan pensado antes; abrir la puerta lo decides ahora: will."], ["I get it!", "«I get it» significa «lo entiendo»."]], "Decisión en el momento → will."],
        ["s", "Le cuentas a una amiga tu intención (aún sin fecha) de hacer un máster.", "I'm going to do a master's.", [["I do a master's.", "El presente no expresa una intención futura."], ["I'm doing a master's at nine tomorrow.", "Present continuous es para algo ya organizado con fecha; aquí es una intención sin fecha: going to."]], "Intención ya decidida → going to."],
        ["s", "Ya quedaste con Sarah para comer mañana.", "I'm having lunch with Sarah tomorrow.", [["I have lunch with Sarah tomorrow.", "El present simple de futuro es para horarios fijos (trenes, clases), no para planes con amigos."], ["I'll have lunch with Sarah tomorrow.", "Will suena a decisión del momento; si ya quedasteis: «I'm having»."]], "Plan organizado con otra persona → present continuous."],
        ["g", "Look at that car! It ___ (crash)!", "is going to crash", [["will crash", "Will es una opinión; si lo estás viendo venir: «is going to crash»."], ["crashes", "El presente no expresa lo que está a punto de pasar."], ["is crash", "No se mezcla «is» con el verbo base."]], "Lo estás viendo venir → going to."],
        ["g", "I'm hungry. — Wait, I ___ (make) you a sandwich.", "will make", [["make", "El presente no expresa una oferta en el momento: «I'll make»."], ["am going to making", "Después de going to va la forma base, y lo decides ahora: will."], ["made", "Es pasado."]], "Decisión en el momento → will."],
        ["f", "What are you doing tonight?", [["What do you do tonight?", "Para preguntar planes se usa present continuous: «What are you doing tonight?»."], ["What will you doing tonight?", "Mezcla will con -ing sin «be»."]], "Preguntar planes → present continuous."]
      ]
    },
    {
      id: "past-vs-past-perfect", title: "Past simple vs past perfect", tenses: ["past-simple", "past-perfect"],
      idea: "Con dos acciones pasadas, el past perfect marca la que pasó PRIMERO.",
      cols: ["Past simple", "Past perfect"],
      rows: [
        ["Para qué", "La acción más reciente, o la historia en orden", "La acción anterior a otra pasada"],
        ["Ejemplo", "When I arrived…", "…the film had started."],
        ["En español", "llegué", "había empezado"]
      ],
      pairs: [
        ["When I arrived, the film started.", "Cuando llegué, empezó la película (al llegar yo)."],
        ["When I arrived, the film had started.", "Cuando llegué, la película ya había empezado."]
      ],
      trick: "Si cuentas las cosas en el orden en que pasaron, no necesitas past perfect: «I finished work and went home». Úsalo cuando cuentas algo «hacia atrás».",
      ex: [
        ["g", "When we got to the party, Tom ___ (already / go) home.", "had already gone", [["has already gone", "La historia es pasada (got): «had already gone»."], ["had already went", "Después de «had» va el participio: «gone»."], ["was already go", "No se mezcla «was» con el verbo base."]], "Se fue ANTES de que llegáramos → had + participio."],
        ["g", "I ___ (finish) work and then went to the gym.", "finished", [["had finish", "Después de «had» va participio, y contado en orden basta el past simple: «finished»."], ["have finished", "No se mezcla present perfect con «went» (pasado)."], ["finish", "Es presente; la historia es pasada."]], "Contado en orden → past simple."],
        ["g", "She didn't come to dinner because she ___ (already / eat).", "had already eaten", [["has already eaten", "La historia es pasada (didn't come): «had already eaten»."], ["had already ate", "Después de «had» va el participio: «eaten»."], ["was already eat", "No se mezcla «was» con el verbo base."]], "Comió antes de la cena → had + participio."],
        ["s", "Cuentas que llegaste a la estación y el último bus ya se había ido.", "When I got to the station, the last bus had left.", [["When I got to the station, the last bus left.", "Significa que salió justo al llegar tú; si ya se había ido: «had left»."], ["When I got to the station, the last bus has left.", "No se mezcla «got» (pasado) con «has left»."]], "Se fue antes de que llegaras → had + participio."],
        ["f", "He had never seen snow until he moved to London.", [["He has never seen snow until he moved to London.", "Con «moved» (pasado) va «had never seen»."], ["He had never saw snow until he moved to London.", "Después de «had» va el participio: «seen»."]], "Experiencia hasta un momento pasado → had + participio (seen)."]
      ]
    },
    {
      id: "time-words", title: "for, since, ago · already, yet, just", tenses: ["present-perfect", "past-simple"], first: "Palabra",
      idea: "Palabras pequeñas que deciden el tiempo verbal. Apréndelas y sabrás qué tiempo usar.",
      cols: ["Significa", "Se usa con"],
      rows: [
        ["for", "durante (cantidad de tiempo)", "for three years, for a week"],
        ["since", "desde (punto de inicio)", "since 2023, since Monday · present perfect"],
        ["ago", "hace (en el pasado)", "two years ago · past simple"],
        ["already", "ya (antes de lo esperado)", "I've already eaten · afirmativa"],
        ["yet", "ya (pregunta) · todavía (negativa)", "Have you eaten yet? · I haven't eaten yet · al final"],
        ["just", "acabar de", "I've just arrived"]
      ],
      pairs: [
        ["I've lived here for two years.", "Vivo aquí desde hace dos años."],
        ["I've lived here since 2023.", "Vivo aquí desde 2023."],
        ["I moved here two years ago.", "Me mudé aquí hace dos años."],
        ["Have you finished yet? — Not yet.", "¿Ya terminaste? — Todavía no."]
      ],
      trick: "«Hace» en español tiene dos traducciones: si la acción terminó, ago (I arrived two years ago); si sigue, for (I've been here for two years).",
      ex: [
        ["g", "I've worked here ___ March.", "since", [["for", "«For» va con duración (for three months); March es un punto de inicio: «since»."], ["ago", "«Ago» va detrás del tiempo y con past simple (three months ago)."], ["from", "«From» necesita un final (from March to May)."]], "March es un punto de inicio → since."],
        ["g", "I started this job three months ___.", "ago", [["for", "«For three months» sería durante tres meses; hace tres meses (y empecé) es «ago»."], ["since", "«Since» va con un punto de inicio y present perfect, no con «three months»."], ["yet", "«Yet» va en preguntas y negativas con present perfect."]], "Hace tres meses (terminado) → ago, con past simple."],
        ["g", "I haven't had lunch ___.", "yet", [["already", "«Already» va en afirmativas; en negativa, todavía no es «yet»."], ["just", "«Just» es acabar de; no encaja en negativa al final."], ["ago", "«Ago» necesita un tiempo delante (two hours ago) y va con past simple."]], "Todavía no, al final de una negativa → yet."],
        ["g", "She's ___ left. You missed her by a minute!", "just", [["yet", "«Yet» va en preguntas y negativas, al final de la frase."], ["ago", "«Ago» necesita un tiempo delante (a minute ago) y va con past simple."], ["since", "«Since» necesita un punto de inicio detrás."]], "Acaba de irse → just."],
        ["g", "I've been waiting ___ twenty minutes.", "for", [["since", "Veinte minutos es duración: «for». «Since» es para el punto de inicio (since ten o'clock)."], ["ago", "«Ago» va con past simple y detrás del tiempo."], ["during", "«During» es durante un evento; para duración: «for»."]], "Una cantidad de tiempo → for."],
        ["g", "I've ___ sent it. Check your inbox.", "already", [["yet", "«Yet» va en preguntas y negativas, al final; en afirmativa es «already»."], ["since", "«Since» necesita un punto de inicio detrás."], ["ago", "«Ago» necesita un tiempo delante y va con past simple."]], "Ya (afirmativa) → already."]
      ]
    }
  ],

  /* ===================== WHICH TENSE IS IT? (one clear verb per sentence) ===================== */
  which: [
    ["She works at an art gallery in Valletta.", "present-simple"],
    ["The bus leaves at quarter past seven every morning.", "present-simple"],
    ["I don't like spicy food.", "present-simple"],
    ["Do you speak Italian?", "present-simple"],
    ["I'm waiting for the bus right now.", "present-continuous"],
    ["Prices are going up everywhere.", "present-continuous"],
    ["Is she working from home today?", "present-continuous"],
    ["We aren't going out tonight.", "present-continuous"],
    ["I've never tried rabbit stew.", "present-perfect"],
    ["Have you finished the report yet?", "present-perfect"],
    ["She has just left the office.", "present-perfect"],
    ["We've lived in Gżira since 2022.", "present-perfect"],
    ["I've been learning English for a year.", "present-perfect-continuous"],
    ["How long have you been waiting?", "present-perfect-continuous"],
    ["It's been raining all morning.", "present-perfect-continuous"],
    ["I went to Gozo last weekend.", "past-simple"],
    ["Did you get the job?", "past-simple"],
    ["We didn't see the email.", "past-simple"],
    ["She moved to Malta two years ago.", "past-simple"],
    ["At nine last night I was watching a series.", "past-continuous"],
    ["What were you doing at eight?", "past-continuous"],
    ["They weren't listening to the presenter.", "past-continuous"],
    ["The meeting had already started.", "past-perfect"],
    ["She had never seen such an old city before.", "past-perfect"],
    ["Had you met him before the interview?", "past-perfect"],
    ["She had been working there for ten years.", "past-perfect-continuous"],
    ["We had been walking for hours.", "past-perfect-continuous"],
    ["How long had you been waiting?", "past-perfect-continuous"],
    ["I think it will rain tomorrow.", "future-will"],
    ["Don't worry, I'll help you.", "future-will"],
    ["Will you open the window, please?", "future-will"],
    ["I'm going to apply for that job.", "going-to"],
    ["Look out! You're going to fall!", "going-to"],
    ["Are you going to call her?", "going-to"],
    ["This time tomorrow I'll be flying to London.", "future-continuous"],
    ["Will you be using the printer this afternoon?", "future-continuous"],
    ["I'll be working late tonight.", "future-continuous"],
    ["I'll have finished the designs by Friday.", "future-perfect"],
    ["Will you have finished by six?", "future-perfect"],
    ["By then she'll have left.", "future-perfect"],
    ["By June I'll have been living here for two years.", "future-perfect-continuous"],
    ["In May she'll have been working here for a year.", "future-perfect-continuous"]
  ],

  /* ===================== IRREGULAR VERBS ===================== */
  irrGroups: [
    ["aaa", "Las 3 iguales", "Base, pasado y participio son iguales. ¡Las más fáciles! Ojo: read se escribe igual, pero en pasado suena «red»."],
    ["abb", "Pasado = participio", "El pasado y el participio son iguales. Muchos terminan en -ought / -aught (bought, thought, taught) o en -t (felt, kept, slept)."],
    ["iau", "Patrón i → a → u", "Cambia solo la vocal: begin, began, begun · drink, drank, drunk · swim, swam, swum."],
    ["aba", "Participio = base", "El participio vuelve a la forma base: come, came, come · run, ran, run."],
    ["abc", "Las 3 distintas", "Las tres formas cambian. Truco: muchos participios terminan en -n o -en (taken, given, written, known)."]
  ],
  irregular: [
    ["cost", "cost", "cost", "costar", "aaa"],
    ["cut", "cut", "cut", "cortar", "aaa"],
    ["hit", "hit", "hit", "golpear", "aaa"],
    ["hurt", "hurt", "hurt", "doler, hacer daño", "aaa"],
    ["let", "let", "let", "dejar, permitir", "aaa"],
    ["put", "put", "put", "poner", "aaa"],
    ["quit", "quit", "quit", "dejar (un trabajo, un hábito)", "aaa"],
    ["read", "read", "read", "leer", "aaa"],
    ["set", "set", "set", "fijar, poner", "aaa"],
    ["shut", "shut", "shut", "cerrar", "aaa"],
    ["bring", "brought", "brought", "traer", "abb"],
    ["build", "built", "built", "construir", "abb"],
    ["buy", "bought", "bought", "comprar", "abb"],
    ["catch", "caught", "caught", "atrapar, coger (un bus)", "abb"],
    ["feel", "felt", "felt", "sentir(se)", "abb"],
    ["find", "found", "found", "encontrar", "abb"],
    ["get", "got", "got", "conseguir, llegar, recibir", "abb"],
    ["have", "had", "had", "tener, tomar", "abb"],
    ["hear", "heard", "heard", "oír", "abb"],
    ["hold", "held", "held", "sostener, celebrar (un evento)", "abb"],
    ["keep", "kept", "kept", "guardar, mantener", "abb"],
    ["learn", "learnt", "learnt", "aprender", "abb"],
    ["leave", "left", "left", "irse, dejar", "abb"],
    ["lend", "lent", "lent", "prestar", "abb"],
    ["lose", "lost", "lost", "perder", "abb"],
    ["make", "made", "made", "hacer, fabricar", "abb"],
    ["mean", "meant", "meant", "significar, querer decir", "abb"],
    ["meet", "met", "met", "conocer, quedar con", "abb"],
    ["pay", "paid", "paid", "pagar", "abb"],
    ["say", "said", "said", "decir", "abb"],
    ["sell", "sold", "sold", "vender", "abb"],
    ["send", "sent", "sent", "enviar", "abb"],
    ["sit", "sat", "sat", "sentarse", "abb"],
    ["sleep", "slept", "slept", "dormir", "abb"],
    ["spend", "spent", "spent", "gastar, pasar (tiempo)", "abb"],
    ["stand", "stood", "stood", "estar de pie", "abb"],
    ["teach", "taught", "taught", "enseñar", "abb"],
    ["tell", "told", "told", "decir, contar", "abb"],
    ["think", "thought", "thought", "pensar, creer", "abb"],
    ["understand", "understood", "understood", "entender", "abb"],
    ["win", "won", "won", "ganar", "abb"],
    ["begin", "began", "begun", "empezar", "iau"],
    ["drink", "drank", "drunk", "beber", "iau"],
    ["ring", "rang", "rung", "sonar, llamar por teléfono", "iau"],
    ["sing", "sang", "sung", "cantar", "iau"],
    ["swim", "swam", "swum", "nadar", "iau"],
    ["become", "became", "become", "convertirse en, llegar a ser", "aba"],
    ["come", "came", "come", "venir", "aba"],
    ["run", "ran", "run", "correr", "aba"],
    ["be", "was / were", "been", "ser, estar", "abc"],
    ["break", "broke", "broken", "romper", "abc"],
    ["choose", "chose", "chosen", "elegir", "abc"],
    ["do", "did", "done", "hacer", "abc"],
    ["draw", "drew", "drawn", "dibujar", "abc"],
    ["drive", "drove", "driven", "conducir", "abc"],
    ["eat", "ate", "eaten", "comer", "abc"],
    ["fall", "fell", "fallen", "caer(se)", "abc"],
    ["fly", "flew", "flown", "volar", "abc"],
    ["forget", "forgot", "forgotten", "olvidar", "abc"],
    ["give", "gave", "given", "dar", "abc"],
    ["go", "went", "gone", "ir", "abc"],
    ["grow", "grew", "grown", "crecer, cultivar", "abc"],
    ["hide", "hid", "hidden", "esconder", "abc"],
    ["know", "knew", "known", "saber, conocer", "abc"],
    ["ride", "rode", "ridden", "montar (en bici, a caballo)", "abc"],
    ["see", "saw", "seen", "ver", "abc"],
    ["show", "showed", "shown", "mostrar, enseñar", "abc"],
    ["speak", "spoke", "spoken", "hablar", "abc"],
    ["steal", "stole", "stolen", "robar", "abc"],
    ["take", "took", "taken", "tomar, llevar", "abc"],
    ["throw", "threw", "thrown", "lanzar, tirar", "abc"],
    ["wake", "woke", "woken", "despertar(se)", "abc"],
    ["wear", "wore", "worn", "llevar puesto", "abc"],
    ["write", "wrote", "written", "escribir", "abc"]
  ],
  /* extra accepted answers (American or alternative forms) and notes */
  irrAlt: {
    "learnt": ["learned"],
    "got": ["gotten"],
    "was / were": ["was", "were", "was/were", "was or were"]
  },
  irrNote: {
    "get": "En británico el participio es got (I've got). «Gotten» es americano.",
    "learn": "En británico se dice mucho learnt; learned también es correcto.",
    "read": "Se escribe igual, pero el pasado y el participio suenan «red».",
    "be": "Pasado: I / he / she / it was · you / we / they were.",
    "go": "Been vs gone: «I've been to Rome» (fui y volví) · «She's gone to Rome» (está allí)."
  }
};
