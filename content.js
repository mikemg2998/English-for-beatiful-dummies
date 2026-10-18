/* English For Beautiful Dummies — lesson content.
   To add lessons: append objects to LESSONS (same shape) and bump VERSION. The app picks them up on its next online load.
   phrases: [english, spanish, tip] · words: [english, spanish, 1 if British-specific] · dialogue: [speaker, english, spanish]
   quiz: [kind, prompt, [correct, wrong, wrong, wrong], explanation]  (kind: translate | natural | complete | meaning) */
(function(){
const VERSION = '2026-10-18.2';
const SCEN = [
  {id:'work', name:'Trabajo', en:'At work', icon:'case', desc:'El día a día en la oficina y todo para conseguir trabajo.',
   subs:[{id:'job', name:'Looking for a job', desc:'Entrevistas, tu experiencia, CV y negociar el salario.'},{id:'igaming', name:'Looking for a job: iGaming', desc:'Empresas de iGaming en Malta: Game Presenter, Shuffler, turnos del estudio y diseño.'},{id:'office', name:'En la oficina', desc:'Emails, compañeros, llamadas y horarios.'}]},
  {id:'meet', name:'Reuniones', en:'Meetings', icon:'chat', desc:'Opinar, presentar tu trabajo y cerrar acuerdos.'},
  {id:'daily', name:'Día a día', en:'Out and about', icon:'bag', desc:'Tiendas, cafés, transporte, médico, piso y reservas.'},
  {id:'social', name:'Social', en:'With friends', icon:'people', desc:'Hacer planes, charlar, hablar de ti y de tus aficiones.'}
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
  ["translate","¿Cómo se dice «dar seguimiento» en un email?",["follow up","follow down","continue on","pursue after"],"'Follow up' es la expresión estándar: 'I'm just following up on…'."],
  ["natural","Tu jefa quiere el informe el viernes, pero necesitas más tiempo. ¿Qué dices?",["Could we push the deadline back to Monday?","I want more days, please.","Can we put the deadline after?","Is possible Monday?"],"'Push back' = aplazar. Pedirlo con 'Could we…?' suena educado."],
  ["complete","Please find ___ the invoice.",["attached","attaching","attach","to attach"],"La fórmula fija es 'Please find attached…'."],
  ["translate","«Perdón por la demora en responder» (tono cercano)",["Sorry for the slow reply.","Sorry for answering lately.","Excuse the delay of my response.","Sorry for the late answer me."],"'Lately' significa 'últimamente', no 'tarde'. Error muy común."],
  ["meaning","Si un colega dice «I'll chase him up», significa que…",["le va a insistir para que responda","lo va a perseguir por la calle","lo va a despedir","lo va a ayudar a subir"],"'Chase someone up' (muy británico) = recordarle algo pendiente con insistencia."]
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
  ["translate","«¿Me echas una mano?»",["Could you give me a hand?","Could you give me your hand?","Can you put me a hand?","Could you lend me a finger?"],"'Give someone a hand' = ayudar. 'Give me your hand' es literal: dame tu mano."],
  ["meaning","«I'm snowed under» quiere decir…",["Tengo muchísimo trabajo","Tengo mucho frío","Estoy de vacaciones","Estoy enfermo"],"Imagina estar enterrado bajo la nieve: tantas tareas que no ves la salida."],
  ["complete","Don't worry, I'll ___ it out.",["sort","solve","fix","arrange"],"'Sort out' es un phrasal verb. 'Solve out' o 'fix out' no existen."],
  ["natural","Quieres proponerle un café a un compañero, al estilo británico.",["Shall we grab a coffee?","We take a coffee?","Do you want that we drink coffee?","Let's to have a coffee."],"En inglés el café se 'grab' o se 'have', no se 'take'. 'Shall we…?' suena natural."],
  ["meaning","Si alguien dice «I'm off on Friday», significa que…",["el viernes tiene libre","el viernes está apagado","el viernes llega tarde","el viernes renuncia"],"'Be off' = no trabajar ese día."]
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
  ["natural","Quieres interrumpir con educación en una reunión.",["Sorry, can I just come in here?","Wait, I talk now.","Stop, let me speak.","Excuse, I interrupt you?"],"'Come in' aquí significa intervenir en la conversación."],
  ["translate","«Entiendo lo que dices, pero…»",["I see your point, but…","I look your point, but…","I watch what you mean, but…","I see your reason, but…"],"'See' también significa entender: 'I see' = ya veo."],
  ["complete","The plan is good. ___, it's quite expensive.",["However","Although","Despite","Because"],"'However' va al inicio con coma. 'Although' necesita una oración: 'Although it's good, it's expensive.'"],
  ["meaning","«I'd go along with that» significa…",["Estoy de acuerdo con eso","Me voy con eso","Quiero irme ya","No lo acepto"],"'Go along with' = aceptar o apoyar una idea."],
  ["translate","«Siendo sincero, no estoy convencido.»",["To be honest, I'm not convinced.","Being sincere, I'm not convinced.","To be honest, I'm not convincing.","Honestly, I don't convince."],"'Being sincere' es traducción literal. Lo natural es 'To be honest'."]
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
  ["translate","«Pasemos al siguiente punto.»",["Let's move on to the next point.","Let's pass to the next point.","We pass the next point.","Let's go in the next point."],"En reuniones se dice 'move on'. 'Pass' aquí es traducción literal."],
  ["meaning","«The minutes» de una reunión son…",["el acta","los minutos que duró","los asistentes","las diapositivas"],"Ojo: 'minutes' también es 'minutos', pero en una reunión es el acta."],
  ["complete","We're running ___ of time.",["out","off","away","down"],"'Run out of' = quedarse sin algo."],
  ["natural","Quieres terminar la reunión de forma natural.",["Let's wrap up.","Let's finish it up the meeting.","We close now.","Finish, bye."],"'Wrap up' = cerrar, como envolver un regalo."],
  ["translate","«¿Nos repasas las cifras?»",["Could you run us through the figures?","Could you repass the numbers?","Could you run the figures to us?","Can you revise us the figures?"],"En UK 'revise' es estudiar para un examen, no 'revisar'."]
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
  ["complete","Can I pay ___ card?",["by","with","in","on"],"'Pay by card', 'pay in cash'."],
  ["meaning","En el Reino Unido y Malta, «the till» es…",["la caja registradora","el estante","la puerta","el probador"],"La oirás en frases como 'You can pay at the till'."],
  ["natural","Un vendedor te ofrece ayuda, pero solo quieres mirar.",["I'm just browsing, thanks.","I only see, thanks.","I'm watching, thanks.","No, I look alone."],"'Browse' = mirar sin buscar nada concreto."],
  ["translate","«carrito del supermercado» (inglés británico)",["trolley","cart","car","wagon"],"'Cart' es americano. En UK y Malta oirás 'trolley'."],
  ["natural","Te preguntan «Do you need a bag?» y no la quieres.",["No, I'm fine, thanks.","No, I don't need never.","Not bag.","No, I am good of it."],"'I'm fine' aquí significa 'así estoy bien'."]
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
  ["translate","«la cuenta» (en un restaurante del Reino Unido)",["the bill","the check","the account","the count"],"'Check' es americano. En UK y Malta se pide 'the bill'."],
  ["complete","Is that to have in or ___ away?",["take","go","bring","carry"],"'Take away' = para llevar."],
  ["meaning","«Still or sparkling?» te lo preguntan por…",["el agua: sin gas o con gas","el café: frío o caliente","la mesa: dentro o fuera","el vino: tinto o blanco"],"'Still water' = agua sin gas."],
  ["natural","Quieres saber qué plato recomiendan.",["What would you recommend?","What do you recommend me?","Recommend me something to eat?","What is your recommend?"],"'Recommend me' suena mal en inglés. Usa 'What would you recommend?'."],
  ["translate","«entrante» (primer plato, inglés británico)",["starter","entrance","entry","beginning"],"'Entrance' es la entrada de un edificio. Falso amigo."]
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
  ["complete","Which stop do I get ___ at?",["off","out","down","of"],"Del bus te bajas con 'get off'. Del coche, con 'get out'."],
  ["translate","«rotonda»",["roundabout","round square","circle road","turnaround"],"En Malta hay muchas: 'Turn left at the roundabout'."],
  ["natural","No entendiste las indicaciones.",["Sorry, could you say that again?","What? Repeat.","Sorry, could you repeat me?","Again, please, slower you."],"'Repeat me' no es correcto. 'Say that again' es lo más natural."],
  ["meaning","«A return ticket» es…",["un billete de ida y vuelta","un billete devuelto","solo la vuelta","un reembolso"],"Solo ida = 'a single'."],
  ["translate","«acera» (inglés británico)",["pavement","sidewalk","pathway","floor"],"'Sidewalk' es americano."]
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
  ["meaning","«Do you fancy a coffee?» significa…",["¿Te apetece un café?","¿Te gusta el café elegante?","¿Tienes café de lujo?","¿Odias el café?"],"'Fancy' como verbo = apetecer."],
  ["translate","«Lo siento, no puedo ir.»",["Sorry, I can't make it.","Sorry, I can't do it go.","Sorry, I don't can go.","Sorry, I can't arrive it."],"'Make it' = lograr asistir."],
  ["complete","Let's ___ up on Saturday.",["meet","see","find","join"],"'Meet up' = quedar con alguien."],
  ["natural","Te invitan a un plan y quieres decir que sí con entusiasmo.",["Count me in!","Count with me!","I'm in for count!","Yes, I go it!"],"'Count with me' es traducción literal. Lo natural es 'Count me in'."],
  ["meaning","Si un plan se «called off», entonces…",["se canceló","alguien llamó por teléfono","se apagó","se adelantó"],"'Call off' = cancelar."]
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
  ["meaning","«I'm gutted» significa…",["Estoy muy decepcionado","Tengo hambre","Estoy muy contento","Me duele el estómago"],"Lo contrario sería 'I'm chuffed'."],
  ["natural","Un amigo te cuenta que se va a vivir a Londres. Reaccionas con sorpresa.",["No way! Really?","Not way! True?","Impossible is!","What you say?"],"'No way!' = ¡no me digas!"],
  ["translate","«Estoy agotado» (coloquial británico)",["I'm knackered.","I'm exhausting.","I'm tiring.","I'm finished of energy."],"'I'm exhausting' significa 'soy agotador'. Para cómo te sientes usa '-ed'."],
  ["meaning","Alguien te explica por qué llegó tarde y respondes «Fair enough». Estás diciendo…",["Vale, lo entiendo y lo acepto","Eso es injusto","Ya es suficiente, cállate","Qué justo eres"],"'Fair enough' = me parece razonable."],
  ["complete","How's it ___?",["going","doing","being","making"],"'How's it going?' = ¿qué tal?"]
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
  ["natural","Te dicen «Tell me about yourself». ¿Cómo empiezas?",["I'm an architect by training, with six years of experience in design.","I am 30 years, I am architect.","My name is Ana and I have born in…","Okay, so, I like many things."],"Empieza por tu perfil profesional, no por datos personales."],
  ["translate","«Tengo seis años de experiencia.»",["I've got six years of experience.","I have six years of experiences.","I have experience of six years old.","I'm six years experienced."],"'Experience' en este sentido no lleva plural."],
  ["complete","I'm an architect ___ training.",["by","of","in","for"],"'By training' = de formación."],
  ["meaning","«Role» en una entrevista significa…",["puesto de trabajo","papel en una obra de teatro","rollo","horario"],"'This role' = este puesto."],
  ["translate","«Puedo empezar de inmediato.»",["I'm available to start straight away.","I can begin immediately now already.","I'm disposable to start now.","I start in seguida."],"'Disposable' significa desechable. Falso amigo."]
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
  ["translate","«planos» (de arquitectura)",["drawings","plans of house","planes","maps"],"'Plans' existe, pero lo más común es 'drawings'. 'Planes' son aviones."],
  ["meaning","«Refurbishment» significa…",["reforma de un edificio o espacio","mueble nuevo","limpieza profunda","demolición"],"En UK y Malta se usa mucho para reformas."],
  ["complete","I was responsible ___ the design.",["for","of","to","about"],"'Responsible for' + lo que haces."],
  ["natural","Quieres decir que el proyecto salió bien en tiempo y dinero.",["We delivered it on time and within budget.","We finished in the time and in the money.","It was punctual and cheap.","We delivered in hour and in budget."],"Expresión fija: 'on time and within budget'."],
  ["translate","«contratista»",["contractor","contractist","constructor","contracter"],"'Contractor' es la empresa o persona que ejecuta la obra."]
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
  ["translate","«exposición» (de arte)",["exhibition","exposition","show room","exposure"],"'Exposure' es exposición al sol o a un riesgo. Para arte: 'exhibition'."],
  ["translate","«maqueta»",["scale model","maquette model","mock","small building"],"En arquitectura se dice 'scale model' o simplemente 'model'."],
  ["complete","I was ___ charge of the 3D printing workshop.",["in","on","at","of"],"'In charge of' = a cargo de."],
  ["natural","Quieres decir qué aprendiste en ese trabajo.",["It taught me to solve problems quickly.","It learned me to solve problems fast.","I learned to me solve problems.","It teached me to solve problems."],"'Teach' = enseñar; 'learn' = aprender."],
  ["meaning","«Curator» en una galería es…",["la persona que selecciona y organiza las obras","quien cura a los enfermos","el guardia de seguridad","quien limpia las obras"],"Falso amigo: no tiene nada que ver con curar."]
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
  ["natural","Te preguntan por una debilidad. ¿Qué respondes?",["Something I'm working on is my English, and I'm improving every day.","I don't have weaknesses.","My weakness is that I am very bad.","I am weak in many things."],"Nombra algo real y muestra cómo lo estás mejorando."],
  ["complete","I'm passionate ___ sustainable design.",["about","for","of","with"],"'Passionate about' es la combinación correcta."],
  ["translate","«Trabajo bien bajo presión.»",["I work well under pressure.","I work good under pressure.","I work well below pressure.","I work well in pressure."],"'Well' acompaña a verbos; 'good' a sustantivos."],
  ["meaning","«Reliable» significa…",["de confianza, que cumple","relajado","que tiene relaciones","religioso"],"Ej.: 'I'm reliable and punctual.'"],
  ["translate","«fortaleza» (cualidad)",["strength","fortress","force","strong"],"'Fortress' es una fortaleza militar, como las de La Valeta."]
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
  ["natural","Quieres pedir más salario sin sonar agresiva.",["Based on my experience, I was expecting something closer to €32,000.","I want more money.","That is very little, no?","Pay me €32,000 or I go."],"Justificar con tu experiencia y dar una cifra concreta es la forma profesional."],
  ["meaning","«Notice period» es…",["el tiempo de preaviso para dejar un trabajo","el periodo de vacaciones","la hora de las noticias","el periodo de prueba"],"Ej.: 'My notice period is one month.'"],
  ["translate","«bruto» (salario)",["gross","brute","total","raw"],"'Gross' = bruto y 'net' = neto."],
  ["complete","Could I have a day or two to think it ___?",["over","about","on","after"],"'Think it over' = pensarlo bien."],
  ["translate","«aumento de sueldo» (inglés británico)",["pay rise","salary up","money increase","pay grow"],"En UK se dice 'pay rise'; en US, 'raise'."]
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
  ["natural","Te preguntan «Have you got any questions for us?». Lo mejor es…",["What does a typical day look like in this role?","No, nothing.","How much holidays I have?","No questions, thank you, bye."],"Lleva siempre una o dos preguntas: muestra interés."],
  ["complete","When can I expect to hear ___ from you?",["back","from","again","after"],"'Hear back' = recibir una respuesta."],
  ["translate","«formación» (en el trabajo)",["training","formation","education job","forming"],"'Formation' es formación de rocas o de un equipo. En el trabajo: 'training'."],
  ["meaning","«You've been shortlisted» significa…",["estás en la lista de finalistas","te rechazaron","tu lista es corta","te contrataron"],"Buena noticia: pasaste a la siguiente fase."],
  ["translate","«Ha sido un placer conocerle.»",["It was lovely to meet you.","It was a pleasure to know you.","Was a pleasure meet you.","I had pleasure of knowing you."],"Al conocer a alguien se usa 'meet', no 'know'."]
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
  ["translate","«postularse a un puesto»",["apply for a job","postulate to a job","apply to a post of work","candidate for a job"],"'Postulate' es postular una teoría. Para empleos: 'apply for'."],
  ["natural","¿Cómo cierras un email formal pidiendo trabajo?",["I look forward to hearing from you.","Waiting your answer.","I wait for your news, kisses.","Answer me soon please."],"'I look forward to hearing from you' es el cierre estándar."],
  ["meaning","«Vacancy» en una oferta de empleo es…",["un puesto libre","unas vacaciones","una habitación libre de hotel","un despido"],"En hoteles también se usa, pero en empleo es una vacante."],
  ["complete","Please find my CV and portfolio ___.",["attached","attaching","attach","in attach"],"Fórmula fija: 'Please find … attached.'"],
  ["translate","«carta de presentación»",["cover letter","presentation letter","introduction card","motivation card"],"En UK se dice 'cover letter' o 'covering letter'."]
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
  ["natural","Quieres preguntar por tu candidatura sin parecer insistente.",["I was wondering if there's any update on my application.","Why you don't answer me?","I need the answer now.","Did you forget me?"],"'I was wondering if…' es la fórmula educada."],
  ["translate","«Acepto la oferta encantada.»",["I'm delighted to accept the offer.","I accept enchanted the offer.","I'm enchanted to accept.","With pleasure I accept to the offer."],"'Enchanted' significa hechizada. Usa 'delighted'."],
  ["meaning","«Unfortunately, you've been unsuccessful» significa…",["no te seleccionaron","no tuviste éxito en la vida","llegaste tarde","te dieron el puesto"],"Frase típica de los correos de rechazo."],
  ["complete","I'm ___ I've decided to accept another offer.",["afraid","sorry for","scared","fear"],"'I'm afraid…' suaviza malas noticias."],
  ["translate","«novedad» (sobre un proceso)",["update","novelty","news new","novel"],"'Novelty' es algo nuevo y original; para un proceso se dice 'update'."]
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
  ["translate","«Se te corta» (en una llamada)",["You're breaking up.","You're cutting.","You're broken.","Your voice is cutting me."],"'Break up' aquí es cortarse la señal. También significa terminar una relación."],
  ["natural","Alguien habla pero no se le oye en la videollamada. ¿Qué dices?",["I think you're on mute.","You are silenced.","Your microphone is closed.","I don't listen to you."],"Si no oyes a alguien di 'I can't hear you', no 'I don't listen'."],
  ["complete","Can I call you ___ in five minutes?",["back","again","return","later"],"'Call someone back' = devolverle la llamada."],
  ["meaning","«I'm going to have to drop off» significa…",["me tengo que salir de la llamada","voy a dejar algo en tu casa","me voy a caer","voy a bajar el volumen"],"'Drop off' tiene varios usos; en una llamada es salirse."],
  ["translate","«colgar» (el teléfono)",["hang up","hang on","put down the call","close the phone"],"'Hang on' significa 'espera un momento'."]
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
  ["natural","Quieres pedir el viernes libre con educación.",["Would it be alright if I took Friday off?","I want Friday free.","Give me Friday, please.","Is possible I don't come Friday?"],"'Would it be alright if…?' suena educado y natural."],
  ["meaning","«Bank holiday» es…",["un día festivo","las vacaciones del banco","un día en que solo cierra el banco","un préstamo"],"En UK y Malta los festivos se llaman 'bank holidays' o 'public holidays'."],
  ["complete","Could I ___ shifts with you on Saturday?",["swap","change me","exchange to","switch for"],"'Swap shifts' = intercambiar turnos."],
  ["translate","«Hoy estoy de baja por enfermedad.»",["I'm off sick today.","I'm low for sickness today.","Today I'm in sick down.","I'm sick off today."],"'Be off sick' = no ir a trabajar por estar enferma."],
  ["translate","«horas extra»",["overtime","extra hours time","more hours","overwork"],"'Overwork' es trabajar demasiado, no horas extra."]
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
  ["translate","«diapositiva»",["slide","diapositive","sheet","page show"],"En presentaciones se dice 'slide'."],
  ["natural","No sabes una respuesta durante tu presentación.",["That's a good question. Let me get back to you on that.","I don't know, sorry, next.","No idea.","That question is difficult for me, bye."],"Es la forma profesional de ganar tiempo."],
  ["complete","I'd like to walk you ___ the new design.",["through","across","by","over"],"'Walk someone through something' = explicárselo paso a paso."],
  ["translate","«En resumen…»",["To sum up…","In resume…","Resuming…","In summary of…"],"'Resume' significa reanudar."],
  ["meaning","«Let me point out…» significa…",["déjenme señalar…","déjenme salir…","déjenme apuntar afuera","déjenme puntuar…"],"'Point out' = señalar, destacar."]
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
  ["translate","«receta médica»",["prescription","recipe","receipt","medical recipe"],"'Recipe' es una receta de cocina; 'receipt' es un recibo."],
  ["complete","I've had a headache ___ yesterday.",["since","for","from","during"],"'Since' + momento de inicio; 'for' + duración (for two days)."],
  ["natural","Quieres saber cada cuánto tomar la medicina.",["How often should I take it?","How many times I take?","Each how much I take it?","When is the frequency?"],"'How often…?' = ¿cada cuánto?"],
  ["meaning","«GP» en Malta y UK es…",["el médico de cabecera","una gasolinera","un gran premio","una farmacia"],"GP = General Practitioner."],
  ["translate","«Me duele la garganta.»",["I've got a sore throat.","My throat is paining.","I have pain in the throat of me.","My throat hurts me."],"Lo más natural es 'I've got a sore throat'."]
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
  ["translate","«casero» (dueño del piso)",["landlord","house man","owner of home","caser"],"El inquilino es 'tenant'."],
  ["natural","Quieres saber si la luz y el agua van aparte.",["Are the bills included in the rent?","The light is included?","The rent includes the factures?","Do you include waters?"],"'Bills' agrupa luz, agua e internet."],
  ["meaning","«Furnished» significa…",["amueblado","terminado","limpio","con calefacción"],"Sin muebles: 'unfurnished'."],
  ["complete","Could I come and ___ it this week?",["see","watch","look","visit to"],"'Come and see' = ir a ver."],
  ["translate","«depósito» (fianza del alquiler)",["deposit","deposition","guarantee money","depot"],"'Deposition' es una declaración legal."]
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
  ["translate","«reservar» (inglés británico)",["book","reserve me","booking to","make reserve"],"En UK se dice 'book' para mesas, citas y hoteles."],
  ["meaning","«We're fully booked» significa…",["está todo reservado, no hay sitio","tenemos todos los libros","estamos leyendo","está abierto"],"Lo oirás mucho en restaurantes de Malta en verano."],
  ["natural","Quieres saber si hay hueco el jueves.",["Have you got anything available on Thursday?","Is there something for Thursday free?","Thursday you have?","You are free on Thursday?"],"'Have you got anything available…?' es la fórmula típica."],
  ["complete","Could I ___ my appointment? I can't make it on Monday.",["reschedule","rechange","replan","move on"],"'Reschedule' = cambiar la fecha u hora."],
  ["translate","«¿Me lo podría deletrear?»",["Could you spell that for me?","Could you letter it for me?","Can you say the letters me?","Could you deletreate it?"],"'Spell' = deletrear."]
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
  ["complete","How long ___ you lived here?",["have","do","are","did"],"Para algo que empezó en el pasado y sigue: 'How long have you lived…?'"],
  ["translate","«Lo que más extraño es la comida.»",["What I miss most is the food.","The thing I lose most is the food.","What more I miss is the meal.","What I most extrañ is the food."],"'Miss' = extrañar; 'lose' = perder."],
  ["meaning","«Back home…» significa…",["en mi país, de donde vengo","volviendo a casa ahora","detrás de la casa","en casa, no en la oficina"],"Muy usado por quienes viven fuera de su país."],
  ["natural","Quieres decir que aún no te acostumbras a algo.",["I'm still getting used to it.","I'm still not used of it.","I'm still accustoming.","I still don't use to it."],"'Get used to' + algo = acostumbrarse."],
  ["translate","«Me mudé a Malta el año pasado.»",["I moved to Malta last year.","I changed to Malta the last year.","I moved me to Malta last year.","I mudated to Malta last year."],"'Move' ya significa mudarse."]
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
  ["meaning","«What did you get up to?» significa…",["¿Qué hiciste?","¿A qué hora te levantaste?","¿Adónde subiste?","¿Qué compraste?"],"'Get up to' = hacer, en conversaciones informales."],
  ["translate","«Acabo de empezar yoga.»",["I've just taken up yoga.","I just started to yoga.","I finish to begin yoga.","I've just took up yoga."],"'Take up' (taken up) = empezar una afición."],
  ["complete","I'm really ___ photography at the moment.",["into","in","on","about"],"'Be into something' = gustarte mucho."],
  ["natural","Quieres proponer ir juntas a un sitio algún día.",["We should go together sometime.","We must to go together some day.","Let's go together sometimes.","We go together one time?"],"'Sometimes' significa 'a veces'."],
  ["meaning","«A lie-in» es…",["quedarse en la cama hasta tarde","una mentira","una siesta en el sofá","acostarse temprano"],"Ej.: 'I had a lovely lie-in on Sunday.'"]
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
  ["natural","Quieres decir que aceptas trabajar de noche y fines de semana.",["I'm happy to work shifts, including nights and weekends.","I can work in the nights and the weekends no problem.","Nights and weekends are possible for me to work.","I don't mind to work nights."],"'Happy to' = no tener problema en. Ojo: 'I don't mind working' (con -ing), no 'to work'."],
  ["meaning","«Live casino» se refiere a…",["juegos de casino transmitidos en directo con un presentador real","un casino lleno de gente","un casino que está abierto ahora","un juego de cartas en casa"],"Los jugadores juegan online mientras un presentador reparte en un estudio."],
  ["translate","«Mi lengua materna es el español.»",["I'm a native Spanish speaker.","My mother language is Spanish speaker.","I am Spanish native of language.","My maternal tongue is the Spanish."],"También: 'Spanish is my first language.'"],
  ["complete","Is the training ___?",["paid","payed","paying","pay"],"'Paid' es la forma correcta; 'payed' es un error común."],
  ["meaning","«Night shift» significa…",["turno de noche","camisa de noche","cambio de noche","noche libre"],"'Shift' = turno."]
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
  ["natural","Te preguntan por qué serías buena presentadora. ¿Qué dices?",["I'm confident in front of a camera and I enjoy interacting with people.","Because I talk a lot.","I like the money and the casino.","I don't know, I want to try."],"Habla de habilidades: seguridad en cámara, trato con la gente, calma."],
  ["meaning","«Outgoing» describe a alguien…",["extrovertido y sociable","que sale mucho de casa","que se va de la empresa","que llega tarde"],"Es una cualidad muy buscada para Game Presenter."],
  ["complete","I really enjoy ___ with people.",["interacting","to interact","interact","interacted"],"Después de 'enjoy' va el verbo con -ing."],
  ["translate","«Me siento segura frente a una cámara.»",["I'm confident in front of a camera.","I feel safe in front of a camera.","I'm secure in front of the camera.","I am sure in front of camera."],"'Safe' es estar a salvo, no tener seguridad en ti misma."],
  ["translate","«repartir» (cartas)",["deal","share","distribute cards to","repart"],"'Deal the cards' = repartir las cartas."]
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
  ["natural","La ruleta va a girar y quieres cerrar las apuestas.",["No more bets.","Bets are closed of now.","Finish to bet, please.","Stop the bets now, people."],"'No more bets' es la frase estándar."],
  ["translate","«fichas» (de casino)",["chips","tokens of money","cards","files"],"En un casino, 'chips' son las fichas."],
  ["meaning","En blackjack, «bust» significa…",["pasarse de 21","ganar la mano","pedir otra carta","empatar"],"'Hit' = pedir carta; 'stand' = plantarse."],
  ["complete","Let's see where the ball ___.",["lands","falls down to","arrives","is landing to"],"'Land' = caer, aterrizar."],
  ["natural","Un jugador nuevo escribe en el chat. ¿Cómo lo saludas?",["Hi, thanks for joining! Welcome to the table.","Who are you?","Hello new, you are welcome.","Welcome, now bet please."],"Cercano y profesional: saluda y agradece."]
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
  ["translate","«barajar» (cartas)",["shuffle","mix the cards","shake","barage"],"'Shuffle' = barajar. De ahí 'shuffler'."],
  ["translate","«baraja»",["deck","barrage","cards set","pack of game"],"En UK también se dice 'a pack of cards'."],
  ["natural","Quieres decir que eres detallista.",["I pay attention to detail.","I am very detailist.","I look the details a lot.","I have many details."],"'Detailist' no existe. Di 'I pay attention to detail' o 'I'm detail-oriented'."],
  ["complete","I always follow procedures ___.",["carefully","careful","with careful","care"],"Para describir cómo haces algo: adverbio con -ly."],
  ["meaning","«Could you cover my shift on Friday?» significa…",["¿Podrías hacer mi turno el viernes?","¿Podrías tapar mi camisa el viernes?","¿Podrías cambiar el viernes de sitio?","¿Podrías cubrirme con una manta?"],"'Cover a shift' = hacer el turno de otra persona."]
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
  ["meaning","«You're on nights from Monday» significa…",["desde el lunes trabajas en el turno de noche","el lunes sales de fiesta","los lunes por la noche descansas","el lunes tienes una cena"],"'Be on nights' = trabajar en el turno de noche."],
  ["translate","«código de vestimenta»",["dress code","clothes code","code of dressing","uniform rule"],"Ej.: 'Is there a dress code for the studio?'"],
  ["natural","Vas tarde al turno y avisas al supervisor.",["Sorry, I'm running late. I'll be there in ten minutes.","I am late, sorry, I arrive in ten.","Sorry, I'm coming late in ten minutes.","Wait me ten minutes."],"'Wait me' es un error común; se dice 'wait for me'."],
  ["complete","When's my next ___?",["break","rest time of","pause","stop"],"En el trabajo, el descanso es 'break'."],
  ["meaning","«24/7» significa…",["las 24 horas, todos los días","el 24 de julio","24 empleados y 7 mesas","de 24 a 7 horas"],"Se lee 'twenty-four seven'."]
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
  ["translate","«Manejo bien Photoshop.»",["I'm comfortable with Photoshop.","I manage Photoshop well.","I handle good Photoshop.","I drive Photoshop well."],"'Manage' es gestionar o dirigir; para herramientas di 'I'm comfortable with' o 'I'm good at'."],
  ["meaning","«Localisation» en una empresa es…",["adaptar un producto a otro idioma y cultura","encontrar la ubicación de algo","el lugar de la oficina","un local comercial"],"Ortografía británica: 'localisation'; americana: 'localization'."],
  ["natural","Quieres compartir tu trabajo con el entrevistador.",["Here's a link to my online portfolio.","Look my works in internet.","I send you my portfolio of works online.","Here you have my link of portfolio."],"'Here's a link to…' es la forma más natural."],
  ["complete","I'm keen ___ learn more about responsible gaming.",["to","for","of","on"],"'Keen to' + verbo = tener muchas ganas de."],
  ["translate","«atención al cliente»",["customer support","client attention","attention to the client","customer care center service"],"También se dice 'customer service'."]
 ]}
];
const TOOLS = {
 connectors:{name:'Conectores', intro:'Unen ideas para que no hables en frases sueltas.', items:[
  ["however","sin embargo","It's expensive. However, it's worth it."],
  ["on the other hand","por otro lado","The flat is small. On the other hand, it's very central."],
  ["although","aunque","Although it was raining, we went out."],
  ["even though","aunque (más enfático)","She came to work even though she was exhausted."],
  ["whereas","mientras que","I like tea, whereas my flatmate prefers coffee."],
  ["therefore","por lo tanto","We're short-staffed; therefore, the meeting is postponed."],
  ["so","así que","It was late, so I took a taxi."],
  ["besides","además, aparte de eso","I don't fancy going. Besides, it's too far."],
  ["as long as","siempre y cuando","You can borrow it as long as you bring it back."],
  ["unless","a menos que","We'll go to the beach unless it rains."],
  ["in case","por si acaso","Take a jacket in case it gets windy."],
  ["in the end","al final","In the end, we stayed at home."],
  ["meanwhile","mientras tanto","Meanwhile, I'll prepare the slides."],
  ["anyway","en fin, de todas formas","Anyway, let's get back to work."]
 ]},
 phrasal:{name:'Phrasal verbs', intro:'Los que de verdad se usan cada día.', items:[
  ["get up","levantarse","I usually get up at seven."],
  ["find out","averiguar, enterarse","I found out yesterday."],
  ["look for","buscar","I'm looking for a flat in Gżira."],
  ["look after","cuidar","Could you look after my dog this weekend?"],
  ["give up","dejar de, rendirse","Don't give up now!"],
  ["put off","aplazar","Stop putting it off."],
  ["run out of","quedarse sin","We've run out of milk."],
  ["turn down","rechazar; bajar (volumen)","She turned down the offer."],
  ["carry on","seguir, continuar","Carry on, I'm listening."],
  ["work out","resolver; hacer ejercicio","I can't work out the answer."],
  ["pick up","recoger","I'll pick you up at six."],
  ["set up","montar, configurar","We set up the new office last week."],
  ["come across","encontrar por casualidad","I came across an old photo."],
  ["get on with","llevarse bien con","I get on well with my flatmates."],
  ["fill in","rellenar (un formulario)","Could you fill in this form, please?"],
  ["sort out","solucionar, organizar","I need to sort out my bank account."]
 ]},
 false:{name:'Falsos amigos', intro:'Parecen español, pero significan otra cosa.', items:[
  ["actually","en realidad","No es 'actualmente' (eso es 'currently')."],
  ["eventually","al final, con el tiempo","No es 'eventualmente' (eso es 'possibly')."],
  ["embarrassed","avergonzado","No es 'embarazada' (eso es 'pregnant')."],
  ["sensible","sensato","No es 'sensible' (eso es 'sensitive')."],
  ["library","biblioteca","No es 'librería' (eso es 'bookshop')."],
  ["realise","darse cuenta","No es 'realizar' (eso es 'carry out')."],
  ["assist","ayudar","No es 'asistir' (eso es 'attend')."],
  ["carpet","alfombra","No es 'carpeta' (eso es 'folder')."],
  ["exit","salida","No es 'éxito' (eso es 'success')."],
  ["constipated","estreñido","No es 'constipado' (eso es 'have a cold')."],
  ["lecture","clase, conferencia","No es 'lectura' (eso es 'reading')."],
  ["argument","discusión, pelea","El argumento de una película es 'the plot'."],
  ["sympathetic","comprensivo","No es 'simpático' (eso es 'friendly' o 'nice')."],
  ["large","grande","No es 'largo' (eso es 'long')."]
 ]},
 ukus:{name:'UK vs US', intro:'En Malta se usa sobre todo la versión británica.', items:[
  ["flat","apartment","piso, apartamento"],["lift","elevator","ascensor"],["queue","line","fila"],["holiday","vacation","vacaciones"],
  ["mobile","cell phone","celular, móvil"],["bin","trash can","papelera"],["chips","fries","papas fritas"],["crisps","chips","papas de paquete"],
  ["biscuit","cookie","galleta"],["rubbish","garbage","basura"],["ground floor","first floor","planta baja"],["first floor","second floor","primer piso"],
  ["autumn","fall","otoño"],["film","movie","película"],["petrol","gas","gasolina"],["trainers","sneakers","tenis, zapatillas"],["the bill","the check","la cuenta"],["maths","math","matemáticas"]
 ]}
};
window.CHEERS_CONTENT = {version: VERSION, scen: SCEN, lessons: LESSONS, tools: TOOLS};
})();
