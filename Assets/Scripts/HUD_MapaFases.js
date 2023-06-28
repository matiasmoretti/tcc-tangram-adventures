var fundo : Texture;
var popFase1 : Texture;
var popFase2 : Texture;
var popFase3 : Texture;
var popFase4 : Texture;
var popFase5 : Texture;
var nuvens : Texture;
var iconeMinGo : Texture;
var sfxPop : AudioClip;
var sfxLatido : AudioClip;
var sfxSelecionar : AudioClip;
private var contador : int;
private var tocarPop1 = true;
private var tocarPop2 = false;
private var tocarPop3 = false;
private var tocarPop4 = false;
private var tocarPop5 = false;
private var tocarLatido = false;
private var moverMingo = false;
private var piscarMingo = false;
private var mostrarMingo = false;
private var posNuvensFundo = 0.00;
private var posNuvensFrente = 0.00;
private var velocidadeNuvensFundo = 0.03;
private var velocidadeNuvensFrente = 0.10;
private var posMinGo = 700;
private var liberarAcaoUsuario = false;
private var podeIniciar = false;

function Update(){
/*	if (liberarAcaoUsuario){
	        if (Input.GetKeyDown("space")){
	    	piscarMingo = true;
	 		AbreFase("Fase1");	
		}
	}*/
}

function AbreFase(fase){    
//  	audio.PlayOneShot(sfxSelecionar);
  	audio.PlayOneShot(sfxLatido);
	yield WaitForSeconds (0.3);
    audio.PlayOneShot(sfxLatido);
	yield WaitForSeconds (4);
//	yield WaitForSeconds (sfxSelecionar.length);
	Application.LoadLevel(fase);
}

function OnGUI () {
	Screen.showCursor = false;
	if (posNuvensFrente < -1216){
		posNuvensFrente = 0.00;
	}
	if (posNuvensFundo < -1057){
		posNuvensFundo = 0.00;
	}
	posNuvensFundo -= velocidadeNuvensFundo;
	posNuvensFrente -= velocidadeNuvensFrente;
	GUI.DrawTexture(Rect(0,0,1024,769),fundo, ScaleMode.StretchToFill, true, 0);
	GUI.DrawTexture(Rect(posNuvensFundo,20,2048,200),nuvens, ScaleMode.StretchToFill, true, 0);
	GUI.DrawTexture(Rect(posNuvensFrente+100,-50,2357,340),nuvens, ScaleMode.StretchToFill, true, 0);
	contador++;
	if (contador > 100){
		if (tocarPop1) {
			audio.PlayOneShot(sfxPop);
			tocarPop1 = false;
			tocarPop2 = true;
		}
		GUI.DrawTexture(Rect(137,570,226,178),popFase1, ScaleMode.StretchToFill, true, 0);
	}
	if (contador > 200){	
		if (tocarPop2) {
			audio.PlayOneShot(sfxPop);
			tocarPop2 = false;
			tocarPop3 = true;
		}
		GUI.DrawTexture(Rect(601,542,241,180),popFase2, ScaleMode.StretchToFill, true, 0);
	}
	if (contador > 300){
		if (tocarPop3) {
			audio.PlayOneShot(sfxPop);
			tocarPop3 = false;
			tocarPop4 = true;
		}
		GUI.DrawTexture(Rect(236,370,236,178),popFase3, ScaleMode.StretchToFill, true, 0);
	}
	if (contador > 400){
		if (tocarPop4) {
			audio.PlayOneShot(sfxPop);
			tocarPop4 = false;
			tocarPop5 = true;
		}
		GUI.DrawTexture(Rect(648,336,239,178),popFase4, ScaleMode.StretchToFill, true, 0);
	}
	if (contador > 500){
		if (tocarPop5) {
			audio.PlayOneShot(sfxPop);
			tocarPop5 = false;
			moverMingo = true;
			tocarLatido = true;
		}
		GUI.DrawTexture(Rect(216,139,261,178),popFase5, ScaleMode.StretchToFill, true, 0);
	}
	
	if (moverMingo) {
		if (posMinGo > 660){
			posMinGo -= 2;
		}
		else {
	    	if (tocarLatido) { 
	    		//audio.PlayOneShot(sfxLatido);
	    		tocarLatido = false;
	    		//liberarAcaoUsuario = true;	
	    	AbreFase("Fase1");

	    	}
		}
		GUI.DrawTexture(Rect(370,posMinGo,114,97),iconeMinGo, ScaleMode.StretchToFill, true, 0);			
	}	
}