/* ===========================================================
   Test Auxiliar de Cociña · Xunta de Galicia (subgrupo C2)
   Aplicación de estudio tipo test. Funciona sin conexión.
   Todo el progreso se guarda en el propio dispositivo.
   =========================================================== */
'use strict';

/* ---------- catálogo de temas ---------- */
const TEMAS = {
  G1:{es:'Constitución española de 1978',gl:'Constitución española de 1978',p:'general'},
  G2:{es:'Estatuto de autonomía de Galicia',gl:'Estatuto de autonomía de Galicia',p:'general'},
  G3:{es:'Ley 39/2015 procedimiento administrativo',gl:'Lei 39/2015 procedemento administrativo',p:'general'},
  G4:{es:'Ley 1/2016 transparencia y buen gobierno',gl:'Lei 1/2016 transparencia e bo goberno',p:'general'},
  G5:{es:'Ley 2/2015 empleo público de Galicia',gl:'Lei 2/2015 emprego público de Galicia',p:'general'},
  G6:{es:'Ley 7/2023 igualdad efectiva',gl:'Lei 7/2023 igualdade efectiva',p:'general'},
  G7:{es:'RDL 1/2013 derechos discapacidad',gl:'RDL 1/2013 dereitos discapacidade',p:'general'},
  G8:{es:'Ley 31/1995 prevención riesgos laborales',gl:'Lei 31/1995 prevención riscos laborais',p:'general'},
  E1:{es:'Alimentación y nutrición · menús · dietas · alérgenos',gl:'Alimentación e nutrición · menús · dietas · alérxenos',p:'especifica'},
  E2:{es:'Tipos de cocina, maquinaria y presentación',gl:'Tipos de cociña, maquinaria e presentación',p:'especifica'},
  E3:{es:'Economato, despensas y almacenaje refrigerado',gl:'Economato, despensas e almacenaxe refrixerada',p:'especifica'},
  E4:{es:'Condimentos, especias, salsas y fondos',gl:'Condimentos, especias, salsas e fondos',p:'especifica'},
  E5:{es:'Consomés, sopas, cremas y potajes · legumbres',gl:'Consomés, sopas, cremas e potaxes · legumes',p:'especifica'},
  E6:{es:'Hortalizas, frutas y verduras · ensaladas',gl:'Hortalizas, froitas e verduras · ensaladas',p:'especifica'},
  E7:{es:'Pasta, arroz y huevos',gl:'Pasta, arroz e ovos',p:'especifica'},
  E8:{es:'Pescados y mariscos',gl:'Peixes e mariscos',p:'especifica'},
  E9:{es:'Las carnes',gl:'As carnes',p:'especifica'},
  E10:{es:'Postres y bebidas',gl:'Sobremesas e bebidas',p:'especifica'},
  E11:{es:'Manipulación, residuos y circulación',gl:'Manipulación, residuos e circulación',p:'especifica'},
  E12:{es:'Ley 1/2024 calidad alimentaria · APPCC',gl:'Lei 1/2024 calidade alimentaria · APPCC',p:'especifica'},
  E13:{es:'Alérgenos e información alimentaria',gl:'Alérxenos e información alimentaria',p:'especifica'},
  E14:{es:'Temperaturas y toma de muestras',gl:'Temperaturas e toma de mostras',p:'especifica'}
};

/* ---------- textos de la interfaz ---------- */
const T = {
 es:{
  inicio:'Inicio',test:'Test',examen:'Examen',repaso:'Repaso',datos:'Datos',ajustes:'Ajustes',
  racha:'Racha',hoy:'Hoy',acierto:'Acierto',hechas:'Hechas',dias:'días',preg:'preguntas',
  seguir:'Continuar donde lo dejaste',nuevoTest:'Test rápido',nuevoTestS:'20 preguntas de todo el temario',
  porTema:'Test por tema',porTemaS:'Elige los temas y el número de preguntas',
  simu:'Simulacro oficial',simuS:'Réplica exacta del examen de la Xunta',
  falladas:'Repasar falladas',marcadas:'Preguntas marcadas',pendientes:'Toca repasar hoy',
  empezar:'Empezar',siguiente:'Siguiente',terminar:'Terminar',salir:'Salir',
  comprobar:'Comprobar',revisar:'Revisar respuestas',volver:'Volver al inicio',repetirFall:'Repetir las falladas',
  correcta:'Correcta',incorrecta:'Incorrecta',respCorr:'Respuesta correcta',
  marcar:'Marcar',desmarcar:'Quitar marca',marcada:'Marcada',
  aciertos:'Aciertos',fallos:'Fallos',blanco:'En blanco',neto:'Aciertos netos',
  puntuacion:'Puntuación',apto:'APTO',noapto:'NO APTO',tiempo:'Tiempo',
  ej1:'Primer ejercicio · teórico',ej2:'Segundo ejercicio · práctico',completo:'Simulacro completo',
  ej1s:'80 preguntas · 20 generales + 60 específicas',
  ej2s:'40 preguntas prácticas de la parte específica',
  completos:'120 preguntas · 160 minutos · como el día del examen',
  numPreg:'Número de preguntas',modo:'Modo',modoEst:'Estudio',modoEx:'Examen',
  modoEstS:'Ves la respuesta y la explicación al momento',
  modoExS:'Sin corrección hasta el final, con cronómetro',
  seleccionar:'Seleccionar todos',ninguno:'Ninguno',anexos:'Anexos y consulta',parteG:'Parte general',parteE:'Parte específica',
  idioma:'Idioma',tema:'Aspecto',claro:'Claro',oscuro:'Oscuro',auto:'Automático',
  penal:'Penalizar errores',penalS:'Cada fallo resta 1/4 de acierto, como en el examen real',
  soloVerif:'Solo preguntas verificadas',
  soloVerifS:'Deja fuera las importadas del material de academia, que no están contrastadas una a una y llevan el tema asignado de forma automática',
  barajar:'Barajar las opciones',barajarS:'Cambia el orden de las respuestas cada vez',
  letra:'Tamaño de letra',letraS:'Afecta a los enunciados, las opciones y el temario. La barra inferior no cambia.',exportar:'Exportar progreso',importar:'Importar progreso',
  borrar:'Borrar todo el progreso',borrarS:'No se puede deshacer',
  confirmBorrar:'¿Seguro que quieres borrar todo tu progreso?',
  sinPreg:'Todavía no hay preguntas para esta selección',
  sinFall:'No tienes preguntas falladas. Buen trabajo.',
  sinMarc:'No has marcado ninguna pregunta todavía',
  sinPend:'Nada pendiente de repasar hoy',
  porTemaTit:'Acierto por tema',evolucion:'Últimos 14 días',
  global:'Resumen general',totalP:'Preguntas en la app',respondidas:'Respondidas',
  dominadas:'Dominadas',flojas:'Flojas',sinVer:'Sin ver',
  salirConf:'¿Salir del test? Se perderá el progreso de esta sesión',
  guardado:'Guardado',copiado:'Copiado al portapapeles',
  instalar:'Instalar la aplicación',instalarS:'Añádela a la pantalla de inicio',
  pausa:'Pausa',reanudar:'Reanudar',
  refFuente:'Fuente',
  minutos:'min',tiempoAgotado:'Se acabó el tiempo',
  pregDe:'Pregunta',de:'de',
  temario:'Temario',temarioS:'Los 22 temas completos, para consultar en cualquier momento',
  buscarTemario:'Buscar en todo el temario…',sinRes:'Sin resultados',
  indice:'Índice',verTema:'Ver el tema',leer:'Leer',secciones:'secciones',
  seguirLeyendo:'Seguir leyendo',ultimaVez:'Última consulta',
  resultados:'resultados',buscarEn:'Buscar en este tema…',
  repasoTit:'Repaso inteligente',
  repasoS:'El sistema te vuelve a mostrar cada pregunta justo antes de que la olvides',
  facil:'Fácil',bien:'Bien',dificil:'Difícil',otravez:'Otra vez',
  comoFue:'¿Qué tal la has llevado?',
  todos:'Todos'
 },
 gl:{
  inicio:'Inicio',test:'Test',examen:'Exame',repaso:'Repaso',datos:'Datos',ajustes:'Axustes',
  racha:'Racha',hoy:'Hoxe',acierto:'Acerto',hechas:'Feitas',dias:'días',preg:'preguntas',
  seguir:'Continuar onde o deixaches',nuevoTest:'Test rápido',nuevoTestS:'20 preguntas de todo o temario',
  porTema:'Test por tema',porTemaS:'Escolle os temas e o número de preguntas',
  simu:'Simulacro oficial',simuS:'Réplica exacta do exame da Xunta',
  falladas:'Repasar falladas',marcadas:'Preguntas marcadas',pendientes:'Toca repasar hoxe',
  empezar:'Comezar',siguiente:'Seguinte',terminar:'Rematar',salir:'Saír',
  comprobar:'Comprobar',revisar:'Revisar respostas',volver:'Volver ao inicio',repetirFall:'Repetir as falladas',
  correcta:'Correcta',incorrecta:'Incorrecta',respCorr:'Resposta correcta',
  marcar:'Marcar',desmarcar:'Quitar marca',marcada:'Marcada',
  aciertos:'Acertos',fallos:'Fallos',blanco:'En branco',neto:'Acertos netos',
  puntuacion:'Puntuación',apto:'APTO',noapto:'NON APTO',tiempo:'Tempo',
  ej1:'Primeiro exercicio · teórico',ej2:'Segundo exercicio · práctico',completo:'Simulacro completo',
  ej1s:'80 preguntas · 20 xerais + 60 específicas',
  ej2s:'40 preguntas prácticas da parte específica',
  completos:'120 preguntas · 160 minutos · como o día do exame',
  numPreg:'Número de preguntas',modo:'Modo',modoEst:'Estudo',modoEx:'Exame',
  modoEstS:'Ves a resposta e a explicación ao momento',
  modoExS:'Sen corrección ata o final, con cronómetro',
  seleccionar:'Seleccionar todos',ninguno:'Ningún',anexos:'Anexos e consulta',parteG:'Parte xeral',parteE:'Parte específica',
  idioma:'Idioma',tema:'Aspecto',claro:'Claro',oscuro:'Escuro',auto:'Automático',
  penal:'Penalizar erros',penalS:'Cada fallo resta 1/4 de acerto, como no exame real',
  soloVerif:'Só preguntas verificadas',
  soloVerifS:'Deixa fóra as importadas do material de academia, que non están contrastadas unha a unha e levan o tema asignado de forma automática',
  barajar:'Barallar as opcións',barajarS:'Cambia a orde das respostas cada vez',
  letra:'Tamaño de letra',letraS:'Afecta aos enunciados, ás opcións e ao temario. A barra inferior non cambia.',exportar:'Exportar progreso',importar:'Importar progreso',
  borrar:'Borrar todo o progreso',borrarS:'Non se pode desfacer',
  confirmBorrar:'Seguro que queres borrar todo o teu progreso?',
  sinPreg:'Aínda non hai preguntas para esta selección',
  sinFall:'Non tes preguntas falladas. Bo traballo.',
  sinMarc:'Non marcaches ningunha pregunta aínda',
  sinPend:'Nada pendente de repasar hoxe',
  porTemaTit:'Acerto por tema',evolucion:'Últimos 14 días',
  global:'Resumo xeral',totalP:'Preguntas na app',respondidas:'Respondidas',
  dominadas:'Dominadas',flojas:'Frouxas',sinVer:'Sen ver',
  salirConf:'Saír do test? Perderase o progreso desta sesión',
  guardado:'Gardado',copiado:'Copiado ao portapapeis',
  instalar:'Instalar a aplicación',instalarS:'Engádea á pantalla de inicio',
  pausa:'Pausa',reanudar:'Continuar',
  refFuente:'Fonte',
  minutos:'min',tiempoAgotado:'Acabouse o tempo',
  pregDe:'Pregunta',de:'de',
  temario:'Temario',temarioS:'Os 22 temas completos, para consultar en calquera momento',
  buscarTemario:'Buscar en todo o temario…',sinRes:'Sen resultados',
  indice:'Índice',verTema:'Ver o tema',leer:'Ler',secciones:'seccións',
  seguirLeyendo:'Seguir lendo',ultimaVez:'Última consulta',
  resultados:'resultados',buscarEn:'Buscar neste tema…',
  repasoTit:'Repaso intelixente',
  repasoS:'O sistema volve amosarche cada pregunta xusto antes de que a esquezas',
  facil:'Fácil',bien:'Ben',dificil:'Difícil',otravez:'Outra vez',
  comoFue:'Que tal a levaches?',
  todos:'Todos'
 }
};

/* ---------- estado persistente ---------- */
const LS='auxcocina_v1';
/* Fecha local (no UTC): pasada la medianoche en España, toISOString() seguiría
   dando el día anterior y la racha y el plan contarían mal. */
const FECHA=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const HOY=()=>FECHA(new Date());
const D={
  cfg:{lang:'es',theme:'auto',penal:true,barajar:true,fs:16,soloVerif:false},
  q:{},          // id -> {v:vistas, o:ok, k:ko, ef:facilidad, iv:intervalo, due:'YYYY-MM-DD', l:lapsos}
  marc:[],       // ids marcados
  hist:{},       // 'YYYY-MM-DD' -> {n:hechas, o:aciertos}
  racha:{d:'',n:0},
  ses:[],        // últimas sesiones
  lec:null,      // última lectura del temario {tema, y}
  migr:[],       // marcas de window.MIGRA_IDS ya aplicadas
  bk:{f:'',s:''},// copia de seguridad: fecha de la última y «recordar más tarde» hasta
  plan:{ini:'',ex:'2027-04-30',dias:6}, // plan de estudio: inicio, fecha de examen, días/semana
  leidos:{},     // tema -> fecha en que se marcó como leído
  fi:{},         // fichas de cifras: id -> {v,o,ef,iv,due,l}
  notas:{},      // id de pregunta -> {t:texto, f:fecha}
  simh:[]        // simulacros oficiales: {f,tit,pts,max,ap}
};
let S=JSON.parse(JSON.stringify(D));
/* Cuando una revisión del banco mueve una pregunta a otro tema, su id cambia.
   window.MIGRA_IDS (en preguntas.js) trae el mapa viejo → nuevo; se aplica una
   sola vez por marca para no perder el progreso ni las marcadas. */
function migrarIds(nuevo,X){
  X=X||S; // también se aplica a una copia de seguridad antes de fusionarla
  const L=window.MIGRA_IDS||[];
  if(!Array.isArray(X.migr))X.migr=[];
  let cambio=false;
  L.forEach(m=>{
    if(X.migr.includes(m.marca))return;
    if(!nuevo){
      // los ids nuevos nunca coinciden con uno antiguo (se numeran tras el mayor del banco previo)
      const q={};
      Object.keys(X.q).forEach(id=>{q[m.mapa[id]||id]=X.q[id];});
      X.q=q;
      X.marc=X.marc.map(id=>m.mapa[id]||id).filter((id,i,a)=>a.indexOf(id)===i);
      if(X.notas){const n={};Object.keys(X.notas).forEach(id=>{n[m.mapa[id]||id]=X.notas[id];});X.notas=n;}
    }
    X.migr.push(m.marca);cambio=true;
  });
  return cambio;
}
function cargar(){
  let r=null;
  try{r=localStorage.getItem(LS);if(r)S=Object.assign(JSON.parse(JSON.stringify(D)),JSON.parse(r));}catch(e){}
  try{if(migrarIds(!r))guardar();}catch(e){}
}
function guardar(){try{localStorage.setItem(LS,JSON.stringify(S));}catch(e){}}
const t=k=>T[S.cfg.lang][k]||k;
const nom=id=>(TEMAS[id]||{})[S.cfg.lang]||id;

/* ---------- utilidades ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function mezclar(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];}return a;}
function toast(m){const e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),2200);}
function hhmmss(s){s=Math.max(0,s|0);const h=s/3600|0,m=(s%3600)/60|0,g=s%60;return (h?h+':':'')+String(m).padStart(2,'0')+':'+String(g).padStart(2,'0');}
function sumar(d){const f=new Date();f.setDate(f.getDate()+d);return FECHA(f);}
const tx=(es,gl)=>S.cfg.lang==='gl'?gl:es;
const BANCO=(window.BANCO||[]);
function txt(p){return p[S.cfg.lang]||p.es||p.gl;}

/* ---------- selección de preguntas ---------- */
/* Distingue las preguntas redactadas y verificadas contra fuente oficial de
   las importadas del material de preparación del opositor. */
function esImportada(p){return !!(p.ref && p.ref.indexOf('Test de preparación')===0);}
/* Opciones que remiten a otras por su letra o por su posición («a y b son
   correctas», «todas las anteriores»): si se barajan pierden el sentido, así que
   esas preguntas conservan siempre el orden original. */
const RE_POS=/(^|[\s(])[a-d]\)?\s*,?\s*(y|e)\s*(la\s+)?[b-d]\)?(\s|$)|anteriores|\b[a-d]\)\s*,\s*[b-d]\)|^\s*(ambas|todas|las tres|las dos|ninguna)\b/i;
function ordenFijo(p){return (p.es.o||[]).some(o=>RE_POS.test(o));}

function pool(f){
  f=f||{};
  let a=BANCO.slice();
  /* Ojo: una lista de temas vacía significa «ningún tema», no «todos». Por eso
     se comprueba que sea un array, no que tenga elementos. */
  if(Array.isArray(f.temas)) a=a.filter(p=>f.temas.includes(p.tema));
  if(f.parte) a=a.filter(p=>(TEMAS[p.tema]||{}).p===f.parte);
  if(f.tipo) a=a.filter(p=>(p.tipo||'teorica')===f.tipo);
  if(f.ids) a=a.filter(p=>f.ids.includes(p.id));
  // «Solo preguntas verificadas»: descarta las importadas del material de
  // preparación, que no se han contrastado una a una contra fuente oficial.
  if(S.cfg.soloVerif && !f.ids) a=a.filter(p=>!esImportada(p));
  /* Preguntas cuyo texto quedó incompleto en el PDF de origen y no se pudo
     recuperar: se excluyen siempre, salvo que se pidan por id expresamente. */
  if(!f.ids) a=a.filter(p=>!p.inc);
  return a;
}
function elegir(cand,n,priorizar){
  if(!priorizar) return mezclar(cand).slice(0,n);
  // prioriza lo menos visto y lo peor dominado
  const s=cand.map(p=>{const e=S.q[p.id]||{v:0,o:0,k:0};
    const tasa=e.v?e.o/e.v:0.5;
    return {p,peso:Math.random()*0.35+(1-tasa)*0.45+(e.v?0:0.4)};});
  s.sort((a,b)=>b.peso-a.peso);
  return s.slice(0,n).map(x=>x.p);
}

/* ---------- repetición espaciada (SM-2 simplificado) ---------- */
function planificar(id,calidad){ // calidad 0=otra vez 1=difícil 2=bien 3=fácil
  planificarEn(S.q[id]||(S.q[id]={v:0,o:0,k:0,ef:2.5,iv:0,due:HOY(),l:0}),calidad);
}
/* La misma lógica sirve para las preguntas (S.q) y para las fichas (S.fi). */
function planificarEn(e,calidad){
  if(e.ef===undefined)e.ef=2.5;
  if(calidad===0){e.iv=0;e.l=(e.l||0)+1;e.ef=Math.max(1.3,e.ef-0.2);e.due=HOY();return;}
  const q=[0,3,4,5][calidad];
  e.ef=Math.max(1.3,e.ef+(0.1-(5-q)*(0.08+(5-q)*0.02)));
  if(!e.iv)e.iv=1; else if(e.iv===1)e.iv=6; else e.iv=Math.round(e.iv*e.ef);
  if(calidad===1)e.iv=Math.max(1,Math.round(e.iv*0.6));
  e.due=sumar(e.iv);
}
const pendientesHoy=()=>BANCO.filter(p=>{const e=S.q[p.id];return e&&e.due&&e.due<=HOY()&&e.v>0;});
const falladas=()=>BANCO.filter(p=>{const e=S.q[p.id];return e&&e.k>0&&(e.o/(e.v||1))<0.8;});

/* ---------- registro de resultados ---------- */
function registrar(id,ok,tema){
  const e=S.q[id]||(S.q[id]={v:0,o:0,k:0,ef:2.5,iv:0,due:HOY(),l:0});
  const nueva=!e.v;
  e.v++; ok?e.o++:e.k++;
  const h=S.hist[HOY()]||(S.hist[HOY()]={n:0,o:0});
  h.n++; if(ok)h.o++;
  if(nueva)h.nv=(h.nv||0)+1; // preguntas vistas por primera vez hoy (alimenta el plan)
  tocarRacha();
}
/* Cuenta el día como estudiado (racha). Lo usan las preguntas y las fichas. */
function tocarRacha(){
  if(S.racha.d!==HOY()){
    S.racha.n=(S.racha.d===sumar(-1))?S.racha.n+1:1;
    S.racha.d=HOY();
  }
}

/* =========================================================
   MOTOR DEL TEST
   ========================================================= */
let J=null; // juego actual

function iniciar(cfg){
  // cfg: {lista, modo:'estudio'|'examen', segundos, titulo, oficial:{...}|null, srs:bool}
  if(!cfg.lista.length){toast(t('sinPreg'));return;}
  J={
    lista:cfg.lista, i:0, resp:new Array(cfg.lista.length).fill(null),
    orden:cfg.lista.map(p=>{
      const n=(txt(p).o||[]).length;
      let idx=Array.from({length:n},(_,k)=>k);
      if(S.cfg.barajar&&!cfg.srs&&!ordenFijo(p)) idx=mezclar(idx);
      return idx;
    }),
    modo:cfg.modo, titulo:cfg.titulo||'', oficial:cfg.oficial||null, srs:!!cfg.srs,
    t0:Date.now(), limite:cfg.segundos||0, restante:cfg.segundos||0, corregida:false, pausa:false
  };
  ir('play'); pintarPlay();
  if(J.limite){clearInterval(J._tk);J._tk=setInterval(tick,1000);}
}
function tick(){
  if(!J||J.pausa)return;
  J.restante--;
  const r=$('#reloj'); if(r){r.textContent=hhmmss(J.restante);r.classList.toggle('alerta',J.restante<300);}
  if(J.restante<=0){clearInterval(J._tk);toast(t('tiempoAgotado'));finalizar();}
}
function pintarPlay(){
  const p=J.lista[J.i], c=txt(p), ord=J.orden[J.i], r=J.resp[J.i];
  const marcada=S.marc.includes(p.id);
  const total=J.lista.length;
  const contestadas=J.resp.filter(x=>x!==null).length;
  let h=`<div id="barra">
    <div class="brow">
      <span>${t('pregDe')} <b>${J.i+1}</b> ${t('de')} ${total}</span>
      ${J.limite?`<span id="reloj" class="${J.restante<300?'alerta':''}">${hhmmss(J.restante)}</span>`:`<span>${contestadas}/${total}</span>`}
      <button class="chip mini" id="bSalir">${t('salir')}</button>
    </div>
    <div class="prog"><i style="width:${(J.i)/total*100}%"></i></div>
  </div>`;

  const nv=novDe(p), nota=S.notas[p.id];
  h+=`<div class="pmeta">${esc(nom(p.tema))} · ${p.tema}${p.tipo==='practica'?' · <span class="badge">'+(S.cfg.lang==='gl'?'PRÁCTICA':'PRÁCTICA')+'</span>':''}${nv.length?' <span class="badge nov">'+tx('Novedad 2026','Novidade 2026')+'</span>':''}
      <span class="pm-b"><button class="chip mini ${nota?'tiene':''}" id="bNota" aria-expanded="${J.notaAb===p.id}">✎ ${tx('Duda o nota','Dúbida ou nota')}</button>
      <button class="chip mini" id="bMarcar" style="${marcada?'background:var(--accent);color:#2a2000;border-color:var(--accent);font-weight:700':''}">${marcada?'★ '+t('marcada'):'☆ '+t('marcar')}</button></span></div>`;
  if(J.notaAb===p.id){
    h+=`<div class="nota-p"><label for="tNota">${tx('Lo que no entiendes o quieres recordar de esta pregunta','O que non entendes ou queres lembrar desta pregunta')}</label>
      <textarea id="tNota" rows="3" maxlength="600">${esc(nota?nota.t:'')}</textarea>
      <div class="fila"><button class="btn sm" id="nGuardar">${tx('Guardar nota','Gardar nota')}</button>
      ${nota?`<button class="chip mini" id="nBorrar">${tx('Borrar','Borrar')}</button>`:''}
      ${TEM[p.tema]?`<button class="chip mini" id="nTema">📖 ${tx('Ver en el tema','Ver no tema')}</button>`:''}</div></div>`;
  }else if(nota){
    h+=`<div class="nota-v">✎ ${esc(nota.t)}</div>`;
  }
  h+=`<div class="preg">${esc(c.q)}</div>`;

  ord.forEach((oi,k)=>{
    let cls='opt';
    if(J.modo==='estudio'&&r!==null){
      if(oi===p.r)cls+=' ok'; else if(oi===r)cls+=' ko';
    }else if(r===oi)cls+=' sel';
    h+=`<button class="${cls}" data-o="${oi}" ${J.modo==='estudio'&&r!==null?'disabled':''}>
        <span class="let">${'ABCD'[k]}</span><span>${esc(c.o[oi])}</span></button>`;
  });

  if(J.modo==='estudio'&&r!==null){
    h+=`<div class="exp"><b>${r===p.r?'✓ '+t('correcta'):'✗ '+t('incorrecta')}</b>`;
    if(r!==p.r)h+=` — ${t('respCorr')}: <b>${'ABCD'[ord.indexOf(p.r)]}</b>`;
    if(c.exp)h+=`<div style="margin-top:6px">${esc(c.exp)}</div>`;
    if(p.ref)h+=`<span class="ref">${t('refFuente')}: ${esc(p.ref)}</span>`;
    if(p.inc)h+=`<span class="ref" style="color:var(--ko)">${S.cfg.lang==='gl'?'⚠ O texto desta pregunta quedou incompleto no PDF de orixe e non se puido recuperar':'⚠ El texto de esta pregunta quedó incompleto en el PDF de origen y no se pudo recuperar'}</span>`;
    if(esImportada(p))h+=`<span class="ref" style="color:var(--warn)">${S.cfg.lang==='gl'?'⚠ Pregunta sen verificar contra fonte oficial e con tema asignado automaticamente':'⚠ Pregunta sin verificar contra fuente oficial y con el tema asignado automáticamente'}</span>`;
    if(nv.length)h+=`<span class="ref" style="color:var(--warn)">${tx('Novedad normativa posterior al corte de la convocatoria anterior','Novidade normativa posterior ao corte da convocatoria anterior')}: ${esc(nv.map(k=>NOV.find(n=>n.k===k)[S.cfg.lang]).join(' · '))}</span>`;
    if(TEM[p.tema])h+=`<button class="chip mini" id="bVerTema" style="margin-top:9px">📖 ${tx('Ver en el tema','Ver no tema')} ${p.tema}</button>`;
    h+=`</div>`;
    if(J.srs){
      h+=`<div class="fila" style="margin-top:10px">
        <button class="btn sm sec" data-sr="0">${t('otravez')}</button>
        <button class="btn sm sec" data-sr="1">${t('dificil')}</button>
        <button class="btn sm sec" data-sr="2">${t('bien')}</button>
        <button class="btn sm sec" data-sr="3">${t('facil')}</button></div>`;
    }
  }

  h+=`<div class="acciones">
    ${J.i>0?`<button class="btn sec" id="bPrev" style="flex:0 0 90px;text-align:center">←</button>`:''}
    <button class="btn" id="bNext">${J.i===total-1?t('terminar'):t('siguiente')}</button>
  </div>`;
  if(J.modo==='examen'&&J.i===total-1) h+=`<p class="mini" style="text-align:center;margin-top:8px">${contestadas}/${total} ${t('preg')}</p>`;

  $('#v-play').innerHTML=h;

  $('#v-play').querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
    const oi=+b.dataset.o;
    if(J.modo==='estudio'&&J.resp[J.i]!==null)return;
    J.resp[J.i]=oi;
    if(J.modo==='estudio'){
      registrar(p.id,oi===p.r,p.tema);
      if(!J.srs)planificar(p.id,oi===p.r?2:0);
      guardar();
    }
    pintarPlay();
  });
  $('#v-play').querySelectorAll('[data-sr]').forEach(b=>b.onclick=()=>{
    planificar(p.id,+b.dataset.sr); guardar(); avanzar();
  });
  const bv=$('#bVerTema'); if(bv)bv.onclick=()=>{J._vuelta=true;verEnTema(p);};
  $('#bNota').onclick=()=>{J.notaAb=(J.notaAb===p.id)?null:p.id;pintarPlay();};
  const ng=$('#nGuardar'); if(ng)ng.onclick=()=>{
    const v=$('#tNota').value.trim();
    if(v)S.notas[p.id]={t:v,f:HOY()}; else delete S.notas[p.id];
    J.notaAb=null;guardar();pintarPlay();toast(tx('Nota guardada','Nota gardada'));};
  const nb=$('#nBorrar'); if(nb)nb.onclick=()=>{delete S.notas[p.id];J.notaAb=null;guardar();pintarPlay();};
  const nt=$('#nTema'); if(nt)nt.onclick=()=>{J._vuelta=true;verEnTema(p);};
  const bp=$('#bPrev'); if(bp)bp.onclick=()=>{J.i--;pintarPlay();window.scrollTo(0,0);};
  $('#bNext').onclick=avanzar;
  $('#bMarcar').onclick=()=>{
    const k=S.marc.indexOf(p.id);
    if(k<0)S.marc.push(p.id); else S.marc.splice(k,1);
    guardar(); pintarPlay();
  };
  $('#bSalir').onclick=()=>{if(confirm(t('salirConf'))){clearInterval(J._tk);J=null;ir('inicio');}};
  window.scrollTo(0,0);
}
function avanzar(){
  if(J.i<J.lista.length-1){J.i++;pintarPlay();}
  else finalizar();
}
function finalizar(){
  clearInterval(J._tk);
  let ok=0,ko=0,bl=0;
  J.lista.forEach((p,i)=>{
    const r=J.resp[i];
    if(r===null){bl++;return;}
    const acierto=r===p.r;
    acierto?ok++:ko++;
    if(J.modo==='examen'){registrar(p.id,acierto,p.tema);planificar(p.id,acierto?2:0);}
  });
  const seg=Math.round((Date.now()-J.t0)/1000);
  if(J.oficial){ // en los simulacros la penalización es siempre la del examen real
    const n=J.lista.length, neto=ok-ko/4;
    S.simh.unshift({f:HOY(),tit:J.titulo,pts:+(Math.max(0,neto)/n*J.oficial.max).toFixed(2),max:J.oficial.max,ap:neto/n*100>=J.oficial.min});
    S.simh=S.simh.slice(0,30);
  }
  S.ses.unshift({f:HOY(),n:J.lista.length,ok,ko,bl,seg,tit:J.titulo});
  S.ses=S.ses.slice(0,40);
  guardar();
  pintarFin(ok,ko,bl,seg);
  ir('fin');
}
/* Dónde se han ido los puntos en un simulacro oficial: por tema y por tipo de
   error. Un fallo cuesta la pregunta (1) más la penalización (¼); una en
   blanco solo la pregunta. */
function bloquePerdidas(of,n){
  const u=of.max/n, porT={}, porP={general:{n:0,o:0},especifica:{n:0,o:0}};
  J.lista.forEach((p,i)=>{
    const r=J.resp[i], a=porT[p.tema]||(porT[p.tema]={n:0,o:0,k:0,b:0});
    a.n++; if(r===null)a.b++; else if(r===p.r)a.o++; else a.k++;
    const pp=porP[(TEMAS[p.tema]||{}).p];
    if(pp){pp.n++;if(r===p.r)pp.o++;}
  });
  const filas=Object.keys(porT).map(k=>{const a=porT[k];return {k,n:a.n,o:a.o,perd:(a.k*1.25+a.b)*u};}).sort((x,y)=>y.perd-x.perd);
  const kos=Object.keys(porT).reduce((s,k)=>s+porT[k].k,0), pen=kos*0.25*u;
  let h=`<div class="card"><h2>${tx('Dónde has perdido los puntos','Onde perdeches os puntos')}</h2><table class="res">`;
  [['general',t('parteG')],['especifica',t('parteE')]].forEach(([k,l])=>{
    const a=porP[k];if(a.n)h+=`<tr><td>${l}</td><td>${a.o}/${a.n}</td></tr>`;});
  h+=`</table><div class="sep"></div>`;
  filas.slice(0,10).forEach(f=>{
    const pc=f.o/f.n*100;
    h+=`<div class="tbar"><span title="${esc(nom(f.k))}">${f.k}</span>
      <span class="bg"><i style="width:${pc}%;background:${pc>=70?'var(--ok)':pc>=50?'var(--warn)':'var(--ko)'}"></i></span>
      <em>−${f.perd.toFixed(2).replace('.',',')}</em></div>`;});
  h+=`<p class="mini">${tx('Barra = aciertos del tema · cifra = puntos que te ha costado.','Barra = acertos do tema · cifra = puntos que che custou.')}</p>`;
  if(kos)h+=`<p>${tx('Los '+kos+' fallos te han restado '+pen.toFixed(2).replace('.',',')+' puntos solo por la penalización. Dejadas en blanco, habrías sumado esos puntos.','Os '+kos+' fallos restáronche '+pen.toFixed(2).replace('.',',')+' puntos só pola penalización. Deixadas en branco, tería sumado eses puntos.')}</p>`;
  return h+`</div>`;
}
function pintarFin(ok,ko,bl,seg){
  const n=J.lista.length;
  const of=J.oficial, penal=of?true:S.cfg.penal;
  const neto=penal?ok-ko/4:ok;
  const pct=n?Math.max(0,neto)/n*100:0;
  let h=`<div class="card nota">
    <div class="big ${of&&pct<of.min?'fail':''}">${pct.toFixed(1)}%</div>
    <div class="sub">${J.titulo||''}</div>`;
  if(of){
    const puntos=Math.max(0,neto)/n*of.max;
    h+=`<div style="margin-top:12px;font-size:1.625rem;font-weight:700">${puntos.toFixed(2)} <span style="font-size:.875rem;color:var(--muted)">/ ${of.max} ${t('puntuacion').toLowerCase()}</span></div>
        <div class="veredicto ${pct>=of.min?'ap':'no'}">${pct>=of.min?t('apto'):t('noapto')}</div>
        <p class="mini" style="margin-top:8px">${S.cfg.lang==='gl'?'Mínimo esixido':'Mínimo exigido'}: ${of.min}% · ${of.minP} ${t('puntuacion').toLowerCase()}</p>`;
  }
  h+=`</div><div class="card"><table class="res">
    <tr><td>${t('aciertos')}</td><td style="color:var(--ok)">${ok}</td></tr>
    <tr><td>${t('fallos')}</td><td style="color:var(--ko)">${ko}</td></tr>
    <tr><td>${t('blanco')}</td><td>${bl}</td></tr>
    <tr><td>${t('neto')} ${penal?'(−¼)':''}</td><td>${neto.toFixed(2)} / ${n}</td></tr>
    <tr><td>${t('tiempo')}</td><td>${hhmmss(seg)}</td></tr>
  </table></div>`;

  // desglose por tema
  const porT={};
  J.lista.forEach((p,i)=>{const a=porT[p.tema]||(porT[p.tema]={n:0,o:0});a.n++;if(J.resp[i]===p.r)a.o++;});
  const claves=Object.keys(porT).sort();
  if(of)h+=bloquePerdidas(of,n);
  else if(claves.length>1){
    h+=`<div class="card"><h2>${t('porTemaTit')}</h2>`;
    claves.forEach(k=>{const a=porT[k],pc=a.o/a.n*100;
      h+=`<div class="tbar"><span title="${esc(nom(k))}">${k}</span>
        <span class="bg"><i style="width:${pc}%;background:${pc>=70?'var(--ok)':pc>=50?'var(--warn)':'var(--ko)'}"></i></span>
        <em>${a.o}/${a.n}</em></div>`;});
    h+=`</div>`;
  }

  const fall=J.lista.filter((p,i)=>J.resp[i]!==null&&J.resp[i]!==p.r);
  h+=`<div class="card">
    <button class="btn sec" id="bRev">${t('revisar')}</button>
    ${fall.length?`<button class="btn sec" id="bRep">${t('repetirFall')} (${fall.length})</button>`:''}
    <button class="btn" id="bVol">${t('volver')}</button></div>`;
  $('#v-fin').innerHTML=h;
  $('#bVol').onclick=()=>{J=null;ir('inicio');};
  $('#bRev').onclick=()=>{J.modo='estudio';J.i=0;ir('play');pintarPlay();};
  const br=$('#bRep'); if(br)br.onclick=()=>iniciar({lista:fall,modo:'estudio',titulo:t('falladas')});
  window.scrollTo(0,0);
}

/* =========================================================
   VISTAS
   ========================================================= */
function ir(v){
  document.querySelectorAll('.view').forEach(e=>e.classList.remove('on'));
  $('#v-'+v).classList.add('on');
  const navv={plan:'inicio',fichas:'repaso'}[v]||v; // vistas que cuelgan de otra pestaña
  document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.v===navv));
  const p={inicio:pintarInicio,test:pintarTest,simulacro:pintarSimulacro,repaso:pintarRepaso,stats:pintarStats,ajustes:pintarAjustes,temario:pintarTemario,plan:pintarPlan,fichas:pintarFichas}[v];
  if(p)p();
  window.scrollTo(0,0);
}

function pintarInicio(){
  const h0=S.hist[HOY()]||{n:0,o:0};
  let tv=0,to=0; Object.values(S.q).forEach(e=>{tv+=e.v;to+=e.o;});
  const pend=pendientesHoy().length, fall=falladas().length;
  const gl=S.cfg.lang==='gl';
  let h=`<div class="reg">
    <div><b>${S.racha.d===HOY()||S.racha.d===sumar(-1)?S.racha.n:0}</b><span>${t('racha')} · ${t('dias')}</span></div>
    <div><b>${h0.n}</b><span>${t('hoy')}</span></div>
    <div><b>${tv?Math.round(to/tv*100):0}%</b><span>${t('acierto')}</span></div>
    <div><b>${tv}</b><span>${t('hechas')}</span></div>
  </div>`;
  h+=avisoCopia();
  if(pend)h+=`<button class="etiq" id="qPend"><b>${pend}</b><span>${t('pendientes')}</span><small>${t('repasoS')}</small></button>`;
  h+=bloqueHoy();
  h+=`<div class="lista">`;
  h+=`<button class="btn" id="qRapido">${t('nuevoTest')}<small>${t('nuevoTestS')}</small></button>`;
  h+=`<button class="btn" id="qFlacos">${tx('Puntos flacos','Puntos febles')}<small>${esc(resumenFlacos())}</small></button>`;
  h+=`<button class="btn" id="qTemario">${t('temario')}<small>${S.lec&&TEM[S.lec.tema]?t('seguirLeyendo')+': '+S.lec.tema+' · '+esc(nom(S.lec.tema)):t('temarioS')}</small></button>`;
  h+=`<button class="btn" id="qTema">${t('porTema')}<small>${t('porTemaS')}</small></button>`;
  h+=`<button class="btn" id="qSimu">${t('simu')}<small>${t('simuS')}</small></button>`;
  h+=`<button class="btn" id="qFichas">${tx('Fichas de cifras','Fichas de cifras')}<small>${tx('Plazos, temperaturas y porcentajes','Prazos, temperaturas e porcentaxes')}</small></button>`;
  if(fall)h+=`<button class="btn" id="qFall">${t('falladas')} · ${fall}<small>${gl?'As que máis se che resisten':'Las que más se te resisten'}</small></button>`;
  h+=`</div>`;
  if(S.ses.length){
    h+=`<div class="card"><h3>${S.cfg.lang==='gl'?'Últimas sesións':'Últimas sesiones'}</h3><table class="res">`;
    S.ses.slice(0,5).forEach(x=>{const pc=x.n?Math.round(x.ok/x.n*100):0;
      h+=`<tr><td>${esc(x.tit||'Test')}<br><span class="mini">${x.f} · ${x.n} ${t('preg')}</span></td>
          <td style="color:${pc>=70?'var(--ok)':pc>=50?'var(--warn)':'var(--ko)'}">${pc}%</td></tr>`;});
    h+=`</table></div>`;
  }else{
    /* Sin historial: en pantallas anchas el panel derecho no queda vacío */
    h+=`<div class="card solo-ancho"><h3>${gl?'O teu historial':'Tu historial'}</h3><p>${gl?'Aínda non fixeches ningún test. Aquí aparecerán as túas últimas sesións e a evolución do acerto.':'Todavía no has hecho ningún test. Aquí aparecerán tus últimas sesiones y la evolución del acierto.'}</p><p>${gl?'Un bo comezo: o test rápido, con 20 preguntas de todo o temario.':'Un buen comienzo: el test rápido, con 20 preguntas de todo el temario.'}</p></div>`;
  }
  h+=`<button class="btn ghost" id="qAjustes">${t('ajustes')}</button>`;
  $('#v-inicio').innerHTML=h;
  $('#qRapido').onclick=()=>iniciar({lista:elegir(pool({}),20,true),modo:'estudio',titulo:t('nuevoTest')});
  $('#qTemario').onclick=()=>{if(S.lec&&TEM[S.lec.tema])abrirTema(S.lec.tema,S.lec.y);else ir('temario');};
  $('#qTema').onclick=()=>ir('test');
  $('#qSimu').onclick=()=>ir('simulacro');
  $('#qFlacos').onclick=()=>iniciar({lista:mezclar(puntosFlacos(25)),modo:'estudio',titulo:tx('Puntos flacos','Puntos febles')});
  $('#qFichas').onclick=()=>ir('fichas');
  $('#qAjustes').onclick=()=>ir('ajustes');
  ligarHoy();
  const ac=$('#avCopia'); if(ac)ac.onclick=()=>guardarCopia().then(ok=>{if(ok)pintarInicio();});
  const al=$('#avLuego'); if(al)al.onclick=()=>{S.bk.s=sumar(3);guardar();pintarInicio();};
  const a=$('#qPend'); if(a)a.onclick=()=>iniciar({lista:mezclar(pendientesHoy()).slice(0,30),modo:'estudio',srs:true,titulo:t('pendientes')});
  const b=$('#qFall'); if(b)b.onclick=()=>iniciar({lista:mezclar(falladas()).slice(0,25),modo:'estudio',titulo:t('falladas')});
}

/* null = todavía no se ha elegido nada, así que se parte de todo marcado.
   [] = el usuario ha pulsado «Ninguno» y hay que respetarlo. */
let selTemas=null;
function pintarTest(){
  if(selTemas===null)selTemas=Object.keys(TEMAS);
  const cont=k=>pool({temas:[k]}).length;
  let h=`<div class="card"><h2>${t('porTema')}</h2><p>${t('porTemaS')}</p>
    <div class="fila" style="margin:10px 0">
      <button class="chip" id="selG">${t('parteG')}</button>
      <button class="chip" id="selE">${t('parteE')}</button>
      <button class="chip" id="selAll">${t('seleccionar')}</button>
      <button class="chip" id="selNo">${t('ninguno')}</button>
    </div>
    <h3>${t('parteG')}</h3><div class="chips">`;
  Object.keys(TEMAS).filter(k=>TEMAS[k].p==='general').forEach(k=>{
    h+=`<button class="chip ${selTemas.includes(k)?'on':''}" data-t="${k}">${k} · ${esc(nom(k))} <b style="opacity:.6">${cont(k)}</b></button>`;});
  h+=`</div><h3>${t('parteE')}</h3><div class="chips">`;
  Object.keys(TEMAS).filter(k=>TEMAS[k].p==='especifica').forEach(k=>{
    h+=`<button class="chip ${selTemas.includes(k)?'on':''}" data-t="${k}">${k} · ${esc(nom(k))} <b style="opacity:.6">${cont(k)}</b></button>`;});
  h+=`</div></div>`;
  const disp=pool({temas:selTemas}).length;
  h+=`<div class="card">
    <label class="row"><span>${t('numPreg')}<small>${disp} ${S.cfg.lang==='gl'?'dispoñibles':'disponibles'}</small></span>
      <select id="nP">${[10,20,25,30,40,50,60,80,100].filter(n=>disp&&n<=Math.max(10,disp)).map(n=>`<option ${n===20?'selected':''}>${n}</option>`).join('')}<option value="0">${t('todos')}</option></select></label>
    <label class="row"><span>${t('modo')}<small id="modoS">${t('modoEstS')}</small></span>
      <select id="mo"><option value="estudio">${t('modoEst')}</option><option value="examen">${t('modoEx')}</option></select></label>
    <label class="row" id="rTiempo" style="display:none"><span>${t('tiempo')}<small>${t('minutos')}</small></span>
      <input type="number" id="mins" value="30" min="1" max="240"></label>
    <button class="btn" id="go" style="margin-top:12px" ${disp?'':'disabled'}>${t('empezar')}</button></div>`;
  $('#v-test').innerHTML=h;
  $('#v-test').querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{
    const k=b.dataset.t,i=selTemas.indexOf(k);
    if(i<0)selTemas.push(k);else selTemas.splice(i,1);pintarTest();});
  $('#selG').onclick=()=>{selTemas=Object.keys(TEMAS).filter(k=>TEMAS[k].p==='general');pintarTest();};
  $('#selE').onclick=()=>{selTemas=Object.keys(TEMAS).filter(k=>TEMAS[k].p==='especifica');pintarTest();};
  $('#selAll').onclick=()=>{selTemas=Object.keys(TEMAS);pintarTest();};
  $('#selNo').onclick=()=>{selTemas=[];pintarTest();};
  $('#mo').onchange=e=>{
    const ex=e.target.value==='examen';
    $('#rTiempo').style.display=ex?'flex':'none';
    $('#modoS').textContent=ex?t('modoExS'):t('modoEstS');};
  $('#go').onclick=()=>{
    const cand=pool({temas:selTemas});
    if(!cand.length)return;
    let n=+$('#nP').value||cand.length;
    const modo=$('#mo').value;
    iniciar({lista:elegir(cand,n,true),modo,titulo:t('porTema'),
      segundos:modo==='examen'?(+$('#mins').value||30)*60:0});
  };
}

function pintarSimulacro(){
  const g=pool({parte:'general'}).length, e=pool({parte:'especifica'}).length;
  const pr=pool({parte:'especifica',tipo:'practica'}).length;
  let h=`<div class="card"><h2>${t('simu')}</h2>
    <p>${S.cfg.lang==='gl'
      ? 'Réplica do exame convocado no DOG nº 123 do 30/06/2025. Catro opcións por pregunta, cada erro resta un cuarto dun acerto e as non contestadas nin puntúan nin penalizan.'
      : 'Réplica del examen convocado en el DOG nº 123 de 30/06/2025. Cuatro opciones por pregunta, cada error resta un cuarto de un acierto y las no contestadas ni puntúan ni penalizan.'}</p>
    <p class="mini">${S.cfg.lang==='gl'?'Dispoñibles':'Disponibles'}: ${g} ${t('parteG').toLowerCase()} · ${e} ${t('parteE').toLowerCase()}</p></div>`;
  h+=`<button class="btn" id="s1">${t('ej1')}<small>${t('ej1s')} · 0–60 ${S.cfg.lang==='gl'?'puntos, mínimo 30':'puntos, mínimo 30'}</small></button>`;
  h+=`<button class="btn" id="s2">${t('ej2')}<small>${t('ej2s')} · 0–40 ${S.cfg.lang==='gl'?'puntos, mínimo 20':'puntos, mínimo 20'}</small></button>`;
  h+=`<button class="btn gold" id="s3">${t('completo')}<small>${t('completos')}</small></button>`;
  h+=`<div class="card"><h3>${S.cfg.lang==='gl'?'Como se corrixe':'Cómo se corrige'}</h3>
    <table class="res">
      <tr><td>${S.cfg.lang==='gl'?'Opcións por pregunta':'Opciones por pregunta'}</td><td>4</td></tr>
      <tr><td>${S.cfg.lang==='gl'?'Penalización por erro':'Penalización por error'}</td><td>−1/4</td></tr>
      <tr><td>${S.cfg.lang==='gl'?'Preguntas de reserva 1.º ex.':'Preguntas de reserva 1.º ej.'}</td><td>5 (2+3)</td></tr>
      <tr><td>${S.cfg.lang==='gl'?'Preguntas de reserva 2.º ex.':'Preguntas de reserva 2.º ej.'}</td><td>3</td></tr>
      <tr><td>${S.cfg.lang==='gl'?'Duración conxunta':'Duración conjunta'}</td><td>160 ${t('minutos')}</td></tr>
      <tr><td>${S.cfg.lang==='gl'?'Mínimo 1.º exercicio':'Mínimo 1.er ejercicio'}</td><td>40%</td></tr>
      <tr><td>${S.cfg.lang==='gl'?'Mínimo 2.º exercicio':'Mínimo 2.º ejercicio'}</td><td>50%</td></tr>
    </table></div>`;
  if(S.simh.length){
    h+=`<div class="card"><h3>${tx('Tus últimos simulacros','Os teus últimos simulacros')}</h3><table class="res">`;
    S.simh.slice(0,6).forEach(x=>{h+=`<tr><td>${esc(x.tit)}<br><span class="mini">${x.f}</span></td>
      <td style="color:${x.ap?'var(--ok)':'var(--ko)'}">${String(x.pts).replace('.',',')} / ${x.max}</td></tr>`;});
    h+=`</table></div>`;
  }
  $('#v-simulacro').innerHTML=h;
  $('#s1').onclick=()=>{
    const l=mezclar(elegir(pool({parte:'general'}),20,false).concat(elegir(pool({parte:'especifica'}),60,false)));
    iniciar({lista:l,modo:'examen',segundos:107*60,titulo:t('ej1'),oficial:{max:60,minP:30,min:40}});
  };
  $('#s2').onclick=()=>{
    let cand=pool({parte:'especifica',tipo:'practica'});
    if(cand.length<40)cand=cand.concat(pool({parte:'especifica'}));
    iniciar({lista:elegir(cand,40,false),modo:'examen',segundos:53*60,titulo:t('ej2'),oficial:{max:40,minP:20,min:50}});
  };
  $('#s3').onclick=()=>{
    const a=mezclar(elegir(pool({parte:'general'}),20,false).concat(elegir(pool({parte:'especifica'}),60,false)));
    let cand=pool({parte:'especifica',tipo:'practica'});
    if(cand.length<40)cand=pool({parte:'especifica'});
    const b=elegir(cand.filter(p=>!a.includes(p)),40,false);
    iniciar({lista:a.concat(b),modo:'examen',segundos:160*60,titulo:t('completo'),oficial:{max:100,minP:50,min:45}});
  };
}

function pintarRepaso(){
  const pend=pendientesHoy(), fall=falladas(), marc=BANCO.filter(p=>S.marc.includes(p.id));
  const notas=BANCO.filter(p=>S.notas[p.id]);
  const fc=fichasCola(), nF=fc.due.length+fc.nuevas.length;
  let h=`<div class="card"><h2>${t('repasoTit')}</h2><p>${t('repasoS')}</p></div>`;
  h+=`<button class="btn ${pend.length?'gold':'sec'}" id="r1">${t('pendientes')}<small>${pend.length} ${t('preg')}</small></button>`;
  h+=`<button class="btn sec" id="rF">${tx('Puntos flacos','Puntos febles')}<small>${esc(resumenFlacos())}</small></button>`;
  h+=`<button class="btn sec" id="rC">${tx('Fichas de cifras','Fichas de cifras')}<small>${nF} ${tx('para hoy','para hoxe')} · ${FICH.length} ${tx('en total','en total')}</small></button>`;
  h+=`<button class="btn sec" id="r2">${t('falladas')}<small>${fall.length} ${t('preg')}</small></button>`;
  h+=`<button class="btn sec" id="r3">${t('marcadas')}<small>${marc.length} ${t('preg')}</small></button>`;
  const sinver=BANCO.filter(p=>!S.q[p.id]||!S.q[p.id].v).length;
  h+=`<button class="btn sec" id="r4">${t('sinVer')}<small>${sinver} ${t('preg')}</small></button>`;
  /* Novedades normativas: lo que entra con el corte de esta convocatoria */
  const novs=NOV.map(n=>({n,l:novLista(n.k)})).filter(x=>x.l.length);
  const totNov=new Set(novs.flatMap(x=>x.l.map(p=>p.id))).size;
  if(totNov){
    h+=`<div class="card"><h2>${tx('Novedades normativas 2026','Novidades normativas 2026')}</h2>
      <p>${tx('Normas publicadas después del corte de la convocatoria anterior. Si estudiaste con material viejo, son las que más se fallan.','Normas publicadas despois do corte da convocatoria anterior. Se estudaches con material vello, son as que máis se fallan.')}</p>
      <button class="btn sm" id="rN" style="margin:6px 0 10px">${tx('Practicar todas','Practicar todas')} · ${totNov}</button>`;
    novs.forEach(x=>{h+=`<button class="nov-f" data-nov="${x.n.k}"><span>${esc(x.n[S.cfg.lang])}</span><em>${x.l.length}</em></button>`;});
    h+=`</div>`;
  }
  if(marc.length||notas.length){
    const ids=new Set(notas.map(p=>p.id).concat(marc.map(p=>p.id)));
    const lista=BANCO.filter(p=>ids.has(p.id));
    h+=`<div class="card"><h3>${tx('Dudas y notas','Dúbidas e notas')}</h3>`;
    lista.slice(0,30).forEach(p=>{
      const n=S.notas[p.id];
      h+=`<div class="dn"><button class="dn-q" data-dn="${p.id}"><span class="mini">${p.tema}${S.marc.includes(p.id)?' · ★':''}</span><br>${esc(txt(p).q.slice(0,120))}${txt(p).q.length>120?'…':''}</button>
        ${n?`<div class="nota-v">✎ ${esc(n.t)}</div>`:''}
        ${TEM[p.tema]?`<button class="chip mini" data-dt="${p.id}">📖 ${tx('Ver en el tema','Ver no tema')}</button>`:''}</div>`;});
    h+=`</div>`;
  }
  h+=`<div class="card"><h3>${tx('Para leer sin pantalla','Para ler sen pantalla')}</h3>
    <p>${tx('Esquemas y datos memorizables de los 22 temas, en un solo documento para imprimir o leer en el lector de libros.','Esquemas e datos memorizables dos 22 temas, nun só documento para imprimir ou ler no lector de libros.')}</p>
    <div class="fila"><a class="btn sm sec" href="descargas/repaso-c2-cocina.pdf" download>PDF</a>
    <a class="btn sm sec" href="descargas/repaso-c2-cocina.epub" download>EPUB</a></div></div>`;
  $('#v-repaso').innerHTML=h;
  $('#r1').onclick=()=>pend.length?iniciar({lista:mezclar(pend).slice(0,40),modo:'estudio',srs:true,titulo:t('pendientes')}):toast(t('sinPend'));
  $('#rF').onclick=()=>iniciar({lista:mezclar(puntosFlacos(25)),modo:'estudio',titulo:tx('Puntos flacos','Puntos febles')});
  $('#rC').onclick=()=>ir('fichas');
  $('#r2').onclick=()=>fall.length?iniciar({lista:mezclar(fall).slice(0,40),modo:'estudio',titulo:t('falladas')}):toast(t('sinFall'));
  $('#r3').onclick=()=>marc.length?iniciar({lista:mezclar(marc),modo:'estudio',titulo:t('marcadas')}):toast(t('sinMarc'));
  $('#r4').onclick=()=>{const l=BANCO.filter(p=>!S.q[p.id]||!S.q[p.id].v);
    l.length?iniciar({lista:mezclar(l).slice(0,30),modo:'estudio',titulo:t('sinVer')}):toast(t('sinPreg'));};
  const rn=$('#rN'); if(rn)rn.onclick=()=>iniciar({lista:mezclar(BANCO.filter(p=>!p.inc&&novDe(p).length)).slice(0,40),modo:'estudio',titulo:tx('Novedades normativas 2026','Novidades normativas 2026')});
  $('#v-repaso').querySelectorAll('[data-nov]').forEach(b=>b.onclick=()=>
    iniciar({lista:mezclar(novLista(b.dataset.nov)),modo:'estudio',titulo:tx('Novedades normativas 2026','Novidades normativas 2026')}));
  $('#v-repaso').querySelectorAll('[data-dn]').forEach(b=>b.onclick=()=>{
    const p=BANCO.find(x=>x.id===b.dataset.dn);if(p)iniciar({lista:[p],modo:'estudio',titulo:t('marcadas')});});
  $('#v-repaso').querySelectorAll('[data-dt]').forEach(b=>b.onclick=()=>{
    const p=BANCO.find(x=>x.id===b.dataset.dt);if(p)verEnTema(p);});
}

function pintarStats(){
  let tv=0,to=0; Object.values(S.q).forEach(e=>{tv+=e.v;to+=e.o;});
  const resp=Object.values(S.q).filter(e=>e.v>0).length;
  const dom=Object.entries(S.q).filter(([k,e])=>e.v>=2&&e.o/e.v>=0.8).length;
  const flo=Object.entries(S.q).filter(([k,e])=>e.v>=2&&e.o/e.v<0.5).length;
  let h=`<div class="card"><h2>${t('global')}</h2><table class="res">
    <tr><td>${t('totalP')}</td><td>${BANCO.length}</td></tr>
    <tr><td>${t('respondidas')}</td><td>${resp}</td></tr>
    <tr><td>${t('hechas')}</td><td>${tv}</td></tr>
    <tr><td>${t('acierto')}</td><td>${tv?Math.round(to/tv*100):0}%</td></tr>
    <tr><td>${t('dominadas')}</td><td style="color:var(--ok)">${dom}</td></tr>
    <tr><td>${t('flojas')}</td><td style="color:var(--ko)">${flo}</td></tr>
    <tr><td>${t('sinVer')}</td><td>${BANCO.length-resp}</td></tr>
    <tr><td>${t('racha')}</td><td>${S.racha.n} ${t('dias')}</td></tr>
  </table></div>`;

  // últimos 14 días
  const dd=[]; for(let i=13;i>=0;i--)dd.push(sumar(-i));
  const mx=Math.max(1,...dd.map(d=>(S.hist[d]||{n:0}).n));
  h+=`<div class="card"><h2>${t('evolucion')}</h2><div class="dias">`;
  dd.forEach(d=>{const x=S.hist[d]||{n:0,o:0};const al=x.n?Math.max(6,x.n/mx*46):3;
    const pc=x.n?x.o/x.n:0;
    h+=`<div><i style="height:${al}px;background:${x.n?(pc>=.7?'var(--ok)':pc>=.5?'var(--warn)':'var(--ko)'):'var(--line)'}" title="${d}: ${x.n}"></i>${d.slice(8)}</div>`;});
  h+=`</div><p class="mini" style="text-align:center;margin-top:8px">${S.cfg.lang==='gl'?'Altura = preguntas feitas · Cor = acerto':'Altura = preguntas hechas · Color = acierto'}</p></div>`;

  // por tema
  h+=`<div class="card"><h2>${t('porTemaTit')}</h2>`;
  Object.keys(TEMAS).forEach(k=>{
    const ids=pool({temas:[k]}).map(p=>p.id);
    let v=0,o=0; ids.forEach(i=>{const e=S.q[i];if(e){v+=e.v;o+=e.o;}});
    const pc=v?o/v*100:0;
    h+=`<div class="tbar"><span title="${esc(nom(k))}">${k}</span>
      <span class="bg"><i style="width:${pc}%;background:${!v?'var(--line)':pc>=70?'var(--ok)':pc>=50?'var(--warn)':'var(--ko)'}"></i></span>
      <em>${v?Math.round(pc)+'%':'—'}</em></div>`;});
  h+=`</div>`;
  h+=`<button class="btn ghost" id="aj">⚙ ${t('ajustes')}</button>`;
  $('#v-stats').innerHTML=h;
  $('#aj').onclick=()=>ir('ajustes');
}

function pintarAjustes(){
  let h=`<div class="card"><h2>${t('ajustes')}</h2>
   <label class="row"><span>${t('idioma')}</span>
     <select id="aLang"><option value="es" ${S.cfg.lang==='es'?'selected':''}>Castellano</option><option value="gl" ${S.cfg.lang==='gl'?'selected':''}>Galego</option></select></label>
   <label class="row"><span>${t('tema')}</span>
     <select id="aTh"><option value="auto" ${S.cfg.theme==='auto'?'selected':''}>${t('auto')}</option><option value="light" ${S.cfg.theme==='light'?'selected':''}>${t('claro')}</option><option value="dark" ${S.cfg.theme==='dark'?'selected':''}>${t('oscuro')}</option></select></label>
   <label class="row"><span>${t('penal')}<small>${t('penalS')}</small></span><input type="checkbox" id="aPen" ${S.cfg.penal?'checked':''}></label>
   <label class="row"><span>${t('barajar')}<small>${t('barajarS')}</small></span><input type="checkbox" id="aBar" ${S.cfg.barajar?'checked':''}></label>
   <label class="row"><span>${t('soloVerif')}<small>${t('soloVerifS')}</small></span><input type="checkbox" id="aVer" ${S.cfg.soloVerif?'checked':''}></label>
   <label class="row"><span>${t('letra')}<small id="aFsV">${S.cfg.fs} px</small></span><input type="range" id="aFs" min="14" max="24" step="1" value="${S.cfg.fs}"></label>
   <p class="mini" style="margin:2px 2px 0">${t('letraS')}</p>
  </div>
  ${htmlCopia()}
  <div class="card"><h3>${S.cfg.lang==='gl'?'Sobre a aplicación':'Sobre la aplicación'}</h3>
   <p class="mini">${S.cfg.lang==='gl'
     ? 'Preparación do proceso selectivo para o ingreso no corpo de auxiliares de carácter técnico de Administración especial da Xunta de Galicia, subgrupo C2, escala auxiliar de cociña. Programa do DOG nº 123 do 30 de xuño de 2025.'
     : 'Preparación del proceso selectivo para el ingreso en el cuerpo de auxiliares de carácter técnico de Administración especial de la Xunta de Galicia, subgrupo C2, escala auxiliar de cocina. Programa del DOG nº 123 de 30 de junio de 2025.'}</p>
   <p class="mini">${BANCO.length} ${t('preg')} · ${Object.keys(TEMAS).length} ${S.cfg.lang==='gl'?'temas':'temas'}</p>
   <p class="mini">${S.cfg.lang==='gl'?'Todo o teu progreso gárdase só neste dispositivo.':'Todo tu progreso se guarda solo en este dispositivo.'}</p>
  </div>`;
  $('#v-ajustes').innerHTML=h;
  $('#aLang').onchange=e=>{S.cfg.lang=e.target.value;guardar();document.documentElement.lang=S.cfg.lang==='gl'?'gl':'es';$('#bLang').textContent=S.cfg.lang==='es'?'GL':'ES';pintarAjustes();};
  $('#aTh').onchange=e=>{S.cfg.theme=e.target.value;guardar();aplicarTema();};
  $('#aPen').onchange=e=>{S.cfg.penal=e.target.checked;guardar();};
  $('#aBar').onchange=e=>{S.cfg.barajar=e.target.checked;guardar();};
  $('#aVer').onchange=e=>{S.cfg.soloVerif=e.target.checked;guardar();pintarInicio();toast(t('guardado'));};
  $('#aFs').oninput=e=>{aplicarLetra(+e.target.value);$('#aFsV').textContent=S.cfg.fs+' px';guardar();};
  ligarCopia();
}
/* Tarjeta «Copia de seguridad» de Ajustes */
function htmlCopia(){
  const d=diasDesde(S.bk.f);
  const estado=S.bk.f?tx('Última copia: '+S.bk.f+' (hace '+d+' días)','Última copia: '+S.bk.f+' (hai '+d+' días)'):tx('Todavía no has guardado ninguna copia.','Aínda non gardaches ningunha copia.');
  let h=`<div class="card"><h3>${tx('Copia de seguridad','Copia de seguridade')}</h3>
    <p>${tx('Tu progreso se guarda solo en este navegador. Una copia es un archivo pequeño que puedes guardar en tu nube o enviarte por correo.','O teu progreso gárdase só neste navegador. Unha copia é un ficheiro pequeno que podes gardar na túa nube ou enviarte por correo.')}</p>
    <p class="mini">${estado}${protegido===true?' · '+tx('Almacenamiento protegido','Almacenamento protexido'):protegido===false?' · '+tx('El navegador podría borrar los datos si falta espacio','O navegador podería borrar os datos se falta espazo'):''}</p>
    <button class="btn" id="aExp">${tx('Guardar copia','Gardar copia')}<small>${tx('Descarga un archivo con todo tu progreso, notas y plan','Descarga un ficheiro con todo o teu progreso, notas e plan')}</small></button>
    <button class="btn sec" id="aImp">${tx('Restaurar una copia','Restaurar unha copia')}<small>${tx('Elige un archivo guardado antes; podrás fusionarlo o reemplazar','Escolle un ficheiro gardado antes; poderás fusionalo ou substituír')}</small></button>
    <input type="file" id="aFile" accept="application/json,.json" hidden>`;
  if(copiaPend){
    const r=resumenCopia(copiaPend.datos);
    h+=`<div class="copia-p" role="group" aria-label="${tx('Copia leída','Copia lida')}"><b>${tx('Copia leída','Copia lida')}${copiaPend.fecha?' · '+copiaPend.fecha.slice(0,10):''}</b>
      <span>${r.hechas} ${tx('respuestas','respostas')} · ${r.preg} ${t('preg')} · ${tx('racha','racha')} ${r.racha}${r.notas?' · '+r.notas+' '+tx('notas','notas'):''}${r.fichas?' · '+r.fichas+' '+tx('fichas','fichas'):''}</span>
      <div class="fila"><button class="btn sm" id="cFus">${tx('Fusionar con lo de este dispositivo','Fusionar co deste dispositivo')}</button>
      <button class="btn sm sec" id="cRep">${tx('Reemplazar todo','Substituír todo')}</button>
      <button class="chip mini" id="cNo">${tx('Cancelar','Cancelar')}</button></div>
      <small>${tx('Fusionar conserva lo mejor de cada lado (la fecha de repaso más reciente de cada pregunta). Reemplazar deja este dispositivo igual que la copia. En los dos casos se guarda antes una copia de seguridad interna.','Fusionar conserva o mellor de cada lado (a data de repaso máis recente de cada pregunta). Substituír deixa este dispositivo igual que a copia. Nos dous casos gárdase antes unha copia de seguridade interna.')}</small></div>`;
  }
  if(hayRedSeguridad())h+=`<button class="btn sec" id="aDesh">${tx('Deshacer la última restauración','Desfacer a última restauración')}</button>`;
  h+=`<button class="btn sec" id="aDel" style="color:var(--ko)">${t('borrar')}<small>${t('borrarS')}</small></button></div>`;
  return h;
}
function ligarCopia(){
  $('#aExp').onclick=()=>guardarCopia().then(ok=>{if(ok)pintarAjustes();});
  $('#aImp').onclick=()=>$('#aFile').click();
  $('#aFile').onchange=e=>{
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();
    r.onload=()=>{
      try{copiaPend=leerCopia(r.result);pintarAjustes();}
      catch(x){copiaPend=null;toast(tx('Ese archivo no es una copia de la aplicación','Ese ficheiro non é unha copia da aplicación'));}
    };
    r.readAsText(f);
  };
  const fin=m=>{restaurarCon(copiaPend.datos,m);copiaPend=null;ir('inicio');toast(tx('Copia restaurada','Copia restaurada'));};
  const cf=$('#cFus'); if(cf)cf.onclick=()=>fin('fusionar');
  const cr=$('#cRep'); if(cr)cr.onclick=()=>{if(confirm(tx('Esto sustituye todo el progreso de este dispositivo por el de la copia. ¿Continuar?','Isto substitúe todo o progreso deste dispositivo polo da copia. Continuar?')))fin('reemplazar');};
  const cn=$('#cNo'); if(cn)cn.onclick=()=>{copiaPend=null;pintarAjustes();};
  const dh=$('#aDesh'); if(dh)dh.onclick=()=>{if(deshacerRestauracion()){ir('inicio');toast(tx('Restauración deshecha','Restauración desfeita'));}};
  $('#aDel').onclick=()=>{if(confirm(t('confirmBorrar'))){guardarRedSeguridad();localStorage.removeItem(LS);S=JSON.parse(JSON.stringify(D));aplicarCfg();ir('inicio');}};
}

/* =========================================================
   TEMARIO · lectura de los temas completos
   ========================================================= */
const TEM = (window.TEMARIO||{});
const ANX = (window.ANEXOS||{});
const CONV = (window.CONVOCATORIA||null);
/* Un anexo se lee con el mismo visor que un tema, pero no es un tema:
   no entra en los test ni cuenta en el progreso. */
const doc = k => TEM[k] || ANX[k];
const esAnexo = k => !!ANX[k] && !TEM[k];

function pintarTemario(){
  const claves=Object.keys(TEMAS).filter(k=>TEM[k]);
  let h=`<div class="card"><h2>📖 ${t('temario')}</h2><p>${t('temarioS')}</p></div>`;
  h+=fichaConvocatoria();
  h+=`<input class="buscar" id="bq" type="search" placeholder="${t('buscarTemario')}" autocomplete="off">`;
  h+=`<div id="bres"></div><div id="blista">`;
  if(S.lec&&TEM[S.lec.tema]){
    h+=`<h3 style="margin:6px 0 8px;font-size:.8125rem;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t('ultimaVez')}</h3>`;
    h+=tarjetaTema(S.lec.tema);
  }
  h+=`<h3 style="margin:16px 0 8px;font-size:.8125rem;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t('parteG')}</h3>`;
  claves.filter(k=>TEMAS[k].p==='general').forEach(k=>h+=tarjetaTema(k));
  h+=`<h3 style="margin:16px 0 8px;font-size:.8125rem;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t('parteE')}</h3>`;
  claves.filter(k=>TEMAS[k].p==='especifica').forEach(k=>h+=tarjetaTema(k));
  const anx=Object.keys(ANX);
  if(anx.length){
    h+=`<h3 style="margin:16px 0 8px;font-size:.8125rem;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t('anexos')}</h3>`;
    anx.forEach(k=>h+=tarjetaAnexo(k));
  }
  h+=`</div>`;
  $('#v-temario').innerHTML=h;
  $('#v-temario').querySelectorAll('[data-tema]').forEach(b=>b.onclick=()=>abrirTema(b.dataset.tema));
  if($('#qConv'))$('#qConv').onclick=()=>abrirTema('A0');
  const q=$('#bq');
  q.oninput=()=>{
    const v=q.value.trim();
    if(v.length<3){$('#bres').innerHTML='';$('#blista').style.display='';return;}
    $('#blista').style.display='none';
    $('#bres').innerHTML=buscarTemario(v);
    $('#bres').querySelectorAll('[data-ir]').forEach(b=>b.onclick=()=>abrirTema(b.dataset.ir,0,v));
  };
}
/* Los anexos se enseñan como tarjetas, igual que los temas, pero sin número
   de preguntas: no son materia de examen, son material de consulta. */
function tarjetaAnexo(k){
  const d=ANX[k]||{}, n=(d.i||[]).length;
  const ico={A0:'🗓️',A1:'🔀',A2:'📋',A3:'🔪'}[k]||'📎';
  return `<button class="tema-c anx" data-tema="${k}">
    <span class="cod">${ico}</span>
    <span class="tx"><b>${esc(d.t||k)}</b><small>${n} ${t('secciones')}</small></span>
    <span class="fl">›</span></button>`;
}

/* Resumen de la convocatoria en cabecera del temario. Los datos vienen de
   app/convocatoria.js, que genera tools/convocatoria.py desde un único
   fichero de datos: cuando la Xunta publique algo, se cambia allí. */
function fichaConvocatoria(){
  if(!CONV)return '';
  const gl=S.cfg.lang==='gl';
  const hito=(CONV.hitos||[]).find(x=>x.estado==='abierto')||
             (CONV.hitos||[]).find(x=>x.estado==='previsto')||{};
  const ej=CONV.ejercicios||[];
  return `<button class="card conv" id="qConv">
    <div class="conv-t"><b>${esc(CONV.nombre||'')}</b>
      <span>${gl?'Como funciona':'Cómo funciona'} ›</span></div>
    <div class="conv-g">
      <div><b>${CONV.plazas.total}</b><span>${gl?'prazas':'plazas'}</span></div>
      <div><b>${ej.length}</b><span>${gl?'exercicios':'ejercicios'}</span></div>
      <div><b>${ej.length?ej[0].preguntas+'+'+(ej[1]?ej[1].preguntas:0):''}</b><span>${gl?'preguntas':'preguntas'}</span></div>
      <div><b>200</b><span>${gl?'puntos máx.':'puntos máx.'}</span></div>
    </div>
    <div class="conv-p">${gl
      ?'<b>Ollo:</b> hai un <b>terceiro exercicio práctico de cociña</b> —un menú completo en 60 minutos— e unha <b>proba de galego</b> (Celga 3).'
      :'<b>Ojo:</b> hay un <b>tercer ejercicio práctico de cocina</b> —un menú completo en 60 minutos— y una <b>prueba de gallego</b> (Celga 3).'}</div>
    <div class="conv-p">${gl?'Seguinte fito':'Próximo hito'}: <b>${esc(hito.fecha||'—')}</b> · ${esc(hito.que||'')}</div>
    <div class="conv-c">${gl?'Última revisión do DOG':'Última revisión del DOG'}: ${esc(CONV.comprobado||'')}</div>
  </button>`;
}

function tarjetaTema(k){
  const d=TEM[k]||{},n=(d.i||[]).length;
  return `<button class="tema-c ${TEMAS[k].p==='especifica'?'esp':''}" data-tema="${k}">
    <span class="cod">${k}</span>
    <span class="tx"><b>${esc(nom(k))}</b><small>${n} ${t('secciones')} · ${pool({temas:[k]}).length} ${t('preg')}</small></span>
    <span class="fl">›</span></button>`;
}
function buscarTemario(q){
  const n=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const nq=n(q); let h='',total=0;
  Object.keys(TEMAS).forEach(k=>{
    const d=TEM[k]; if(!d)return;
    const txt=d.x.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
    const nt=n(txt); let pos=nt.indexOf(nq), c=0;
    while(pos>=0&&c<3){
      const a=Math.max(0,pos-70), b=Math.min(txt.length,pos+q.length+110);
      let frag=esc(txt.slice(a,b));
      const re=new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig');
      frag=frag.replace(re,'<mark>$1</mark>');
      h+=`<div class="res-b" data-ir="${k}"><b>${k} · ${esc(nom(k))}</b><p>${a>0?'…':''}${frag}${b<txt.length?'…':''}</p></div>`;
      c++; total++;
      pos=nt.indexOf(nq,pos+q.length);
    }
  });
  return total?`<p class="mini" style="margin:4px 0 10px">${total} ${t('resultados')}</p>`+h
              :`<div class="vacio">${t('sinRes')}</div>`;
}

/* Lleva a un ancla dentro del tema abierto.
   Primero busca el id exacto; si no aparece, reintenta ignorando tildes,
   para que un enlace como «#2-explicación» encuentre igualmente su destino
   aunque el ancla se hubiera generado sin acentos. Devuelve el elemento
   encontrado, o null si no hay ninguno. */
function irAAncla(destino){
  let id=destino;
  try{id=decodeURIComponent(destino);}catch(e){}
  let el=document.getElementById(id);
  if(!el){
    const sinTildes=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    const buscado=sinTildes(id);
    el=[...document.querySelectorAll('#lcuerpo [id]')].find(n=>sinTildes(n.id)===buscado)||null;
  }
  if(el){
    /* Si el ancla cae dentro de un bloque plegado, se abre antes de saltar. */
    let d=el.closest('details');
    while(d){d.open=true; d=d.parentElement&&d.parentElement.closest('details');}
    el.scrollIntoView({behavior:'smooth',block:'start'});
  }
  return el;
}

function abrirTema(k,scrollY,resaltar){
  const d=doc(k); if(!d){toast(t('sinPreg'));return;}
  if(!esAnexo(k)){S.lec={tema:k,y:0}; guardar();}
  let cuerpo=d.x;
  if(resaltar&&resaltar.length>2){
    const re=new RegExp('(?![^<]*>)('+resaltar.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig');
    cuerpo=cuerpo.replace(re,'<mark>$1</mark>');
  }
  let h=`<div class="lbar">
    <button class="chip mini" id="lVolver">‹</button>
    <b>${esAnexo(k)?esc(d.t):k+' · '+esc(nom(k))}</b>
    <button class="chip mini" id="lIdx">${t('indice')}</button>
    ${esAnexo(k)?'':`<button class="chip mini ${S.leidos[k]?'on':''}" id="lLeido" aria-pressed="${!!S.leidos[k]}">${S.leidos[k]?'✓':'○'} ${tx('Leído','Lido')}</button><button class="chip mini" id="lTest">${t('test')}</button>`}
  </div>`;
  h+=`<input class="buscar" id="lq" type="search" placeholder="${t('buscarEn')}" autocomplete="off">`;
  h+=`<div id="idx" style="display:none">`;
  (d.i||[]).forEach(x=>{h+=`<a href="#${x.i}" class="${x.n===2?'n2':''}" data-a="${x.i}">${esc(x.t)}</a>`;});
  h+=`</div><div class="lec" id="lcuerpo">${cuerpo}</div>`;
  $('#v-lectura').innerHTML=h;
  /* Si se llega al tema desde el buscador global, la coincidencia puede estar
     dentro de un bloque plegado. Se abre para que se vea. */
  if(resaltar&&resaltar.length>2){
    $('#lcuerpo').querySelectorAll('mark').forEach(m=>{
      let dd=m.closest('details');
      while(dd){dd.open=true; dd=dd.parentElement&&dd.parentElement.closest('details');}
    });
  }
  ir('lectura');
  document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.v==='temario'));
  $('#lVolver').onclick=()=>{if(J&&J._vuelta){J._vuelta=false;ir('play');pintarPlay();}else ir('temario');};
  const ll=$('#lLeido'); if(ll)ll.onclick=()=>{
    if(S.leidos[k])delete S.leidos[k]; else S.leidos[k]=HOY();
    guardar();ll.classList.toggle('on',!!S.leidos[k]);ll.setAttribute('aria-pressed',!!S.leidos[k]);
    ll.textContent=(S.leidos[k]?'✓ ':'○ ')+tx('Leído','Lido');};
  $('#lIdx').onclick=()=>{const e=$('#idx');e.style.display=e.style.display==='none'?'block':'none';};
  if($('#lTest'))$('#lTest').onclick=()=>{const l=elegir(pool({temas:[k]}),20,true);
    if(!l.length){toast(t('sinPreg'));return;}
    iniciar({lista:l,modo:'estudio',titulo:k+' · '+nom(k)});};
  $('#idx').querySelectorAll('[data-a]').forEach(a=>a.onclick=ev=>{
    ev.preventDefault();
    const el=irAAncla(a.dataset.a);
    if(el)$('#idx').style.display='none';
  });
  /* Índice que va dentro del propio documento: los enlaces «#…» del markdown.
     Se resuelve por delegación en #lcuerpo para que siga funcionando después
     de que el buscador vuelva a pintar el cuerpo. */
  $('#lcuerpo').addEventListener('click',ev=>{
    const a=ev.target.closest('a[href^="#"]');
    if(!a)return;
    const destino=a.getAttribute('href').slice(1);
    if(!destino)return;
    if(irAAncla(destino))ev.preventDefault();
  });
  const lq=$('#lq');
  lq.oninput=()=>{
    const v=lq.value.trim();
    let c=cuerpo;
    if(v.length>2){
      const re=new RegExp('(?![^<]*>)('+v.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig');
      c=c.replace(re,'<mark>$1</mark>');
    }
    $('#lcuerpo').innerHTML=c;
    if(v.length>2){
      /* Los bloques <details> con material exhaustivo van plegados. Si la
         coincidencia está dentro de uno, hay que abrirlo: si no, el usuario ve
         el contador de resultados pero no encuentra nada en pantalla. */
      $('#lcuerpo').querySelectorAll('mark').forEach(m=>{
        let d=m.closest('details');
        while(d){d.open=true; d=d.parentElement&&d.parentElement.closest('details');}
      });
      const m=$('#lcuerpo mark'); if(m)m.scrollIntoView({behavior:'smooth',block:'center'});
    }
  };
  window.scrollTo(0,scrollY||0);
}

/* botón de volver arriba + memoria de posición de lectura */
(function(){
  const b=document.createElement('button');
  b.id='arriba'; b.textContent='↑'; b.setAttribute('aria-label','Arriba');
  document.body.appendChild(b);
  b.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
  let tick;
  addEventListener('scroll',()=>{
    b.classList.toggle('on', scrollY>420 && $('#v-lectura').classList.contains('on'));
    if($('#v-lectura').classList.contains('on')&&S.lec){
      clearTimeout(tick); tick=setTimeout(()=>{S.lec.y=scrollY;guardar();},400);
    }
  },{passive:true});
})();

/* =========================================================
   NOVEDADES NORMATIVAS 2026
   Normas publicadas entre el corte de la convocatoria anterior (29/07/2025) y
   el de esta (27/11/2026). Fuente: NORMATIVA-VIVA.md §2. Una pregunta se
   etiqueta si su texto (castellano, gallego o fuente) menciona la norma.
   ========================================================= */
const NOV=[
 {k:'ce',es:'Reforma de la Constitución (art. 69.3, Formentera)',gl:'Reforma da Constitución (art. 69.3, Formentera)',temas:['G1'],re:[/Formentera|cuarta reforma|209 senadores|cuatro reformas|catro reformas/i]},
 {k:'l5g4',es:'Ley 5/2025: Comisionado y Consejo Consultivo (Ley 1/2016)',gl:'Lei 5/2025: Comisionado e Consello Consultivo (Lei 1/2016)',temas:['G4'],re:[/Ley 5\/2025|Lei 5\/2025/,/Consejo Consultivo|Consello Consultivo/],y:/Transparencia|Comisionado/},
 {k:'l5g5',es:'Ley 5/2025: permisos y período de prueba (Ley 2/2015)',gl:'Lei 5/2025: permisos e período de proba (Lei 2/2015)',temas:['G5'],re:[/Ley 5\/2025|Lei 5\/2025/,/permiso parental|permiso parental/i,/(período|periodo) de prueba[^"]{0,80}interin|interin[^"]{0,80}(período|periodo) de prueba/i]},
 {k:'l126',es:'Ley 1/2026: autónomos en la ley de prevención de riesgos',gl:'Lei 1/2026: autónomos na lei de prevención de riscos',temas:['G8'],re:[/Ley 1\/2026|Lei 1\/2026/,/trabajadoras? autónom|traballadoras? autónom/i]},
 {k:'l426',es:'Ley 4/2026: reforma de la ley de discapacidad',gl:'Lei 4/2026: reforma da lei de discapacidade',temas:['G7'],re:[/Ley 4\/2026|Lei 4\/2026/]},
 {k:'l112',es:'Ley 5/2025: art. 112 bis de la Ley 1/2024',gl:'Lei 5/2025: art. 112 bis da Lei 1/2024',temas:['E12'],re:[/112 bis/i]},
 {k:'rd142',es:'RD 142/2026: seis normas de calidad (pan, derivados cárnicos, vinagres…)',gl:'RD 142/2026: seis normas de calidade (pan, derivados cárnicos, vinagres…)',re:[/142\/2026/]},
 {k:'r343',es:'Reglamento Delegado (UE) 2026/343: carne de aves',gl:'Regulamento Delegado (UE) 2026/343: carne de aves',re:[/2026\/343/]},
 {k:'rd1082',es:'RD 1082/2025: denominaciones comerciales de la pesca',gl:'RD 1082/2025: denominacións comerciais da pesca',re:[/1082\/2025/]}
];
let _nov=null;
function novDe(p){
  if(!_nov){
    _nov=new Map();
    BANCO.forEach(q=>{
      const c=JSON.stringify([q.es,q.gl,q.ref]);
      const ks=NOV.filter(n=>(!n.temas||n.temas.includes(q.tema))&&n.re.some(r=>r.test(c))&&(!n.y||n.y.test(c))).map(n=>n.k);
      if(ks.length)_nov.set(q.id,ks);
    });
  }
  return _nov.get(p.id)||[];
}
const novLista=k=>pool({}).filter(p=>novDe(p).includes(k));

/* =========================================================
   COPIA DE SEGURIDAD
   El progreso vive solo en el navegador. Aquí se guarda y se recupera, con
   fusión (no solo reemplazo) y con red de seguridad antes de restaurar.
   ========================================================= */
const diasDesde=f=>f?Math.round((Date.parse(HOY()+'T12:00:00')-Date.parse(f+'T12:00:00'))/864e5):Infinity;
function hechasTotal(){let n=0;Object.values(S.q).forEach(e=>{n+=(e&&e.v)||0;});return n;}
let protegido=null; // true/false cuando el navegador contesta; null si no se sabe
function pedirPersistencia(){
  try{
    if(navigator.storage&&navigator.storage.persist&&hechasTotal()>0){
      navigator.storage.persisted().then(p=>p?true:navigator.storage.persist()).then(p=>{protegido=!!p;}).catch(()=>{});
    }
  }catch(e){}
}
function copiaTexto(){return JSON.stringify({app:'auxcocina',formato:2,fecha:new Date().toISOString(),datos:S});}
async function guardarCopia(){
  const cuerpo=copiaTexto(), nombre='copia-auxcocina-'+HOY()+'.json';
  let enviada=false;
  try{
    /* En el móvil se ofrece el menú de compartir (Drive, correo, WhatsApp…);
       en el ordenador, descarga directa. */
    if(matchMedia('(pointer:coarse)').matches&&navigator.canShare&&navigator.share){
      const f=new File([cuerpo],nombre,{type:'application/json'});
      if(navigator.canShare({files:[f]})){await navigator.share({files:[f],title:nombre});enviada=true;}
    }
  }catch(e){if(e&&e.name==='AbortError')return false;}
  if(!enviada){
    const a=document.createElement('a');
    a.href=URL.createObjectURL(new Blob([cuerpo],{type:'application/json'}));
    a.download=nombre;document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  }
  S.bk.f=HOY();S.bk.s='';guardar();
  toast(tx('Copia guardada','Copia gardada'));
  return true;
}
/* Lee una copia (la nueva con sobre o el volcado antiguo del estado) y la deja
   con la forma del estado actual. Lanza un error si no es una copia. */
function leerCopia(texto){
  const o=JSON.parse(texto);
  const d=(o&&typeof o==='object'&&o.datos&&typeof o.datos==='object')?o.datos:o;
  if(!d||typeof d!=='object'||!d.q||typeof d.q!=='object'||Array.isArray(d.q))throw new Error('formato');
  const base=JSON.parse(JSON.stringify(D));
  const c=Object.assign(base,d);
  ['cfg','racha','bk','plan'].forEach(k=>{c[k]=Object.assign({},D[k],(d[k]&&typeof d[k]==='object')?d[k]:{});});
  ['marc','ses','simh','migr'].forEach(k=>{if(!Array.isArray(c[k]))c[k]=[];});
  ['q','hist','leidos','fi','notas'].forEach(k=>{if(!c[k]||typeof c[k]!=='object'||Array.isArray(c[k]))c[k]={};});
  migrarIds(false,c); // una copia anterior a una revisión del banco trae ids viejos
  return {datos:c,fecha:(o&&o.fecha)||''};
}
function resumenCopia(d){
  let hechas=0;Object.values(d.q).forEach(e=>{hechas+=(e&&e.v)||0;});
  return {hechas,preg:Object.keys(d.q).length,racha:(d.racha&&d.racha.n)||0,notas:Object.keys(d.notas||{}).length,fichas:Object.keys(d.fi||{}).length};
}
function fusionar(a,b){
  const r=JSON.parse(JSON.stringify(a));
  const mejor=(x,y)=>!x||(y.v||0)>(x.v||0)||((y.v||0)===(x.v||0)&&(y.due||'')>(x.due||''));
  Object.keys(b.q).forEach(id=>{if(mejor(r.q[id],b.q[id]))r.q[id]=b.q[id];});
  Object.keys(b.fi).forEach(id=>{if(mejor(r.fi[id],b.fi[id]))r.fi[id]=b.fi[id];});
  b.marc.forEach(id=>{if(!r.marc.includes(id))r.marc.push(id);});
  Object.keys(b.hist).forEach(f=>{const x=r.hist[f],y=b.hist[f];if(!x||(y.n||0)>(x.n||0))r.hist[f]=y;});
  Object.keys(b.notas).forEach(id=>{const x=r.notas[id],y=b.notas[id];if(!x||(y.f||'')>(x.f||''))r.notas[id]=y;});
  Object.keys(b.leidos).forEach(k=>{if(!r.leidos[k]||b.leidos[k]<r.leidos[k])r.leidos[k]=b.leidos[k];});
  if((b.racha.d||'')>(r.racha.d||'')||(b.racha.d===r.racha.d&&b.racha.n>r.racha.n))r.racha=b.racha;
  const unir=(A,B,clave)=>{const v=new Set(A.map(clave));B.forEach(x=>{if(!v.has(clave(x)))A.push(x);});return A.sort((x,y)=>(y.f||'').localeCompare(x.f||''));};
  r.ses=unir(r.ses,b.ses,x=>[x.f,x.tit,x.n,x.seg].join('|')).slice(0,40);
  r.simh=unir(r.simh,b.simh,x=>[x.f,x.tit,x.pts].join('|')).slice(0,30);
  if(!r.plan.ini&&b.plan.ini){r.plan=Object.assign({},b.plan);}
  if((b.bk.f||'')>(r.bk.f||''))r.bk.f=b.bk.f;
  r.migr=Array.from(new Set(r.migr.concat(b.migr)));
  return r;
}
function guardarRedSeguridad(){try{localStorage.setItem(LS+'-antes',JSON.stringify(S));}catch(e){}}
function hayRedSeguridad(){try{return !!localStorage.getItem(LS+'-antes');}catch(e){return false;}}
function restaurarCon(datos,modo){
  guardarRedSeguridad();
  if(modo==='fusionar'){S=fusionar(S,datos);}
  else{S=datos;}
  S.bk.f=HOY();
  guardar();aplicarCfg();
}
function deshacerRestauracion(){
  try{
    const r=localStorage.getItem(LS+'-antes');if(!r)return false;
    S=Object.assign(JSON.parse(JSON.stringify(D)),JSON.parse(r));
    localStorage.removeItem(LS+'-antes');guardar();aplicarCfg();return true;
  }catch(e){return false;}
}
let copiaPend=null; // copia leída y a la espera de que se elija cómo aplicarla
function avisoCopia(){
  if(hechasTotal()<30)return '';
  const d=diasDesde(S.bk.f);
  if(d<=7)return '';
  if(S.bk.s&&S.bk.s>HOY())return '';
  const cuando=S.bk.f?tx('Hace '+d+' días que no la guardas.','Hai '+d+' días que non a gardas.'):tx('Todavía no has guardado ninguna.','Aínda non gardaches ningunha.');
  return `<div class="aviso" role="note">
    <div><b>${tx('Guarda una copia de tu progreso','Garda unha copia do teu progreso')}</b>
    <span>${tx('Vive solo en este dispositivo y el navegador puede borrarlo.','Vive só neste dispositivo e o navegador pode borralo.')} ${cuando}</span></div>
    <div class="fila"><button class="btn sm" id="avCopia">${tx('Guardar copia','Gardar copia')}</button>
    <button class="chip mini" id="avLuego">${tx('Más tarde','Máis tarde')}</button></div></div>`;
}

/* =========================================================
   PLAN DE ESTUDIO
   Reparte los 22 temas entre el inicio del plan y las tres semanas finales,
   que se dedican a repasar. De ahí salen las tareas de cada día.
   ========================================================= */
const aFecha=f=>new Date(f+'T12:00:00');
const difDias=(a,b)=>Math.round((aFecha(b)-aFecha(a))/864e5);
const masDias=(f,n)=>{const d=aFecha(f);d.setDate(d.getDate()+n);return FECHA(d);};
const REPASO_FINAL=21;
const vistasN=()=>pool({}).filter(p=>S.q[p.id]&&S.q[p.id].v).length;
function asegurarPlan(){
  if(!S.plan.ini){S.plan.ini=HOY();S.plan.v0=vistasN();guardar();}
  if(!/^\d{4}-\d{2}-\d{2}$/.test(S.plan.ex||''))S.plan.ex=D.plan.ex;
}
function planDatos(){
  asegurarPlan();
  const P=S.plan, hoy=HOY(), ex=P.ex, ini=P.ini;
  const dias=Math.min(7,Math.max(1,+P.dias||6));
  const nRev=Math.min(REPASO_FINAL,Math.max(0,Math.floor(difDias(ini,ex)*0.3)));
  const finLect=masDias(ex,-nRev);
  const total=Math.max(1,difDias(ini,finLect));
  const claves=Object.keys(TEMAS);
  const pesos=claves.map(k=>40+pool({temas:[k]}).length);
  const suma=pesos.reduce((a,b)=>a+b,0);
  let acum=0;
  const tramos=claves.map((k,i)=>{
    const d0=Math.round(acum/suma*total); acum+=pesos[i];
    const d1=Math.round(acum/suma*total);
    return {tema:k,d0:masDias(ini,d0),d1:masDias(ini,Math.max(d1,d0+1))};
  });
  const fase=hoy>=ex?'pasado':hoy>=finLect?'repaso':'lectura';
  const deHoy=tramos.find(x=>x.d0<=hoy&&hoy<x.d1)||null;
  const atrasados=tramos.filter(x=>x.d1<=hoy&&!S.leidos[x.tema]);
  return {ex,ini,dias,finLect,total,tramos,fase,deHoy,atrasados,restan:difDias(hoy,ex)};
}
/* Fichas de hoy: las que tocan repasar más un máximo de 10 nuevas al día. */
function fichasCola(tema){
  const hoy=HOY(), L=tema?FICH.filter(f=>f.tema===tema):FICH;
  const due=L.filter(f=>{const e=S.fi[f.id];return e&&e.v>0&&e.due<=hoy;});
  /* El límite diario de fichas nuevas cuenta las vistas hoy por primera vez, sean del tema que sean */
  const vistasHoy=FICH.filter(f=>S.fi[f.id]&&S.fi[f.id].s===hoy).length;
  const sin=L.filter(f=>!(S.fi[f.id]&&S.fi[f.id].v));
  const hechasHoy=FICH.filter(f=>S.fi[f.id]&&S.fi[f.id].u===hoy).length;
  return {due,nuevas:mezclar(sin).slice(0,Math.max(0,(S.cfg.fnue||10)-vistasHoy)),hechasHoy,sin:sin.length};
}
function tareasHoy(){
  const P=planDatos(), hoy=HOY(), h=S.hist[hoy]||{n:0,o:0,nv:0};
  const base=pool({}), sinVer=base.filter(p=>!(S.q[p.id]&&S.q[p.id].v)).length;
  const fc=fichasCola(), nFich=fc.due.length+fc.nuevas.length;
  const T=[];
  if(P.fase==='lectura'){
    const leer=P.atrasados[0]?P.atrasados[0].tema:(P.deHoy?P.deHoy.tema:null);
    if(leer)T.push({k:'leer',tema:leer,hecho:!!S.leidos[leer],
      tit:tx('Leer el tema '+leer,'Ler o tema '+leer),det:nom(leer)+(P.atrasados[0]?' · '+tx('atrasado','atrasado'):''),prog:''});
    const dEst=Math.max(1,Math.round(Math.max(0,difDias(hoy,P.finLect))*P.dias/7));
    const obj=Math.min(60,Math.max(5,Math.ceil((sinVer+(h.nv||0))/dEst)));
    T.push({k:'nuevas',hecho:(h.nv||0)>=obj||sinVer===0,obj,
      tit:tx('Preguntas nuevas','Preguntas novas'),det:tx('Las que todavía no has visto','As que aínda non viches'),prog:Math.min(h.nv||0,obj)+'/'+obj});
  }else if(P.fase==='repaso'){
    T.push({k:'flacos',hecho:h.n>=25,tit:tx('Puntos flacos','Puntos febles'),det:tx('25 preguntas donde más fallas','25 preguntas onde máis fallas'),prog:Math.min(h.n,25)+'/25'});
    const ult=(S.simh[0]||{}).f, dd=ult?diasDesde(ult):Infinity;
    T.push({k:'simu',hecho:ult===hoy,tit:tx('Simulacro del primer ejercicio','Simulacro do primeiro exercicio'),
      det:ult?tx('Último: hace '+dd+' días','Último: hai '+dd+' días'):tx('Todavía no has hecho ninguno','Aínda non fixeches ningún'),prog:''});
  }
  if(fc.hechasHoy+nFich>0)T.push({k:'fichas',hecho:nFich===0,tit:tx('Fichas de cifras','Fichas de cifras'),
    det:tx('Las cifras que más se confunden','As cifras que máis se confunden'),prog:fc.hechasHoy+'/'+(fc.hechasHoy+nFich)});
  return {P,T,sinVer,total:base.length,h};
}
function lanzarTarea(t0){
  if(t0.k==='leer'){abrirTema(t0.tema);return;}
  if(t0.k==='nuevas'){
    const l=pool({}).filter(p=>!(S.q[p.id]&&S.q[p.id].v));
    iniciar({lista:mezclar(l).slice(0,Math.max(10,t0.obj-((S.hist[HOY()]||{}).nv||0))),modo:'estudio',titulo:tx('Preguntas nuevas','Preguntas novas')});return;
  }
  if(t0.k==='flacos'){iniciar({lista:mezclar(puntosFlacos(25)),modo:'estudio',titulo:tx('Puntos flacos','Puntos febles')});return;}
  if(t0.k==='simu'){ir('simulacro');return;}
  if(t0.k==='fichas'){ir('fichas');return;}
}
function marcaTarea(x){
  return `<button class="hoy-f ${x.hecho?'ok':''}" data-tarea="${x.k}">
    <span class="caja" aria-hidden="true">${x.hecho?'✓':''}</span>
    <span class="tx"><b>${esc(x.tit)}</b><small>${esc(x.det)}</small></span>
    ${x.prog?`<em>${x.prog}</em>`:''}</button>`;
}
function bloqueHoy(){
  const {P,T}=tareasHoy();
  if(P.fase==='pasado')return '';
  const hechas=T.filter(x=>x.hecho).length;
  const cab=P.fase==='repaso'?tx('Repaso final','Repaso final'):tx('Plan de hoy','Plan de hoxe');
  return `<div class="hoy"><div class="hoy-t"><b>${cab}</b>
    <span>${hechas}/${T.length} · ${P.restan} ${tx('días para el examen','días para o exame')}</span></div>
    ${T.map(marcaTarea).join('')}
    <button class="hoy-v" id="qPlan">${tx('Plan y calendario','Plan e calendario')} ›</button></div>`;
}
function ligarHoy(){
  const {T}=tareasHoy();
  document.querySelectorAll('#v-inicio [data-tarea]').forEach(b=>b.onclick=()=>{
    const x=T.find(y=>y.k===b.dataset.tarea);if(x)lanzarTarea(x);});
  const p=$('#qPlan');if(p)p.onclick=()=>ir('plan');
}

let calMes=null; // 'AAAA-MM'
function htmlCalendario(P){
  const [y,m]=(calMes||HOY().slice(0,7)).split('-').map(Number);
  const nd=new Date(y,m,0).getDate(), off=(new Date(y,m-1,1).getDay()+6)%7;
  const nombres=tx(['L','M','X','J','V','S','D'],['L','M','M','X','V','S','D']);
  const hoy=HOY();
  let c=nombres.map(n=>`<div class="cal-d">${n}</div>`).join('');
  for(let i=0;i<off;i++)c+='<div class="cal-v"></div>';
  for(let d=1;d<=nd;d++){
    const f=FECHA(new Date(y,m-1,d)), n=(S.hist[f]||{n:0}).n;
    let cl='cal-c',tag='',aria=f;
    if(n)cl+=n>=25?' l3':n>=10?' l2':' l1';
    if(f===hoy)cl+=' cal-hoy';
    if(f===P.ex){cl+=' ex';tag='EX';aria+=' · '+tx('examen','exame');}
    else if(f>=P.finLect&&f<P.ex){tag='R';}
    else if(f>=P.ini&&f<P.finLect){const tr=P.tramos.find(x=>x.d0<=f&&f<x.d1);if(tr){tag=tr.tema;if(S.leidos[tr.tema])cl+=' leido';}}
    if(n)aria+=' · '+n+' '+t('preg');
    c+=`<div class="${cl}" role="img" aria-label="${aria}"><b>${d}</b><i>${tag}</i></div>`;
  }
  const mes=new Date(y,m-1,1).toLocaleDateString(S.cfg.lang==='gl'?'gl':'es',{month:'long',year:'numeric'});
  return `<div class="card calcard"><div class="cal-t">
      <button class="chip mini" id="calP" aria-label="${tx('Mes anterior','Mes anterior')}">‹</button>
      <h2>${mes}</h2>
      <button class="chip mini" id="calN" aria-label="${tx('Mes siguiente','Mes seguinte')}">›</button></div>
    <div class="cal">${c}</div>
    <p class="mini">${tx('Cada casilla muestra el tema que toca leer ese día (R = repaso final, EX = examen). Más verde = más preguntas hechas.','Cada casa mostra o tema que toca ler ese día (R = repaso final, EX = exame). Máis verde = máis preguntas feitas.')}</p></div>`;
}
function pintarPlan(){
  const {P,T,sinVer,total}=tareasHoy();
  const hoy=HOY();
  let h=`<div class="card"><h2>${tx('Plan de estudio','Plan de estudo')}</h2>`;
  if(P.fase==='pasado'){
    h+=`<p>${tx('La fecha del examen ya ha pasado. Cámbiala más abajo si se ha aplazado.','A data do exame xa pasou. Cámbiaa máis abaixo se se aprazou.')}</p></div>`;
  }else{
    const trasc=Math.min(1,Math.max(0,difDias(P.ini,hoy)/P.total));
    const vistas=total-sinVer, v0=Math.min(S.plan.v0||0,total);
    const esperado=P.fase==='repaso'?total:Math.round(v0+trasc*(total-v0));
    const dif=vistas-esperado;
    const pcV=total?vistas/total*100:0, pcC=P.fase==='repaso'?100:trasc*100;
    h+=`<p>${P.restan} ${tx('días para el examen','días para o exame')} · ${tx('repaso final desde el','repaso final desde o')} ${P.finLect.split('-').reverse().join('/')}</p>
      <div class="plan-b"><span>${tx('Calendario','Calendario')}</span><i class="bg"><b style="width:${pcC}%"></b></i><em>${Math.round(pcC)} %</em></div>
      <div class="plan-b"><span>${tx('Preguntas vistas','Preguntas vistas')}</span><i class="bg"><b style="width:${pcV}%"></b></i><em>${Math.round(pcV)} %</em></div>
      <p class="veredicto-p ${dif>=-5?'ok':'no'}">${dif>=-5
        ?(dif>20?tx('Vas '+dif+' preguntas por delante del calendario.','Vas '+dif+' preguntas por diante do calendario.'):tx('Vas al día.','Vas ao día.'))
        :tx('Te faltan '+(-dif)+' preguntas nuevas para ir al día.','Fáltanche '+(-dif)+' preguntas novas para ir ao día.')}</p>`;
    if(P.fase==='lectura'&&P.atrasados.length)
      h+=`<p class="veredicto-p no">${tx('Temas del calendario sin marcar como leídos: ','Temas do calendario sen marcar como lidos: ')}${P.atrasados.map(x=>x.tema).join(', ')}</p>`;
    h+=`</div><div class="hoy">${T.map(marcaTarea).join('')}</div>`;
  }
  h+=`<div class="card"><h3>${tx('Ajustes del plan','Axustes do plan')}</h3>
    <label class="row"><span>${tx('Fecha del examen','Data do exame')}<small>${tx('La convocatoria dice «no antes del 30/04/2027». Cámbiala cuando se publique la fecha.','A convocatoria di «non antes do 30/04/2027». Cámbiaa cando se publique a data.')}</small></span>
      <input type="date" id="pEx" value="${P.ex}"></label>
    <label class="row"><span>${tx('Días de estudio por semana','Días de estudo por semana')}</span>
      <select id="pDias">${[3,4,5,6,7].map(n=>`<option ${n===P.dias?'selected':''}>${n}</option>`).join('')}</select></label>
    <button class="btn sec" id="pRehacer">${tx('Rehacer el plan desde hoy','Refacer o plan desde hoxe')}<small>${tx('Reparte los temas entre hoy y el repaso final. No borra tu progreso.','Reparte os temas entre hoxe e o repaso final. Non borra o teu progreso.')}</small></button></div>`;
  h+=htmlCalendario(P);
  $('#v-plan').innerHTML=h;
  $('#v-plan').querySelectorAll('[data-tarea]').forEach(b=>b.onclick=()=>{const x=T.find(y=>y.k===b.dataset.tarea);if(x)lanzarTarea(x);});
  $('#pEx').onchange=e=>{if(/^\d{4}-\d{2}-\d{2}$/.test(e.target.value)){S.plan.ex=e.target.value;guardar();pintarPlan();}};
  $('#pDias').onchange=e=>{S.plan.dias=+e.target.value;guardar();pintarPlan();};
  $('#pRehacer').onclick=()=>{S.plan.ini=HOY();S.plan.v0=vistasN();guardar();pintarPlan();toast(tx('Plan rehecho desde hoy','Plan refeito desde hoxe'));};
  const mover=n=>{const [y,m]=(calMes||HOY().slice(0,7)).split('-').map(Number);const d=new Date(y,m-1+n,1);calMes=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');pintarPlan();};
  $('#calP').onclick=()=>mover(-1);
  $('#calN').onclick=()=>mover(1);
}

/* =========================================================
   PUNTOS FLACOS
   Mezcla lo que más falla, los temas peor dominados y lo que toca repasar,
   sin dejar que un solo tema se coma el test.
   ========================================================= */
function tasasTema(){
  const r={};
  Object.keys(TEMAS).forEach(k=>{
    let v=0,o=0;
    pool({temas:[k]}).forEach(p=>{const e=S.q[p.id];if(e){v+=e.v||0;o+=e.o||0;}});
    r[k]=v>=5?o/v:null;
  });
  return r;
}
function puntosFlacos(n){
  n=n||25;
  const hoy=HOY(), tt=tasasTema();
  const cand=pool({}).map(p=>{
    const e=S.q[p.id], tT=tt[p.tema], tQ=e&&e.v?e.o/e.v:null;
    const toca=!!(e&&e.v>0&&e.due&&e.due<=hoy);
    if(e&&e.v>=2&&tQ>=0.9&&!toca)return null; // dominada y sin repaso pendiente
    let w=Math.random()*0.15;
    w+=tT===null?0.3:(1-tT)*0.5;
    w+=tQ===null?0.15:(1-tQ)*0.5;
    if(toca)w+=0.3;
    if(e&&e.l)w+=Math.min(0.2,e.l*0.05);
    return {p,w};
  }).filter(Boolean).sort((a,b)=>b.w-a.w);
  const max=Math.ceil(n*0.4), cuenta={}, sel=[];
  for(const c of cand){
    if(sel.length>=n)break;
    const k=c.p.tema; if((cuenta[k]||0)>=max)continue;
    cuenta[k]=(cuenta[k]||0)+1; sel.push(c.p);
  }
  return sel;
}
function resumenFlacos(){
  const tt=tasasTema();
  const peor=Object.keys(tt).filter(k=>tt[k]!==null).sort((a,b)=>tt[a]-tt[b]).slice(0,3);
  return peor.length?tx('Falla más en ','Falla máis en ')+peor.map(k=>k+' ('+Math.round(tt[k]*100)+' %)').join(', ')
                    :tx('Aún no hay datos: mezcla lo menos visto','Aínda non hai datos: mestura o menos visto');
}

/* =========================================================
   FICHAS DE CIFRAS
   Cada ficha es una pregunta corta con su dato; se repasan con la misma
   repetición espaciada que las preguntas del test.
   ========================================================= */
const FICH=(window.FICHAS||[]);
let FS=null; // sesión de fichas en curso
let fTema=''; // tema elegido en la vista de fichas ('' = todos)
function listaFichas(q){
  const nq=normTxt(q||'');
  const temas=Object.keys(TEMAS).filter(k=>FICH.some(f=>f.tema===k));
  let h='',total=0;
  temas.forEach(k=>{
    const L=FICH.filter(f=>f.tema===k&&(!nq||normTxt(f.q+' '+f.a).includes(nq)));
    if(!L.length)return;
    total+=L.length;
    h+=`<details class="fl-t" ${nq?'open':''}><summary>${k} · ${esc(nom(k))} <em>${L.length}</em></summary>`;
    L.forEach(f=>{h+=`<div class="fl-f"><b>${esc(f.q)}</b><span>${esc(f.a)}</span></div>`;});
    h+=`</details>`;
  });
  return total?h:`<div class="vacio">${tx('Ninguna ficha coincide','Ningunha ficha coincide')}</div>`;
}
function pintarFichas(){
  if(FS){pintarFicha();return;}
  const fc=fichasCola(fTema), n=fc.due.length+fc.nuevas.length, todas=fichasCola();
  const temas=Object.keys(TEMAS).filter(k=>FICH.some(f=>f.tema===k));
  let h=`<div class="card"><h2>${tx('Fichas de cifras','Fichas de cifras')}</h2>
    <p>${tx('Una cifra por ficha: plazos, temperaturas, porcentajes y números de artículo que se confunden. Respondes de cabeza, miras la solución y dices cómo te ha ido.','Unha cifra por ficha: prazos, temperaturas, porcentaxes e números de artigo que se confunden. Respondes de cabeza, miras a solución e dis como che foi.')}</p>
    <p class="mini">${FICH.length} ${tx('fichas','fichas')} · ${todas.due.length} ${tx('para repasar hoy','para repasar hoxe')} · ${todas.sin} ${tx('sin ver','sen ver')}</p>
    <label class="row"><span>${tx('Tema','Tema')}</span>
      <select id="fSel"><option value="">${tx('Todos los temas','Todos os temas')}</option>${temas.map(k=>`<option value="${k}" ${k===fTema?'selected':''}>${k} · ${esc(nom(k).slice(0,38))}</option>`).join('')}</select></label>
    <label class="row"><span>${tx('Fichas nuevas al día','Fichas novas ao día')}<small>${tx('Más fichas nuevas, más repasos los días siguientes','Máis fichas novas, máis repasos os días seguintes')}</small></span>
      <select id="fNue">${[5,10,15,20,30,50].map(v=>`<option ${v===(S.cfg.fnue||10)?'selected':''}>${v}</option>`).join('')}</select></label></div>`;
  h+=n?`<button class="btn" id="fGo">${tx('Empezar','Comezar')} · ${Math.min(n,30)}<small>${fc.due.length} ${tx('de repaso','de repaso')} + ${fc.nuevas.length} ${tx('nuevas','novas')}${n>30?' · '+tx('en tandas de 30','en tandas de 30'):''}</small></button>`
      :`<div class="vacio">${fTema?tx('No queda ninguna ficha de este tema hoy.','Non queda ningunha ficha deste tema hoxe.'):tx('Hoy no queda ninguna ficha. Vuelve mañana.','Hoxe non queda ningunha ficha. Volve mañá.')}</div>`;
  h+=`<div class="card"><h3>${tx('Todas las fichas','Todas as fichas')}</h3>
    <input class="buscar" id="fBus" type="search" placeholder="${tx('Buscar una cifra o un dato…','Buscar unha cifra ou un dato…')}" autocomplete="off">
    <div id="fLista">${listaFichas('')}</div></div>`;
  $('#v-fichas').innerHTML=h;
  $('#fSel').onchange=e=>{fTema=e.target.value;pintarFichas();};
  $('#fNue').onchange=e=>{S.cfg.fnue=+e.target.value;guardar();pintarFichas();};
  $('#fBus').oninput=e=>{$('#fLista').innerHTML=listaFichas(e.target.value.trim());};
  const g=$('#fGo');
  if(g)g.onclick=()=>{
    const cola=mezclar(fc.due).concat(fc.nuevas).slice(0,30);
    FS={cola,i:0,ver:false,total:cola.length,rep:{}};
    pintarFichas();
  };
}
function pintarFicha(){
  const f=FS.cola[FS.i];
  if(!f){
    const total=FS.total;FS=null;
    $('#v-fichas').innerHTML=`<div class="card nota"><div class="big">${total}</div><div class="sub">${tx('fichas repasadas','fichas repasadas')}</div></div>
      <button class="btn" id="fFin">${tx('Volver a las fichas','Volver ás fichas')}</button>`;
    $('#fFin').onclick=pintarFichas;
    return;
  }
  let h=`<div id="barra"><div class="brow"><span>${tx('Ficha','Ficha')} <b>${Math.min(FS.i+1,FS.cola.length)}</b> ${tx('de','de')} ${FS.cola.length}</span>
      <button class="chip mini" id="fSalir">${tx('Salir','Saír')}</button></div>
      <div class="prog"><i style="width:${FS.i/FS.cola.length*100}%"></i></div></div>
    <div class="ficha"><span class="fcod">${f.tema} · ${esc(nom(f.tema))}</span>
    <div class="fq">${esc(f.q)}</div>`;
  if(FS.ver){
    h+=`<div class="fa">${esc(f.a)}</div></div>
      <div class="fila fcal">
        <button class="btn sm sec" data-c="0">${t('otravez')}<small>1</small></button>
        <button class="btn sm sec" data-c="1">${t('dificil')}<small>2</small></button>
        <button class="btn sm sec" data-c="2">${t('bien')}<small>3</small></button>
        <button class="btn sm sec" data-c="3">${t('facil')}<small>4</small></button></div>`;
  }else{
    h+=`</div><button class="btn" id="fVer">${tx('Mostrar la respuesta','Amosar a resposta')}<small>${tx('Antes, piénsala','Antes, pénsaa')}</small></button>`;
  }
  $('#v-fichas').innerHTML=h;
  window.scrollTo(0,0);
  $('#fSalir').onclick=()=>{FS=null;pintarFichas();};
  const v=$('#fVer');if(v)v.onclick=()=>{FS.ver=true;pintarFicha();};
  $('#v-fichas').querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>valorarFicha(+b.dataset.c));
}
function valorarFicha(c){
  const f=FS.cola[FS.i], hoy=HOY();
  const e=S.fi[f.id]||(S.fi[f.id]={v:0,o:0,ef:2.5,iv:0,due:hoy,l:0,s:hoy});
  e.v++; if(c>=2)e.o++; e.u=hoy;
  planificarEn(e,c);
  if(c===0&&!FS.rep[f.id]){FS.rep[f.id]=1;FS.cola.push(f);} // vuelve una vez más en esta sesión
  tocarRacha();guardar();
  FS.i++;FS.ver=false;pintarFicha();
}
addEventListener('keydown',ev=>{
  if(!FS||!$('#v-fichas').classList.contains('on')||ev.target.closest('input,textarea,select'))return;
  if(ev.key===' '||ev.key==='Enter'){if(!FS.ver&&FS.cola[FS.i]){ev.preventDefault();FS.ver=true;pintarFicha();}}
  else if(FS.ver&&'1234'.includes(ev.key)&&ev.key.length===1){valorarFicha(+ev.key-1);}
});

/* =========================================================
   NOTAS Y ENLACE AL TEMA
   ========================================================= */
const normTxt=s=>String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const VACIAS=new Set(['sobre','entre','donde','cuando','cuales','segun','tiene','tienen','puede','pueden','deben','estas','estos','todas','todos','siguientes','siguiente','afirmacion','correcta','incorrecta','respecto','cuanto','cuantos','ambas','ninguna','ninguno','articulo','establece','indica','dice','segun','cuyo','cuya','mismo','misma']);
const _segs={};
function segmentosTema(k){
  if(_segs[k])return _segs[k];
  const html=(TEM[k]||{}).x||'', re=/<h([1-4]) id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g, marcas=[];
  let m; while((m=re.exec(html)))marcas.push({i:m.index,id:m[2],t:m[3].replace(/<[^>]+>/g,'').trim()});
  _segs[k]=marcas.map((x,j)=>{
    const fin=j+1<marcas.length?marcas[j+1].i:html.length;
    return {id:x.id,t:x.t,s:normTxt(html.slice(x.i,fin).replace(/<[^>]+>/g,' ')),len:fin-x.i};
  });
  return _segs[k];
}
/* Busca el apartado del tema donde más se concentran las palabras de la
   pregunta y de su respuesta correcta. Devuelve {id,t} o null. */
function mejorAncla(p){
  const seg=segmentosTema(p.tema);
  if(!seg.length||!p.es)return null;
  const tk=Array.from(new Set(normTxt(p.es.q+' '+(p.es.o||[])[p.r]+' '+(p.ref||'')).match(/[a-z0-9]{5,}/g)||[])).filter(w=>!VACIAS.has(w));
  if(tk.length<2)return null;
  const df={};tk.forEach(w=>{df[w]=seg.filter(x=>x.s.includes(w)).length;});
  let mejor=null,mp=0;
  seg.forEach(x=>{
    let n=0,sc=0;
    tk.forEach(w=>{if(df[w]&&x.s.includes(w)){n++;sc+=Math.log(1+seg.length/df[w]);}});
    if(n<2)return;
    sc=sc/(1+Math.log10(x.len/500+1));
    if(sc>mp){mp=sc;mejor=x;}
  });
  return mejor?{id:mejor.id,t:mejor.t}:null;
}
function verEnTema(p){
  const a=mejorAncla(p);
  abrirTema(p.tema);
  if(a){const el=irAAncla(a.id);if(el)toast(tx('Apartado: ','Apartado: ')+a.t.slice(0,60));}
}

/* ---------- tema visual y arranque ---------- */
function aplicarTema(){
  const dark=S.cfg.theme==='dark'||(S.cfg.theme==='auto'&&matchMedia('(prefers-color-scheme:dark)').matches);
  document.documentElement.dataset.theme=dark?'dark':'light';
  const m=document.querySelector('meta[name=theme-color]');if(m)m.content=dark?'#13372c':'#0f5b45';
}
/* Fija el tamaño de referencia del documento. Toda la hoja de estilos está en
   rem, así que con esto escalan enunciados, opciones, temario y menús. Se
   acota el valor por si llega estropeado de una copia de seguridad antigua. */
function aplicarLetra(px){
  const v=Math.min(24,Math.max(14,+px||16));
  S.cfg.fs=v;
  document.documentElement.style.setProperty('--fs',v+'px');
}
function aplicarCfg(){
  aplicarLetra(S.cfg.fs);
  document.documentElement.lang=S.cfg.lang==='gl'?'gl':'es';
  $('#bLang').textContent=S.cfg.lang==='es'?'GL':'ES';
  aplicarTema();
}
cargar(); aplicarCfg(); pedirPersistencia();
document.querySelectorAll('#nav button').forEach(b=>b.onclick=()=>{if(J&&!confirm(t('salirConf')))return;if(J){clearInterval(J._tk);J=null;}ir(b.dataset.v);});
$('#bLang').onclick=()=>{S.cfg.lang=S.cfg.lang==='es'?'gl':'es';guardar();aplicarCfg();
  const v=document.querySelector('.view.on').id.slice(2);
  if(v==='play'&&J)pintarPlay(); else ir(v);};
$('#bTheme').onclick=()=>{S.cfg.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';guardar();aplicarTema();};
matchMedia('(prefers-color-scheme:dark)').addEventListener('change',()=>{if(S.cfg.theme==='auto')aplicarTema();});
// atajos del icono de la app (accesos directos del manifiesto)
(function(){
  const q=new URLSearchParams(location.search).get('ir');
  if(q==='rapido'){iniciar({lista:elegir(pool({}),20,true),modo:'estudio',titulo:t('nuevoTest')});return;}
  if(q==='simulacro'){ir('simulacro');return;}
  if(q==='repaso'){ir('repaso');return;}
  if(q==='temario'){ir('temario');return;}
  if(q==='plan'){ir('plan');return;}
  if(q==='fichas'){ir('fichas');return;}
  if(q==='flacos'){iniciar({lista:mezclar(puntosFlacos(25)),modo:'estudio',titulo:tx('Puntos flacos','Puntos febles')});return;}
  ir('inicio');
})();
if('serviceWorker' in navigator&&location.protocol.startsWith('http')){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
