#pragma strict
var sfxAcabouTempo : AudioClip;
var totalSegundos = 1200;
private var timeInicial : float = 0;
static var contadorLigado = false;
static var segundosRestantes = 0;
static var tempoRestantePassagem = 0;
static var tempoTotalFase : int;
private var pContatorLigado : boolean;
private var pSegundosRestantes : int;


function Awake() {
	if (Application.loadedLevelName == "Fase1"){ 
		tempoTotalFase = totalSegundos;
		segundosRestantes = totalSegundos; 
	} else if (Application.loadedLevelName == "Puzzle1"){
		segundosRestantes = tempoRestantePassagem;
		Debug.Log("Passou por aqui" + tempoRestantePassagem + "     " +tempoTotalFase);
	}
}

function OnGUI () {
	pContatorLigado = contadorLigado;
	pSegundosRestantes = segundosRestantes;
   if (contadorLigado) {
		var difTime : int = Time.time - timeInicial;
		var tempoRestante = totalSegundos - difTime; 
		var minutos : int = tempoRestante / 60;
		var segundos : int = tempoRestante % 60;
		segundosRestantes = tempoRestante;
	   	if ((tempoRestante >= 0) && (contadorLigado)) {
	   	   	GameObject.Find("lblTimer").guiText.text = String.Format ("{0:00}:{1:00}", minutos, segundos);
	   	} else {
	   		contadorLigado = false;
	   		audio.Stop();
	   		if (Application.loadedLevelName == "Puzzle1"){ 
				GameObject.Find("Fundo").GetComponent(ControlaSons).ExecutaAcabouTempo();	   			
	   			GetComponent(HUD_Puzzle1).SetaStatusJogo(4);
	   		} else if (Application.loadedLevelName == "Fase1"){
	   			GameObject.FindWithTag("Player").GetComponent(ControlaSons).ExecutaAcabouTempo();
	   			GetComponent(HUD_Fase1).SetaStatusJogo(4);	   			   			
	   		}
//			GetComponent(HUD_Puzzle1).SetaStatusJogo(4);	   		
	   		//GameObject.Find("Main Camera").GetComponent("HUD_Puzzle1").SetaStatusJogo(4);
	   	}
	}
}

function IniciaContadorRegressivo() {
	timeInicial = Time.time;
	totalSegundos = segundosRestantes;
	contadorLigado = true;
}

function ParaContadorRegressivo(){
	contadorLigado = false;
}

function SetaSegundos(s : int){
	segundosRestantes = s;
	IniciaContadorRegressivo();
}

function SetaTempoRestantePassagem(){
	tempoRestantePassagem = segundosRestantes;
}