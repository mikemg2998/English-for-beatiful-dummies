/* English For Beautiful Dummies — lesson content.
   To add lessons: append objects to LESSONS (same shape) and bump VERSION. The app picks them up on its next online load.
   phrases: [english, spanish, tip] · words: [english, spanish, 1 if British-specific] · dialogue: [speaker, english, spanish]
   quiz: [kind, prompt, [correct, wrong, wrong, wrong], explanation, [why wrong 1, why wrong 2, why wrong 3]]  (kind: translate | natural | complete | meaning) */
(function(){
const VERSION = '2026-10-19.1';
const SCEN = [
  {id:'work', name:'Trabajo', en:'At work', icon:'case', desc:'El día a día en la oficina y todo para conseguir trabajo.',
   subs:[{id:'job', name:'Looking for a job', desc:'Entrevistas, tu experiencia, CV y negociar el salario.'},{id:'igaming', name:'Looking for a job: iGaming', desc:'Empresas de iGaming en Malta: Game Presenter, Shuffler, turnos del estudio y diseño.'},{id:'office', name:'En la oficina', desc:'Emails, compañeros, llamadas y horarios.'}]},
  {id:'meet', name:'Reuniones', en:'Meetings', icon:'chat', desc:'Opinar, presentar tu trabajo y cerrar acuerdos.'},
  {id:'daily', name:'Día a día', en:'Out and about', icon:'bag', desc:'Tiendas, cafés, transporte, médico, piso y reservas.'},
  {id:'social', name:'Social', en:'With friends', icon:'people', desc:'Planes, anécdotas, humor, teorías, cotilleos, lo que amas y odias.'}
];
const LESSONS = [
{id:'work-1', scen:'work', sub:'office', title:'Emails y plazos de entrega', summary:'Pedir, recordar y negociar fechas por escrito sin sonar brusco.', level:'B1', mins:12,
 phrases:[
  ["I'm just following up on my last email.","Te escribo para dar seguimiento a mi último correo.","Recuerda algo pendiente sin sonar insistente."],
  ["Could you send it over by Friday?","¿Podrías enviármelo antes del viernes?","'Send over' = enviar. 'By' = a más tardar."],
  ["I've attached the report.","Te adjunto el informe.","Más natural hoy que el clásico 'Please find attached…'."],
  ["Sorry for the slow reply.","Perdón por la demora en responder.","Más cercano que 'I apologise for the delay'."],
  ["I'll get back to you by the end of the day.","Te respondo antes de que acabe el día.","'Get back to someone' = responder más tarde."],
  ["Could we push the deadline back to Monday?","¿Podríamos mover la fecha límite al lunes?","'Push back' = aplazar. Lo contrario es 'bring forward', muy británico."],
  ["Let me know if you have any questions.","Avísame si tienes alguna pregunta.","Cierre típico de email."]
 ],
 words:[["deadline","fecha límite"],["attach","adjuntar"],["follow up","dar seguimiento"],["chase up","insistir a alguien",1],["reply all","responder a todos"],["on hold","en pausa"],["draft","borrador"],["bring forward","adelantar (una fecha)",1]],
 dialogue:[
  ["Sarah","Hi Juan, I'm just following up on the sales report.","Hola Juan, te escribo por el informe de ventas."],
  ["Juan","Sorry for the slow reply. I'm nearly done.","Perdón por la demora. Ya casi lo termino."],
  ["Sarah","No worries. Could you send it over by Friday?","Tranquilo. ¿Me lo puedes enviar antes del viernes?"],
  ["Juan","Actually, could we push the deadline back to Monday? I'm still waiting on some figures.","La verdad, ¿podríamos pasar la fecha al lunes? Todavía espero unas cifras."],
  ["Sarah","Monday's fine. Just let me know if you get stuck.","El lunes está bien. Avísame si te atascas."],
  ["Juan","Will do. I'll get back to you by the end of the day.","Hecho. Te escribo antes de que acabe el día."]
 ],
 quiz:[
  ["translate","¿Cómo se dice «dar seguimiento» en un email?",["follow up","follow on","follow after","keep up"],"'Follow up' es la expresión estándar: 'I'm just following up on…'.",["«Follow on» = continuar a continuación; no es dar seguimiento.","No es una expresión: «follow» ya significa seguir, sin «after».","«Keep up» = mantener el ritmo o seguir al día, no dar seguimiento."]],
  ["natural","Tu jefa quiere el informe el viernes, pero necesitas más tiempo. ¿Qué dices?",["Could we push the deadline back to Monday?","Could we push the deadline forward to Monday?","Could we pass the deadline to Monday?","Could we push the deadline back of Monday?"],"'Push back' = aplazar. Pedirlo con 'Could we…?' suena educado.",["«Push forward» = adelantar. Tú quieres atrasar el plazo: «push back».","«Pass» no se usa con plazos; aplazar es «push back».","Hasta el lunes = «to Monday», no «of Monday»."]],
  ["complete","Please find ___ the invoice.",["attached","attaching","attach","to attach"],"La fórmula fija es 'Please find attached…'.",["Con «find» la fórmula usa el participio: «find attached», no la forma -ing.","Falta el participio: es «attached» (adjunto), no el verbo «attach».","«To attach» sería «para adjuntar»; la fórmula fija es «Please find attached»."]],
  ["translate","«Perdón por la demora en responder» (tono cercano)",["Sorry for the slow reply.","Sorry for answering lately.","Sorry for the late answer me.","Sorry for the slow replay."],"'Lately' significa 'últimamente', no 'tarde'. Error muy común.",["«Lately» significa «últimamente», no «tarde».","Sobra «me» al final: aquí la respuesta no lleva persona detrás.","«Replay» es la repetición de un vídeo; respuesta es «reply»."]],
  ["meaning","Si un colega dice «I'll chase him up», significa que…",["le va a insistir para que responda","lo va a alcanzar para hablar con él","lo va a perseguir para quejarse","lo va a animar a que siga"],"'Chase someone up' (muy británico) = recordarle algo pendiente con insistencia.",["Alcanzar a alguien es «catch up with»; «chase up» es insistirle con algo pendiente.","Es la traducción literal de «chase»; «chase up» es recordarle algo pendiente.","Animar es «cheer up» o «encourage», no «chase up»."]]
 ],
 rp:{who:'Sarah, tu jefa', role:'Sarah, your manager at a small marketing agency in Sliema', goal:'Tu jefa te pide un informe para el viernes. Pide más tiempo con educación y propón una nueva fecha.'}},

{id:'work-2', scen:'work', sub:'office', title:'Con tus compañeros', summary:'Pedir ayuda, contar que vas tarde y proponer un café.', level:'B1', mins:10,
 phrases:[
  ["Have you got a minute?","¿Tienes un momento?","'Have you got…?' es más británico que 'Do you have…?'."],
  ["I'm snowed under at the moment.","Estoy hasta arriba de trabajo ahora mismo.","Coloquial y muy usado en oficinas del Reino Unido."],
  ["Could you give me a hand with this?","¿Me echas una mano con esto?",""],
  ["I'm off on Friday.","El viernes tengo libre.","'Off' = de día libre. 'I'm off!' también significa 'me voy'."],
  ["Sorry, I'm running a bit late.","Perdón, voy un poco tarde.",""],
  ["Shall we grab a coffee?","¿Vamos por un café?","'Shall we…?' es la forma británica de proponer algo."],
  ["Leave it with me, I'll sort it out.","Déjamelo a mí, yo lo soluciono.","'Sort out' = arreglar u organizar. Imprescindible en UK."]
 ],
 words:[["sort out","solucionar"],["catch up","ponerse al día"],["take on","asumir (una tarea)"],["run through","repasar rápido"],["get on with","llevarse bien con"],["colleague","compañero de trabajo"],["annual leave","vacaciones (laborales)",1],["rota","turnos de trabajo",1]],
 dialogue:[
  ["Tom","Morning! Have you got a minute?","¡Buenos días! ¿Tienes un momento?"],
  ["Ana","Sure, but I'm a bit snowed under. What's up?","Claro, aunque estoy algo liada. ¿Qué pasa?"],
  ["Tom","The printer's broken again. Could you give me a hand?","La impresora se volvió a dañar. ¿Me echas una mano?"],
  ["Ana","Leave it with me, I'll sort it out after lunch.","Déjamelo, lo soluciono después de comer."],
  ["Tom","Cheers! By the way, I'm off on Friday, so let's catch up tomorrow.","¡Gracias! Por cierto, el viernes no estoy, así que nos ponemos al día mañana."],
  ["Ana","Sounds good. Shall we grab a coffee at ten?","Me parece bien. ¿Vamos por un café a las diez?"]
 ],
 quiz:[
  ["translate","«¿Me echas una mano?»",["Could you give me a hand?","Could you give me your hand?","Can you throw me a hand?","Could you give me an hand?"],"'Give someone a hand' = ayudar. 'Give me your hand' es literal: dame tu mano.",["Con «your» es literal: «dame tu mano». La expresión es «give me a hand».","Traducción literal de «echar». En inglés la mano se da: «give me a hand».","La h de «hand» suena, así que va «a», no «an»."]],
  ["meaning","«I'm snowed under» quiere decir…",["Tengo muchísimo trabajo","Tengo mucho frío","Estoy atascada con algo","Estoy de bajón"],"Imagina estar enterrado bajo la nieve: tantas tareas que no ves la salida.",["Es la trampa literal de «snow» (nieve). «Snowed under» = enterrada en trabajo.","Atascado en algo es «I'm stuck»; «snowed under» es tener demasiado trabajo.","Estar de bajón es «I'm feeling down»."]],
  ["complete","Don't worry, I'll ___ it out.",["sort","solve","fix","arrange"],"'Sort out' es un phrasal verb. 'Solve out' o 'fix out' no existen.",["«Solve» va sin «out»: «I'll solve it». «Solve out» no existe.","«Fix» va sin «out»: «I'll fix it». Con «out» se dice «sort it out».","«Arrange» = organizar o quedar; no existe «arrange it out»."]],
  ["natural","Quieres proponerle un café a un compañero, al estilo británico.",["Shall we grab a coffee?","We take a coffee?","Do you want that we drink coffee?","Let's to have a coffee."],"En inglés el café se 'grab' o se 'have', no se 'take'. 'Shall we…?' suena natural.",["Calco de «¿tomamos un café?»: falta el auxiliar (Shall we…?) y el café se «grab» o «have», no «take».","«Want that…» es calco del español; en inglés: «Do you want to…?».","Después de «let's» va el verbo sin «to»: «Let's have a coffee»."]],
  ["meaning","Si alguien dice «I'm off on Friday», significa que…",["el viernes tiene libre","el viernes sale antes del trabajo","el viernes está enfermo","el viernes deja el trabajo"],"'Be off' = no trabajar ese día.",["Salir antes es «leave early» o «finish early»; «be off» es no trabajar ese día.","Estar de baja es «be off sick». Sin «sick», «off» es día libre.","Dejar el trabajo es «quit» o «leave my job»."]]
 ],
 rp:{who:'Tom, un compañero de oficina', role:'Tom, a friendly colleague in an office in Malta', goal:'Pide ayuda a un compañero con un problema del trabajo y propón ir por un café después.'}},

{id:'meet-1', scen:'meet', title:'Dar tu opinión', summary:'Estar de acuerdo, discrepar con educación e intervenir.', level:'B1', mins:12,
 phrases:[
  ["From my point of view, we should wait.","Desde mi punto de vista, deberíamos esperar.",""],
  ["I see your point, but…","Entiendo lo que dices, pero…","Para no estar de acuerdo sin sonar brusco."],
  ["That's a fair point.","Es un buen punto / tienes razón en eso.",""],
  ["Sorry, can I just come in here?","Perdón, ¿puedo intervenir un momento?","La forma educada de interrumpir en una reunión."],
  ["To be honest, I'm not convinced.","Siendo sincero, no estoy convencido.","'Convinced' = convencido. 'Convincing' = convincente."],
  ["I'd go along with that.","Estoy de acuerdo con eso.",""],
  ["Could you clarify what you mean by that?","¿Podrías aclarar a qué te refieres con eso?",""]
 ],
 words:[["agree with","estar de acuerdo con"],["disagree","no estar de acuerdo"],["point of view","punto de vista"],["proposal","propuesta"],["however","sin embargo"],["on the other hand","por otro lado"],["bring up","sacar (un tema)"],["go along with","aceptar, apoyar"]],
 dialogue:[
  ["Mark","So, I think we should launch the campaign in March.","Bueno, creo que deberíamos lanzar la campaña en marzo."],
  ["Lucía","I see your point, but March is very busy for our clients.","Entiendo, pero marzo es un mes muy movido para nuestros clientes."],
  ["Mark","That's a fair point. What would you suggest?","Buen punto. ¿Qué propones?"],
  ["Lucía","From my point of view, April gives us more time. However, the budget is tight.","Desde mi punto de vista, abril nos da más tiempo. Sin embargo, el presupuesto es justo."],
  ["Priya","Sorry, can I just come in here? April works for marketing too.","Perdón, ¿puedo intervenir? A marketing también le sirve abril."],
  ["Mark","Great, then I'd go along with April.","Perfecto, entonces me quedo con abril."]
 ],
 quiz:[
  ["natural","Quieres interrumpir con educación en una reunión.",["Sorry, can I just come in here?","Sorry, can I just enter here?","Sorry, can I just come here?","Excuse, can I interrupt you?"],"'Come in' aquí significa intervenir en la conversación.",["«Enter» es entrar físicamente en un sitio; intervenir en una conversación es «come in».","«Come here» = ven aquí. Intervenir es «come in».","Falta «me»: «Excuse me». Y «come in here» suena más suave que «interrupt you»."]],
  ["translate","«Entiendo lo que dices, pero…»",["I see your point, but…","I look your point, but…","I watch what you mean, but…","I see your reason, but…"],"'See' también significa entender: 'I see' = ya veo.",["«Look» necesita «at» y es mirar; entender es «see».","«Watch» es mirar algo que se mueve (la tele); entender es «see».","Se dice «see your point» (tu argumento); «your reason» sería tu motivo."]],
  ["complete","The plan is good. ___, it's quite expensive.",["However","Although","Despite","Because"],"'However' va al inicio con coma. 'Although' necesita una oración: 'Although it's good, it's expensive.'",["«Although» une dos ideas en la misma frase: «Although it's good, it's expensive». No va suelto con coma.","«Despite» va con un nombre: «Despite the price…». No va suelto con coma.","«Because» da una causa; aquí hay un contraste."]],
  ["meaning","«I'd go along with that» significa…",["Estoy de acuerdo con eso","Iría con vosotros","Lo dejaría pasar","Me lo pensaría"],"'Go along with' = aceptar o apoyar una idea.",["Es el sentido literal de «go along» (acompañar). Con «with that» (una idea) es estar de acuerdo.","Dejar pasar es «let it go».","Pensármelo es «I'd think about it»."]],
  ["translate","«Siendo sincero, no estoy convencido.»",["To be honest, I'm not convinced.","Being sincere, I'm not convinced.","To be honest, I'm not convincing.","Honestly, I don't convince."],"'Being sincere' es traducción literal. Lo natural es 'To be honest'.",["Traducción literal; la fórmula natural es «To be honest».","«Convincing» = convincente (que convence a otros). Para cómo te sientes: «convinced».","«Convince» necesita a quién: «you don't convince me». Para tu estado: «I'm not convinced»."]]
 ],
 rp:{who:'Mark, el jefe de equipo', role:'Mark, a team lead in a planning meeting who wants to launch a new campaign in March', goal:'No estás de acuerdo con la fecha que propone. Da tu opinión con educación y propón otra.'}},

{id:'meet-2', scen:'meet', title:'Organizar y cerrar una reunión', summary:'Empezar, pasar de punto, repasar cifras y repartir tareas.', level:'B1', mins:10,
 phrases:[
  ["Shall we get started?","¿Empezamos?",""],
  ["Let's move on to the next point.","Pasemos al siguiente punto.","No digas 'pass to the next point'."],
  ["Could you run us through the figures?","¿Nos repasas las cifras?","'Run through' = repasar rápido."],
  ["We're running out of time.","Se nos está acabando el tiempo.",""],
  ["Let's wrap up.","Vamos cerrando.",""],
  ["Who's going to take this forward?","¿Quién se encarga de sacar esto adelante?",""],
  ["I'll send round the minutes.","Enviaré el acta a todos.","'Minutes' = acta de la reunión."]
 ],
 words:[["agenda","orden del día"],["minutes","acta"],["action points","tareas acordadas"],["wrap up","cerrar, terminar"],["run through","repasar"],["item","punto (de la agenda)"],["chair","dirigir una reunión"],["follow-up","seguimiento"]],
 dialogue:[
  ["Helen","Right, it's ten o'clock. Shall we get started?","Bueno, son las diez. ¿Empezamos?"],
  ["Juan","Sure. First item: the new website.","Claro. Primer punto: la nueva web."],
  ["Helen","Juan, could you run us through the figures?","Juan, ¿nos repasas las cifras?"],
  ["Juan","Of course. Visits are up twenty per cent since June.","Claro. Las visitas subieron un veinte por ciento desde junio."],
  ["Helen","Brilliant. We're running out of time, so let's wrap up. Who's taking this forward?","Genial. Se nos acaba el tiempo, así que vamos cerrando. ¿Quién se encarga?"],
  ["Juan","I will. I'll send round the minutes this afternoon too.","Yo. También enviaré el acta esta tarde."]
 ],
 quiz:[
  ["translate","«Pasemos al siguiente punto.»",["Let's move on to the next point.","Let's pass to the next point.","Let's move on the next point.","Let's move in to the next point."],"En reuniones se dice 'move on'. 'Pass' aquí es traducción literal.",["«Pass» aquí es traducción literal; en reuniones se dice «move on to».","Falta «to»: «move on to» + lo siguiente.","«Move in» es mudarse a un sitio."]],
  ["meaning","«The minutes» de una reunión son…",["el acta","los minutos que duró","el orden del día","las diapositivas"],"Ojo: 'minutes' también es 'minutos', pero en una reunión es el acta.",["Es la trampa: «minutes» también es minutos, pero en una reunión es el acta.","El orden del día es «the agenda».","Las diapositivas son «the slides»."]],
  ["complete","We're running ___ of time.",["out","off","away","down"],"'Run out of' = quedarse sin algo.",["«Run off» = salir corriendo o escaparse.","«Run away» = huir.","«Run down» = agotarse (una batería) o criticar; no va con «of time»."]],
  ["natural","Quieres terminar la reunión de forma natural.",["Let's wrap up.","Let's wrap.","Let's close up.","Let's roll up."],"'Wrap up' = cerrar, como envolver un regalo.",["Falta «up»: el phrasal verb es «wrap up».","«Close up» = cerrar un local; para terminar una reunión: «wrap up».","«Roll up» = enrollar (mangas, un mapa); cerrar una reunión es «wrap up»."]],
  ["translate","«¿Nos repasas las cifras?»",["Could you run us through the figures?","Could you repass the numbers?","Could you run the figures to us?","Can you revise us the figures?"],"En UK 'revise' es estudiar para un examen, no 'revisar'.",["«Repass» no existe con este sentido; repasar algo con alguien es «run through» o «go over».","El orden es «run us through the figures»: la persona va detrás de «run».","En UK «revise» es estudiar para un examen, y no lleva persona detrás."]]
 ],
 rp:{who:'Helen, quien dirige la reunión', role:'Helen, chairing a short team meeting in Valletta', goal:'Presenta un dato breve, acuerda quién se encarga de cada tarea y ayuda a cerrar la reunión.'}},

{id:'daily-1', scen:'daily', title:'En la tienda', summary:'Mirar, pedir tu talla, pagar y salir sin bolsa.', level:'A2', mins:8,
 phrases:[
  ["I'm just browsing, thanks.","Solo estoy mirando, gracias.",""],
  ["Have you got this in a medium?","¿Lo tienes en talla M?",""],
  ["Can I pay by card?","¿Puedo pagar con tarjeta?","Es 'by card', no 'with card'. En efectivo: 'in cash'."],
  ["Do you need a bag?","¿Necesitas bolsa?","Respuesta típica: 'No, I'm fine, thanks.'"],
  ["Where can I find the milk?","¿Dónde encuentro la leche?",""],
  ["Could I get a receipt, please?","¿Me da el recibo, por favor?",""],
  ["Is this on offer?","¿Esto está en oferta?",""]
 ],
 words:[["queue","fila, cola",1],["till","caja (para pagar)",1],["trolley","carrito",1],["aisle","pasillo"],["receipt","recibo"],["refund","reembolso"],["changing room","probador",1],["cheers","gracias (informal)",1]],
 dialogue:[
  ["Assistant","Hiya, are you alright there?","Hola, ¿todo bien? ¿Te ayudo?"],
  ["You","I'm just browsing, thanks. Actually, have you got this in a medium?","Solo estoy mirando, gracias. Bueno, ¿lo tienes en talla M?"],
  ["Assistant","Let me check… Yes, here you go. The changing rooms are at the back.","Déjame ver… Sí, aquí tienes. Los probadores están al fondo."],
  ["You","Perfect. Can I pay by card at this till?","Perfecto. ¿Puedo pagar con tarjeta en esta caja?"],
  ["Assistant","Of course. Do you need a bag?","Claro. ¿Necesitas bolsa?"],
  ["You","No, I'm fine, cheers.","No, así está bien, gracias."]
 ],
 quiz:[
  ["complete","Can I pay ___ card?",["by","with","in","on"],"'Pay by card', 'pay in cash'.",["Se dice «by card». «With» solo funciona con «my»: «with my card».","«In» es para efectivo: «in cash».","No se usa aquí; con tarjeta es «by card»."]],
  ["meaning","En el Reino Unido y Malta, «the till» es…",["la caja registradora","el mostrador","el carrito","el recibo"],"La oirás en frases como 'You can pay at the till'.",["El mostrador es «the counter».","El carrito es «the trolley».","El recibo es «the receipt»."]],
  ["natural","Un vendedor te ofrece ayuda, pero solo quieres mirar.",["I'm just browsing, thanks.","I'm just watching, thanks.","I'm just seeing, thanks.","I'm only browse, thanks."],"'Browse' = mirar sin buscar nada concreto.",["«Watch» es mirar algo que se mueve; en tiendas: «just looking» o «just browsing».","«See» no se usa así en continuo; se dice «I'm just looking».","Falta -ing: «I'm just browsing»."]],
  ["translate","«carrito del supermercado» (inglés británico)",["trolley","cart","basket","buggy"],"'Cart' es americano. En UK y Malta oirás 'trolley'.",["«Cart» es americano; en UK y Malta se dice «trolley».","«Basket» es la cesta que llevas en la mano.","En UK «buggy» es el cochecito de bebé."]],
  ["natural","Te preguntan «Do you need a bag?» y no la quieres.",["No, I'm fine, thanks.","No, I'm fine of it, thanks.","No, I don't need never.","No, I'm finish, thanks."],"'I'm fine' aquí significa 'así estoy bien'.",["Sobra «of it»: basta con «I'm fine, thanks».","Doble negación: sería «I don't need one».","«Finish» es terminar; «I'm fine» = así estoy bien."]]
 ],
 rp:{who:'un dependiente de una tienda de ropa', role:'a shop assistant in a clothes shop in Valletta', goal:'Busca una camiseta en tu talla, pregunta el precio y paga con tarjeta.'}},

{id:'daily-2', scen:'daily', title:'Café y restaurante', summary:'Pedir mesa, preguntar qué recomiendan y pedir la cuenta.', level:'A2', mins:8,
 phrases:[
  ["Could I get a flat white, please?","¿Me pones un flat white, por favor?","También vale 'Can I have…?'."],
  ["Is that to have in or take away?","¿Es para tomar aquí o para llevar?","UK: 'take away'. US: 'to go'."],
  ["Could we have a table for two?","¿Nos da una mesa para dos?",""],
  ["What would you recommend?","¿Qué me recomienda?","No digas 'What do you recommend me?'."],
  ["Does this have nuts in it?","¿Esto lleva frutos secos?",""],
  ["Could we get the bill, please?","¿Nos trae la cuenta, por favor?","UK: 'bill'. US: 'check'."],
  ["Shall we split it?","¿Dividimos la cuenta?",""]
 ],
 words:[["starter","entrante",1],["main","plato principal"],["pudding","postre (informal)",1],["tap water","agua del grifo"],["still / sparkling","sin gas / con gas"],["tip","propina"],["takeaway","comida para llevar",1],["booking","reserva",1]],
 dialogue:[
  ["Waiter","Hi there, have you got a booking?","Hola, ¿tienen reserva?"],
  ["You","No, sorry. Could we have a table for two?","No, perdón. ¿Nos da una mesa para dos?"],
  ["Waiter","Sure, follow me. Can I get you any drinks?","Claro, síganme. ¿Les traigo algo de beber?"],
  ["You","Just some tap water, please. What would you recommend for a main?","Solo agua del grifo, por favor. ¿Qué nos recomienda de plato principal?"],
  ["Waiter","The rabbit stew is lovely. It's a local speciality.","El estofado de conejo está buenísimo. Es típico de aquí."],
  ["You","Great, we'll have two. And could we get the bill when you've got a moment?","Genial, dos de esos. ¿Y nos trae la cuenta cuando pueda?"]
 ],
 quiz:[
  ["translate","«la cuenta» (en un restaurante del Reino Unido)",["the bill","the check","the account","the receipt"],"'Check' es americano. En UK y Malta se pide 'the bill'.",["«Check» es americano; en UK y Malta se pide «the bill».","«Account» es una cuenta bancaria o de usuario.","«Receipt» es el recibo que te dan después de pagar."]],
  ["complete","Is that to have in or ___ away?",["take","go","bring","carry"],"'Take away' = para llevar.",["«Go away» = vete. Para llevar es «take away».","«Bring» es traer hacia aquí; para llevar es «take away».","«Carry» = cargar; la expresión fija es «take away»."]],
  ["meaning","«Still or sparkling?» te lo preguntan por…",["el agua: sin gas o con gas","el café: solo o con leche","el vino: tinto o blanco","el agua: del grifo o embotellada"],"'Still water' = agua sin gas.",["Para el café preguntan «Black or white?».","Para el vino preguntan «Red or white?».","El agua del grifo es «tap water»; «still» es sin gas."]],
  ["natural","Quieres saber qué plato recomiendan.",["What would you recommend?","What do you recommend me?","Recommend me something to eat?","What is your recommend?"],"'Recommend me' suena mal en inglés. Usa 'What would you recommend?'.",["«Recommend» no lleva la persona así detrás: «What do you recommend?» o «What would you recommend?».","Falta el auxiliar de pregunta y «recommend me» suena mal.","«Recommend» es verbo; el nombre es «recommendation»."]],
  ["translate","«entrante» (primer plato, inglés británico)",["starter","entrée","entrance","first dish"],"'Entrance' es la entrada de un edificio. Falso amigo.",["Ojo: en americano «entrée» es el plato principal.","«Entrance» es la entrada de un edificio. Falso amigo.","Calco del español; en UK el primer plato es «starter»."]]
 ],
 rp:{who:'un camarero en La Valeta', role:'a waiter in a busy restaurant in Valletta', goal:'Pide una mesa, pregunta qué te recomiendan, haz tu pedido y luego pide la cuenta.'}},

{id:'daily-3', scen:'daily', title:'Transporte y direcciones', summary:'Buses, billetes y entender cómo llegar a un sitio.', level:'A2', mins:10,
 phrases:[
  ["Does this bus go to Valletta?","¿Este bus va a La Valeta?",""],
  ["Which stop do I get off at?","¿En qué parada me bajo?","Bus o tren: 'get on / get off'. Coche o taxi: 'get in / get out'."],
  ["How long does it take to get to Sliema?","¿Cuánto se tarda en llegar a Sliema?",""],
  ["Is it within walking distance?","¿Se puede ir caminando?",""],
  ["Go straight on and turn left at the roundabout.","Sigue recto y gira a la izquierda en la rotonda.","'Straight on' es británico. En US dicen 'straight ahead'."],
  ["It's just round the corner.","Está a la vuelta de la esquina.",""],
  ["Sorry, could you say that again?","Perdón, ¿lo puede repetir?",""]
 ],
 words:[["get on / get off","subir / bajar (del bus)"],["roundabout","rotonda",1],["pavement","acera",1],["traffic lights","semáforo"],["single","billete de ida",1],["return","billete de ida y vuelta",1],["timetable","horario",1],["lift","ascensor; o llevar a alguien en coche",1]],
 dialogue:[
  ["You","Excuse me, does this bus go to Valletta?","Disculpe, ¿este bus va a La Valeta?"],
  ["Driver","It does, love. Single or return?","Sí. ¿Ida o ida y vuelta?"],
  ["You","Single, please. Which stop do I get off at for the ferry?","Solo ida, por favor. ¿En qué parada me bajo para el ferry?"],
  ["Driver","Get off at the last stop, then go straight on. It's just round the corner.","Bájate en la última parada y sigue recto. Está a la vuelta de la esquina."],
  ["You","Sorry, could you say that again?","Perdón, ¿lo puede repetir?"],
  ["Driver","Last stop, straight on, five minutes' walk.","Última parada, recto, cinco minutos andando."]
 ],
 quiz:[
  ["complete","Which stop do I get ___ at?",["off","out","down","of"],"Del bus te bajas con 'get off'. Del coche, con 'get out'.",["«Get out» es para coches y taxis. Del bus te bajas con «get off».","«Get down» = agacharse o bajar de algo alto.","No forma phrasal verb; del bus es «get off»."]],
  ["translate","«rotonda»",["roundabout","ring road","crossroads","turnaround"],"En Malta hay muchas: 'Turn left at the roundabout'.",["«Ring road» es la carretera de circunvalación.","«Crossroads» es un cruce de calles.","«Turnaround» es un cambio de rumbo, no un tipo de cruce."]],
  ["natural","No entendiste las indicaciones.",["Sorry, could you say that again?","Sorry, could you repeat me?","Sorry, could you tell that again?","Sorry, could you say it me again?"],"'Repeat me' no es correcto. 'Say that again' es lo más natural.",["«Repeat me» significaría que te repitan a ti. Se dice «repeat that» o «say that again».","«Tell» necesita a quién («tell me»); para repetir es «say that again».","Sobra «me»: «say it again»."]],
  ["meaning","«A return ticket» es…",["un billete de ida y vuelta","un billete devuelto","solo la vuelta","un reembolso"],"Solo ida = 'a single'.",["«Return» aquí no es devolver: es la vuelta del viaje.","Solo ida es «single»; «return» incluye ida y vuelta.","Un reembolso es «a refund»."]],
  ["translate","«acera» (inglés británico)",["pavement","sidewalk","footpath","road"],"'Sidewalk' es americano.",["«Sidewalk» es americano; en UK y Malta se dice «pavement».","«Footpath» es un sendero, normalmente en el campo.","«Road» es la calzada, por donde van los coches."]]
 ],
 rp:{who:'un conductor de bus', role:'a bus driver in Malta', goal:'Pregunta si el bus va a tu destino, compra el billete y pregunta dónde tienes que bajarte.'}},

{id:'social-1', scen:'social', title:'Hacer planes', summary:'Proponer, aceptar, rechazar y quedar a una hora.', level:'B1', mins:10,
 phrases:[
  ["What are you up to this weekend?","¿Qué planes tienes este fin de semana?",""],
  ["Do you fancy a drink after work?","¿Te apetece tomar algo después del trabajo?","'Fancy' = apetecer. Muy británico."],
  ["I'm up for it!","¡Me apunto!",""],
  ["Count me in.","Cuenta conmigo.",""],
  ["Sorry, I can't make it tonight.","Lo siento, esta noche no puedo ir.","'Make it' = poder asistir o llegar."],
  ["Shall we say eight o'clock?","¿Quedamos a las ocho?",""],
  ["Let's meet up outside the cinema.","Quedemos en la puerta del cine.",""]
 ],
 words:[["meet up","quedar"],["hang out","pasar el rato"],["call off","cancelar"],["turn up","aparecer, llegar"],["fancy","apetecer",1],["keen","con ganas",1],["mate","amigo, colega",1],["text","escribir por mensaje"]],
 dialogue:[
  ["Ollie","Hey! What are you up to this weekend?","¡Hola! ¿Qué haces este finde?"],
  ["You","Not much. Why?","Nada especial. ¿Por qué?"],
  ["Ollie","A few of us are going to Gozo on Saturday. Do you fancy coming?","Unos cuantos vamos a Gozo el sábado. ¿Te apetece venir?"],
  ["You","I'm up for it! What time?","¡Me apunto! ¿A qué hora?"],
  ["Ollie","Shall we say nine at the ferry terminal?","¿Quedamos a las nueve en la terminal del ferry?"],
  ["You","Perfect. If anything changes, I'll text you.","Perfecto. Si algo cambia, te escribo."]
 ],
 quiz:[
  ["meaning","«Do you fancy a coffee?» significa…",["¿Te apetece un café?","¿Te gusta el café elegante?","¿Te invito a un café?","¿Te gusta el café?"],"'Fancy' como verbo = apetecer.",["Como adjetivo, «fancy» es elegante; como verbo, «fancy» = apetecer.","Invitar es «It's on me» o «Let me get this».","Eso sería «Do you like coffee?»; «fancy» = apetecer ahora."]],
  ["translate","«Lo siento, no puedo ir.»",["Sorry, I can't make it.","Sorry, I can't make.","Sorry, I don't can go.","Sorry, I can't do it."],"'Make it' = lograr asistir.",["Falta «it»: la expresión es «make it».","«Can» no usa «don't»: la negativa es «can't».","«I can't do it» = no puedo hacerlo. Para no poder ir a un plan: «I can't make it»."]],
  ["complete","Let's ___ up on Saturday.",["meet","see","find","join"],"'Meet up' = quedar con alguien.",["«See up» no existe; quedar es «meet up».","«Find up» no existe; «find out» es averiguar.","«Join up» = alistarse; quedar es «meet up»."]],
  ["natural","Te invitan a un plan y quieres decir que sí con entusiasmo.",["Count me in!","Count with me!","Count me on!","Count me out!"],"'Count with me' es traducción literal. Lo natural es 'Count me in'.",["Calco de «cuenta conmigo». La expresión es «Count me in!».","No existe; es «count me in» (cuenta conmigo dentro del plan).","¡Es lo contrario! «Count me out» = no cuentes conmigo."]],
  ["meaning","Si un plan se «called off», entonces…",["se canceló","se aplazó","alguien llamó por teléfono","se adelantó"],"'Call off' = cancelar.",["Aplazar es «put off» o «postpone».","Es la trampa literal de «call»; «call off» = cancelar.","Adelantar es «bring forward»."]]
 ],
 rp:{who:'Ollie, un amigo británico', role:'Ollie, a British friend who wants to make plans for the weekend', goal:'Acepta el plan de tu amigo y acuerda la hora y el lugar.'}},

{id:'social-2', scen:'social', title:'Charlar y reaccionar', summary:'Saludar, contar cómo estás y reaccionar a una noticia.', level:'A2', mins:8,
 phrases:[
  ["How's it going?","¿Qué tal?",""],
  ["Not bad, cheers. You?","Bien, gracias. ¿Y tú?",""],
  ["No way! Really?","¡No me digas! ¿En serio?",""],
  ["That sounds brilliant.","Suena genial.","En UK 'brilliant' es de uso diario."],
  ["Fair enough.","Vale, me parece razonable.","Para aceptar la explicación de alguien."],
  ["I know what you mean.","Sé a qué te refieres.",""],
  ["I'm absolutely knackered.","Estoy reventado.","Coloquial británico: muy cansado."]
 ],
 words:[["cheers","gracias / ¡salud!",1],["brilliant","genial",1],["lovely","encantador, muy bueno",1],["knackered","agotado",1],["gutted","muy decepcionado",1],["chuffed","contentísimo",1],["mate","colega",1],["catch up","ponerse al día"]],
 dialogue:[
  ["Emma","Hiya! How's it going?","¡Hola! ¿Qué tal?"],
  ["You","Not bad, cheers. A bit knackered, to be honest. You?","Bien, gracias. Un poco reventado, la verdad. ¿Y tú?"],
  ["Emma","Great, actually. I got the job!","Genial, la verdad. ¡Me dieron el trabajo!"],
  ["You","No way! That's brilliant, congratulations!","¡No me digas! ¡Qué genial, felicidades!"],
  ["Emma","Thanks! I'm well chuffed. We should celebrate.","¡Gracias! Estoy contentísima. Deberíamos celebrarlo."],
  ["You","Definitely. You deserve it, you've worked so hard.","Claro que sí. Te lo mereces, has trabajado muchísimo."]
 ],
 quiz:[
  ["meaning","«I'm gutted» significa…",["Estoy muy decepcionado","Estoy agotada","Estoy muy contenta","Me duele el estómago"],"Lo contrario sería 'I'm chuffed'.",["Agotada es «knackered» o «exhausted».","Al revés: muy contento es «chuffed».","«Gut» es tripa, pero «gutted» es muy decepcionado."]],
  ["natural","Un amigo te cuenta que se va a vivir a Londres. Reaccionas con sorpresa.",["No way! Really?","Not way! Really?","Any way! Really?","No way! Is true?"],"'No way!' = ¡no me digas!",["Es «No way», no «Not way».","«Anyway» = de todas formas; para sorprenderte: «No way!».","Falta el sujeto: «Is it true?». Lo más natural es «Really?»."]],
  ["translate","«Estoy agotado» (coloquial británico)",["I'm knackered.","I'm exhausting.","I'm tiring.","I'm finished of energy."],"'I'm exhausting' significa 'soy agotador'. Para cómo te sientes usa '-ed'.",["«Exhausting» = agotador (lo que cansa). Tú estás «exhausted».","«Tiring» = cansado como actividad (que cansa). Tú estás «tired».","Calco; sería «I've run out of energy»."]],
  ["meaning","Alguien te explica por qué llegó tarde y respondes «Fair enough». Estás diciendo…",["Vale, lo entiendo y lo acepto","Eso no es justo","Ya basta","Más o menos bien"],"'Fair enough' = me parece razonable.",["Eso sería «That's not fair».","Ya basta es «That's enough».","Eso sería «not bad» o «so-so»."]],
  ["complete","How's it ___?",["going","doing","being","making"],"'How's it going?' = ¿qué tal?",["«How are you doing?» existe, pero con «it» es «How's it going?».","No se usa; la fórmula es «How's it going?».","«Make» no encaja; es «How's it going?»."]]
 ],
 rp:{who:'Emma, una amiga británica', role:'Emma, a British friend you bump into on the street in Sliema', goal:'Saluda, cuenta cómo estás y reacciona a la noticia que te da tu amiga.'}},

{id:'job-1', scen:'work', sub:'job', title:'Preséntate en una entrevista', summary:'Responder a «Tell me about yourself» con seguridad.', level:'B1', mins:12,
 phrases:[
  ["I'm an architect by training.","Soy arquitecta de formación.","'By training' = de formación, aunque ahora hagas otra cosa."],
  ["I've got six years of experience in design.","Tengo seis años de experiencia en diseño.","Cambia el número por el tuyo. No olvides 'of experience'."],
  ["I recently moved to Malta and I'm looking for a new challenge.","Me mudé hace poco a Malta y busco un nuevo reto.",""],
  ["What I enjoy most is turning ideas into real spaces.","Lo que más disfruto es convertir ideas en espacios reales.",""],
  ["I'd describe myself as creative and very organised.","Me describiría como creativa y muy organizada.","'Organised' con s es la ortografía británica."],
  ["I'm really interested in this role because I love your projects.","Me interesa mucho este puesto porque me encantan sus proyectos.","'Role' = puesto. Se usa muchísimo en UK."],
  ["I'm available to start straight away.","Puedo empezar de inmediato.",""]
 ],
 words:[["role","puesto"],["experience","experiencia"],["background","formación, trayectoria"],["skills","habilidades"],["challenge","reto"],["CV","hoja de vida, currículum",1],["interviewer","entrevistador/a"],["straight away","de inmediato",1]],
 dialogue:[
  ["Interviewer","So, tell me a bit about yourself.","Bueno, cuéntame un poco sobre ti."],
  ["You","Sure. I'm an architect by training, and I've got six years of experience in design.","Claro. Soy arquitecta de formación y tengo seis años de experiencia en diseño."],
  ["Interviewer","And what brings you to Malta?","¿Y qué te trae a Malta?"],
  ["You","I recently moved here and I'm looking for a new challenge.","Me mudé hace poco y busco un nuevo reto."],
  ["Interviewer","Why are you interested in this role?","¿Por qué te interesa este puesto?"],
  ["You","What I enjoy most is turning ideas into real spaces, and your projects really inspire me.","Lo que más disfruto es convertir ideas en espacios reales, y sus proyectos me inspiran mucho."]
 ],
 quiz:[
  ["natural","Te dicen «Tell me about yourself». ¿Cómo empiezas?",["I'm an architect by training, with six years of experience in design.","I'm architect by training, with six years of experience in design.","I'm an architect of training, with six years of experience in design.","I'm an architect by training, with six years of experiences in design."],"Empieza por tu perfil profesional, no por datos personales.",["Falta «an»: con profesiones se dice «I'm an architect».","Es «by training» (de formación), no «of training».","«Experience» como experiencia laboral no lleva -s."]],
  ["translate","«Tengo seis años de experiencia.»",["I've got six years of experience.","I have six years of experiences.","I have experience of six years old.","I'm six years experienced."],"'Experience' en este sentido no lleva plural.",["«Experience» como experiencia laboral es incontable: sin -s.","«Years old» es para la edad; aquí es «six years of experience».","No se dice así; es «I've got / I have six years of experience»."]],
  ["complete","I'm an architect ___ training.",["by","of","in","for"],"'By training' = de formación.",["«Of training» no existe; «by training» = de formación.","«In training» = en prácticas o entrenando.","«For training» = para formarse."]],
  ["meaning","«Role» en una entrevista significa…",["puesto de trabajo","papel en una obra de teatro","rollo","el sueldo"],"'This role' = este puesto.",["También significa eso, pero en una entrevista «role» es el puesto.","Falso amigo: «rollo» no tiene que ver con «role».","El sueldo es «salary»."]],
  ["translate","«Puedo empezar de inmediato.»",["I'm available to start straight away.","I'm disposable to start straight away.","I'm available to start straight on.","I'm available for start straight away."],"'Disposable' significa desechable. Falso amigo.",["«Disposable» = desechable. Disponible es «available».","«Straight on» = todo recto. De inmediato es «straight away».","Después de «available» va «to start», no «for start»."]]
 ]},

{id:'job-2', scen:'work', sub:'job', title:'Tu experiencia como arquitecta', summary:'Contar proyectos, responsabilidades y programas que usas.', level:'B1', mins:12,
 phrases:[
  ["I worked on residential and commercial projects.","Trabajé en proyectos residenciales y comerciales.",""],
  ["I was responsible for the design from concept to completion.","Era responsable del diseño desde el concepto hasta la entrega.","'From concept to completion' suena muy profesional."],
  ["I worked closely with clients and contractors.","Trabajaba muy de cerca con clientes y contratistas.",""],
  ["I produced detailed drawings in AutoCAD and Revit.","Hacía planos detallados en AutoCAD y Revit.","Planos = 'drawings'. 'Planes' son aviones."],
  ["I also handled site visits and planning applications.","También me encargaba de visitas de obra y solicitudes de licencia.","'Planning permission' = licencia de obra en UK y Malta."],
  ["One project I'm really proud of is a small library.","Un proyecto del que estoy muy orgullosa es una pequeña biblioteca.","'Library' = biblioteca (no librería)."],
  ["We delivered it on time and within budget.","Lo entregamos a tiempo y dentro del presupuesto.",""]
 ],
 words:[["drawings","planos"],["site visit","visita de obra"],["contractor","contratista"],["planning permission","licencia de obra",1],["budget","presupuesto"],["layout","distribución (de un espacio)"],["refurbishment","reforma",1],["sketch","boceto"]],
 dialogue:[
  ["Interviewer","Can you tell me about your experience as an architect?","¿Me puedes contar sobre tu experiencia como arquitecta?"],
  ["You","Of course. I worked on residential and commercial projects for six years.","Claro. Trabajé seis años en proyectos residenciales y comerciales."],
  ["Interviewer","What were you responsible for?","¿De qué eras responsable?"],
  ["You","I was responsible for the design from concept to completion, and I worked closely with clients.","Era responsable del diseño desde el concepto hasta la entrega, y trabajaba muy de cerca con los clientes."],
  ["Interviewer","Which software do you use?","¿Qué programas usas?"],
  ["You","Mainly AutoCAD and Revit. I'm also learning Rhino.","Sobre todo AutoCAD y Revit. También estoy aprendiendo Rhino."]
 ],
 quiz:[
  ["translate","«planos» (de arquitectura)",["drawings","planes","flats","maps"],"'Plans' existe, pero lo más común es 'drawings'. 'Planes' son aviones.",["«Planes» son aviones.","«Flats» son pisos (apartamentos).","«Maps» son mapas, no planos de un edificio."]],
  ["meaning","«Refurbishment» significa…",["reforma de un edificio o espacio","mobiliario","volver a amueblar","demolición"],"En UK y Malta se usa mucho para reformas.",["El mobiliario es «furniture».","Amueblar es «furnish»; «refurbish» es reformar.","Demolición es «demolition»."]],
  ["complete","I was responsible ___ the design.",["for","of","to","about"],"'Responsible for' + lo que haces.",["Calco de «responsable de»; en inglés es «responsible for».","«Responsible to» = rendir cuentas a alguien (a tu jefe).","No se usa con «responsible»."]],
  ["natural","Quieres decir que el proyecto salió bien en tiempo y dinero.",["We delivered it on time and within budget.","We delivered it on time and inside budget.","We delivered it on hour and within budget.","We delivered it at time and within budget."],"Expresión fija: 'on time and within budget'.",["La expresión fija es «within budget».","A tiempo es «on time», no «on hour».","Es «on time», no «at time»."]],
  ["translate","«contratista»",["contractor","contractist","constructor","contracter"],"'Contractor' es la empresa o persona que ejecuta la obra.",["No existe en inglés.","En inglés no se usa así; se dice «builder» o «contractor».","Se escribe «contractor», con -or."]]
 ]},

{id:'job-3', scen:'work', sub:'job', title:'Galería de arte e impresión 3D', summary:'Hablar de exposiciones, maquetas y del taller de impresión 3D.', level:'B1', mins:12,
 phrases:[
  ["I worked as a designer at an art gallery.","Trabajé como diseñadora en una galería de arte.",""],
  ["I designed the layout for several exhibitions.","Diseñé la distribución de varias exposiciones.","'Exhibition' = exposición."],
  ["I was in charge of the 3D printing workshop.","Estaba a cargo del taller de impresión 3D.","'In charge of' = a cargo de."],
  ["I prepared the files and set up the printers.","Preparaba los archivos y configuraba las impresoras.",""],
  ["We printed scale models and prototypes for artists.","Imprimíamos maquetas y prototipos para artistas.","Maqueta = 'scale model'."],
  ["I also helped with marketing materials and prints.","También ayudaba con materiales de marketing e impresiones.",""],
  ["It taught me to solve problems quickly.","Me enseñó a resolver problemas rápido.","'Teach' → 'taught'. 'Teached' no existe."]
 ],
 words:[["exhibition","exposición"],["curator","curador/a"],["artwork","obra de arte"],["scale model","maqueta"],["prototype","prototipo"],["filament","filamento"],["resin","resina"],["render","render, visualización"]],
 dialogue:[
  ["Interviewer","I see you also worked at an art gallery. What did you do there?","Veo que también trabajaste en una galería de arte. ¿Qué hacías allí?"],
  ["You","I worked as a designer. I designed the layout for several exhibitions.","Trabajaba como diseñadora. Diseñaba la distribución de varias exposiciones."],
  ["Interviewer","That sounds interesting. And the 3D printing?","Suena interesante. ¿Y la impresión 3D?"],
  ["You","I was in charge of the 3D printing workshop. We printed scale models and prototypes for artists.","Estaba a cargo del taller de impresión 3D. Imprimíamos maquetas y prototipos para artistas."],
  ["Interviewer","What did you learn from that job?","¿Qué aprendiste en ese trabajo?"],
  ["You","It taught me to solve problems quickly and to work with very different people.","Me enseñó a resolver problemas rápido y a trabajar con gente muy distinta."]
 ],
 quiz:[
  ["translate","«exposición» (de arte)",["exhibition","exposition","showroom","exposure"],"'Exposure' es exposición al sol o a un riesgo. Para arte: 'exhibition'.",["«Exposition» se usa poco (feria o explicación); para arte: «exhibition».","«Showroom» es la sala de exposición de una tienda (coches, muebles).","«Exposure» es exposición al sol o a un riesgo."]],
  ["translate","«maqueta»",["scale model","maquette","scale drawing","model scale"],"En arquitectura se dice 'scale model' o simplemente 'model'.",["Existe en escultura, pero en arquitectura se dice «scale model».","Es un dibujo a escala, no una maqueta.","El orden es al revés: «scale model»."]],
  ["complete","I was ___ charge of the 3D printing workshop.",["in","on","at","of"],"'In charge of' = a cargo de.",["La expresión es «in charge of».","La expresión es «in charge of».","«Of» ya va después: «in charge of»."]],
  ["natural","Quieres decir qué aprendiste en ese trabajo.",["It taught me to solve problems quickly.","It learned me to solve problems fast.","I learned to me solve problems.","It teached me to solve problems."],"'Teach' = enseñar; 'learn' = aprender.",["«Learn» es aprender (tú); enseñar es «teach».","Sobra «to me»: «I learned to solve problems».","«Teach» es irregular: el pasado es «taught»."]],
  ["meaning","«Curator» en una galería es…",["la persona que selecciona y organiza las obras","la persona que restaura las obras","la persona que vende las obras","quien cura a los enfermos"],"Falso amigo: no tiene nada que ver con curar.",["Quien restaura es el «restorer» o «conservator».","Quien vende arte es el «art dealer» o el «gallerist».","Falso amigo: no tiene nada que ver con curar."]]
 ]},

{id:'job-4', scen:'work', sub:'job', title:'Fortalezas, debilidades y lo que te apasiona', summary:'Hablar de ti de forma positiva y honesta.', level:'B1', mins:10,
 phrases:[
  ["One of my main strengths is attention to detail.","Una de mis principales fortalezas es la atención al detalle.",""],
  ["I work well under pressure.","Trabajo bien bajo presión.","Con verbos se usa 'well', no 'good'."],
  ["I'm a quick learner and I love learning new software.","Aprendo rápido y me encanta aprender programas nuevos.",""],
  ["Something I'm working on is my English.","Algo que estoy mejorando es mi inglés.","Una debilidad dicha en positivo: muestra que la estás trabajando."],
  ["I'm passionate about sustainable design.","Me apasiona el diseño sostenible.","'Passionate about' + lo que te apasiona."],
  ["I really enjoy working in a team.","Disfruto mucho trabajar en equipo.",""],
  ["In my free time, I like drawing and visiting galleries.","En mi tiempo libre me gusta dibujar y visitar galerías.",""]
 ],
 words:[["strength","fortaleza"],["weakness","debilidad"],["attention to detail","atención al detalle"],["team player","buen/a compañero/a de equipo"],["self-motivated","con iniciativa"],["passionate about","apasionado/a por"],["quick learner","persona que aprende rápido"],["reliable","de confianza, responsable"]],
 dialogue:[
  ["Interviewer","What would you say are your main strengths?","¿Cuáles dirías que son tus principales fortalezas?"],
  ["You","One of my main strengths is attention to detail. I also work well under pressure.","Una de mis principales fortalezas es la atención al detalle. También trabajo bien bajo presión."],
  ["Interviewer","And what about weaknesses?","¿Y las debilidades?"],
  ["You","Something I'm working on is my English. I study every day and I'm improving quickly.","Algo que estoy mejorando es mi inglés. Estudio todos los días y mejoro rápido."],
  ["Interviewer","That's great. What are you passionate about?","Genial. ¿Qué te apasiona?"],
  ["You","I'm passionate about sustainable design and creating spaces that feel good to live in.","Me apasiona el diseño sostenible y crear espacios en los que se viva bien."]
 ],
 quiz:[
  ["natural","Te preguntan por una debilidad. ¿Qué respondes?",["Something I'm working on is my English, and I'm improving every day.","Something I'm working in is my English, and I'm improving every day.","Something I'm working on is my English, and I'm improving everyday.","I don't have weaknesses."],"Nombra algo real y muestra cómo lo estás mejorando.",["Trabajar en mejorar algo es «work on», no «work in».","«Everyday» junto es adjetivo (cotidiano); cada día es «every day».","Nunca respondas así: suena arrogante. Nombra algo real que estés mejorando."]],
  ["complete","I'm passionate ___ sustainable design.",["about","for","of","with"],"'Passionate about' es la combinación correcta.",["Calco de «pasión por»; con «passionate» se usa «about».","No se usa con «passionate».","No se usa con «passionate»."]],
  ["translate","«Trabajo bien bajo presión.»",["I work well under pressure.","I work good under pressure.","I work well below pressure.","I work well in pressure."],"'Well' acompaña a verbos; 'good' a sustantivos.",["«Good» es adjetivo; con un verbo (work) se usa «well».","«Below» es debajo en posición; la expresión es «under pressure».","Se dice «under pressure»."]],
  ["meaning","«Reliable» significa…",["de confianza, que cumple","relajada","puntual","creíble"],"Ej.: 'I'm reliable and punctual.'",["Relajado es «relaxed». Suenan parecido, pero no tienen nada que ver.","Puntual es «punctual».","Creíble es «believable» o «credible»."]],
  ["translate","«fortaleza» (cualidad)",["strength","fortress","force","strong"],"'Fortress' es una fortaleza militar, como las de La Valeta.",["«Fortress» es una fortaleza militar, como las de La Valeta.","«Force» es fuerza física (o la policía: «police force»).","«Strong» es el adjetivo (fuerte); el nombre es «strength»."]]
 ]},

{id:'job-5', scen:'work', sub:'job', title:'Negociar el salario y las condiciones', summary:'Pedir más sueldo, preguntar condiciones y ganar tiempo con educación.', level:'B1', mins:12,
 phrases:[
  ["Could you tell me the salary range for this role?","¿Me podría decir el rango salarial de este puesto?",""],
  ["Based on my experience, I was expecting something closer to €32,000.","Por mi experiencia, esperaba algo más cerca de 32.000 €.","Da una cifra concreta y justifícala."],
  ["Is there any flexibility on the salary?","¿Hay algo de flexibilidad en el salario?",""],
  ["Is that gross or net?","¿Eso es bruto o neto?",""],
  ["Would it be possible to work from home two days a week?","¿Sería posible trabajar desde casa dos días a la semana?",""],
  ["Could I have a day or two to think it over?","¿Podría tener un día o dos para pensarlo?","'Think it over' = pensarlo con calma."],
  ["I'm very happy with the offer. Thank you.","Estoy muy contenta con la oferta. Gracias.",""]
 ],
 words:[["salary range","rango salarial"],["gross / net","bruto / neto"],["per annum","al año"],["probation period","periodo de prueba"],["notice period","preaviso"],["benefits","beneficios extra"],["pay rise","aumento de sueldo",1],["contract","contrato"]],
 dialogue:[
  ["Manager","We'd like to offer you the position. The salary is €28,000 per annum.","Nos gustaría ofrecerte el puesto. El salario es de 28.000 € al año."],
  ["You","Thank you, I'm really pleased. Is that gross or net?","Gracias, estoy muy contenta. ¿Eso es bruto o neto?"],
  ["Manager","That's gross.","Es bruto."],
  ["You","Based on my experience, I was expecting something closer to €32,000. Is there any flexibility?","Por mi experiencia, esperaba algo más cerca de 32.000 €. ¿Hay algo de flexibilidad?"],
  ["Manager","We could go up to €30,000, with a review after the probation period.","Podríamos subir a 30.000 €, con una revisión después del periodo de prueba."],
  ["You","That sounds fair. Could I have a day or two to think it over?","Me parece justo. ¿Podría tener un día o dos para pensarlo?"]
 ],
 quiz:[
  ["natural","Quieres pedir más salario sin sonar agresiva.",["Based on my experience, I was expecting something closer to €32,000.","Based in my experience, I was expecting something closer to €32,000.","Based on my experience, I was waiting something closer to €32,000.","I want more money."],"Justificar con tu experiencia y dar una cifra concreta es la forma profesional.",["Es «based on», no «based in».","«Wait» es esperar en el tiempo; esperar una cifra es «expect».","Demasiado directo: sin argumento ni cifra concreta."]],
  ["meaning","«Notice period» es…",["el tiempo de preaviso para dejar un trabajo","el periodo de prueba","las vacaciones anuales","el plazo para enviar el CV"],"Ej.: 'My notice period is one month.'",["El periodo de prueba es «probation period».","Las vacaciones son «annual leave» o «holiday».","Eso es la «closing date» o «deadline»."]],
  ["translate","«bruto» (salario)",["gross","net","brute","rough"],"'Gross' = bruto y 'net' = neto.",["«Net» es neto, lo contrario de bruto.","Falso amigo: «brute» es un bruto (persona violenta).","«Rough» es aproximado o áspero."]],
  ["complete","Could I have a day or two to think it ___?",["over","about","on","after"],"'Think it over' = pensarlo bien.",["«Think about it» va junto; con «it» en medio la expresión es «think it over».","No existe «think it on».","No existe «think it after»."]],
  ["translate","«aumento de sueldo» (inglés británico)",["pay rise","pay raise","pay rising","salary up"],"En UK se dice 'pay rise'; en US, 'raise'.",["«Raise» es americano; en UK se dice «pay rise».","Es el nombre «rise», no «rising».","No existe como expresión."]]
 ]},

{id:'job-6', scen:'work', sub:'job', title:'Preguntas al final de la entrevista', summary:'Qué preguntar cuando te dicen «Have you got any questions?».', level:'B1', mins:10,
 phrases:[
  ["What does a typical day look like in this role?","¿Cómo es un día típico en este puesto?",""],
  ["How would you describe the team?","¿Cómo describiría al equipo?",""],
  ["What are the next steps in the process?","¿Cuáles son los siguientes pasos del proceso?",""],
  ["When can I expect to hear back from you?","¿Cuándo puedo esperar una respuesta?","'Hear back' = recibir respuesta."],
  ["Are there opportunities for training?","¿Hay oportunidades de formación?",""],
  ["Is there anything else you'd like to know about me?","¿Hay algo más que quiera saber sobre mí?",""],
  ["Thank you for your time. It was lovely to meet you.","Gracias por su tiempo. Ha sido un placer conocerle.",""]
 ],
 words:[["next steps","siguientes pasos"],["hear back","recibir respuesta"],["training","formación"],["career path","plan de carrera"],["shortlist","lista de finalistas"],["second interview","segunda entrevista"],["start date","fecha de inicio"],["feedback","comentarios, opinión"]],
 dialogue:[
  ["Interviewer","That's everything from me. Have you got any questions for us?","Eso es todo por mi parte. ¿Tienes alguna pregunta?"],
  ["You","Yes, thank you. What does a typical day look like in this role?","Sí, gracias. ¿Cómo es un día típico en este puesto?"],
  ["Interviewer","It's quite varied: client meetings, design work and some site visits.","Es bastante variado: reuniones con clientes, diseño y algunas visitas de obra."],
  ["You","That sounds great. What are the next steps in the process?","Suena genial. ¿Cuáles son los siguientes pasos del proceso?"],
  ["Interviewer","We'll invite two candidates to a second interview next week.","Invitaremos a dos candidatos a una segunda entrevista la semana que viene."],
  ["You","Perfect. Thank you for your time, it was lovely to meet you.","Perfecto. Gracias por su tiempo, ha sido un placer conocerle."]
 ],
 quiz:[
  ["natural","Te preguntan «Have you got any questions for us?». Lo mejor es…",["What does a typical day look like in this role?","What does a typical day looks like in this role?","How does a typical day look like in this role?","No, nothing."],"Lleva siempre una o dos preguntas: muestra interés.",["Con «does», el verbo va sin -s: «look like».","Con «look like» se pregunta con «What», no con «How».","Mejor llevar una pregunta preparada: muestra interés."]],
  ["complete","When can I expect to hear ___ from you?",["back","from","again","after"],"'Hear back' = recibir una respuesta.",["Ya hay «from you» después; falta «back»: «hear back».","«Hear again» = volver a oír.","No forma expresión aquí."]],
  ["translate","«formación» (en el trabajo)",["training","formation","education","coaching"],"'Formation' es formación de rocas o de un equipo. En el trabajo: 'training'.",["«Formation» es formación de rocas o de un equipo.","«Education» es la educación formal (colegio, universidad); en el trabajo: «training».","«Coaching» es acompañamiento personalizado, no la formación en general."]],
  ["meaning","«You've been shortlisted» significa…",["estás en la lista de finalistas","te rechazaron","tu lista es corta","te contrataron"],"Buena noticia: pasaste a la siguiente fase.",["Rechazada sería «unsuccessful» o «rejected».","Es la traducción literal; «shortlisted» = en la lista final.","Contratada es «hired»; «shortlisted» es que pasaste a la fase final."]],
  ["translate","«Ha sido un placer conocerle.»",["It was lovely to meet you.","It was a pleasure to know you.","Was a pleasure meet you.","I had pleasure of knowing you."],"Al conocer a alguien se usa 'meet', no 'know'.",["Al conocer a alguien se usa «meet», no «know».","Faltan el sujeto «It» y el «to»: «It was a pleasure to meet you».","Calco; además, «know» no es conocer por primera vez."]]
 ]},

{id:'job-7', scen:'work', sub:'job', title:'Ofertas de empleo, CV y carta', summary:'Postularte a un puesto por teléfono o por email.', level:'B1', mins:12,
 phrases:[
  ["I'm writing to apply for the position of junior architect.","Le escribo para postularme al puesto de arquitecta junior.",""],
  ["Please find my CV and portfolio attached.","Adjunto mi CV y mi portafolio.",""],
  ["I'd welcome the opportunity to discuss my application.","Me encantaría tener la oportunidad de hablar sobre mi candidatura.",""],
  ["I saw the vacancy on LinkedIn.","Vi la vacante en LinkedIn.",""],
  ["Is the position full-time or part-time?","¿El puesto es a tiempo completo o parcial?",""],
  ["I can provide references if needed.","Puedo dar referencias si hace falta.",""],
  ["I look forward to hearing from you.","Quedo a la espera de su respuesta.","Cierre clásico de un email formal."]
 ],
 words:[["vacancy","vacante"],["apply for","postularse a"],["application","candidatura, solicitud"],["CV","currículum",1],["cover letter","carta de presentación"],["portfolio","portafolio"],["references","referencias"],["full-time / part-time","tiempo completo / parcial"]],
 dialogue:[
  ["Recruiter","Hello, Bright Spaces Studio. How can I help?","Hola, Bright Spaces Studio. ¿En qué le puedo ayudar?"],
  ["You","Hi, I saw the vacancy for a junior architect on LinkedIn. Is it still open?","Hola, vi la vacante de arquitecta junior en LinkedIn. ¿Sigue abierta?"],
  ["Recruiter","Yes, it is. Applications close on Friday.","Sí. Las candidaturas cierran el viernes."],
  ["You","Great. Is the position full-time or part-time?","Genial. ¿El puesto es a tiempo completo o parcial?"],
  ["Recruiter","Full-time. Just send your CV and portfolio to our careers email.","Tiempo completo. Envía tu CV y portafolio a nuestro correo de empleo."],
  ["You","Perfect, I'll send them today. Thanks for your help.","Perfecto, los envío hoy. Gracias por su ayuda."]
 ],
 quiz:[
  ["translate","«postularse a un puesto»",["apply for a job","apply a job","postulate for a job","candidate for a job"],"'Postulate' es postular una teoría. Para empleos: 'apply for'.",["Falta «for»: «apply for a job».","«Postulate» es postular una teoría.","«Candidate» es nombre (candidato), no verbo."]],
  ["natural","¿Cómo cierras un email formal pidiendo trabajo?",["I look forward to hearing from you.","I look forward to hear from you.","I look forward for hearing from you.","Waiting your answer."],"'I look forward to hearing from you' es el cierre estándar.",["Después de «look forward to» va -ing: «hearing».","Es «look forward to», no «for».","Calco de «esperando su respuesta»: falta «for» y suena brusco."]],
  ["meaning","«Vacancy» en una oferta de empleo es…",["un puesto libre","unas vacaciones","una habitación libre de hotel","un despido"],"En hoteles también se usa, pero en empleo es una vacante.",["Falso amigo: vacaciones es «holiday».","En hoteles sí significa eso, pero en una oferta de empleo es una vacante.","Un despido es «dismissal» o «redundancy»."]],
  ["complete","Please find my CV and portfolio ___.",["attached","attaching","attach","in attach"],"Fórmula fija: 'Please find … attached.'",["La fórmula usa el participio: «attached».","Falta el participio: «attached» (adjunto).","Calco de «en adjunto»; es «attached»."]],
  ["translate","«carta de presentación»",["cover letter","presentation letter","motivation letter","cover card"],"En UK se dice 'cover letter' o 'covering letter'.",["Calco del español; en inglés: «cover letter».","Se usa en otros países de Europa, pero en UK y Malta se dice «cover letter».","Es «letter» (carta), no «card» (tarjeta)."]]
 ]},

{id:'job-8', scen:'work', sub:'job', title:'Después de la entrevista: seguimiento y oferta', summary:'Preguntar por tu candidatura, aceptar o rechazar una oferta.', level:'B1', mins:10,
 phrases:[
  ["Thank you for taking the time to meet me yesterday.","Gracias por tomarse el tiempo de reunirse conmigo ayer.",""],
  ["I'm still very interested in the role.","Sigo muy interesada en el puesto.",""],
  ["I was wondering if there's any update on my application.","Quería saber si hay alguna novedad sobre mi candidatura.","'I was wondering if…' suena educado, no insistente."],
  ["I'm delighted to accept the offer.","Acepto la oferta encantada.",""],
  ["When would you like me to start?","¿Cuándo le gustaría que empezara?",""],
  ["I'm afraid I've decided to accept another offer.","Lamentablemente he decidido aceptar otra oferta.","'I'm afraid…' suaviza una mala noticia; no tiene que ver con miedo."],
  ["Could you give me some feedback on my interview?","¿Me podría dar algún comentario sobre mi entrevista?",""]
 ],
 words:[["follow up","hacer seguimiento"],["update","novedad"],["job offer","oferta de trabajo"],["accept / decline","aceptar / rechazar"],["start date","fecha de inicio"],["unsuccessful","no seleccionado/a"],["feedback","comentarios"],["onboarding","incorporación"]],
 dialogue:[
  ["You","Hello, it's Ana. I'm calling about the junior architect position.","Hola, soy Ana. Llamo por el puesto de arquitecta junior."],
  ["Recruiter","Hi Ana! Thanks for calling.","¡Hola Ana! Gracias por llamar."],
  ["You","I was wondering if there's any update on my application.","Quería saber si hay alguna novedad sobre mi candidatura."],
  ["Recruiter","Actually, yes. We'd love to offer you the job!","Pues sí. ¡Nos encantaría ofrecerte el trabajo!"],
  ["You","That's brilliant news! I'm delighted to accept. When would you like me to start?","¡Qué buena noticia! Acepto encantada. ¿Cuándo le gustaría que empezara?"],
  ["Recruiter","How about the first of next month?","¿Qué tal el día uno del mes que viene?"]
 ],
 quiz:[
  ["natural","Quieres preguntar por tu candidatura sin parecer insistente.",["I was wondering if there's any update on my application.","I was wondering if there's any update of my application.","I was wondering if there's any update on my aplication.","Why you don't answer me?"],"'I was wondering if…' es la fórmula educada.",["Novedades sobre algo = «update on», no «of».","Se escribe «application», con doble p.","Suena acusador, y la pregunta lleva el auxiliar delante: «Why don't you…?»."]],
  ["translate","«Acepto la oferta encantada.»",["I'm delighted to accept the offer.","I accept enchanted the offer.","I'm enchanted to accept the offer.","With pleasure I accept to the offer."],"'Enchanted' significa hechizada. Usa 'delighted'.",["Calco palabra por palabra: «enchanted» es hechizada y el orden no funciona.","«Enchanted» = hechizada. Encantada (contenta) = «delighted».","Sobra «to»: «accept the offer»."]],
  ["meaning","«Unfortunately, you've been unsuccessful» significa…",["no te seleccionaron","estás en la lista de espera","te dieron el puesto","no recibieron tu candidatura"],"Frase típica de los correos de rechazo.",["Eso sería «you're on the waiting list».","Al revés: «unfortunately» anuncia una mala noticia.","Eso sería «we didn't receive your application»."]],
  ["complete","I'm ___ I've decided to accept another offer.",["afraid","sorry for","scared","fear"],"'I'm afraid…' suaviza malas noticias.",["«Sorry for» necesita un nombre o -ing detrás; aquí va «I'm afraid…».","«Scared» es tener miedo de verdad; «I'm afraid…» suaviza una mala noticia.","«Fear» es el nombre (el miedo); no va con «I'm»."]],
  ["translate","«novedad» (sobre un proceso)",["update","novelty","novel","new"],"'Novelty' es algo nuevo y original; para un proceso se dice 'update'.",["«Novelty» es algo nuevo y original, no una novedad de un proceso.","«Novel» es una novela.","«New» es el adjetivo (nuevo)."]]
 ]},

{id:'work-3', scen:'work', sub:'office', title:'Llamadas y videollamadas', summary:'Que se te oiga bien, compartir pantalla y salir de la llamada.', level:'B1', mins:10,
 phrases:[
  ["Can you hear me okay?","¿Me oyes bien?",""],
  ["Sorry, you're breaking up.","Perdón, se te corta.","Cuando la conexión falla."],
  ["I think you're on mute.","Creo que tienes el micrófono silenciado.",""],
  ["Could you share your screen?","¿Puedes compartir tu pantalla?",""],
  ["Let me just put you on hold for a second.","Te dejo en espera un segundo.","Por teléfono."],
  ["Can I call you back in five minutes?","¿Te llamo en cinco minutos?","'Call back' = devolver la llamada."],
  ["I'm going to have to drop off, sorry.","Me tengo que salir de la llamada, perdón.","'Drop off' = salir de una videollamada."]
 ],
 words:[["mute","silenciar"],["unmute","activar el micrófono"],["call back","devolver la llamada"],["hang up","colgar"],["on hold","en espera"],["break up","cortarse (la señal)"],["share your screen","compartir pantalla"],["mobile","celular, móvil",1]],
 dialogue:[
  ["Ben","Morning, everyone. Can you all hear me okay?","Buenos días a todos. ¿Me oyen bien?"],
  ["Ana","Yes, loud and clear. Sorry, my camera isn't working.","Sí, perfecto. Perdón, mi cámara no funciona."],
  ["Ben","No worries. Ana, could you share your screen?","Tranquila. Ana, ¿puedes compartir tu pantalla?"],
  ["Ana","Sure, just a second… Can everyone see it?","Claro, un segundo… ¿Todos la ven?"],
  ["Ben","Yes. Sorry, Tom, I think you're on mute.","Sí. Perdón, Tom, creo que tienes el micrófono silenciado."],
  ["Ana","Ben, you're breaking up a bit. Can I call you back?","Ben, se te corta un poco. ¿Te llamo yo?"]
 ],
 quiz:[
  ["translate","«Se te corta» (en una llamada)",["You're breaking up.","You're cutting.","You're broken.","You're breaking down."],"'Break up' aquí es cortarse la señal. También significa terminar una relación.",["«Cut» no se usa para la señal; se dice «You're breaking up».","«You're broken» = estás roto (tú). La señal que se corta es «breaking up».","«Break down» = averiarse o derrumbarse; la señal que se corta es «break up»."]],
  ["natural","Alguien habla pero no se le oye en la videollamada. ¿Qué dices?",["I think you're on mute.","I think you're in mute.","I think your microphone is closed.","I don't listen to you."],"Si no oyes a alguien di 'I can't hear you', no 'I don't listen'.",["Es «on mute», no «in mute».","Los micrófonos no se «close»: está «on mute» o «off».","«I don't listen to you» = no te hago caso. Si no le oyes: «I can't hear you»."]],
  ["complete","Can I call you ___ in five minutes?",["back","again","return","later"],"'Call someone back' = devolverle la llamada.",["«Call again» = volver a llamar; devolver la llamada es «call back».","Calco de «devolver»; con llamadas se dice «call you back».","«Call you later» existe, pero con «in five minutes» y para devolverla: «call you back»."]],
  ["meaning","«I'm going to have to drop off» significa…",["me tengo que salir de la llamada","voy a dejar algo en tu casa","me voy a quedar dormida","voy a bajar el volumen"],"'Drop off' tiene varios usos; en una llamada es salirse.",["Ese es otro uso de «drop off» (dejar algo); en una llamada es salirse.","Dormirse es «drop off» en otro contexto, o «fall asleep»; en una llamada es salirse.","Bajar el volumen es «turn it down»."]],
  ["translate","«colgar» (el teléfono)",["hang up","hang on","hang out","close the phone"],"'Hang on' significa 'espera un momento'.",["«Hang on» significa «espera un momento».","«Hang out» = pasar el rato.","Calco; los teléfonos no se «close». Colgar es «hang up»."]]
 ]},

{id:'work-4', scen:'work', sub:'office', title:'Días libres y horarios', summary:'Pedir el día libre, cambiar turnos y avisar si estás enfermo.', level:'B1', mins:10,
 phrases:[
  ["Would it be alright if I took Friday off?","¿Te parece bien si me tomo libre el viernes?","Forma educada de pedir permiso."],
  ["I'm working from home tomorrow.","Mañana trabajo desde casa.",""],
  ["I'm on annual leave next week.","La semana que viene estoy de vacaciones.","'Annual leave' = vacaciones laborales en UK y Malta."],
  ["Could I swap shifts with you on Saturday?","¿Me cambias el turno del sábado?",""],
  ["I need to leave early for an appointment.","Necesito salir antes por una cita.",""],
  ["I'm off sick today.","Hoy estoy de baja por enfermedad.","Para avisar que no vas porque estás enferma."],
  ["What time do you finish today?","¿A qué hora sales hoy?",""]
 ],
 words:[["day off","día libre"],["annual leave","vacaciones (laborales)",1],["sick leave","baja por enfermedad"],["shift","turno"],["rota","calendario de turnos",1],["overtime","horas extra"],["bank holiday","día festivo",1],["clock in / clock out","fichar entrada / salida"]],
 dialogue:[
  ["You","Hi Karen, have you got a minute?","Hola Karen, ¿tienes un momento?"],
  ["Karen","Of course. What's up?","Claro. ¿Qué pasa?"],
  ["You","Would it be alright if I took Friday off? I've got a family visit.","¿Te parece bien si me tomo el viernes libre? Viene a verme mi familia."],
  ["Karen","Should be fine. Just put it in the system as annual leave.","Debería estar bien. Solo regístralo en el sistema como vacaciones."],
  ["You","Thanks. And could I swap shifts with Marco on Saturday?","Gracias. ¿Y puedo cambiar el turno del sábado con Marco?"],
  ["Karen","If he's happy with it, that's fine by me.","Si a él le parece bien, por mí no hay problema."]
 ],
 quiz:[
  ["natural","Quieres pedir el viernes libre con educación.",["Would it be alright if I took Friday off?","Would it be alright that I took Friday off?","Would it be alright if I took Friday out?","Would it be alright if I took Friday free?"],"'Would it be alright if…?' suena educado y natural.",["Se dice «if I took», no «that».","Pedir un día libre es «take a day off», no «out».","Calco de «libre»; se dice «take Friday off»."]],
  ["meaning","«Bank holiday» es…",["un día festivo","las vacaciones del banco","un día en que solo cierra el banco","un puente entre dos festivos"],"En UK y Malta los festivos se llaman 'bank holidays' o 'public holidays'.",["Es la trampa literal: «bank holiday» es un festivo para todos.","No: cierran casi todos (oficinas, bancos, muchas tiendas).","Hacer puente es «take a long weekend»."]],
  ["complete","Could I ___ shifts with you on Saturday?",["swap","change me","exchange to","switch for"],"'Swap shifts' = intercambiar turnos.",["Sobra «me»: sería «change shifts with you», pero lo natural es «swap».","«Exchange» no lleva «to»; con turnos se dice «swap».","«Switch» podría valer, pero sin «for»: «switch shifts with you»."]],
  ["translate","«Hoy estoy de baja por enfermedad.»",["I'm off sick today.","I'm low for sickness today.","Today I'm in sick down.","I'm sick off today."],"'Be off sick' = no ir a trabajar por estar enferma.",["«Low» es bajo o de bajón; estar de baja es «be off sick».","Calco imposible; la expresión es «I'm off sick».","El orden es al revés: «I'm off sick»."]],
  ["translate","«horas extra»",["overtime","extra hours time","overwork","more time"],"'Overwork' es trabajar demasiado, no horas extra.",["No es una expresión; horas extra es «overtime».","«Overwork» es trabajar demasiado, no horas extra pagadas.","«More time» = más tiempo, sin más."]]
 ]},

{id:'meet-3', scen:'meet', title:'Presentar tu trabajo', summary:'Explicar una idea, mostrar diapositivas y responder preguntas.', level:'B1', mins:12,
 phrases:[
  ["I'd like to walk you through the new design.","Me gustaría explicarles el nuevo diseño paso a paso.","'Walk someone through' = explicar paso a paso."],
  ["As you can see on this slide, the space is much brighter.","Como pueden ver en esta diapositiva, el espacio es mucho más luminoso.",""],
  ["The main idea is to bring in more natural light.","La idea principal es que entre más luz natural.",""],
  ["Let me give you an example.","Déjenme darles un ejemplo.",""],
  ["To sum up, it's cheaper and more flexible.","En resumen, es más barato y más flexible.","'Resume' en inglés significa reanudar. Falso amigo."],
  ["Does anyone have any questions?","¿Alguien tiene alguna pregunta?",""],
  ["That's a good question. Let me get back to you on that.","Buena pregunta. Les respondo sobre eso más tarde.","Para cuando no sabes la respuesta en ese momento."]
 ],
 words:[["slide","diapositiva"],["walk through","explicar paso a paso"],["overview","visión general"],["to sum up","en resumen"],["highlight","destacar"],["point out","señalar"],["handout","material impreso"],["feedback","opinión, comentarios"]],
 dialogue:[
  ["You","Good morning, everyone. I'd like to walk you through the new office design.","Buenos días a todos. Me gustaría explicarles el nuevo diseño de la oficina."],
  ["Sam","Great, go ahead.","Genial, adelante."],
  ["You","As you can see on this slide, the main idea is to bring in more natural light.","Como ven en esta diapositiva, la idea principal es que entre más luz natural."],
  ["Sam","How much will it cost?","¿Cuánto costará?"],
  ["You","That's a good question. Let me get back to you on that by Friday.","Buena pregunta. Les respondo sobre eso antes del viernes."],
  ["Sam","Perfect. Thanks, it looks brilliant.","Perfecto. Gracias, se ve genial."]
 ],
 quiz:[
  ["translate","«diapositiva»",["slide","diapositive","sheet","slip"],"En presentaciones se dice 'slide'.",["No existe en inglés.","«Sheet» es una hoja de papel (o una sábana).","«Slip» es un resbalón o un papelito."]],
  ["natural","No sabes una respuesta durante tu presentación.",["That's a good question. Let me get back to you on that.","That's a good question. Let me back to you on that.","That's a good question. Let me return you on that.","I don't know, sorry, next."],"Es la forma profesional de ganar tiempo.",["Falta el verbo: «Let me get back to you».","Calco de «te devuelvo la respuesta»; se dice «get back to you».","Suena poco profesional; mejor ganar tiempo con «Let me get back to you»."]],
  ["complete","I'd like to walk you ___ the new design.",["through","across","by","over"],"'Walk someone through something' = explicárselo paso a paso.",["«Walk across» = cruzar caminando.","«Walk by» = pasar al lado caminando.","«Walk over» = acercarse caminando (o pisotear a alguien)."]],
  ["translate","«En resumen…»",["To sum up…","In resume…","Resuming…","To summary…"],"'Resume' significa reanudar.",["«Resume» significa reanudar.","«Resuming» = reanudando, no resumiendo.","«Summary» es el nombre; la fórmula es «To sum up» o «In summary»."]],
  ["meaning","«Let me point out…» significa…",["déjenme señalar…","déjenme salir…","déjenme apuntar…","déjenme puntuar…"],"'Point out' = señalar, destacar.",["Salir es «go out» o «step out».","Apuntar (anotar) es «note down»; «point out» = señalar, destacar.","Puntuar es «score» o «mark»."]]
 ]},

{id:'daily-4', scen:'daily', title:'En la farmacia y el médico', summary:'Explicar qué te pasa, pedir cita y entender cómo tomar algo.', level:'A2', mins:10,
 phrases:[
  ["I've got a sore throat and a bit of a cough.","Me duele la garganta y tengo algo de tos.",""],
  ["Do I need a prescription for this?","¿Necesito receta para esto?",""],
  ["How often should I take it?","¿Cada cuánto lo tengo que tomar?",""],
  ["I'd like to book an appointment with a doctor.","Quisiera pedir cita con un médico.",""],
  ["I've had a headache since yesterday.","Tengo dolor de cabeza desde ayer.","Con 'since' se usa 'I've had', no 'I have'."],
  ["Is there a pharmacy open near here?","¿Hay una farmacia abierta cerca?",""],
  ["I'm allergic to penicillin.","Soy alérgica a la penicilina.",""]
 ],
 words:[["prescription","receta médica"],["pharmacy / chemist's","farmacia",1],["painkillers","analgésicos"],["sore throat","dolor de garganta"],["appointment","cita"],["GP","médico de cabecera",1],["side effects","efectos secundarios"],["tablets","pastillas",1]],
 dialogue:[
  ["Pharmacist","Hello, how can I help?","Hola, ¿en qué le ayudo?"],
  ["You","Hi, I've got a sore throat and a bit of a cough.","Hola, me duele la garganta y tengo algo de tos."],
  ["Pharmacist","How long have you had it?","¿Desde cuándo lo tiene?"],
  ["You","Since yesterday. Do I need a prescription for something?","Desde ayer. ¿Necesito receta para algo?"],
  ["Pharmacist","No, these lozenges should help. Take one every three hours.","No, estas pastillas para chupar le ayudarán. Tome una cada tres horas."],
  ["You","Great, thank you. How much are they?","Genial, gracias. ¿Cuánto cuestan?"]
 ],
 quiz:[
  ["translate","«receta médica»",["prescription","recipe","receipt","medical recipe"],"'Recipe' es una receta de cocina; 'receipt' es un recibo.",["«Recipe» es una receta de cocina.","«Receipt» es un recibo.","Mezcla las dos: la receta del médico es «prescription»."]],
  ["complete","I've had a headache ___ yesterday.",["since","for","from","during"],"'Since' + momento de inicio; 'for' + duración (for two days).",["«For» va con duración (for two days); «yesterday» es un punto de inicio: «since».","«From» necesita un final (from Monday to Friday); hasta ahora es «since».","«During» es durante un evento (during the night)."]],
  ["natural","Quieres saber cada cuánto tomar la medicina.",["How often should I take it?","How many times I take?","How often I should take it?","How often should I take?"],"'How often…?' = ¿cada cuánto?",["Falta el auxiliar y el objeto: «How many times should I take it?»; lo natural es «How often…?».","En preguntas el auxiliar va antes del sujeto: «How often should I…?».","Falta «it»: «take» necesita qué (la medicina)."]],
  ["meaning","«GP» en Malta y UK es…",["el médico de cabecera","un especialista","una farmacia","urgencias"],"GP = General Practitioner.",["El especialista es «a specialist» o «a consultant».","La farmacia es «the chemist's» o «pharmacy».","Urgencias es «A&E» (Accident and Emergency)."]],
  ["translate","«Me duele la garganta.»",["I've got a sore throat.","My throat is paining.","I've got a sour throat.","My throat hurts me."],"Lo más natural es 'I've got a sore throat'.",["«Pain» no se usa como verbo así; se dice «My throat hurts» o «I've got a sore throat».","«Sour» = agrio. Dolorida es «sore».","Sobra «me»: «My throat hurts»."]]
 ]},

{id:'daily-5', scen:'daily', title:'Alquilar un piso', summary:'Preguntar por el piso, los gastos, el depósito y avisar de averías.', level:'B1', mins:12,
 phrases:[
  ["Is the flat still available?","¿El piso sigue disponible?",""],
  ["Are the bills included in the rent?","¿Los gastos están incluidos en el alquiler?","'Bills' = luz, agua, internet."],
  ["How much is the deposit?","¿De cuánto es el depósito?",""],
  ["Could I come and see it this week?","¿Podría ir a verlo esta semana?",""],
  ["Is it furnished?","¿Está amueblado?",""],
  ["The boiler isn't working.","El calentador no funciona.","Para avisar al casero de una avería."],
  ["How long is the contract?","¿De cuánto tiempo es el contrato?",""]
 ],
 words:[["flat","piso, apartamento",1],["landlord","casero"],["tenant","inquilino/a"],["rent","alquiler"],["deposit","depósito"],["bills","gastos, facturas"],["furnished","amueblado"],["boiler","calentador de agua",1]],
 dialogue:[
  ["You","Hi, I'm calling about the flat in Gżira. Is it still available?","Hola, llamo por el piso de Gżira. ¿Sigue disponible?"],
  ["Landlord","Yes, it is. It's €950 a month.","Sí. Son 950 € al mes."],
  ["You","Are the bills included in the rent?","¿Los gastos están incluidos?"],
  ["Landlord","Water is, but electricity isn't.","El agua sí, la luz no."],
  ["You","And how much is the deposit?","¿Y de cuánto es el depósito?"],
  ["Landlord","One month's rent. Would you like to come and see it on Thursday?","Un mes de alquiler. ¿Le gustaría venir a verlo el jueves?"]
 ],
 quiz:[
  ["translate","«casero» (dueño del piso)",["landlord","landowner","tenant","host"],"El inquilino es 'tenant'.",["«Landowner» es el dueño de tierras o fincas.","Al revés: «tenant» es el inquilino.","«Host» es el anfitrión."]],
  ["natural","Quieres saber si la luz y el agua van aparte.",["Are the bills included in the rent?","Are the bills including in the rent?","Are the factures included in the rent?","Is the light included in the rent?"],"'Bills' agrupa luz, agua e internet.",["Es «included» (incluidas), no «including».","«Factures» no existe; las facturas de luz y agua son «bills».","En inglés la factura de la luz es «electricity»; para todo junto: «bills»."]],
  ["meaning","«Furnished» significa…",["amueblado","terminado","reformado","con calefacción"],"Sin muebles: 'unfurnished'.",["Terminado es «finished». Se parecen, pero «furnished» = amueblado.","Reformado es «refurbished».","Con calefacción es «with heating»."]],
  ["complete","Could I come and ___ it this week?",["see","watch","look","visit to"],"'Come and see' = ir a ver.",["«Watch» es mirar algo que se mueve (la tele); ir a ver un piso es «come and see».","«Look» necesita «at»: «look at it»; lo natural es «come and see it».","«Visit» va sin «to»: «visit it»."]],
  ["translate","«depósito» (fianza del alquiler)",["deposit","deposition","depot","guarantee money"],"'Deposition' es una declaración legal.",["«Deposition» es una declaración legal.","«Depot» es un almacén o una cochera.","No es la expresión; la fianza es «deposit»."]]
 ]},

{id:'daily-6', scen:'daily', title:'Pedir cita y reservar por teléfono', summary:'Reservar mesa, pedir cita, cambiarla y deletrear tu nombre.', level:'A2', mins:10,
 phrases:[
  ["Hi, I'm calling to book an appointment.","Hola, llamo para pedir una cita.",""],
  ["Have you got anything available on Thursday?","¿Tienen algo disponible el jueves?",""],
  ["Could I book a table for four at eight?","¿Podría reservar una mesa para cuatro a las ocho?",""],
  ["Could I reschedule my appointment?","¿Podría cambiar mi cita?","'Reschedule' = cambiar la fecha o la hora."],
  ["Sorry, could you spell that for me?","Perdón, ¿me lo podría deletrear?",""],
  ["The name's Ana, A-N-A.","A nombre de Ana, A-N-A.","En UK es normal deletrear tu nombre por teléfono."],
  ["Is it okay if I pay when I arrive?","¿Está bien si pago al llegar?",""]
 ],
 words:[["book","reservar",1],["booking","reserva",1],["appointment","cita"],["reschedule","reprogramar"],["cancel","cancelar"],["available","disponible"],["fully booked","completo, sin sitio"],["spell","deletrear"]],
 dialogue:[
  ["Receptionist","Good afternoon, Studio Hair. How can I help?","Buenas tardes, Studio Hair. ¿En qué le ayudo?"],
  ["You","Hi, I'm calling to book an appointment for a haircut.","Hola, llamo para pedir cita para un corte de pelo."],
  ["Receptionist","Sure. When would suit you?","Claro. ¿Cuándo le viene bien?"],
  ["You","Have you got anything available on Thursday afternoon?","¿Tienen algo disponible el jueves por la tarde?"],
  ["Receptionist","We've got four o'clock. Can I take your name?","Tenemos a las cuatro. ¿Me dice su nombre?"],
  ["You","Four's perfect. The name's Ana, A-N-A.","Las cuatro es perfecto. A nombre de Ana, A-N-A."]
 ],
 quiz:[
  ["translate","«reservar» (inglés británico)",["book","reserve me","booking to","make reserve"],"En UK se dice 'book' para mesas, citas y hoteles.",["Sobra «me»; además en UK lo normal es «book».","No es una expresión; reservar es «book».","Calco de «hacer reserva»: sería «make a reservation»; lo normal es «book»."]],
  ["meaning","«We're fully booked» significa…",["está todo reservado, no hay sitio","tenemos todos los libros","está todo vendido","estamos cerrados"],"Lo oirás mucho en restaurantes de Malta en verano.",["Es la trampa literal de «book» (libro).","Vendido es «sold out».","Cerrado es «closed»."]],
  ["natural","Quieres saber si hay hueco el jueves.",["Have you got anything available on Thursday?","Have you got anything free in Thursday?","Have you got something available on Thursday?","You have anything available on Thursday?"],"'Have you got anything available…?' es la fórmula típica.",["Los días van con «on»: «on Thursday».","En preguntas se usa «anything», no «something».","Falta el auxiliar delante: «Have you got…?» o «Do you have…?»."]],
  ["complete","Could I ___ my appointment? I can't make it on Monday.",["reschedule","rechange","replan","move on"],"'Reschedule' = cambiar la fecha u hora.",["No existe; cambiar la fecha es «reschedule».","«Replan» es replanificar algo grande, no una cita.","«Move on» es pasar a otra cosa."]],
  ["translate","«¿Me lo podría deletrear?»",["Could you spell that for me?","Could you letter it for me?","Can you say the letters me?","Could you spell me that?"],"'Spell' = deletrear.",["«Letter» es una carta o una letra; deletrear es «spell».","Calco; además falta «to»: «say the letters to me». Lo natural es «spell».","Orden: «spell that for me»."]]
 ]},

{id:'social-3', scen:'social', title:'Hablar de ti y de tu vida en Malta', summary:'De dónde eres, cuánto llevas aquí y qué extrañas.', level:'A2', mins:10,
 phrases:[
  ["Where are you from originally?","¿De dónde eres?","'Originally' suena natural cuando la persona vive en otro país."],
  ["I moved to Malta last year.","Me mudé a Malta el año pasado.","'Move' = mudarse (sin 'me')."],
  ["Back home, we usually have dinner quite late.","En mi país solemos cenar bastante tarde.","'Back home' = en mi país, de donde vengo."],
  ["What I miss most is the food.","Lo que más extraño es la comida.",""],
  ["How long have you lived here?","¿Cuánto tiempo llevas viviendo aquí?","Con 'how long' se usa 'have you lived', no 'do you live'."],
  ["I'm still getting used to driving on the left.","Todavía me estoy acostumbrando a conducir por la izquierda.","En Malta se conduce por la izquierda."],
  ["It's a lovely place to live.","Es un sitio precioso para vivir.",""]
 ],
 words:[["originally","de origen"],["back home","en mi país"],["move","mudarse"],["miss","extrañar"],["get used to","acostumbrarse a"],["homesick","con nostalgia de casa"],["local","de aquí, local"],["expat","extranjero residente"]],
 dialogue:[
  ["You","So, where are you from originally?","¿Y tú de dónde eres?"],
  ["Liam","I'm from Manchester, but I've lived here for five years.","Soy de Mánchester, pero llevo cinco años viviendo aquí."],
  ["You","Oh, nice! Do you miss home?","¡Qué bien! ¿Extrañas tu casa?"],
  ["Liam","Sometimes. What I miss most is my family. How long have you lived here?","A veces. Lo que más extraño es a mi familia. ¿Cuánto llevas aquí?"],
  ["You","I moved to Malta last year. I'm still getting used to driving on the left!","Me mudé a Malta el año pasado. ¡Todavía me estoy acostumbrando a conducir por la izquierda!"],
  ["Liam","Ha! It takes a while. But it's a lovely place to live.","¡Ja! Lleva un tiempo. Pero es un sitio precioso para vivir."]
 ],
 quiz:[
  ["complete","How long ___ you lived here?",["have","do","are","did"],"Para algo que empezó en el pasado y sigue: 'How long have you lived…?'",["«How long do you live…?» no se usa: algo que empezó y sigue va con «have».","«Are you lived» no existe; es «have you lived».","«Did» es para algo terminado; tú sigues viviendo aquí: «have»."]],
  ["translate","«Lo que más extraño es la comida.»",["What I miss most is the food.","The thing I lose most is the food.","What more I miss is the meal.","What I miss more is the food."],"'Miss' = extrañar; 'lose' = perder.",["«Lose» = perder; extrañar es «miss».","«Lo que más» = «what … most», al final; y «meal» es una comida concreta.","Lo que más = «most»; «more» es comparativo (más que)."]],
  ["meaning","«Back home…» significa…",["en mi país, de donde vengo","volviendo a casa ahora","detrás de la casa","en casa, no en la oficina"],"Muy usado por quienes viven fuera de su país.",["Volver a casa es «going back home» o «on my way home».","Detrás de la casa es «behind the house».","En casa es «at home»; «back home» es tu país."]],
  ["natural","Quieres decir que aún no te acostumbras a algo.",["I'm still getting used to it.","I'm still not used of it.","I'm still getting use to it.","I still don't use to it."],"'Get used to' + algo = acostumbrarse.",["Es «used to», no «used of».","Lleva -d: «used to».","«Use to» es otra cosa (solía); acostumbrarse es «get used to»."]],
  ["translate","«Me mudé a Malta el año pasado.»",["I moved to Malta last year.","I changed to Malta last year.","I moved me to Malta last year.","I moved to Malta the last year."],"'Move' ya significa mudarse.",["«Change» es cambiar; mudarse es «move».","Sobra «me»: «move» ya significa mudarse.","Sobra «the»: «last year»."]]
 ]},

{id:'social-4', scen:'social', title:'El fin de semana y tus aficiones', summary:'Contar qué hiciste, hablar de hobbies y proponer planes.', level:'A2', mins:10,
 phrases:[
  ["What did you get up to at the weekend?","¿Qué hiciste el fin de semana?","Muy británico. 'At the weekend' es UK; en US, 'on the weekend'."],
  ["I went to the beach in Golden Bay.","Fui a la playa en Golden Bay.",""],
  ["I'm really into photography at the moment.","Ahora mismo me gusta mucho la fotografía.","'Be into' = gustarte mucho algo."],
  ["I've just taken up yoga.","Acabo de empezar yoga.","'Take up' = empezar una afición."],
  ["Have you ever been to Mdina?","¿Has ido alguna vez a Mdina?",""],
  ["It was a bit of a disaster, to be honest.","Fue un poco desastre, la verdad.",""],
  ["We should go together sometime.","Deberíamos ir juntas alguna vez.","'Sometime' = algún día; 'sometimes' = a veces."]
 ],
 words:[["get up to","hacer (planes)",1],["be into","gustar mucho"],["take up","empezar (una afición)"],["hobby","afición"],["chill out","relajarse"],["lie-in","quedarse en la cama hasta tarde",1],["day trip","excursión de un día"],["sometime","algún día"]],
 dialogue:[
  ["Sophie","Hi! What did you get up to at the weekend?","¡Hola! ¿Qué hiciste el fin de semana?"],
  ["You","I went to the beach in Golden Bay. And you?","Fui a la playa en Golden Bay. ¿Y tú?"],
  ["Sophie","I had a lie-in and then went to a pottery class. I've just taken it up.","Me quedé en la cama hasta tarde y luego fui a una clase de cerámica. Acabo de empezar."],
  ["You","That's brilliant! I'm really into photography at the moment.","¡Qué bien! Ahora mismo me gusta mucho la fotografía."],
  ["Sophie","Have you ever been to Mdina? It's perfect for photos.","¿Has ido alguna vez a Mdina? Es perfecta para fotos."],
  ["You","Not yet! We should go together sometime.","¡Todavía no! Deberíamos ir juntas alguna vez."]
 ],
 quiz:[
  ["meaning","«What did you get up to?» significa…",["¿Qué hiciste?","¿A qué hora te levantaste?","¿Adónde subiste?","¿Qué compraste?"],"'Get up to' = hacer, en conversaciones informales.",["Eso sería «What time did you get up?»; con «to» al final es «hacer».","Es la trampa literal de «up».","Comprar es «buy»; «get up to» = hacer, andar haciendo."]],
  ["translate","«Acabo de empezar yoga.»",["I've just taken up yoga.","I just started to yoga.","I've just took up yoga.","I've just taken off yoga."],"'Take up' (taken up) = empezar una afición.",["«Start» no lleva «to» antes de un nombre: «I just started yoga». Lo más natural: «taken up».","Después de «have» va el participio: «taken», no «took».","«Take off» = despegar o quitarse ropa; empezar una afición es «take up»."]],
  ["complete","I'm really ___ photography at the moment.",["into","in","on","about"],"'Be into something' = gustarte mucho.",["«Be in» = estar en casa o participar; gustarte mucho es «be into».","No se usa; es «into».","«About» va con «excited about» o «passionate about», no con «be»."]],
  ["natural","Quieres proponer ir juntas a un sitio algún día.",["We should go together sometime.","We should go together sometimes.","We must to go together sometime.","We should go together some time ago."],"'Sometimes' significa 'a veces'.",["«Sometimes» = a veces. Algún día es «sometime».","Después de «must» no va «to».","«Ago» es para el pasado; algún día en el futuro es «sometime»."]],
  ["meaning","«A lie-in» es…",["quedarse en la cama hasta tarde","una mentira","una siesta en el sofá","acostarse temprano"],"Ej.: 'I had a lovely lie-in on Sunday.'",["Es la trampa: «lie» también es mentira, pero «a lie-in» es quedarse en la cama.","La siesta es «a nap».","Acostarse temprano es «an early night»."]]
 ]},

{id:'ig-1', scen:'work', sub:'igaming', title:'Conocer el sector iGaming', summary:'Presentarte a una empresa de iGaming y preguntar por puestos, turnos y formación.', level:'A2', mins:10,
 phrases:[
  ["I'm really interested in working in iGaming.","Me interesa mucho trabajar en iGaming.","iGaming = juegos y apuestas online. Malta es uno de los grandes centros del sector."],
  ["What kind of roles do you have available?","¿Qué tipo de puestos tienen disponibles?",""],
  ["I'd like to apply for the Game Presenter position.","Me gustaría postularme al puesto de Game Presenter.",""],
  ["I'm a native Spanish speaker.","Mi lengua materna es el español.","Muchos estudios buscan presentadores nativos para mesas en su idioma."],
  ["I'm happy to work shifts, including nights and weekends.","No tengo problema en trabajar por turnos, incluidas noches y fines de semana.","Los estudios en vivo suelen funcionar 24/7."],
  ["Is the training paid?","¿La formación es pagada?",""],
  ["Where is the studio based?","¿Dónde está el estudio?",""]
 ],
 words:[["live casino","casino en vivo"],["studio","estudio"],["game presenter","presentador/a de juego en cámara"],["shuffler","barajador/a"],["shift","turno"],["night shift","turno de noche"],["training academy","academia de formación"],["native speaker","hablante nativo/a"]],
 dialogue:[
  ["Recruiter","Hi, thanks for coming in. What made you interested in iGaming?","Hola, gracias por venir. ¿Qué te hizo interesarte por el iGaming?"],
  ["You","I've heard it's a big industry in Malta, and I'd love to work somewhere international.","He oído que es un sector muy grande en Malta y me encantaría trabajar en un sitio internacional."],
  ["Recruiter","Great. We're hiring Game Presenters and Shufflers at the moment.","Genial. Ahora mismo estamos contratando Game Presenters y Shufflers."],
  ["You","I'd like to apply for the Game Presenter position. I'm a native Spanish speaker.","Me gustaría postularme al puesto de Game Presenter. Mi lengua materna es el español."],
  ["Recruiter","Perfect, we've got Spanish tables. Are you comfortable working nights?","Perfecto, tenemos mesas en español. ¿Te sientes cómoda trabajando de noche?"],
  ["You","Yes, I'm happy to work shifts. Is the training paid?","Sí, no tengo problema con los turnos. ¿La formación es pagada?"]
 ],
 quiz:[
  ["natural","Quieres decir que aceptas trabajar de noche y fines de semana.",["I'm happy to work shifts, including nights and weekends.","I'm happy to work shifts, included nights and weekends.","I'm happy to work shifts, including the nights and the weekends.","I don't mind to work nights."],"'Happy to' = no tener problema en. Ojo: 'I don't mind working' (con -ing), no 'to work'.",["Es «including» (incluyendo), no «included».","Sobran los «the»: hablando en general es «nights and weekends».","Después de «mind» va -ing: «I don't mind working nights»."]],
  ["meaning","«Live casino» se refiere a…",["juegos de casino transmitidos en directo con un presentador real","un casino lleno de gente","un casino que está abierto ahora","un casino físico en Malta"],"Los jugadores juegan online mientras un presentador reparte en un estudio.",["«Live» aquí es en directo, no con mucha gente.","«Live» es en directo (por vídeo), no abierto.","No: se juega online, con presentador real en un estudio."]],
  ["translate","«Mi lengua materna es el español.»",["I'm a native Spanish speaker.","I'm a Spanish native speaker of language.","My mother language is the Spanish.","I'm a native speaker Spanish."],"También: 'Spanish is my first language.'",["Sobra «of language»: «I'm a native Spanish speaker».","Sobra «the» con idiomas: «Spanish». Y se dice «mother tongue».","El orden es «a native Spanish speaker»."]],
  ["complete","Is the training ___?",["paid","payed","paying","pay"],"'Paid' es la forma correcta; 'payed' es un error común.",["Error muy común: «pay» es irregular, se escribe «paid».","«Paying» = que paga; tú quieres saber si es pagada: «paid».","Falta el participio: «paid»."]],
  ["meaning","«Night shift» significa…",["turno de noche","camisa de noche","cambio de noche","noche libre"],"'Shift' = turno.",["Es la trampa: «shift» se parece a «shirt» (camisa).","«Shift» también es cambio, pero en el trabajo es turno.","Noche libre es «a night off»."]]
 ]},

{id:'ig-2', scen:'work', sub:'igaming', title:'Entrevista para Game Presenter', summary:'Demostrar seguridad en cámara, trato con la gente y calma.', level:'B1', mins:12,
 phrases:[
  ["I'm confident in front of a camera.","Me siento segura frente a una cámara.","Para seguridad en ti misma: 'confident'."],
  ["I really enjoy interacting with people.","Disfruto mucho interactuando con la gente.","Después de 'enjoy' va el verbo con -ing."],
  ["I can stay calm and friendly, even when it gets busy.","Puedo mantener la calma y ser amable, incluso cuando hay mucho movimiento.",""],
  ["I've got experience presenting to clients.","Tengo experiencia presentando ante clientes.","Tu experiencia presentando proyectos de arquitectura cuenta."],
  ["I learn new rules and procedures quickly.","Aprendo rápido reglas y procedimientos nuevos.",""],
  ["If I make a mistake on camera, I just smile and keep going.","Si me equivoco en cámara, sonrío y sigo adelante.",""],
  ["Could you tell me more about the camera test?","¿Me podría contar más sobre la prueba de cámara?","Algunos procesos incluyen una prueba frente a cámara."]
 ],
 words:[["on camera","en cámara"],["camera test","prueba de cámara"],["outgoing","extrovertido/a"],["engaging","que engancha, atractivo/a"],["deal","repartir (cartas)"],["host","presentar, conducir"],["player","jugador/a"],["procedure","procedimiento"]],
 dialogue:[
  ["Manager","Why do you think you'd be a good Game Presenter?","¿Por qué crees que serías una buena Game Presenter?"],
  ["You","I'm confident in front of a camera and I really enjoy interacting with people.","Me siento segura frente a una cámara y disfruto mucho interactuando con la gente."],
  ["Manager","Have you got any experience presenting?","¿Tienes experiencia presentando?"],
  ["You","Yes, as an architect I presented projects to clients almost every week.","Sí, como arquitecta presentaba proyectos a clientes casi todas las semanas."],
  ["Manager","Great. What would you do if you made a mistake live?","Genial. ¿Qué harías si te equivocaras en directo?"],
  ["You","I'd stay calm, smile and keep going. I learn new procedures quickly.","Mantendría la calma, sonreiría y seguiría. Aprendo rápido los procedimientos nuevos."]
 ],
 quiz:[
  ["natural","Te preguntan por qué serías buena presentadora. ¿Qué dices?",["I'm confident in front of a camera and I enjoy interacting with people.","I'm confident in front of a camera and I enjoy to interact with people.","I'm confident in front of a camera and I enjoy interacting with the people.","Because I talk a lot."],"Habla de habilidades: seguridad en cámara, trato con la gente, calma.",["Después de «enjoy» va -ing: «enjoy interacting».","Sobra «the»: con gente en general es «with people».","No vende tus habilidades: habla de seguridad en cámara y trato con la gente."]],
  ["meaning","«Outgoing» describe a alguien…",["extrovertido y sociable","que sale mucho de casa","que se va de la empresa","tímido"],"Es una cualidad muy buscada para Game Presenter.",["Literal de «go out»; «outgoing» describe la personalidad sociable.","Ese es otro uso (saliente: «the outgoing manager»), pero describiendo a alguien es extrovertido.","Al revés: tímido es «shy»."]],
  ["complete","I really enjoy ___ with people.",["interacting","to interact","interact","interacted"],"Después de 'enjoy' va el verbo con -ing.",["Después de «enjoy» va -ing, no «to».","Después de «enjoy» va -ing.","Después de «enjoy» va -ing, no el pasado."]],
  ["translate","«Me siento segura frente a una cámara.»",["I'm confident in front of a camera.","I feel safe in front of a camera.","I'm secure in front of the camera.","I'm sure in front of a camera."],"'Safe' es estar a salvo, no tener seguridad en ti misma.",["«Safe» es estar a salvo, no tener seguridad en ti misma.","«Secure» es protegido o estable; la seguridad en ti misma es «confident».","«Sure» = estar segura de un dato, no de ti misma."]],
  ["translate","«repartir» (cartas)",["deal","share","distribute","give out"],"'Deal the cards' = repartir las cartas.",["«Share» es compartir.","Es repartir en general, pero las cartas se «deal».","Es repartir folletos o regalos; las cartas se «deal»."]]
 ]},

{id:'ig-3', scen:'work', sub:'igaming', title:'En la mesa en vivo', summary:'Las frases que dice un presentador: saludar, abrir y cerrar apuestas, hablar con el chat.', level:'B1', mins:12,
 phrases:[
  ["Good evening and welcome to the table!","¡Buenas noches y bienvenidos a la mesa!",""],
  ["Place your bets, please.","Hagan sus apuestas, por favor.","Frase clásica de la ruleta."],
  ["No more bets.","No va más.","Se dice cuando se cierran las apuestas."],
  ["Let's see where the ball lands.","Veamos dónde cae la bola.",""],
  ["Congratulations to all our winners!","¡Felicidades a todos los ganadores!",""],
  ["I can see some new faces in the chat. Welcome!","Veo caras nuevas en el chat. ¡Bienvenidos!","Los presentadores leen el chat y responden a los jugadores."],
  ["Thanks for playing with me tonight. Good luck!","Gracias por jugar conmigo esta noche. ¡Buena suerte!",""]
 ],
 words:[["bet","apuesta / apostar"],["chips","fichas"],["roulette wheel","rueda de la ruleta"],["blackjack","blackjack (veintiuno)"],["hit / stand","pedir carta / plantarse"],["bust","pasarse (de 21)"],["payout","pago de un premio"],["round","ronda"]],
 dialogue:[
  ["Presenter","Good evening and welcome to the table! I'm Ana, your presenter tonight.","¡Buenas noches y bienvenidos a la mesa! Soy Ana, su presentadora esta noche."],
  ["Player","Hi Ana! Good luck, everyone.","¡Hola Ana! Buena suerte a todos."],
  ["Presenter","Hi, thanks for joining! Place your bets, please.","¡Hola, gracias por unirte! Hagan sus apuestas, por favor."],
  ["Player","All on red this time!","¡Todo al rojo esta vez!"],
  ["Presenter","Brave choice! No more bets. Let's see where the ball lands.","¡Qué valiente! No va más. Veamos dónde cae la bola."],
  ["Player","Come on, red!","¡Vamos, rojo!"]
 ],
 quiz:[
  ["natural","La ruleta va a girar y quieres cerrar las apuestas.",["No more bets.","No more bet.","No more bettings.","Bets are closed of now."],"'No more bets' es la frase estándar.",["Va en plural: «No more bets».","La palabra es «bets», no «bettings».","Calco; la frase estándar es «No more bets»."]],
  ["translate","«fichas» (de casino)",["chips","tokens","cards","files"],"En un casino, 'chips' son las fichas.",["«Tokens» son fichas en general (de juego o de máquina), pero en el casino son «chips».","«Cards» son las cartas.","«Files» son archivos."]],
  ["meaning","En blackjack, «bust» significa…",["pasarse de 21","ganar la mano","pedir otra carta","plantarse"],"'Hit' = pedir carta; 'stand' = plantarse.",["Ganar es «win the hand».","Pedir carta es «hit».","Plantarse es «stand»."]],
  ["complete","Let's see where the ball ___.",["lands","falls down","arrives","is landing to"],"'Land' = caer, aterrizar.",["«Fall down» = caerse (alguien al suelo).","«Arrive» es llegar a un sitio, no caer en una casilla.","Sobra «to», y para algo que va a pasar es «lands»."]],
  ["natural","Un jugador nuevo escribe en el chat. ¿Cómo lo saludas?",["Hi, thanks for joining! Welcome to the table.","Hi, thanks for join! Welcome to the table.","Hi, thanks for joining! Welcome in the table.","Who are you?"],"Cercano y profesional: saluda y agradece.",["Después de «for» va -ing: «thanks for joining».","Es «welcome to the table», no «in».","Suena brusco; saluda y agradece."]]
 ]},

{id:'ig-4', scen:'work', sub:'igaming', title:'Entrevista para Shuffler', summary:'Hablar de precisión, concentración, procedimientos y turnos.', level:'A2', mins:10,
 phrases:[
  ["I'm very precise and I pay attention to detail.","Soy muy precisa y presto atención a los detalles.",""],
  ["I always follow procedures carefully.","Siempre sigo los procedimientos con cuidado.",""],
  ["I'm comfortable doing tasks that need a lot of concentration.","Me siento cómoda haciendo tareas que requieren mucha concentración.",""],
  ["I understand how important security is in this job.","Entiendo lo importante que es la seguridad en este trabajo.",""],
  ["I can work on my own or as part of a team.","Puedo trabajar sola o en equipo.",""],
  ["What does a typical shift look like?","¿Cómo es un turno típico?",""],
  ["I'd be happy to cover colleagues' shifts if needed.","Con gusto cubriría turnos de compañeros si hace falta.","La flexibilidad con los turnos se valora mucho."]
 ],
 words:[["shuffle","barajar"],["deck","baraja"],["count the cards","contar las cartas"],["card shoe","sabot, dispensador de cartas"],["gaming floor","zona de juego"],["audit","auditoría"],["attention to detail","atención al detalle"],["cover a shift","cubrir un turno"]],
 dialogue:[
  ["Supervisor","So, why are you interested in the Shuffler role?","¿Y por qué te interesa el puesto de Shuffler?"],
  ["You","I'm very precise and I pay attention to detail. I think it suits me.","Soy muy precisa y presto atención a los detalles. Creo que va conmigo."],
  ["Supervisor","The job is quite repetitive. Is that okay for you?","El trabajo es bastante repetitivo. ¿Te parece bien?"],
  ["You","Yes, I'm comfortable doing tasks that need a lot of concentration.","Sí, me siento cómoda con tareas que requieren mucha concentración."],
  ["Supervisor","You'll shuffle and count the cards, and keep everything ready for the tables.","Barajarás y contarás las cartas, y lo tendrás todo listo para las mesas."],
  ["You","Sounds good. What does a typical shift look like?","Suena bien. ¿Cómo es un turno típico?"]
 ],
 quiz:[
  ["translate","«barajar» (cartas)",["shuffle","mix","shake","deal"],"'Shuffle' = barajar. De ahí 'shuffler'.",["«Mix» es mezclar en general; las cartas se «shuffle».","«Shake» = agitar.","«Deal» es repartir, no barajar."]],
  ["translate","«baraja»",["deck","barrage","set of cards","desk"],"En UK también se dice 'a pack of cards'.",["«Barrage» es una lluvia de algo (críticas, preguntas).","No es la palabra; la baraja es «deck» o «pack of cards».","¡Ojo! «Desk» es el escritorio; la baraja es «deck»."]],
  ["natural","Quieres decir que eres detallista.",["I pay attention to detail.","I'm very detailist.","I pay attention to details of all.","I put attention to detail."],"'Detailist' no existe. Di 'I pay attention to detail' o 'I'm detail-oriented'.",["«Detailist» no existe.","Calco; es «I pay attention to detail».","La atención se «pay», no se «put»."]],
  ["complete","I always follow procedures ___.",["carefully","careful","with careful","care"],"Para describir cómo haces algo: adverbio con -ly.",["«Careful» es adjetivo; para cómo haces algo: «carefully».","Sería «with care»; lo natural es «carefully».","«Care» es el nombre (cuidado)."]],
  ["meaning","«Could you cover my shift on Friday?» significa…",["¿Podrías hacer mi turno el viernes?","¿Podrías tapar mi camisa el viernes?","¿Podrías cambiarme el turno del viernes?","¿Podrías avisarme del turno del viernes?"],"'Cover a shift' = hacer el turno de otra persona.",["Trampa: «shift» se parece a «shirt».","Cambiar turnos es «swap shifts»; «cover» es hacerlo tú en mi lugar.","Avisar es «let me know»."]]
 ]},

{id:'ig-5', scen:'work', sub:'igaming', title:'Turnos y normas en el estudio', summary:'El día a día: calendario de turnos, descansos, mesas y transporte nocturno.', level:'B1', mins:10,
 phrases:[
  ["What are the shift patterns like?","¿Cómo son los horarios de turnos?",""],
  ["I'm on nights this week.","Esta semana estoy en el turno de noche.","'Be on nights' = trabajar de noche (informal)."],
  ["When's my next break?","¿Cuándo es mi próximo descanso?",""],
  ["I'll be on table three after my break.","Después del descanso estaré en la mesa tres.",""],
  ["Is there a dress code?","¿Hay código de vestimenta?",""],
  ["Is there transport after a night shift?","¿Hay transporte después de un turno de noche?","Algunas empresas lo ofrecen para los turnos nocturnos."],
  ["Sorry, I'm running late. I'll be there in ten minutes.","Perdón, voy con retraso. Llego en diez minutos.",""]
 ],
 words:[["shift pattern","horario de turnos"],["rota","calendario de turnos",1],["break","descanso"],["rotation","rotación"],["dress code","código de vestimenta"],["supervisor","supervisor/a"],["clock in","fichar al entrar"],["24/7","las 24 horas, todos los días"]],
 dialogue:[
  ["You","Hi Marco, have you seen the rota for next week?","Hola Marco, ¿has visto el calendario de turnos de la semana que viene?"],
  ["Marco","Yes, you're on nights from Monday.","Sí, estás en el turno de noche desde el lunes."],
  ["You","Oh, okay. Is there transport after a night shift?","Ah, vale. ¿Hay transporte después de un turno de noche?"],
  ["Marco","Yes, there's a minibus at seven in the morning.","Sí, hay un minibús a las siete de la mañana."],
  ["You","Great. And when's my next break today?","Genial. ¿Y cuándo es mi próximo descanso hoy?"],
  ["Marco","In twenty minutes. After that, you'll be on table three.","En veinte minutos. Después estarás en la mesa tres."]
 ],
 quiz:[
  ["meaning","«You're on nights from Monday» significa…",["desde el lunes trabajas en el turno de noche","el lunes sales de fiesta","los lunes por la noche descansas","el lunes empiezas de día"],"'Be on nights' = trabajar en el turno de noche.",["Salir de fiesta es «go out».","Descansar es «have the night off».","Turno de día es «days»; «on nights» es de noche."]],
  ["translate","«código de vestimenta»",["dress code","clothes code","code of dressing","dressing code"],"Ej.: 'Is there a dress code for the studio?'",["No se dice así; es «dress code».","Calco; es «dress code».","Casi: es «dress code», sin -ing."]],
  ["natural","Vas tarde al turno y avisas al supervisor.",["Sorry, I'm running late. I'll be there in ten minutes.","Sorry, I'm running late. I'll be there in ten minutes later.","Sorry, I'm running late. I'm there in ten minutes.","Wait me ten minutes."],"'Wait me' es un error común; se dice 'wait for me'.",["Sobra «later»: «in ten minutes» ya dice cuándo.","Para una promesa sobre el futuro: «I'll be there».","«Wait me» es un error común; se dice «wait for me»."]],
  ["complete","When's my next ___?",["break","rest","pause","stop"],"En el trabajo, el descanso es 'break'.",["«Rest» es descanso en general; la pausa en el trabajo es «break».","«Pause» es una pausa breve (en un vídeo); en el trabajo: «break».","«Stop» es una parada (de bus)."]],
  ["meaning","«24/7» significa…",["las 24 horas, todos los días","el 24 de julio","24 empleados y 7 mesas","de 24 a 7 horas"],"Se lee 'twenty-four seven'.",["Las fechas no se escriben así en inglés británico; es 24 horas, 7 días.","No: son 24 horas, 7 días a la semana.","No es un horario: es todo el día, todos los días."]]
 ]},

{id:'ig-6', scen:'work', sub:'igaming', title:'Diseño y otros puestos en iGaming', summary:'Postularte como diseñadora gráfica y usar tu español como ventaja.', level:'B1', mins:12,
 phrases:[
  ["I'd love to work as a graphic designer in iGaming.","Me encantaría trabajar como diseñadora gráfica en iGaming.",""],
  ["I designed banners and promotional materials.","Diseñaba banners y materiales promocionales.",""],
  ["I'm comfortable with Photoshop, Illustrator and Figma.","Manejo bien Photoshop, Illustrator y Figma.","Cambia los programas por los que domines."],
  ["I could also help with Spanish-speaking markets.","También podría ayudar con los mercados hispanohablantes.","Hablar español es una ventaja real en muchas empresas de Malta."],
  ["Could you tell me more about the team I'd be working with?","¿Me podría contar más sobre el equipo con el que trabajaría?",""],
  ["I'm keen to learn more about responsible gaming.","Me interesa aprender más sobre el juego responsable.","'Responsible gaming' es un tema importante en el sector."],
  ["Here's a link to my online portfolio.","Aquí tiene el enlace a mi portafolio online.",""]
 ],
 words:[["graphic designer","diseñador/a gráfico/a"],["banner","banner"],["promotion","promoción"],["customer support","atención al cliente"],["localisation","localización (adaptar a otro idioma)",1],["compliance","cumplimiento normativo"],["responsible gaming","juego responsable"],["brand guidelines","manual de marca"]],
 dialogue:[
  ["Interviewer","I see you've got a design background. What kind of work interests you?","Veo que tienes formación en diseño. ¿Qué tipo de trabajo te interesa?"],
  ["You","I'd love to work as a graphic designer in iGaming, on banners and promotions.","Me encantaría trabajar como diseñadora gráfica en iGaming, en banners y promociones."],
  ["Interviewer","Which tools do you use?","¿Qué herramientas usas?"],
  ["You","I'm comfortable with Photoshop, Illustrator and Figma. Here's a link to my portfolio.","Manejo bien Photoshop, Illustrator y Figma. Aquí tiene el enlace a mi portafolio."],
  ["Interviewer","Great. We also work a lot with Latin American markets.","Genial. También trabajamos mucho con mercados latinoamericanos."],
  ["You","That's perfect. I'm a native Spanish speaker, so I could help with localisation too.","Perfecto. Mi lengua materna es el español, así que también podría ayudar con la localización."]
 ],
 quiz:[
  ["translate","«Manejo bien Photoshop.»",["I'm comfortable with Photoshop.","I manage Photoshop well.","I handle good Photoshop.","I'm comfortable in Photoshop."],"'Manage' es gestionar o dirigir; para herramientas di 'I'm comfortable with' o 'I'm good at'.",["«Manage» es gestionar o dirigir; para herramientas: «I'm comfortable with».","«Good» es adjetivo y el orden falla; sería «I'm good at Photoshop».","Es «comfortable with», no «in»."]],
  ["meaning","«Localisation» en una empresa es…",["adaptar un producto a otro idioma y cultura","encontrar la ubicación de algo","el lugar de la oficina","traducir palabra por palabra"],"Ortografía británica: 'localisation'; americana: 'localization'.",["Encontrar la ubicación es «locate» o «location».","La ubicación de la oficina es «the office location».","Traducir es «translate»; «localisation» adapta también la cultura."]],
  ["natural","Quieres compartir tu trabajo con el entrevistador.",["Here's a link to my online portfolio.","Here's a link of my online portfolio.","Look my works in internet.","Here you have my link of portfolio."],"'Here's a link to…' es la forma más natural.",["Un enlace a algo = «a link to», no «of».","Falta «at» y sobra el plural: «Have a look at my work online».","Calco; lo natural es «Here's a link to my portfolio»."]],
  ["complete","I'm keen ___ learn more about responsible gaming.",["to","for","of","on"],"'Keen to' + verbo = tener muchas ganas de.",["«Keen on» + algo o «keen to» + verbo; «for» no se usa.","No se usa con «keen».","«Keen on» va con nombre o -ing (keen on gaming); con verbo base es «keen to»."]],
  ["translate","«atención al cliente»",["customer support","client attention","attention to the client","costumer support"],"También se dice 'customer service'.",["Calco; se dice «customer support» o «customer service».","Calco; se dice «customer support».","Se escribe «customer»; «costume» es un disfraz."]]
 ]},

{id:'social-5', scen:'social', title:'Contar una anécdota', summary:'Enganchar a tus amigos con una historia: empezar, crear tensión y cerrar.', level:'B1', mins:12,
 phrases:[
  ["You'll never guess what happened to me.","No te vas a creer lo que me pasó.","La forma clásica de empezar una anécdota."],
  ["So, there I was, waiting for the bus…","Y ahí estaba yo, esperando el bus…","Para meter al oyente en la escena."],
  ["And then, out of nowhere, it started pouring.","Y de repente, de la nada, empezó a diluviar.",""],
  ["Long story short, I missed my flight.","Para no hacer el cuento largo, perdí el vuelo.","'Long story short' = resumiendo."],
  ["The funny thing is, nobody noticed.","Lo gracioso es que nadie se dio cuenta.",""],
  ["I couldn't stop laughing.","No podía parar de reír.",""],
  ["Anyway, in the end it all worked out.","En fin, al final todo salió bien.",""]
 ],
 words:[["anecdote","anécdota"],["out of nowhere","de la nada"],["long story short","resumiendo"],["pour (with rain)","diluviar",1],["suddenly","de repente"],["guess","adivinar"],["work out","salir bien"],["happen","pasar, ocurrir"]],
 dialogue:[
  ["You","You'll never guess what happened to me yesterday.","No te vas a creer lo que me pasó ayer."],
  ["Jess","Go on, tell me!","¡Venga, cuéntame!"],
  ["You","So, there I was, waiting for the bus in Sliema, and out of nowhere it started pouring.","Ahí estaba yo, esperando el bus en Sliema, y de la nada empezó a diluviar."],
  ["Jess","Oh no! Did you have an umbrella?","¡Ay no! ¿Tenías paraguas?"],
  ["You","No! Long story short, I got completely soaked. The funny thing is, the sun came out five minutes later.","¡No! Resumiendo, acabé empapada. Lo gracioso es que salió el sol cinco minutos después."],
  ["Jess","Typical Malta! I can't stop laughing.","¡Típico de Malta! No puedo parar de reír."]
 ],
 quiz:[
  ["natural","Quieres empezar una anécdota con suspense.",["You'll never guess what happened to me.","You'll never guess what passed me.","You'll never guess what it happened to me.","You'll never guess what happened me."],"'Happen' = pasar, ocurrir. 'Pass' es pasar de un lugar a otro.",["«Pass» es pasar de un lugar a otro; ocurrir es «happen».","Sobra «it»: «what happened».","Falta «to»: «happened to me»."]],
  ["meaning","«Long story short» significa…",["resumiendo, para no alargarlo","una historia corta","una historia muy larga","al final de la historia"],"Se usa para saltar al final de una historia.",["Es la trampa literal; la expresión es «resumiendo».","Al revés: sirve para acortarla.","Eso sería «in the end»."]],
  ["complete","And then, out of ___, it started raining.",["nowhere","anywhere","somewhere","no place"],"'Out of nowhere' = de la nada.",["La expresión fija es «out of nowhere».","«Out of somewhere» no existe.","No es la expresión; es «nowhere»."]],
  ["translate","«No podía parar de reír.»",["I couldn't stop laughing.","I couldn't stop to laugh.","I can't stop of laughing.","I couldn't stop laugh."],"Después de 'stop' va -ing cuando dejas de hacer algo.",["«Stop to laugh» = pararse para reír. Dejar de hacer algo: «stop laughing».","Sobra «of», y es pasado: «couldn't».","Después de «stop» va -ing: «laughing»."]],
  ["translate","«Al final todo salió bien.»",["In the end, it all worked out.","At the end, it all worked out.","In the end, it all worked up.","In the end, everything went out good."],"'Work out' = salir bien.",["«At the end» es al final de algo (at the end of the film); «finalmente» es «in the end».","Es «worked out»; «work up» es otra cosa.","«Go out» = salir; salir bien es «work out»."]]
 ]},

{id:'social-6', scen:'social', title:'Cosas que amas y cosas que odias', summary:'Hablar de lo que te encanta, lo que no soportas y tus manías.', level:'A2', mins:10,
 phrases:[
  ["I absolutely love lazy Sunday mornings.","Me encantan las mañanas tranquilas de domingo.",""],
  ["I can't stand people who talk during films.","No soporto a la gente que habla durante las películas.","'Can't stand' = no soportar."],
  ["It drives me mad when the bus is late.","Me saca de quicio cuando el bus llega tarde.","'Drive someone mad' = volver loco a alguien."],
  ["I'm not a big fan of spicy food.","No soy muy fan de la comida picante.","Forma suave de decir que algo no te gusta."],
  ["My biggest pet peeve is loud chewing.","Mi mayor manía es la gente que mastica fuerte.","'Pet peeve' = algo pequeño que te molesta mucho."],
  ["I'm obsessed with this new café.","Estoy obsesionada con esta cafetería nueva.",""],
  ["Honestly, it's not really my thing.","La verdad, no es lo mío.",""]
 ],
 words:[["can't stand","no soportar"],["pet peeve","manía, lo que más te molesta"],["drive someone mad","sacar de quicio"],["be obsessed with","estar obsesionado/a con"],["be a fan of","ser fan de"],["annoying","molesto/a"],["hate","odiar"],["adore","adorar"]],
 dialogue:[
  ["Tom","Okay, quick question: what's something you absolutely love?","Vale, pregunta rápida: ¿qué es algo que te encanta?"],
  ["You","Lazy Sunday mornings with a good coffee. What about you?","Las mañanas tranquilas de domingo con un buen café. ¿Y tú?"],
  ["Tom","Same! And what's your biggest pet peeve?","¡Igual! ¿Y cuál es tu mayor manía?"],
  ["You","I can't stand people who talk during films. It drives me mad!","No soporto a la gente que habla durante las películas. ¡Me saca de quicio!"],
  ["Tom","Oh, me too. And loud chewing. I hate it.","Uf, yo también. Y masticar fuerte. Lo odio."],
  ["You","Ha! I'm not a big fan of that either.","¡Ja! A mí tampoco me gusta nada."]
 ],
 quiz:[
  ["translate","«No soporto el ruido.»",["I can't stand noise.","I can't support noise.","I don't stand the noise.","I can't bear of noise."],"'Support' es apoyar. Para 'no soportar': 'can't stand'.",["«Support» es apoyar. No soportar es «can't stand».","Se dice con «can't»: «I can't stand».","Sobra «of»: «I can't bear noise»."]],
  ["meaning","«Pet peeve» es…",["algo pequeño que te molesta mucho","tu mascota favorita","un animal molesto","algo que te encanta"],"Ej.: 'My pet peeve is people who are always late.'",["Es la trampa literal de «pet» (mascota).","Literal; es algo pequeño que te saca de quicio.","Al revés: es algo que te molesta."]],
  ["complete","It ___ me mad when people are late.",["drives","makes go","puts","gets"],"'Drive someone mad' = sacar de quicio.",["«Make me go mad» existe, pero la frase fija es «drives me mad».","«Put me mad» no existe.","«Get mad» = enfadarse tú; con «me» en medio es «drives me mad»."]],
  ["natural","Quieres decir con suavidad que algo no te gusta.",["I'm not a big fan of it.","I'm not a big fan from it.","I'm not a big fan with it.","I don't like nothing of it."],"'Not a big fan of' suena educado y natural.",["Es «a fan of», no «from».","Es «a fan of», no «with».","Doble negación y suena duro; suaviza con «not a big fan of»."]],
  ["translate","«No es lo mío.»",["It's not really my thing.","It's not mine.","It's not my thing of me.","It's not really my stuff."],"Expresión muy común para rechazar algo con suavidad.",["«It's not mine» = no es mío (mi propiedad).","Sobra «of me».","La expresión fija es «my thing», no «my stuff»."]]
 ]},

{id:'social-7', scen:'social', title:'Teorías y conspiraciones', summary:'Hablar de teorías, misterios y rumores: creer, dudar y preguntar.', level:'B1', mins:12,
 phrases:[
  ["Do you believe in aliens?","¿Crees en los extraterrestres?","'Believe in' = creer en la existencia de algo."],
  ["There's a theory that the Moon landing was fake.","Hay una teoría de que la llegada a la Luna fue falsa.",""],
  ["Apparently, it was all a cover-up.","Al parecer, todo fue un encubrimiento.","'Apparently' = al parecer, según dicen."],
  ["I'm a bit sceptical about that.","Soy un poco escéptica con eso.","'Sceptical' con c es la ortografía británica."],
  ["That sounds a bit far-fetched to me.","Eso me suena un poco rebuscado.","'Far-fetched' = poco creíble."],
  ["Where did you hear that?","¿Dónde has oído eso?",""],
  ["I wouldn't be surprised if it were true.","No me sorprendería que fuera verdad.",""]
 ],
 words:[["conspiracy theory","teoría de la conspiración"],["sceptical","escéptico/a",1],["far-fetched","poco creíble"],["apparently","al parecer"],["evidence","pruebas"],["rumour","rumor",1],["cover-up","encubrimiento"],["believe in","creer en"]],
 dialogue:[
  ["Dan","Okay, random question: do you believe in aliens?","Vale, pregunta random: ¿crees en los extraterrestres?"],
  ["You","Hmm, maybe. The universe is huge. Why?","Mmm, quizás. El universo es enorme. ¿Por qué?"],
  ["Dan","I watched a documentary. Apparently, the government knows more than they say.","Vi un documental. Al parecer, el gobierno sabe más de lo que dice."],
  ["You","I'm a bit sceptical about that. Where's the evidence?","Soy un poco escéptica con eso. ¿Dónde están las pruebas?"],
  ["Dan","That's the point! It's all a cover-up.","¡Esa es la cuestión! Todo es un encubrimiento."],
  ["You","Ha! That sounds a bit far-fetched to me, but I'd love to watch it.","¡Ja! Me suena un poco rebuscado, pero me encantaría verlo."]
 ],
 quiz:[
  ["complete","Do you believe ___ ghosts?",["in","on","at","to"],"'Believe in' = creer en la existencia de algo.",["Calco de «creer en»; con existencia se dice «believe in».","No se usa con «believe».","No se usa con «believe»."]],
  ["meaning","«That sounds far-fetched» significa…",["eso suena poco creíble","eso suena lejano","eso suena genial","eso suena raro"],"Para algo difícil de creer.",["Es la trampa literal de «far» (lejos).","Genial es «sounds great».","Raro es «weird» o «strange»; «far-fetched» es poco creíble, exagerado."]],
  ["translate","«pruebas» (de algo)",["evidence","proofs","tests","evidences"],"'Evidence' no lleva plural.",["En este sentido no se usa en plural; es «evidence».","«Tests» son exámenes o análisis.","«Evidence» es incontable: nunca lleva -s."]],
  ["natural","Un amigo te cuenta algo raro y quieres saber de dónde lo sacó.",["Where did you hear that?","Where did you listen that?","Where you heard that?","Where did you heard that?"],"Para escuchar algo por casualidad o por otros: 'hear'.",["«Listen» es escuchar con atención y lleva «to»; enterarse de algo es «hear».","Falta el auxiliar: «Where did you hear that?».","Después de «did» va la forma base: «hear»."]],
  ["translate","«Al parecer, fue un error.»",["Apparently, it was a mistake.","Apparent, it was a mistake.","Apparently, it was a mistaken.","Apparently, was a mistake."],"'Apparently' se usa muchísimo al contar lo que dicen otros.",["«Apparent» es adjetivo; al inicio de la frase va el adverbio «apparently».","«Mistaken» = equivocado (una persona); un error es «a mistake».","Falta el sujeto «it»: «it was a mistake»."]]
 ]},

{id:'social-8', scen:'social', title:'Humor, bromas y «banter»', summary:'Bromear como los británicos y entender cuándo alguien te está tomando el pelo.', level:'B1', mins:10,
 phrases:[
  ["I'm only joking!","¡Solo estoy bromeando!",""],
  ["You're pulling my leg!","¡Me estás tomando el pelo!","Literalmente 'me tiras de la pierna'."],
  ["That's hilarious!","¡Eso es divertidísimo!",""],
  ["I nearly died laughing.","Casi me muero de la risa.",""],
  ["Don't take it the wrong way.","No te lo tomes a mal.",""],
  ["She's got a brilliant sense of humour.","Tiene un sentido del humor genial.","'Humour' con u es la ortografía británica."],
  ["It's an inside joke, sorry.","Es una broma interna, perdón.",""]
 ],
 words:[["banter","bromas entre amigos",1],["joke","broma, chiste"],["pull someone's leg","tomar el pelo"],["hilarious","divertidísimo"],["take the mickey","burlarse",1],["sarcastic","sarcástico/a"],["crack up","partirse de risa"],["pun","juego de palabras"]],
 dialogue:[
  ["Ollie","I heard you're moving to the North Pole.","He oído que te mudas al Polo Norte."],
  ["You","What? You're pulling my leg!","¿Qué? ¡Me estás tomando el pelo!"],
  ["Ollie","Ha! I'm only joking. Don't take it the wrong way.","¡Ja! Solo estoy bromeando. No te lo tomes a mal."],
  ["You","Don't worry. That was actually hilarious.","Tranquilo. La verdad es que fue divertidísimo."],
  ["Ollie","British banter. You'll get used to it.","Humor británico. Te acostumbrarás."],
  ["You","I already love it. You've got a great sense of humour.","Ya me encanta. Tienes un sentido del humor genial."]
 ],
 quiz:[
  ["meaning","«You're pulling my leg!» significa…",["¡Me estás tomando el pelo!","¡Me estás tirando de la pierna!","¡Me estás poniendo nerviosa!","¡Me estás dando la lata!"],"Expresión muy británica.",["Es la traducción literal; la expresión significa tomar el pelo.","Eso es «You're getting on my nerves».","Dar la lata es «You're bugging me» o «nagging me»."]],
  ["natural","Dijiste algo en broma y quieres aclararlo.",["I'm only joking!","I'm only joke!","I'm only making a joke to you!","I'm only kidding you!"],"'I'm only joking' o 'I'm just kidding'.",["«Joke» necesita -ing: «I'm only joking».","Calco; la frase natural es «I'm only joking».","Sin «you»: «I'm only kidding» o «I'm just kidding»."]],
  ["translate","«Casi me muero de la risa.»",["I nearly died laughing.","I almost died of the laugh.","I nearly died of laughs.","I nearly dead laughing."],"Expresión fija: 'die laughing'.",["La expresión fija es «die laughing», con -ing y sin «of the».","Es «died laughing», no «of laughs».","«Dead» es el adjetivo (muerto); el verbo es «died»."]],
  ["meaning","«Banter» es…",["bromas y piques amistosos entre amigos","un insulto serio","una discusión","un tipo de chiste escrito"],"En UK es parte de la amistad: bromear sin ofender.",["Al revés: el «banter» es en broma, sin ofender.","Una discusión es «an argument».","Un chiste es «a joke»; el «banter» es piques amistosos al hablar."]],
  ["complete","Don't take it the ___ way.",["wrong","bad","evil","mistake"],"'Take something the wrong way' = tomárselo a mal.",["La expresión fija es «take it the wrong way».","«Evil» es malvado, del mal.","«Mistake» es un nombre (un error); aquí va el adjetivo «wrong»."]]
 ]},

{id:'social-9', scen:'social', title:'Momentos vergonzosos', summary:'Contar algo que te dio vergüenza y reírte de ti misma.', level:'B1', mins:10,
 phrases:[
  ["It was so embarrassing!","¡Fue tan vergonzoso!","Ojo: 'embarrassed' es avergonzada, no embarazada."],
  ["I went bright red.","Me puse roja como un tomate.",""],
  ["I wanted the ground to swallow me up.","Quería que me tragara la tierra.",""],
  ["Everyone was staring at me.","Todo el mundo me estaba mirando.","'Stare' = mirar fijamente."],
  ["I tripped over in front of my boss.","Me tropecé delante de mi jefe.",""],
  ["Luckily, I just laughed it off.","Por suerte, me lo tomé con humor.","'Laugh it off' = quitarle importancia riéndote."],
  ["Has that ever happened to you?","¿Te ha pasado alguna vez?",""]
 ],
 words:[["embarrassing","vergonzoso/a"],["embarrassed","avergonzado/a"],["awkward","incómodo/a"],["blush / go red","sonrojarse"],["clumsy","torpe"],["trip over","tropezar"],["spill","derramar"],["laugh it off","tomárselo con humor"]],
 dialogue:[
  ["Mia","What's the most embarrassing thing that's ever happened to you?","¿Qué es lo más vergonzoso que te ha pasado?"],
  ["You","Oh no… On my first day at work, I tripped over in front of my boss.","Ay no… El primer día de trabajo me tropecé delante de mi jefe."],
  ["Mia","No way! What did you do?","¡No me digas! ¿Y qué hiciste?"],
  ["You","I went bright red. Everyone was staring at me. I wanted the ground to swallow me up.","Me puse roja. Todos me miraban. Quería que me tragara la tierra."],
  ["Mia","Oh, that's so awkward!","¡Uf, qué incómodo!"],
  ["You","Luckily, I just laughed it off. Has anything like that ever happened to you?","Por suerte, me lo tomé con humor. ¿Te ha pasado algo así alguna vez?"]
 ],
 quiz:[
  ["translate","«Estaba muy avergonzada.»",["I was really embarrassed.","I was really embarrassing.","I was really embarrased.","I was really pregnant."],"'Embarrassed' = cómo te sientes; 'embarrassing' = la situación.",["«Embarrassing» = vergonzoso (la situación). Tú estabas «embarrassed».","Se escribe con doble r y doble s: «embarrassed».","¡Falso amigo! «Pregnant» es embarazada."]],
  ["complete","Everyone was ___ at me.",["staring","looking to","seeing","watching to"],"'Stare at' = mirar fijamente.",["Es «looking at»; «look to» es contar con alguien.","«See» es ver sin intención; mirar fijamente es «stare at».","«Watch» no lleva «to»; y mirar fijamente es «stare at»."]],
  ["meaning","«I laughed it off» significa…",["me lo tomé con humor","me fui riendo","me reí de alguien","dejé de reír"],"Le quitas importancia a algo riéndote.",["Es la trampa de «off» (irse). «Laugh it off» = quitarle importancia riéndote.","Reírse de alguien es «laugh at someone».","Dejar de reír es «stop laughing»."]],
  ["natural","Quieres saber si a tu amiga le ha pasado algo parecido.",["Has that ever happened to you?","Did that ever happen you?","Has it passed to you sometime?","Has that ever happened you?"],"'Happen to someone' = pasarle a alguien.",["Falta «to»: «happen to you».","«Pass» es pasar de un lugar a otro; ocurrir es «happen».","Falta «to»: «happened to you»."]],
  ["translate","«torpe» (que se cae o rompe cosas)",["clumsy","torpid","awkward","clever"],"'Awkward' es más bien incómodo.",["«Torpid» es aletargado, sin energía (muy formal).","«Awkward» es más bien incómodo o torpe en lo social.","Al revés: «clever» es listo."]]
 ]},

{id:'social-10', scen:'social', title:'Opiniones polémicas entre amigos', summary:'Defender una opinión impopular, discrepar con humor y cerrar el debate.', level:'B1', mins:12,
 phrases:[
  ["This might be an unpopular opinion, but I love pineapple on pizza.","Puede que sea una opinión impopular, pero me encanta la piña en la pizza.",""],
  ["Hear me out.","Escúchame hasta el final.","Para pedir que te dejen terminar de explicar."],
  ["I couldn't disagree more!","¡No podría estar más en desacuerdo!",""],
  ["You've got a point there.","Ahí tienes razón.",""],
  ["I think that film is totally overrated.","Creo que esa película está sobrevalorada.",""],
  ["No way, that's ridiculous!","¡Ni hablar, eso es ridículo!",""],
  ["Let's agree to disagree.","Quedemos en que no estamos de acuerdo.","Para cerrar un debate sin pelear."]
 ],
 words:[["unpopular opinion","opinión impopular"],["hear someone out","escuchar hasta el final"],["overrated","sobrevalorado/a"],["underrated","infravalorado/a"],["debate","debate"],["ridiculous","ridículo/a"],["fair point","buen argumento"],["agree to disagree","aceptar que no se está de acuerdo"]],
 dialogue:[
  ["You","Okay, this might be an unpopular opinion, but pineapple on pizza is amazing.","Vale, puede que sea una opinión impopular, pero la piña en la pizza es increíble."],
  ["Luca","No way, that's ridiculous! I'm Italian, I can't accept that.","¡Ni hablar, eso es ridículo! Soy italiano, no puedo aceptarlo."],
  ["You","Hear me out. Sweet and salty together is delicious.","Escúchame. Lo dulce y lo salado juntos están deliciosos."],
  ["Luca","Hmm… okay, you've got a point there. But it's still wrong.","Mmm… vale, ahí tienes razón. Pero sigue estando mal."],
  ["You","And honestly, I think Italian coffee is a bit overrated.","Y la verdad, creo que el café italiano está un poco sobrevalorado."],
  ["Luca","I couldn't disagree more! Let's agree to disagree.","¡No podría estar más en desacuerdo! Quedemos en que no estamos de acuerdo."]
 ],
 quiz:[
  ["meaning","«Overrated» significa…",["sobrevalorado","muy valorado y con razón","infravalorado","demasiado caro"],"Lo contrario: 'underrated' (infravalorado).",["Al revés: «over» indica demasiado.","Infravalorado es «underrated».","Demasiado caro es «overpriced»."]],
  ["natural","Quieres que te dejen terminar de explicar tu idea.",["Hear me out.","Listen me until the end.","Let me to finish.","Hear me up."],"'Hear me out' = escúchame hasta el final.",["«Listen» necesita «to», y lo natural es «Hear me out».","Después de «let me» no va «to»: «Let me finish».","Es «hear me out», no «up»."]],
  ["translate","«Ahí tienes razón.»",["You've got a point there.","You have reason there.","You've got a point in there.","You've got a reason there."],"'Tener razón' NO es 'have reason'; es 'be right' o 'have a point'.",["«Tener razón» NO es «have reason»; es «be right» o «have a point».","Sobra «in»: «a point there».","«A reason» es un motivo; tener razón es «have a point»."]],
  ["complete","Let's agree to ___.",["disagree","not agree","disagreement","discuss"],"Expresión fija para cerrar un debate.",["La expresión fija es «agree to disagree».","«Disagreement» es el nombre; aquí va el verbo «disagree».","«Discuss» es hablar de algo, no discrepar."]],
  ["translate","«¡No podría estar más en desacuerdo!»",["I couldn't disagree more!","I couldn't be more in disagree!","I couldn't disagree most!","I couldn't more disagree!"],"Frase hecha muy común.",["Calco; la frase hecha es «I couldn't disagree more!».","Es «more», no «most».","El orden es «couldn't disagree more»."]]
 ]},

{id:'social-11', scen:'social', title:'Series, películas y recomendaciones', summary:'Recomendar, pedir que no te hagan spoilers y opinar sobre un final.', level:'A2', mins:10,
 phrases:[
  ["Have you watched it yet?","¿Ya la has visto?",""],
  ["No spoilers, please!","¡Sin spoilers, por favor!",""],
  ["I binge-watched the whole series at the weekend.","Me vi la serie entera de un tirón el fin de semana.","'Binge-watch' = ver muchos episodios seguidos."],
  ["It's really worth watching.","Merece mucho la pena verla.",""],
  ["The ending was a bit disappointing.","El final fue un poco decepcionante.",""],
  ["What's it about?","¿De qué trata?",""],
  ["I'll add it to my list.","La añado a mi lista.",""]
 ],
 words:[["series","serie",1],["episode","episodio"],["season","temporada"],["binge-watch","ver de un tirón"],["spoiler","spoiler"],["plot","argumento"],["cast","reparto"],["worth watching","que merece la pena ver"]],
 dialogue:[
  ["Sara","Have you watched the new series everyone's talking about?","¿Has visto la serie nueva de la que habla todo el mundo?"],
  ["You","Not yet! What's it about?","¡Todavía no! ¿De qué trata?"],
  ["Sara","It's a mystery set in a small village. I binge-watched the whole thing at the weekend.","Es un misterio en un pueblo pequeño. Me la vi entera de un tirón el fin de semana."],
  ["You","Is it worth watching? No spoilers, please!","¿Merece la pena? ¡Sin spoilers, por favor!"],
  ["Sara","Definitely. The cast is brilliant, but the ending was a bit disappointing.","Totalmente. El reparto es genial, pero el final fue un poco decepcionante."],
  ["You","Okay, I'll add it to my list.","Vale, la añado a mi lista."]
 ],
 quiz:[
  ["translate","«argumento» (de una película)",["plot","argument","topic","script"],"'Argument' es una discusión o pelea. Falso amigo.",["«Argument» es una discusión o pelea. Falso amigo.","«Topic» es el tema de una conversación.","«Script» es el guion (el texto de los actores)."]],
  ["meaning","«It's worth watching» significa…",["merece la pena verla","es cara de ver","se puede ver gratis","hay que verla obligatoriamente"],"",["«Worth» no es caro; «worth it» = vale la pena.","Gratis es «free».","Obligatorio es «a must-see» o «you have to see it»."]],
  ["complete","What's it ___?",["about","of","on","around"],"'What's it about?' = ¿de qué trata?",["«What's it of?» no existe; de qué trata es «about».","«What's it on?» = ¿en qué canal la dan?","No se usa así; es «about»."]],
  ["natural","No quieres que te cuenten el final.",["No spoilers, please!","Don't tell me the final!","Don't say me the ending!","No spoils, please!"],"'Ending' = final de una historia; 'final' es una final deportiva.",["«Final» es una final deportiva; el final de una historia es «the ending».","Con la persona detrás se usa «tell»: «Don't tell me the ending».","Es «spoilers», no «spoils»."]],
  ["translate","«temporada» (de una serie)",["season","temporade","time","station"],"En UK también se dice 'series' para una temporada.",["No existe en inglés.","«Time» es el tiempo del reloj.","«Station» es una estación de tren."]]
 ]},

{id:'social-12', scen:'social', title:'Hablar del tiempo (muy británico)', summary:'El tema favorito para romper el hielo en inglés: calor, viento y lluvia.', level:'A2', mins:8,
 phrases:[
  ["Lovely day, isn't it?","Qué día tan bonito, ¿verdad?","La frase perfecta para empezar a hablar con cualquiera."],
  ["It's absolutely boiling today.","Hoy hace un calor tremendo.","'Boiling' = hirviendo; se usa para el calor."],
  ["It's a bit chilly this morning.","Hace un poco de fresco esta mañana.",""],
  ["Looks like it's going to rain.","Parece que va a llover.",""],
  ["The humidity is unbearable.","La humedad es insoportable.","Muy útil en el verano de Malta."],
  ["The wind is crazy today.","Hoy el viento está loco.",""],
  ["At least it's not raining!","¡Al menos no está lloviendo!",""]
 ],
 words:[["boiling","muy caluroso"],["chilly","fresco, frío"],["humid","húmedo"],["muggy","bochornoso",1],["drizzle","llovizna"],["forecast","pronóstico"],["heatwave","ola de calor"],["windy","ventoso"]],
 dialogue:[
  ["Neighbour","Morning! Lovely day, isn't it?","¡Buenos días! Qué día tan bonito, ¿verdad?"],
  ["You","Morning! Yes, but it's absolutely boiling already.","¡Buenos días! Sí, pero ya hace un calor tremendo."],
  ["Neighbour","I know. And the humidity is unbearable.","Lo sé. Y la humedad es insoportable."],
  ["You","Have you seen the forecast? They say there's a heatwave this week.","¿Has visto el pronóstico? Dicen que esta semana hay ola de calor."],
  ["Neighbour","Oh dear. Well, at least it's not raining!","Vaya. Bueno, ¡al menos no está lloviendo!"],
  ["You","True! Have a good day.","¡Es verdad! Que tengas buen día."]
 ],
 quiz:[
  ["natural","Quieres empezar una charla con un vecino.",["Lovely day, isn't it?","Lovely day, isn't?","Lovely day, is it?","Good weather, no?"],"Las 'question tags' como 'isn't it?' son muy británicas.",["Falta el sujeto en la coletilla: «isn't it?».","Con frase afirmativa, la coletilla va en negativa: «isn't it?».","Calco del «¿no?» español; en inglés: «isn't it?»."]],
  ["translate","«Hace mucho calor.»",["It's really hot.","It makes a lot of heat.","It's really heat.","It has much heat."],"Para el tiempo se usa 'it's', nunca 'it makes'.",["Para el tiempo se usa «it's», nunca «it makes».","«Heat» es el nombre (el calor); con «it's» va el adjetivo «hot».","Calco; el tiempo se dice con «it's»: «It's really hot»."]],
  ["meaning","«It's a bit chilly» significa…",["hace un poco de fresco","está un poco picante","hace un poco de calor","está un poco nublado"],"No confundas con 'chilli' (guindilla).",["Trampa: «chilli» (guindilla) se parece, pero «chilly» es fresco.","Al revés: un poco de calor es «a bit warm».","Nublado es «cloudy»."]],
  ["complete","Looks like it's going ___ rain.",["to","for","at","of"],"'Going to' + verbo para predicciones.",["Es «going to» + verbo.","Es «going to» + verbo.","Es «going to» + verbo."]],
  ["translate","«pronóstico del tiempo»",["weather forecast","weather prognostic","time forecast","weather report of time"],"'Time' es el tiempo del reloj; el clima es 'weather'.",["Calco; es «weather forecast».","«Time» es el tiempo del reloj; el clima es «weather».","Sobra «of time»; además lo común es «forecast»."]]
 ]},

{id:'social-13', scen:'social', title:'Sueños, deseos y «¿qué harías si…?»', summary:'Hablar de sueños, planes de vida y situaciones imaginarias.', level:'B1', mins:12,
 phrases:[
  ["If I won the lottery, I'd travel the world.","Si me tocara la lotería, viajaría por el mundo.","Situación imaginaria: 'If + pasado, would + verbo'."],
  ["My dream is to open my own studio.","Mi sueño es abrir mi propio estudio.",""],
  ["Would you rather live by the sea or in the mountains?","¿Preferirías vivir junto al mar o en la montaña?","'Would you rather…?' = ¿preferirías…?"],
  ["I've always wanted to learn to surf.","Siempre he querido aprender a hacer surf.",""],
  ["One day, I'd love to live in London.","Algún día me encantaría vivir en Londres.",""],
  ["It's on my bucket list.","Está en mi lista de cosas por hacer antes de morir.",""],
  ["What would you do if you didn't have to work?","¿Qué harías si no tuvieras que trabajar?",""]
 ],
 words:[["dream","sueño"],["wish","deseo / desear"],["bucket list","lista de cosas por hacer en la vida"],["would rather","preferiría"],["lottery","lotería"],["goal","meta"],["someday","algún día"],["achieve","lograr"]],
 dialogue:[
  ["Ben","Okay, would you rather live by the sea or in the mountains?","Vale, ¿preferirías vivir junto al mar o en la montaña?"],
  ["You","By the sea, definitely. That's why I love Malta. And you?","Junto al mar, sin duda. Por eso me encanta Malta. ¿Y tú?"],
  ["Ben","Mountains! So, what would you do if you won the lottery?","¡Montaña! A ver, ¿qué harías si te tocara la lotería?"],
  ["You","If I won the lottery, I'd travel the world and open my own design studio.","Si me tocara la lotería, viajaría por el mundo y abriría mi propio estudio de diseño."],
  ["Ben","Nice. Anything else on your bucket list?","Genial. ¿Algo más en tu lista de cosas por hacer?"],
  ["You","I've always wanted to learn to surf. One day!","Siempre he querido aprender a hacer surf. ¡Algún día!"]
 ],
 quiz:[
  ["complete","If I won the lottery, I ___ travel the world.",["would","will","am going to","would to"],"Situación imaginaria: 'If + pasado, would + verbo'.",["«Will» es para algo real; con «If I won» (imaginario) va «would».","Es para planes reales; aquí es imaginario: «would».","Después de «would» no va «to»."]],
  ["meaning","«Would you rather…?» significa…",["¿Preferirías…?","¿Harías rápido…?","¿Podrías…?","¿Te gustaría…?"],"Ej.: 'Would you rather have tea or coffee?'",["Es la trampa: «rather» no tiene que ver con «rapid».","Podrías es «Could you…?».","Te gustaría es «Would you like…?»; «would you rather» compara dos opciones."]],
  ["translate","«Siempre he querido aprender a nadar.»",["I've always wanted to learn to swim.","I always wanted learn swim.","I have always want to learn to swim.","Always I've wanted to learn to swim."],"'Have always wanted' = siempre he querido.",["Faltan los «to» (want to, learn to) y el «have»: «I've always wanted to learn to swim».","Después de «have» va el participio: «wanted».","«Always» va después del auxiliar: «I've always wanted»."]],
  ["meaning","«It's on my bucket list» significa…",["está en mi lista de cosas por hacer en la vida","está en mi lista de la compra","está en mi cubo","lo tengo pendiente en el trabajo"],"",["La lista de la compra es «shopping list».","Es la trampa literal de «bucket» (cubo).","Eso es «it's on my to-do list»."]],
  ["natural","Quieres preguntar qué haría tu amigo sin trabajar.",["What would you do if you didn't have to work?","What will you do if you didn't have to work?","What would you do if you don't have to work?","What would you do if you didn't must work?"],"Pregunta imaginaria: 'would' + 'if' + pasado.",["Situación imaginaria: «would», no «will».","Con «would» la parte del «if» va en pasado: «didn't have to».","«Must» no tiene pasado así; se usa «have to»: «didn't have to»."]]
 ]},

{id:'social-14', scen:'social', title:'Cotilleos y novedades', summary:'Contar y reaccionar a noticias de amigos con discreción y humor.', level:'B1', mins:10,
 phrases:[
  ["Have you heard the news?","¿Te has enterado de la noticia?",""],
  ["You didn't hear it from me, but…","Yo no te he dicho nada, pero…","Para contar un secreto con humor."],
  ["I heard that Sam is moving to Gozo.","Me han dicho que Sam se muda a Gozo.",""],
  ["Keep it to yourself, okay?","No se lo cuentes a nadie, ¿vale?",""],
  ["Come on, spill the tea!","¡Venga, suéltalo!","Expresión informal y moderna para pedir el cotilleo."],
  ["Wait, are you serious?","Espera, ¿en serio?",""],
  ["Good for them!","¡Me alegro por ellos!",""]
 ],
 words:[["gossip","cotilleo / cotillear"],["rumour","rumor",1],["news","noticia(s)"],["spill the tea","contar el cotilleo"],["keep a secret","guardar un secreto"],["find out","enterarse"],["juicy","jugoso, interesante"],["catch up","ponerse al día"]],
 dialogue:[
  ["Kate","Have you heard the news?","¿Te has enterado de la noticia?"],
  ["You","No! Come on, spill the tea!","¡No! ¡Venga, suéltalo!"],
  ["Kate","You didn't hear it from me, but Sam and Jo are getting married!","Yo no te he dicho nada, pero ¡Sam y Jo se casan!"],
  ["You","Wait, are you serious? They've only been together for a year!","Espera, ¿en serio? ¡Solo llevan un año juntos!"],
  ["Kate","I know! Keep it to yourself, okay? They're telling everyone on Friday.","¡Lo sé! No se lo cuentes a nadie, ¿vale? Lo dirán a todos el viernes."],
  ["You","My lips are sealed. Good for them!","Soy una tumba. ¡Me alegro por ellos!"]
 ],
 quiz:[
  ["meaning","«Keep it to yourself» significa…",["no se lo cuentes a nadie","quédatelo tú","guárdalo en tu casa","piénsalo tú sola"],"",["Ese es el sentido literal de «keep»; aquí es guardar el secreto.","Literal; la expresión es no contarlo.","Pensarlo es «think it over»."]],
  ["translate","«¿Te has enterado de la noticia?»",["Have you heard the news?","Did you enter the new?","Have you heard the new?","Have you listened the news?"],"'News' siempre termina en s, aunque sea una sola noticia.",["«Enter» es entrar; enterarse es «hear». Y noticia es «news», siempre con s.","«New» es nuevo; las noticias son «news» (aunque sea una).","«Listen» lleva «to» y es escuchar con atención; enterarse es «hear»."]],
  ["complete","I heard ___ Sam is moving to Gozo.",["that","what","which","who"],"'I heard that…' = me han dicho que…",["Calco de «oí lo que…»; para contar algo se usa «that».","«Which» introduce información sobre un nombre, no una noticia.","«Who» es para personas como sujeto: «the man who…»."]],
  ["natural","Te cuentan una buena noticia de unos amigos.",["Good for them!","Good to them!","Well for them!","Happy of them!"],"'Good for you/them!' = ¡me alegro por ti/ellos!",["Es «good for them», no «to».","La expresión usa «good»: «Good for them!».","Sería «I'm happy for them»; la expresión rápida es «Good for them!»."]],
  ["meaning","«My lips are sealed» significa…",["soy una tumba, no diré nada","tengo los labios secos","no puedo comer","estoy enfadada"],"",["Literal; «sealed» es sellado: no voy a hablar.","Literal de labios cerrados; significa guardar el secreto.","Enfadada es «I'm angry» o «I'm cross»."]]
 ]},

{id:'social-15', scen:'social', title:'Quejarse con humor', summary:'Desahogarte de un mal día como un británico: con ironía.', level:'B1', mins:10,
 phrases:[
  ["I'm having one of those days.","Estoy teniendo uno de esos días.","Un día en que todo sale mal."],
  ["Don't get me started on the traffic.","Mejor no me hagas hablar del tráfico.",""],
  ["It's really doing my head in.","Me está volviendo loca.","Muy británico e informal."],
  ["I've had enough of this heat.","Estoy harta de este calor.",""],
  ["What a nightmare!","¡Qué pesadilla!",""],
  ["The bus didn't show up. Typical!","El bus no apareció. ¡Típico!",""],
  ["Oh well, it could be worse.","Bueno, podría ser peor.",""]
 ],
 words:[["moan","quejarse",1],["nightmare","pesadilla"],["fed up","harto/a"],["annoying","molesto/a"],["rant","despotricar"],["do someone's head in","volver loco a alguien",1],["typical!","¡típico!"],["vent","desahogarse"]],
 dialogue:[
  ["Chris","Hey, are you alright? You look a bit fed up.","Oye, ¿estás bien? Pareces un poco harta."],
  ["You","I'm having one of those days. The bus didn't show up. Typical!","Estoy teniendo uno de esos días. El bus no apareció. ¡Típico!"],
  ["Chris","Oh no. Don't get me started on the buses!","Ay no. ¡Mejor no me hagas hablar de los buses!"],
  ["You","And then my laptop crashed at work. It's really doing my head in.","Y luego se me colgó el portátil en el trabajo. Me está volviendo loca."],
  ["Chris","What a nightmare! Do you want to grab a drink and have a good moan?","¡Qué pesadilla! ¿Quieres tomar algo y desahogarte?"],
  ["You","Yes, please! Oh well, it could be worse.","¡Sí, por favor! Bueno, podría ser peor."]
 ],
 quiz:[
  ["translate","«Estoy harta de esto.»",["I've had enough of this.","I'm full of this.","I've had enough with this.","I'm fed up for this."],"También: 'I'm fed up with this.'",["«Full» es lleno (de comida); harta es «had enough» o «fed up».","Es «had enough of», no «with».","Es «fed up with», no «for»."]],
  ["meaning","«It's doing my head in» significa…",["me está volviendo loca","me duele la cabeza","lo estoy pensando","me está ayudando a pensar"],"Muy británico e informal.",["Me duele la cabeza es «I've got a headache».","Pensarlo es «I'm thinking about it».","Al revés: te está desquiciando."]],
  ["complete","Don't get me ___ on the traffic.",["started","start","starting","to start"],"Expresión fija: 'Don't get me started on…'",["La expresión fija usa el participio: «Don't get me started».","Es «started», no «starting».","Es «started», no «to start»."]],
  ["natural","Algo sale mal, como siempre. Dices con ironía:",["Typical!","Is typical, no?","Very typical thing!","Always the same thing passes!"],"Una sola palabra, con tono irónico.",["Falta el sujeto «It's», y el «no?» es calco. Lo natural: «Typical!».","No suena natural; con ironía basta «Typical!».","«Pass» no es ocurrir; y es calco. Basta con «Typical!»."]],
  ["meaning","«Have a good moan» significa…",["desahogarse quejándose","llorar mucho","gemir","dormir bien"],"'Moan' = quejarse (informal, UK).",["Llorar es «cry».","Ese es otro sentido de «moan»; aquí es quejarse para desahogarse.","Dormir bien es «have a good sleep»."]]
 ]},

{id:'social-16', scen:'social', title:'Dar consejos y apoyar a un amigo', summary:'Preguntar qué le pasa a alguien, escuchar y dar un consejo con cariño.', level:'B1', mins:12,
 phrases:[
  ["Are you okay? You seem a bit down.","¿Estás bien? Te noto un poco decaída.","'Down' = triste, bajón."],
  ["Do you want to talk about it?","¿Quieres hablar de ello?",""],
  ["If I were you, I'd talk to her.","Yo que tú, hablaría con ella.","'If I were you, I'd…' = yo que tú…"],
  ["Have you thought about asking for help?","¿Has pensado en pedir ayuda?",""],
  ["Don't be so hard on yourself.","No seas tan dura contigo misma.",""],
  ["I'm here if you need me.","Estoy aquí si me necesitas.",""],
  ["It'll all work out, you'll see.","Todo saldrá bien, ya verás.",""]
 ],
 words:[["down","decaído/a, triste"],["advice","consejo(s)"],["cheer up","animarse / animar"],["support","apoyar"],["hard on yourself","duro/a contigo mismo/a"],["vent","desahogarse"],["reassure","tranquilizar"],["get through","superar"]],
 dialogue:[
  ["You","Are you okay, Laura? You seem a bit down.","¿Estás bien, Laura? Te noto un poco decaída."],
  ["Laura","Not really. I didn't get the job I wanted.","No mucho. No me dieron el trabajo que quería."],
  ["You","Oh, I'm sorry. Do you want to talk about it?","Ay, lo siento. ¿Quieres hablar de ello?"],
  ["Laura","I just feel like I'm not good enough.","Siento que no soy lo bastante buena."],
  ["You","Don't be so hard on yourself. If I were you, I'd ask them for feedback.","No seas tan dura contigo misma. Yo que tú, les pediría comentarios."],
  ["Laura","That's a good idea. Thanks, you always cheer me up.","Buena idea. Gracias, siempre me animas."]
 ],
 quiz:[
  ["complete","If I ___ you, I'd talk to her.",["were","was being","am","would be"],"Para dar consejos: 'If I were you…'",["Para consejos la fórmula es «If I were you».","«If I am you» no tiene sentido: es imaginario, «If I were you».","Después de «if» no va «would»: «If I were you»."]],
  ["translate","«Te noto un poco decaída.»",["You seem a bit down.","I note you a bit decayed.","You seem a bit low of energy.","You seem a bit downed."],"'Seem' = parecer; 'down' = de bajón.",["Calco de «te noto decaída»; «decayed» es podrido. Se dice «You seem a bit down».","Sería «low on energy», y no es lo mismo que decaída (down).","Es «down», sin -ed."]],
  ["meaning","«Don't be so hard on yourself» significa…",["no seas tan dura contigo misma","no trabajes tanto","no seas tan seria","no te pongas difícil"],"",["Eso es «don't work so hard».","Eso es «don't be so serious».","Eso es «don't be difficult»."]],
  ["translate","«un consejo»",["a piece of advice","an advice","a council","an advise"],"'Advice' no se cuenta: 'some advice' o 'a piece of advice'.",["«Advice» es incontable: no lleva «a/an». Es «some advice» o «a piece of advice».","«Council» es un ayuntamiento o consejo (órgano).","«Advise» es el verbo (aconsejar); y el nombre no lleva «an»."]],
  ["natural","Quieres que tu amiga sepa que puede contar contigo.",["I'm here if you need me.","I'm here if you need.","I'm here for if you need me.","I'm here if you would need me."],"Simple y cálido.",["Falta «me»: «if you need me».","Sobra «for».","No hace falta «would»: «if you need me»."]]
 ]},

{id:'daily-7', scen:'daily', title:'Devolver algo y reclamar', summary:'Devolver un producto, pedir un cambio o el reembolso, y reclamar un pedido.', level:'B1', mins:10,
 phrases:[
  ["I'd like to return this, please.","Quisiera devolver esto, por favor.",""],
  ["It doesn't work properly.","No funciona bien.",""],
  ["Could I get a refund?","¿Me podrían devolver el dinero?","'Refund' = reembolso."],
  ["Could I exchange it for a different size?","¿Podría cambiarlo por otra talla?",""],
  ["I've still got the receipt.","Todavía tengo el recibo.",""],
  ["I ordered it online, but it never arrived.","Lo pedí por internet, pero nunca llegó.",""],
  ["Could I speak to the manager, please?","¿Podría hablar con el encargado, por favor?","Educado pero firme."]
 ],
 words:[["refund","reembolso"],["exchange","cambiar"],["faulty","defectuoso/a"],["receipt","recibo"],["complaint","reclamación"],["guarantee","garantía",1],["store credit","vale de la tienda"],["tracking number","número de seguimiento"]],
 dialogue:[
  ["You","Hi, I'd like to return these headphones, please. They don't work properly.","Hola, quisiera devolver estos auriculares, por favor. No funcionan bien."],
  ["Assistant","I'm sorry about that. Have you got the receipt?","Lo siento. ¿Tiene el recibo?"],
  ["You","Yes, here it is. Could I get a refund?","Sí, aquí está. ¿Me podrían devolver el dinero?"],
  ["Assistant","We can exchange them or give you store credit.","Podemos cambiarlos o darle un vale de la tienda."],
  ["You","I'd prefer a refund, if possible. They're faulty.","Preferiría el reembolso, si es posible. Son defectuosos."],
  ["Assistant","That's fine. It'll go back on your card in three to five days.","De acuerdo. Se le devolverá a la tarjeta en tres a cinco días."]
 ],
 quiz:[
  ["translate","«reembolso»",["refund","rebate","return money","refound"],"'Refund' es lo más común en tiendas.",["«Rebate» es una devolución de impuestos o un descuento.","Calco; el reembolso es «refund».","Se escribe «refund»."]],
  ["meaning","«Faulty» significa…",["defectuoso","culpable","falso","caducado"],"'Faulty' = que no funciona bien de fábrica.",["Culpable es «guilty» o «at fault».","Falso es «fake».","Caducado es «out of date» o «expired»."]],
  ["natural","Quieres cambiar unos pantalones por otra talla.",["Could I exchange them for a different size?","Could I exchange them to a different size?","Could I exchange them for an other size?","Can you exchange me other size?"],"'Exchange for' + lo nuevo.",["Es «exchange for» + lo nuevo, no «to».","«Another» va junto: «another size».","Falta «for» y «another»; y «exchange me» suena mal."]],
  ["complete","I'd like to ___ this, please. It doesn't work.",["return","give back","devolve","turn back"],"'Return' = devolver un producto.",["«Give back» se usa entre personas (devuélveme el libro); en tiendas: «return».","«Devolve» es delegar poder (política).","«Turn back» = darse la vuelta."]],
  ["translate","«reclamación»",["complaint","reclamation","claim","protest"],"'Make a complaint' = poner una reclamación.",["«Reclamation» es recuperar terreno o materiales.","«Claim» es una reclamación de seguro o un derecho; en una tienda: «complaint».","«Protest» es una protesta (manifestación)."]]
 ]},

{id:'daily-8', scen:'daily', title:'En el banco y otros trámites', summary:'Abrir una cuenta, preguntar por documentos y resolver problemas con la tarjeta.', level:'B1', mins:10,
 phrases:[
  ["I'd like to open a bank account.","Quisiera abrir una cuenta bancaria.",""],
  ["What documents do I need?","¿Qué documentos necesito?",""],
  ["Could you help me fill in this form?","¿Me podría ayudar a rellenar este formulario?","'Fill in' = rellenar (UK). En US: 'fill out'."],
  ["Do I need to make an appointment?","¿Tengo que pedir cita?",""],
  ["My card isn't working.","Mi tarjeta no funciona.",""],
  ["Is there a fee for that?","¿Eso tiene comisión?","'Fee' = comisión o tarifa."],
  ["How long will it take?","¿Cuánto tiempo tardará?",""]
 ],
 words:[["bank account","cuenta bancaria"],["ID card","documento de identidad"],["proof of address","comprobante de domicilio"],["form","formulario"],["fee","comisión, tarifa"],["PIN","PIN, clave"],["transfer","transferencia"],["branch","sucursal"]],
 dialogue:[
  ["Clerk","Good morning, how can I help?","Buenos días, ¿en qué le ayudo?"],
  ["You","Hi, I'd like to open a bank account. What documents do I need?","Hola, quisiera abrir una cuenta. ¿Qué documentos necesito?"],
  ["Clerk","Your ID card and a proof of address, like a utility bill.","Su documento de identidad y un comprobante de domicilio, como una factura."],
  ["You","Perfect, I've got both. Is there a monthly fee?","Perfecto, tengo los dos. ¿Hay una comisión mensual?"],
  ["Clerk","No, this account is free. Could you fill in this form, please?","No, esta cuenta es gratuita. ¿Podría rellenar este formulario?"],
  ["You","Sure. How long will it take to get my card?","Claro. ¿Cuánto tardará en llegarme la tarjeta?"]
 ],
 quiz:[
  ["complete","Could you help me fill ___ this form?",["in","on","up","out"],"En UK se dice 'fill in'; en US, 'fill out'.",["No se dice «fill on».","«Fill up» = llenar (el depósito, un vaso).","«Fill out» es americano; en UK y Malta: «fill in»."]],
  ["translate","«comisión» (del banco)",["fee","bank cost","comission","tax"],"'Commission' existe, pero para el banco se dice 'fee' o 'charge'.",["No es una expresión; la comisión del banco es «fee» o «charge».","Mal escrito, y además en el banco se dice «fee».","«Tax» es un impuesto."]],
  ["meaning","«Proof of address» es…",["un comprobante de domicilio","una dirección de correo","la prueba de un examen","un documento de identidad"],"",["Eso es «email address».","Es la trampa: «proof» es prueba, pero aquí de domicilio.","El documento de identidad es «ID» o «proof of identity»."]],
  ["natural","Tu tarjeta no pasa en la tienda. Llamas al banco y dices:",["My card isn't working.","My card doesn't go.","My card isn't passing.","My card isn't work."],"'Work' = funcionar.",["«Go» no se usa para funcionar; es «work».","Calco de «no pasa»; se dice «isn't working» o «was declined».","Falta -ing: «isn't working»."]],
  ["translate","«sucursal» (del banco)",["branch","succursal","subsidiary","agency"],"'Branch' también significa rama de árbol.",["No existe en inglés.","«Subsidiary» es una empresa filial, no una sucursal.","«Agency» es una agencia."]]
 ]},

{id:'daily-9', scen:'daily', title:'En la peluquería', summary:'Explicar qué corte quieres sin acabar con una sorpresa.', level:'A2', mins:8,
 phrases:[
  ["Just a trim, please.","Solo cortar las puntas, por favor.","'Trim' = recorte ligero."],
  ["Not too short, please.","No muy corto, por favor.",""],
  ["I'd like to keep the length.","Me gustaría mantener el largo.",""],
  ["Could you take a bit more off the sides?","¿Podría cortar un poco más por los lados?",""],
  ["I'm thinking of going a bit lighter.","Estoy pensando en aclararme un poco.","Para el color del pelo."],
  ["How much do I owe you?","¿Cuánto le debo?",""],
  ["It looks brilliant, thank you!","¡Ha quedado genial, gracias!",""]
 ],
 words:[["trim","recorte de puntas"],["fringe","flequillo",1],["layers","capas"],["highlights","mechas"],["blow-dry","secado con secador"],["roots","raíces"],["split ends","puntas abiertas"],["hairdresser's","peluquería",1]],
 dialogue:[
  ["Hairdresser","Hi! What are we doing today?","¡Hola! ¿Qué hacemos hoy?"],
  ["You","Just a trim, please. I'd like to keep the length.","Solo cortar las puntas, por favor. Me gustaría mantener el largo."],
  ["Hairdresser","No problem. Shall I tidy up your fringe as well?","Sin problema. ¿Te arreglo también el flequillo?"],
  ["You","Yes, please, but not too short.","Sí, por favor, pero no muy corto."],
  ["Hairdresser","Perfect. And a blow-dry at the end?","Perfecto. ¿Y secado con secador al final?"],
  ["You","Lovely. Thank you!","Genial. ¡Gracias!"]
 ],
 quiz:[
  ["translate","«flequillo» (inglés británico)",["fringe","bangs","front hair","frange"],"'Bangs' es americano.",["«Bangs» es americano; en UK se dice «fringe».","No es una expresión.","Se escribe «fringe»."]],
  ["meaning","«Just a trim» significa…",["solo cortar las puntas","solo un tren","un corte muy corto","solo lavar"],"",["Trampa de sonido: tren es «train».","Muy corto es «a short cut» o «take a lot off».","Lavar es «just a wash»."]],
  ["natural","Al terminar, quieres saber cuánto pagar.",["How much do I owe you?","How much I owe you?","How much do I owe to you?","How much do I own you?"],"'Owe' = deber dinero.",["Falta el auxiliar: «How much do I owe you?».","Sobra «to»: «owe you».","«Own» = poseer; deber dinero es «owe»."]],
  ["complete","Could you take a bit more ___ the sides?",["off","of","from","out"],"'Take off' = quitar, cortar.",["«Take of» no existe; es «take off» (quitar).","Quitar pelo de los lados es «take off the sides».","«Take out» = sacar."]],
  ["translate","«mechas» (en el pelo)",["highlights","wicks","mechs","lowlights"],"'Wick' es la mecha de una vela.",["«Wick» es la mecha de una vela.","No existe en inglés.","«Lowlights» son mechas más oscuras; las claras son «highlights»."]]
 ]},

{id:'daily-10', scen:'daily', title:'En el gimnasio', summary:'Apuntarte, preguntar por clases y compartir máquinas con educación.', level:'A2', mins:8,
 phrases:[
  ["I'd like to sign up for a membership.","Quisiera apuntarme como socia.",""],
  ["Is anyone using this machine?","¿Alguien está usando esta máquina?",""],
  ["How many sets have you got left?","¿Cuántas series te quedan?",""],
  ["Could you show me how this works?","¿Me podrías enseñar cómo funciona esto?",""],
  ["What time is the yoga class?","¿A qué hora es la clase de yoga?",""],
  ["I'm a bit out of shape.","Estoy un poco en baja forma.",""],
  ["Do you mind if I work in with you?","¿Te importa si me alterno contigo?","Para compartir una máquina entre series."]
 ],
 words:[["membership","membresía, cuota de socio"],["changing room","vestuario",1],["locker","taquilla"],["sets / reps","series / repeticiones"],["warm up","calentar"],["work out","hacer ejercicio"],["personal trainer","entrenador personal"],["out of shape","en baja forma"]],
 dialogue:[
  ["You","Hi, I'd like to sign up for a membership. Do you have a monthly option?","Hola, quisiera apuntarme. ¿Tienen una opción mensual?"],
  ["Receptionist","Yes, we do. It includes all the classes.","Sí. Incluye todas las clases."],
  ["You","Great. What time is the yoga class?","Genial. ¿A qué hora es la clase de yoga?"],
  ["Receptionist","There's one at seven tonight. The changing rooms are on the left.","Hay una a las siete esta tarde. Los vestuarios están a la izquierda."],
  ["You","Perfect. And could someone show me how the machines work? I'm a bit out of shape.","Perfecto. ¿Y alguien me podría enseñar cómo funcionan las máquinas? Estoy en baja forma."],
  ["Receptionist","Of course. A trainer can give you a free induction.","Claro. Un entrenador te puede dar una introducción gratis."]
 ],
 quiz:[
  ["translate","«vestuario» (del gimnasio, UK)",["changing room","dressing room","locker room","changing rooms of clothes"],"En US se dice 'locker room'.",["«Dressing room» es el camerino (teatro) o un vestidor.","«Locker room» es americano; en UK: «changing room».","Sobra «of clothes»."]],
  ["natural","Quieres usar una máquina pero no sabes si está libre.",["Is anyone using this machine?","Is anyone use this machine?","Somebody uses this machine?","Is free this machine?"],"",["Falta -ing: «Is anyone using…?».","Falta el auxiliar de pregunta: «Is anyone using…?».","Orden: «Is this machine free?»."]],
  ["meaning","«I'm out of shape» significa…",["estoy en baja forma","estoy fuera de lugar","estoy deforme","no estoy en casa"],"",["Fuera de lugar es «out of place».","Literal de «shape» (forma); es estar en baja forma física.","No estar en casa es «I'm out»."]],
  ["complete","I'd like to sign ___ for a membership.",["up","in","on","to"],"'Sign up' = apuntarse, inscribirse.",["«Sign in» = iniciar sesión o firmar al entrar.","«Sign on» se usa poco (apuntarse al paro en UK).","No forma phrasal verb aquí; es «sign up for»."]],
  ["translate","«calentar» (antes de entrenar)",["warm up","heat up","warm down","make hot"],"'Heat up' es calentar comida.",["«Heat up» es calentar comida.","«Warm down» es estirar al final (enfriar), no calentar.","Calco; antes de entrenar es «warm up»."]]
 ]},

{id:'daily-11', scen:'daily', title:'Comida a domicilio y problemas con el pedido', summary:'Pedir comida y reclamar si llega tarde, fría o incompleta.', level:'A2', mins:8,
 phrases:[
  ["Shall we order a takeaway tonight?","¿Pedimos comida a domicilio esta noche?",""],
  ["My order hasn't arrived yet.","Mi pedido todavía no ha llegado.",""],
  ["It's been over an hour.","Ya ha pasado más de una hora.",""],
  ["Something's missing from my order.","Falta algo en mi pedido.",""],
  ["The food was cold when it arrived.","La comida llegó fría.",""],
  ["Could you leave it at the door, please?","¿Podría dejarlo en la puerta, por favor?",""],
  ["Could I get a refund for the missing item?","¿Me podrían devolver el dinero de lo que falta?",""]
 ],
 words:[["takeaway","comida para llevar / a domicilio",1],["delivery","entrega, reparto"],["order","pedido / pedir"],["driver","repartidor/a"],["missing","que falta"],["refund","reembolso"],["contactless","sin contacto"],["tip","propina"]],
 dialogue:[
  ["You","Hi, I'm calling about my order. It hasn't arrived yet.","Hola, llamo por mi pedido. Todavía no ha llegado."],
  ["Restaurant","I'm sorry. Can I have your name and address?","Lo siento. ¿Me da su nombre y dirección?"],
  ["You","It's Ana, flat 3, Tower Road. It's been over an hour.","Ana, piso 3, Tower Road. Ya ha pasado más de una hora."],
  ["Restaurant","The driver is on his way. He'll be there in five minutes.","El repartidor está en camino. Llegará en cinco minutos."],
  ["You","Okay, thanks. Could he leave it at the door, please?","Vale, gracias. ¿Podría dejarlo en la puerta, por favor?"],
  ["Restaurant","Of course. And we've added a free dessert for the wait.","Claro. Y le hemos añadido un postre gratis por la espera."]
 ],
 quiz:[
  ["natural","Llega tu pedido y falta una bebida.",["Something's missing from my order.","Something's missed from my order.","Lacks something in my order.","Something's lost from my order."],"'Missing' = que falta.",["Es «missing» (que falta), no «missed».","Falta el sujeto y suena raro; se dice «Something's missing».","«Lost» es perdido; lo que no vino es «missing»."]],
  ["translate","«repartidor»",["delivery driver","distributor","deliverer","sender"],"",["«Distributor» es una empresa distribuidora.","No se usa; se dice «delivery driver» o «courier».","«Sender» es quien envía, el remitente."]],
  ["complete","My order ___ arrived yet.",["hasn't","didn't","isn't","doesn't"],"Con 'yet' se usa 'hasn't' + participio.",["Con «yet» y algo que aún no pasa, en UK se usa «hasn't» + participio.","«Isn't arrived» no existe; con «arrived» va «hasn't».","«Doesn't» va con la forma base, no con «arrived»."]],
  ["meaning","«Takeaway» en el Reino Unido es…",["comida para llevar o a domicilio","quitar algo","un descuento","la comida del menú del día"],"",["Es el sentido literal de «take away»; como nombre es comida para llevar.","Un descuento es «a discount».","El menú del día es «set menu»."]],
  ["translate","«Ya ha pasado más de una hora.»",["It's been over an hour.","It's been over a hour.","It has passed more of an hour.","Is more than an hour already."],"'It's been' + tiempo = ya ha pasado.",["«Hour» empieza con sonido de vocal (la h no suena): «an hour».","Calco; con tiempo se dice «It's been over an hour».","Falta el sujeto «It»."]]
 ]},

{id:'daily-12', scen:'daily', title:'Emergencias y pedir ayuda', summary:'Pedir ayuda, explicar qué pasó y llamar a emergencias.', level:'A2', mins:10,
 phrases:[
  ["Excuse me, can you help me, please?","Disculpe, ¿me puede ayudar, por favor?",""],
  ["I've lost my wallet.","He perdido la cartera.",""],
  ["Someone has stolen my bag.","Alguien me ha robado el bolso.",""],
  ["Please call an ambulance!","¡Por favor, llame a una ambulancia!","En Malta, el número de emergencias es el 112."],
  ["Where's the nearest police station?","¿Dónde está la comisaría más cercana?",""],
  ["I've locked myself out of my flat.","Me he quedado fuera de mi piso sin llaves.","'Lock yourself out' = cerrarte fuera."],
  ["Is everything okay?","¿Está todo bien?",""]
 ],
 words:[["emergency","emergencia"],["ambulance","ambulancia"],["police station","comisaría"],["wallet / purse","cartera / monedero",1],["steal","robar"],["lose","perder"],["injured","herido/a"],["locksmith","cerrajero"]],
 dialogue:[
  ["You","Excuse me, can you help me, please? I've locked myself out of my flat.","Disculpe, ¿me puede ayudar? Me he quedado fuera de mi piso sin llaves."],
  ["Neighbour","Oh no! Have you got a spare key anywhere?","¡Ay no! ¿Tienes una llave de repuesto en algún sitio?"],
  ["You","My landlord has one, but he isn't answering his phone.","La tiene mi casero, pero no contesta el teléfono."],
  ["Neighbour","I know a good locksmith. I'll give you his number.","Conozco un buen cerrajero. Te doy su número."],
  ["You","Thank you so much. You're a lifesaver!","Muchísimas gracias. ¡Me has salvado!"],
  ["Neighbour","No problem. Do you want to wait in my flat?","No hay problema. ¿Quieres esperar en mi piso?"]
 ],
 quiz:[
  ["translate","«comisaría»",["police station","commissariat","police office","police stop"],"",["Existe, pero es un departamento de suministros militares.","No se dice así; es «police station».","«Stop» es una parada."]],
  ["complete","Someone has ___ my bag!",["stolen","robbed","stole","steal"],"Se roba un objeto: 'steal' (stolen). A una persona: 'rob'.",["Se roba a una persona o un lugar («rob a bank»); un objeto se «steal».","Después de «has» va el participio: «stolen».","Después de «has» va el participio: «stolen»."]],
  ["natural","Te quedaste fuera de casa sin llaves.",["I've locked myself out.","I've locked out myself.","I've closed myself out.","I've locked myself in."],"'Lock yourself out' = cerrarte fuera.",["El orden es «locked myself out».","Con llave es «lock», no «close».","¡Al revés! «Locked in» es quedarte encerrada dentro."]],
  ["meaning","«You're a lifesaver!» significa…",["¡Me has salvado!","eres socorrista","eres muy valiente","¡qué susto!"],"Para agradecer mucho una ayuda.",["Socorrista es «lifeguard»; «lifesaver» aquí es «me has salvado».","Valiente es «brave».","Qué susto es «What a fright!»."]],
  ["translate","«He perdido la cartera.»",["I've lost my wallet.","I've loosed my wallet.","I've lost me the wallet.","I've missed my wallet."],"'Lose' (lost) = perder; 'loose' significa suelto.",["«Loose» significa suelto; perder es «lose» (lost).","Sobra «me», y es «my wallet».","«Miss» es echar de menos o perder un tren; una cosa se «lose»."]]
 ]}
];
const TOOLS = {
 connectors:{name:'Conectores', intro:'Unen ideas para que no hables en frases sueltas.', fields:'en, es, example, group', items:[
  ["however","sin embargo","It's expensive. However, it's worth it.","Contrastar"],
  ["although","aunque","Although it was raining, we went out.","Contrastar"],
  ["even though","aunque (más enfático)","She came to work even though she was exhausted.","Contrastar"],
  ["whereas","mientras que","I like tea, whereas my flatmate prefers coffee.","Contrastar"],
  ["on the other hand","por otro lado","The flat is small. On the other hand, it's very central.","Contrastar"],
  ["despite","a pesar de","Despite the rain, the beach was full.","Contrastar"],
  ["in spite of","a pesar de","In spite of the traffic, we arrived on time.","Contrastar"],
  ["nevertheless","no obstante","The task was difficult. Nevertheless, she finished it.","Contrastar"],
  ["while","mientras que","While I understand your point, I don't agree.","Contrastar"],
  ["still","aun así","It was cold. Still, we went for a swim.","Contrastar"],
  ["though","aunque (al final de la frase)","The food was nice. A bit expensive, though.","Contrastar"],
  ["yet","pero, sin embargo","It's a simple idea, yet very effective.","Contrastar"],
  ["because","porque","I'm tired because I worked late.","Causa y consecuencia"],
  ["because of","por, a causa de","The ferry was cancelled because of the wind.","Causa y consecuencia"],
  ["since","ya que","Since you're here, can you help me?","Causa y consecuencia"],
  ["as","como, ya que","As it was late, we took a taxi.","Causa y consecuencia"],
  ["so","así que","It was late, so I took a taxi.","Causa y consecuencia"],
  ["therefore","por lo tanto","We're short-staffed; therefore, the meeting is postponed.","Causa y consecuencia"],
  ["as a result","como resultado","He missed the bus. As a result, he was late.","Causa y consecuencia"],
  ["that's why","por eso","I love the sea. That's why I moved to Malta.","Causa y consecuencia"],
  ["due to","debido a","The flight was delayed due to bad weather.","Causa y consecuencia"],
  ["thanks to","gracias a","Thanks to your help, I passed the interview.","Causa y consecuencia"],
  ["also","también","I speak Spanish and I also speak a bit of Italian.","Añadir ideas"],
  ["as well","también (al final)","Can I have a coffee as well?","Añadir ideas"],
  ["too","también (al final)","I love pastizzi. My flatmate does too.","Añadir ideas"],
  ["besides","además, aparte de eso","I don't fancy going. Besides, it's too far.","Añadir ideas"],
  ["moreover","además (formal)","The flat is cheap. Moreover, it's near the sea.","Añadir ideas"],
  ["furthermore","además (formal)","Furthermore, I have experience with clients.","Añadir ideas"],
  ["in addition","además","In addition to Spanish, I speak English.","Añadir ideas"],
  ["what's more","y lo que es más","The hotel was lovely. What's more, breakfast was free.","Añadir ideas"],
  ["not only… but also","no solo… sino también","She's not only creative but also very organised.","Añadir ideas"],
  ["if","si","If it rains, we'll stay at home.","Condiciones"],
  ["unless","a menos que","We'll go to the beach unless it rains.","Condiciones"],
  ["as long as","siempre y cuando","You can borrow it as long as you bring it back.","Condiciones"],
  ["in case","por si acaso","Take a jacket in case it gets windy.","Condiciones"],
  ["provided that","siempre que (formal)","You can work from home provided that you finish your tasks.","Condiciones"],
  ["otherwise","si no, de lo contrario","Hurry up, otherwise we'll miss the bus.","Condiciones"],
  ["whether","si (entre opciones)","I'm not sure whether to stay or go.","Condiciones"],
  ["first of all","antes que nada","First of all, thank you for coming.","Tiempo y orden"],
  ["then","luego, después","We had dinner and then went for a walk.","Tiempo y orden"],
  ["after that","después de eso","After that, we went home.","Tiempo y orden"],
  ["meanwhile","mientras tanto","Meanwhile, I'll prepare the slides.","Tiempo y orden"],
  ["in the end","al final","In the end, we stayed at home.","Tiempo y orden"],
  ["eventually","al final, con el tiempo","After an hour, the bus eventually arrived.","Tiempo y orden"],
  ["as soon as","en cuanto","Call me as soon as you arrive.","Tiempo y orden"],
  ["until","hasta (que)","Wait here until I come back.","Tiempo y orden"],
  ["by the time","para cuando","By the time we arrived, the shop was closed.","Tiempo y orden"],
  ["finally","por último, por fin","Finally, I'd like to thank the team.","Tiempo y orden"],
  ["anyway","en fin, de todas formas","Anyway, let's get back to work.","Para conversar"],
  ["actually","en realidad","Actually, I've never been to Gozo.","Para conversar"],
  ["to be honest","la verdad, siendo sincera","To be honest, I didn't like the film.","Para conversar"],
  ["by the way","por cierto","By the way, did you see the email?","Para conversar"],
  ["in my opinion","en mi opinión","In my opinion, it's too expensive.","Para conversar"],
  ["for example","por ejemplo","I love Maltese food, for example pastizzi.","Para conversar"],
  ["in other words","en otras palabras","In other words, we need more time.","Para conversar"],
  ["after all","después de todo","Don't worry. After all, it's your first day.","Para conversar"],
  ["at least","al menos","It's raining, but at least it's warm.","Para conversar"],
  ["basically","básicamente","Basically, the plan didn't work.","Para conversar"],
  ["I mean","o sea, quiero decir","It was okay. I mean, it wasn't amazing.","Para conversar"],
  ["as far as I know","que yo sepa","As far as I know, the shop opens at nine.","Para conversar"]
 ]},
 phrasal:{name:'Phrasal verbs', intro:'Verbo + partícula: los que de verdad se usan cada día.', fields:'en, es, example, group', items:[
  ["get up","levantarse","I usually get up at seven.","Día a día"],
  ["wake up","despertarse","I wake up before my alarm.","Día a día"],
  ["find out","averiguar, enterarse","Let me find out what time it opens.","Día a día"],
  ["look for","buscar","I'm looking for a flat in Gżira.","Día a día"],
  ["look after","cuidar","Could you look after my plants?","Día a día"],
  ["look forward to","tener ganas de","I look forward to the weekend.","Día a día"],
  ["put on","ponerse (ropa)","Put on a jacket, it's cold.","Día a día"],
  ["take off","quitarse (ropa); despegar","Please take off your shoes.","Día a día"],
  ["turn on","encender","Can you turn on the air conditioning?","Día a día"],
  ["turn off","apagar","Don't forget to turn off the lights.","Día a día"],
  ["throw away","tirar (a la basura)","Don't throw away that box.","Día a día"],
  ["go out","salir","Do you want to go out tonight?","Día a día"],
  ["set up","montar, configurar","We need to set up the new printer.","Trabajo"],
  ["carry on","seguir, continuar","Carry on, I'm listening.","Trabajo"],
  ["put off","aplazar","Don't put off the meeting again.","Trabajo"],
  ["sort out","solucionar, organizar","I'll sort out the problem today.","Trabajo"],
  ["fill in","rellenar (un formulario)","Could you fill in this form, please?","Trabajo"],
  ["hand in","entregar","I need to hand in the report by Friday.","Trabajo"],
  ["take on","asumir (una tarea); contratar","She doesn't want to take on more work.","Trabajo"],
  ["deal with","encargarse de","I'll deal with the client.","Trabajo"],
  ["come up with","idear, proponer","We need to come up with a new idea.","Trabajo"],
  ["run out of","quedarse sin","We've run out of paper.","Trabajo"],
  ["get on with","llevarse bien con","I get on well with my colleagues.","Personas"],
  ["catch up","ponerse al día","Let's meet up and catch up soon.","Personas"],
  ["hang out","pasar el rato","We usually hang out at the beach.","Personas"],
  ["meet up","quedar","Shall we meet up on Saturday?","Personas"],
  ["fall out","pelearse, enfadarse","They fell out over money.","Personas"],
  ["make up","reconciliarse; inventar","They argued, but then they made up.","Personas"],
  ["break up","romper (una relación)","My cousin broke up with her boyfriend.","Personas"],
  ["let down","decepcionar, fallar","Don't let me down.","Personas"],
  ["look up to","admirar","I've always looked up to my mother.","Personas"],
  ["turn up","aparecer, llegar","He turned up an hour late.","Personas"],
  ["break down","averiarse","The car broke down on the motorway.","Problemas"],
  ["give up","rendirse, dejar de","Don't give up now!","Problemas"],
  ["turn down","rechazar; bajar (volumen)","She turned down the job offer.","Problemas"],
  ["put up with","aguantar, soportar","I can't put up with this noise.","Problemas"],
  ["figure out","descifrar, entender","I can't figure out this bus timetable.","Problemas"],
  ["work out","resolver; hacer ejercicio","Don't worry, it'll work out.","Problemas"],
  ["calm down","calmarse","Calm down, it's not a big deal.","Problemas"],
  ["cheer up","animarse","Cheer up! It's Friday.","Problemas"],
  ["come across","encontrar por casualidad","I came across an old photo.","Problemas"],
  ["back up","respaldar; hacer copia de seguridad","Always back up your files.","Problemas"],
  ["get on / get off","subir / bajar (bus, tren)","Get off at the next stop.","Moverse y viajar"],
  ["get in / get out","subir / bajar (coche, taxi)","Get in, I'll give you a lift.","Moverse y viajar"],
  ["check in","registrarse (hotel, vuelo)","We can check in after two.","Moverse y viajar"],
  ["check out","dejar el hotel; echar un vistazo","We have to check out by eleven.","Moverse y viajar"],
  ["set off","salir (de viaje)","We set off early to avoid the traffic.","Moverse y viajar"],
  ["drop off","dejar (a alguien o algo)","Can you drop me off at the station?","Moverse y viajar"],
  ["pick up","recoger","I'll pick you up at six.","Moverse y viajar"],
  ["get back","volver","What time did you get back last night?","Moverse y viajar"],
  ["pay back","devolver (dinero)","I'll pay you back tomorrow.","Dinero y compras"],
  ["try on","probarse (ropa)","Can I try on this dress?","Dinero y compras"],
  ["sell out","agotarse","The tickets sold out in an hour.","Dinero y compras"],
  ["save up","ahorrar (para algo)","I'm saving up for a new laptop.","Dinero y compras"],
  ["splash out","darse un capricho caro","Let's splash out on a nice dinner.","Dinero y compras"],
  ["shop around","comparar precios","It's worth shopping around for flights.","Dinero y compras"]
 ]},
 false:{name:'Falsos amigos', intro:'Parecen español, pero significan otra cosa. Las trampas más típicas.', fields:'en, real meaning, trap (Spanish), trap (English)', items:[
  ["actually","en realidad","actualmente","currently"],
  ["eventually","al final, con el tiempo","eventualmente","possibly"],
  ["embarrassed","avergonzado/a","embarazada","pregnant"],
  ["sensible","sensato/a","sensible","sensitive"],
  ["library","biblioteca","librería","bookshop"],
  ["realise","darse cuenta","realizar","carry out"],
  ["assist","ayudar","asistir","attend"],
  ["attend","asistir","atender","serve / look after"],
  ["carpet","alfombra","carpeta","folder"],
  ["exit","salida","éxito","success"],
  ["success","éxito","suceso","event"],
  ["constipated","estreñido/a","constipado","have a cold"],
  ["lecture","clase, conferencia","lectura","reading"],
  ["argument","discusión, pelea","argumento (de una película)","plot"],
  ["sympathetic","comprensivo/a","simpático","friendly / nice"],
  ["large","grande","largo","long"],
  ["discuss","hablar de, comentar","discutir (pelear)","argue"],
  ["fabric","tela","fábrica","factory"],
  ["casualty","víctima, herido","casualidad","coincidence"],
  ["compromise","llegar a un acuerdo","compromiso","commitment"],
  ["contest","concurso","contestar","answer"],
  ["disgust","asco","disgusto","upset"],
  ["intoxicated","borracho/a","intoxicado","poisoned"],
  ["parents","padres","parientes","relatives"],
  ["pretend","fingir","pretender","intend"],
  ["record","grabar; registro","recordar","remember"],
  ["rope","cuerda","ropa","clothes"],
  ["support","apoyar","soportar","put up with"],
  ["terrific","genial","terrorífico","terrifying"],
  ["billion","mil millones","billón","trillion"],
  ["career","carrera profesional","carrera (universitaria)","degree"],
  ["college","centro de estudios superiores","colegio","school"],
  ["deception","engaño","decepción","disappointment"],
  ["diversion","desvío","diversión","fun"],
  ["facility","instalación","facilidad","ease"],
  ["injury","lesión","injuria","insult"],
  ["introduce","presentar (a alguien)","introducir","put in"],
  ["notice","darse cuenta; aviso","noticia","news"],
  ["quit","dejar (un trabajo)","quitar","remove"],
  ["recipient","destinatario","recipiente","container"],
  ["resume","reanudar","resumir","summarise"],
  ["assume","suponer","asumir (una tarea)","take on"],
  ["actual","real, verdadero","actual","current"],
  ["agenda","orden del día","agenda (libreta)","diary / planner"],
  ["apology","disculpa","apología","defence"],
  ["preservative","conservante","preservativo","condom"]
 ]},
 ukus:{name:'UK vs US', intro:'En Malta se usa sobre todo la versión británica.', fields:'uk, us, es', items:[
  ["flat","apartment","piso, apartamento"],["lift","elevator","ascensor"],["queue","line","fila"],["holiday","vacation","vacaciones"],
  ["mobile","cell phone","celular, móvil"],["bin","trash can","papelera"],["chips","fries","papas fritas"],["crisps","chips","papas de paquete"],
  ["biscuit","cookie","galleta"],["rubbish","garbage","basura"],["ground floor","first floor","planta baja"],["first floor","second floor","primer piso"],
  ["autumn","fall","otoño"],["film","movie","película"],["cinema","movie theater","cine"],["petrol","gas","gasolina"],
  ["trainers","sneakers","zapatillas deportivas"],["the bill","the check","la cuenta"],["maths","math","matemáticas"],["post","mail","correo"],
  ["postcode","zip code","código postal"],["motorway","highway","autopista"],["pavement","sidewalk","acera"],["car park","parking lot","aparcamiento"],
  ["roundabout","traffic circle","rotonda"],["underground","subway","metro"],["return ticket","round-trip ticket","billete de ida y vuelta"],["single ticket","one-way ticket","billete de ida"],
  ["timetable","schedule","horario"],["trousers","pants","pantalones"],["jumper","sweater","jersey, suéter"],["waistcoat","vest","chaleco"],
  ["nappy","diaper","pañal"],["dummy","pacifier","chupete"],["torch","flashlight","linterna"],["tap","faucet","grifo"],
  ["cooker","stove","cocina (el aparato)"],["aubergine","eggplant","berenjena"],["courgette","zucchini","calabacín"],["coriander","cilantro","cilantro"],
  ["sweets","candy","dulces, caramelos"],["takeaway","takeout","comida para llevar"],["CV","résumé","currículum"],["fortnight","two weeks","quince días"],
  ["full stop","period","punto final"],["rubber","eraser","goma de borrar"],["lorry","truck","camión"],["boot","trunk","maletero"],
  ["bonnet","hood","capó"],["windscreen","windshield","parabrisas"],["garden","yard","jardín"],["shop","store","tienda"],
  ["chemist's","drugstore","farmacia"],["at the weekend","on the weekend","el fin de semana"],["have you got…?","do you have…?","¿tienes…?"],["mum","mom","mamá"]
 ]}
};
window.CHEERS_CONTENT = {version: VERSION, scen: SCEN, lessons: LESSONS, tools: TOOLS};
})();
