async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
MARTIN   FIERRO 

ILUSTRADO 

POR 

ARBIO 


EDICIONES  CANNATA 

DEPOSITO   DE  LEY  Na.  11.723 


JOSÉ  HERNÁNDEZ 


1 

Aquí  me  pongo  a  cantar 
al  compás  de  la  vigüela, 
que  el  hombre  que  lo  desvela 
una  pena  estraordinaria, 
como  la  ave  solitaria 
con  el  ca.ntar  se  consuela. 

Pido  a  los  Santos  del  Cielo 
que  ayuden  mi  pensamiento 
les  pido  en  este  momento 
que  voy  a  cantar  mi  historia 
me  refresquen  la  memoria 
V  aclaren  mi  entendimiento. 

Vengan  Santos  milagrosos, 
vengan  todos  en  mi  ayuda, 
que  la  lengua  e  me  añuda 
y  se  me  turba  la  vista- 
pido  a  mi  Dios  que  me  asista 
en  una  ocasión  tan  ruda. 

Yo  he  vista  muchos  cantores, 
con  famas  bien  otenidas, 
y  que  después  de  alquiridas 
no  las  quieren  sustentar— 
parece  que  sin  largar 
se    cansaron    en    partidas. 

Mas  ande  otro  criollo  pasa- 
Martín  Fierro  ha  de  pasar- 
nada  lo  hace  recular 
ni  las  fantasmas  lo  espantan— 
y  dende  que  todos  cantan 
yo    también    quiero    cantar. 

Cantando  me  he  de  morir, 
cantando  me  han  de  enterrar, 
y  cantando  he   de  llegar 
al  pié  del  Eterno  Padre— 
dende  el  viento  de  mi  madre 
vine  a  este  mundo  a  cantar./ 

Que  no  se  trabe  mi  lengua 
ni  me  falte  la  palabra— 
el  cantar  mi  gloria  labra, 
y  poniéndome  a  cantar, 
cantando  me  han  de  encontrar 
aunque  la  tierra  se  abra. 


Me  siento  en  el  plan  de  un  bajo 
a   cantar  un  argumento- 
como  si  soplara  un  viento 
hago  tiritar  los  pastos— 
con  oros,  copas  y  bastos 
juega  allí  mi  pensamiento. 

Yo  no  soy  cantor  letrao, 
mas  si  me  pongo  a  cantar 
no  tengo  cuando  acabar 
y  me  envejezco  cantándo- 
las coplas  me  van  brotando 
como  agua  de  manantial. 

Con  la  guitarra,  en  la  mano 
ni  las  moscas  se  me  arriman— 
naides  me  pone  el  pié  encima, 
y  cuando  el  pecho  se  entona, 
hago    gemir    a   la   prima 
y  llorar  a  la  bordona. 

Yo  soy  toro  en  mi  rodeo 
y  toraso  en  rodeo  ageno, 
siempre  me  tuve  por  güeno, 
y  si  me  quieren  probar 
salgan  otros  a  cantar 
y  veremos  quien  es  menos. 

No  me  hago  al  lao  de  la  güeya 
aunque  vengan  degollando, 
con  los  blandos  yo  soy  blanda 
y  soy  duro  con  los  duras, 
y  ninguno  en  un  apuro 
me  ha  visto  andar  tutubiando. 

En  el  peligro  jQué  Cristo! 
el  corazón  se  me  enancha 
pues  toda  la  tierra  es  cancha, 
y  de  esto  naides  se  asombre— 
el  que  se  tiene  por  hombre 
donde  quiera  hace  pata  ancha. 

Soy  gaucho,  y  entiéndanlo 
como  mi  lengua  lo  esplica— 
para  mí  la  tierra  es  chica 
y  pudiera  ser  mayor— 
ni  la  víbora  me  pica 
ni  quema  mi  frente  el  Sol. 


Nací  como  nace  el  peje 
en  el  fondo  de  la  mar— 
naides   me   puede   quitar 
aquello  que  Dios  me  dio— 
lo  que  al  mundo  truje  yo 
del  mundo  lo  he  de  llevar. 

Mi  gloria  es  vivir  tan  libre 
como  el  pájaro  del  Cielo, 
no  hago  nido  en  ese  suelo 
ande  hay  tanto  que  sufrir; 
y  naides  me  ha  de  seguir 
cuando  ya  remonto  el  vuelo. 

Yo  no  tengo  en  el  amor 
quien  me  venga  con  querellas, 
como  esas  aves  tan  bellas 
que  saltan  de  rama  en  rama— 
yo  hago  en  el  trébol  mi  cama 
y  me  cubren  las  estrellas. 

Y  sepan  cuantos  escuchan 
de  mis  penas  el  relato, 
que  nunca  peleo  ni  mato 
sino  por  necesidá; 

y  que  a  tanta  alversidá 
sólo  me  arrojó  el  mal  trato. 

Y  atiendan  la  relación 

que  hace  un  gaucho  perseguido, 
que  padre  y  marido  ha  sido 
empeñoso  y  diligente, 
y  sin  embargo  la  gente 
lo  tiene  por  un  bandido. 


Ninguno  me  hable  de  penas 
porque  yo  pensando  vivo— 
y  naide   se  muestre   altivo 
aunque  en  el  estribo  esta- 
que suele  quedarse  a  pié 
el   gaucho  más   alvertido. 

Junta  esperencia  en  la  vida 
hasta  pa  dar  y  prestar, 
quien  la  tiene  que  pasar 
entre  sufrimiento  y  llanto- 
porqué  nada  enseña  tanto 
como  el  sufrir  y  llorar. 


Viene  el  hombre  ciego  al  mundo 
cuartiándoló  la  esperanza, 
y  a  poco  andar  ya  lo  alcanzan 
las  desgracias  a  empujones- 
la  pucha  que  trae  liciones 
el  tiempo  con  sus  mudanzas! 

Yo  he  conocido  esta  tierra 
en  que  el  paisano  vivía 
y  su  ranchito  tenía 
y  sus  hijos  y  mujer- 
era una  delicia  ver 
cómo  pasaba  sus  días. 

Entonces  —  cuando  el  lucero 

brillaba  en  el  Cielo  Santo, 

y  los  gallos  con  su  canto 

nos  decían  que  el  día  llegaba, 

a  la  cocina  rumbiaba 

el  gaucho—  que  era  un  encanto. 

Y  sentao  junto  al  jogón 

a  esperar  que  venga  el  día, 
al  cimarrón   le  prendía 
hasta  ponerse  rechoncho— 
mientras  su  china  dormía 
tapadita  con  su  poncho. 

Y  apenas  la  madrugada 
empezaba   a  coloriar, 
los  pájaros  a   cantar, 

y  las  gallinas  a  apiarse, 
era  cosa  de  largarse 
cada  cual  a  trabajar. 

Este  se  ata  las  espuelas, 
se  sale  el  otro  cantando, 
uno  busca  un  pellón  blando, 
este  un  lazo,  otro  un  rebenque, 
y   los   pingos  relinchando 
los  llaman  desde  el  palenque. 

El  que  era  pión  domador 
enderezaba  al  corral, 
ande  estaba  el  animal 
bufidos  que  se  las  pela— 
y  más  malo  que  su  agüela 
se  hacía  astillas  el  bagual. 


Y  allí  el  gaucho  inteligente, 
en  cuanto  el  potro  enriendó, 
los  cueros  le  acomodó 

y  se  le  sentó  en  seguida— 

que  el  hombre  muestre  en  la  vida 

la  astucia  que  Dios  le  dio. 

Y  en  las  playas  corcobiando 
pedazos  se  hacía  el  sorreta, 
mientras  él  por  las  paletas 
le  jugaba  las  lloronas— 

y  al  ruido  de  las  caronas 
salía  haciéndose   gambetas. 

Ah  tiempos!  —  Si  era  un  orgullo 
ver  ginetiar  un  paisano— 
cuando  era  gaucho  vaquiano, 
aunque  el  potro  se  boliase 
no  había  uno  que  no  parase 
con  el  cabresto  en  la  mano. 

Y  mientras  domaban  unos, 
otros  al  campo  salían 

y  la  hacienda  recogían, 
las   manadas  repuntaban, 
y  ansí  sin  sentir  pasaban 
entretenidos  el  día. 

Y  verlos  al  cair  la  noche 
en  la  cocina  reunidos, 

con  el  juego  bien  prendido 
y  mil  cosas  que  contar, 
platicar  muy  divertidos 
hasta  después  de  cenar. 

Y  con  el  buche  bien  lleno 
era  cosa  superior 

irse  en  brazos  del  amor 
a  dormir  como  la  gente 
pa  empezar  al  día  siguiente 
la  fainas  del  día  anterior. 

Ricuerdo!    ¡Qué  maravilla! 
cómo  andaba  la  gauchada— 
siempre  alegre  y  bien  montada 
y  dispuesta  pa  el  trabajo— 
¡pero  hoy  en  el  día.  .  .  barajo! 
no  se  le  vé  de  aporriada. 


El  gaucho  más  infeliz 
tenía  tropilla  de  un  pelo- 
no  le  faltaba  un  consuelo 
y  andaba  la  gente  lista- 
teniendo  el  campo  la  vista, 
sólo  vía  hacienda  y  cielo. 

Cuando  llegaban  las  yerras, 
¡cosa  que  daba  calor! 
tanto  gaucho  pialador 
y  tironiador  sin  vel- 
an tiempo!  —pero  si  en  él 
se  ha  visto  tanto  primor. 

Aquello  no  era  trabajo, 
más  bien   era   una  junción— 
y  después  de  un  güen  tirón 
en   que  uno  se  daba  maña, 
pa  darle  un  trago  de  caña 
solía  llamarlo  el  patrón. 

Pues  siempre  la  mamajuana 
vivía  bajo  la  carreta— 
y  aquel  que  no  era  chancleta, 
en  cuanto  el  goyete  veía 
sin  miedo  se  le  prendía 
como  güérfano  a  la  teta. 

Y  qué  jugadas  se  armaban 
cuando  estábamos  riunidos! 
Siempre  íbamos  prevenidos, 
pues  en  tales  ocasiones, 
a  ayudarles   a  los  piones 
caiban   muchos   comedidos. 

Eran  los  días  del  apuro 

y  alboroto  para  el  hembraje, 

pa  preparar  los  potajes, 

y  osequiar  bien  a  la  gente— 

y  ansí  pues,  muy  grandemente 

pasaba  siempre  el  gauchaje. 

Venía  la  carne  con  cuero, 
la  sabrosa  carbonada, 
mazamorra  bien  pisada, 
los  pasteles  y  el  güen  vino- 
pero  ha  querido  el  destino 
que  todo   aquello  acabara. 


Estaba  el  gaucho  en  su  pago 
con  toda  segunda— 
pero  aura.  .  .  barbaridá! 
la  cosa  anda  tan  fruncida, 
que  gasta  el  pobre  la  vida 
en  juir  de  la   autoridá. 

Pues  si  usté  pisa  en  su  rancho 
y  si  el  Alcalde  lo  sabe, 
lo  caza  lo  mesmo  que  ave 
aunque  su  mujer  aborte- 
no  hay  tiempo  que  no  se  acabe 
ni  tiento  que  no  se  corte. 

Y  al  punto  dése  por  muerto 
si  el  Alcalde  lo  bolea, 
pues  ay  no  más  se  le  apea 
con   una  felpa  de  palos— 

y  después  dicen  que  es  malo 
el  gaucho  si  los  pelea. 

Y  el  lomo  le  hinchan  a  golpes, 
y  le  rompen  la  cabeza, 

y  luego  con  ligereza, 
ansí  lastimao  y  todo, 
lo  amarran  codo  con  codo 
y  pa  el  cepo  lo  enderiesan. 

Ay  comienzan  sus  desgracias, 
a.y  principia   el   pericón- 
porqué  ya  no  hay  salvación, 
y  que  usté  quiera  o  no  quiera, 
lo  mandan   a  la  frontera 
o  lo  echan  a  un  batallón. 

Ansí  empezaron  mis  males 
lo  mesmo  que  los  de  tantos- 
si  gustan—  en  otros  cantos 
les  diré  lo  que  he  sufrido— 
Después   que   uno  está   perdido 
no  lo  salvan  ni  los  santos. 


Tuve  en  mi  pago  en  un  tiempo 
hijos,    hacienda  y   mujer- 
pero  empecé  a  padecer, 
me  echaron  a  la  frontera— 
¡y  qué  iba  hallar  al  volver! 
tan  sólo  hallé  la  tapera. 


Sosegao  vivía  en  mi  rancho 
como  el  pájaro  en  su  nido^- 
allí  mis  hijos  queridos 
iban  creciendo  a  mi  lao— 
sólo  queda  al  desgraciao 
lamentar  el  bien  perdido. 

Mi  gala  en  las  pulperías 

era,  cuando   había  más  gente, 

ponerme  medio  caliente, 

pues  cuando  puntiao  me  encuentro, 

me  salen  coplas  de  adentro 

como  agua  de  la  vertiente. 

Cantando  estaba  una.  vez 
en   una   gran  diversión, 
y  aprovechó  la  ocasión 
como  quiso  el  Juez  de  Paz— 
se  presentó,  y  ay  no  más 
hizo  una  arriada  en  montón. 

Juyeron  los  más  matreros 

y  lograron  escapar— 

yo  no  quise  disparar— 

soy  manso—  y  no  había  porqué— 

muy  tranquilo  me  quedé 

y   ansí  me  dejé   agarrar. 

Allí  un  gringo  con  un  órgano 
y  una  mona  que  bailaba, 
haciéndonos  rair  estaba 
cuando  le  tocó  el  arreo— 
¡tan  grande  el  gringo  y  tan  feo! 
lo  viera  cómo  lloraba! 

Hasta  un  Inglés  sanjiador 
que  decía  en  la  última  guerra, 
que  él  era  de  Inca  la  perra 
y  que  no  quería  servir, 
tuvo  también  que  juir 
a  guarecerse  en  la  Sierra. 

Ni  los  mirones  salvaron 
de  esa  arriada  de  mi  flor- 
fue  acollarao  el  cantor 
con  el  gringo  de  la  mona— 
a  uno  solo,  por  favor 
logró  salvar  la  patrona. 


Formaron  un  contingente 

con  los  que  del  baile  arriaron— 

con  otros  nos  mesturaron 

que  habían  agarrado  también— 

las  cosas  que  aquí  se  ven 

ni  los  diablos  las  pensaron. 

A  mí  el  Juez  me  tomó  entre  ojos 

en  la  última  votación— 

me  le  había  hecho  el  remolón 

y  no  me  arrimé  ese  día— 

y  él  dijo  que  yo  servía 

a  los  de  la  esposición. 

Y  ansí  sufrí  ese  castigo 

tal  vez  por  culpas  agen  as— 
que  sean  malas  o  sean  güeñas 
las  listas,  siempre  me  escondo— 
yo  soy  un  gaucho  redondo 
y  esas  cosas  no  me  enllenan. 

Al  mandarnos  nos  hicieron 
más  promesas  que  a  un  altar— 
el  Juez  nos  jué  a  proclamar 
y  nos  dijo  muchas  veces: 
"Muchachos,   a  los  seis  meses 
los  van    a   ir   a   revelar". 

Yo  llevé  un  moro  de  número, 
sobresaliente  el   matucho! 
con  él  gané  en  Ayacucho 
más  plata  que  agua  bendita— 
Siempre  el  gaucho  necesita 
un  pingo  pa  fiarle  un  pucho. 

Y  cargué  sin  dar  más  güeltas 
con  las  prendas  que  tenía, 
gergas,  poncho,  cuanto  había 
en  casa,  tuito  lo  alcé— 

a  mi  china  la  dejé 
media  desnuda  ese  día. 

No  me  faltaba  una  guasca, 
esa  ocasión  eché  el  resto: 
bozal,   maniador,    cabresto, 
lazo,  bolas  y  manea— 
¡el  que  hoy  tan  pobre  me  vea 
tal   vez   no   creerá  todo  estol! 


Ansí  en  mi  moro  escardando 
enderesé  a  la  frontera- 
aparcero!  si  usté  viera 
lo  que  se  llama  Cantón— 
ni  envidia  tengo  al  ratón 
en   aquella   ratonera. 

De  los  pobres  que  allí  había 
a  ninguno  lo  largáron- 
los más  viejos  rezongaron, 
pero  a  uno  que  se  quejó 
en  seguida  lo  estaquiaron 
y  la  cosa  se  acabó. 

En  la  lista  de  la  tarde 
el  Gefe  nos  cantó  el  punto, 
diciendo  "quinientos  puntos 
llevará  el  que  se  resierte, 
lo  haremos  pitar   del   juerte, 
más  bien  dése  por  dijunto". 

A  naides  le  dieron  armas, 
pues  toditas  las  que  había 
el  Coronel  las  tenía, 
según  dijo  esa  ocasión, 
pa   repartirlas  el   día 
en  que  hubiera  una  invasión. 

Al  principio  nos  dejaron 
de  haraganes  criando  sebo- 
Pero  después. .  .  no  me  atrevo, 
a  decir  lo  que  pasaba- 
barajo!    si   nos   trataban 
como  se  trata  a  malevos. 

Porque  todo  era  jugarle 

por  los  lomos  con  la  espada, 

y  aunque  usté  no  hiciera  nada, 

lo  mesmito  que  en  Palermo 

le  daban  cepiada 

que  lo  dejaban  enfermo. 

Y  qué  Indios  ni   qué  servicio, 
si  allí  no  había  ni  Cuartel- 
nos  mandaba  el  Coronel 
a   trabajar  en  sus  caerás 
y  deiábamos  las  vacas 
que  las  llevara  el  Infiel. 


Yo  primero  sembré  trigo 
y  después  hice  un  corral, 
corté   adobe  pa   un   tapial, 
hice  un  quincho,  corté  paja- 
la  pucha  que  se  trabaja 
sin  que  le  larguen  ni  un  rial. 

Y  es  lo  pior  de  aquel  enriedo 

que  si  uno  anda  hinchando  el  lomo 
ya  se  le  apean  como  plomo— 
¡quien  aguanta  aquel  infierno! 
Si  eso  es  servir  al  Gobierno, 
a  mí  no  me  gusta  el  cómo. 

Más  de  un  año  nos  tuvieron 
en  esos  trabajos  duros— 

Y  los  indios,  le  asiguro, 
dentraban  cuando  querían- 
corno  no  los  perseguían 
siempre  andaban  sin  apuro. 

A  veces  decía  al  volver 
del  campo  la  descubierta, 
que  estuviéramos  alerta, 
que  andaba  adentro  la  indiada; 
porque  había  una  rastrillada 
o  estaba  una  yegua  muerta. 

Recién  entonces  salía 

la  orden  de  hacer  la  riunión— 

y  caíbamos  al  cantón 

en   pelos  y  hasta   enancaos, 

sin  armas,  cuatro  pelaos 

que  íbamos  a  hacer  jabón. 

Ay  empezaba  en  afán, 
se  entiende  de  puro  vicio, 
de  enseñarle  el  ejercicio 
a  tanto  gaucho  recluta, 
con  un  estrutor  que. .  .   bruta! 
que  nunca  sabía  su  oficio. 

Daban  entonces  las  armas 

pa  defender  los  cantones, 

que   eran  lanzas   y   latones 

con  ataduras  de  dentó- 
las de  juego  no  las  cuento 
porque  no  había  municiones. 


Y  chamuscao  un  sargento 
me  contó  que  las  tenían, 
pero  que  ellos  las  vendían 
para  cazar  avestruces— 

y  ansí  andaban  noche  y  día 
déle  bala  a  los  ñanduces. 

Y  cuando   se  iban   los   Indios 
con  lo  que  habían  manotiao, 
salíamos  muy    apuraos 

a  perseguirlos  de  atrás- 

si  no  se  llevaban  más 

es  porque  no  habían  hallao. 

Allí  sí  se  ven  desgracias 
y  lágrimas,   y  afliciones— 
naides  le  pida  perdones 
al  Indio  —  pues  donde  dentra 
roba  y  mata  cuanto  encuentra 
y  quema  las  poblaciones. 

No  salvan  de  su  juror 
ni  los  pobres  angelitos- 
viejos,   mozos  y  chiquitos 
los  mata  del  mesmo  modo— 
que  el  Indio  lo  arregla  todo 
con  la  lanza  y  con  los  gritos. 

Tiemblan  la,s  carnes  al  verlo 
volando  al  viento  la  cerda- 
la  rienda  en  la  mano  izquierda 
y  la  lanza  en  la  derecha- 
ande  enderiesa  abre  brecha, 
pues  no  hay  lanzaso  que  pierda. 

Hace  trotiadas  tremendas 
dende  el   fondo  del   desierto— 
ansí   llega   medio  muerto 
de  hambre,  de  sé  y  de  fatiga — 
pero  el  Indio  es  una  hormiga 
que  día  y  noche  está  dispierto. 

Sabe  manejar  las  bolas 
como  naides  las  maneja- 
cuanto  el  contrario  se  aleja 
manda  una  bola  perdida, 
y  si  lo  alcanza,  sin  vida 
es  siguro  que  lo  deja. 


Y  el  Indio  es  como  tortuga 
de  duro  para  espichar- 
si  lo  llega  a  destripar 
ni  siquiera  se  le  encoge, 
luego  sus  tripas  recoge, 
y  se  agacha  a  disparar. 

Hacían  el  robo  a  su  gusto 
y  después  se  iban  de  arriba- 
se llevaban  las  cautivan, 
y  nos  contaban  que  a  veces 
les  descarnaban  los  pieses, 
a  las  pobrecitas,  vivas. 

Ah!  si  partía  el  corazón 
ver  tantos  males,  cañe  jo! 
los  perseguíamos  de  lejos 
sin  poder  ni  galopiar; 
y  qué  habíamos  de  alcanzar 
en  unos  bichocos  viejos! 

Nos  volvíamos  al  cantón 
a  las  dos  o  tres  jornadas 
sembrando  las  caballadas; 
y  pa  que  alguno  la  venda, 
rejuntábamos   la   hacienda 
que  habían  dejado  resagada. 

Una  vez  entre  otras  muchas, 
tanto  salir  al  botón 
nos  pegaron  un  malón 
los  Indios,   y  una   lanciada, 
que  la  gente  acobardada 
quedó  dende  esa  ocasión. 

Habían  estao  escondidos 
aguaitando  atrá;s  de  un  cerro— 
¡lo  viera  a  su  amigo  Fierro 
aflojar  como  un  blandí to! 
salieron  como  maiz  frito 
en  cuanto  sonó  un  cencerro. 

Al    punto   nos   dispusimos 
aunque  ellos  eran  bastantes- 
la  formamos  al  ista,nte 
nuestra  gente  era  poca, 
y  golpiándose  en  la  boca 
hicieron  fila  adelante. 


Se  vinieron  en  tropel 
haciendo  temblar  la  tierra- 
no  soy  manco  pa  la  guerra, 
pero  tuve  mi  jabón, 
pues  iba  en  un  redomón 
que  había  boliao  en  la  sierra. 

Qué   vocerío!    qué   barullo! 
qué  apurar  esa  carrera! 
La  Indiada  todita  entera 
dando  alaridos  cargó— 
jué  pucha!  y  ya  nos  sacó 
como  yeguada  matrera. 

Qué  fletes  traiban  los  bárbaros 
como  una  luz  de  ligeros- 
hicieron  el  entrevero, 
y  en  aquella  mezcolanza, 
este  quiero,  este  no  quiero, 
nos  escogían  con  la  lanza. 

Al  que  le  dan  un  chuzaso 
dificultoso  es  que  sane- 
en fin,  para  no  echar  panes 
salimos  por  esas  lomas 
lo  mesmo  que  las  palomas 
al  juir  de  los  gavilanes. 

Es  de  almirax  la  destreza 
con  que  la   lanzan   manejan! 
de  perseguir  nunca  dejan— 
y  nos  traiban  apretados, 
en   esa  aflición   tan  suma, 
si  queríamos  de  apuraos 
salimos  por  las  orejas. 

Y  pa  mejor  de  la  fiesta 
vino  un  Indio  echando  espuma 
y  con  la  lanza  en  la  mano, 
gritando  "Acabau  cristiano, 
metau  el  lanza  hasta  el  pluma". 

Tendido  en   el  costillar, 
cimbrando  por  sobre  el  brazo 
una  lanza  como  un  lazo, 
me  atropello   dando  gritos- 
si  me  descuido,  el  maldito 
me  levanta  de  un   Ianzaso. 


Si  me  atribulo  o  me  encojo, 
siguro  que  no  me  escapo— 
Siempre  he  sido  medio  guapo, 
pero  en  aquella  ocasión 
me  hacía  buya  el  corazón 
como  la  garganta  al  sapo. 

Dios  le  perdone  al  salvaje 
las  ganas  que  me  tenias- 
desaté    las  tres   marías 
y  lo  engatusé  a  cabriolas- 
pucha!  si  no  traigo  bolas 
me  echura  el  Indio  ese  día. 


Era  el  hijo  de  un  cacique 
sigún   yo  lo  averigüe- 
la verdá  del  caso  jué 
que  me  tuvo  apuradazo, 
hasta  que  al  fin  de  un  balazo 
del  caballo  lo  bajé. 

Ay  no  más  me  tiré  al  suelo 
y  lo  pisé  en  las  paletas- 
empezó  a  hacer  morisquetas 
y  a  mezquinar  la  garganta- 
pero  yo  hice  la  obra  santa 
de  hacerlo  estirar  la  geta. 


Allí  quedó  de  mojón 

y  en  su  caballo  salté, 

de  la  Indiada  disparé, 

pues  si  me  alcanza  me  mata— 

y  al  fin  me  les  escapé 

con  el  hilo  en  una  pata. 


Seguiré  esta  relación 
Aunque  pa  chorizo  es  largo— 
el  que  pueda  hágase  cargo 
cómo  andaría  de  matrero, 
después  de  salvar  el  cuero 
de  aquel  trance  tan  amargo. 

Del   suelo   nada   les  cuento, 
porque  andaba  disparando, 
nosotros  de  cuando  en  cuando 
solíamos  ladrar  de  pobres— 
nunca  llegaban  los  cobres 
que  se  estaban  aguardando 

Y  andábamos  de  mugrientos 
que  el  mirarnos  daba  horror— 
les  juro  que  era   un  dolor 
ver  esos  hombres,  por  Cristo! 
en  mi  perra  vida  he  visto 
una  miseria  mayor. 

Yo  no  tenía  ni  camisa 
ni  cosa  que  que  se  parezca- 
mis  trapos  solo  pa  yesca 
me  podían   servir  al   fin- 
No  hay  plaga  como  un  fortín 
para  que  el  hombre  padezca.. 

Poncho,  gergas,  el  apero, 
las   prenditas,  los  botones, 
todo,  amigo,  en  los  cantones 
jué  quedando   poco  a  poco- 
va  me  tenían  medio  loco 
la  pobreza  y  los  ratones. 

Sólo  una  manta  peluda 
era  cuanto  me  quedába- 
la había  agenciao  a  la  taba 
y  ella  me  tapaba,  el  bulto- 
Yaguané  que  allí  ganaba 
no  salía  ni  con  indulto. 

Y  pa  mejor  hasta  el  moro 

se  me  jué  de  entre  las  manos- 
no  soy  lerdo. .  .   pero  hermano! 
vino  el  Comandante  un  día 
diciendo   que    lo   quería 
"pa  enseñarle  a  comer  grano". 


Afigúrese  cualquiera 
la  suerte  de  este  su  amigo, 
a  pié  y  mostrando  el  umbligo, 
estropiado,  pobre  y  desnudo— 
ni   por   castigo   se   pudo 
hacerse  más  mal  conmigo. 

Ansí  pasaron  los  meses, 
y  vino  el  año  siguiente, 
y    las    cosas    igualmente 
siguieron  del  mesmo  modo— 
adrede  parece  todo 
para  aburrir  a  la  gente. 

No  teníamos  más  permiso, 
ni  otro  alivio  la  gauchada, 
que   salir  de   madrugada, 
cuando  no  había  Indio  ninguno, 
campo   ajuera  a  hacer   boliadas 
desocando  los  reyunos. 

Y   cáibamos   al  cantón 
con  los  fletes  aplastaos- 
pero   a  veces  medio  aviaos 
con  plumas  y  algunos  cueros— 
que  ay  no  más  con  el  pulpero 
los    teníamos    negociaos. 

Era  un  amigo  del  Gefe 
que   con   un  boliche   estaba, 
yerba  y  tabaco  nos  daba 
por  la,  pluma  de  avestruz, 
y  hasta  le  hacía  ver  la  luz 
al  que  un  cuero  le  llevaba. 

Sólo    tenía    cuatro    frascos 
y  unas  barricas  vacías, 
y  a    la  gente   le   vendía 
todo  cuanto  precisaba— 
a    veces   creiba  que   estaba 
allí  la  proveduría. 

Ah!    pulpero    habilidoso, 
nada  le  solía  faltar— 
ay  juna  —  y  para  tragar 
tenía,  un  buche  de  ñandú- 
la  gente  le  dio  en   llamar 
,€E\  boliche   de  virtú". 


Aunque  es  justo  que  quien  vende 

algún  poquitito  muerda, 

tiraba  tanto  la  cuerda 

que  con  sus  cuatro  limetas 

él  cargaba  las  carretas 

de  plumas,  cueros  y  cerda. 

Nos  tenía  apuntaos  a  todos 
con  más  cuentas  que  un  rosario, 
cuando  se  anunció  un  salario 
que  iban  a  dar,  o  un  socorro- 
pero  sabe  Dios  qué  zorro 
se  lo  comió  al  Comisario. 

Pues  nunca  lo  vi  llegar— 
y  al  cabo  de  muchos  días 
en  la  mesma  pulpería 
dieron  una  buena  cuenta— 
que  la  gente  muy  contenta 
de  tan  pobre  recebía. 

Sacaron  unos  sus  prendas 
que  las   tenían   empeñadas, 
por  sus  deudas  atrasadas 
dieron  otros  el  dinero- 
ai  fin  de  fiesta  el  pulpero 
se  quedó  con  la  mascada. 

Yo  me  arrecosté  a  un  horcón 
dando  tiempo  a  que  pagaran, 
y   poniendo  güeña,  cara 
estuve  haciéndome  el  poyo, 
a  esperar  que  me  llamaran 
para  recibir    mi    bollo. 

Pero  ay  me  pude  quedar 
pegao  siecmpre  al   horcón— 
Ya  era   casi   la  oración 
y  ninguno  me  llamába- 
la cosa  se  me  nublaba 
y  me  dentro  comezón. 

Pa  sacarme  el  entripao 
vi  al  Mayor  y  lo  fí  a  hablar— 
yo  me  le  empecé  a  atracar, 
V   como  con  poca   gana 
le  dije:  /Tal  vez  mañana 
acabarán  de  pagar". 


"Qué  mañana  ni  otro  día 
al  punto  me  contestó, 
"La  paga  ya  se  acabó, 
siempre  has  de  ser  animal"— 
me  rai  y  le  dije:  "Yo.  .  . 
no  he  recebido  ni  un  rial". 

Se  le  pusieron  los  ojos 
que  se  le  querían  salir, 
y  ay  no  más  volvió  a  decir 
comiéndome  con  la  vista: 
'T  qué  querés  recebir 
si  no  has  dentrao  en  la  lista". 

"Esto  sí  que  es  amolar" 

dije  yo  pa  mis  adentros— 

'Van  dos  años  que  me  encuentro 

y  hasta  aura  he  visto  ni  un  grullo, 

dentro  en  todos  los  barullos 

pero  en  las  listas  no  dentro'. 

Vide  el  pleito  mal  parao 

y  no  quise  aguardar  más— 

Es  güeno  vivir  en  paz 

con  quien  nos  ha  de  mandar— 

Y  reculando  pa  tras 

me  le  empecé  a  retirar. 

Supo  todo  el  Comendante 
y  me  llamó  al  otro  día, 
diciéndomé  que  quería 
aviriguar  bien  las  cosas— 
Que  no  era  el  tiempo  de  Rosas, 
que  aura  a  naides  se  debía. 

Llamó  al  cabo  y  al  sargento 
y  empezó  la  indagación- 
Si  había  venido  al  cantón 
en  tal  tiempo  o  en  tal  otro— 
y  si  había  venido  en  potro, 
en  reyuno  o  redomón. 

Y  todo  era  alborotar 

al  ñudo,  y  hacer  papel, 

conocí  que  era  pastel 

pa  engordar  con  mi  guayaca, 

mas  si  voy  al  Coronel 

me  hacen  bramar  en  la  estaca. 


Ah!  hijos  de  una ...   la  codicia 

ojalá  les  ruempa  el  saco— 

ni  un  pedazo  de  tabaco 

le  dan  al  pobre  soldao, 

y  lo  tienen  de  delgao 

más  ligero  que  un  guanaco. 

Pero  qué  iba  a  hacerles  yo, 
charavón  en  el  desierto; 
más  bien  me  daba  por  muerto 
pa  no  verme  más  fundido— 
y  me  les  hacía  el  dormido 
aunque  soy  medio  dispierto. 

5 
Ya  andaba  desesperao, 
aguardando  una  ocasión 
que  los  Indios  un  malón 
nos  dieran  y  entre  el  estrago 
hacérmeles  cimarrón 
y  volverme  pa  mi  pago. 

Aquello  no  era  servicio 

ni  defender  la  frontera— 

aquello  era  ratonera 

en  que  sólo  gana  el  juerte— 

era  jugar  a  la  suerte 

con  una  taba  culera. 

Allí  tuito  va  al  revés: 
los  milicos  se  hacen  piones, 
y  andan  en  las  poblaciones 
emprestaos  pa  trabajar- 
los rejuntan  pa  peliar 
cuando  entran  Indios  ladrones. 

Yo  he  visto  en  esa.  milonga 
muchos  Gefes  con  estancia, 
y  piones  en  abundancia, 
y  majadas  y  rodeos- 
he  visto  negocios  feos 
a  pesar  de  mi  inorancia. 

Y  colijo  que  no  quieren 
la  barunda  componer— 
para  eso  no  ha  de  tener 
el  Gefe  que  esté  de  estable, 
más  que  su  poncho  y  su  sable, 
su  caballo  y  su  deber. 


Ansina,  pues,  conociendo 
que  aquel  mal  no  tiene  cura, 
que  tal  vez  mi  sepultura 
si  me  quedo  iba  a  encontrar, 
pensé  en  mandarme  mudar 
como  cosa  más  sigura. 

Y  pa  mejor,  una  noche 
qué  estaquuda  me  pegaron! 
casi  me  descovuntaron 

por  motivo  de  una  gresca— 

ay  juna,  si  me  estiraron 

lo  mesmo  que  guasca  fresca. 

Jamás  me  puedo  olvidar 
lo  que  esa  vez  me  pasó— 
dentrando  una  noche  yo 
al  fortín,  un  enganchao, 
que  estaba  medio  mamao, 
allí  me  desconoció. 

Era  un  gringo  tan  bozal 
que  nada  se  le  entendía— 
¡quién  sabe  de  ande  sería! 
tal  vez  no  juera  cristiano; 
pues  lo  único  que  decía 
es  que  era  fa  fo-liiano. 

Estaba  de  centinela 
y  por  cau.sa  del  peludo 
verme  más  claro  no  pudo 
y  esa  fué  la  culpa  toda 
el  bruto  se  asustó  al  ñudo 
y  fí  el  pavo  de  la  boda. 

Cuando  me  vido  acercar 
"Quen  vívore"  —preguntó, 
"Qué  vivoros"  —dije  yo— 
"Ha  garlo"  —me  pegó  el  grito— 
y  yo  dije  despacito 
"Más  lagarta  será  vos". 

Y  no  más—  Cristo  me  valga! 
rastrillar  el  jusil  siento— 

me  agaché,  y  en  el  momento 
el  bruto  me  largó  un  chumbo— 
mamao,  me  tiró  sin  rumbo, 
que  si  no,  no  cuento  el  cuento. 


Por  de  contao,  con  el  tiro 
se  alborotó  el  avispero- 
Ios  Oficiales  salieron 
y  se  empezó  la  junción- 
quedó  en  su  puesto  el  nación 
y  yo  fí  al  estaquiadero. 

Entre  cuatro  bayonetas 
me  tendieron  en  el  suelo- 
vino  el  Mayor  medio  en  pedo, 
y  allí  se  puso  a  gritar 
"Picaro,  te  he  de  enseñar 
a  andar  reclamando  sueldos". 


De  las  manos  y  las  patas 
me  ataron  cuatro  cinchones- 
Íes  aguanté  los  tirones 
sin  que  ni  un  ay!  se  me  oyera, 
y  al  gringo  la  noche  entera 
lo  harté  con  mis  maldiciones. 

Yo  no  sé  por  qué  el  Gobierno 
nos  manda  aquí  a  la  frontera 
gringada  que  ni  siquiera 
se  sabe  atracar  a  un  pingo— 
j  si  crerá  al  mandar  un  gringo 
que  nos  manda  alguna  fiera! 


No  hacen  más  que  dar  trabajo, 
pues  no  saben  ni  ensillar- 
no  sirven  ni  pa  carniar, 
y  yo  he  visto  muchas  veces, 
que  ni  voltiadas  las  reses 
e  les  querían  arrimar. 


Y  lo  pasan  sus  mercedes 
lengüetiando  pico  a  pico— 
hasta  que  viene  un  milico 
a  servirles  el  asao— 
y  eso  sí,  en  los  delicaos 
parecen  hijos  de  rico. 

Si  hay  calor,  ya  no  son  gente, 
si  vela,  todos  tiritan- 
si  usté  no  le  da,  no  pitan 
por  no  gastar  en  tabaco— 
y  cuando  pescan  un  naco 
uno  al  otro  se  lo  quitan. 

Cuando  llueve  se  acoquinan 
como  perro  que  oye  truenos— 
qué  diablos—  sólo  son  güenos 
pa  vivir  entre  maricas— 
y  nunca  se  andan  con  chicas 
para  alzar  ponchos  ágenos. 

Pa  vichar  son  como  ciegos, 

no  hay  ejemplo  de  que  entiendan, 

ni  hay  uno  solo  que  aprienda, 

al  ver  un  bulto  que  cruza, 

a  saber  si  es  avestruza 

o  si  es  ginete,  o  hacienda. 

«.     Si  salen  a  perseguir, 

después  de  mucho  aparato 
tuitos  se  pelan  al  rato 
y  va  quedando  el  tendal— 
esto  es  como  en  un  nidal 
echarle  güebos  a  un  gato. 


Vamos  dentrando  recién 
a  la  parte  más  sentida, 
aunque  es  todita  mi  vida 
de  males  una  cadena— 
a  cada  alma  dolorida 
le  gusta  cantar  sus  penas. 

Se  empezó  en  aquel  entonces 
a.  rejuntar  caballada, 
y  riunir  la  milicada 
teniéndola  en  el  Cantón, 
para  una  despedición 
a  sorprender  a  la  Indiada. 


Nos  anunciaban  que  iríamos 
sin  carretas  ni  bagajes 
a  golpiar  a  los  salvajes 
en  sus  mesmas  tolderías— 
que  a  la  güelta  pagarían 
licenciándolo  al  gauchaje. 

Que  en  esta,  despedición 

tuviéramos  la  eperanza, 

que  iba  a  venir  sin  tardanza, 

sigún  el  Gefe  contó, 

un  Menistro  o  qué  sé  yo 

que  le  llamaban  Don  Ganza. 

Que  iba  a  riunir  el  Ejército 

Y  tuitos  los  batallones— 

Y  que  traiba  unos  cañones 
con  más  rayas  que  un  cotín— 
Pucha,  las  conversaciones 
por  allá  no  tenían  fin. 

Pero  esas  trampas  no  enriedan 
a  los  zorros  de  mi  laya— 
Que  el  Menistro  venga  o  vaya, 
poco  le  importa  a  un  matrero— 
Yo  también  dejé  la  rayas 
en  los  libros  del  pulpero. 

Nunca  juí  gaucho  dormido, 
siempre  pronto,  siempre  listo— 
Yo  soy  un  hombre,  qué  Cristo! 
que  nada  me  ha  acobardao, 
y  siempre  salí  parao 
en  los  trances  que  me  he  visto. 

Dende  chiquito  gané 

la.  vida  con  mi  trabajo, 

y  aunque  siempre  estuve  abajo 

y  no  sé  lo  que  es  subir— 

también  el  mucho  sufrir 

suele  cansarnos  —  barajo. 

En  medio  de  mi  inorancia 
conozco  que  nada  valgo— 
Soy  la  liebre  o  soy  el  galgo 
a  sigún  los  tiempos  andan- 
Pero  también  los  que  mandan 
debieran  cuidarnos  algo. 


Una  noche  que  riunidos 
estaban  en  la  carpeta 
empinando  una  limeta 
el  Gefe  y  el  Juez  dePaz— 
yo  no  quise  aguardar  más, 
y  me  hice  humo  en  un  sotreta. 

Para  mí  el  campo  son  flores 
dende  que  libre  me  veo— ■ 
Donde  me  lleva  el  deseo 
allí  mis  pasos  dirijo 

Y  hasta  en  las  sombras,  de  fijo 
que  adonde  quiera  rumbeo. 

Entro  y  salgo  del  peligro 
sin  que  me  espante  el  estrago, 
no  aflojo  a.l  primer  amago 
ni  jamás  fí  gaucho  lerdo— 
Soy  pa  rumbiar  como  el  cerdo 
y  pronto  caí  a  mi  pago. 

Volvía  al  cabo  de  tres  años 
de  tanto  sufrir  al  ñudo, 
resertor,  pobre  y  desnudo 
a  procurar  suerte  nueva— 

Y  lo  mesmo  que  el  peludo 
enderesé  pa  mi  cueva. 

No  hallé  ni  rastro  del  rancho 
sólo  estaba  la  tapera!— 
Por  Cristo,  si  aquello  era 
pa  enlutar  el  corazón— 
Yo  juré  en  esa  ocasión 
ser  más  malo  que  una  fiera! 

Quién  no  sentirá  lo  mesmo 
Cuando  ansí  padece  tanto!! 
Puedo  asigurar  que  el  llanto 
como  una  mujer  largué— 
Ay  mi  Dios  —  si  me  quedé 
más  triste  que  Jueves  Santo. 

Sólo  se  oiban  los  maullidos 
de  un  gato  que  se  salvó— 
El  pobre  se  guareció 
cerca,  en  una  viscachera- 
Venía  como  si  supiera 
que  estaba  de  güelta  yo. 


Al  dirme  dejé  la  hacienda 
que  era  todito  mi  haber- 
Pronto  debíamos  volver 
según   el   Juez   prometía, 
y  hasta  entonces  cuidaría 
de  los  bienes  la  mujer 

Después  me  contó  un  vecino 
que  el  campo  se  lo  perdieron— 
La  hacienda  se  la  vendieron 
pa  pagar  arrendamientos, 
y  qué  sé  yo  cuánutos  cuentos- 
Pero    todo    lo    fundieron. 

Los  pobrecitos  muchacos 
entre  tantas  afliciones 
se  conchavaron  de  piones- 
Mas  qué  iban  a  trabajar, 
si  eran  como  los  pichones 
sin  acabar  de  emplumar! 

Por  ay  andarán  sufriendo 
de  nuestra  suerte  el  rigor— 
Me  han  contado  que  el  mayor 
nunca  dejaba  a  su  hermano- 
Puede  ser  que  algún  cristiano 
los  recoja  por  favor. 

Y  la  pobre  mi  mujer, 
Dios   sabe   cuánto   sufrió!— 
Me  dicen  que  se  voló 

con  no  sé  qué  gavilán— 
Sin  duda,  a  buscar  el  pan 
que  no  podía  darle  yo. 

No  es  raro  que  a  uno  le  falte 
lo  que   algún   otro   le   sobre- 
Si  no  le  quedó  ni  un  cobre 
sino   de   hijos   un    enjambre, 
qué  más  iba  a  hacer  la  pobre 
para  no  morirse  de  hambre. 

¡Tal  vez  no  te  vuelva  a  ver, 
prenda  de  mi  corazón! 
Dios  te  dé  su  protección 
va  que  no  me  la  dio  a  mí— 

Y  a  mis  hijos  dende  aquí 
les  echo  mi  bendición 


Como  hijitos  de  la  cuna 
andarán  por  ay  sin  madre— 
Ya  se  quedaron  sin  padre 
y   ansí   la   suerte  Jos  deja, 
sin  naides  que  los  proteja 
y  sin  perro  que  los  ladre. 

Los  pobrecitos  tal  vez 
no  tengan  ande  abrigarse, 
ni  ramada  ande  ganarse, 
ni  un  rincón  ande  meterse, 
ni    camisa    que   ponerse 
ni  poncho  con  qué  taparse. 

Tal  vez  los  verán  sufrir 
sin  tenerles  compasión- 
puede    que    alguna    ocasión 
aunque   los  vean  tiritando, 
los  echen  de  algún  jogón 
pa   que   no  estén  estorbando. 

Y  al  verse  ansina  espantaos 
como  se  espanta  a  los  perros, 
irán  los  hijos  de  Fierro 

con  la  cola  entre  las  piernas, 
a  buscar  almas  más  tiernas 
o  esconderse  en  algún  cerro. 

Más  también  en  este  juego, 
voy  a  pedir  mi  bolada— 
A    nadies   le  debo   nada, 
ni  pido  cuartel  ni  doy— 

Y  ninguno  dende  hoy 

ha  de  llevarme  en  la  armada. 

Yo  he  sido  manso  primero, 
y  seré  gaucho  matrero— 
En  mi  triste  circunstancia 
aunque  es  mi  mal  tan  projundo, 
nací  y  me  he  criao  en  estancia, 
pero  ya  conozco  el  mundo. 

Ya  le  conozco  sus  mañas, 
le  conozco  sus  cucañas, 
sé  como  hacen  la  partida, 
la  enriedan  y  la  manejan— 
Deshaceré  la  madeja 
aunque  me  cueste  la  vida. 


Y  aguante  el  que  no  se  anime 
a  meterse  en    tanto  engorro, 
o  si  no  aprétese  el  gorro 

o  para  otra  tierra  emigre- 
Pero  yo  ando  como  el  tigre 
que  le  roban  los  cachorros. 

Aunque  muchos  creen  que  el  gaucho 
tiene  una  alma  de  reyuno— 
no  se  encontrará  ninguno 
que  no  lo  dueblen  las  penas- 
Mas  no  debe  aflojar  uno 
mientras  hay  sangre  en  las  venas. 

7 
De  carta  de  más  me  vía 
sin    saber   a  donde  dirme; 
mas  dijeron  que  era  vago 
y  entraron    a   perseguirme. 

Nunca  se  achican  los  males, 
van  poco  a  poco  creciendo, 
y  ansina  me  vide  pronto 
obligao  a  andar  juyendo. 

No  tenía  mujer,  ni  rancho, 
y  a  más  era  resertor, 
no  tenía  una  prenda  güeña 
ni  un  peso  en  el  tirador. 

A   mis   hijos  infelices 
pensé  volverlos  a  hallar 

Y  andaba  de  un  lao  al  otro 
sin   tener  ni  qué  pitar. 

Supe  una  vez  por  desgracia 
que  había  un  baile  por  allí— 

Y  medio  desesperao 
a  ver  la  milonga  fui. 

Riunidos  al  pericón 

tantos  amigos  hallé, 

que  alegre  de  verme  entre  ellos 

esa  noche  me   apedé. 

Como  nunca,  en  la  ocasión 
Por  peliar  me  dio  la   tranca, 
y  la  emprendí  con  un  negro 
que   trujo  una  negra  en  ancas. 


Al  ver  llegar  la  morena 

que  no  hacía  caso  de  naides, 

le   dije   con   la   mamúa 

'Va.  .  .  ca.  .  .  yendo  gente  al  baile". 

La  negra  entendió  la  cosa 
y  no   tardó  en  contestarme— 
Mirándome   como   a   perro— 
"Más  vaca  será  su  madre". 

Y  dentro  al  baile  muy  tiesa 
con  más  cola  que  una  zorra, 
haciendo  blanquiar  los  dientes 
lo  mesmo  que  mazamorra. 

"Negra  linda" .  .  .   dije  yo— 
"Me  gusta  para  la  carona"— 

Y  me  puse  a  taJariar 
esta  coplita  fregona: 

"A   los  blancos    hizo    Dios, 
a  los  mulatos  San  Pedro, 
a   los  negros  hizo   el  diablo 
para   tizón  del  infierno". 

Había  estado  juntando  rabia 

el  moreno  dende  ajuera— 

En  lo  escuro  le  brillaban 

los  ojos  como  linterna. 

Lo  conocí  retobao, 

Me    acerqué    y  le    dije    presto: 

"Por... r... rudo  que  un  hombre  sea 

nunca  se  enoja  por  esto". 

Corcobió  el  de  los  tamangos, 
y  creyéndose  muy  fijo— 
"Má  porrudo  serás  vos, 
Gaucho  rotoso"  me  dijo. 

Y  ya  se  me  vino  al  humo 
como  a  buscarme  la  hebra— 

Y  un  golpe  le  acomodé 
con  el  porrón  de  ginebra. 

Ay  no  más  pegó  el  de  ollín 
más  gruñidos  que  un  chanchito, 
y  pelando  el  envenao 
me  atropello  dando  gritos. 
Pegué  un  brinco  y  abrí  cancha 
diciéndoles  "Caballeros 
dejen  venir  ese  toro- 
Solo   nací . . .    solo   muero". 


El  negro  después  del  golpe 
se  había  el  poncho  refalao 
y  dijo  'Vas  a  saber 
si  es  solo  o  acompañao". 

Y  mientras  se  arremangó 

yo  me  saqué  las  espuelas, 

pues  malicié  que  aquel  tío 

no  era  de  arriar  con  las  riendas. 

No  hay  cosa  como  el  peligro 

pa  refrescar  un  mamao, 

hasta  la  vista  se  aclara 

por  mucho  que  haiga  chupao. 

El  negro  me  atropello 
como  a  quererme  comer— 
Me  hizo  dos  tiros  seguidos 
y  los  dos  le  abarajé. 
Yo  tenía  un  facón  co  S 
que  era  de  lima  de  acero, 
le  hice  un  tiro,  lo  quitó 
y  vino  ciego  el  moreno. 

Y  en  el  medio  de  las  aspas 
un  planazo  le  asenté 

que  lo  largué  culebriendo 
lo  mesmo  que  buscapié. 

Le  coloriaron  las  motas 
con  la  sangre  de  la  herida— 

Y  volvió  a  venir  furioso 
como  una  tigra  parida. 

Y  ya  me  hizo  relumbrar 
por  los  ojos  el  cuchillo- 
alcanzando  con  la  punta 

a  cortarme  en  un  carrillo. 

Me  hirvió  la  sangre  en  las  venas 
y  me  la  afirmé  al  moreno- 
dándole  de  punta  y  hacha 
pa  dejar  un  diablo  menos. 

Por  fin  en  una  topada 
en  el  cuchillo  lo  alcé— 
Y  como  un  saco  de  güesos 
contra    un    cerco   lo  largué. 

Tiró   unas   cuantas  patadas 
y  ya   cantó  pa   el  carnero— 
Nunca  me  puedo  olvidar 
de  la  agonía  de  aquel  negro. 


En  esto  lo  negra  vino, 
con  los  ojos  como  ají— 

Y  empezó  la  pobre  allí 

a   bramar  como  una  loba— 
Yo  quise  darle  una  soba 
a  ver  si  la  hacía  callar- 
Mas  pude   reflesionar 
que  era  malo  en  aquel  punto, 
y  por  respto  al  dijunto 
no  la  quise  castigar. 

Limpié  el  facón  en  los  pastos, 
desaté  mi  redomón— 
Monté  despacio,   y  salí 
al  tranco  pa  el  cañadón. 
Después  supe  que  al  finao 
ni  siquiera  lo  velaron— 

Y  retobao  en  un  cuero 
sin    resarle   lo   enterraron. 

Y  dicen  que  dende  entonces 
cuando  es  la  noche  serena 
suele  verse  una  luz  mala 
como  de  alma  que  anda  en  pena. 
Yo  tengo  intención  a  veces, 
para   que  no  pene  tanto, 

de  sacar  de  allí  los  güesos 
y  echarlos  al  campo  santo. 

8 

Otra  vez  que  en  un  boliche 

estaba  haciendo   la  tarde, 

cayó  un  gaucho  que  hacía  alarde 

de  guapo  y  peliador— 

A  ia  llegada  metió 

el  pingo  hasta  la  ramada— 

y  yo  sin  decirle  nada 

me  quedé  en  el  mostrador. 

Era  un  terne  de  aquel  pago 
que  naides  lo  reprendía, 
que  sus  enriedos  tenía 
con  el  señor  Comendante. 

Y  como  era  protegido, 
andaba  muy  entonao, 

y  a  cualquiera  desgraciao 
lo  llevaba  por  delante. 


Ah  pobre!  si  él  mismo  creiba 
que  la  vida  le  sobraba, 
ninguno  diría   que   andaba 
aguaitándolo  la  muerte- 
Pero  ansí  pasa  en  el  mundo, 
es  ansí  la  triste  vida— 
pa  todos  está  escondida, 
la  güeña  o  la  mala  suerte. 
Se  tiró  al  suelo  al  dentrar, 
le  dio  un  empellón  a  un  vasco— 

Y  me  alargó  un  medio  frasco 
diciendo  "Beba   cuñao"— 
"Por  su  hermana"  contesté, 
"que  por  la  mía  no  hay  cuidao", 
"Ah  gaucho"  me  respondió, 

"de  qué  pago  será  criollo— 
Lo  andará  buscando  el  oyó, 
deberá  tener  güen  cuero- 
pero  ande  bala  este  toro 
no  bala  ningún   ternero". 

Y  ya  salimos  trensaos 

porque  el  hombre  no  era  lerdo— 

mas  como  el  tino  no  pierdo 

y  soy  medio  lijerón, 

lo  dejé  mostrando  el  sebo 

de  un  revés  con  el  facón. 

Y  como  con  la  justicia 
no  andaba  bien  por  allí, 
cuanto  pataliar  lo  vi, 

y  el  pulpero  pegó  el  grito, 
ya  pa  el  palenque  salí 
como  haciéndome  el  chiquito. 

Monté  y  me  encomendé  a  Diosy 
rumbiando  para  otro  pago— 
que  el  gaucho  que  llaman  vago 
no  puede  tener  querencia— 
y  ansí  de  estrago  en  estrago 
vive  llorando  la  ausencia. 
El  anda  siempre  juyendo, 
siempre  pobre  y  perseguido, 
no  tiene  cueva  ni  nido 
como  si  juera  maldito- 
porqué  el  ser  gaucho.  .  .   barajo, 
el  ser  gaucho  es  un  delito. 


Es  como  el  patrio  de  posta, 
lo  larga  este,  aquel  lo  toma-- 
nunca  se  acaba  la  brima— 
alende  chico  se  parece 
al  arbolito  que  crece, 
desamparao  en  la  loma. 

Le  echan  la  agua  del  bautismo 
aquel  que  nació  en  la  selva, 
"Busca  madre  que  te  envuelva" 
le  dice  al  flaire  y  lo  larga, 
y  dentra  a  cruzar  el  mundo 
como  burro  con  la  carga. 

Y  se  cría  viviendo  al  viento 
como  oveja  sin  trasquila— 
mientras   su   padre   en   las  filas 
anda  sirviendo  al  Gobierno— 
aunque  tirite  en  invierno 
naides  lo  ampara  ni  asila. 

Lo  llaman  gaucho  "mamao" 
si  lo  pillan  divertido, 
y  que  es  mal  entretenido 
si  en  un  baile  lo  sorprienden— 
hace  mal  si  se  defiende 
y  si  no,  se  vé .  .  .   fundido. 

No  tiene   hijos,   ni  mujer, 
ni  amigos,  ni  protetores— 
pues  todos  son  sus  señores 
sin  que  ninguno  lo  ampare— 
tiene  la  suerte  del  güey— 
y  donde  irá  el  güey  que  no  aré? 

Su  casa  es  el  pajonal, 
su  guarida  es  el  desierto— 
y  si  de  hambre  medio  muerto 
le  echa  el  lazo  a  algiín  mamón, 
lo  persiguen  como  a  pleito, 
porque  es  un  "gaucho  ladrón". 

Y  si  de  un  golpe  por  ay 

lo  dan  y  vuelta  panza  arriba, 
no  hay  un  alma  compasiva 
que  le  resé  una  oración- 
tal  vez  como  cimarrón 
en  una  cueva  lo  tiran. 

El  nada  gana  en  la  paz 

y  es  el  primero  en  la  guerra- 


no  lo  perdonan  si  yerra, 
que  no  saben  perdonar- 
porqué  el  gaucho  en  esta  tierra 
sólo  sirve  para  votar. 

Para  él  son  los  calabozos, 
para  él  las  duras  prisiones— 
en  su  boca  no  hay  razones 
aunque  la  razón  sobre, 
que  son  campanas  de  palo 
las  razones  de  los  pobres 
porque  es  lo  que  él  necesita!!— 
de  todo  el  que  nació  gaucho 
esta  es  la  suerte  maldita. 

Vamos  suerte  —vamos  juntos 
dende  que  juntos  nacimos— 
y  ya  que  junto  vivimos 
sin  podernos  dividir— 
yo  abriré  con  mi  cuchillo 
el  camino  pa  seguir. 

9 
Matreriando  lo  pasaba 
y  a  las  casas  no  venía- 
Solía  arrimarme  de  día- 
mas  lo  mesmo  que  el  carancho 
siempre  estaba  sobre  el  rancho 
espiando  a  la  polecía. 

Viva  el  gaucho  que  ande  mal 
como  zorro  perseguido— 
hasta   que   al  menor  descuido 
se  lo  atarasquen  los  perros— 
Pues  nunca  le  falta  un  yerro 
al  hombre  más  alvertido. 

Y  en  esa  hora  de  la.  tarde 
en  que  tuito  se  adormece, 
que  el  mundo  dentrar  parece 
a  vivir  en  pura  calma, 

con  las  tristezas  de  su  alma 
al  pajonal  enderiese. 

Bala  el  tierno  corderito 
a.l  lao  de  la  blanca  oveja, 

V  a  la  vaca  que  se  aleja 
llama  el  ternero  amarrao— 
pero  el  gaucho  desgraciao 

no  tiene  a  quien  dar  su  queja. 


Ansí  es  que  al  venir  la  noche 
iba  a  buscar  mi  guardia— 
Pues  ande  el  tigre  se  anida 
también  el  hombre  lo  pasa— 
y  no  quería  que  en  las  casas 
me  rodiara  la,  partida. 

Pues  aun  cuando  vengan  ellos 
cumpliendo  con   sus  deberes, 
yo  tengo  otros  pareceres, 
y  en  esa  conducta  vivo— 
que  no  debe  un  gaucho  altivo 
peliar  entre  las  mujeres 

Y  al  campo  me  iba  sólito, 
más  matrero  que  el  venao— 
como  perro  abandonao 
a  buscar  una  tapera, 
o  en  alouna  viscachera 
pasar  la  noche  tirao. 

Sin  punto  ni  rumbo  fijo 

en  aquella  inmensidá, 

entre   tanta   escuridá 

anda  el  gaucho  como  duende— 

allí  jamás  lo  sorpriende 

dormido  la  autoridá. 


Ansí  me  hallaba  una  noehe 
contemplando  las  estrellas, 
que  le  parecen  más  bellas 
cuanto  uno  es  más  desgraciao, 
y  que  Dios  las  haiga  criao 
para    consolarse   en    ellas. 

Les  tiene  el  hombre  cariño, 

y   siempre  con   alegría 

ve  salir  las  tres  marías, 

que  si  llueve,  cuanto  escampa 

las  estrellas  son  la  guía 

que  el  gaucho  tiene  en  la  Pampa. 

Aquí   no   valen   Dotores, 
sólo  vale  la  esperencia, 
aquí  verían   su   inocencia 
esos  que  todo  lo  saben— 
porque  esto  tiene  otra  llave 
y  el  gaucho  tiene  su  cencía. 


Es  triste  en  medio  del  campo 
pasarse  noches  enteras 
contemplando   en  sus   carreras 
las  estrellas  que  Dios  cría— 
sin  tener  más  compañía 
que  su  soledá  y  las  fieras. 

Me  encontraba  como  digo 
en  aquella,  soledá, 
entre   tanta   escuridá, 
echando  al  viento  mis  quejas, 
cuando  el  grito  del  chajá 
me  hizo  parar  las  orejas. 

Como  lumbriz  me  pegué 
al  suelo  para  escuchar- 
pronto  sentí  retumbar 
las  pisadas  de  los  fletes— 
v  que  eran  muchos  ginetes 
conocí  sin  vacilar. 

Cuando  el  hembre  está  en   peligro 

no  debe  tener  confianza— 

ansí  tendido  de  panza 

puse  toda  mi  atención— 

y  ya  escuché  sin  tardanza 

como  el  ruido  de  un  latón. 

Se    venían    tan    calladitos 
que  yo  me  puse  en  cuidado- 
tal  vez  me  hubieran  bombiao 
v  me  venían  a  buscar— 
mas  no  quise  disparar, 
que  eso  es  de  guacho  morao. 

Al  punto  me  santigüe 
y  eché  de  ginebra  un  tacó- 
lo mesmito  que  el  mataco 
me  arrollé  con  el  porrón— 
"Si  han  de  darme  tabaco" 
dije,  'esta  es  güeña  ocasión". 

Me   refalé  las  espuelas 
para  no  peliar  con  grillos 
me  arremangué  el  calzoncillo, 
y  me  ajusté  bien  la  faja, 
y  en  una  mata  de  paja 
probé  el  filo  del  cuchillo. 


Para  tenerlo  a  la  mano 
el  flete  en  el  pasto  até, 
la  cincha  le  acomodé, 
y  en  un  trance  como  aquel 
haciendo  espaldas  en  él 
quietito  los  aguardé. 

Cuando  cerca  los  sentí 
y  que  ay  no  más  se  pararon 
los  pelos  se  me  erizaron, 
y  aunque  nada  vían  mis  ojos, 
"No  se  han  de  morir  de  antojo" 
les  dije  cuanto  llegaron. 

Yo  quise  hacerles  saber 
que  allí  se  hallaba  un  váren- 
les conocí  la  intención, 
y  solamente  por  eso 
fue  que  les  gané  el  tirón 
sin   aguardar  voz  de  preso. 
"Vos  sos  un  gaucho  matrero", 
dijo  uno  haciéndose  el  güeno, 

"Vos  matastes  un  moreno 
y  otro  en  una  pulpería, 
y  aquí  está  la  polecía 
que  viene  a  jusiar  tus  cuentas- 
te  va  a  alzar  por  las  cuarenta 
si  te  resistís  hoy  día". 

"No  me  vengan",  contesté, 
"con   relación   üe  üij untos— 
esos  son  otros  asuntos, 
vean  si  me  pueden  llevar, 
que  yo  no  me  he  de  entregar 
aunque  vengan   todos  juntos, 

Pero  no  aguardaron  más 
y  se  apiaron  en  montón- 
como  a  perro  cimarrón 
me  rodiaron  entre  tantos— 
yo  me  encomendé  a  los  Santos 
y  eché  mano  a  mi  facón. 

Y  ya  vide  el  fogonazo 
de  un   tiro  de  garabina- 
mas  quiso  la  suerte  indina 
de  aquel  maula  que  me  errase 
y  ay  no  más  lo  levantase 
lo  mesmo  que  una  sardina. 


A  otro  que  estaba  apurao 

acomodando  una  bola, 

le  hice  una  dentrada  sola 

y  le  hice  sentir  el  fierro 

y  ya  salió  como  el  perro 

cuando  le  pisan  la  cola. 

Era  tanta  la  aflición 

y  la  angurria  que  tenían, 

que  tuitos  se  me  venían 

donde  yo  los  esperaba, 

uno  al  otro  se  estorbaba 

y  con  las  ganas  no  vían. 

Dos  de  ellos  que  traiban  sables, 

más  garifos  y  resueltos 

en  las  hilachas  envueltos 

enfrente  se  me  pararon, 

y  a  un  tiempo  me  atropellaron 

lo  mesmo  que  perros  sueltos. 

Me  fui  reculando  en  falso 
y  el  poncho  adelante  eché— 
y  cuando  le  puse  el  pié 
uno  medio  chapetón, 
de  pronto  le  di  el  tirón 
y  de  espaldas  lo  largué. 
Al  verse  sin  compañero 
el  otro  se  sofrenó, 
entonces  le  dentré  yo 
sin  dejarlo  resollar- 
pero  ya  empezó  a  aflojar 
y  a  la  pun .  .  .  ta  disparó. 
Uno  que  en  una  tacuara 
había  atao  una  tijera, 
se  vino  como  si  juera 
palenque  de  atar  terneros- 
pero  en  dos  tiros  certeros 
salió  aullando  campo  ajuera. 

Por  suerte  en  aquel  momento 
venía  colonando  el  alba 
y  yo  dije  "si  me  salva 
la  Virgen  en  este  apuro, 
en  adelante  le  juro 
ser  más  güeno  que  una  malva" 
Pegué  un  brinco  y  entre  todos 
sin  miedo  me  entreveré- 
hecho  ovillo  me  quedé 
y  ya  me  cargó  una  yunta, 
y  por  el  suelo  la  punta 
de  mi  facón  les  jugué. 


El  más  engolosinao 
se  me  apio  con  un  hachazo, 
se  lo  quité  con  el  brazo, 
de  no,  me  mata  los  piojos; 
y  antes  de  que  diera  un  paso 
le  eché  tierra  entre  los  ojos. 

Y  mientras  se  sacudía 
refregándose  la  vista, 
yo  me  le  fui  como  lista 

y  ay  no  más  me  le  afirmé 
diciéndole:  "Dios  te  asista" 
y  de  un  revés  lo  voltié. 

Pero  en  ese  punto  mesmo 
sentí  que  por  las  costillas 
un  sable  me  hacía  cosquillas, 
y  la  sangre  se  me  heló— 
dende  ese  momento  yo 
me  salí  de  mis  casillas. 

Di  para  atrás  unos  pasos 
hasta  que  pude  hacer  pié — 
por  delante  me  lo  eché 
de  punta  y  tajos  a  un  criollo; 
metió  la  pata  en  un  oyó, 
y  yo  al  oyó  lo  mandé. 

Tal  vez  en  el  corazón 

lo  tocó  un  Santo  Bendito 

a  un  gaucho  que  pegó  el  grito, 

y  dijo:  "¡Cruz  no  consiente 

que  se  cometa  el  delito 

de  matar  ansí  un  valiente!". 

Y  ay  no  más  se  me  aparió 
dentrándole  a  la  partida— 
yo  les  hice  otra  embestida 
pues  entre  dos  era  robo— 
v  el  Cruz  era  como  lobo 
que  defiende  su  guarida. 

Uno  despachó  al  infierno 
de  dos  que  lo  atrepelláron- 
los demás  remoliniaron, 
pues  íbamos  a  la  fija, 
y  a  poco  andar  dispararon 
lo  mesmo  que  sabandija. 


Ay   quedaban   largo  a  largo 
los  que  estiraron   la   geta, 
otro  iba  como  maleta, 
y  Cruz  de  atrás  les  decía: 
"Que  venga  otro  polecía 
a  llevarlos  en   carreta". 

Yo  junté  las  osamentas, 
me  hinqué  y  les  recé  un  bendito- 
hice  una  cruz  de  un  palito, 
y  pedí  a  mi  Dios  clemente 
me  perdonara  el  delito 
de  haber  muerto  tanta  gente. 

Dejamos  amontonaos 

a  los  pobres  que  murieron— 

no  sé  si  los  recogieron 

porque  nos  fuimos  a  un  rancho, 

o  si  tal  vez  los  caranchos 

ay  no  más  se  los  comieron. 

Lo  agarramos  mano  a  mano 

entre  los  dos  al  porrón, 

en   semejante   ocasión 

un  trago  a  cualquiera  encanta, 

y  Cruz  no  era  remolón 

ni    pijotiaba    garganta. 

Calentamos  los  gargueros 
y  nos  largamos  muy  tiesos, 
siguiendo  siempre  los  besos 
al  pichel,  y  por  más  señas, 
íbamos  como  sigüeñas 
estirando  los  pescuezos. 

"Yo  me  voy",  le  dije,  "amigo, 

donde  la   suerte  me  lleve, 

y  si  es  que  alguno  se  atreve 

a  ponerse  en   mi   camino, 

yo  seguiré  mi  destino 

que  el  hombre  hace  lo  que  debe", 

"Sov  un  gaucho  desgraciado, 
no  tengo  donde  ampararme, 
ni  un  palo  donde  rascarme, 
ni  un  árbol  que  me  cubije- 
pero  ni  aún  esto  me  aflige 
porque   yo  sé  manejarme". 


"Antes  de  cair  al  servicio, 
tenía   familia   y  hacienda— 
cuando  volví,  ni  la  prenda 
me  la  había   dejado  ya— 
Dios  sabe  en  lo  que  vendrá 
a  parar  esta  contienda". 

10 

CRUZ 

Amigazo,  pa  sufrir 
ha  nacido  los  varones- 
estás  son  las  ocasiones 
de  mostrarse  un  hombre  juerte, 
hasta  que  venga  la  muente 
y  lo  agarre  a  coscorrones. 

El  andar  tan  despilchao 
ningún  mérito  me  quita, 
sin  ser  una  alma  bendita 
me  duelo  del  mal  ageno: 
soy  un  pastel  con  relleno 
que  parece  torta  frita. 

Tampoco  me  faltan  males 
y  desgracias,  le  prevengo, 
también  mis  desdichas  tengo, 
aunque  esto  poco  me  aflige— 
yo  sé  hacerme  el  chancho  rengo 
cuando  la  cosa  lo  esige. 

Y  con  algunos  ardiles 
voy  viviendo,  aunque  rotoso— 
a  veces  me  hago  el  sarnoso 
y  no  tengo  ni  un  granito, 
pero  al  chifle  voy  ganoso 
como  panzón  al  maiz  frito. 

A  mí  no  me  matan  penas 
mientras  tenga  el  cuero  sano, 
venga  el  sol  en  el  verano 
y  la  escarcha  en  el  invierno- 
si  este  mundo  es  un  infierno 
¿porqué  afligirse  el  Cristiano? 


Hagámosle  cara  fiera 
a   los  males,   compañero, 
porque  el  zorro  más  matrero 
suele  cair  como  un  chorlito- 
viene  por  un  corderito 
y  en  la  estaca  deja  el  cuero. 

Hoy  tenemos  que  sufrir 
males  que  no  tienen  nombre- 
pero  esto  a  naide  lo  asombre 
porque  ansina  es  el  pastel— 
y   tiene   que   dar   el    hombre 
más  vueltas   que   un   carretel. 

Yo  nunca  me  he  de  entregar 
a  los  brazos  de  la  muerte- 
arrastro  mi   triste   suerte 
paso  a  paso  y  como  pueda— 
que  donde  el  débil  se  queda 
se   suele   escapar  el   juerte. 

Y   ricuerde   cada   cual 
lo  que  cada  cual  sufrió— 
que  lo  que  es,  amigo,  yo 
hago  ansí  la  cuenta  mía: 
ya  lo  pasado  pasó, 
mañana  será  otro  día. 

Yo  también  tuve  una  pilcha 
que  me  enllenó  el  corazó— 
y  si  en  aquella  ocasión 
alguien  me  hubiera  buscao, 
siguro  que  me  habría  hallao 
más  prendido  que  un  botón. 

En  la  güella  del  querer 
no  hay  animal  que  se  pierda- 
las  mujeres  no  son  lerdas— 
y  todo  gaucho  es  dotor 
si  pa  cantarle  al  amor 
tiene  que  templar  las  cuerdas. 

Quién  es  de  una  alma  tan  dura 

que  no  quiera  a  una  mujer! 

lo  alivia  en  su  padecer: 

si  no  sale  calavera 

es  la  mejor  compañera 

que  el  hombre  puede  tener. 


Sí  es  güeña,  no  lo  abandona 
cuando  lo  vé  desgraciao— 
lo  asiste  con  su  cuidao 
y  con  afán  cariñoso, 
y  usté   tal   vez   ni   un  rebozo 
ni   una  pollera   le  ha   dao. 

Grandemente  lo  pasaba 
con  aquella  prenda  mía— 
viviendo   con   alegría 
como  la  mosca  en  la  miel— 
¡amigo   qué   tiempo  aquel! 
la  pucha   que  la  quería! 


Era  la  águila  que  a  un  árbol 
dende  las  nubes  bajó, 
era  más  linda  que  el  alba 
cuando  vá  rayando  el  sol- 
era la  flor  deliciosa 
que  entre  el  trebolar  creció. 

Pero,  amigo,  el  Comendante 
que  mandaba  la  milicia 
como  que  no  desperdicia 
se  fue  refalando  a  casa— 
yo  le  conocí  en  la  traza 
que  el  hombre  traiba  malicia. 


El  me  daba  voz  de  amioo, 
pero  no  le  tenía,  fe- 
era  el  Gefe  y  va  se  vé 
no  podía  competir  yo— 
en  mi  rancho  se  pegó 
lo  mesmo  que  saguaipé. 

A  poco  andar  conocí 
que  ya  me  había  desbancao— 
y  él  siempre  muy  entonao 
aunque  sin  darme  ni  un  cobre, 
me  tenía  de  lao  a  lao 
como  encomienda  de  pobre. 

A  cada  rato  de  chasque 
me  hacía  dir  a  gran  distancia— 
ya  me  mandaba  a  una  estancia, 
ya  al  pueblo,  ya.  a  la  frontera- 
pero  él  en  la  Comendancia 
no  ponía  los  pies  siquiera. 

Es  triste  a  no  poder  más 
el  hombre  en  su  padecer, 
si  no  tiene  una  mujer 
que  lo  ampare  y  lo  consuele- 
mas  pa  que  otro  se  la  pele 
lo  mejor  es  no  tener. 

No  me  gusta  que  otro  gallo 
le  cacaree  a  mi  gallina— 
yo  andaba  ya  con  la  espina, 
hasta  que  en  una  ocasión 
lo  pillé  junto   al  jogón 
abrazándome  a  la  china. 

Tenía  el  viejito  una  cara 
de  ternero  mal  lamido, 
y  al  verlo  tan  atrevido 
le  dije  "Que  le  aproveche, 
que  había  sido  pa  el  amor 
como  guacho  pa  la  leche". 

Peló  la  espada  y  se  vino 
como  a  quererme  ensartar, 
pero  yo  sin  titubear 
le  volví  al  punto  de  decir: 
"Cuidao  no  te  vas  a  pér...tigo, 
pone  cuarta  pa  salir". 


Un  puntazo  me  largó 
pero  el  cuerpo  le  saqué, 
y  en  cuanto  sé  lo  quité, 
para  no  matar  un  viejo, 
con  cuidado,  medio  de  lejo, 
un  planazo  le  asenté. 

Y  como  nunca  al  que  manda 
le  falta  algún  adulón, 

uno  que  en  esa  ocasión 
se  encontraba   allí  presente, 
vino  apretando  los  dientes 
como  perrito  mamón. 

Me  hizo  un  tiro  de  revuelver 
que  el  hombre  creyó  siguro— 
era  confiao  y  le  juro 
que  cerquita  se  arrimaba- 
pero  siempre  en  un  apuro 
se  desentumen  mi  tabas. 

El  me  siguió   menudiando 
más  sin  poderme  acertar, 
y  yo  déle  culebriar, 
hasta  que  al  fin  lo  dentré 

Y  ay  no  más  lo  despaché 
sin  dejarlo  resollar. 

Es  sonso  el  cristiano  macho 
cuando  el  amor  lo  domina!— 
el  la  miraba  a  la  indina, 
y  una  cosa  tan  jedion^a 
sentí   y°>   que  ni   en   la  fonda 
he  visto  tal  jedentina. 

Y  le  dije  "Pa  su  agüela, 
han  de  ser  esas  perdices"— 
yo  me  tapé  las  narices 

v  me  salí  estornudando— 
y  el  viejo   quedó  olfatiando 
como    chico   con    lumbrices. 

Cuando  la  muía  recula 
señal  que  quiere  cosiar— 
ansí  se  suele  portar 

aunque  ella  lo  disimula, 
recula   como  la   muía 
la   mujer  para  olvidar. 


Alcé  mi  poncho  y  mis  prendas 
y   me   largué   a  padecer 
por  culpa  de  una  mujer 
que  quiso  engañar  a  dos- 
ai  rancho  le  dije  odios 
para  nunca  más  volver 

Las  mujeres  dende  entonces, 
conocí  a  todas  en  una— 
ya  no  he  de  probar  fortuna 
con  carta  tan  conocida: 
mujer  y  perra  parida, 
no  se  me  acerca  ninguna. 

11 

A  otros  le  brotan  las  coplas 
como  agua  de  manantial— 
pues  a  mí  me  pasa  igual 
aunque  las  mías  nada  valen- 
de  la  boca   me   salen 
como  ovejas  del  corral. 

Que  en  puertiando  la  primera 
ya  la  siguen  las  demás, 
y  en  montones  las  de  atrás 
contra  los  palos  se  estrellan, 
y  saltan  y  se  atropellan 
sin    que  se   corten  jamás. 

Y  aunque  yo  por  mi  ignorancia 
con  gran  trabajo  me  esplico, 
cuando  llego  a  abrir  el  pico 
téngalo  por  cosa  cierta, 

sale  un  verso  y  en  la  puerta 
ya  asoma  el  otro  el  hocico. 

Y  emprésteme    su   atención, 
me  oirá  relatar  las  penas 
que  traigo  la  alma  llena— 
porque  en  toda   circunstancia, 
paga  el  gaucho  su  ignorancia 
con  la  sangre  de  las  venas. 

Después  de  aquella  desgracia 
me  refugié  en   los  pajales, 
anduve  entre  los  cardales 
como  vicho  sin  guarida- 


pero,   amigo,  es   esa  vida 
como  vida  de  animales. 

Y  son  tantas  las  miserias 
en  que  me  he  sabido  ver, 
que  con  tanto  padecer 
y  sufrir  tanta  aflición 
malicio  que  he  de  tener 
un  callo  en  el  corazón. 

Ansí    andaba    como    guacho 
cuando  pasa   el   temporal- 
supe  una  vez  pa  mi  mal 
de  una   milonga   que  había, 
y  ya.  pa  la  pulpería 
enderesé  mi   bagual. 

Era  la  casa  del  baile 
un  rancho  de  mala  muerte, 
y  se  enllenó  de  tal  suerte 
que  andábamos  a  empujones— 
nunca,  faltan   encontrones 
cuando  el  pobre  se  divierte. 

Yo  tenía  unas  medias  botas 
con  tamaños  berdugones— 
me    pusieron    los    talones 
con  crestas  como  los  gallos- 
si  viera  mis  afliciones 
pensando  vo  que  eran  callos. 

Con  gato  y  con  fandanguiddo 
había  empezado  el  changango- 
y  para  ver  el  fandango 
me  colé  haciéndome  bola- 
mas  metió  el  diablo  la  cola 
y   todo   se  volvió   pango. 

Había  sido  el  guitarrero 
un  gaucho  duro  de  boca— 
yo  tenía  facencia  poca 
pa  aguantar  cuando  no  debo— 
a  ninguno  me  le  atrevo- 
pero  me  halla  el  que  me  toca. 

A  bailar  un  pericón 
con  una  moza  salí, 
sin  duda  me  conoció— 
y  estas  coplitas  cantó 
como  por  rairse  de  mí: 


"Las  mujeres  son  todas 

como  las  muías— 

yo  no  digo  que  todas 

pero  hay  algunas 

que  a  las  aves  que  vuelan 

les  sacan  plumas". 

"Hay  gauchos  que  presumen 
de  tener  damas- 
no  digo  que  presumen 
pero   se  alaban 
y  a  lo  mejor  los  dejan 
tocando  tablas". 

Se  secretiaron  las  hembras— 
y  yo  ya  me  encocoré— 
volié   la  anca   y   le  grité 
"Deja  de  cantar...    chicharra" 
y  de  un  tajo  a  la  guitarra 
tuitas  las  cuerdas   corté. 

Al  punto  salió  de  adentro 
un  gringo  con   un  jusil— 
pero  nunca  he  sido  vil, 
poco  el  peligro  me  espanta.— 
ya  me  refalé  la  manta 
y  la  eché  sobre  el  candil. 

Gané  en  seguida  la  puerta 
gritando:   "Naides  me  ataje  — 
y  alborotao  el  hembraje 
lo  que  todo  quedó  escuro, 
empezó  a  verse  en  apuro 
mesturao  con  el  gauchaje. 

EZ  primero  que  salió 
fue  el  cantor  y  se  me  vino- 
pero  yo  no  pierdo  el  tino 
aunque  haiga  tomao  un  trago— 
y  hay  algunos  por  mi  pago 
que  me  tienen  por  ladino. 

No  he  de  haber  achocao  otro— 
le  salió  cara  la  broma— 
a  su  amigo  cuando  toma 
se  le  despeja  el  sentido 
y  el  pobrecito  había  sido 
como  carne  de  paloma. 


Para  prestar  sus  socorros 
la.s  mujeres  no  son  lerdas- 
antes  que  la  sangre  pierda 
lo  arrimaron  a  unas  pipas— 
ay  lo  dejé  con  las  tripas 
como  pa  que  hiciera  cuerdas. 

Monté  y  me  largué  a.  los  campos 
más  libre  que  el  pensamiento, 
como  las  nubes  al  viento 
a  vivir  sin  paradero, 
que  no  tiene  el  que  es  matrero 
nido,  ni  rancho,  ni  asiento. 

No  hay  fuerza  contra  el  destino 
que  le  ha  señalao  el  Cielo— 
y  aunque  no  tenga  consuelo 
aguante  el  que  está  en  trabajo 
naides  se  rasca  pa  abajo 
ni  se  lonjea  contra  el  pelo. 

Con  el  gaucho  desgraciao 
no  hay  uno  que  no  se  entone- 
la menor  falta  lo  espone 
a   andar  con   la.s  avestruces! 
faltan  otros  con  más  luces 
y  siempre  hay  quien  los  perdone. 

12 
Yo  no  sé  que  tantos  meses 
esta  vida  me  duró— 
a  veces  nos  obligó 
la  miseria   a  comer  potro— 
me  había  acompa.ñao  con  otros 
tan  desgraciaos  como  yo. 

Mas  ¿para  qué  platicar 
sobre   esos  males  — canejo? 
nace  el  gaucho  y  se  hace  viejo,, 
sin  que  mejore  su  suerte, 
hasta  que  por  ay  la  muerte 
Pero  como  no  hay  desgracia 
sale  a  cobrarle  el  pellejo. 

Pero  como  no  hay  desgracia 

que  no  acabe   alguna  vez, 

me    aconteció    que    después 

de    sufrir   rigor, 

un   amigo  por  favor 

me  compuso  con  el  Juez. 


Le  alvertiré  que  en  mi  pago 
ya  no  vá  quedando  un  criollo  - 
se  los  ha  tragao  el  oyó, 
o  juido  o  muerto  en  la  guerra- 
porqué,  amigo,  en  esta  tierra 
nunca  se  acaba  el  embrollo. 

Colijo  que  jué  por  eso 
que  me  llamó  el, Juez  un  día, 
y  me  dijo  que  quería 
hacerme  a  su  lao  venir, 
pa  que  dentrase  a  servir 
de   soldao  de  Polecía. 

y  me  largó  una  proclama 
tratándome  de  valiente, 
que  yo  era  un  hombre  decente, 
y  que  dende  aquel  momento 
me  nombraba  de  sargento 
pa  que  mandara  la.  gente. 

Ansí  estuve  en  la  partida 
pero  ¡qué  había  de  mandar! 
anoche  al  irlo  a.  tomar 
vide  güeña  coyontura— 
y  a  mí  no  me  gusta  andar 
con  la  lata  a  la  cintura. 

Ya  conoce,  pues,  quien  soy, 
tenga  confianza  conmigo— 
Cruz  le  dio  mano  de  amigo 
y  no  Jo  ha  de  abandonar— 
juntos  podemos  buscar 
pa  los  dos  un  mesmo  abrigo. 

Andaremos  de  matreros 
si  es  preciso  pa  salvar— 
nunca   nos  ha.  de   faltar 
ni  un  güen  pingo  para  juir, 
ni    un    pajal    ande    dormir, 
ni  un  matambre  que  ensartar. 

Y  cuando  sin  trapo  alguno 
nos  haiga  el  tiempo  dejao— 
yo  le  pediré  emprestao 
el  cuero  a  cualquiera  lobo— 
y  hago  un  poncho,  si  lo  sobo, 
mejor  que  poncho  engomao. 


Para  mí  la  cola  es  pecho 
y  el  espinazo  es  cadera- 
hago  mi  nido  ande  quiera 
y  de  lo  que  encuentro  como— 
me  echo  tierra  sobre  el  lomo 
y  me  apeo  en  cualquier  tranquera. 

Y  dejo  rodar  la  bola 
que  algún  día  se  ha  de  parar- 
tiene  el  gaucho  que  aguantar 
hasta  que  se  lo  trague  el  oyó— 
o  hasta  que  venga  algún  criollo 
en  esta  tierra  a  mandar. 

Lo  miran  al  pobre  gaucho 
como  carne  de   cogote— 
lo  tratan  al  estricote, 
y  si  ansí  las  cosas  andan 
porque  quieren  los  que  mandan, 
aguantemos  los  azotes. 

Pucha  —  si  usté  los  oyera 
como  yo  en  una  ocasión, 
tuita.  la  conversación 
que  con  otro  tuvo  el  Juez— 
le    asiguro    que   esa   vez 
se  me  achicó  el  corazón. 

Hablaban   de   hacerse    ricos 
con  campos  en  la  frontera- 
de   sacarla  más  afuera 
donde  había  campos  baldidos— 
y  llevar  de  los  partidos 
gente  que  la  defendiera. 

Todo  se  güelven  proyectos 

de  colonias  y  carriles— 

y  tirar  la  plata  a  miles 

en  los  gringos  enganchaos, 

mientras  al  pobre  soldao 

le  pelan  la  chaucha—  ah!  viles! 

Pero  si  siguen  las  cosas 

como  van  hasta  el  presente, 

puede  ser  que  redepente 

veamos  el  campo  desierto, 

y  blanquiando  solamente 

los  güesos  de  los  que  han  muerto. 


Hace  mucho  que  sufrimos 
la  suerte  reculativa— 
porque  a  lo  mejor  del  caso, 
trabaja  el  gaucho  y  no  arriba, 
lo  levantan  de  un  sogazo 
sin  dejarle  ni  saliva. 

De  los  males  que  sufrimos 
hablan  muchos  los  puebleros, 
pero  hacen  como  los  teros 
para  esconder  sus  niditos: 
en  un  lao  pegan  los  gritos 
y  en  otro  tienen  los  güevos. 

Y  se  hacen   los  que  no   aciertan 
a  dar  con  la  coyuntura— 
mientras  al  gaucho  lo  apura, 
con   rigor  la   autoridá, 
ellos  a  la   enfermedá 
le  está  errando  la  cura. 


13 


MARTIN  FIERRO 

Ya  veo  que  somo  los  dos 
astilla  del  mesmo  palo— 
yo  paso  por  gaucho  mayo 
y  usté  anda  del  mesmo  modo, 
v  yo  pa  acabarlo  todo, 
a  los  Indios  me  refalo. 

Pido  perdón  a  mi  Dios 
que  tantos  bienes  me  hizo- 
pero  dende  que  es  preciso 
que  viva  entre  los  infieles— 
yo  seré  cruel  con  los  crueles— 
ansí  mi  suerte  lo  quiso. 

Dios  formó  lindas  flores, 
delicadas   como   son- 
Íes  dio  toda  perfeción 
y  cuanto  él  era  capaz— 
pero  al  hombre  le  dio  más 
cuando   le   dio   el   corazón. 

Le  dio  claridá  a  la  luz, 
juerza  en  su  carrera  al  viento, 
le  dio  vida  v  movimiento 


dende  el  águila  al  ousano— 
pero  más  le  dio  al  cristiano 
al  darle  el  entendimiento. 

Y  aunque  a  las  aves  les  dio 
con   otras   cosas  que  inoro, 
esos  piquitos  como  oro 

y  un  plumaje  como  tabla— 
le  dio  al  hombre  más  tesoro 
al  darle  una  lengua  que  habla. 

Y  dende  que  dio  a  las  fieras 
esa  juria  tan  inmensa, 

que  no  hay  poder  que  las  venza 
ni  nada  que  las  asombre— 
¿qué  menos  le  daría  al  hombre 
que  el  valor  pa  su  defensa? 

Pero  tantos  bienes  juntos 
al  darle,  malicio  yo 
que  en  sus  adentros  pensó 
que  el  hombre  los  precisaba, 
pues  los  bienes  igualaba 
con  las  penas  que  le  dio. 

Y  yo   empujao  por   las   mías 
quiero  salir  de  este  infierno- 
va  no   soy  pichón  muy  tierno 
y    sé    manejar    la  lanza— 

v  hasta  los  Indios  no  alcanza 
la   faculta   del  Gobierno. 

Yo  sé  que   allá  los  caciques 
amparan   a   los   cristianos, 
y  que  los_tratan  de   "Hermanos" 
cuando  se  van  por  su   gusto— 
a  qué   andar  pasando  sustos... 
alcemos  el  poncho  y  vamos. 

En   la   cruzada  hay  peligros 
pero  ni  aun  esto  me  aterra— 
yo  ruedo  sobre  la  tierra 
arrastrao  por  mi  destino— 
v  si  erramos  el  camino 
no  es  el  primero  que  lo  erra. 

Si  hemos  de  salvar  o  no- 
de  esto  naides  nos  responde, 
derecho  ande  el  sol  se  esconde 
tierra  adentro  hav  que  tirar, 


algún  día  hemos  de  llegar 
después  sabremos  adonde. 
No  hemos  de  perder  el  rumbo. 

los  dos  somos  güeña  yunta— 
el  que  es  gaucho  vá  ande  apunta, 
aunque  ignore  ande  se  encuentra 
pa  el  la.o  en  que  el  sol  se  dentra 
dueblan  los  pastos  la  punta. 

De  hambre  no  pereceremos, 
pues  según  otros  me  han  dicho 
en  los  campos  se  hallan  vichos 
de  lo  que  uno  necesita- 
gamas,    matacos,    mulitas, 
avestruces   y   quirquinchos. 

Cuando  se  anda  en  el  desierto, 
se  come  uno  hasta  las  colas— 
lo  han  cruzao  mujeres  solas 
llegando    al    fin    con    salú— 
y  ha  de  ser  gaucho  el  ñandú 
que  se  escape  de  mis  bolas. 

Tampoco  a  la  sé  le  temo, 
yo  la  aguanto  muy  contento, 
busco  agua  olfatiando  al  viento, 
y  dende  que  no  soy  manco 
ande  hay  duraznillo  blanco 
cavo  y  la  saco  al  momento. 

Allá  habrá   seguridá 
ya  que  aquí  no  la  tenemos- 
menos  males  pasaremos, 
y  ha  de  haber  grande  alegría 
el  día  que  nos  descolguemos 
en    alguna   toldería. 

Fabricaremos  un   toldo 
como  lo  hacen  tan  ios  otros, 
con  unos  cueros  de  potro, 
que  sea  sala  y  sea  cocina- 
tal  vez  no  falte  una  china 
que  se  apiade  de  nosotros! 

Allá  no   hay   que    trabajar, 
vive  como  un  señor- 
de  cuando  en  cuando  un  malón, 
V  si  de  él  sale  con  vida, 
lo  pasa  echao  panza  arriba 
mirando  dar  güelta  el   sol. 


Y  ya  que  a  juerza  de  golpes 
la  suerte  nos  dejó  a  flus 
puede  que  allá  veamos  luz 
y  se  acaben  nuestras  penas- 
todas  las  tierras  son  güeñas, 
vámosnos  amigo  Cruz. 

El  que  maneja  las  bolas, 
el  que  sabe  echar  un  pial, 
y  sentársele  a  un  bagual 
sin  miedo  de  que  lo  baje, 
entre  los  mesmos  salvajes 
no   puede  pasarlo   mal. 

El  ;mor  como  la  guerra 

lo  hace  el  criollo  con  canciones— 

a  más  de  eso  en  los  malones 

podemos  aviornos  de  algo-- 

en  fin  amigo,  vo  salgo 

de    estas  peregrinaciones. 

En  este  punto  el  cantor 
buscó  un  porrón  pa  consuelo, 
echó  un  trapo  como  un  cielo, 
dando  fin  a  su  argumento— 
v  de  un  oilpe  al  istrumento 
lo  hizo  astillas  contra  el   suelo. 

"Ruempo",  dijo,   "la  guitarra, 
pa   no  volverme  a   tentar, 
ninguno  la  ha  de  tocar 
por   siguro   ténganlo; 
pues  naides  ha  de  cantar 
cuando  este  gaucho  cantó". 

Y  daré  fin  a  mis  coplas 
con  aire  de  relación, 
nunca  falta  un  preguntón 
más  curioso  que  mujer, 

v  tal  vez  quiera  saber 
cómo    fué    la    conclusión. 

Cruz  y  Fierro  de  una  Estancia 
una  tropilla  arriaron— 
por  delante  se  la  echaron 
como  criollos  entendidos, 
y  pronto  sin   ser  sentidos 
por  la  frontera  cruzaron. 


Y  cuando  la  habían  paso, 
una  madrugada  clara, 

le  dijo  Cruz  que  mirara 
las  últimas  poblaciones; 
y  a  Fierro  dos  lagrimones 
le  rodaron  por  la  cara. 

Y  siguiendo  el  fiel  rumbo 
se  entraron  en  el  desierto- 
no  sé  si  los  habrán  muerto 
en  alguna  correría- 
pero  espero  que  algún  día 
sabré  de  ellos  algo  cierto. 


Y  ya  con  estas  noticias 
mi  relación  acabé— 
por  ser  ciertas  las  conté, 
todas  las  desgracias  dichas- 
es  un   telar  de   desdichas 
cada  gaucho  que  usté  vé. 

Pero  ponga  su  esperanza 
en  el  Dios  que  lo  formó— 
y  aquí  me  despido  yo, 
que  he  relatao  a  mi  modo 
males  que  conocen   todos 
pero  que  naides  contó. 


La  Vuelta  de  Martin  Fierro 


Atención  pido  al  silencio 
y  silencio  a  la  atención— 
que  voy  en   esta  ocasión, 
si   me   ayuda    la  memoria, 
a  mostrarles  que  a  mi  historia 
le  faltaba  lo  mejor. 

Viene  uno  como  dormido 
cuando  vuelve  del  desierto- 
veré  si  a  esplicarme  acierto 
entre  gente  tan  bizarra, 
y  si  al   sentir  la  guitarra 
de  mi  sueño  me  despierto. 


Siento  que  mi  pecho  tiembla, 
que  se  turba  mi  razón, 
y  de  la  vigüela  al  son 
imploro  a  la  alma  de  un  sabio 
que  venga  a  mover  mi  labio 
y  alentar  mi  corazón. 

Si  no  llego  a  treinta  y  una 
de  fijo  en  treinta  me  planto— 
y  esta  confianza  adelanto, 
porque  recibí  en  mí  mismo, 
con  el  agua  del  Bautismo 
la  faculta  para  el  Canto. 


Tanto  el  pobre  como  el  rico 
la  razón  me  la  han  de  dar— 
y  si  llegan  a  escuchar 
lo  que  esplicaré  a  mi  modo, 
digo  que  no  han  de  reir  todos, 
algunos  han  de  llorar. 

Mucho  tiene  que  contar 
el  que  tuvo  que  sufrir, 
y  empezaré  por  pedir 
no  duden  de  cuanto  digo; 
pues  debe  creerse  al  testigo 
si  no  pagan  por  mentir. 

Gracias  le  doy  a  la  Virgen, 
gracias   le    doy   al    Señor, 
porque  entre  tanto  rigor 
y  habiendo  perdido  tanto, 
no  perdí  mi  amor  al  canto 
ni    mi    voz    como  cantor. 

Que  cante  todo  viviente 
otorgó  el  Eterno  Padre— 
cante  todo  el  que  le  cuadre 
como  lo  hacemos  los  dos, 
pues  sólo  no  tiene  voz 
el  ser  que  no  tiene  sangre. 

Canta  el  pueblero. .  .  y  es  pueta, 
canta  el  gaucho.  .  .  y  ¡ay  Jesús! 
lo  miran  como  avestruz, 
so  ignorancia  los  asombra; 
mas  siempre  sirven  las  sombras 
para  distinguir  la  luz. 

El  campo  es  del  inorante, 
el  pueblo  del  hombre  estruido— 
yo  que  en  el  campo  he  nacido 
digo  que  mis  cantos  son, 
para    los   unos    —sonidos, 
y  para  otros  —intención. 

Yo  he  conocido  cantores 
que  era  un  gusto  escuchar- 
mas  no  quieren  opinar 
y   se  divierten   cantando; 
pero  yo  canto  opinando 
que  es  mi  modo  de  cantar. 


El  que  va  por  esta  senda 

cuanto   sabe   desembucha— 

y  aunque  mi  cencía  no  es  mucha, 

esto  en  mi  favor  previene: 

yo  sé  el  corazón  que  tiene 

el    que   con   gusto   me  escucha. 

Lo   que    pinta    este   pincel 

ni   el   tiempo  lo  ha  de  borrar— 

ninguno  se  ha  de  animar 

a  corregirme  la  plana; 

no  pinta  quien  tiene  gana 

sino  quien  sabe  pintar. 

Y  no  piensen   los  oyentes 
que  del  saber  hago  alarde- 
he  conocido  aunque  tarde, 
sin  haberme  arrepentido, 
que  es  pecado  cometido 

el  decir  ciertas  verdades. 

Pero  voy  en  mi  camino 
y  nada  me  ladiará, 
he  de  decir  la  verdá, 
de  naides  soy  adulón, 
aquí  no  hay  imitación 
esta  es  pura  realidá. 

Y  el  que  me  quiera  enmendar 
mucho  tiene  que  saber- 
tiene  mucho  que  aprender 

el  que  me  sepa  escuchar— 
tiene  mucho  que  rumiar 
el  que  me  quiera  entender. 

Más  que  yo  y  cuantos  me  oigan 
más  que  las  cosas  que  tratan 
más  que  lo  que  ellos  relatan 
mis  Cantos  han  de  durar- 
mucho  ha  habido  que  mascar 
para  echar  esta  bravata. 

Brotan  quejas  de  mi  pecho, 
brota  un  lamento  sentido; 
y  es  tanto  lo  que  he  sufrido 
y  males  de  tal  tamaño, 
que  reto  a  todos  los  años 
a  que  traigan  el  olvido. 


Ya  verán   si   me  despierto 
cómo  se  compone  el  baile— 
y  no  se  sorprenda  naides 
si  mayor  fuego  me  anima; 
porque  quiero  alzar  la  prima 
como  pa  tocar  al  aire. 

Y  con  cada  cuerda  tirante 
dande   que   ese   tono  elija, 
yo  no  he  de  aflojar  manija 
mientras  que  la  voz  no  pierda; 
si  no  se  corta,  la  cuerda 

o  no  cede  la  clavija. 

Aunque  rompí  el  estrumento 

por  no  volverme  a  tentar— 

tengo  tanto  que  contar 

y  cosas  de  tal  calibre, 

que  Dios  quiera  que  se  libre 

el  que  me   enseñó   a   templar. 

De  naide  sigo  el  ejemplo, 
naide  a.  dirigirme  viene— 
yo    digo    cuanto    conviene, 
y  el  que  en  tal  güeya  se  planta, 
debe    cantar    cuando  canta 
con  toda  la  voz  que  tiese. 

He  visto  rodar  la  bola 
y  no  se  quiere  parar, 
al  fin  de  tanto  rodar 
me  he  decidido  a  venir 
a  ver  si  puedo  vivir 
y  me  dejan   trabajar. 

Sé  dirigir  la  mansera 
y  también  echar  un  pial- 
sé  correr  en  un  rodeo, 
trabajar   en   un   corral— 
me  sé  sentar  en  un  pértigo 
lo  mesmo  que  en  un  bagual. 

Y  empréstenme   su   atención 
si  así  me  quieren   honrar, 
de  no,  tendré  que  callar 
pues  el   pájaro  cantor 
jamás  se  para  a  cantar 

en  árbol  que  no  da  flor. 

Hav  trapitos   que    golpiar, 
y  de  aquí  no  me  levanto; 


escúchenme  cuando  canto 
si  quieren  que  desembuche— 
tengo  que  decirles  tanto 
que  les  mando  que  me  escuchen. 

Déjenme  tomar  un  trago, 
estas  son  otras  cuarenta, 
mi  garganta  está  sedienta, 
y  de  esto  no  me  abochorno— 
pues  el  viejo  como  el  horno 
por  la  boca  se  calienta. 

2 

Triste  suena  mi  guitarra 

y  el  asunto  lo  requiere— 

ninguno  alegrías  espere 

sino    sentidos   lamentos, 

de  aquel  que  en  duros  tormentos 

nace,  crece,  vive  y  muere. 

Es  triste  dejar  sus  pagos 
y  largarse  a  tierra  agena 
llevándose  la.  alma  llena 
de  tormentos  y  dolores- 
mas  nos  llevan  les  rigores 
como  el  Pampero  a  la  arena. 

Irse  a  cruzar  el  desierto 
lo  mesmo  que  un  foragido, 
dejando  aquí  en  el  olvido, 
como  dejamos  nosotros 
su  mujer  en  brazos  de  otro 
v   sus  hijitos   perdidos 

Cuántas  veces  al  cruzar 
en  esa  inmensa  llanura, 
al  verse  en  tal  desventura 
y  tan  lejos  de  los  suyos, 
se   tira   uno   entre   los   yuyos 
a  llorar  con  amargura. 

En  la  orilla  de  un  arroyo 
solitario  lo  pasaba— 
en   mil  cosas  cavilaba, 
y  a  una  güelta  repentina 
se  me  hacía  ver  a  mi  china 
o  escuchar  que  me  llamaba 

Y  las  aguas  serenitas 

bebe  el  pingo  trago  a  trago— 

mientras   sin   ningún   halago 


pasa  uno  hasta  sin  comer, 
por  pensar  en  su  mujer, 
en   sus  hijos  y   en   su   pago. 

Recordarán    que   con   Cruz 
para  el  desierto  tiramos— 
en   la  pampa   nos  entramos, 
cayendo   por   fin   del   viaje 
a  unos  toldos  de  salvajes, 
los  primeros  que  encontramos. 

La  desgracia  nos  seguía, 
llegamos  en  mal  momento- 
estaban  en  parlamento 
tratando  de  una  invasión, 
v  el  Indio  en  tal  ocasión 
recela    hasta    de    su   aliento. 

Se  armó  un  tremendo  alboroto 
cuando  nos  vieron   llegar- 
no  podíamos  aplacar 
tan    peligroso   hervidero- 
nos  tomaron  por  bomberos 
y  nos  quisieron  lanciar. 

Nos  quitaron  los  caballos 
a  los  muy  pocos  minutos- 
estaban   irresolutos, 
quien  sabe  qué  pretendían— 
por  los  ojos  nos  metían 
las   lanzas   aquellos   brutos. 

Y  déle  en  su  lengüeteo 
hacer  gestos  y  cabriolas- 
uno  desató  las  bolas 
y  se  nos  vino  en  seguida- 
va  no  creíamos  con  vida 
salvar   ni    por   carambola. 

Allá  no  hav  misericordia 
ni  esperanza  que  tener— 
el  indio  es  de  parecer 
que  siempre  matar  se  debe— 
pues  la  sangre  que  no  bebe 
le  mista  verla  correr. 

Cruz   se   dispuso   a   morir 
pcliando  y   me  convidó— 
aguantemos,  dije  yo, 
el  fuego  hasta  que  nos  quéme- 


menos los  peligros  teme 
quien  más  veces  los  venció. 
Se  debe  ser  más  prudente 
cuando   el  peligro   es   mayor— 
siempre   se  salva   mejor 
andando   con   alvertencia, 
porque  no  está  la  prudencia 
reñida   con    el   valor. 

Vino  al   fin  el   Lenguaraz 
como  a  trairnos  el  perdón- 
nos  dijo  "La  salvación 
se  la  deben   a  un   cacique 
que  se  trata  de  un  malón", 
me  manda  que  les  esplique 

"Les   ha   dicho  a  los  demás 
que  ustedes  queden  cautivos— 
por  si  cain  algunos  vivos 
en  poder  de   los   cristianos, 
rescatar  a  sus  hermanos 
con  estos  dos  fugitivos". 

Volvieron    al   parlamento 
a  tratar  de  sus  alianzas, 
o  tal  vez  de  las  matanzas, 
y  conforme  les  detallo 
hicieron  cerco  a  caballo 
recostándose  en  las  lanzas. 

Dentra   al   centro   un   indio  viejo 
y  allí  a  lengüetiar  se  larga— 
quien  sabe  qué  les  encarga, 
pero  toda  la  riunión 
lo  escuchó  con  atención 
lo  menos  tres  horas  largas. 

Pegó  al  fin  tres  alaridos 
y  ya  principia  otra  danza- 
para  mostrar   su    pujanza 
y  dar  pruebas  de  ginete 
dio  riendas  ravando  el  flete 
y  revoliando  la,  lanza. 

Recorre  luego   la   fila,, 
frente  a  cada  indio  se  para, 
lo    amenaza    cara   a   cara,, 
y  en  su  juria  aquel  maldito 
acompaña  con   su  grito 
el  cimbrar  de  la  tacuara. 


Se  vuelve  aquello  un  incendio 
más  feo  que  la  mesma  guerra- 
entre   una  nube   de   tierra 
se  hizo  allí  una  mezcolanza 
de  potros,  indios  y  lanzas, 
con  alaridos  que  aterran. 

Parece  un  baile  de  fieras, 
sigún  yo  me  lo  imagino- 
era  inmenso  el  remolino, 
las  voces  aterradoras— 
hasta  que  al  fin  de  dos  horas 
se  aplacó  aquel  torbellino. 

De  noche  formaban  cerco 
y  en  el  centro  nos  ponían— 
para  mostrar  que  querían 
quitarnos  toda  esperanza 
ocho  o  diez  filas  de  lanzas 
al  rededor  nos  hacían. 

Allí   estaban   vigilantes 
cuidándonos  a  porfía, 
cuando  roncar  parecían 
"Güinca'  gritaba  cualquiera, 
v  toda  la   fila   entera 
LrUtnca     — 
"Güinca"  repetía, 
la   tierra   es  madre  de   todos, 

Pero  el  indio  es  dormilón 
y  tiene  un   sueño  projundo— 
es  roncador  sin  segundo, 
v  en  tal  confianza  es  su  vida 
que  ronca   a   pata  tendida 
aunque  se  dé  güelta  el  mundo. 

Nos  averiguaban  todo 
como  aquel  que  se  previene- 
porqué  siempre  les  conviene 
saber  las  juerzas  que  andan, 
dónde  están,  quiénes  las  mandan, 
qué  caballos  y  armas  tienen. 

A   cada  respuesta   nuestra 
uno  hace  una  esclamación— 
y   luego    en    continuad— 
aquellos   indios    feroces— 
cientos   v   cientos  de   voces 
repiten    el    mismo    son. 


Y  aquella   voz  de  un   solo 
que  empieza  por  un  gruñido- 
llega  hasta   ser  alarido 
de  toda   la  muchedumbre— 
y  ansí   alquieren   la   costumbre 
de  pegar  esos  bramidos. 


De   ese   modo   nos   hallamos 
empeñaos   en    la    partida- 
no  hay  que  darla  por  perdida 
por  dura  que  se  la  suerte— 
ni  que  pensar  en  la  muerte 
sino   en   soportar   la   vida. 

Se  endurece  el  corazón, 
no  teme  peligro  alguno— 
por   encontrarlo   oportuno 
allí    juramos  los   dos 
respetar  tan  sólo  a  Dios, 
de  Dios  abajo  a  ninguno. 

Mas    todo    varón    prudente 
sufre   tranquilo  sus  males— 
yo  siempre  los  hallo  iguales 
en  cualquier  senda  que  elijo— 
la  desgracia  tiene  hijos 
aunque  ella  no  tiene  madre. 

Y  al  que  le  toca  la  herencia 
donde  quiera  halla  su  ruína- 
lo que  la   suerte   destina 
no  puede  el  hombre  evitar- 
porqué  el  cardo  ha  de  pinchar 
es   que   nace   con  espina. 

Es  el  destino  del  pobre 
un  continuo  safarrancho, 
y  pasa  como  el  carancho, 
porque  el  mal  nunca  se  sacia 
si  el  viento  de  la  desgracia 
vuela  las  pijas  del  rancho. 

Mas    quien  manda  los  pesares 
manda  también  el  consuelo- 
la  luz  que  baja  del  Cielo 
alumbra  8.1  más  eneumbrao, 
y  hasta  el  pelo  más  delgao 
hace  su  sombra  en  el  suelo. 


Pero  por  más  que  uno  sufra 
un  rigor  que  lo  atormente 
no  debe  bajar  la  frente 
nunca  —por  ningún  motivo  — 
el  álamo  es  más  altivo 
y  gime  constantemente. 

El  indio  pasa  la  vida 
robando  o  echao  de  panza- 
la  única  ley  es  la  lanza 
a  que  se  ha  de  someter- 
lo que  le  falta  en  saber 
lo  suple  con  desconfianza. 

Fuera  cosa  de  engarz-irlo 
a  un  indio  caritativo— 
es  duro  con  el  cautivo, 
le  dan  un  trato  horroroso— 
es  astuto  y  receloso, 
es  audaz  y  vengativo. 

No  hay  que  pedirle  f-vor 
ni  que  aguardar  tolerancia- 
movidos  por  su  inorancia 
y  de  puro  desconfiaos, 
nos  pusieron   separaos 
bajo  sutil  vigilancia. 


No  pude  tener  con  Cruz 
ninguna  conversación- 
no  nos  daban  ocasión, 
nos  trataban  como  ágenos— 
como  dos  años  lo  menos 
duró  esta  separación. 

Relatar   nuestras   penurias 
fuera  alargar  el  asuntó- 
les diré  sobre  este  punto 
que  a  los  dos  años  recién 
nos  hizo  el  cacique  el  bien 
de  dejarnos  vivir  juntos. 

Nos    retiramos    con    Cruz 
a  la  orilla  de  un  pajal— 
por  no  pasarlo  tan  mal 
en  el  desierto  infinito, 
hicimos  como  un  bendito 
con  dos  cueros  de  bagual. 

Fu.'mos  a  esconder  alli 
nuestra  pobre  situación, 
aliviando  con  la  unión 
aquel  duro  cautiverio- 
tristes  como  un  cementerio 
al   toque  de  la  oración. 


Debe  el  hombre  ser  valiente 
si  a  rodar  se  determina, 
primero,   cuando  camina, 
segundo,  cuando  descansa, 
pues  en  aquellas  andanzas 
perece  el  que  se  acoquina. 

Cunado  es  manso  el  ternerito 
en  cualquier  vaca  se  priende— 
el  que  es  gaucho  esto  lo  entiende 
y  ha  de  entender  si  le  digo 
que  andábamos  con  mi  amigo 
como  pan  que  no  se  vende. 

Guarecidos  en  el  toldo 
charlábamos  mano  a  mano- 
éramos  dos  veteranos 
mansos  pa  las  (sabandijas, 
arrumbaos  como  cubijas 
cuando  calienta  el  verano. 

El  alimento  no  abunda 
por  más  empeño  que  se  haga.— 
lo  pasa  uno  como  plaga, 
ejercitando  la  industria— 
y  siempre  como  la  nutria 
viviendo  a  orillas  del  agua. 

En  semejante  ejercicio 
se  hace  diestro  el  cazador- 
caí  el  piche  engordador, 
cai  el  pájaro  que  trina- 
todo  vicho  que  camina 
va  a  parar  al  asador. 

Pues  allí  a.  los  cuatro  vientos 
la  persecución  se  lleva— 
naide  escapa  de  la  leva, 
y  dende  que  la  alba  asoma 
va  recorre  uno  la  loma, 
el  bajo,  el  nido  y  la  cueva. 

El  que  vive  de  la  caza 
a  cualquier  vicho  se  atreve— 
que  pluma  o  cascara  lleve— 
pues  cuando  la  hambre  se  siente 
el  hombre  le  clava  el  diente 
a  todo  lo  que  se  mueve. 

En  las  sagradas  alturas 
está  el  Maestro  principal, 


que  enseña  a  cada  animal 
a.  procurarse  el  sustento, 
y  le  brinda  el  alimento 
a  todo  ser  racional. 

Y  aves  y  vichos  pejes, 
se  mantienen  de  mil  modos- 
pero  el  hombre  en  su  acomodo 
es  curioso  de  oservar: 
es  el  que  sabe  llorar— 
y  es  el  que  los  come  a  todos. 

Antes  de  aclarar  el  día 
empieza  el  indio  a  aturdir 
la  pampa  con  su  rugir, 
y  en  alguna  madrugada., 
sin  que  sintiéramos  nada 
se  largaban  a  invadir. 

Primero  entierran  las  prendas 
en  cuevas  como  peludos; 
v  aquellos  indios  cerdudos 
siempre  llenos  de  recelos, 
en  los  caballos  en  pelos 
se  vienen  medio  desnudos. 

Para   pegar  el   malón 
el  mejor  flete  procuran— 
y  como  es  arma  segura 
vienen  con  la  lanza  sola, 
y  varios  pares  de  bolas 
atados  a  la  cintura. 

De  ese  modo  anda  liviano, 
no  fatiga,  el  mancarrón; 
es  su  espuela  en  el  malón, 
después  de  bien  afilao, 
un  cu  emito  de  venao 
que  se  amarra  en  el  garrón. 

El  indio  que  tiene  un  pingo 

que  se  llega  a  distinguir, 

lo  cuida,  hasta  pa  dormir 

de  ese  cuidao  es  esclavo— 

se  lo  alquila  a  otro  indio  bravo 

cuando  vienen  a  invadir. 

Por  vigilarlo  no  come 
y  ni  aún  el  sueño  concilia— 
sólo  en  eso  no  hay  desidia, 
de  noche,  les  aseguro, 


para   tenerlo  seguro 

le  hace  cerco  la  familia. 

Por  eso  habrán  visto  ustedes, 
si  en  el  caso  se  han  hallao, 
y  si  no  lo  han  oservao 
ténganlo  dende  hoy  presente— 
que  tado  pampa  valiente 
anda  siempre  bien  mantao. 

Marcha   el  indio  al   trote  largo, 
paso  que  rinde  y  que  dura; 
viene   en   dirección  segura 
y  jamás  a  su   capricho- 
no  se  les  escapa  vicho1 
en  la  noche  más  escura. 

Su  señal  es  un  humito 
que  se  eleva  muy  arriba— 
y  no  hay  quien  no  lo  aperciba 
con  esa  vista  que  tienen- 
de    todas    partes   se   vienen 
a  engrosar  la  comitiva. 

Ansina  se  van  juntando, 
hasta  hacer  esas  riuniones 
que  cain  en  las  invasiones 
en  número  tan  crecido— 
atropella  donde  quiera 
de  su  pingo  y  de  su  lanza 
toda  salvación   espera. 

Debe  atarse  bien  la  faja 
quien  aguardarlo   se    atreva; 
siempre  mala  intención  lleva, 
y  como  tiene  alma  grande 
no  hay  plegaria  que  lo  ablande 
ni  dolor  que  lo  conmueva. 

Odia  de  muerte  al  cristiano, 
hace  guerra  sin  cuartel- 
para  matar  es  sin  yel, 
es  fiero  de  condición- 
no  golpea  la  compasión 
en  el  pecho  del  infiel. 

Tiene  la  vista  del  águila, 
del  león  la  temeridá— 
en  el  desierto  no  habrá 
animal  que  él  no  lo  entienda— 


ni  fiera  de  que  no  aprienda 
un  istinto  de  crueldá. 

Es  tenaz  en  su  barbarie, 
no  esperen  verlo  cambiar, 
el  deseo  de  mejorar 
en  su  rudeza  no  cabe— 
el  bárbaro  sólo  sabe 
emborracharse  y   peliar. 

El  indio  nunca  se  ríe 
y  el  pretenderlo  es  en  vano, 
ni  cuando  festeja    ufano 
el  triunfo  en  sus  correrías- 
la  risa  en  sus  alegrías 
le  pertenece  al  cristiano. 

Se  cruzan  por  el  desierto 
como  un  animal  feroz— 
dan   cada  alarido  atroz 
que  hace  erizar  los  cabellos, 
parece  que  a  todos  ellos 
los  ha  maldecido  Dios. 

Todo  el  peso  del  trabajo 

lo  dejan  a  las  mujeres— 

el  indio  es  indio  v  no  quiere 

apiar  de  su  condición, 

ha  nacido  indio  ladrón 

y  como  indio  ladrón  muere. 

El  que  envenenen  sus  armas 
les  mandan  sus  hechiceras— 
y  como  ni  a  Dios  veneran 
nada    a   los   pampas  contiene— 
hasta    los    nombres    que    tienen 
son   de   animales  y  fieras. 

Y   son,  por   Cristo  bendito! 
los  más  desasíaos  del  mundo— 
esos  indios   vagabundos, 
con  repugnancia  me  acuerdo — 
viven  lo  mesmo  que  el  cerdo 
en  esos  toldos  inmundos. 

Naides   puede    imaginar 
una  miseria  mayor— 
su   pobreza    causa  horror- 
no   sabe   aquel   indio  bruto 
que  la  tierra  no  da  fruto 
si  no  la  riega  el   sudor. 


Aquel   desierto   se   agita 
cuando  la  invasión  regresa— 
llevan   miles  de  cabezas 
de  vacuno  y  yeguarizo— 
pa  no  afligirse  es  preciso 
tener  bastante  firmeza. 

Aquello  es  un  hervidero 
de  pampas,  un  celemín— 
cuando  riunen   el  botín 
es  cantidá  tan  tremenda 
juntando    toda   la   hacienda, 
que  no  alcanza  a  verse  el  fin . 

Vuelven  las  chinas  cargadas 
con  las  prendas  en  montón- 
aflige  esa  destrucción- 
acomodaos  en  cargueros 
llevan  negocios  enteros 
que  han  saquiao  en  la  Invasión 

Su  pretensión  es  robar, 
no  quedar  en  el  pantano- 
viene  a  tierra  de  cristianos 
como  furia  del  infierno; 
no  se  llevan  al  Gobierno 
porque  no  lo  hallan  a  mano. 

Vuelven  locos  de  contento 
cuando  han  venido  a  la  fija- 
antes  que  ninguno  elija, 
a  hacerse  la  repartija, 
empiezan   con   todo  empeño, 
como    dijo  un    santiagueño, 

Se   reparten  el  botín 
con   igualdá,   sin  malicia; 
no  muestra  el  indio  codicia, 
ninguna   falta   comete— 
sólo  en  esto  se  somete 
a  una  regla  de  justicia. 

Y  cada,  cual  con  lo  suyo 
a  sus  toldos  enderiesa— 
luego  la  matanza  empieza 
tan  sin  razón  ni  motivo, 
que  no  queda  animal  vivo 
de  esos  miles  de  cabezas. 


Y  satisfecho  el  salvaje 
de  que  su  oficio  ha  cumplido, 
lo   pasa   por   ay  tendido 
volviendo   a   su   haraganiar— 
y  entra  la  china  a  cueriar 
con    un   afán    desmedido. 

A  veces  a.  tierra  adentro 
alguna   punta  se  llevan- 
pero  hay  pocos  que  se  atrevan 
a  hacer  esas  incursiones, 
porque  otros  indios  ladrones 
les   suelen   pelar  la   breva. 

Pero  pienso  que  los  pampas 
deben  de  ser  los  más  rudos— 
aunque  andan   medio  desnudos 
ni  su  convenencia  entienden— 
por  una  vaca  que  venden 
quinientas  matan   al  ñudo. 

Estas  cosas  y  otras  piores 
las   he     visto    muchos  años; 
pero  si  yo  no  me  engaño 
concluyó  ese  bandalaje, 
v  esos   bárbaros    salvajes 
no  podrán  hacer  más  daño. 

Las  tribus  están  desechas, 
los  caciques  más  altivos 
están    muerto?   o   cautivos 
privaos  de  toda  esperanza— 
y  de  la  chusma  y  de  lanza, 
ya  muy  pocos  quedan  vivos. 

Son  salvajes  por  completo 
hasta   pa   su   diversión— 
pues  hacen  una  junción 
que  naides  se  la  imagina; 
recién   le   toca   a   la  china 
el  hacer   su   papelón. 

Cuanto  el  hombre  es  más  salvaje 

trata  pior  a  la  mujer— 

vo  no  sé  que  pueda  haber 

sin  ella,  dicha  ni  goce— 

j feliz  el  que  la  conoce 

v   logra   hacerse    querer! 


Todo  el  que  entiende  la  vida 
busca  a  su  lao  los  placeres- 
justo  es  que  las  considere 
el  hombre  de  corazón— 
sólo  los  cobardes  son 
valientes  con   sus  mujeres. 

Pa  servir  a  un  desgraciao 
pronta   la   mujer   está— 
cuando  en  su  camino  vá 
no  hay  peligro  que  la  asuste, 
ni  hay  una  a  quien  no  le  guste 
una  obra  de  caridá. 

No  se  hallará  una  mujer 
a  la  que  esto  no  le  cuadre— 
yo  alabo  al  Eterno  Padre, 
no   porque   las  hizo  bellas, 
sino  porque  a  todas  ellas 
les  dio  corazón  de  madre. 

Es  piadosa,   y  diligente 
y    sufrida    en    los    trabajos- 
tal  vez  su  valer  rebajo 
aunque  la  estimo  bastante- 
mas  los  indios  inorantes 
la   trata.n   al  estropajo. 

Echan    la    alma  trabajando 
bajo  el  más  duro  rigor— 
el  marido  es  su  señor, 
como   tirano   la  manda— 
porque  el  indio  no  se  ablanda 
ni  siquiera  en  el  amor. 

No   tiene    cariño  a    naides 

ni    sabe    lo    es    amar— 

¡ni    qué    se   puede   esperar 

de   aquellos   pechos  de   bronce! 

yo   los   conocí   al   llegar 

y    los   calé    dende    entonces. 

Mientras  tiene  que  comer 

permanece  sosegao— 

yo  que  en  sus  toldos  he  estao 

y  sus  costumbres  oservo, 

digo   que   es  como   aquel    cuervo 

que  no  volvió  del  mandao. 


Es  para  él  como  juguete 
escupir  un  crucifijo- 
pienso  que  Dios  los  maldijo 
y  ansina  el  ñudo  desato: 
el  indio,  el  cerdo  y  el  gato, 
redaman  sangre  del  hijo. 

Mas  ya  con  cuentos  de  pampas 
no   ocuparé   su  atención- 
debo  pedirles  perdón 
pues  sin  querer  me  distraje, 
por  hablar  de  los  salvajes 
me  olvidé  de  la  junción. 

Hacen   un  cerco  de   lanzas, 
los  indios  quedan  ajuera— 
dentra    la    china    ligera 
como  yeguada   en    la   trilla, 
y  empieza   allí   la  cuadrilla 
a  dar  güeltas  en  la  era. 

A  un  lao  están  los  caciques, 
capitanejos   y  el    trompa- 
tocando  con  toda  pompa 
como  un   toque  de  fagina- 
adentro  muere  la  china, 
sin   que   aquel   círculo  rompa. 

Muchas  veces  se  les  oven 
a   las   pobres   los   quejidos- 
mas   son    1  amentos   perdidos- 
ai  rededor  del  cercao 
en   el  suelo   están   mamaos 
los   indios   dando    alaridos. 

Su  canto  es  una  palabra 
y  de  ay  no  salen  jamás— 
llevan   todas  el   compás 
ioká  -  ioká  repitiendo, 
me  parece  estarlas  viendo 

Al    trote    dentro  del   cerco, 
sudando  hambrientas,  juriosas, 
desgreñadas  y  rotosas 
de  sol  a  sol  se  lo  llevan— 
bailan,  aunque  truene  o  llueva, 
cantando  la  mesma  cosa. 


El   tiempo  sigue  en  su   giro 
y  nosotros  solitarios 
de  los  indios  sanguinarios 
no  teníamos  qué  esperar— 
el  que  nos  salvó  al  llegar 
era  el  más  hospitalario. 

Mostró   noble    corazón, 
cristiano   anelaba    ser- 
la   justicia    es    un    deber, 
la  justicia  es  un  deber, 
y   sus   méritos  no  calló- 
nos   regaló    unos    caballos 
v  a  veces  nos  vino  a  ver. 

A  la  volunta  de  Dios 

ni   con   la   intención    resisto— 

él  nos  salvó—  pero,  ah  Cristo! 

no  nos  hubiera  salvado 

ni  jamás  haberlo  visto. 

muchas  veces  he   deseado 


Quien  recibe  beneficios 
jamás  los  debe  olvidar— 
y  al  que  tiene  que  rodar 
en  su  vida  trabajosa, 
le  pasan  a  veces  cosas 
que   son  duras  de   pelar. 

Vov  dentrando  poco  a  poco 
en  lo  triste  del  pasaje— 
cuando  es  amargo  el  brebaje 
el  corazón  no  se  alegra.— 
dentro  una  virgüela  negra 
que  los  diezmó  a  los  salvajes. 

Al  sentir  tal  mortandá 
los   indios   desesperaos, 
gritaban  alborotaos 
"Cristiano  echando  gualicho" 
no  quedó  en  los  toldos  vicho 
que  no  salió  redotao. 


Sus  remedios  son   secretos, 
los    tienen    las    adivinas- 
no  los  conocen  las  chinas 
sino   alguna    ya   muy   vieja, 
y   es  la   que  los   aconseja 
con    mil    embustes  la    indina. 

Allí    soporta   el    paciente 
las  terribles  curaciones— 
pues  a   golpes  y  estrujones 
son   los   remedios   aquellos— 
lo   agarran    de  los   cabellos 
y    le   arrancan    los    mechones. 

Les  hacen  mil  heregías 
que   el  presenciarlas   da   horror- 
brama  el  indio  de  dolor 
por  los  tormentos  que  pasa— 
y   untándolo   todo   en    grasa 
lo  ponen  a  hervir  al  sol. 

Y  puesto  allí  boca   arriba 
al  rededor  le  hacen  fuego- 
una  china  viene  luego 
y  al  oído  le  da  de  gritos- 
hay    algunos    tan    malditos 
que    sanan    con    este    juego. 


A  otros  les  cuecen  la  boca 
aunque  de  dolores  cruja— 
lo  agarran   allí   y   lo  estrujan, 
labios   le   queman   y   dientes 
con   un  güevo   bien   caliente 
de  alguna    gallina   bruja. 

Conoce   el    indio  el    peligro 
y   pierde    toda   esperanza- 
si   a  escapárseles  alcanza 
dispara  como  una  liebre— 
le  da   delirios  la   fiebre 
y  ya  le  cain  con  la  lanza. 

Esas  fiebres  son   terribles, 
y  aunque  de  esto  no  disputo, 
ni  de  saber  me  reputo, 
será,   decíamos  nosotros, 
de   tanta  carne  de  potro 
como  comen    estos   brutos. 

Había  un  pringuito  cautivo 
que  siempre  hablaba  del  barco- 
y  lo  augaron  en  un  charco 
por  causante  de   la  peste- 
como  potrillito  zarco, 
tenía  los  ojos  celestes 


Que   le  dieran  esa   muerte 
dispuso    una    china    vieja— 
y  aunque  se  aflige  y  se  queja, 
es  inútil  que  resista— 
ponía  el  infeliz  la  vista 
como   la   pone   la  oveja. 

Nosotros  nos  alejamos 
para   no  ver   tanto   estrago- 
Cruz  se    sentía   con    amagos 
de   la   peste  que   reinaba— 
y  la  idea  nos  acosaba 
de    volver  a    nuestros   pagos. 

Pero  contra   el   plan   mejor 

el    destino    se   revela— 

¡la  sangre  se  me  congelaé 

el   que   nos   había   salvado, 

cayó  también    atacado 

de  la  fiebre  y  de  la  virgüela. 

Ya   no   podíamos   dudar, 

al   verlo  en   tal   padecer, 

y   Cruz   que   era    tan    humano: 

"Vamos",   me    dijo,    "paisano, 

el   fin  que   había   de   tener; 

a  cumplir  con  un  deber". 

Fuimos   a   estar   a   su   lado 
para    ayudarlo    a   curar- 
lo vinieron  a  buscar 
y  hacerle  como  a  los  otros— 
lo  defendimos  nosotros, 
no  lo  dejamos  lanciar. 

Iba  creciendo  la  plaga 
y    la    mortandá   seguía, 
a  su   lado  nos   tenía 
cuidándolo  con  pacencia— 
pero  acabó   su   esistencia 
al   fin   de  unos  pocos  días. 

El    recuerdo   me   atormenta, 
se    renueva    mi   pesar- 
me dan  ganas  de  llorar, 
nada  a  mis  penas  igualo 
Cruz  también  cayó  muy  malo 
ya  para  no  levantar. 


Todos  pueden  figurarse 
cuánto  tuve  que  sufrir— 
yo  no  hacía  sino  gemir 
y  aumentaba  mi  aflición 
no   saber   una    oración 
pa   ayudarlo   a   bien    morir. 

Se  le  pasmó  la  virgüela, 
y  el  pobre  estaba  en  un  gritó- 
me  recomendó    un   hijito 
que  en  su  pago  había  dejado— 
"Ha   dejado   abandonado", 
me  dijo  "aquel  pobrecito". 

"Si  vuelve,  búsquemeló", 
me  repetía  a  media  voz— 
"En  el  mundo  éramos  dos 
pues  él  ya  no  tiene  madre: 
que  sepa  el  fin  de  su  padre 
y  encomiende  mi  alma  a  Dios". 
dominao   por   el   dolor— 

Lo   apretaba  contra   el  pecho 
era  su  pena  mayor 
el  morir   allá   entre   infieles- 
sufriendo    dolores    crueles 
entregó  su   alma   al   Criador. 

De  rodillas  a  su  lado 
¡yo  lo  encomendé  a  Jesús!— 
faltó  a  mis  ojos  la  luz- 
tuve   un    terrible    desmayo— 
caí  como  herido  del   rayo 
cuando  lo  vi  muerto  a  Cruz. 

Aquel  bravo  compañero 
en   mis  brazos   espiró; 
hombre   que  tanto   sirvió, 
varón   que  fué   tan  prudente, 
por  humano  v  por  valiente 
en   el   desierto  murió. 

Y  yo  con  mis  propias  manos, 
yo  mesmo  lo   sepulté— 
a  EMos  por  su  alma  rogué 
de  dolor  el  pecho  lleno— 
y  humedeció  aquel  terreno 
el  llanto  que  redamé. 


Cumplí  con  mi  obligación 
no  hay  falta  de  que  me  acuse, 
ni  deber  de  que  me  escuse, 
aunque  de  dolor  sucumba— 
allá  señala    su    tumba 
una  cruz  que  yo  le  puse. 

Andaba  de  toldo  en  toldo 
y  todo  me  fastidiaba— 
y  entregao  al  sentimiento, 
el  pesar  me  dominaba, 
se  me  hacía  cada  momento 
oir  a  Cruz  que  me  llamaba. 

Cual  más  cual  menos  los  criollos 

saben   lo   que  es  amargura— 

en  mi  triste  desventura 

no  encontraba  otro  consuelo 

que  ir  a  tirarme  al  suelo 

al  lao  de  su  sepoltura . 

Allí  pasaba  las  horas 
sin  haber  naides  conmigo— 
teniendo  a  Dios  por  testigo— 
y  mis  pensamientos  fijos 
en  mi  mujer  y  mis  hijos, 
en  mi  pago  y  en  mi  amigo. 

Privado  de   tantos  bienes 
y  perdido  en  tierra  ajena— 
parece  que  se  encadena 
el  tiempo  y  que  no  pasara, 
como  si  el  sol  se  parara 
a  contemplar  tanta  pena. 

Sin  saber  que  hacer  de  mí 
y  entregado  a  mi  af lición, 
estando  allí   una   ocasión, 
del  lado  que  venía  el  viento 
oí   unos   tristes   lamentos 
que   llamaron   mi   atención. 

No  son    raros   los  quejidos 
en   los  toldos  del   salvaje, 
pues  aquel   es  bandalaje 
donde  no  se  arregla  nada 
sino   a   lanza  y   puñalada, 
a   bolazos    y   a   coraje. 
y  aguardó  con  vigilancia. 


No   precisa    juramento, 
deben    creerle    a    Martín    Fierro- 
he  visto  en  ese  destierro 
a    un   salvaje   que   se   irrita, 
degollar   una  chinita 
y  tirársela  a  los  perros. 

He   presenciado  martirios, 
he    visto   muchas   crueldades- 
crímenes   y   atrocidades 
que   el   cristiano    no  imagina; 
pues  ni   el    indio   ni    la   china 
sabe   lo  que   son   piedades. 

Quise  curiosiar  los  llantos 
que  llegaban  hasta  mí— 
al   punto   me   dirigí 
al   lugar  de   ande  venían- 
me   horroriza    todavía 
el   cuadro   que   descubrí! 

Era    una    infeliz    mujer 
que  estaba  de  sangre  llena— 
y  como  una   Madalena 
lloraba   con    toda  gana- 
conocí    que    era    cristiana 
y   esto   me   dio   mayor   pena, 
a  un  indio  que  estaba  al  lao; 

Cauteloso   me   acerqué 
siempre  de  todo  cristiano, 
porque  el  pampa  es  desconfiao 
y  vi  que  tenía  en  la  mano 
el   rebenque  ensangrentao. 

Más  tarde  supe  por  ella, 
de  manera  positiva, 
que  dentro  una  comitiva 
de  pampas  a  su  partido, 
mataron  a  su  marido 
y  la  llevaron  cautiva. 

En   tan  dura   servidumbre 
hacían  dos  años  que  estaba— 
un   hijito  que  llevaba 
a  su  lado  lo  tenía- 
la  china   la   aborrecía 
tratándola  como  esclava. 


Deseaba  para  escaparse 
hacer  una  tentativa— 
pues  a  la  infeliz  cautiva 
naides  la  va  a  redimir, 
y   allí    tiene  que   sufrir 
el  tormento   mientras   viva. 

Aquella  china  perversa 
dende  el  punto   que  llegó, 
crueldá  y  orgullo  mostró 
porque  el   indio  era  valiente- 
usaba    un    collar  de    dientes 
de  cristianos  que  él  mató. 

La  mandaba   trabajar 
poniendo  cerca    a    su   hijito 
tiritando  y  dando   gritos 
por  la  mañana  temprano, 
atado  de   pies  v  manos 
lo  mesmo   que    un    corderito. 

Ansí  le  imponía  tarea 
de  juntar  leña  y  sembrar 
y    hasta    que    no    terminaba, 
viendo  a   su   hijito  llorar, 
la  china  no  la  dejaba 
que  le   diera   de   mamar. 

Cuando    no    tenían    trabajo 
la  emprestaban  a  otra  china— 
naides,    decía,    se   imagina, 
ni  es  capaz  de  presumir 
cuánto    tiene  que    sufrir 
la  infeliz  que  está   cautiva. 

Si  ven  crecido  a  su  hijito, 
como  de  piedá  no  entienden, 
cuando   no   es   éste   es  el  otro, 
se  lo  quitan  y  lo  venden 
o  lo  cambian  por  un  potro. 

En  la  crianza  de  los  suyos 
son  bárbaros  por  demás— 
no   lo   había   visto   jamás; 
en   una   tabla  lo  atan, 
los  crían  ansí,  y  les  achatan 
la   cabeza   por   detrás. 

Aunque   esto   parezca  estraño 
ninguno    lo   ponga    en    duda; 
entre    aquella    gente   ruda, 
en  su  bárbara   torpeza, 


es  gala   que   la   cabeza 
se  les  formepuntiaguda. 

Aquella   china    malvada 
que   tanto  la   aborrecía, 
empezó   a    decir   un    día, 
porque    falleció  una  hermana, 
que   sin    duda    la    cristiana 
le  había  echado  brujería. 

El    Indio   la    sacó  al  campo 
y  la  empezó  a  amenazar 
que  la  había  de  confesar 
si  la  brujería  era  cierta; 
o  que  la  iba  a  castigar 
hasta   que   quedara  muerta. 

Llórala    pobre    afligida, 
pero  el  Indio  en  su  rigor 
le   arrebató   con    furor 
al  hijo  de  entre  sus  brazos, 
v    del   primer   rebencazo 
la  hizo   crujir   de   dolor. 

Que   aquel   salvaje   tan   cruel 
azotándola  seguía— 
más  y  más  se  enfurecía 
cuanto   más   la   castiagaba, 
v  la   infeliz  se    atajaba 
los  golpes  como  podía . 

Que  le  gritó  muy  furioso 
"Confechando    no  querés"— 
la  dio  vuelta  de  un  revés, 
y  por  colmar  su   amargura 
a   su   tierna  criatura 
se   la   degolló  a  los  pies. 

"Es  increíble",  me  decía, 
"que  tanta  fiereza  esista— 
no  habrá  madre  que  resista, 
aquel    salvaje    inclemente 
cometió    tranquilamente 
aquel   crimen   a    mi    vista"í 

Esos   horrores    tremendos 
no  los  inventa   el   cristiano— 
"Ese   bárbaro   inhumano", 
sollozando  me  lo  dijo, 
"me  amarró  luego  las  manos 
con   las  tripitas  de  mi  hijo". 


De    ella   fueron    los   lamentos 
que  en  mi  soledá  escuché— 
en  cuanto  al  punto  llegué 
quedé   enterado    de    todo- 
ai  mirarla  de  aquel  modo 
ni  un  instante  titubié. 

Toda  cubierta  de  sangre 
aquella  infeliz  cautiva, 
tenía  dende  abajo  arriba 
la  marca  de  los  lazazos— 
sus   trapos   hechos  pedazos 
mostraban  la   carne  viva. 

Alzó  los  ojos  al  Cielo 
en  sus  lágrimas  bañada, 
tenía  las  manos  atadas, 
su   tormento  estaba  claro; 
y  me  clavó  una  mirada 
como  pidiéndome  amparo. 

Yo  no  sé  lo  que  pasó 
en  mi  pecho  en  ese  istante, 
estaba  el  Indio  arrogante 
con  una   cara  feroz: 
para   entendernos   los  dos 
la   mirada   fue  bastante. 

Pesó  un  brinco  como  gato 
y  me  ganó  la  distancia- 
aprovechó  esa  ganancia 
como  fiera   cazadora- 
desató  las  boliadoras 

Aunque  yo  iba  de  curioso 
v  no  por  buscar  contienda, 
al  pingo  le  até  la  rienda, 
eché  mano  dende  luego 
a  éste   que   no  verra  fuego, 
y  va  se  armó  la  tremenda. 


Se  debe  ser  precavido 
cundo  el  indio  se  agazape— 
en   esa  postura  el  tape 
val  3  por  cuatro  o  por  cinco- 
como  el  tigre  es  para  el  brinco 
y  fácil   que  a  uno  lo   atrape. 

Peligro  era    atropellar 
y  era  peligro  seguir 
esperando  de  este   modo, 
pues  otros  podían   venir 
y  carniarme  allí  entre  todos. 

A   juerza   de   precaución 
muchas  veces  he  salvado, 
pues  en   un   trance  apurado 
es  mortal  cualquier  descuido- 
si  Cruz  hubiera  vivido 
no   habría  tenido   cuidado. 

Un   hombre  junto  con  otro 
en  valor  y  juerza  crece— 
el   temor   desaparece, 
escapa   de  cualquier    trampa- 
entre  dos,  no  digo  a  un  pampa, 
a  la  tribu  si  se  ofrece. 

En    tamaña    incertidumbre, 
en  trance  tan  apurado, 
no  podía   por  descontado 
sino  dando  al  indio  muerte 
escaparme    de   otra   suerte, 
o  quedando  allí  estirado. 

Y  como  el  tiempo  pasaba 
y   aquel   asunto  me  urgía, 
como  a  agarrarle  el   caballo 
me    fué  medio  de   soslayo 
viendo  que  él  no  se  movía 
a  ver  si   se  me  venía. 


El  peligro  en    que   me  hallaba 
al  momento  conocí- 
nos  mantuvimos  ansí, 
me  miraba  v  lo  miraba: 
yo  al  indio   le  desconfiaba 
y  él  me  desconfiaba   a  mí. 


Ansí  fué,   no   aguardó  más 
y   me  atropello  el    salvaje- 
es   preciso  que   se   ataje 
quien   con   el  ndio  pelee— 
el  miedo  de  verse  a  pié 
aumentaba    su    coraje. 


En   la   dentrada   no  más 
me  largó   un   par  de   bolazos— 
uno  me    tocó   en    un  brazo, 
si  me  da   bien  me   lo  quiebra— 
pues  las  bolas  son   de  piedra 
y   vienen    como  balazo. 

A  la    primer    puñalada 
el   pampa   se   hizo   un   ovillo- 
era   el  salvaje   más   pillo 
que   he   visto   en   mis  correrías- 
y  a  más  de  las  picardías 
arisco  para   el    cuchillo. 

Las   bolas   las   manejaba 
aquel  bruto  con  destreza 
las  recogíacon    presteza 
y  me  las  volvía  a  largar, 
haciéndomelas    silvar 
arriba  de  la   cabeza.  • 

Aquel  indio,   como   todos, 
era  cauteloso  — ay  juna! 
ay  me  valió  la  fortuna 
de  que  peliando  se  apotra, 
me  amenazaba   con  una 
y  me  largaba  con   otra. 

Me  sucedí   una   desgracia 
en  aquel    percance   amargo, 
en   momentos   que  lo   cargo 
y  que  él  reculando  vá— 
me  enredé  en  el  chiripá 
y  cai   tirao  largo   a  largo. 

Ni   pa   encomendarme  a   Dios 
tiempo   el  salvaje   me   dio- 
cuanto  en  el  suelo  me  vio 
me  saltó   con   ligereza— 
juntito  de  la  cabeza 
el    bolazo    retumbó . 

Ni    por   respeto   al  cuchillo 

dej   óel   indio  de   apretarme— 

allí    pretende   ultimarme 

sin    dejarme    levantar— 

y  no   me   daba   lugar 

ni   siquiera   a  enderezarme. 


De  valde    quiero    moverme 
aquel   indio  no  me   suelta- 
como  persona  resuelta 
toda    mi    juerza    ejecuto- 
pero   abajo    de    aquel   bruto 
no  podía   ni  darme  güelta. 

¡Bendito    Dios    poderoso, 
quien    te   puede  comprender! 
cuando  a   una  débil  mujer 
le  diste   en   esa   ocasión 
la  juerza  que  en  un  varón 
tal   vez   no  pudiera   haber. 

Esa    infeliz    tan   llorosa 
viendo   el   peligro   se  anima- 
corno   una  flecha   se  arrima, 
y  olvidando  su   af lición, 
que  me  lo  sacó  de  encima, 
le  pegó  al  indio  un  tirón 

Ausilio    tan   generoso 
me    libertó    del    apuro- 
si   no   es  ella,  de   seguro 
que   el   indio  me    sacrifica— 
y    mi    valor    se    duplica 
con    un   ejemplo   tan   puro. 

En    cuanto   me    enderecé 
nos   volvimos    a    topar- 
no    se   podía    descansar 
y   me  chorriaba   el  sudor— 
en  un  apuro  mayor 
jamás   me   he    vuelto   a  encontrar 

Tampoco  vo   le  daba    alce 
como    deben    suponer- 
se había   aumentado  mi  quehacer 
para   impedir   que   el  brutazo 
le   pegara    algún    bolazo 
de   rabia    a    aquella   mujer. 

La  bola   en   manos  del   indio 
es   terrible   y   muy   ligera— 
hace   de   ella  lo   que  quiera 
saltando    como    una    cabra- 
mudos—    sin    decir   palabra, 
peliábamos    como    fieras. 


-.  » 


^S. 


M 


% 


k 


Aquel    duelo   en   el    desierto 
nunca   jamás  se  me   olvida, 
iba   jugando   la   vida 
con    tan    terrible    enemigo, 
teniendo    allí    de    testigo 
a    una    mujer    afligida. 

Cuanto   él    más    se    enfurecía 
yo    más   me    empiezo    a    calmar— 
mié    xas  no  logra  matar 
el     udio   no   se    desfoga; 
al  fin  le   corté   una   soga 
y   lo   empecé   a   aventajar. 

Me    hizo   sonar    las    costillas 
de    un    bolazo    aquel    maldito; 
y  al   tiempo  que  le  di  un  grito 
y    le    dentro    como    bala, 
pisa   el    indio,    y    se    refala 
en  el   cuerpo   del   Chiquito. 

Para    esplicar    el    misterio 
es  muy   escasa   mi   cencía— 
lo  castigó,    en    mi    concencia, 
su    Divina    Magestá— 
donde    no    hay   casualidá 
suele  estar    la    Providencia. 

En    cuanto    trastabilló 
más  de  firme  lo  cargué, 
y  aunque   de   nuevo  hizo  pié 
lo    perdió    aquella    pisada; 
pues    en    esa    atropellada 
en   dos  partes   lo  corté. 

Al    sentirse   lastimao 
se   puso   medio   afligido- 
pero    era   indio    decidido, 
su    valor  no  se   quebránta- 
le   salían    de    la    garganta 
como  una   especie  de  aullidos. 

Lastimao   en    la  cabeza 

la  sangre   lo  enceguecía; 

de   otra   herida  le   salía 

haciendo  un    charco    ande   estaba— 

con   los  pies  la   ehapaliaba 

sin    aflojar   todavía. 


Tres    figuras    imponentes 
formábamos   aquel    temo— 
ella    en    su    dolor   materno, 
yo   con   lengua   dejuera, 
y   el   salvaje   como  fiera 
disparada  del   infierno. 

Iba    conociendo  el    indio 
que  tocaban  a  degüello— 
se   le    erizaba   el    cabello 
y  los   ojos  revolvía- 


Al    fin    de    tanto    lidiar, 
en   el   cuchillo   lo   aleé— 
en   peso   lo   levanté 
aquel    hijo    del    desierto- 
ensartado   lo    llevé, 
y  allá   recién   lo  largué 
cuando  ya   lo    sentí  muerto. 

Me    persiné    dando    gracias 
de    haber    salvado    la   vida; 
aquella    pobre    afligida 
de   rodillas   en   el   suelo, 
alzó    sus    ojos   al    Cielo 
sollozando    dolorida . 

Me   hinqué   también   a   su   lado 
a    dar    gracias    a   mi    Santo— 
en    su   dolor    y    quebranto 
ella   a   la   Madre  de  Dios 
le    pide    en    su    triste   llanto 
que    nos   ampare    a   los    dos. 

Se   alzó   con   pausa   de   leona 
cuando    acabóde    implorar— 
y    sin    dejar    de   llorar 
envolvió    en     unos     trapitos 
los   pedazos    de   su    hijito 
que    yo    le   ayudé    a   juntar. 

Dende    ese     puinto    era    juerza 

abandonar    el    desierto, 

pues    me    hubieran    descubierto; 

v  aunque   lo   maté  en   pelea, 

de  fijo  que  me   lancean 

por    vengar    al    indio    muerto. 


A   la    afligida    cautiva 
mi   caballo   le   ofreci- 
era   un    pingo   que   alquiri, 
y  donde  quiera   que  estaba 
en  cuanto  yo  lo  silvaba 
venía   a   refregarse   en   mí. 

Yo  me  le  senté  al  del  pampa; 
era   un   oscuro   tapao— 
cuando    me    hallo    bien    montao 
de    mis    casillas  -me    salgo— 
y  era   un  pingo   como   galgo 
que  sabía  correr  boliao. 

Para   correr  en   el  campo 
no    hallaba    ningún    tropiezo- 
Ios  ejercitan    en    eso 
y    los    ponen    como   luz 
de    dentrarle    a    un   avestruz 
y   boliar   bajo   el   pescuezo. 

El    pampa  educa    al    caballo 
como    para   un    entrevero- 
como  rayo  es  de  ligero 
en  cuanto  el  indio  lo   toca— 
y   como    trompo  en   la   boca, 
da  güeltas  sobre  de  un   cuero. 

Lo  varea  en  la  madrugada- 
jamas   falta   a    este   deber— 
luego  lo  enseña   a   correr 
entre    fangos   y   guadales— 
ansina    esos    animales 
los  labios   se  le  perdían 
cuando   iba    a    tomar    resuello. 

En   el  caballo  de  un   pampa 
no   hay    peligro    de    rodar— 
jué    pucha    —y   pa    disparar 
es  pingo  que  no  se  cansa— 
con    prolijidá    lo    amansa 
sin    dejarlo    corcobiar. 

Pa   quitarle    las   cosquillas 
con   cuidao   lo  manosea- 
horas  enteras   emplea, 


y    por    fin   solo   lo  deja 
cuando  agacha  las  orejas 
y  ya  el  potro  ni  cocea. 

Jamás  le  sacude  un   golpe, 
porque  lo  trata  al   bagual 
con  pacencia  sin  igual, 
al  domarlo  no  le  pega, 
hasta  que  al  fin  se  le  entrega 
ya   dócil  el  animal. 

Y  aunque  yo  sobre  lo.   bastos 

me  sé   sacudir  el  polvo- 

a   esa  costumbre  me  amoldo— 

con    pacencia    lo    manejan, 
y    al    día    siguiente   lo   dejan 
rienda    arriba    junto   al    toldo. 

Ansí  todo  el  que  procure 
tener   un   pingo   modeló- 
lo  ha  de  cuidar   con   desvelo, 
v  debe  impedir   también 
el   que  de  golpes  le  den 
o   tironeen   en    el    suelo. 

Muchos    quieren    dominarlo 
con  el  rigor  y  el  azote, 
y  si  ven   al  chafalote 
que   tiene  trazas   de   malo, 
lo   embraman    en    algún    palo, 
hasta    que   se   descogote. 

Todos  se  vuelven   pre testos 
y  güeltas    para    ensillarlo— 
dicen  que   es    por  quebrantarlo, 
mas  compriende  cualquier  bobo, 
que  es  miedo  del  corcobo 
y   no   quieren    confesarlo. 

El    animal    yeguarizo, 
Perdónenme    esta    alvertencia, 
es  de  mucha  conocencia 
y  tiene  mucho  sentido- 
es  animal  consentido, 
lo  cautiva  la  pacencia. 


Aventaja  a  los  demás 
el   que   estas  entienda- 
es  bueno  que  el  hombre  aprienda, 
pues   hay   pocos  domadores, 
y  muchos  frangolladores 
que  andan   de  bozal  y  rienda. 

Me  vine  como  les  digo 
trayendo    esa    compañera- 
marchamos    la    noche    entera 
haciendo  nuestro  camino 
sin  más  rumbo  que  el  destino 
que    nos   llevara   ande    quiera. 

Al   muerto,   en    un   pajonal 
había    tratao    de    enterrarlo, 
y    después   de  maniobrarlo 
lo  tapé  bien  con  las  pajas, 
para   llevar    de    ventaja 

En    notando    nuestra   ausencia 

lo  que   emplearan   en   hallarlo. 

nos   habéan   de    perseguir— 

y  al  decidirme  a  venir, 

con    todo  mi    corazón 

hice    la    resolución 

de    peliar   hasta    morir. 

Es  un   peligro  muy  serio 
cruzar  juyendo  el  desierto- 
muchísimos  de  hambre  han  muerto, 
pues  en  tal  desasosiego 
no   se  puede  ni   hacer  fuego 

Sólo  el    albitrio    del    hombre 
puede   ayudarlo  a    salvar- 
no  hay  uasilio  que  esperar, 
sólo   de   Dios  hay   amparo— 
en   el   desierto  es  muy  raro 
que  uno  se  pueda  escapar. 

Todo   es   cielo    y   horizonte 
en    inmenso    campo    verde! 
j Pobre  de   aquel   que   se  pierde 
o  que   su   rumbo  estravea! 
si   alouien    cruzarlo  desea 
este  consejo   recuerde. 


Marque   su    rumbo   de    día 
con   toda   fidelidá — 
marche    con    puntualidá 
siguiéndolo  con   fijeza, 
y  si  duarme,  la  cabeza 
ponga  para  el   lao  que  vá. 

Oserve   con    todo   esmero 
adonde  el   sol   aparece- 
si  hay  neblina  y  le  entorpece 
y  no  lo  puede  oservar, 
guárdese    de    caminar, 
pues  quien  se  pierde  pereceí 

Dios  le  dio  istintos  sutiles 
a   toditos  los   mortales— 
el   hombre  es  uno  de   tales, 
y  en   las  llanuras  aquellas 
lo    guían   el   sol,    las   estrellas, 
el  viento  y   los  animales. 

Para  ocultarnos  de  día 

a  la  vista  del  salvaje, 

ganábamos    un   paraje 

en    que    algún    abrigo    hubiera- 

a    esperar    que    anocheciera 

para    seguir    nuestro    viaje. 

Penurias   de    toda   clase 
y   miserias    padecimos— 
varias  veces  no  comimos 
o  comimos   carne   cruda, 
y  en   otras,  no  tengan  duda, 
con   raíces   nos   mantuvimos. 

Después   de   mucho   sufrir 
tan  peligrosa   inquietu— 
alcanzamos    con    salú 
a   divisar  una  sierra— 
y  al  fin  pisamos  la  tierTa 
en  donde   crece   el   ombú. 

Nueva   pena  sintió  el  pecho 
por  Cruz  en   aquel  paraje— 
y   en  humilde  vasallaje 
a   la  Magestá   infinita 
besé   esta   tierra   bendita 
que   ya   no  pisa  el  salvaje. 


Al   fin   la   misericordia 
de  Dios  nos  quiso  amparar- 
es preciso  soportar 
los   trabajos  con   costancia— 
alcanzamos  a   una  Estancia 
después  de   tanto  penar 

Ay  mesmo  me  despedí 
de   mi    infeliz    compañera— 
"Me  voy",    le    dije,    "ande    quiera, 
aunque   me   agarre  el   Gobierno, 
puss   infierno  por   infierno, 
prefiero   el   de   la   frontera". 

Concluyo  esta  relación, 
ya   no  puedo  continuar— 
permítanme   descansar, 
están  mis  hijos  presentes, 
y   yo    ansioso  porque    cuenten 
lo  que  tengan   que  contar. 

Y  mientras   que   tomo  un   trago 
pa  refrescar    el   garguero— 
y  mientras  tiempla  el  muchacho 
y  prepara   su  estrumento— 
les  contaré  de  que  modo 
tuvo  lugar  el  encuentro— 
me  acerqué  a  algunas  Estancias 
por  saber   algo  de  cierto, 
creyendo  que  en  tantos  años 
esto  se  hubiera   compuesto; 
pero  cuanto  saqué  en  limpio 
fué    que    estábamos    lo  mesmo. 

Ansí   me   dejaba   andar 
batiéndome  el    chancho  rengo, 
porque  no    me    convenía 
revolver  el   avispero; 
pues  no  inorarán  ustedes 
que  en  cuentas  con   el  Gobierno 
tarde  o  temprano  lo  llaman 
al  pobre  a  hacer  el   arreglo. 

Pero  al  fin  tuve  la  suerte 
de   hallar    un   amigo    vie]o, 
que  de   todo  me   informó, 


y  por  él  supe  al  momento 
que  el  Juez  que  me  perseguía 
hacía    tiempo  que  era   muerto: 
por  culpa   suya  he  pasado 
diez    años   de    sufrimiento, 
y   no  son   pocos   diez   años 
para   quien   ya   llega  a   viejo. 

Y  los   he   pasado  ansí, 

si  en   mi   cuenta   no  me   yerro: 
tres   años  en    la   frontera, 
dos    como    gaucho    matrero, 
y   cinco   allá    entre  los   Indios 
hacen    los    diez    que    yo   cuento 

Me   dijo   a   más  ese  amigo 
que    anduviera    sin    recelo, 
que   todo   estaba    tranquilo, 
que  no  perseguía  el  Gobierno. 
Que  ya  naides  se  acordaba 
de  la  muerte  del  moreno— 
aunque   si  yo   lo  maté 
mucha   culpa  tuvo  el   negro. 

Estuve  un  poco  imprudente 
puede    ser,   yo  lo   confieso, 
pero   él   me   precipitó 
porque   me   cortó   primero— 
y  a   más  me   cortó  en   la   cara 
que  es   un    asunto   muy   serio. 

Me   aseouró   el    mesmo   amigo 
que   ya   no  había   ni  el   recuerdo 
de  aciuel  que  en  la  pulpería 
lo  deie  mostrando  el  sebo. 
El    de  engreído   me   buscó 
vo   ninguna    culpa    tengo; 
el  mismo  vino  a   neliarme, 

V  tal   vez  me   hubiera  muerto 
si    le    tengo  más   confianza 

o  soy  un  poco  más  lerdo— 
fué   suya    toda   la    culpa 
porque  ocasionó   el    suceso. 


Que  ya  no  hablaban   tampoco, 

me  lo   dijo  muy  de  cierto, 

de  cuando  con  la   partida 

Deirué  a  tener  el  encuentro. 

Esa  vez  me   defendí 

como  estaba    en    mi    derecho, 

porque  fueron   a   prenderme 

de  noche   y   en   campo  abierto— 

se  me  acercaron   con  armas, 

y  sin  darme  voz  de  preso 

me  amenazaron  con   armas, 

y  sin  darme  voz  de  preso 

me  amenazaron   a   gritos 

de  un  modo  que  daba  miedo— 

que  iban  a  arreglar  mis  cuentas, 

tratándome   de   matrero, 

y  no  era  el  Gefe  el   que  hablaba 

sino  un   cualquiera   de   entre  ellos. 

Y  ese  me  parece  a  mí 

no  es  modo  de   hacer  arreglos, 

ni  con  el  que  es  inocente, 

ni   con  el   culpable  menos. 

Con    semejantes  noticias 
yo  me  puse  muy   contento 
y  me  presenté  ande  quiera 
como  otros  pueden  hacerlo. 
De  mis  hijos  he  encontrado 
sólo  a  dos  hasta  el  momento— 
y  de  ese  encuentro  feliz 
le  doy  las  gracias  al  cielo. 
A   todos  cuantos  hablaba 
les  preguntaba  por  ellos, 
mas   no   me  daba   ninguno 
razón   de   su   paradero— 
casualmente  el   otro   día 

llegó  a   mi   conocimiento 
de  una  carrera  muy  grande 
entre  varios   estancieros— 
y  fui  como  uno  de  tantos 
aunque   no  llevaba   un   medio. 

No  faltaban,   ya   se  entiende, 
en    aquel  gauchaje   inmenso, 
muchos  que  ya  conocían 
la  historia  de  Martín  Fierro; 
y  allí  estaban  los  muchachos 


cuidando   unos   parejeros- 
cuanto  me  oyeron   nombrar 
se   vinieron   al   momento, 
diciéndome   quienes    eran 
aunque   no  me  conocieron, 
porque  venía  muy  aindiao 
y  me  encontraban   muy  viejo. 

La  junción   de  los  abrazos, 
de  los  llantos  y  los  beses 
se  deja  pa  las  mujeres 
como  que  entienden  el  juego. 
Pero  el  hombre  que  compriende 
que  todos  hacen  lo  mesmo, 
en  público  canta  y  baila 
abraza   y   llora   en    secreto. 

Lo   único  que   me  han    contado 
es  que  mi  mujer  ha  muerto 
Que  en  procuja  de  un  muchacho 
se  fué  la  infeliz  al  pueblo, 
donde   infinitas    miserias 
habrá  sufrido  por  cierto. 
Que   por  fin   a  un   hospital 
fué  a  parar  medio  muriendo, 
y  en  ese  abismo  de  males 
falleció   al    muy  poco    tiempo. 

Les  juro  que  de  esa  pérdida 
jamás   he   de   hallar   consuelo; 
muchas  lágrimas  me  cuesta 
dende  que   supe   el   suceso. 
Mas  dejemos   cosas   tristes 
aunque   alegrías  yo  no  tengo; 
me  parece  que  el  muchacho 
ha    templao    y    está    dispuesto. 
Vamos   a  ver   qué  tal   lo  hace, 
y   juzgar   su   desempeño. 

Ustedes  no  los  conocen, 
yo   tengo    confianza    en    ellos— 
no    porque    lleven   mi    sangre, 
eso  fuera  lo  de  menos, 
sino   porque  dende   chicos 
han   vivido  padeciendo. 
Los  dos  son  aficionados- 
Íes  gusta  jugar  con  fuego, 
vamos  a  verlos  correr- 
son  cojos.  .  .   hijos  de  rengo. 


La  fenitencueña 

Aunque  el   gajo   se   parece 
al   Árbol  de    donde   sale, 
solía    decirlo    mi    madre 
y    en    su    razón  estoy  fijo: 
"Jamás  puede  hablar  el  hijo 
con    la   autoridá  del   padre". 

Recordarán  que   quedamos 
sin   tener  donde   abrigarnos— 
ni  ramada  ande  ganarnos 
ni   rincón    donde   meternos, 
ni  camisa  que  ponernos 
ni   poncho  con   qué  taparnos. 

Dichoso  aquel  que  no  sabe 
lo  que  es  vivir  sin  amparo— 
yo  con  verdá  les  declaro, 
aunque  es  por  demás  sabido— 
dende  chiquito  he  vivido 
en   el   mayor   desamparo. 

No  le  merman   el  rigor 
los  mesmos  que  lo  socorren- 
tai  vez  porque  no  se  borren 
los  decretos  del   destino, 
de  todas  partes  lo  corren 
como   ternero   dañino. 

Y  vive   como   los  vichos 
buscando  alguna   rendija— 
el  güerfano  es  sabandija 
que    no   encuentra    compasión, 
y  el   que   anda   sin  dirección 
es  guitarra  sin  clavija. 

Sentiré  que  cuanto  digo 
a   algún    oyente    le    cuadre— 
ni  casa  tenía,  ni  madre, 
ni    parentela,ni   hermanos; 
y  todos   limpian   sus  manos 
en  el   que   vive   sin   padre. 

Lo  cruza  éste  de   un  lazazo, 

lo  abomba  aquél  de  un  moquete, 

otro   le  busca   el  cachete. 


y  entre  tanto  soportar, 
suele  a   veces   no  encontrar 
ni  quien   le  arroje  un   soquete. 
Si  lo  recogen  lo  tratan 
con   la   mayor  rigidez- 
piensan    que   es   mucho   talvez, 
cuando  ya  muestra  el   pellejo, 
si   le  dan  un   trapo  viejo 
pa  cubrir  su  desnudez. 


Me   crié  pues,  como   les   digo, 
desnudo  a  veces  y  hambriento, 
me  ganaba  mi  sustento, 
y  ansí  los  años  pasaban- 
ai  ser  hombre  me  esperaban 
otra  clase   de    tormentos. 

Pido  a  todos  que  no  olviden 
lo  que  les  voy  a  decir— 
en  la  escuela  del  sufrir 
he   tomado  mis  leciones— 
y  hecho  muchas  refleciones 
dende  que  empecé  a  vivir. 

Si    alguna    falta   cometo 

la  motiva   mi   inorancia, 

no    vengo    con    arrogancia, 

y   les  diré   en    conclusión 

que   trabajando  de   pión 

me  encontraba  en   una  Estancia. 

El  que    manda    siempre  puede 

hacerle    al   pobre   un    calvario— 

a  un   vecino  propietario 

un  boyero  le  mataron— 

y  aunque  a  mí  me  lo  achacaron, 

salió  cierto  en  el  sumario. 

Piensen    los  hombres    honrados 
en    la    vergüenza    y  la   pena 
de  que    tendría    el    alma    llena 
al   verme   ya    tan    temprano 
igual   a    los  que   sus   manos 
con    el   crimen   envenenan . 


Declararon  otros  dos 
sobre   el   caso   del   dijunto— 
mas  no  se  aclaró  el  asunto, 
y  el  Juez,   por  darlas  de  listo, 
"Amarrados    como    un    Cristo", 
nos    dijo,    "irán    todos    juratos\ 

"A    la    Justicia    Ordinaria 
voy  a  mandar  a  los  tres"— 
tenía  razón  aquel   Juez, 
y   cuantos   ansí   amenacen; 
ordinaria.  .  .    es   como   la  hacen, 
lo  he  conocido  después. 

Nos    remitió   como  digo 
a   esa    Justicia    Ordinaria— 
y  fuimos  con  la   sumaria 
a  esa  cárcel    de   malevos, 
que   por  un  bautismo  nuevo 
le  llaman   Penitenciaria. 

El   porqué   tiene  ese  nombre 
naides  me  lo   dijo   a  mi- 
mas yo  me  lo  esplico  ansí: 
le    dirán    Penitenciaria 
por  la   penitencia  diaria 
que    se    sufre    estando  allí. 

Criollo    que   cai    en    desgracia 
tiene   que    sufrir   no   poco— 
naides  lo    ampara    tampoco 
si   no  cuenta  con   recursos— 
el  gringo  es  de  más  discurso, 
cuando  mata   se   hace   el   loco. 

No  sé  el  tiempo  que  corrió. 
en    aquella    sepultura— 
sí   de  ajuera  no  lo  apuran, 
el   asunto  va   con   pausa- 
timen  la  presa   segura 
y     dejan  dormir  la  causa. 

inora   el   preso   a   qué   lado 
se   inclinará   la   balanza- 
pero  es  tanta  la  tardanza, 
que    yo    les   digo  por   mi- 
el  hombre  que   dentre  allí 
deje   ajuera    la    esperanza. 


Sin  perfeccionar  las  leyes 
perfeccionan   el  rigor- 
sospecho  que   el  inventor 
habrá   sido  algún   maldito— 
por   grande   que   sea    un  delito 
aquella  pena  es  mayor. 

Eso   es  paca   quebrantar 

el  corazón  más  altivo— 

los    llaveros    son   pasivos, 

pero  más    secos   y   duros 

tal    vez    que    los    mesmos   muros 

en  que  uno  gime  cautivo. 

No   es    en    grillos  ni  en    cadenas 

en   lo  que  usté  penará 

sino  en   una   soledá 

y    un    silencio    tan    projundo 

que  parece  que  en  el  mundo 

es  el  único  que  está. 

El  más  altivo  varón 
y  de  cormillo  gastao, 
allí  se  vería  agobiao 

o- 

y   su    corazón    marchito, 
al  encontrarse  encerrao 
a  solas  con  su  delito. 

En  esa  cárcel  no  hay  toros, 
allí   todos   son  corderos; 
no  puede  el  más  altanero, 
al  verse  entre  aquellas  rejas, 
sino  amujar  las  orejas 
y  sufrir  callao  su  encierro. 

Y  digo  a  cuantos  inoran 
el  rigor  de  aquellas  penas— 
yo  que  sufrí  las  cadenas 
del  destino  y  su  inclemencia: 
que  aprovechen  la  esperencia, 
del  mal  en  cabeza  apena. 

o 

Ay!    madres,   las   que  dirigen 
al  hijo  de  sus  entrañas, 
no   piensen    que  las  engaña, 
ni    que    les   habla    un    falsario; 
lo  que  es  el   ser  presidario 
no    lo    sabe   la    campaña. 


Hijas,    esposas,    hermanas, 
cuantas   quieren    a    un   varón- 
díganles   que  esa   prisión 
es  un  infierno  temido— 
donde  no  se  oye  más  ruido 
que  el  latir  del  corazón. 

Allá  el  día  no  tiene  sol, 
la  noche  no   tiene  estrellas— 
sin  que  le  valgan  querellas 
encerrao  lo  purifican— 
y  sus  lágrimas  salpican 
en  las  paredes  aquellas. 

En   soledá   tan   terrible 
de  su   pecho  oye   el   laudó- 
lo sé,  porque  lo  he  sufrido 
y  créamelo  el  auJi  torio, 
tal   vez  en    el    purgatorio 
las  almas  hagan  más  ruido. 


Cuenta  esas  horas  eternas 
para  más  atormentarse, 
su  lágrima  al  redamarse 
calcula   en   sus  afliciones, 
contando   sus  pulsaciones 
lo  que  dilata  en  secarse. 

Allí  se  amansa  el  más  bravo, 
allí  se  duebla  el  más  juerte- 
el  silencio  es  de  tal  suerte, 
que   cuando  llegue   a  venir 
hasta  se  le  han  de  sentir 
las   pisadas  a   la  muerte. 

Adentro  mesmo  del   hombre 
se  hace  una  revolución- 
metido  en  esa  prisión, 
de  tanto  no  mirar  nada 
le  nace  y   queda   grabada 
la  idea   de  la   perfección . 


En  mi  madre,  en  mis  hermanos, 

en   todo  pensaba  yo— 

al  hombre  que  allí  dentro 

de  memoria  más  ingrata— 

fielmente   se   le  retrata 

todo  cuanto  ajuera  vio. 

Aquel  que  ha  vivido  libre 
de  cruzar  por   donde  quiera, 
se  aflige   y  se  desespera 
de  encontrarse  allí  cautivo; 
es  un   tormento  muy  vivo 
que   abate  la    alma   más   fiera. 

En  esa  estrecha  prisión 
sin  poderme  conformar, 
no  cesaba  de  esclamar: 
!que  diera  yo  por  tener 
un  caballo  que  montar 
y  una  pampa  en  que  correr! 

En    un    lamento   costante 

se  encuentra  siempre  embretao— 

el  castigo  han   inventao 

de  encerrarlo  en  las  tinieblas— 

y  allí  está  como  amarrao 

a  un  fierro  que  no  se  duebla. 

No  hay  un   pensamiento  triste 
que  al  preso  no  lo  atormenee— 
bajo  un  dolor  permanente 
agacha  al  fin  la  cabeza- 
porqué  siempre  es  la   tristeza 
hermana  de   un  mal  presente. 

Vierten  lágrimas  sus  ojos 
preo  su  pena  no  obvia— 
en  esa  costante  lidia 
sin  un  momento  de  calma, 
contempla   con   los  del   alma 
felicidades   que  envidia. 

Ningún  consuelo  penetra 
detrás  de  aquellas  murallas— 
el  varón  de  más  agallas, 
aunque  más  duro  que  un  perno, 
metido  en   aquel   infierno 
sufre  ,gime  llora  y  calla. 


De  furor  el  corazón 
se  le  quiere  reventar, 
pero   no   hay   sino  aguantar 
aunque  sosiego  no  alcance— 
ídichoso  en  tan  duro  trance 
aquel  que   sabe   rezar! 

Dirige  a  Dios  su  plegaria 
el  que  sabe  una  oración! 
en  esa  tribulación 
gime  olvidado  del  mundo, 
y  el  dolor  es  más  projundo 
cuando  no  halla  compasión. 

En  tan  crueles  pesadumbres, 
en  tan  duro  padecer, 
empezaba  a  encanecer 
después  de  muy  pocos  meses- 
allí  lamenté  mil  veces 
no  haber  aprendido  a  leer. 

Viene  primero  el  furor, 
después  la  melancolía— 
en  mi  angustia  no  tenía 
otro  alivio  ni   consuelo 
sino  regar  aquel  suelo 
con  lágrimas  noche  y  día. 

A  visitar  otros  presos 
sus  familias  solían   ir— 
naides  me  visitó  a  mí 
mientras  estuve  encerrado— 
!quien  iba  a  costiarse  allí 
a  ver  un  desamparado! 

¡Bendito  sea  el  carcelero 
que  tiene  buen  corazón! 
yo  sé  que  esta  bendición 
pocos  pueden  alcanzarla, 
pues  si  tienen  compasión 
su  deber  es  ocultarla. 

Jamás  mi  lengua  podrá 
espresar  cuanto  he  sufrido— 
en  ese  encierro  metido, 
llaves,  paredes,  cerrojos— 
se  graban   tanto  en   los  ojos 
que  uno  los  ye  hasta  dormido 


El  mate  no  se  permite- 
no  le  permiten  hablar, 
no   le    permitencantar 
para  aliviar  su  dolor— 
y  hasta  el  terrible  rigor 
de   nodearlo   fumar. 

La  justicia  muy  severa 
suele  rayar  en  crueldá— 
sufreel  pobre  que  allí  está 
calenturas  y  delirios, 
pues   no   esiste    pior   martirio 
que  esa  eterna  soledá. 

Conversamos  con  las  rejas 
por  sólo  el  gusto  de  hablar- 
pero  nos   mandan   callar 
y  es  preciso  conformarnos, 
pues  no  se  debe  irritar 
a  quien   puede   castigarnos. 

Sin  poder  decir  palabra 
sufre  en  silencio  sus  males— 
y  uno  en  condiciones  tales 
se  convierte  en  animal, 
privao  del  don  principal 
que  Dios  hizo  a  los  mortales. 

o  no  alcanzo  a  comprender 
por  qué  motivo  será, 
que  el  preso  privado  está 
de  los  dones  más  preciosos 
que  el  justo  Dios  bondadoso 
otorgó  a  la  humanidá. 

Pues  que  de  todos  los  bienes, 
en  mi  inorancia  lo  infiero, 
que  le  dio  al  hombre  altanero 
su  Divina  Magestá— 
la  palabra  es  el  primero, 
el  segundo  es  la  amista. 

Y  es  muy  severa  la  Ley 

que  por  un  crimen  o  un  vicio, 

somete  al  hombre  a  un  suplicio 

el   más   tremendo  y   atroz, 

privado  de   un   beneficio 

que   ha   recebido   de   Dios. 


La    soledá   causa   espanto— 
el    silencio    causa   horror- 
ese   continuo    terror 
es   el    tormento   más   duro— 
y  en  un  presidio  seguro 
está  de  más  tal  rigor. 

Inora  uno  si  de  allí 

saldrá   pa   la   sepoltura— 

el   que   se   halla   en   desventura 

busca  a  su   laclo  otro   ser; 

pues    siempre    es    bueno    tener 

compañeros    de    amargura. 

Otro    más   sabio    podrá 
encontrar   razón   mejor— 
yo   no   soy    rebuscador, 
y  ésta   me   sirve  de  luz: 
se  los  dieron  al  Señor 
al   clavarlo  en   una   cruz. 

Y  en  las  profundas  tinieblas 
en    que   mi    razón    esiste, 
mi  corazón  se  resiste 

a    ese    tormento   sin    nombre— 
pues  el  hombre  alegra  al  hombre, 
y   el   hablar  consuela   al   triste. 

Grábenlo   como    en    la    piedra 

cuanto   he   dicho  en   este   canto— 

y   aunque   yo  he   sufrido   tanto 

debo  confesarlo  aquí— 

el   hombre   que   manda   allí 

es  poco  menos  que   un   santo. 

Y  son   buenos   los  demás, 

a   su  ejemplo  se  manejan- 
pero  por  eso  no  dejan 
las    cosas    de    ser    tremendas— 
piensen    todos    y    compriendan 
el    sentido    de   mis   quejas. 

Y  guarden   en   su   memoria 
con    todapuntualidá 

lo  que  con  tal  claridá 
les   acabo   de   decir — 
mucho   tendrán   que  sufrir 
si  no  creen  en  mi  yerdá. 


Y  si   atienden   mis  palabras 
no  habrá  calabozos  llenos— 
manéjense    como   buenos, 
no  olviden   esto  jamás— 
aquí  no  hay  razón  de  más, 
más   bien    las   puse   de   menos. 

Y  con    esto    me    despido, 
todos  han  de  perdonar— 
ninguno  debe   olvidar 

la    historia    de    un    desgraciado- 
quien   ha   vivido  encerrado 
poco  tiene  que  contar. 

EL  HIJO  SEGUNDO 

Lo  que   les  voy   a   decir 
ninguno    lo   ponga    en    duda, 
y  aunque  la  cosa,  es  peluda 
haré    la    resolucion- 
es ladino   el   corazón 
pero   la    lengua    no    ayuda. 

El  rigor  de  las  desdichas 
hemos   soporta:)   diez   años— 
pelegrinando   entre   estraños 
sin    tener   donde   vivir, 
y  obligados   a  sufrir 
una   máquina    de   daños. 

El   que  vive   de   ese   modo 
de   todos   es   tributario; 
falta    el    cabeza    primario 
y  los  hijos  que  él   sustenta 
se   dispersan    como   cuentas 
cuando  se   corta   le   rosario. 

Yo  anduve   ansí  como   todos, 
hasta  que  al  fin  de  sus  días 
supo  mi  suerte  una  tía 
y  me  recogió  a  su   lado— 
allí   viví   sosegado 
y    denada    carecía . 

No    tenía    cuidado   alguno 
ni    que    trabajar    tampoco— 
y  como  muchacho  loco 
lo  pasaba   de  holgazán— 
con   razón   dice  el   refrán 
que   lo  bueno   dura   poco. 


En    mí    todo    su    cuidado 

y    su    cariño    ponía- 
corno  a  un  hijo  me  quería 
con    cariño    verdadero— 
y   me   nombró   de   heredero 
de  los  bienes  que   tenía. 

El    Juez   vino    sin    tardanza 
cuanto  falleció   la  vieja— 
"De  los  bienes  que  te  deja", 
me  dijo,  "yo  he  de  cuidar, 
es  un  rodeo  regular 
y  dos  majadas  de  ovejas". 

Era  hombre  de  mucha  labia, 
con  más  leyes  que  un  dotor— 
me  dijo  "vos  sos  menor, 
y  por  los  años  que  tienes 
no  podes  manejar  bienes, 
voy  a  nombrarte  un  tutor". 

Tomó  un   recuento  de   todo 
porque  entendía  su.  papel, 
y  después  que  aquel  pastel 
lo   tuvo  bien   amasao, 
puso  al  frente  un  encargao 
y  a  mí  me  llevó  con  él. 

Muy  pronto  estuvo  mi  poncho 

lo  mesmo  que  cernidor— 

el    chiripá    estaba    pior, 

y    aunque    para    el    fríosoy    guapo, 

ya    no    me    quedaba    un    trapo 

ni    pa   el    frío   ni   pa   el   calor. 

En    tan    triste  desabrigo 
tras  de  un  mes  iba  otro  mes, 
guardaba  silencio  el  Juez, 
la  miseria  me  invadía- 
me acordaba  de  mi  tía 
al   verme  en   tal   desnudez. 

No  sé  decir  con  fijeza 
el  tiempo  que  puse  allí— 
y  después  de  andar  ansí 
como   moro   sin    señor, 
pasé    a   poder   del    tutor 
que   debía   cuidar   de   mí. 


Me  llevó   consigo   un   viejo 
que  pronto  mostró  la  hilacha- 
dejaba  ver  por  la  facha 
que  era  medio  cimarrón— 
muy   renegao,    muy   ladrón, 
y  le  llamaban  Viscacha. 

Lo  que  el  Juez  iba  buscando 
sospecho  y  no  me  equivoco- 
pero  este  punto  no   toco 
ni  su  secreto  averiguo— 
mi   tutor  era  un   antiguo 
de  los  que  ya  quedan  pocos. 

Viejo  lleno  de  camándulas, 
con  un  empaque  a  lo  toro- 
andaba  siempre  en  un  moro 
metido  no  sé  en  que  enriedos— 
con  las  patas  como  loro 
de  estribar  entre  los  dedos. 

Andaba  rodiao  de  perros, 
que   eran    todo  su   placer- 
jamas  dejó  de   tener 
menos   de  media   docena- 
mataba   vacas   ajenas 
para   darles   de   comer. 

Carniábamos   noche   a   noche 
alguna   res   en    el    pago; 
y  dejando  allí  el   resago 
alzaba   en   ancas  el   cuero, 
que  se  lo  vendía  a  un  pulpero 
por   yerba,    tabaco   y   trago. 

Ah!    viejo    más    comerciante 

en    mi    vida    lo   he   encontrao— 

con    ese    cuero    robao 

el  arreglaba  el  pastel, 

y  allí  entre  el  pulpero  y  él 

se  estendía  el  certificao. 

La  echaba  de  comedido; 
en   las  trasquilas,   lo  viera, 
se  ponía  como  una  fiera 
si  cortaban  una  oveja; 
pero  de  alzarse  no  deja 
un   vellón   o  unas   tijeras. 


Una  vez  me  dio  una  soba 
que  me  hizo  pedir  socorro, 
porque   lastimé   un   cachorro 
en  el  rancho  de  unas  vascas— 
y  al   irse  se  alzó  unas  guascas, 
para   eso  era   como  zorro. 

Ay  juna!  dije  entre  mí, 
me   has  dao   esta  pesadumbre— 
ya   verás  cuanto  vislumbre 
una    ocasión    medio   güeña, 
te  he  de  quitar  la  costumbre 
de    ccrdiar    yeguas    agenas. 

Porque  maté  una  viscacha 
otra  vez  me  reprendió- 
se lo  vine  a  contar  yo, 
y  no  bien  se  lo  hube  dicho— 
"Ni   me   nuembres  ese  vicho"— 
me   dijo,   y  se  me  enojó. 

Al    verlo    tan    irritao 
hallé    prudente    callar- 
este  me   va   a   castigar, 
dije  entre  mé,   si   se  agravia— 
ya  vi  que  les  tenía  rabia 
y  no  las  volví  a  nombrar. 

Una  tarde  halló  una  punta 
de  yeguas  medio  vichocas, 
después  que  me  voltio  unas  pocas 
las  cerdiaba   con  empeño— 
yo  vide  venir  al  dueño 
pero  me  callé  la  boca. 

El  hombre  venía  jurioso 
y  nos  cayó  como  un  rayó- 
se descolgó  del  caballo 
revoliando   el    amador— 
y  lo  cruzó  de  un  lazazo 
ay  no  más  a  mi   tutor. 

No  atinaba  don  Viscacha 
a  qué  lado  disparar, 
hasta  que  logró  montar, 
y   de   miedo   del   chicote, 
se  lo  apretó  hasta  el  cogote 
sin  pararse  a  contestar. 


Ustedes  creerán   tal   vez 
que  el  viejo  se  curaría- 
no  señores,  lo  que  hacía, 
con  más  cuidao  dende  entonces, 
era  mamarlas  de  día 
para  cerdiar  a  la  noche. 

Ese  fué  el  hombre  que  estuvo 
encargao  de  mi  destino— 
siempre  anduvo  en  mal  camino, 
y  todo  aquel  vecindario 
decía  que  era  un  perdulario 
insufrible    de    dañino. 

Cuando  el  Juez  me  lo  nombró, 

al   dármelo  de   tutor, 

me  dijo  que  era  un  señor 

el   que   me   debia   cuidar— 

enseñarme    a    trabajar 

y   darme   la   educación. 

Pero  qué  había  de  aprender 
al  lao  de  ese  viejo  paco, 
que  vivía  como  el  chuncaco 
en  los  bañaos,  como  el  tero— 
un  haragán,  un  ratero, 
y  más  chillón  que  un  barraco. 

Tampoco  tenía  más  bienes 

ni    propiedá   conocida 

que    una   carreta    podrida 

y  las   paredes   sin   techo 

de   un   rancho  medio  deshecho 

que  le  servía  de  guarida. 

Después   de  las  trasnochadas 
allí  venía  a  descansar— 
yo  desiaba  averiguar 
lo  que  tuviera  escondido, 
pero  nunca  había  podido 
pues  no  me  dejaba   entrar. 

Yo  tenía  unas  jergas  viejas 
que  habían   sido  más  peludas— 
y  con  mis  carnes  desnudas, 
el   viejo,   que   era  una  fiera, 
me  echaba  a  dormir  ajuera 
con   unas   heladas  crudas. 


Cuando    mozo    fué    casao, 
aunque  yo  lo  desconfio— 
y   decía   un    amigo   mío 
que    de   arrebato    y   malo 
mató   a   su    mujer   de   un   palo 
porque    le    dio    un    mate    frío. 

Y   viudo   por    tal    motivo 
nunca   se   volvió  a   casar; 
no   era    fácil    encontrar 
ninguna    que    lo    quisiera, 
todas    temerían    llevar 
la    suerte    de    la    primera.. 

Soñaba    siempre    con    ella, 

sin    duda    por   su    delito, 

y    decía    el    viejo    maldito 

el    tiempo   que    estuvo   enfermo, 

que  ella  dende  el  mesmo  Infierno^ 

lo  estaba  llamando  a  gritos. 

Siempre   andaba   retobao, 
con    ninguno    solía    hablar- 
se   divertía    en    escarbar 
y   hacer   marcas   con   el   dedo— 
y   cuanto   se   ponía   en   pedo 
me    empezaba    aconsejar . 

Me  parece  que  lo  veo 

con    su    poncho    calamaco— 

después  de  echar  un  buen   taco 

ansí    principiaba    a    hablar: 

"Jamás   llegues   a    parar 

a  donde  veas  perros  flacos". 

"El   primer  cuidao  del   hombre 
es  defender  el   pellejo— 
llévate    de    mi    consejo, 
fíjate   bien   en   lo   que   hablo: 
el .  diablo   sabe   por   diablo 
pero   más   sabe   por   viejo". 

"Hacete    amigo    del    Juez, 
no    le    des   de   qué   quejarse— 
y    cuando    quiera    enojarse 
vos    te    debes    encojer, 
pues    siempre    es    güeno    tener 
palenque    ande    ir    a    rascarse". 


-*A^,fi    J  J 


"El    que    gana    su    comida 
bueno    es   que   en    silencio   com3- 
ansina,   vos   ni   por   broma 
querrás    llamar    la    atención— 
nunca   escapa   el   cimarrón 
si    dispara    por    la    loma". 

"Yo    voy    donde    me    conviene 
y  jamás  me  descarrío, 
llévate  el  ejemplo  mío 
y  llenarás  la  barriga- 
aprende   de   las   hormigas, 
no  van   a  un   noque  vacío. 


"A    naides    tengas    envidia, 
es  muy  triste  el  envidiar, 
cuando   veas  a  otro  ganar 
a  estorbarlo  no  te  metas- 
cada  lechón  en  su  teta 
es   el   modo  de   mamar". 

"Ansí    se    alimentan    muchos 
mientras    los   pobres    lo   pagan- 
corno  el  cordero  hay  quien  lo  haga 
en    la   puntúa,   no   niego- 
pero   otros  como  el  borrego 
toda   estera   se   la   tragan". 


"Si    buscas    vivir    tranquilo 
dedícate    a    solteriar— 
mas  si   te   querés  casar, 
con   esta   alvertencia   sea, 
que  es  muy  difícil  guardar 
prenda    que    otros    codisean". 

"Es  un   vicho  la  mujer 

que   yo    aquí   no  lo   destapo— 

siempre    quiere    al    hombre    guapo, 

mas    fíjate    en    la    elección 

porque   tiene   el   corazón 

como  barriga   de   sapo". 

Y    gangoso   con    la    tranca, 
me    solía    decir,    "potrillo, 
recién   te  apunta  el  cormillo 
mas   te   lo   dice   un    toruno: 
no    dejes    que    hombre    ninguno 
te  gane  el   lao  del   cuchillo". 

"Las   armas   son    necesarias, 
pero    naide    sabe    cuando; 
ansina    si    andas    pasiando, 
y   de    noche   sobre    todo, 
debes   llevarlo  de  modo 
que    al    salir    salga    cortando". 

"Los   que   no   saben   guardar 
son    pobres    aunque    trabajen— 
nunca   por   más   que   se  atajen 
se    librarán    del    cimbrón- 
ai    que   nace   barrigón 
es  al   ñudo  que  lo  fajen". 

"Donde   los  vientos   me   llevan 
allí   estoy  como  en   mi   centro— 
cuando    una     tristeza    encuentro 
tomo   un    trago  pa   alegrarme; 
a    mí    me    gusta    mojarme 
por   ajuera   y   por   adentro". 

"Vos  sos  pollo,   y   te  convienen 
toditas    estas    razones, 
'mis  consejos  y  leciones 
no  eches  nunca  en  el  olvido— 
en  las   riñas  he  aprendido 
a    no   peliar   sin    puyones". 


Con    estos    consejos    y    otros 
que  yo  en  mi  memoria  encierro 
y  que  aquí  no  desentierro, 
educándome    seguía— 
hasta  que  a]  fin   se  dormía 
mesturao   entre   los  perros. 

Cuando   el   viejo   cayó  enfermo, 
viendo    yo    que    se    empioraba 
y   que  esperanza   no   daba 
de    mejorarse    siquiera— 
fe  truje   una   culandrera 
a    ver   si   lo  mejoraba. 

En    cuanto    lo   vio   me    dijo: 
"Este    no    aguanta    el    sogazo— 
muy   poco   le   doy   de   plazo, 
nos   va    a    dar    un    espectáculo, 
porque   debajo   del   brazo 
le    ha    salido    un    tabernáculo". 

Dice  el   refrán   que   en   la   tropa 
nunca    falta    un    güey    cortieta- 
uno   que   estaba    en    la   puerta 
le   pegó   el    grito   ay   no   más: 
'Tabernáculo.  .  .     qué    bruto, 
un    tubérculo    dirás". 

Al   verse   ansí   interrumpido, 
al   punto   dijo  el   cantor: 
"No    me    parece   ocasión 
de  meterse  los  de   ajura, 
tabernáculo,    señor, 
le   decía   la   culandrera". 

El    de    ajuera    repitió 
dándole    otro    chaguarazo— 
"Allá   vá   un   nuevo  bolazo, 
copo  y   se  la   gano  en   puerta: 
a  las  mujeres  que  curan 
se   las    llama    curanderas". 

No  es  bueno,   dijo  el   cantor, 
muchas  manos  en  un  plato, 
y  diré  al  que  ese  barato 
ha    tomao   de   entremetido, 
que  no  créia  haber  venido 
a    hablar    entre    libera  tos. 


Y   para   seguir   contando 

la  historia   de  mi   tutor, 

le  pediré  a  ese   dotor 

que  en   mi   inorancia  me   deje, 

pues  siempre  encuentra  el  que  teje 

otro   mejor  tejedor. 


Seguía    enfermo   como   digo, 
cada   vez  más  emperrao— 
yo   estaba    ya   acobardao 
y  lo  espiaba   dende   lejo; 
era  la  boca  del  viejo 
la    boca   de   un    condenao. 


Allá    pasamos   los    dos 
noches    terribles    de    invierno— 
el  maldecía  al  Padre  Eterno 
como  a  los  santos  benditos- 
pidiéndole   al   diablo   a   gritos 
que   lo  llevara  al   infierno. 

Debe    ser   grande    la    culpa 
que   a   tal   punto   mortifica— 
cuando   vía   una   reliquia 
se    ponía    como    azogado, 
como    si   a   un   endemoniado 
le   echarán    agua   bendita. 

Nunca  me  le  puse  a  tiro, 
pues   era    de   mala   entraña— 
V    viendo    heregía    tamaña, 
si   alguna   cosa   le   daba, 
de  lejos  se  la  alcanzaba 
en   la  punta  de  una   caña. 

Será    mejor,    decía   yo, 
que   abandonado   lo   deje— 
que   blasfeme    y   que   se    queje 
y   que   siga   de   esta   suerte, 
hasta    que   venga    la    muerte 
y    cargue    con    este   hereje. 

Cuando   ya    no   pudo   hablar 

le   até   en   la   mano   un   cencerro— 

y   al   ver  cercano   su   entierro, 

arañando   las   paredes 

espiró    allí    entre    los    perros 

y   este    servidor   de   ustedes  ¿ 

Le   tomé  un  miedo  terrible 
después  que  lo  vi  dijunto— 
llamé   al   Alcalde,    y   al   punto, 
acompañado    se    vino 
de    tres    o   cuatro   vecinos 
a    arreglar    aquel    asunto. 

"Anima    bendita"    dijo 
de    temernos    robaos" . 
un   viejo   medio   ladiao— 
"que   Dios   lo    haiga   perdonao, 
es    todo    cuanto    deseó- 
le   conocí    un    pastoreo 


"Ansina    es",    dijo    el    Alcalde, 
"con    eso    empezó    a    poblar— 
yo    nunca    podré    olvidar 
las    travesuras    que    hizo; 
hasta    que    al    fin    fué    preciso 

En    una  nueva    dentrada 
y   al    verse   ya   mal   herido, 
pa    ensillar    un    animal 
sin    necesitar    de    otro, 
se   encerraba   en    el    corral 
y   allí   galopiaba   el   potro". 

"Se   llevaba   mal   con   todos- 
era    su    costumbre   vieja 
el   mesturar   las  ovejas, 
pues  al  hacer  el   aparte 
sacaba    la   mejor   parte 
y    después    venéa    con    quejas". 

"Dios   lo    ampare    al    pobrecito", 
dijo    en    seguida    un    tercero— 
"Siempre    robaba    carneros, 
en    eso    tenía   destreza- 
enterraba  las  cabezas, 
y   después   vendía   los   cueros". 

"Y  qué  costumbre  tenía 
cuando  en  el  jogón  estaba— 
con   el   mate   se   agarraba 
estando    los    piones    juntos— 
"Yo  tayo,   decía,   "y  apunto", 
y    a    ninguno    convidaba"4 

"Si    ensartaba    algún    asao, 
pobre!  como  si  lo  viese! 
poco    antes    de    que    estuviese, 
primero    lo    maldecía, 
luego   después   lo   escupía 
para    que    naides    comiese". 

"Quien  le  quitó  esa  costumbre 
de  escupir   el   asador, 
fué   un   mulato  resertor 
que    andaba    de    amigo    suyo— 
un    diablo   muy   peliador 
que    le    llamaban    Barullo". 


"Una   noche  que  les   hizo 
como    estaba    acostumbrao, 
se   alzó   el   mulato  enojao, 
y  le  gritó  "viejo  indino, 
"yo  te  he  de  enseñar,  cochino, 
"a   echar   saliva   al   asao". 

"Lo   saltó    por    sobre   el   juego 
con    el    cuchillo    en    la    mano; 
¡la    pucha,   el    pardo    liviano! 
en    la    mesma    atropellada 
le    largó    una    puñalada 
que   le   quitó   otro   paisano". 

"Y    va    caliente    Barullo, 
quiso    seguir    la.    chacota, 
se  le  había   erozao   la  mota 
lo    que   empezó    la    reyerta: 
el  viejo  ganó  la  puerta 
y  apeló  a  las  de  gaviota". 

"De   esa   costumbre   maldita 
dende    entonces    se    curó— 
a  las  casas  no  volvió, 
se  metió  en   un   cicutal 
y  allí   escondido  pasó 
esa    noche    sin    cenar". 

Esto    hablaban    los    presentes— 
y  yo  que  estaba  a  su  lao 
al  oir  lo  que  he  relatao, 
aunque   él   era   un    perdulario, 
dije   entre    mí    "qué   rosario 
le   están    rezando   al   finao". 

Luego   comenzó   el    Alcalde 
a  registrar  cuanto  había, 
sacando   mil    chucherías 
y   guascas  y   trapos   viejos, 
temeridá   de    trebejos 
que  para  nada   servían. 

Salieron    lazos,    cabrestos, 
coyundas   y  mamadores— 
una  punta  de  amadores; 
cinchones,    maneas,    torzales, 
una   porción   de  bozales 
y  ub   montón  de   tiradores. 


Había    riendas    de    domar, 
frenos  y  estribos  quebraos; 
bolas,   espuelas,    recaos, 
unas   pavas,    unas  ollas, 
y  un  gran  manojo  de  argollas 
de    cinchas    que    había    cortao. 

Salieron    varios  cencerros- 
alesnas,    lonjas,    cuchillos, 
unos   cuantos   coginillos, 
un  alto  de  jergas  viejas, 
muchas  botas  desparejas 
y   una  infinidad  de  anillos. 

Había    tarros    de    sardinas, 
unos   cueros   de   venao— 
unos   ponchos   aujeriaos— 
y   en    tan    tremendo    entrevero 
aparee.' ó    hasta    un    tintero 
que  se  perdió  en  el  Juzgao. 

Decía   el   Alcalde  muy   serio: 
"Es   poco  cuanto   se  diga, 
había    sido   como   hormiga, 
he  de  darle  parte  al  Juez— 
y  que  me  venga  después 
con   que   no  se   los  persiga". 

Yo  estaba   medio   azorao 
de  ver  lo  que  sucedía— 
entre   ellos  mesmos  decían 
que    unas    prendas   eran    suyas, 
pero  a  mí  me  parecía 
que   esas   eran   aleluyas. 

Y  cuando   ya    no   tuvieron 
rincón    donde    registrar, 
cansaos    de    tanto    huroniar 
y  de  trabajar  de  valde— 
"Vamonos",   dijo   et   Alcalde, 
"luego  lo  haré  sepultar". 

Y  aunque  mi  padre  no  era 
el  dueño  de  ese  hormiguero, 
el  allí  muy  cariñero 

me   dijo   con   muy   buen    modo: 

"Vos    serás   el   heredero 

y   te    harás   cargo   de    todo". 


"Se   ha   de   arreglar   este   asunto 
como  es  preciso  que  sea; 
roy  a  nombrar  albacca 
uno   de  los  circunstantes- 
las  cosas  no  son  como  antes 
tan   enredadas   y   feas". 

¡Bendito  Dios!  pensé  yo, 
ando    como    un    pordiosero, 
y    me    nuembran    heredero 
de    toditas    estas    guascas- 
quisiera    saber   primero 
lo  que  se  han   hecho  mis  vacas! 

Se  largaron   como  he  dicho 
a   disponer  el   entierro— 
cuando    me    acuerdo    me    aterro, 
me  puse  a  llorar  a  gritos 
al   verme   allí    tan   sólito 
con   el    finao   y   los   perros. 

Me   saqué   el   escapulario, 
se  lo   colgué   al   pecador— 
y  como  hay  en   el   Señor 
misericordia   infinita, 
rogué   por  la    alma    bendita 
del   que  antes  jué  mi   tutor. 

No    se    calmaba    mi    duelo 
de    verme    tan    solitario— 
ay  le  chompurrié  un  rosario 
como   si   juera   mi   padre- 
besando    el    escapulario 
que   me    había    puesto   mi   madre 

"Madre    mía",    gritaba    yo, 
"dónde  andarás  padeciendo— 
el    llanto   que    estoy    virtiendo 
lo  redamarías  por  mí, 
si  vieras  a  tu  hijo  aquí 
todo   lo   que   está    sufriendo". 


Y  mientras    ansí    clamaba 
sin    poderme   consolar- 
los perros  para  aumentar 

más  mi  miedo  y  mi  tormento— 
en    aquel   mesmo  momento 
se  pusieron   a   llorar. 

Libre  Dios  a  los  presentes 
de   que   sufran   otro  tanto— 
con   el   muerto   y  esos   llantos 
les   juro   que   falta    poco 
para   que   me   vuelva   loco 
en    medio   de    tanto   espanto. 

Decían    entonces   las   viejas 
como   que  eran   sabedoras, 
que   los   perros    cuando   lloran 
es  porque  ven   al  demonio; 
yo   créia   en   el   testimonio 
como   eré    siempre   el    que   inora. 

Ay   deje   que   los   ratones 
comieran    el    guasquiprío— 
y  como  anda  a  su  albedrío 
todo   el    que   güérfano   queda- 
alzando  lo  que  era  mío 
abandoné    aquella    cueva . 

Supe    después    que   esa    tarde 
vino  un  pión  y  lo  enterró— 
ninguno   lo   acompañó 
ni    lo    velaron    siquiera— 
y   al   otro  día   amaneció 
con   una   mano  dejuera. 

Y  me   ha    contado   además 

el   gaucho  que  hizo  el  entierro, 

al   recordarlo  me  aterro, 

me   da   pavor   este  asunto, 

que  la  mano  del  dijunto 

se  la   había   comido   un   perro. 


Ttl   vez   yo   tuve   la   culpa 
porque   de   asustao   me   fui- 
supe   después  que   volví, 
y    asegurárselos    puedo, 
que  los  vecinos  de  miedo 
no   pasaban    por   allí. 

Hizo   del    rancho    guarida 
la    sabandija    más    sucia; 
el    cuerpo    se    despeluza 
y    hasta    la    razón    se    altera— 
pasaba    la    noche    entera 
chillando   allí    una    lechuza. 

Por    mucho    tiempo    no    pude 
saber  lo  que  me  pasába- 
los  trapitos   con   que   andaba 
eran    puras    hojarascas- 
todas    las   noches    soñaba 
con    viejos,    perros    v    guascas 


Anduve   a   mi   volunta 
como   moro   sin    señor— 
ese    fué   el    tiempo   mejor 
que   yo   he  pasado   tal   vez- 
de  miedo  de  otro  tutor 
ni    aporté   por   lo   del   Juez. 

To    cuidaré",    me    había    dicho, 
"De  lo  de  tu  propiedá— 
todo   se   conservará, 
el  vacuno  y  los  rebaños— 
hasta   que  cumplas   30  años 
en  que  seas  mayor  de  edá". 

Y  aguardando   que   llegase 
el   tiempo  que  la  ley  fija- 
pobre    como    lagartija 
y  sin  respetar  a  naides, 
anduve   cruzando   el    aire 
como   bola    sin    manija. 


fe£3$a¡^ 


Me  hice  hombre  de  esa  manera 

bajo  el  más  duro  rigor!— 

sufriendo   tanto  dolor 

muchas  cosas  aprendí— 

y  por  fin  vítima  fui 

del  más  desdichado   amor. 

De    tantos    alternativas 

esta  es  la  parte  peluda— 

infeliz   y  sin   ayuda 

fué   estremado    mi    delirio, 

y   causaban   mi    martirio 

los    desdenes    de    una    viuda. 

Llora    el    hombre    ingratitudes 

sin    tener    un    jundamento, 

acusa    sin    miramiento 

a  la  que  el  m:l  le   ocasiona, 

y  taj  vez  en   su  persona 

no    hay    ningún    merecimiento. 

Cuando    vo    más    padecía 
la   crueldá    de   mi   destino- 
rogando    al    poder    divino— 
que   del    dolor   me   sepáre- 
me  hablaron    de   un    adivino 
que  curaba  esos  pesares. 

Tuve   recelos   y   miedos 
pero  al   fin   me  disolví 
hice   coraje  y  me   fui 
dond   el   adivino  estaba, 
y  por  ver  si  me  curaba 
cuanto  llevaba   le   di. 

Me   puse    al    contar   mis   penas 
más    colorao    que    un    tomate— 
y  se  me  añudó  el  gaznate 
cuando    dijo    el    esmitaño— 
"Hermano,    le    han    hecho    daño 
y  se  lo  han   hecho  en   un   mate" 

"Por    verse    libre    de    usté 

lo    habrán    querido    embrujar"— 

después  me  empezó   a   pasar 

una.   pluma    de    avestruz— 

y  me  dijo:    "de  la  Cruz 

recebí  el  don  de  curar". 


"Debes    maldecir",    me    dijo, 
"a    todos   tus   conocidos, 
ansina   el   que   te   ha   ofendido 
pronto    estará    descubierto— 
y   deben   ser   maldecidos 
tanto    vivos   como   muertos". 

Y   me   recetó   que   hincao 
en   un   trapo  de  la  viuda, 
frente   a   una  planta,  de  ruda 
hiciera    mis    oraciones, 
diciendo:    "No    tengas   duda, 
eso   cura   las   pasiones". 

A  la   viuda   en   cuanto  pude 
busqué  la  ruda  y  al  pié 
puesto  en   cruz  hice   mi   rezo— 
un    trapo  le   manotié— 
pero,   amigo,   ni   por   eso 
de  mis  males  me  curé. 

Me   recetó  otra   ocasión 
que    comiera    abrojo    chico— 
el   remedio  no  me  esplico, 
mas    por   desechar   el    mal 
al  ñudo  en  un   abrojal 
fi   a  ensangrentarme  el  hocico. 

Y  con    tanta   medecina 

me    parecía    que    sanaba— 

por   momentos   se    aliviaba 

un    poco   mi   padecer, 

mas    si    a    la   viuda   encontraba 

volvía   la   pasión    a   arder. 

Otra   vez   que  consulté 
su    saber    estrordinario, 
recibió  bien   su   salario, 
y  me  recetó  aquel  pillo 
que   me  colgase   tres   grillos 
ensartaos    como    rosario. 

Por   fin   la   última   ocasión 
que  por  mi   mal   lo  fi   a  ver- 
me   dijo:    "No,    mi    saber 
no  ha  perdido  su  virtú, 
yo  te  daré  la   salú, 
no    triunfará    esa    mujer". 


"Y   tené   fe   en    el   remedio 
pues    la   cencía   no   es   chacota, 
de   esto   no   entendés   ni    jota— 
sin    que    ninguno    sospeche, 
córtale   a    un   negro   tres   motas 
y  hacélas  hervir  en    leche". 

Yo    andaba    ya    desconfiando 
de   la    curación    maldita— 
y    dije:    —"Este    no    me    quita 
la    pasión    que   me   domina— 
pues  que  viva  la  galina 
aunque    sea    con    la   pepita". 

Ansí    me    dejaba    andar, 
hasta,  que   en   una   ocasión 
el  cura  me  echó  un  sermón, 
para    curarme    sin    duda; 
diciendo    que    aquella    viuda 
era   hija   de   confisión. 
Y   me    dijo   estas   palabras 
que   nunca    las   he   olvidao— 

"Has  de   saber  que   el   finao 
ordenó    en    su    testamento 
qu    enaides   de   casamiento 
le   hablara   en   lo   sucesivo— 
y   ella    prestó    el    juramento 
mientras    él    estaba    vivo". 

"Y  es  preciso  que  lo  cumpla 
no   la    vuelvas    a    buscar- 
porqué    ansí    lo    manda    Dios— 
porque   si   llega   a   faltar 
es   necesario   que   vos 
se   condenarán    los    dos". 

Con  semejante  alvertencia 
se    completó    mi    redota— 
le  vi   los   pies   a    la   sota, 
y  me  le   alejé   a  la   viuda 
más   curao   que   con    la    ruda 
con    los    grillos    y    las    motas. 

Después   me   contó   un    amigo 
que  al  Juez  le  había  dicho  el  cura, 


"Que   yo   era   un   cabeza   dura 
y  que  era   un   mozo  perdido, 
que   me   echaras   del   partido, 
que   no    tenía   compostura". 

Tal   vez   por  ese   consejo 

y   sin    due    más   causa   hubiera., 

ni   que   otro   motivo   diera— 

me    agarraron    redepente 

y   en    el    primer   contingente 

me    echaron    a    la    frontera. 

De    andar    persiguiendo    viudas 
me  he  curado  del   desco- 
mas  pienso   volver   tal   vez, 
en    mil    penurias   me   veo— 
a  ver  si   sabe  aquel  Juez 
lo  que  se  ha  hecho  mi  rodeo 

Martín    Fierro   y   sus   dos   hijos 

entre    tanta    concurrencia 

siguieron  con  alegría 

celebrando  aquella  fiesta. 

Diez  años,   los  más  terribles 

había  durado  la  ausencia— 

y  al  hallarse  nuevamente 

er  su  alegría  completa. 

En    ese    mesmo    momento 

uno    vino    de    ajuera, 

a    tomar   parte   con   ellos, 

suplicó    que    lo    almitieran. 

Era    un    mozo    forastero 

de    muy    regular    presencia, 

y  hacía  poco  que  en   el   pago 

andaba    dando    sus    güeltas, 

aseguraban    algunos 

que  venía  de  la  frontera, 

que   había  pelao   a  un   pulpero 

en   las   últimas  carreras; 

pero    andaba    despilchao, 

no   traia    una    prenda    buena, 

un    recadito    cantor 

daba  fe  de  sus  pobrezas— 

le  pidió  la  bendición 

al  que  causaba  la  fiesta. 

y  sin  decirles  su  nombre 

les  declaró  con  franqueza 


que  el  nombre  de  Picardía 
es  el  único  que  lleva. 
Y  para  contar  su  historia 
a  todos  pide  licencia, 
diciéndoles  que  en  seguida 
iban  a  saber  quien  era. 

Tomó  al  punto  la  guitarra, 
la  gente  se  puso  atenta 
y  ansí  cantó  Picardía 
en  cuanto  templó  las  cuerdas . 

Voy  a   contarles  mi   historia, 
perdónenme  tanta  charla— 
y  les  diré  al  principiarla, 
aunque   es    triste   hacerlo    asé, 
a  mi  madre  la  perdí 
antes  de  saber  llorarla. 

Me  quedé  en  el  desamparo, 

y  al  hombre  que  me  dio  el  ser 

no  lo  pude  conocer; 

ansí,   pues,   dende   chiquito, 

volé  como  el  pajarito 

en    busca    de    qué    comer. 

O  por  causa  del   servicio 
que   tanta   gente   destierra— 
o  por  causa  de  la  guerra 
los  hijos  de  la  miseria 
que  es  causa  bastante   seria, 
son  muchos  en   esta  tierra. 

Ansí  por  ella  empujado 
no  sé  las  cosas  que  haría 
y  aunque  con  vergüenza  mía, 
debo  hacer  esta  alvertencia, 
siendo  mi  madre   Inocencia 
me  llamaban  Picardía. 

Me  llevó  a  su  lado  un  hombre 
para  cuidar  las  ovejas- 
pero  todo  el  día  eran  quejas 
y  guascazos  a  lo  loco, 
y  no  me  daba  tampoco 
siquiera  unas  jergas  viejas. 


Dende   el  Alba  hasta   la  noche, 
en  el  Campo  que  tenía- 
cordero  que  se  moría, 
mil  veces  me  sucedió, 
los  caranchos  lo  comían 
pero  lo  pagaba  yo. 

De    trato    tan    rigoroso 
muy  pronto  me  acobardé— 
el    bonete   me    apreté 
buscando   mejores   fines, 
y    con    unos    volantines 
me  fui  para  Santa  Fe. 

El   pruebista   principal 
a  enseñarme  me  tomó— 
y  ya  iba  aprendiendo  yo 
a  bailar  en  la  maroma, 
mas   me    hicieron    una   brima 
y    aquello   me   indijustó. 

Una  vez  que  iba  bailando, 
porque    estaba    el    calzón    roto, 
armaron    tanto    alboroto 
que   me   hicieron   perder   pié; 
de  la  cuerda  me  largué 
y    casi    me    descogoto 

Ansé   me   encontré   ne   nuevo 
sin   saber  donde  meterme— 
y   ya   pensaba   volverme, 
cuando   por   fortuna    mía, 
me   salieron    unas    tías 
que    quisieron    recogerme. 

Con    aquella   parentela, 

para    mí    desconocida, 

me  acomodé  va  enseguida; 

y  eran  muy  buenas  señoras, 

pero  las  más  rezadoras 

que  he  visto  en  toda  mi  vida. 

Con  el  toque  de  oración 
ya    principiaba    el    Rosario- 
noche  a  noche  un  calendario 
tenían   ellas  que  decir, 
j  a  rezar  solían  venir 
muchas    de    aquel    vecindario. 


Lo  que   allí   me   aconteció 
siempre   lo  he   de   recordar— 
pues   me   empiezo   a   equivocar 
y    a    cada    paso    refalo- 
corno  si   me  entrara  el  malo 
cuanto   me    hincaba  a    a    rezax. 

Era    como    tentación 
yo    que    yo    esperimenté— 
y    jamás    olvidaré 
cuanto    tuve    que    sufrir, 
porque    no    podía    decir 

"Artículos  de  la  Fé". 
Tenía    al    lao   una  mulata 
que  era  nativa  de  allí — 
como   el   ángel   de   la   guarda- 
picara,   y  era  la  parda 
la    que   me    tentaba    ansí. 

"Resa",   me   dijo   mi    tía, 
"Artículos  de  la  Fé"- 

quise   hablar   y   me    atoré, 
la   dificulta   me   aflige— 
miré   a    la   parda,   y  ya   dije 
"Artículos   de   Santa   Fé". 

Me   acomodó   el    coscorrón 
que    estaba    viendo    venir— 
yo   me   quise   corregir, 
a   la   mulata   miré 
v  otra  vez  volví  a  decir 
"Artículos    de    Santa    Fé". 

Sin    dificulta    ninguna 
rezaba   todito  el  día, 
y  a  la  noche  no  podía 
ni  con  un  trabajo  inmenso; 
es  por  eso  que  yo  pienso 
que   alguno    me    tentaría. 

Una   noche   de   tormenta, 
vi  a  la  parda  y  me  entró  chuchó- 
los   ojos   —me    asusté    mucho, 
eran    como   refocilo : 
al   nombrar   a   San    Camilo, 
le  dije  San  Camilucho. 


Esta  me  da  con  el  pié 
aquella  otra  con   el  codo— 
ah!   viejas,   —por  ese  modo, 
aunque    de    corazón    tierno, 
yo  las  mandaba  a]  infierno 
con   oraciones  y   todo. 

Otra   vez  que   como   siempre 
la  parda  me  perseguía, 
cuando  yo   acordé,   mis   tías 
me   habían    sacao   un    mechón 
al  pedir  la  estirpación— 
de  todas  las  heregías. 

Aquella   parda   maldita 
me  tenía  medio  afligido, 
y  ansí,  me  había  sucedido, 
que    al    decir   estirpación— 
le  acomodé  entripación 
y  me   cayeron   sin   ruido. 

El  recuerdo  y  el  dolor 
me   duraron    muchos    días, 
soñé   con   las  heregías 
que   andaban    por   estirpar— 
v   pedía   siempre   al   rezar 
la  estirpación   de  mis  tías. 

Y  dale  siemore   rosarios, 
noche  a  noche  v  sin  cesar— 
dale    siempre    baraiar 
salves,  trisaiios  v  credos— 
me  aburrí  de  esos  enried^s 
v  al  fin  me  mandé  mudar. 

Anduve    como   pelota, 
y  más  pobre  que   una  rata— 
cuando  empecé  a   ganar  nlata 
se  armó  no   sé   qué  barullo— 
vo  dije:    a  tu   tierra   grullo 
aunque   sea   con    una   pata . 

Eran    duros    y    bastantes 
los  años  que  allá  pasaron— 
con  lo  que  ellos  me  enseñaron 
formaba   mi   capital— 
cuando  vine  me  enrolaron 
en  la  Guardia  Nnnonal. 


Me  había  ejercitan  al  naipe, 
el  juego  era  mi  carrera- 
hice   alianza   verdadera 
y  arreglé  una  trapisonda 
con  el  dueño  de  una  fonda 
que  entraba  en  la  peladera. 

Me   ocupaba   con   esmero 
en   floriar  una   baraja— 
él  la  guardaba  en  la  caja 
en  paquete  como  nueva; 
y  la  media   arroba   lleva 
quien  conoce  la  ventaja. 

Comete   un   error   inmenso 
quien   de  la   suerte  presuma, 
otro  más  hábil  lo  fuma, 
en  un  dos  por  tres  lo  pela— 
y  lo  larga  que  no  vuela 
porque  le  falta  una  pluma. 

Con   un   socio  que  lo  entiende 
se  arman  partidas  muy  buenas, 
queda  allí  la  plata  agena, 
quedan    prendas   y   botones— 
siempre   cain   a   esis  riuniones 
sonzos   con   las  manos   llenas. 

Hay  muchas   trampas  legales, 
recursos  del  jugador- 
no  cualquiera  es   sabedor 
a  lo  que   un   naipe  se  presta— 
con   una   cincha  bien   puesta 

Deja  a  veces  ver  la  boca 
se  la  pega   uno   al  mejor, 
haciendo    elqusee      !     m    aip     nip 
haciendo    el    que    se    descuida— 
juega  el  otro  ha.sta  la   vida 
y  es  seguro  que  se  ensarta, 
porque   uno  muestra   una   carta 
y  tiene  otra  prevenida. 

Al   monte,   las  precauciones 
no  han   de  olvidarse   jamas- 
debe   afirmarse  además 
los  dedos  para  el  trabajo— 
y  buscar  asiento  bajo 
que  le  dé  la  luz  de  atrás. 


Pa   tayar,   tome   la  luz- 
dé    la    sombra    al    alversario— 
acomódese   al   contrario 
en   todo  juego  caniao— 
tener  otro  ejercitao 
es  siempre  muy  necesario. 
El  contrario  abre  los  suyos, 

pero  nada  vé  el  que  es  ciego- 
dándole   soga,   muy  luego 
se  deja  pescar  el  tonto- 
todo   chapetón   cree   pronto 
que  sabe  mucho  en  el  juego. 

Hay  hombres  muy  inocentes 
y  que  a  las  carpetas  van— 
cuando   asariados   están, 
les  pasa  infinitas  veces, 
pierden   en   puertas  y  en   treses, 
y   dándoles   mamarán . 

El  que  no  sabe,  no  gana, 
aunque  ruegue  a  Santa  Rita— 
en  la  carpeta  a  un  mulita 
se  le  conoce  al   sentarse— 
y  conmigo,  era  matarse, 
no  podían  ni  a  la  manchita. 

En  el  nueve  y  otros  juegos 
llevo  ventaja  y  no  poca— 
y  siempre  que  dar  me  toca 
el  mal  no  tiene  remedio, 
porque  sé  sacar  del  medio 
y  sentar  la.  de  la  boca. 

En  el  truco,  al  más  pintao 
solía  ponerlo  en  apuro— 
cuanlo  aventajar  procuro, 
sé  tener,  como  fajadas, 
tiro  a  tiro  el  as  de  espadas 
o  flor,  o  envite  seguro. 

Yo   sé  defender  mi   plita 
y  lo  hago  como  el  primero— 
el  que  ha  de  jugar  dinero 
preciso  es  que  no  se  atonte- 
si  se  armaba  una  de  monte, 
tomaba  parte  el  fondero. 


Un  pastel,   como  un  paquete, 
sé   llevarlo  con   limpieza; 
dende    que    a    salir   empiezan 
no  hay  carta  que  no  recuérde- 
se  cual   se   gana  o  se   pierde 
en  cuanto  cain  a  la  mesa. 

También  por  estas  jugadas 
suele    uno   verse   en    aprietos- 
mas  yo  no  me  comprometo 
porque  sé  hacerlo  con  arte, 
y  aunque  les  corra  el   descarte 
no  se  descubre  el  secreto. 

Si    me   llamaban    al   dao 
nunca   me   solía   faltar 
un   cargado  que  largar, 
un  cruzao  para  el  más  vivo— 
y  hasta  atracarles  un  chivo 
sin  dejarlos  maliciar. 

Cargaba  bien   una   taba 
porque  la  sé  manejar- 
no  era  manco  en  el  billar, 
y  por  fin  de  lo  que  esplico 
digo  que  hasta   con  pichicos 
era  capaz  de  jugar. 

Es  un  vicio  de  mal  fin 
el  de  jugar  no  lo  niego- 
todo  el  que  vive  del  juego 
anda  a   la  pesca  de  un  bobo— 
y  es  sabido  que  es  un  robo 
ponerse  a  jugarle   a  un   ciego. 

Y  esto  digo   claramente 
porque  he  dejao  de  jugar— 
y  les  puedo   asigurar 
como   que   fui   del   oficio- 
más  cuesta   aprender  un   vicio 
que    aprender    a    trabajar. 

Un   ñapóles  mercachifle 
que  andaba  con  un  arpista, 
cayó   también   en   la  lista 
sin    dificulta    ninguna: 
lo  agarré  a  la  treinta  y  una 
y   le   daba   bola   vista. 


Se   vino   haciendo   el   chiquito, 
por  sacarme  esa  ventaja; 
en   el   pantano  se  encaja 
aunque  robo  se  le  hacía- 
lo cegó  Santa  Lucía 
y   desocupó  las  cajas. 

Lo   hubieran   visto   afligido 
llorar  por  las  chucherías— 
"Ma  gaña  o  con  picardía" 
decía   el  gringo  y  lagrimiaba, 
mientras  yo  en   un   poncho  alzaba 
todita   su   merchería. 

Quedó  allí  aliviao  del  peso 
sollozando  sin  consuelo- 
había   caído  en   el  anzuelo, 
tal  vez  porque  era  domingo, 
y  esa  calida  de  gringo 
no  tiene   Santo  en   el   Cielo. 

Pero  poco   aproveché 
de  fatura  tan  lucida— 
el   diablo   no   se  descuida, 
y  a  mí  me  seguía  la  pista 
un   ñato  muy  enredista 
que  era   Oficial   de   partida. 

Se  me  presentó  a  esigir 
la   multa   en   que   había  incurrido, 
que  el  juego  estaba  prohibido 
que   iba   a   llevarme   al   cuartel- 
tuve  que  partir  con  él 
todo    lo    que    había    alquirido. 

Empecé   a   tomarlo  entre  ojos 

por   esa    albitrariedá— 

yo  había   ganao,   es  verdá, 

con   recursos,  eso  sí; 

pero  él  me  ganaba  a  mí 

fundao  en  su  autoridá. 

Decían  que   por  un  delito 

mucho   tiempo   anduvo   mal— 

un    amigo   servicial 

lo   compuso  con   el   juez, 

v  poco  tiempo  después 

lo   pusieron    de    Oficial. 


En   recorrer  el   partido 
continuamente   se   empleaba— 
ningún   malevo   agarraba, 
pero  traia  en   un   carguero 
gallinas,   pavos,  corderos 
que  por  ay  recoletaba. 

N  ose  debía  permitir 
el  abuso  a  tal  estremo— 
mes  a  mes  hacía  lo  mesmo, 
y   ansí   decía   el   vecindario, 
"Este  ñato  perdulario 
ha    resucitao    el    diezmo". 

La  echaba  de  guitarrero 

y  hasta  de  concertador— 

sentao  en  el  mostrador 

lo    hallé    una    noche    cantando— 

y  le  dije  —  "co.  .  .    mo.  .  .    quiando 

con    ganas   de  oir   un    cantor". 

Me  echó  el  ñato  una  mirada 
que  me   quiso  devorar- 
mas  no  dejó  de  cantar 
y  se  hizo  el  desentendido- 
pero   ya   había   conocido 
que  no  lo  podía  pasar. 


Una    tarde    que    me   hallaba 
de  visita  —vino  el  ñato, 
y  para  darle  un  mal  rato 
dije    fuerte    "Ña...    to.  .  .    ribia 
no  cebe  con  la  agua   tibia". 

Y  me  la  entendió  el  mulato. 
Era  todo  en  el  Juzgao, 

y  como  que  se  achocó 
ay   nomás   me   contestó— 

"Cuando  el  caso   se  presiente 
te   he   de   hacer   tomar  caliente 

V  has   de   saber   quien   sov  yo". 
Por  causa   de   una  mujer 

se  enredó  más   la   cuestión— 
le  tenía  el  ñato  afición, 
ella  era  mujer  de  ley, 
moza  con  cuerpo  de  güey 
muv  blanda  de  corazón. 


La  hallé   una   vez  de   amasijo, 
estaba   hecha   un   embleso— 
y  le   dije   —"Me  intereso 
en  aliviar  sus  quehaceres, 
y  ansí,  señora,  si  quiere 
yo   le    arrimaré   los   güesos". 

Estaba  el  ñato  presente 
sentado  como  de   adorno — 
por  evitar  un   trastorno 
ella  al  ver  que  se  dijusta, 
me  contestó  —"Si  usté  gusta 
arrímelos  junto   al   horno". 

Ay  se  enredó  la  madeja 
y  su  enemista  conmigo— 
se   declaró  mi   enemigo, 
y   por    aquel    cumplimiento 
ya   sólo  buscó  el   momento 
de  hacerme  dar  un  castigo. 

Yo  veía  que  aquel  maldito 
me  miraba  con  rencor- 
buscando  el  caso  mejor 
de  poderme  echar  el  pial; 
y  no  vive  más  el  lial 
que  lo   que   quiere  el   traidor. 

No  hay  matrero  que  no  caiga, 
ni   arisco   que   no   se   amanse— 
ansí  yo,   dende  aquel  lance 
no  salía  de   algún   rincón— 
tirao  como  el    San    Ramón 
despus  que  se  pasa  el   trance. 

Me  le  escapé   con   trabajo 
en    diversas   ocasiones- 
era    de   los   adulones, 
me  puso  mal   con   el   Juez; 
hasta   que  a   lfin   una   vez 
me    agarró   en    las  elecciones, 
las    opiniones   dispersas 
andaban  listas  diversas- 
no   se   podían    arreglar- 
Recuerdo   que   esa   ocasión 
decían   que  el   Juez  por  triunfar 
hacía,  cosas  muy  perversas. 


Cuando   se   riunió  la   gente 
vino  a  ploclamarla  el   ñato— 
diciendo  con  aparato 
"Que  todo  andaría  muy  mal 
si   pretendía  cada  cual 
votar   por   un   candilato". 

Y   quiso   al   punto  quitarme 
la  lista  que  yo  llevé- 
mas  yo  se  la   mezquiné, 
y   ya    me    gritó    "Anarquista, 
has  de   votar  por  la  lista 
que   ha   mandao  el   Comiqué". 

Me  dio  vergüenza  de  verme 

tratado  de  esa  manera; 

y  como  si  uno  se  altera 

ya  no  es  fácil  de  que  ablande, 

le  dije   "Mande   el   que  mande 

yo  he  de  votar  por  quien  quiera" 

"En    las    carpetas   de   juego 
y  en  la  mesa  eletoral, 
a    todo   hombre   soy   igual- 
respeto   al    que  me   respeta, 
pero  el   naipe   y  la   boleta 
naides  me  lo  ha.  de  tocar". 

Ay  no  más  ya  me  cayó 
a    sable    la    polecía— 
aunque    era    una    picardía 
me   decidí   a   soportar— 
y  no  los   quise  peliar 
por  no  perderme  ese  día. 

Atra.vesao   me   agarró 

y   se   aprovechó   aquel   ñato— 

dende   que   sufrí   ese   trato 

no    dentro    donde    no    quepo— 

fi   a  ginefiar  en  el  ceno 

por  cuestión   de  candilatos. 

Injusticia    tan    notoria 
no   la   soporté  de   flojo- 
una  venda  de  mis  ojos 
vino   el   suceso    a   voltia.r— 
vi   que   teníamos  que  andar 
como  perro  con   tramojo. 


Dende  aquellas  eleciones 
se  siguió  el   batiburrillo- 
aquel  se  volvió  un  ovillo 
del  que  no  había  ni  noticía- 
les Señora   la  Justicia— 
y   anda  en   ancas  del  más  pillo! 

D'espués  de  muy  pocos  días, 
tal   vez  por  no  dar  espera 
y  que   alguno  no   se   fuera— 
hicieron  citar  la  gente, 
pa   riunir  un  contingente 
y  mandarlo  a  la  frontera. 

Se   puso   arisco   el   gauchaje, 
la   gente   está    acobardada— 
salió   la   partida   armada, 
y   trujo   como   perdices 
unos   cuantos   infelices 
que    entraron    en    la    voltiada. 

Decía   el   ñato  con   soberbia: 
"Esta  es   una   gente  indina, 
yo  los   rodié   a   la   sordina, 
no   pudieron    escapar; 
y  llevaba  orden  de  arriar 
todito   lo   que   camina". 

Cuando   vino   el   Comendante 
dipieron:    "Dios   nos   asista"— 
llegó  y   les  clavó   la   vista; 
yo   estaba    haciéndome   el    sonzo— 
le  echó  a  cada  uno  un  responso 
y  ya  lo  plantó  en  la  lista. 

"Cuádrate",    le   dijo    a    un    negro, 
"te   estás   haciendo  el   chiquito— 
cuando   sos  el   más  maldito 
que  se  encuentra  en  todo  el  pago, 
un   servicio  es  el   que   te   hago 
y  por  eso   te   remito". 

A  OTRO 

"Vos   no   cuidas    tu    familia 
ni   le  das  los  menesteres; 
visitas    otras    mujeres 
y   es   preciso,    calavera, 
que   aprendas  en   la   frontera 
a    cumplir   con    tus    deberes". 


A  OTRO 

'Vos  también   sos  trabajoso; 

cuando  es  preciso  votar 

hay  que  mandarte  llamar 

y  siempre  andas  medio  alzao— 

sos  un   desubordinao 

y  yo  te  voy  a  filiar" . 

A  OTRO 

"¿Cuánto    tiempo   hace   que   vos 
andas  en  este  partido? 
¿Cuántas  veces  has   venido 
a  la  citación  del  Juez? 
No  te  he  visto  ni  una  vez, 
has   de   ser   algún   perdido". 

A  OTRO 

"Este    es    otro   barullero 
predicando  noche  y  día 
que   pasa   en   la   pulpería 
irás  en   el   contingente 
y  anarquizando  a  la  gente— 
por    tamaña    picardía" . 

A  OTRO 

"Dende   la    anterior   remesa 
vos   andas   medio  perdido; 
la   autoridá   no  ha   podido 
jamás  hacerte   votar— 
cuando    te   mandan    llamar 
te  pasas  a  otro  partido". 

A  OTRO 

"Vos  siempre   andas   de  florcita, 

no    tenes    renta    ni    oficio; 

no  has   hecho  ningún    servicio, 

no  has  votado  ni   una  vez— 

marcha  —para  que  dejes 

de  andar  haciendo  perjuicio". 

A  OTRO 

"Dame  vos  tu  papeleta, 
yo  te  la  voy  a  tener— 
esta   queda  en  mi   poder, 
después  la  recogerás— 
y  ansí   si   te  resertás 
todos  te  pueden  prender". 


A  OTRO 

"Vos  porque  sos  ecetuao 
ya  te  querés  sulevar, 
no  vinistes  a  votar 
cuando    hubieron    votar 
cuando  hubieron  elecíones— 
no  te  valdrán  eseciones, 
yo  te  voy  a  enderezar". 

Y  a  éste  por  este  motivo, 
y  a  otro  por  otra  razón, 
toditos,    en    conclusión, 

sin  que  escapara  ninguno, 
fueron  pasando  uno  a  uno 
a  juntarse  en  un  rincón. 

Y  allí   las   pobres   hermanas, 
las  madres  y  las  esposas 
redamaban   cariñosas 

sus   láfrimas  de   dolor- 
pero  gemidos  de   amor 
no  remedían  estas  cosas. 

Nada   importa   que   una   madre 

se  desespere  o  se  queje— 

que  un  hombre  a  su  mujer  deje 

en  el  mayor  desamparo; 

hay  que  callarse,   o  es  claro 

que  lo  quiebran  por  el  eje. 

Dentran    después   a    empeñarse 
con  este  o  aquel  vecino*— 
y  como  en  el  masculino 
el    que   menos   corre  .vuela— 
deben   andar   con   cautela 
las  pobres,  me  lo  imagino. 

Muchas   al   Juez   acudieron, 
por   salvar   de  la  jugada; 
él  les  hizo  una  cuerpiada, 

Y  por  mostrar  su  inocencia, 
les  dijo:  'Tengan  nacencia 
pues  yo  no  puedo  hacer  nada". 

Ante  aquella  autoridá 
permanecían   suplicantes— 
v  después  de  hablar  bastante 
"Yo  me  lavo',  dijo  el  Juez, 
"como  Pila  tos  los  pies, 
esto  lo  hace  el  Comendante". 


De  ver  tanto  desamparo 
el  corazón  se  partía— 
había  madre  que  salía 
con  dos,  tres  hijos  o  más- 
uno  adelante,  otro  atrás— 
y  las  maletas  vacías. 

Dónde  irán,   pensaba   yo, 
a  perecer  de  miseria- 
las  pobres  si  de  esta  feria 
hablan   mal,   tienen   razón; 
pues  ha  y  bastante  materia 
para  tan  justa  aflición. 

Cuando  me  llegó  mi  turno 
dije  entre  mí   "ya   me   toca"— 
y  aunque  mi  falta  era  poca 
no  sé  porqué  me  asustába- 
les asiguro   que   estaba 
con  el  Jesús  en  la  boca. 

Me  dijo  que  yo  era  un  vago, 
un   jugador,    un   perdido— 
que  dende  que  fi  al  partido 
andaba  de  picaflor— 
que  había   de  ser  un  bandido 
como  mi  ante  sucesor. 

Puede  que  uno  tenga  un  vicio, 
y  que  de  él  no  se  reforme- 
mas  naides   está    conforme 
con   recebir  ese  trato: 
yo  conocí  que  era  el  ñato 
quien  le  había  dao  los  informes, 

Me  dentro  curiosidá 

al  ver  que  de  esa  manera 

tan   siguro   me  dijiera 

y  yo  inoraba  quien  era . 

que  fué  mi  padre  un  bandido; 

Me  empeñé  en  averiguarlo, 
luego  lo  había  conocido, 
promesas  hice  a  Jesús- 
tuve  por  fin   una  luz, 
y  supe  con  alegría 
que  era  el  autor  de  mis  días 
el  guapo  sargento  Cruz. 


Yo  conocía   bien   su   historia 
y   la    tenía   muy   presente- 
sabía    que    Cruz    bravamente, 
yendo  con   una  partida, 
había    jugado    la    vida 
por   defender   a   un   valiente. 

Y  hoy  ruego  a  mi  Dios  piadoso 
que   lo   mantenga   en    su   gloria; 
se   ha   de  conservar  su  historia 
en  el  corazón  del  hijo— 
él  al  morir  me  bendijo, 
yo  bendigo  su   memoria. 

Yo   juré   tener   enmienda 

y   lo   conseguí   deveras; 
puedo  decir   ande   quiera 
que   si   faltas   he   tenido 
de   todas  me   he   corregido 
dende   que   supe    quien   era. 

El  que  sabe  ser  buen  hijo 
a  los  suyos  se  parece— 
y  aquel   que  a  su  lado  crece 
y  a  su  padre  no  hace  honor 
como    castigo    merece 
de  la  desdicha  #1  rigor. 

Con    un    empeño    costante 
mis  faltas   supe  enmendar- 
todo   conseguí   olvidar, 
pero  por  desgracia  mía, 
el   nombre  de  Picardía 
no  me   lo   pude  quitar. 

Aquel   que  tiene  buen   nombre 

muchos   dijustos   ahorra— 

y  entre  tanta   mazamorra. 

no  olviden  esta  alvertencia: 

aprendí   por  esperencia 

que  el  mal  nombre  no  se  borra. 

He  servido  en  la  frontera 
en   cuerpo  de  milicia; 
no  por  razón   de  justicia 
como   sirve   cualesquiera. 


La  bolilla  me  tocó 
de  ir  a  pasar  malos  ratos 
por  la  faculta  del  ñato 
que   tanto  me  persiguió. 

Y  sufrí  en   aquel  infierno 
esa  dura  penitencia, 
por   una   malaquerencia 
de  un  oficial  subalterno. 

No  repetiré  las  quejas 
de  lo  que  se  sufre  allá — 
son  cosas  muy  dichas  yá 
y  hasta  olvidadas  de  viejas. 

Siempre   el   mesmo   trabajar 
siempre  el   mesmo    sacrificio, 
es  siempre  el  mesmo  servicio 
y  el  mesmo  nunca  pagar. 

Siempre   cubiertos  de  harapos 
siempre   desnudos  y  pobres, 
nunca  le  pagan  un  cobre 
ni  le   dan   jamás  un   trapo. 

Sin    sueldo   y   sin   uniforme 
lo   pasa   uno   aunque   sucumba, 
confórmese   con   la   tumba— 
y  sino.  .  .    no   se  conforme. 

Pues  si  usté  se  ensoberbece 
o  no  anda  muy  voluntario, 
le  aplican   un  novenario 
de  estacas  —que  lo  enloquecen. 

Andan    como   pordioseros 
sin  que  un  peso  los  alumbre- 
porqué  han   tomao  la  costumbre 
de    deberle    años    enteros. 

Siempre  hablan   de   lo   que  cuesta, 
que   allá   se   gasta   un   platal— 
pues  yo  no  he  visto  ni  un  rial 
en   lo  que  duró  la  fiesta. 
Es  servicio   estrordinario 

bajo  el  fusil  y  la  vara— 
sin    que    sepamos    qué    cara 
le  ha  dao   Dios  al   comisario. 


Pues  si  va  a  hacer  la  revista 
se  vuelve  como  una  bala, 
todo   parece   estudiao— 
Y  de  yapa  cuando  va, 

para    perderse    de    vista, 
es  lo  mesmo  que  luz  mala 
va  con  meses  atrasaos 
de  gente  que  ya  no  está. 

Pues  ni   adrede  que  lo  hagan 
podrán    hacerlo   mejor, 
cuando  cai,  cai  con  la  paga 
del    contingente    anterior. 

Porque  son   como   sentencia 
para   buscar  al   ausente, 
y   el   pobre   que   está   presente 
que   perezca   en   la   endigencia. 

Hasta    que   tanto   aguantar 
el  rigor  con  que  lo  tratan, 
o  se  resierta,  o  lo  matan, 
o  lo  largan   sin  pagar. 

De   ese   modo  es  el  pastel 
porque  el  gaucho  —ya.  es  un  hecho, 
no   tiene    ningn    derecho 
ni   naides  vuelve  por  él. 

La    gente   vive   marchita! 
si    viera    cuando   echan    tropa, 
les  vuela  a  todos  la  ropa 
que   parecen    banderitas. 

De   todos   modos  lo  cargan, 
y  al   cabo  de  tanto  andar— 
cuando    lo    largan,    lo    largan 
como   pa   echarse   a.  la   mar. 

Si    alguna   prenda   le    han    dao 
se   la  vuelven   a   quitar, 
poncho,    caballo,    recao, 
todo    tiene    que    dejar. 

Y  esos  pobres  infelices 
al  volver  a  su  destino- 
salen    como   unos   Longinos 
sin    tener  con   qué   cubrirse. 


A   mí   me   daban   congojas 
el   mirarlos  de  ese  modo— 
pues  el   más   aviao   de   todos 
es   un    perejil   sin    hojas. 
Aura   poco  ha   sucedido, 
con   un   invierno   tan   crudo 
largarlos  a  pié   y  desnudos 
pa   volver   a   su   partido. 

Y  tan   duro  es  lo  que  pasa, 
que   en    aquella    situación 
les  niegan   un   mancarrón 
para   volver  a   su   casa. 

¡Lo  tratan   como  a  un  infiel! 
completan    su    sacrificio 
no  dándole  ni   un  papel 
que    acredite    su    servicio. 

Y  tiene  que  regresar 

más  pobre   de  lo  que  jué— 
por   supuesto   a   la   mercé 
del   que    lo   quiere   agarrar. 

Y  no    averigüe   después 
de  los  bienes  que  dejó- 
de  hambre,  su  mujer  vendió 
por   dos   —lo   que   vale   diez. 

Y  como   están   convenidos 
a  jugarle  manganeta, 

a  reclamar  no  se  meta 
porque  ese  es   tiempo  perdido. 

Y  luego,  si  a  alguna  Estancia 
a  pedir  carne  se  arrima- 


ai  punto  le  cain  encima 
con  la  ley  de  la  vagancia. 

Y  ya  es  tiempo,  pienso  yo, 
de  no  dar  más  contingente— 
si   el   Gobierno  quiere  gente, 
que  la  pague  y  se  acabó. 

Y  sacó   ansí   en   conclusión, 
en    medio   de   mi   inorancia, 
que   aquí   el   nacer  en   Estancia 
es   como   una   maldición . 

Y  digo,   aunque   no  me  cuadre 
decir    lo   que   naides   dijo: 

la    Provincia   es   una   madre 
que   no   defiende   a   sus  hijos. 

Mueren  en   alguna  loma 

en   defensa   de   la   Ley, 

o  andan  lo  mesmo  que  el  güey, 

arando   pa    que    otros   coman. 

Y  he   de   decir   ansí   mismo, 
porque  de  adentro  me  brota, 
que   no   tiene   patriotismo 
quien   no   cuida   al    compatriota. 

Se  me  va  por  donde  quiera 
esta,  lengua   del   demonio- 
voy    a    darles    testimonio 
de  lo  que  vi  en  la  frontera. 
Yo   sé   que   el   único   modo, 
a  fin   de  pasarlo  bien, 
es  decir  a   todo  amén 
y  jugarle  risa   a   todo. 


El   que   no   tiene   colchón 

en   cualquier   parte  se   tiende— 

el  gato  busca  el  jogón 

y  ese  es  mozo  que  lo  entiende. 

De    aquí   comprender   se  debe, 
aunque  yo  hable  de  este  modo, 
que   uno  busca   su  acomodo 
siempre  lo  mejor  que  puede. 

Lo  pasaba   como  todos 
este   pobre   penitente- 
pero  salí  de   asistente 
y   mejoré   en   cierto   modo. 

pues    aunque    esas    privaciones 
causen   desesperación, 
siempre  es  mejor  el  jogón 
de    aquel    que    carga    galones. 

De   entonces   en    adelante 
algo    logré    mejorar, 
pues   supe    hacerme   lugar 
al   lado   del   Ayudante. 

El   se   daba   muchos   aires, 
pasaba    siempre   leyendo, 
decían    que    estaba    aprendiendo 
pa    recebirse   de   flaire. 

Aunque    lo    pifiaban    tanto 
jamás   lo  vi   dijustao— 
tenía   los   ojos   paraos 
como   los   ojos   de   un    Santo. 

Muy    delicao   —dormía   en    cuja- 
y  no  sé  porqué  sería- 
la   gente    lo   aborrecía 
y  lo  llamaban  LA  BRUJA. 

Jamás   hizo   otro   servicio 
ni  tuvo  más  comisiones, 
que   recebir   las   raciones 
de   víveres  y  de  vicios. 


Yo   me  pasé   a   su   jogón 
al   punto   que   me  sacó, 
y  ya  con  él  me  llevó, 
a   cumplir   su   comisión. 

Estos   diablos   de   milicos 
de   todo   sacan   partido— 
cuando   nos   vían    riunidos 
se   limpiaban    los   hocicos. 

Y   decían   en   los  jogones 
como  por  chocarrería— 
"Con    la    Bruja   y   Picardía 
van    a    andar   bien    las   raciones" 

A   mi    no   me   jué   tan   mal 
pues    mi    oficial    se    arreglaba; 
les  diré  lo  que  pasaba 
sobre   este   particular . 

Decían  que  estaban  de  acuerdo 
la  Bruja  y  el  proveedor, 
y  que   recebía   lo  pior— 
puede   ser   —pues  no   era   lerdo. 

Que    a    más   en    la   cantidá 
pegaba    otro    dentellón, 
y  que   por   cada   ración 
le  entregaban  la  mita. 

Pero    esas    murmuraciones 
no   faltan    en    campamento; 
déjenme   seguir  mi   cuento, 
o   historia  de  las  raciones. 

como  se  ha  dicho  a  su  mode- 
las cargábamos,   y  todo 
se   entrega   en   la   Mayoría. 
Sacan   allí  en  abundancia 
lo  que  les  toca  sacar— 
y  es  justo  que  han  de  dejar 
otro   tanto   de    ganancia. 

Van   luego  a  la  compañía, 
las   recibe  el   Comendante; 
el  que  de  un  modo  abundante 
sacaba   cuanto   quería . 


Ansí   la   cosa   liviana, 
va  mermada  por  supuesto— 
luego   se  le  entrega   el   resto 
al  oficial  de  semana. 

Araña,    quién    te   arañó? 
otra    araña    como    yo. 

Este   le   pasa   al   sargento 
aquello   tan   reducido— 
y  como  hombre  prevenido 
saca    siempre    con    aumento. 

Esta    relación    no   acabo 
si    otra   menudencia   ensarto 
el    sargento    llama    al    cabo 
para   encargarle   el    reparto. 

El    también    saca   primero 
y   no   se   sabe   turbar— 
naides  le  va  a  averiguar 
si  ha  sacado  más  o  menos. 

Y  sufren   tanto  bocado 
y   hacen    tantas   estaciones, 
que  va   casi   no  hav  raciones 
cuando  lleoan   al    soldado. 

Todo   es   como   pan    bendito! 
y   sucede   de    ordinario 
tener   que    juntarse    varios 
para   hacer   un    pucherito. 

Dicen    que   las   cosas  van 
con    arreglo    a    la    ordenanza- 
puede    ser!    pero    no    alcanzan, 
tan   poquito   es   lo   que   dan! 

Algunas    veces,    yo    pienso, 

y  es  muy  justo  que  lo  diga, 

sólo  llegaban  las  migas 

que    habían    quedao   en    el    lienzo 

Y   esplican    aquel    infierno 
en    que   uno    está    medio   loco, 
diciendo   que    dan    tan    poco 
porque   no   paga    el    Gobierno. 


Pero    eso    yo    no    lo    entiendo, 
ni   a   averiguarlo  me  meto; 
soy    inorante    completo, 
nada   olvido   y   nada   apriendo. 

Tiene   uno  que   soportar 
el   tratamiento  más  vil— 
a   palos  en   lo   civil, 
a   sable   en   lo  militar. 

El   vestuario   es   otro  infierno; 
si  lo  dan,   llega  a  sus  manos, 
en   invierno   el   de   verano— 
y  en   el  verano,   el   de  invierno 

Y  yo   el    motivo   no   encuentro 
ni   la   razón  que  esto  tiene, 
mas  dicen   que  eso  ya   viene 
arreglado    dende    adentro . 

Y  es    necesario    aguantar 
el   rigor   de   su   destino; 

el   gaucho  no   es   argentino 
sino  pa  hacerlo  matar. 

Ansí   ha   de    ser,   no   lo   dudo— 
y   por   eso   decía   un    tonto: 
'"Si  los  han  de  matar  pronto 
mejor  es  que  estén   desnudos". 

Pues  esa   miseria,  vieja 
no   se   remedia   jamás; 
todo    el    que    viene    detrás 
como  la  encuentra  la  deja. 

Y  se  hallan  hombres  tan  malos, 
que  dicen  de  buena  gana— 

el  gaucho  es  como  la  lana, 
se   limpia   y   compone   a   palos. 

Y  es   forzoso   el    soportar 
aunque  la   copa   se  enllene; 
parece  que  el  gaucho  tiene 
algún  pecao  que  pagar. 


Esto    contó    Picardía 

y    después   guardó    silencio, 

mientras    todos    celebraban 

con    placer    aquel    encuentro. 

Mas    una    casualidá, 

como   que   nunca   anda   lejos, 

entre    tanta    gente    blanca 

llevó    también    a    un    moreno, 
presumido    de   cantor 
y  que  se  tenía  por  bueno— 
y   como   quien   no   hace   nada, 
o   se    descuida   de   intento, 
pues   siempre   es   muy   conocido 
todo  aquel  que  busca  pleito— 
se    sentó    con    toda    calma, 
echó    mano    al    estrumento 
y  ya  le  pegó  un  rajido— 
Era   fantástico   el   negro, 
y  para   no  dejar  dudas 
medio    se    compuso    el    pecho. 

Todo    el    mundo    conoció 
la   intención    de   aquel   moreno- 
era    claro    el    desafío 
dirigido    a    Martín    Fierro, 
hecho   con    toda   arrogancia, 
de  un  modo  muy  altanero. 
Tomó   Fierro   la   guitarra, 
pues    siempre    se    halla    dispuesto- 
y  ansí  cantaron  los  dos 
en  medio  de  un  gran  silencio. 

MARTIN  FIERRO 

Mientras    suene    el    encordao, 

mientras    encuentre    el    compás, 

yo  no  he  de  quedarme  atrás 

sin  defender  la  parada— 

y   he   jurado   que    jamás 

me   la   han    de   llevar   robada. 

Atiendan    pues   los   oyentes 
y    cállense    los    mirones— 
a   todos  pido  perdones, 
pues  a  la   vista  resalta 
que  no  está  libre  de  falta 


A    un    cantor    lo   llaman    bueno, 
cuando    es    mejor    que    los   piores— 
y  sin   ser  de  los  mejores, 
encontrándose   dos  juntos 
es   deber  de   los  cantores 
el    cantar    de    contrapunto. 

El    hombre    debe    mostrarse 
cuando    la    ocasión    le    llegue— 
hace  mal   el   que   se   niegue 
dende    que    lo    sabe    hacer— 
y    muchos    suelen    tener 
vanagloria   en   que   los   rueguen. 

Cuando    mozo   fui    cantor- 
es  una   cosa   muy  dicha- 
mas  la   suerte   se  encapricha 
y   me   persigue   costante- 
de   ese    tiempo   en    adelante 
canté    mis    propias    desdichas. 

Y  aquellos   años   dichosos 
trataré  de  recordar— 
veré   si    puedo   olvidar 

tan  desgraciada  mudanza— 
y  quien  se  tenga  confianza 
tiemple  y  vamos  a  cantar. 

Tiemple    y    cantaremos    juntos, 
trasnochadas    no    acobardad- 
los   concurrentes    aguardan— 
y  porque  el  tiempo  no  pierdan, 
haremos    gemir    las    cuerdas 
hasta   que   las  velas  no   ardan. 

Y  el   cantor   que   se   presente, 
que   tenga    o  no   quien   lo   ampare, 
no  espere  que  yo  dispare 
aunque   su   saber   sea   mucho- 
vamos   en   el   mesmo  pucho 

a    prenderle   hasta    que    aclare. 

Y  seguiremos    si    gusta 
hasta   que   se   vaya   el   día- 
era    la    costumbre    mía 
cantar    las   noches   enteras- 
había    entonces,    donde    quiera, 
cantores   de   fantasía . 

quien    no    está   de    tentaciones. 


Y  si  alguno  no  se  atreve 
a  seguir  la  caravana 
o  si  cantando  no  gana, 
se  lo  digo  sin  lisonja- 
haga   sonar  una  esponja 
o  ponga  cuerdas  de  lana. 

EL  MORENO 
Yo  no  soy  señores  míos 
sino    un    pobre   guitarrero- 
pero  doy  gracias  al  Cielo 
porque  puedo,   en   la  ocasión, 
toparme  con  un  cantor 
que  esperimente   a   este   negro. 

Yo    también    tengo    algo    blanco, 
pues    tengo    blancos    los    dientes- 
sé  vivir  entre  las  gentes 
sin   que   me   tengan   en   menos— 
quien    anda    en    pagos    ágenos 
debe    ser    manso    y    prudente. 

Mi  madre  tuvo  diez  hijos, 
los    nueve    muy    regulares- 
tai  vez  por  eso  me  ampare 
la    Providencia    divina— 
en    los   güevos    de    gallina 
el   décimo   es  el   más  grande. 

El   negro  es   muy   amoroso, 
aunque   de   esto   no  hace   gala, 
nada  a  su  cariño  iguala 
ni   a   su   tierna   volunta— 
es  lo   mesmo  que  el  maca 
cría   los   hijos   bajo   el   ala. 

Pero   yo    he   vivido   libre 
y   sin    depender   de  naides— 
siempre  he  cruzado  a   los  aires 
como  el  pájaro  sin   nido- 
cuanto   sé   lo   he   aprendido 
porque  me  lo  enseñó  un  flaire. 

Y  sé   como  cualquier  otro 
el   porqué   retumba   el   trueno- 
porqué   son    las   estaciones 
del  verano  y  del  invierno- 
sé   también  de  donde  salen 
las  aguas  que  cain   del  Cielo. 


Yo  sé  lo  que  hay  en  la  tierra 
en   llegando  al  mesmo  centro— 
en   dónde   se  encuentra  el  oror 
en  dónde  se  encuentra  el  fierro— 
y   en    dónde    viven    bramando 
los    volcanes    que    echan    juego. 

Yo   sé   del    fondo   del   mar 
donde    los   pejes   nacieron— 
yo  sé  porqué  crece  el  árbol, 
y   porqué   silvan   los  vientos- 
cosas    que    inoran    los    blancos 
las   sabe   este   pobre   negro. 

Yo    tiro    cuando    me    tiran, 
cuando    me    aflojan,    aflojo; 
no    se    ha   de   morir    de    antojo 
quien    me   convide    a   cantar- 
para    conocer    a    un    cojo 
lo   mejor   es   verlo   andar. 

Y  si  una  falta  cometo 

en  venir  a  esta  riunión— 
echándola    de   cantor, 
pido   perdón   en    voz   alta— 
pues  nunca  se   halla  una  falta 
que   no   esista  otra   mayor. 

De  lo  que  un  cantor  esplica 

no   falta   qué   aprovechar— 

y   se   le   debe   escuchar 

aunque   sea   negro  el   que  cante— 

apriende   el  que  es  inorante, 

y  el  que  es  sabio,  apriende  más. 

Bajo   la    frente   más   negra 
hay   pensamiento   y   hay   vida- 
la   gente    escuche    tranquila 
no  me  haga  ningún  reproche— 
también   es   negra   la   noche 

V  tiene   estrellas  que   brillan. 
Estov  pues  a   su   mandao, 
empiece    a    echarme   la    sonda 
si   gusta   que  le   responda, 
aunque  con  lenguaje  tosco— 
en   lecturas   no   conozco 

la  jota  por  ser  rendonda. 


MARTIN   FIERRO 

Ah!  negro,  si  sos  tan  sabio 
no   tengas   ningún   recelo; 
pero   has   tragao   el    anzuelo, 
y   al   compás  del  estrumento— 
has  de  decirme  al  momento 
cuál    es   el    canto   del    Cielo. 

EL  MORENO 

Cuentan    que    de    mi    color 
Dios    hizo    al    hombre    primero— 
mas   los   blancos   altaneros, 
los    mesmos   que    lo    convidan, 
n2sta   de   nombrarlo  olvidan 
y   sólo   lo   llaman    negro. 

Pinta    el   blanco   negro   al    diablo, 
y  el  negro,  blanco  lo  pinta- 
blanca   la  cara  o  retinta 
no  habla  en  contra,  ni  en  favor- 
de  los  hombres  el   Criador 
no  hizo  dos  clases  distintas. 

Y    después    de    esta    alvertencia 
que   al   presente   viene   a  pelo- 
verá,    señores,    si   puedo, 
sigún    mi    escaso    saber, 
con    claridá   responder 
cuál   es  el  canto  del  Cielo. 

Los  cielos  lloran   y  cantan 
hasta   en   el   mavor   silencio- 
lloran  al  cair  el  rocío, 
cantan   al   silvar   los   vientos- 
lloran  cuando  cain  las  aguas 
cantan    cuando    brama    el    trueno. 

MARTIN   FIERRO 

Dios  hizo  al  blanco  y  al  negro 
sin    declarar    los    mejores- 
Íes    mandó    iguales    dolores 
bajo   de   una   mesma   cruz; 
mas    también    hizo    la    luz 
pa   distinguir  los  colores. 


Ansí    ninguno    se    agravie, 

no  se  trata  de  ofender— 

a   todo   se   ha   de  poner 

el   nombre   con   que   se   llama— 

y  a  naides  le  quita  fama 

lo   que   recibió   al   nacer. 

Y  ansí  me  gusta  un  cantor 
que   no   se   turba   ni   yerra— 

y   si   en    tu    saber   se   encierra 
el  de  los  sabios  projundos— 
decíme    cuál    en    el   mundo 
es    el    canto    de    la    Tierra. 

EL    MORENO 

Es    pobre   mi    pensamiento, 
es  escasa  mi  razón- 
mas    pa    dar    contestación 
mi    inorancia    no    me    arredra— 
también    da    chispas   la    piedra 
si   la  golpea  el  eslabón. 

Y  le   daré   una   respuesta 
sigún    mis   pocos   alcances- 
forman   un   canto   en   la   Tierra 
el   dolor  de   tanta   madre, 

el    gemir    de    los    que    mueren 
y   el    llorar   de   los   que   nacen . 

MARTIN    FIERRO 

Moreno,   alvierto  que   trais 
bien    dispuesta   la   garganta- 
sos  varón,  y  no  me  espanta 
verte   hacer   esos   primores— 
en    los   pájaros   cantores 
sólo  el  macho  es  el  que  canta. 

Y  ya  que  al  mundo  vinistes 
con   el   sino  de  cantar, 
no  te  vayas  a   turbar, 
no  te  agrandes  ni  te  achiques- 
es  preciso  que  me  espliques 
cuál  es  el   canto  del   Mar. 


EL  MORENO 

A   los   pájaros   cantores 
ninguno  imitar   pretende- 
de  un  don  que  de  otro  depende 
naides    se    debe    alabar— 
pues  la   urraca   apriende  hablar 
pero   sólo  la  hembra   apriende. 

Y  ayúdame  ingenio  mío 
para  ganar  esta  apuesta- 
mucho  el   contestar  me  cuesta- 
pero   debo  contestar— 
voy  a  decirle  en  respuesta 
cuál    es   el    canto   del    Mar. 

Cuando   la    tormenta   brama, 
el  Mar  que  todo  lo  encierra 
canta   de   un   modo   que   aterra 
como    si    el    mundo    temblara— 
parece   que   se  quejara 
de   que   lo  estreche  la   Tierra. 

MARTIN  FIERRO 

Toda    tu    sabiduría 
has  de  mostrar  esta  vez- 
ganarás    sólo    que    estés 
en    vaca    con    algún    Santo- 
la    noche   tiene   su    canto 
y  me  has  de   decir  cual  es. 

EL    MORENO 

No   galope   que   hay   aujeros 

le  dijo  a  un  guapo  un  prudente- 

le    contestó    humildemente, 

la   noche  por  canto  tiene 

esos  ruidos  que  uno  siente 

sin  saber  de  donde  vienen. 

Son  los  secretos  misterios 
que  las  tinieblas  esconden- 
son  los  ecos  que  responden 
a  la  voz  del  que  dá  un   grito, 
como  un  lamento  infinito 
que  viene  no  sé  de  donde. 
A  las  sombras  sólo  el   Sol 


las  penetra  y  las  impone— 

en   distintas  direciones 

se   oyen   rumores  inciertos— 

son  almas  de  los  que  han   muerto 

que    nos    piden    oraciones. 

MARTIN  FIERRO 

Moreno,   por   tus   respuestas 
ya  te  aplico  el  cartabón— 
pues   tenes   disposición 
y   sos  estruido  de   yapa— 
ni   las   sombras   se   te  escapan 
para   dar  esplicación . 

Pero  cumple   su   deber 
el   leal   diciendo   lo   cierto— 
y  por  lo  tanto  te  alvierto 
que  hemos  de  cantar  los  dos- 
dejando  en  la  paz  de  Dios 
las   almas  de  los  que   han  muerto. 

Y   el    consejo  del   prudente 
no   hace    falta    en    la    partida— 
siempre    ha    de   ser    comedida 
la   palabra    de    un    cantor— 
y   aura    quiero   que   me   digas 
de   donde    nace    el    amor. 

EL    MORENO 

A  pregunta   tan   escura 
trataré  de  responder— 
aunque  es  mucho  pretender 
de   un    pobre    negro   de    Estancia- 
mas   conocer   su    inorancia 
es   principio   del   saber. 

Ama  el   pájaro  en   los  aires 
que   cruza   por   donde   quiera— 
y  si  al  fin  de  su  carrera 
se  asienta  en   alguna   rama, 
con   su   alegre   canto   llama 
a    su    amante   compañera. 


La  fiera  ama  en  su  guarida 
de  la  que  es  rey  y  señor— 
allí  lanza   con   furor 
esos   bramidos   que    espantan- 
porqué  las  fieras  no  cantan, 
las   fieras   braman    de   amor. 

Ama   en   el  fondo  del   mar 
el   pez   de   lindo  color- 
ama   el   hombre   con   ardor, 
ama   todo  cuanto   vive- 
de  Dios  vida  se  recibe 
y   donde   hay  vida  hay  amor. 

MARTIN  FIERRO 

Me  gusta  negro  ladino 

lo  que   acabas  de   esplicar— 

ya   te  empiezo  a   respetar 

aunque    al    principio    me    rey— 

y   te   quiero   preguntar 

lo   que  entendés  por  la   Ley. 

EL  MORENO 

Hay  muchas  dotorerías 
que   yo  no  puedo  alcanzar— 
dende    que    aprendí    a    inorar 
de   ningún    saber   me   asombro- 
mas  no  ha  de  llevarme  al  hombro 
quien  me  convide  a  cantar. 

Yo  no   soy  cantor  ladino 
y   mi    habilidá   es   muy   poca— 
mas  cuando  cantar  me  toca 
me   defiendo   en   el   combate- 
porqué   soy  como  los  mates: 
sirvo  si  me  abren   la  boca. 

Dende   que   elige   a   su    gusto 
lo    más    espinoso   elige- 
pero   esto  poco  me   aflige 
v  le  contesto  a  mi  modo- 
la   Ley   se  hace  para   todos 
mas  solo  al  pobre  le  rige. 


La  Ley  es  tela  de  araña— 
en  mi  inorancia  lo  esplico, 
no  la  tema  el  hombre  rico— 
nunca  la  tema  el  que  mande— 
pues  la  ruempe  el  vicho  grande 
y  sólo  enrieda  a  los  chicos. 

Es  la  Ley  como  la  lluvia 
nunca  puede  ser  pareja— 
el  que  la  aguanta  se  queja, 
pero  el  asunto  es  sencillo- 
la  Ley  es  como  el  cuchillo, 
no  ofende  a  quien  lo  maneja. 

Le  suelen  llamar  espada 
y  el  nombre  le  viene  bien- 
ios que  la  gobiernan  ven 
a  dónde  han  de  dar  el  tajó- 
le cai  al  que  se  halla  abajo 
y  corta  sin  ver  a  quien. 

Hay  muchos  que  son  dotores 

v  de  su  cencía  no  dudo— 

j 

mas  yo  soy  un  negro  rudo, 
y  aunque  de  esto  poco  entiendo, 
estoy  diariamente  viendo 
que  aplican  la  del  embudo. 

MARTIN  FIERRO 

Moreno,  vuelvo  a  decirte, 
ya  conozco  tu  medida- 
has  aprovechao  la  vida 
y  me  alegro  de  este  encuentro— 
ya  veo  que  tenes  adentro 
capital  pa  esta  partida 

Y  aura  te  voy  a  deci 
porque  en  mi  deber  está— 
y  hace  honor  a  la  verdá 
quien  a  la  verdá  se  duebla, 
que  sos  por  juera   tinieblas 
y  por  dentro  claridá. 


No  ha  de  decirse  jamás 
que  abusé  de  tu  pacencia— 
y  en  justa  correspondencia 
si  algo  querés  preguntar— 
podes  al  punto  empezar 
pues  ya  tenes  mi  licencia. 

EL  MORENO 

No  te  trabes  lengua  mía, 
no  te  vayas  a  turbar- 
nadie  acierta  a.ntes  de  errar— 
y  aunque  la  fama  se  juega— 
el  que  por  gusto  navega 
no  debe  temerle  al  mar. 

Voy  a  hacerle  mis  preguntas 
ya  que  a  tanto  me  convida— 
y  venceré  en  la  partida 
si  una  esplicación  me  da— 
sobre  el  tiempo  y  la  medida, 
el  peso  y  la  cantidá. 

Suya  será  la  vitoria 
si  es  que  sabe  contestar- 
se lo  debo  declarar 
con  claridá,  no  se  asombre, 
pues  hasta  aura  ningún  hombre, 
me  lo  ha  sabido  esplicar. 

Quiero  saber  v  lo  inoro, 
pues  en  mis  libros  no  está, 
y  su  respuesta  vendrá 
a  servirme  de   gobierno- 
para  que  fin  el  Eterno 
ha  criao  la  cantidá. 

MARTIN  FIERRO 

Moreno  te  dejas  cair 
como  carancho  en  su  nido; 
ya  veo  que  sos  prevenido 
mas  también  estoy  dispuesto— 
veremos  si  te  contesto 
y  si  te  das  por  vencido. 

Uno  es  el  Sol  —  uno  el  Mundo, 
sola  v  única  es  la  Luna— 
ansí  han   de  saber  que  Dios 


no  crió  cantidá  ninguna— 

el  Ser  de  todos  los  seres 

sólo  formó  la  unida— 

lo  demás  lo  ha  criado  el  hombre 

después  que  aprendió  a  contar. 

EL  MORENO 

Veremos  si  a  otra  pregunta 
dá  una  respuesta  cumplida— 
el  Ser  que  ha  criado  la  vida 
lo  ha  de  tener  en  su  archivo- 
mas  yo  inoro  qué  motivo 
tuvo  al  formar  la  medida. 

MARTIN  FIERRO 

Escucha  con  atención 
lo  que  en  mi  inorancia  arguyo: 
la  medida  la  inventó 
el   hombre  para  bien   suyo— 
y  la  razón  no  te  asombre, 
pues  es  fácil  presumir- 
Dios  no  tenía  que  medir 
sino  la  vida  del  hombre. 

EL  MORENO 

Si  no  falla  su  saber 
por  vencedor  lo  confieso- 
debe  aprender  todo  eso 
quien  a  cantar  se  dedique— 
y  aura  quiero  que  me  explique 
lo  que  significa  el  peso. 

MARTIN  FIERRO 

Dios  guarda  entre  sus  secretos 
el  secreto  que  eso  encierra, 
y  mandó  que  todo  peso 
cayera  siempre  a  la  tierra— 
y  según  compriendo  yo, 
dende  que  hay  bienes  y  males, 
fue  el  peso  para  pesar 
las  culpas  de  los  mortales. 

EL  MORENO 

Si  responde  a  esta  pregunta 
téngase  por  vencedor— 


doy  la  derecha  al  mejor— 
y  respóndame  al  momento— 
cuándo  formó  Dios  el  tiempo 
y  porqué   lo  dividió. 


MARTIN  FIERRO 

Moreno,  voy  a  decir, 
según  mi  saber  alcanza— 
el  tiempo  sólo  es  tardanza 
de  lo  que  está  por  venir- 
no  tuvo  nunca  principio 
ni  jamás  acabará- 
porqué  el  tiempo  es  una  rueda, 
y  rueda  es  eternidá— 
y  si  el  hombre  lo  divide 
sólo  lo  hace  en  mi  sentir 
por  saber  lo  que  ha  vivido 
o  le  resta  que  vivir. 


Ya  te  he  dado  mis  respuestas, 
mas  no  gana  quien  despunta, 
si  tenes  otra  pregunta 
o  de  algo  te  has  olvidao, 
siempre   estoy   a    tu    mandao 
para  sacarte  de  dudas. 


No  procedo  por  soberbia 

ni  tampoco  por  jactancia, 

mas  no  ha  de  faltar  constancia 

cuando  es  preciso  luchar— 

y  te  convido  a  cantar 

sobre  cosas  de  la  Estancia. 


Ansí  prepara  moreno 

cuanto  tu  saber  encierre— 

y  sin  que  tu  lengua  yerre, 

me  has  de  decir  lo  que  empriende 

e\  que  del  tiempo  depende, 

en  los  meses  que  train  erre. 


EL  MORENO 

De  la  inorancia  de  naides 
ninguno  debe  abusar— 
y  aunque  me  puede  doblar 
todo  el  que  tenga  más  arte, 
no  voy  a  ninguna  parte 
a  dejarme  machetiar. 

He  reclarao  que  en  leturas 
soy   redondo  como  jota- 
no  avergüence  mi  redota 
pues  con  claridá  le  digo- 
no  me  gusta  que  conmigo 
naide  juegue  a  la  pelota. 

Es  buena  ley  que  el  más  lerdo 
debe   perder   la   carrera— 
Ansí  le  pasa  a  cualquiera 
cuando  en  competencia  se  halla 
un  cantor  de  media  talla 
con  otro  de  talla  entera. 

No  han  visto  en  medio  del  campo 
al  hombre  que  anda  perdido- 
dando  güeltas  afligido 
sin  saber  donde  rumbiar— 
ansí  le  suele  pasar 
a  un  pobre  cantor  vencido. 

También  los  árboles  crujen 

si  el  ventarrón  los  azota— 

y  si  aquí  mi  queja  brota 

con  amargura,  consiste— 

en  que  es  muy  larga  y  muy  triste 

la  noche  de  la  redota. 

Y  dende  hoy  en  adelante, 
pongo  de  testigo  al  Cielo, 
para  decir  sin  recelo 
que  si  mi  pecho  se  inflama 
no  cantaré  por  la  fama 
sino    por    buscar    consuelo. 

Vive  ya  desesperado 
quien  no  tiene  que  esperar— 
a  lo  que  no  ha  de  durar 
ningún  cariño  se  cobre— 


las  alegrías  en   un   pobre 
son  anuncios  de  un  pesar. 

Y  este  triste  desengaño 
me  durará  mientras  viva— 
aunque  un  consuelo  reciba 
jamás  he  de  alzar  el  vuelo— 
quien  no  nace  para  el  Cielo 
de  valde  es  que  mire  arriba. 

Y  suplico  a  cuantos  me  oigan 
que  me  permitan  decir, 

que  al  decidirme  a  venir 
no  sólo  jué  por  cantar, 
sino  porque   tengo  a  más 
otro  deber  que  cumplir. 

Ya  saben  que  de  mi  madre 
fueron  diez  los  que  nacieron- 
mas  ya  no  esiste  el  primero 
y  más  querido  de  todos- 
murió  por  injustos  modos 
a  manos  de  un  pendenciero. 

Los  nueve  hermanos  restantes 
como  güérfanos  quedamos— 
den  de  entonces  lo  lloramos 
sin  consuelo,  créanmelo— 
y  al  hombre  que  lo  mató 
nunca  jamás  lo  encontramos. 

Y  queden  en  paz  los  güesos 
de  aquel  hermano  querido— 
a  moverlos  no  he  venido, 
mas  si  el  caso  se  presenta— 
espero  en  Dios  que  esta  cuenta 
se  arregle  como  es  debido. 

Y  si  otra  ocasión  payamos 
para  que  esto  se  complete, 
por  mucho  que  lo  respte 
cantaremos,  si  le  gusta 
sobre  las  muertes  injustas 
que  algunos  hombres  cometen. 

Y  aquí  pues,  señores  míos, 
diré  como  en  despedida, 
que  todavía  andan  con  vida 
los  hermanos  del  dijunto— 


que  recuerdan  este  asunto 
y  aquella  muerte  no  olvidan. 

Y  es  misterio  tan  projundo 
lo  que  está  por  suceder, 
que  no  me  debo  meter 

a  echarla  aquí  de  adivino; 
lo  que  decida  el  destino 
después  lo  habrá  de  saber. 

MARTIN  FIERRO 

Al  fin  cerrastes  el  pico 
después  de  tanto  charlar, 
ya  empezaba  a  maliciar, 
al   verte   tan   entonao, 
que  traías  un  embuchao 
y  no  lo  querías  largar. 

Y  ya  que  nos  conocemos 
basta  de  conversación; 
para  encontrar  la  ocasión 
no  tienen  que  darse  priesa— 
ya  conozco  yo  que  empieza 
otra  clase  de  junción. 

Yo  no  sé  lo  que  vendrá, 
tampoco  soy  adivino- 
pero  firme  en  mi  camino 
hasta  el  fin  he  de  seguir- 
todos  tienen  que  cumplir 
con  la  ley  de  su  destino. 

Primero  fue  la  frontera 
por  persecución  de  un  Juez- 
Ios  indios  fueron  después, 
y  para  nuevos  estrenos- 
aura  son  estos  morenos 
pa  alivio  de  mi  vejez. 

La  madre  echó  diez  al  mundo, 
lo  que  cualquiera  no  hace— 
y  talvez  de  los  diez  pase 
con  iguales  condiciones- 
la  mulita  pare  nones 
todos  de  la  mesma  clase. 


A  hombre  de  humilde  color 
¡nunca    sé   facilitar, 
cuando  se  llega  a  enojar 
suele  ser  de  mala  entraña- 
se vuelve  como  la  araña, 
siempre  dispuesta  a  picar. 

Yo  he  conocido  a  toditos 
los  negros   más  peliadores— 
había  algunos  superiores 
de  cuerpo  y  de  vista  —  ay  juna- 
si  vivo  les  daré  una .  .  . 
historia  de  las  mejores. 

Mas  cada  uno  ha  de  tirar 
en  el  yugo  en  que  se  vea; 
yo  ya  no  busco  peleas, 
las  contiendas  no  me  gustan- 
pero  ni  sombras  me  asustan 
ni  bultos  que  se  menean. 

La  creía  ya  desollada, 
más  todavía  falta  el  rabo— 
y  por  lo  visto  no  acabo 
de  salir  de  esta  jarana— 
pues  esto  es  lo  que  se  llama 
remachársele  a  uno  el  clavo. 

31 
Y  después  de  estas  palabras 
que  ya.  la  intención  revelan, 
procurando    los   presentes 
que  no  se  armara  pendencia, 
se  pusieron  de  por  medio 
y  la  cosa  quedó  quieta- 
Martín  Fierro  y  los  muchachos 
evitando  la  contienda, 
montaron  y  paso  a  paso 
como  el  que  miedo  no  lleva, 
a,  la  costa  de  un  arroyo 
llegaron  a  echar  pie  a  tierra. 
Desensillaron  los  pingos 
y  se  sentaron  en  rueda, 
refiriéndose  entre  sí 
infinitas  menudencias; 
porque  tiene  muchos  cuentos 
y  muchos  hijos  la  ausencia. 
Allí  pasaron  la  noche 
a  la  luz  de  las  estrellas, 
porque  ese  es  un  cortinao 


que  lo  halla  uno  donde  quiera, 
y  el  gaucho  sabe  arreglarse 
como  ninguno  se  arregla— 
el  colchón  son  las  caronas, 
el  lomillo  es  cabecera, 
el  cojinillo  es  blandura 
y  con  el  poncho  o  la  jerga 
para  salvar  del  rocío 
se  cubre  hasta  la  cabeza- 
tiene  su  cuchillo  al  lado, 
pues  la  precaución  es  buena; 
freno  y  rebenque  a  la  mano, 
y  teniendo  el  pingo  cerca, 
que  pa  asigurarlo  bien, 
la  argolla  del  lazo  en  tierra— 
aunque  el  atar  con  el  lazo 
dá  del  hombre  mala  idea- 
se duerme  ansí  muy  tranquilo 
todita  la  noche  entera— 
y  si  es  lejo  del  camino 
como  manda   la   prudencia, 
más  seguro  que  en  su  rancho 
uno  ronca  a  pierna  suelta. 
Pues  en  el  suelo  no  hay  chinches, 
y  es  una  cuja  camera 
que  no  ocasiona  disputas 


y  que  naide  se  la  niega— 
además  de  eso,  una  noche 
la  pasa  uno  como  quiera, 
y  las  va  pasando  todas 
haciendo  la  mesma  cuenta— 
y  luego  los  pajaritos 
al  aclarar  lo  despiertan- 
porqué  el  sueño  no  lo  agarra 
a  quien  sin  cenar  se  acuesta. 
Ansí  pues  aquella  noche 
jué  para  ellos  una  fiesta, 
pues  todo  parece  alegre 
cuando  el  corazón  se  alegra- 
no  pudiendo  vivir  juntos 
por  su  estado  de  pobreza, 
resolvieron   separarse, 
y  que  cada,  cual  se  juera 
a  procurarse  un  refugio 
que  aliviara  su  miseria. 
Y  antes  de  desparramarse 
para  empezar  vida  nueva, 
en  aquella  soledá 
Martín  Fierro  con  prudencia- 
a  sus  hijos  y  al  de  Cruz 
les  habló  de  esa  manera. 


32 


Un  padre  que  dá  consejas 
más  que  padre  es  un  amigo, 
ansí  como  tal  les  digo 
que  vivan  con  precaución- 
Nadie  sabe  en  qué  rincón 
se  oculta  el  que  es  su  enemigo. 

Yo  nunca  tuve  otra  escuela 
que  una  vida  desgraciada- 
no  estrañen  si  en  la  jugada 
alguna  vez  me  equivoco— 
pues  debe  saber  muv  poco 
aquel  que  no  aprendió  nada. 


Hay  hombres  que  de  su  cencía 
tienen  la  cabeza  llena 
hay  sabios  de  todas  menas, 
mas  digo  sin  ser  muy  ducho- 
es  mejor  que  aprender  mucho 
el  aprender  cosas  buenas. 

No  aprovechan  los  trabajos 
si  no  han  de  enseñarnos  nada— 
el  hombre,  de  una  mirada 
todo  ha  de  verlo  al  momento— 
el  primer  conocimiento 
es  conocer  cuando  enfada. 


W'ñMiM 

)  \w 


Su  esperanza  no  la  cifren 
nunca  en  corazón  alguno— 
en  el  mayor  infortunio 
pongan  su  confianza  en  Dios- 
de  los  hombres,  sólo  en  uno, 
con  gran  precaución  en  dos. 

Las  faltas  no  tienen  límites 
como  tienen  los  terrenos— 
se  encuentran  en  los  más  buenos, 
y  es  justo  que  les  prevenga- 
aquel  que  defetos  tenga, 
disimule  los  ágenos. 

Al  que  es  amigo,  jamás 
lo  dejen  en  la  estacada, 
pero  no  le  pidan  nada 
ni  lo  aguarden  todo  de  él— 
siempre  el  amigo  más  fiel 
es  una  conducta  honrada. 

Ni  el  miedo  ni  la  codicia 
es  bueno  que  a  uno  lo  asalten— 
ansí  no  se  sobresalten 
por  los  bienes  que  perezcan- 
ai  rico  nunca  le  ofrezcan 
y  al  pobre  jamás  le  falten. 

Bien  lo  pasa  hasta  entre  Pampas 
el  que  respeta  a  la  gente— 
el  hombre  ha  de  ser  prudente 
para  librarse  de  enojos- 
cauteloso  entre  los  flojos 
moderado  entre  valientes. 


El  trabajar  es  la  Ley 
porque  es  preciso  alquirir— 
no  se  espongan  a  sufrir 
una  triste  situación- 
sangra  mucho  el  corazón 
del  que  tiene  que  pedir. 


Debe  trabajar  el  hombre 
para  ganarse  su  pan; 
pues  la  miseria  en  su  afán 
de  perseguir  de  mil  modos- 
llama  en  la  puerta  de  todos 
y  entra  en  la  del  haragán. 


A  ningún  hombre  amenacen 
porque  naides  se  acobarda- 
poco  en  conocerlo  tarda 
quien  amenaza  imprudente— 
que  hay  un  peligro  presente 
y  otro  peligro  se  aguarda. 

Para  vencer  un  peligro, 
salvar  de  cualquier  abismo, 
por  esperiencia  lo  afirmo, 
más  que  el  sable  y  que  la  lanza- 
suele  servir  la  confianza 
que  el  hombre  tiene  en  sí  mismo. 

Nace  el  hombre  con  la  astucia 
que  ha  de  servirle  de  guía— 
sin  ella  sucumbiría, 
pero  sigún  mi  esperen  cia- 
se vuelve  en  unos  prudencia 
v  en  los  otros  picardía 

Aprovecha  la  ocasión 
el  hombre  que  es  diligente— 
v  ténganlo  bien  presente, 
si  al  compararla  no  verro— 
la  ocasión  es  como  el  fierro, 
se  ha  de  machacra  caliente. 

Muchas  cosas  pierde  el  hombre 
que  a  veces  las  vuelve  a  hallar- 
pero  les  debo  enseñar 
y  es  bueno  que  lo  recuerden- 
si  la  vergüenza  se  pierde 
jamás  se  vuelve  a  encontrar. 

Los  hermanos  sean  unidos 
porque  esa  es  la  lev  primera- 
tengan  unión  verdadera 
en  cualquier  tiempo  que  sea— 
porque  si  entre  ellos  pelean 
los  devoran  los  de  ajuera. 

Respeten   a  los  ancianos, 
el  burlarlos  no  es  hazaña- 
si  andan  entre  gente  estraña 
deben  ser  muy  precavidos— 
pues  por  igual  es  tenido 
quien  con  malos  se  acompaña. 


La  cigüeña  cuando  es  vieja 
pierde  la  vista  —  y  procuran 
cuidarla  en  su  edá  madura 
todas  su  hijas  pequeñas— 
apriendan  de  las  cigüeñas 
este  ejemplo  de  ternura. 

Si  les  hacen  una  ofensa, 
aunque  la  echen  en  olvido 
vivan  siempre  prevenidos; 
pues  ciertamente  sucede— 
que  hablará  muy  mal  de  ustedes 
aquel  que  los  ha  ofendido. 

El  que  obedeciendo  vive 
nunca  tiene  suerte  blanda- 
mas  con  su  soberbia  agranda 
el  rigor  en  que  padece— 
obedezca  el  que  obedece 
y  será  bueno  el  que  manda. 

Procuren  de  no  perder 
ni  el  tiempo,  ni  la  vergüenza- 
como  todo  hombre  que  piensa 
procedan  siempre  con  juicio— 
y  sepan  que  ningún  vicio 
acaba  donde  comienza. 

Ave  de  pico  encorvado 
le  tiene  al  robo  afición- 
pero  el  hombre  de  razón 
no  roba  jamás  un  cobre— 
pues  no  es  vergüenza  ser  pobre 
y  es  vergüenza  ser  ladrón. 

El  hombre  no  mate  al  hombre 
ni  pelee  por  fantasía- 
tiene  en  la  desgracia  mía 
un  espejo  en  qué  mirarse— 
saber  el  hombre  guardarse 
es  la  gran  sabiduría. 

La  sangre  que  se  redama 
no  se  olvida  hasta  la  muerte- 
la  impresión  es  de  tal  suerte, 
que  a  mi  pesar,  no  lo  niego— 
cai  como  gotas  de  fuego 
en  la  alma  del  que  la  vierte. 


Es  siempre,  en  toda  ocasión, 
el  trago  el  pior  enemigo— 
con  cariño  se  los  digo, 
recuérdenlo  con  cuidado- 
aquel  que  ofiende  embriagado 
merece  doble  castigo. 

Si  se  arma  algún  revolutis 
siempre  han  de  ser  los  primeros- 
no  se  muestran  altaneros 
aunque  la  razón  les  sobre— 
en  la  barba  de  los  pobres 
apriendan  pa  ser  barberos. 

Si  entregan  su  corazón 
a  alguna  mujer  querida 
no  le  hagan  una  partida 
que  la  ofienda  a  la  mujer— 
siempre  los  ha  de  perder 
una  mujer  ofendida. 

Procuren,  si  son  cantores, 
el  cantar  con  sentimiento- 
no  tiemplen  el  estrumento 
por  sólo  el  gusto  de  hablar— 
y  acostúmbrese  a   cantar 
en  cosas  de  jundamento. 

Y  les  doy  estos  consejos 
que  me  ha  costado  alquirirlos, 
porque  deseo  dirigirlos, 
pero  no  alcanza  mi  cencía 
hasta  darles  la  prudencia 
que  precisa  pa  seguirlos. 

Estas  cosas  y  otras  muchas, 
medité  en  mis  soledades- 
sepan  que  no  hay  falsedades 
ni  error  en  estos  consejos- 
es  de  la  boca  del  viejo 
de  ande  salen  las  verdades. 

33 
Después  a  los  cuatro  vientos 
los  cuatro  se  dirijieron— 
una  promesa  se  hicieron 
que  todos  debían  cumplir- 
mas  no  la  puedo  decir 
pues  secreto  prometieron. 


Le  al  vierto  solamente, 
y  esto  a  ninguno  le  asombre, 
pues  muchas  veces  el  hpmbre 
tiene  que  hacer  de  ese  modo- 
convinieron  entre  todos 
en  mudar  allí  de  nombre. 


Sin  ninguna  intención  mala 
le  hicieron,  no  tengo  duda- 
pero  es  la  verdá  desnuda, 
siempre  suele  suceder- 
aquel  que  su  nombre  muda 
tiene  culpas  que  esconder. 

Y  ya  dejo  el  estrumento 
con  que  he  divertido  a  ustedes- 
todos  conocerlo  pueden 
que  tuve  constancia  suma- 
este  es  un  botón  de  pluma 
que  no  hay  quien  lo  desenriede. 


Con  mi  deber  he  cumplido— 
y  ya  he  salido  del  paso, 
pero  diré,  por  si  acaso, 
pa  que  me  entiendan  los  criollos 
todavía  me  quedan  rollos 
por  si  se  ofrece  dar  lazo. 

Y  con  esto  me  despido 
sin  espresar  hasta  cuando— 
siempre  corta  por  lo  blando 
el  que  busca  lo  seguro- 
mas  yo  corto  por  lo  duro 
y  ansí  he  de  seguir  cortando 

Vive  el  águila  en  su  nido, 
el  tigre  vive  en  la  selva, 
el  zorro  en  la  cueva  agena, 
y  en  su  destino  inconstante 
sólo  el  gaucho  vive  errante 
donde  la  suerte  lo  lleva. 


Es  el  pobre  en  su  orfandá 
de  la  fortuna  el  desecho- 
porqué  naides  toma  a  pecho 
el  defender  a  su  raza- 
debe  el  gaucho  tener  casa, 
escuela,  iglesia  y  derechos. 

Y  han  de  concluir  algún  día 
estos  enriedos  malditos- 
la  obra  no  1a  facilito, 
porque  aumentan  el  fandango— 
bs  que  están  como  el  chimango 
sobre  el  cuero  y  dando  gritos. 

Mas  Dios  ha  de  permitir 
que  esto  llegue  a  mejorar- 
pero  se  ha  de  recordar 
para  hacer  bien  el  trabajo, 
que  el  fuego,  pa  calentar, 
debe  ir  siempre  por  abajo. 

En  su  ley  está  el  de  arriba 
si  hace  lo  que  le  aproveche- 
de  sus  favores  sospeche 
hasta  el  mesmo  que  lo  nombra— 
siempre  es  dañosa  la  sombra 
del  árbol  que  tiene  leche. 

Al  pobre  al  menor  descuido 
lo  levantan  de  un  sogazo- 
pero  yo  compriendo  el  caso 
y  esta  consecuencia  saco— 
el  gaucho  es  el  cuero  flaco, 
da  los  tientos  para  el  lazo. 
Y  en  lo  que  explica  mi  lengua 
todos  deben  tener  fe; 
ansí,  pues,  entiéndanme, 
con  codicias  no  me  mancho- 
no  se  ha  de  llover  el  rancho 
en  donde  este  libro  esté. 


Permítanme  descansar, 
¡pues  he  trabajado  tanto! 
en  este  punto  me  planto 
y  a  continuar  me  resisto— 
estos  son  treinta  y  tres  cantos, 
que  es  la  mesma  edá  de  Cristo. 

Y  guarden  estas  palabras 
que  les  digo  al  terminar- 
en mi  obra  he  de  continuar 
hasta  dárselas  concluida- 
si  el  ingenio  o  si  la  vida 

no  me  llegan  a  faltar. 

Y  si  la  vida  me  falta, 
ténganlo  todos  por  cierto, 

que  el  gaucho,  hasta  en  el  desierto 
sentirá  en  tal  ocasión- 
tristeza  en  el  corazón 
al  saber  que  yo  estoy  muerto. 

Pues  son  mis  dichas  desdichas 
las  de  todos  mis  hermanos— 
ellos  guardarán  ufanos 
en  su  corazón  mi  historía- 
me tendrán  en  su  memoria 
para  siempre  mis  paisanos. 

Es  la  memoria  un  gran  don, 
calida  muy  meritoria— 
y  aquellos  que  en  esta  historia 
sospechen  que  les  doy  palo- 
sepan   que  olvidar  lo  malo 
también  es  tener  memoria. 

Mas  nadie  se  crea  ofendido 
pues  a  ninguno  incomodo— 
y  si  canto  de  este  modo 
por  encontrarlo  oportuno— 
no  es  fara  mal  de  ninguno 
sino  fara  bien  de  todos. 


F     I      N 
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)