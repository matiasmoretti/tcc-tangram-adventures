#pragma strict
/*
Status de Jogo
0 = Iniciando
1 = Jogando
2 = Pausado
3 = FimFase
4 = FimJogo
*/

public static var statusJogo : int;
private var encontrouPeca1 = false;
private var encontrouPeca2 = false;
private var encontrouPeca3 = false;
private var encontrouPeca4 = false;
private var encontrouPeca5 = false;
private var encontrouPeca6 = false;
private var encontrouPeca7 = false;
private var qtdOssosEncontrados = 0;
private var qtdRelogiosEncontrados = 0;
private var emAreaAcao = false;
private var tipoAreaAcao ="";
static var jaEncontrou7Pecas = false;
private var tempoMostrarParabens = 1500;
private var tempoMostrandoParabens = 0;
var imgBarraPecas : Texture;
var imgPeca1 : Texture;
var imgPeca2 : Texture;
var imgPeca3 : Texture;
var imgPeca4 : Texture;
var imgPeca5 : Texture;
var imgPeca6 : Texture;
var imgPeca7 : Texture;
var imgHelpInicial : Texture;
var imgBarraEspaco : Texture;
var imgHelpIniciarPuzzle : Texture;
var imgHelpEncontrePedacos : Texture;
var imgHelpParabens : Texture;
var sfxMudarOpcao : AudioClip;

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


function Start() {
	PreparaInicioJogo();
}

function Update () {

	Encontrou7Pecas();
   	
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
    
    // Cheat para pegar as pecas só apertando o botao de 1 a 7
    if (Input.GetKeyDown("1")) {
		EncontrouPeca(1);
    } else if (Input.GetKeyDown("2")) {
		EncontrouPeca(2);
    } else if (Input.GetKeyDown("3")) {
		EncontrouPeca(3);
    } else if (Input.GetKeyDown("4")) {
		EncontrouPeca(4);
    } else if (Input.GetKeyDown("5")) {
		EncontrouPeca(5);
    } else if (Input.GetKeyDown("6")) {
		EncontrouPeca(6);
    } else if (Input.GetKeyDown("7")) {
		EncontrouPeca(7);
    } else if (Input.GetKeyDown("f")) {
		GetComponent(ContadorRegressivo).SetaSegundos(3);
    } 
       
    
    if (statusJogo == 0) { 
    
    	if ((Input.GetKeyDown("space")) || (Input.GetKeyDown("return"))) {
			SetaStatusJogo(1);
			GetComponent(ContadorRegressivo).IniciaContadorRegressivo();
										
		}
		
    } else if (statusJogo == 2) {
    
	    if (Input.GetKeyDown("down")){
			AlteraFocoMenuPausa("+");
			GameObject.FindWithTag("Player").GetComponent(ControlaSons).ExecutaMudarOpcaoMenu();			
//			audio.PlayOneShot(sfxMudarOpcao);
	    }
	    if (Input.GetKeyDown("up")){
			AlteraFocoMenuPausa("-");
			GameObject.FindWithTag("Player").GetComponent(ControlaSons).ExecutaMudarOpcaoMenu();			
//			audio.PlayOneShot(sfxMudarOpcao);
	    }
	    if ((Input.GetKeyDown("space")) || (Input.GetKeyDown("return"))) {
 			TocarMusica();	    
			ExecutaMenuPausa(posFocoMenuPausa);
		}
		
    } else if (statusJogo == 4) {
    
	    if (Input.GetKeyDown("down")){
			AlteraFocoMenuAcabouTempo("+");
			GameObject.FindWithTag("Player").GetComponent(ControlaSons).ExecutaMudarOpcaoMenu();			
//			audio.PlayOneShot(sfxMudarOpcao);
	    }
	    if (Input.GetKeyDown("up")){
			AlteraFocoMenuAcabouTempo("-");
			GameObject.FindWithTag("Player").GetComponent(ControlaSons).ExecutaMudarOpcaoMenu();			
//			audio.PlayOneShot(sfxMudarOpcao);
	    }
	    if ((Input.GetKeyDown("space")) || (Input.GetKeyDown("return"))){
			ExecutaMenuAcabouTempo(posFocoMenuAcabouTempo);
		}
    }
}

function OnGUI () {

	Screen.showCursor = false;
	
	if (statusJogo == 0) {
	
	  	GUI.DrawTexture(Rect(0,0,1024,768),imgHelpInicial, ScaleMode.StretchToFill, true, 0);
	  	
	} else if (statusJogo == 1) {
    
	  	GUI.DrawTexture(Rect(924,10,89,547),imgBarraPecas, ScaleMode.StretchToFill, true, 0);  	
	  	if (encontrouPeca1) {
	  		GUI.DrawTexture(Rect(936,20,67,68),imgPeca1, ScaleMode.StretchToFill, true, 0);
	  	}
	  	if (encontrouPeca2) {
	  		GUI.DrawTexture(Rect(935,97,67,68),imgPeca2, ScaleMode.StretchToFill, true, 0);
	  	}
	  	if (encontrouPeca3) {
	  		GUI.DrawTexture(Rect(935,173,68,68),imgPeca3, ScaleMode.StretchToFill, true, 0);
	  	}    	
	  	if (encontrouPeca4) {
	  		GUI.DrawTexture(Rect(934,249,68,68),imgPeca4, ScaleMode.StretchToFill, true, 0);
	  	}    	
	  	if (encontrouPeca5) {
	  		GUI.DrawTexture(Rect(935,326,67,68),imgPeca5, ScaleMode.StretchToFill, true, 0);
	  	}    	
	  	if (encontrouPeca6) {
	  		GUI.DrawTexture(Rect(935,402,68,68),imgPeca6, ScaleMode.StretchToFill, true, 0);
	  	}    	
	  	if (encontrouPeca7) {
	  		GUI.DrawTexture(Rect(935,478,68,68),imgPeca7, ScaleMode.StretchToFill, true, 0);
	  	} 
	  	if (emAreaAcao) { 
	  		if ((tipoAreaAcao == "Peca") ||  (tipoAreaAcao == "Vzio")) {
	  			GUI.DrawTexture(Rect(20,629,583,141),imgBarraEspaco, ScaleMode.StretchToFill, true, 0);
	  		} else if (tipoAreaAcao == "Pzzl") {
	  			if (jaEncontrou7Pecas){
	  				GUI.DrawTexture(Rect(20,629,930,141),imgHelpIniciarPuzzle, ScaleMode.StretchToFill, true, 0);
	  			} else {
	  				GUI.DrawTexture(Rect(120,629,884,141),imgHelpEncontrePedacos, ScaleMode.StretchToFill, true, 0);
	  			}
	  		}
	 	} else {
	 		if ((jaEncontrou7Pecas) && (tempoMostrandoParabens <= tempoMostrarParabens)){ 
	 			GUI.DrawTexture(Rect(171,629,833,142),imgHelpParabens, ScaleMode.StretchToFill, true, 0);
	 			tempoMostrandoParabens++;
	 		}
	 	}
	 		 	 	
 	} else if (statusJogo == 2) { 
 		
	  	GUI.DrawTexture(Rect(0,0,1024,768),imgFundoPause, ScaleMode.StretchToFill, true, 0);
		if (posFocoMenuPausa == 1) {		
			GUI.DrawTexture(Rect(263,263,364,56),btnDownContinuar, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,334,354,52),btnUpReiniciarFase, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,401,354,52),btnUpVoltarMenu, ScaleMode.StretchToFill, true, 0);						
		} else if (posFocoMenuPausa == 2) {		
			GUI.DrawTexture(Rect(267,266,354,52),btnUpContinuar, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(263,331,364,56),btnDownReiniciarFase, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,401,354,52),btnUpVoltarMenu, ScaleMode.StretchToFill, true, 0);			
		} else if (posFocoMenuPausa == 3) {		
			GUI.DrawTexture(Rect(267,266,354,52),btnUpContinuar, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,334,354,52),btnUpReiniciarFase, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(263,398,364,56),btnDownVoltarMenu, ScaleMode.StretchToFill, true, 0);			
		}
		
 	} else if (statusJogo == 4) { 
 	
	  	GUI.DrawTexture(Rect(0,0,1024,768),imgFundoAcabouTempo, ScaleMode.StretchToFill, true, 0);
		if (posFocoMenuAcabouTempo == 1) {		
			GUI.DrawTexture(Rect(263,301,364,56),btnDownReiniciarFase, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(267,371,354,52),btnUpVoltarMenu, ScaleMode.StretchToFill, true, 0);			
		} else if (posFocoMenuAcabouTempo == 2) {		
			GUI.DrawTexture(Rect(267,304,354,52),btnUpReiniciarFase, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect(263,368,364,56),btnDownVoltarMenu, ScaleMode.StretchToFill, true, 0);			
		}
				
 	}   	
}

function PreparaInicioJogo() {
	SetaStatusJogo(0);
	encontrouPeca1 = false;
	encontrouPeca2 = false;
	encontrouPeca3 = false;
	encontrouPeca4 = false;
	encontrouPeca5 = false;
	encontrouPeca6 = false;
	encontrouPeca7 = false;
	qtdOssosEncontrados = 0;
	qtdRelogiosEncontrados = 0;
	emAreaAcao = false;
	PosicionaSensores();	
}

public function SetaStatusJogo(s : int){
	statusJogo = s;
	if (statusJogo == 1){
		GetComponent(ContadorRegressivo).IniciaContadorRegressivo();	
	} else if (statusJogo == 2) {
		GetComponent(ContadorRegressivo).ParaContadorRegressivo();		
	}				
}

function EncontrouPeca(n : int){
	switch (n) {
	    case 1:
	        encontrouPeca1 = true;
	        break;
	    case 2:
	        encontrouPeca2 = true;
	        break;
	    case 3:
	        encontrouPeca3 = true;
	        break;
	    case 4:
	        encontrouPeca4 = true;
	        break;
	    case 5:
	        encontrouPeca5 = true;
	        break;
	    case 6:
	        encontrouPeca6 = true;
	        break;
	     case 7:
	        encontrouPeca7 = true;
	        break;
	 }
}

function EmAcao(s : boolean) {
	emAreaAcao = s;	
}

function AreaAcao(s : String) {
	tipoAreaAcao = s;	
}

function Encontrou7Pecas(){
	if (encontrouPeca7 && encontrouPeca6 && encontrouPeca5 && encontrouPeca4 && encontrouPeca3 && encontrouPeca2 && encontrouPeca1) {
		jaEncontrou7Pecas = true;
	} else {
		jaEncontrou7Pecas = false;
	}
}

function PosicionaSensores() {

	var posJaPreenchidas = new Array();
	var posicaoSorteada : int;
	var valorPosicao : int;
	var contadorSensorVzo : int;
	var i : int;
	
	posJaPreenchidas.length = 16;
	
	for (i = 1;i<=16;i++) {
		posJaPreenchidas[i] = 0;
	}
	
	for (i = 1;i<=7;i++) {
		posicaoSorteada = Random.Range(1,16);
		valorPosicao = posJaPreenchidas[posicaoSorteada];
		while (valorPosicao > 0) {
			posicaoSorteada = Random.Range(1,16);
			valorPosicao = posJaPreenchidas[posicaoSorteada];			
		}
		posJaPreenchidas[posicaoSorteada] = i;
	}
	Debug.Log(posJaPreenchidas);
	 
	contadorSensorVzo = 1;
	 
	// Posiciona a Primeira Peca
	for (i = 1;i<=16;i++) {
		valorPosicao = posJaPreenchidas[i];
		if (valorPosicao > 0) {
			GameObject.Find("SensorPeca0"+valorPosicao).transform.position = GameObject.Find("PosicaoArea"+i).transform.position; 
		} else {
			GameObject.Find("SensorVzio0"+contadorSensorVzo).transform.position = GameObject.Find("PosicaoArea"+i).transform.position;
			contadorSensorVzo++;			
		}
	}	
/*	GameObject.Find("SensorPeca01").transform.position = GameObject.Find("PosicaoArea1").transform.position; 
	GameObject.Find("SensorPeca02").transform.position = GameObject.Find("PosicaoArea2").transform.position;  
	GameObject.Find("SensorPeca03").transform.position = GameObject.Find("PosicaoArea3").transform.position; 
	GameObject.Find("SensorPeca04").transform.position = GameObject.Find("PosicaoArea4").transform.position; 
	GameObject.Find("SensorPeca05").transform.position = GameObject.Find("PosicaoArea5").transform.position; 
	GameObject.Find("SensorPeca06").transform.position = GameObject.Find("PosicaoArea6").transform.position; 
	GameObject.Find("SensorPeca07").transform.position = GameObject.Find("PosicaoArea7").transform.position; 
	GameObject.Find("SensorVzio01").transform.position = GameObject.Find("PosicaoArea8").transform.position; 
	GameObject.Find("SensorVzio02").transform.position = GameObject.Find("PosicaoArea9").transform.position; 
	GameObject.Find("SensorVzio03").transform.position = GameObject.Find("PosicaoArea10").transform.position; 
	GameObject.Find("SensorVzio04").transform.position = GameObject.Find("PosicaoArea11").transform.position; 
	GameObject.Find("SensorVzio05").transform.position = GameObject.Find("PosicaoArea12").transform.position; 
	GameObject.Find("SensorVzio06").transform.position = GameObject.Find("PosicaoArea13").transform.position; 
	GameObject.Find("SensorVzio07").transform.position = GameObject.Find("PosicaoArea14").transform.position; 
	GameObject.Find("SensorVzio08").transform.position = GameObject.Find("PosicaoArea15").transform.position; 
	GameObject.Find("SensorVzio09").transform.position = GameObject.Find("PosicaoArea16").transform.position;*/
	GameObject.Find("SensorPzzl01").transform.position = GameObject.Find("PosicaoAreaPuzzle").transform.position;  

}

public function AlteraFocoMenuPausa(sinal)
{
	if (sinal == "+") {
		if (posFocoMenuPausa < 3) {
			posFocoMenuPausa ++;
		} else {
			posFocoMenuPausa = 1;
		}
	} else if (sinal == "-") {
		if (posFocoMenuPausa > 1) {
			posFocoMenuPausa --;
		} else {
			posFocoMenuPausa = 3;
		}
	} 
}

public function AlteraFocoMenuAcabouTempo(sinal)
{
	if (sinal == "+") {
		if (posFocoMenuAcabouTempo < 2) {
			posFocoMenuAcabouTempo ++;
		} else {
			posFocoMenuAcabouTempo = 1;
		}
	} else if (sinal == "-") {
		if (posFocoMenuAcabouTempo > 1) {
			posFocoMenuAcabouTempo --;
		} else {
			posFocoMenuAcabouTempo = 2;
		}
	} 
}

public function ExecutaMenuPausa(foco)
{

	if (foco == 1) {
 		SetaStatusJogo(1);
	} else if (foco == 2) {
 		Application.LoadLevel("Fase1");
	} else if (foco == 3) {
 		Application.LoadLevel("Menu");
	}
	
}

public function ExecutaMenuAcabouTempo(foco)
{

    if (foco == 1) {
 		Application.LoadLevel("Fase1");
	} else if (foco == 2) {
 		Application.LoadLevel("Menu");
	}
	
}

public function PararMusica() {
	audio.Pause();
}

public function TocarMusica(){
	audio.Play();
}
