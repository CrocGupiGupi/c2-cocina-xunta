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
  E1:{es:'Alimentación, salud y desarrollo',gl:'Alimentación, saúde e desenvolvemento',p:'especifica'},
  E2:{es:'Cocinas, utensilios y manipulación',gl:'Cociñas, utensilios e manipulación',p:'especifica'},
  E3:{es:'Despensas, frigoríficos y marcha adelante',gl:'Despensas, frigoríficos e marcha adiante',p:'especifica'},
  E4:{es:'Condimentos, especias, salsas y fondos',gl:'Condimentos, especias, salsas e fondos',p:'especifica'},
  E5:{es:'Consomés, sopas y cremas',gl:'Consomés, sopas e cremas',p:'especifica'},
  E6:{es:'Hortalizas, verduras y ensaladas',gl:'Hortalizas, verduras e ensaladas',p:'especifica'},
  E7:{es:'Legumbres secas y potajes',gl:'Legumes secos e potaxes',p:'especifica'},
  E8:{es:'Pasta, arroz y huevos',gl:'Pasta, arroz e ovos',p:'especifica'},
  E9:{es:'Pescados y mariscos',gl:'Peixes e mariscos',p:'especifica'},
  E10:{es:'Las carnes',gl:'As carnes',p:'especifica'},
  E11:{es:'Postres y bebidas',gl:'Sobremesas e bebidas',p:'especifica'},
  E12:{es:'Ley 1/2024 calidad alimentaria · APPCC',gl:'Lei 1/2024 calidade alimentaria · APPCC',p:'especifica'},
  E13:{es:'Alérgenos e información alimentaria',gl:'Alérxenos e información alimentaria',p:'especifica'},
  E14:{es:'Temperaturas y toma de muestras',gl:'Temperaturas e toma de mostras',p:'especifica'},
  E15:{es:'Programa de gestión CENPOS',gl:'Programa de xestión CENPOS',p:'especifica'}
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
  seleccionar:'Seleccionar todos',ninguno:'Ninguno',parteG:'Parte general',parteE:'Parte específica',
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
  seleccionar:'Seleccionar todos',ninguno:'Ningún',parteG:'Parte xeral',parteE:'Parte específica',
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
const HOY=()=>new Date().toISOString().slice(0,10);
const D={
  cfg:{lang:'es',theme:'auto',penal:true,barajar:true,fs:16,soloVerif:false},
  q:{},          // id -> {v:vistas, o:ok, k:ko, ef:facilidad, iv:intervalo, due:'YYYY-MM-DD', l:lapsos}
  marc:[],       // ids marcados
  hist:{},       // 'YYYY-MM-DD' -> {n:hechas, o:aciertos}
  racha:{d:'',n:0},
  ses:[],        // últimas sesiones
  lec:null       // última lectura del temario {tema, y}
};
let S=JSON.parse(JSON.stringify(D));
function cargar(){
  try{const r=localStorage.getItem(LS);if(r)S=Object.assign(JSON.parse(JSON.stringify(D)),JSON.parse(r));}catch(e){}
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
function sumar(d){const f=new Date();f.setDate(f.getDate()+d);return f.toISOString().slice(0,10);}
const BANCO=(window.BANCO||[]);
function txt(p){return p[S.cfg.lang]||p.es||p.gl;}

/* ---------- selección de preguntas ---------- */
/* Distingue las preguntas redactadas y verificadas contra fuente oficial de
   las importadas del material de preparación del opositor. */
function esImportada(p){return !!(p.ref && p.ref.indexOf('Test de preparación')===0);}

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
  const e=S.q[id]||(S.q[id]={v:0,o:0,k:0,ef:2.5,iv:0,due:HOY(),l:0});
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
  e.v++; ok?e.o++:e.k++;
  const h=S.hist[HOY()]||(S.hist[HOY()]={n:0,o:0});
  h.n++; if(ok)h.o++;
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
      if(S.cfg.barajar&&!cfg.srs) idx=mezclar(idx);
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

  h+=`<div class="pmeta">${esc(nom(p.tema))} · ${p.tema}${p.tipo==='practica'?' · <span class="badge">'+(S.cfg.lang==='gl'?'PRÁCTICA':'PRÁCTICA')+'</span>':''}
      <button class="chip mini" id="bMarcar" style="float:right;${marcada?'background:var(--accent);color:#2a2000;border-color:var(--accent);font-weight:700':''}">${marcada?'★ '+t('marcada'):'☆ '+t('marcar')}</button></div>`;
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
    if(TEM[p.tema])h+=`<button class="chip mini" id="bVerTema" style="margin-top:9px">📖 ${t('verTema')} ${p.tema}</button>`;
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
  const bv=$('#bVerTema'); if(bv)bv.onclick=()=>{J._vuelta=true;abrirTema(p.tema);};
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
  S.ses.unshift({f:HOY(),n:J.lista.length,ok,ko,bl,seg,tit:J.titulo});
  S.ses=S.ses.slice(0,40);
  guardar();
  pintarFin(ok,ko,bl,seg);
  ir('fin');
}
function pintarFin(ok,ko,bl,seg){
  const n=J.lista.length;
  const neto=S.cfg.penal?ok-ko/4:ok;
  const pct=n?Math.max(0,neto)/n*100:0;
  const of=J.oficial;
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
    <tr><td>${t('neto')} ${S.cfg.penal?'(−¼)':''}</td><td>${neto.toFixed(2)} / ${n}</td></tr>
    <tr><td>${t('tiempo')}</td><td>${hhmmss(seg)}</td></tr>
  </table></div>`;

  // desglose por tema
  const porT={};
  J.lista.forEach((p,i)=>{const a=porT[p.tema]||(porT[p.tema]={n:0,o:0});a.n++;if(J.resp[i]===p.r)a.o++;});
  const claves=Object.keys(porT).sort();
  if(claves.length>1){
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
  document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));
  const p={inicio:pintarInicio,test:pintarTest,simulacro:pintarSimulacro,repaso:pintarRepaso,stats:pintarStats,ajustes:pintarAjustes,temario:pintarTemario}[v];
  if(p)p();
  window.scrollTo(0,0);
}

function pintarInicio(){
  const h0=S.hist[HOY()]||{n:0,o:0};
  let tv=0,to=0; Object.values(S.q).forEach(e=>{tv+=e.v;to+=e.o;});
  const pend=pendientesHoy().length, fall=falladas().length;
  let h=`<div class="grid g2" style="margin-bottom:12px">
    <div class="stat"><b>${S.racha.d===HOY()||S.racha.d===sumar(-1)?S.racha.n:0}</b><span>${t('racha')} · ${t('dias')}</span></div>
    <div class="stat"><b>${h0.n}</b><span>${t('hoy')}</span></div>
    <div class="stat"><b>${tv?Math.round(to/tv*100):0}%</b><span>${t('acierto')}</span></div>
    <div class="stat"><b>${tv}</b><span>${t('hechas')}</span></div>
  </div>`;
  h+=`<button class="btn" id="qRapido">${t('nuevoTest')}<small>${t('nuevoTestS')}</small></button>`;
  if(pend)h+=`<button class="btn gold" id="qPend">${t('pendientes')} · ${pend}<small>${t('repasoS')}</small></button>`;
  h+=`<button class="btn sec" id="qTemario">📖 ${t('temario')}<small>${S.lec&&TEM[S.lec.tema]?t('seguirLeyendo')+': '+S.lec.tema+' · '+esc(nom(S.lec.tema)):t('temarioS')}</small></button>`;
  h+=`<button class="btn sec" id="qTema">${t('porTema')}<small>${t('porTemaS')}</small></button>`;
  h+=`<button class="btn sec" id="qSimu">${t('simu')}<small>${t('simuS')}</small></button>`;
  if(fall)h+=`<button class="btn sec" id="qFall">${t('falladas')} · ${fall}<small>${S.cfg.lang==='gl'?'As que máis se che resisten':'Las que más se te resisten'}</small></button>`;
  if(S.ses.length){
    h+=`<div class="card"><h3>${S.cfg.lang==='gl'?'Últimas sesións':'Últimas sesiones'}</h3><table class="res">`;
    S.ses.slice(0,5).forEach(x=>{const pc=x.n?Math.round(x.ok/x.n*100):0;
      h+=`<tr><td>${esc(x.tit||'Test')}<br><span class="mini">${x.f} · ${x.n} ${t('preg')}</span></td>
          <td style="color:${pc>=70?'var(--ok)':pc>=50?'var(--warn)':'var(--ko)'}">${pc}%</td></tr>`;});
    h+=`</table></div>`;
  }
  h+=`<button class="btn ghost" id="qAjustes">⚙ ${t('ajustes')}</button>`;
  $('#v-inicio').innerHTML=h;
  $('#qRapido').onclick=()=>iniciar({lista:elegir(pool({}),20,true),modo:'estudio',titulo:t('nuevoTest')});
  $('#qTemario').onclick=()=>{if(S.lec&&TEM[S.lec.tema])abrirTema(S.lec.tema,S.lec.y);else ir('temario');};
  $('#qTema').onclick=()=>ir('test');
  $('#qSimu').onclick=()=>ir('simulacro');
  $('#qAjustes').onclick=()=>ir('ajustes');
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
  let h=`<div class="card"><h2>${t('repasoTit')}</h2><p>${t('repasoS')}</p></div>`;
  h+=`<button class="btn ${pend.length?'gold':'sec'}" id="r1">${t('pendientes')}<small>${pend.length} ${t('preg')}</small></button>`;
  h+=`<button class="btn sec" id="r2">${t('falladas')}<small>${fall.length} ${t('preg')}</small></button>`;
  h+=`<button class="btn sec" id="r3">${t('marcadas')}<small>${marc.length} ${t('preg')}</small></button>`;
  const sinver=BANCO.filter(p=>!S.q[p.id]||!S.q[p.id].v).length;
  h+=`<button class="btn sec" id="r4">${t('sinVer')}<small>${sinver} ${t('preg')}</small></button>`;
  if(marc.length){
    h+=`<div class="card"><h3>${t('marcadas')}</h3>`;
    marc.slice(0,20).forEach(p=>{h+=`<div style="padding:8px 0;border-bottom:1px solid var(--line);font-size:.8438rem">
      <span class="mini">${p.tema}</span><br>${esc(txt(p).q.slice(0,110))}${txt(p).q.length>110?'…':''}</div>`;});
    h+=`</div>`;
  }
  $('#v-repaso').innerHTML=h;
  $('#r1').onclick=()=>pend.length?iniciar({lista:mezclar(pend).slice(0,40),modo:'estudio',srs:true,titulo:t('pendientes')}):toast(t('sinPend'));
  $('#r2').onclick=()=>fall.length?iniciar({lista:mezclar(fall).slice(0,40),modo:'estudio',titulo:t('falladas')}):toast(t('sinFall'));
  $('#r3').onclick=()=>marc.length?iniciar({lista:mezclar(marc),modo:'estudio',titulo:t('marcadas')}):toast(t('sinMarc'));
  $('#r4').onclick=()=>{const l=BANCO.filter(p=>!S.q[p.id]||!S.q[p.id].v);
    l.length?iniciar({lista:mezclar(l).slice(0,30),modo:'estudio',titulo:t('sinVer')}):toast(t('sinPreg'));};
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
  <div class="card"><h3>${S.cfg.lang==='gl'?'Datos':'Datos'}</h3>
   <button class="btn sec" id="aExp">⬇ ${t('exportar')}</button>
   <button class="btn sec" id="aImp">⬆ ${t('importar')}</button>
   <input type="file" id="aFile" accept="application/json" hidden>
   <button class="btn sec" id="aDel" style="color:var(--ko)">${t('borrar')}<small>${t('borrarS')}</small></button>
  </div>
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
  $('#aExp').onclick=()=>{
    const b=new Blob([JSON.stringify(S)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(b);
    a.download='progreso-test-cocina-'+HOY()+'.json';a.click();toast(t('guardado'));};
  $('#aImp').onclick=()=>$('#aFile').click();
  $('#aFile').onchange=e=>{const f=e.target.files[0];if(!f)return;
    const r=new FileReader();r.onload=()=>{try{S=Object.assign(JSON.parse(JSON.stringify(D)),JSON.parse(r.result));guardar();aplicarCfg();ir('inicio');toast(t('guardado'));}catch(x){alert('Error');}};r.readAsText(f);};
  $('#aDel').onclick=()=>{if(confirm(t('confirmBorrar'))){localStorage.removeItem(LS);S=JSON.parse(JSON.stringify(D));aplicarCfg();ir('inicio');}};
}

/* =========================================================
   TEMARIO · lectura de los temas completos
   ========================================================= */
const TEM = (window.TEMARIO||{});

function pintarTemario(){
  const claves=Object.keys(TEMAS).filter(k=>TEM[k]);
  let h=`<div class="card"><h2>📖 ${t('temario')}</h2><p>${t('temarioS')}</p></div>`;
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
  h+=`</div>`;
  $('#v-temario').innerHTML=h;
  $('#v-temario').querySelectorAll('[data-tema]').forEach(b=>b.onclick=()=>abrirTema(b.dataset.tema));
  const q=$('#bq');
  q.oninput=()=>{
    const v=q.value.trim();
    if(v.length<3){$('#bres').innerHTML='';$('#blista').style.display='';return;}
    $('#blista').style.display='none';
    $('#bres').innerHTML=buscarTemario(v);
    $('#bres').querySelectorAll('[data-ir]').forEach(b=>b.onclick=()=>abrirTema(b.dataset.ir,0,v));
  };
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
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
  return el;
}

function abrirTema(k,scrollY,resaltar){
  const d=TEM[k]; if(!d){toast(t('sinPreg'));return;}
  S.lec={tema:k,y:0}; guardar();
  let cuerpo=d.x;
  if(resaltar&&resaltar.length>2){
    const re=new RegExp('(?![^<]*>)('+resaltar.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig');
    cuerpo=cuerpo.replace(re,'<mark>$1</mark>');
  }
  let h=`<div class="lbar">
    <button class="chip mini" id="lVolver">‹</button>
    <b>${k} · ${esc(nom(k))}</b>
    <button class="chip mini" id="lIdx">${t('indice')}</button>
    <button class="chip mini" id="lTest">${t('test')}</button>
  </div>`;
  h+=`<input class="buscar" id="lq" type="search" placeholder="${t('buscarEn')}" autocomplete="off">`;
  h+=`<div id="idx" style="display:none">`;
  (d.i||[]).forEach(x=>{h+=`<a href="#${x.i}" class="${x.n===2?'n2':''}" data-a="${x.i}">${esc(x.t)}</a>`;});
  h+=`</div><div class="lec" id="lcuerpo">${cuerpo}</div>`;
  $('#v-lectura').innerHTML=h;
  ir('lectura');
  document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.v==='temario'));
  $('#lVolver').onclick=()=>{if(J&&J._vuelta){J._vuelta=false;ir('play');pintarPlay();}else ir('temario');};
  $('#lIdx').onclick=()=>{const e=$('#idx');e.style.display=e.style.display==='none'?'block':'none';};
  $('#lTest').onclick=()=>{const l=elegir(pool({temas:[k]}),20,true);
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
    if(v.length>2){const m=$('#lcuerpo mark'); if(m)m.scrollIntoView({behavior:'smooth',block:'center'});}
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

/* ---------- tema visual y arranque ---------- */
function aplicarTema(){
  const dark=S.cfg.theme==='dark'||(S.cfg.theme==='auto'&&matchMedia('(prefers-color-scheme:dark)').matches);
  document.documentElement.dataset.theme=dark?'dark':'light';
  const m=document.querySelector('meta[name=theme-color]');if(m)m.content=dark?'#111614':'#0b3d2e';
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
cargar(); aplicarCfg();
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
  ir('inicio');
})();
if('serviceWorker' in navigator&&location.protocol.startsWith('http')){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
