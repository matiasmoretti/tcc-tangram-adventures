private var timeInicioSlide : float = 0;
private var segundosPassados : int = 0;
private var slideAtual : int = 0;
private var tempoSlideAtual : int = 0;
var slide1 : Texture;
var tempoSlide1 : int;
var slide2 : Texture;
var tempoSlide2 : int;
var slide3 : Texture;
var tempoSlide3 : int;
var slide4 : Texture;
var tempoSlide4 : int;
var slide5 : Texture;
var tempoSlide5 : int;
var slide6 : Texture;
var tempoSlide6 : int;
var slide7 : Texture;
var tempoSlide7 : int;
var slide8 : Texture;
var tempoSlide8 : int;
var slide9 : Texture;
var tempoSlide9 : int;
var slide10 : Texture;
var tempoSlide10 : int;
var slide11 : Texture;
var tempoSlide11 : int;
var slide12 : Texture;
var tempoSlide12 : int;
var sfxGrito : AudioClip;
var sfxRisada : AudioClip;
var sfxVidro : AudioClip;
var sfxLatido : AudioClip;
var bgInicio :AudioClip;
var bgTermino :AudioClip;

function Awake() {
	ProximoSlide();
}

function Update(){
    if ((Input.GetKeyDown("space")) || (Input.GetKeyDown("return"))) {
    	/*ProximoSlide();	*/
	} else if (Input.GetKeyDown("escape")) {
		FinalizaAbertura();
	}
	var difTime : int = Time.time - timeInicioSlide;
    segundosPassados = difTime;
    if (segundosPassados == tempoSlideAtual) {
 		ProximoSlide();
    }
	Debug.Log(segundosPassados);
}

function OnGUI () {
	Screen.showCursor = false;
	if (slideAtual == 1) {
		GUI.DrawTexture(Rect(-1,-1,1025,770),slide1, ScaleMode.StretchToFill, true, 0);
	} else if (slideAtual == 2) {
		GUI.DrawTexture(Rect(-1,-1,1025,769),slide2, ScaleMode.StretchToFill, true, 0);
	} else if (slideAtual == 3) {
		GUI.DrawTexture(Rect(-1,-1,1025,769),slide3, ScaleMode.StretchToFill, true, 0);
	} else if (slideAtual == 4) {
		GUI.DrawTexture(Rect(-1,-1,1025,769),slide4, ScaleMode.StretchToFill, true, 0);
	} else if (slideAtual == 5) {
		GUI.DrawTexture(Rect(-1,-1,1025,770),slide5, ScaleMode.StretchToFill, true, 0);
	} else if (slideAtual == 6) {
		GUI.DrawTexture(Rect(-1,-1,1026,770),slide6, ScaleMode.StretchToFill, true, 0);
	} else if (slideAtual == 7) {
		GUI.DrawTexture(Rect(-1,-1,1026,770),slide7, ScaleMode.StretchToFill, true, 0);
	} else if (slideAtual == 8) {
		GUI.DrawTexture(Rect(-1,-1,1025,769),slide8, ScaleMode.StretchToFill, true, 0);
	} else if (slideAtual == 9) {
		GUI.DrawTexture(Rect(-1,-1,1025,769),slide9, ScaleMode.StretchToFill, true, 0);
	} else if (slideAtual == 10) {
		GUI.DrawTexture(Rect(-1,-1,1025,770),slide10, ScaleMode.StretchToFill, true, 0);
	} else if (slideAtual == 11) {
		GUI.DrawTexture(Rect(-1,-1,1025,769),slide11, ScaleMode.StretchToFill, true, 0);
	} else if (slideAtual >= 12) {
		GUI.DrawTexture(Rect(-1,-1,1025,770),slide12, ScaleMode.StretchToFill, true, 0);
	} 	
}

function ProximoSlide() {
	segundosPassados = 0;
	timeInicioSlide = Time.time;
	slideAtual += 1;
	SetaTempoSlideAtual(slideAtual);
	if (slideAtual == 1) {
		audio.PlayOneShot(bgInicio);
	}else if (slideAtual == 3) {
		audio.PlayOneShot(sfxVidro);
	} else if (slideAtual == 9) {
		audio.PlayOneShot(sfxRisada);
		audio.PlayOneShot(bgTermino);
	} else if (slideAtual == 10) {
		audio.PlayOneShot(sfxGrito);
	} else if (slideAtual == 11) {
		audio.PlayOneShot(sfxRisada);
	} else if (slideAtual == 12) {
		audio.PlayOneShot(sfxLatido);
	}
}

function SetaTempoSlideAtual(slide : int) {
	if (slideAtual == 1) {
		tempoSlideAtual = tempoSlide1; 
	} else if (slideAtual == 2) {
		tempoSlideAtual = tempoSlide2;
	} else if (slideAtual == 3) {
		tempoSlideAtual = tempoSlide3;
	} else if (slideAtual == 4) {
		tempoSlideAtual = tempoSlide4;
	} else if (slideAtual == 5) {
		tempoSlideAtual = tempoSlide5;
	} else if (slideAtual == 6) {
		tempoSlideAtual = tempoSlide6;
	} else if (slideAtual == 7) {
		tempoSlideAtual = tempoSlide7;
	} else if (slideAtual == 8) {
		tempoSlideAtual = tempoSlide8;
	} else if (slideAtual == 9) {
		tempoSlideAtual = tempoSlide9;
	} else if (slideAtual == 10) {
		tempoSlideAtual = tempoSlide10;
	} else if (slideAtual == 11) {
		tempoSlideAtual = tempoSlide11;
	} else if (slideAtual == 12) {
		tempoSlideAtual = tempoSlide12;
	} else {
		FinalizaAbertura();
	}
}

function FinalizaAbertura(){		
	Application.LoadLevel("MapaFases");
}