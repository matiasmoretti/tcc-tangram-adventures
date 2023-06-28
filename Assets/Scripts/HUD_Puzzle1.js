#pragma strict
/*
Status de Jogo
0 = Iniciando
1 = Jogando
2 = Pausado
3 = FimFase
4 = FimJogo
*/

static var statusJogo : int;
var imgHelpInicialPuzzle : Texture;
var sfxMudarOpcao : AudioClip;

var style : GUIStyle;
private var pontos;
private var minutos;
private var segundos;


//Menus
private var posFocoMenuPausa = 1;
private var posFocoMenuAcabouTempo = 1;
var btnUpContinuar : Texture;
var btnDownContinuar : Texture;
var btnUpReiniciarPuzzle : Texture;
var btnDownReiniciarPuzzle : Texture;
var btnUpReiniciarFase : Texture;
var btnDownReiniciarFase : Texture;
var btnUpVoltarMenu : Texture;
var btnDownVoltarMenu : Texture;
var imgFundoPause : Texture;
var imgFundoAcabouTempo : Texture;
var imgFundoFimFase : Texture;

function Start() {
	PreparaInicioJogo();
    style.normal.textColor = Color(64/255.0F,136/255.0F,237/255.0F,255/255.0F);
    style.fontSize = 25;
}

function Update () {
   	
	if (Input.GetKeyDown("escape")) {
		if ((statusJogo == 2) || (statusJogo == 1)) {	
			if (statusJogo == 2){
				SetaStatusJogo(1);
				TocarMusica();
			} else {
				SetaStatusJogo(2);
				PararMusica();
			} 	
		}
    }  
    
    // Cheat para deixar o contador com 3 segundos (testes)
	if (Input.GetKeyDown("f")) {
		GetComponent(ContadorRegressivo).SetaSegundos(3);
    } 
    
    if (statusJogo == 0) { 
    
    	if ((Input.GetKeyDown("space")) || (Input.GetKeyDown("return")) ) {
			SetaStatusJogo(1);
		}

    } else if (statusJogo == 2) {
    
	    if (Input.GetKeyDown("down")){
			AlteraFocoMenuPausa("+");
			GameObject.Find("Fundo").GetComponent(ControlaSons).ExecutaMudarOpcaoMenu();
//			audio.PlayOneShot(sfxMudarOpcao);
	    }
	    if (Input.GetKeyDown("up")){
			AlteraFocoMenuPausa("-");
			GameObject.Find("Fundo").GetComponent(ControlaSons).ExecutaMudarOpcaoMenu();			
//			audio.PlayOneShot(sfxMudarOpcao);
	    }
	    if ((Input.GetKeyDown("space")) || (Input.GetKeyDown("return"))){			
			ExecutaMenuPausa(posFocoMenuPausa);		
		}

	} else if (statusJogo == 3) {
	
	    if ((Input.GetKeyDown("space")) || (Input.GetKeyDown("return"))){
 			Application.LoadLevel("Menu");	
		}					

    } else if (statusJogo == 4) {
    
	    if (Input.GetKeyDown("down")){
			AlteraFocoMenuAcabouTempo("+");
			GameObject.Find("Fundo").GetComponent(ControlaSons).ExecutaMudarOpcaoMenu();			
//			audio.PlayOneShot(sfxMudarOpcao);
	    }
	    if (Input.GetKeyDown("up")){
			AlteraFocoMenuAcabouTempo("-");
			GameObject.Find("Fundo").GetComponent(ControlaSons).ExecutaMudarOpcaoMenu();			
//			audio.PlayOneShot(sfxMudarOpcao);
	    }
	    if ((Input.GetKeyDown("space")) || (Input.GetKeyDown("return"))){
			ExecutaMenuAcabouTempo(posFocoMenuAcabouTempo);
		}
    }
}

function OnGUI () {

	Screen.showCursor = true;
	
	if (statusJogo == 0) {
	
	  	GUI.DrawTexture(Rect(0,0,1024,768),imgHelpInicialPuzzle, ScaleMode.StretchToFill, true, 0);
	} else if (statusJogo == 1) {
	
	  			 	 	
 	} else if (statusJogo == 2) { 
 		
	  	GUI.DrawTexture(Rect(0,0,1024,768),imgFundoPause, ScaleMode.StretchToFill, true, 0);
		if (posFocoMenuPausa == 1) {		
			GUI.DrawTexture(Rect(263,238,364,56),btnDownContinuar, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,309,354,52),btnUpReiniciarPuzzle, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,376,354,52),btnUpReiniciarFase, ScaleMode.StretchToFill, true, 0);						
			GUI.DrawTexture(Rect(267,444,354,52),btnUpVoltarMenu, ScaleMode.StretchToFill, true, 0);
		} else if (posFocoMenuPausa == 2) {		
			GUI.DrawTexture(Rect(267,241,354,52),btnUpContinuar, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(263,306,364,56),btnDownReiniciarPuzzle, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,376,354,52),btnUpReiniciarFase, ScaleMode.StretchToFill, true, 0);						
			GUI.DrawTexture(Rect(267,444,354,52),btnUpVoltarMenu, ScaleMode.StretchToFill, true, 0);			
		} else if (posFocoMenuPausa == 3) {		
			GUI.DrawTexture(Rect(267,241,354,52),btnUpContinuar, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,309,354,52),btnUpReiniciarPuzzle, ScaleMode.StretchToFill, true, 0);	
			GUI.DrawTexture(Rect(263,373,364,56),btnDownReiniciarFase, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,444,354,52),btnUpVoltarMenu, ScaleMode.StretchToFill, true, 0);			
		} else if (posFocoMenuPausa == 4) {		
			GUI.DrawTexture(Rect(267,241,354,52),btnUpContinuar, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,309,354,52),btnUpReiniciarPuzzle, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,376,354,52),btnUpReiniciarFase, ScaleMode.StretchToFill, true, 0);					
			GUI.DrawTexture(Rect(263,441,364,56),btnDownVoltarMenu, ScaleMode.StretchToFill, true, 0);			
		}
		
	} else if (statusJogo == 3) {
	
		GUI.DrawTexture(Rect(0,0,1024,768),imgFundoFimFase, ScaleMode.StretchToFill, true, 0);	
		GUI.Label (Rect(640,400,200,200), String.Format ("{0:00}:{1:00}", minutos, segundos),style);
		GUI.Label (Rect(620,450,200,200), String.Format ("{000000}", pontos) ,style);
						
 	} else if (statusJogo == 4) { 
 	
	  	GUI.DrawTexture(Rect(0,0,1024,768),imgFundoAcabouTempo, ScaleMode.StretchToFill, true, 0);
		if (posFocoMenuAcabouTempo == 1) {	
			GUI.DrawTexture(Rect(263,263,364,56),btnDownReiniciarPuzzle, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,334,354,52),btnUpReiniciarFase, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,401,354,52),btnUpVoltarMenu, ScaleMode.StretchToFill, true, 0);	
		} else if (posFocoMenuAcabouTempo == 2) {		
			GUI.DrawTexture(Rect(267,266,354,52),btnUpReiniciarPuzzle, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(263,331,364,56),btnDownReiniciarFase, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,401,354,52),btnUpVoltarMenu, ScaleMode.StretchToFill, true, 0);								
		} else if (posFocoMenuAcabouTempo == 3) {		
			GUI.DrawTexture(Rect(267,266,354,52),btnUpReiniciarPuzzle, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,334,354,52),btnUpReiniciarFase, ScaleMode.StretchToFill, true, 0);	
			GUI.DrawTexture(Rect(263,398,364,56),btnDownVoltarMenu, ScaleMode.StretchToFill, true, 0);
		}
				
 	}   	
}

function PreparaInicioJogo() {
	SetaStatusJogo(0);
	PosicionaPecas();	
}

function SetaStatusJogo(s : int){
	statusJogo = s;
	var segundosRestantes = GetComponent(ContadorRegressivo).segundosRestantes;
	if (statusJogo == 1){
		GetComponent(ContadorRegressivo).IniciaContadorRegressivo();	
	} else if (statusJogo == 2) {
		GetComponent(ContadorRegressivo).ParaContadorRegressivo();		
	} else if (statusJogo == 3) {
		PararMusica();
		GameObject.Find("Fundo").GetComponent(ControlaSons).ExecutaAplausos();
	    var tempoUtilizado = GetComponent(ContadorRegressivo).tempoTotalFase - segundosRestantes; 
		pontos = segundosRestantes * 100;
		minutos = tempoUtilizado / 60;
		segundos = tempoUtilizado % 60;
	}	
}

function PosicionaPecas() {
	GameObject.Find("Peca01").transform.position = GameObject.Find("PosInicialPeca01").transform.position; 
    GameObject.Find("Peca02").transform.position = GameObject.Find("PosInicialPeca02").transform.position; 
	GameObject.Find("Peca03").transform.position = GameObject.Find("PosInicialPeca03").transform.position; 
	GameObject.Find("Peca04").transform.position = GameObject.Find("PosInicialPeca04").transform.position;		
	GameObject.Find("Peca05").transform.position = GameObject.Find("PosInicialPeca05").transform.position; 
	GameObject.Find("Peca06").transform.position = GameObject.Find("PosInicialPeca06").transform.position;	
	GameObject.Find("Peca07").transform.position = GameObject.Find("PosInicialPeca07").transform.position;	
}

public function AlteraFocoMenuPausa(sinal)
{
	if (sinal == "+") {
		if (posFocoMenuPausa < 4) {
			posFocoMenuPausa ++;
		} else {
			posFocoMenuPausa = 1;
		}
	} else if (sinal == "-") {
		if (posFocoMenuPausa > 1) {
			posFocoMenuPausa --;
		} else {
			posFocoMenuPausa = 4;
		}
	} 
}

public function AlteraFocoMenuAcabouTempo(sinal)
{
	if (sinal == "+") {
		if (posFocoMenuAcabouTempo < 3) {
			posFocoMenuAcabouTempo ++;
		} else {
			posFocoMenuAcabouTempo = 1;
		}
	} else if (sinal == "-") {
		if (posFocoMenuAcabouTempo > 1) {
			posFocoMenuAcabouTempo --;
		} else {
			posFocoMenuAcabouTempo = 3;
		}
	} 
}

public function ExecutaMenuPausa(foco)
{

	if (foco == 1) {
 		SetaStatusJogo(1);
 		TocarMusica();	 		
	} else if (foco == 2) {
 		Application.LoadLevel("Puzzle1");
	} else if (foco == 3) {
 		Application.LoadLevel("Fase1");
	} else if (foco == 4) {
 		Application.LoadLevel("Menu");
	}
	
}

public function ExecutaMenuAcabouTempo(foco)
{

    if (foco == 1) {
 		Application.LoadLevel("Puzzle1");
 	} else if (foco == 2) {
 		Application.LoadLevel("Fase1");
	} else if (foco == 3) {
 		Application.LoadLevel("Menu");
	}
	
}

public function PararMusica() {
	audio.Pause();
}

public function TocarMusica(){
	audio.Play();
}

