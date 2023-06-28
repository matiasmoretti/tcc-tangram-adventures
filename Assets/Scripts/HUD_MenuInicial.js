var faseAtual : String;
var logo : Texture;
var btnUpIniciarDemo : Texture;
var btnDownIniciarDemo : Texture;
var btnUpSobre : Texture;
var btnDownSobre : Texture;
var btnUpSair : Texture;
var btnDownSair : Texture;
var imgHelpMenus : Texture;
private var posFocoMenuInicial = 1;
var sfxSelecionar : AudioClip;
var sfxMudarOpcao : AudioClip;

function Update(){
    if (Input.GetKeyDown("down")){
		AlteraFocoMenuInicial("+");
		audio.PlayOneShot(sfxMudarOpcao);
    }
    if (Input.GetKeyDown("up")){
		AlteraFocoMenuInicial("-");
		audio.PlayOneShot(sfxMudarOpcao);
    }
    if (Input.GetKeyDown("space") || Input.GetKeyDown("return")){
		audio.PlayOneShot(sfxSelecionar);
		ExecutaMenuInicial(posFocoMenuInicial);
	}
}

function OnGUI () {
	Screen.showCursor = false;
	GUI.DrawTexture(Rect(121,50,778,190),logo, ScaleMode.StretchToFill, true, 0);
	if (posFocoMenuInicial == 1) {
		GUI.DrawTexture(Rect(106,348,350,70),btnDownIniciarDemo, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect(106,445,350,70),btnUpSobre, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect(106,541,350,70),btnUpSair, ScaleMode.StretchToFill, true, 0);
	}
	else if (posFocoMenuInicial == 2) {
		GUI.DrawTexture(Rect(106,348,350,70),btnUpIniciarDemo, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect(106,445,350,70),btnDownSobre, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect(106,541,350,70),btnUpSair, ScaleMode.StretchToFill, true, 0);
	}
	else if (posFocoMenuInicial == 3) {
		GUI.DrawTexture(Rect(106,348,350,70),btnUpIniciarDemo, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect(106,445,350,70),btnUpSobre, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect(106,541,350,70),btnDownSair, ScaleMode.StretchToFill, true, 0);
	}
	GUI.DrawTexture(Rect(84,713,855,35),imgHelpMenus, ScaleMode.StretchToFill, true, 0);
}

public function Restart()
{
	Application.PosFocoMenuInicial("Menu");
}

public function AlteraFocoMenuInicial(sinal)
{
	if (sinal == "+") {
		if (posFocoMenuInicial < 3) {
			posFocoMenuInicial ++;
		}
		else {
			posFocoMenuInicial = 1;
		}

	}
	else if (sinal == "-") {
		if (posFocoMenuInicial > 1) {
			posFocoMenuInicial --;
		}
		else {
			posFocoMenuInicial = 3;
		}
	} 

}

public function AbreCena(nomelevel)
{
	faseAtual = nomelevel;
 	Application.LoadLevel(nomelevel);

}

public function ExecutaMenuInicial(foco)
{
 	yield WaitForSeconds (sfxSelecionar.length);
	
	if (foco == 2) {
		AbreCena("Sobre");
	}
	if (foco == 1) {
		AbreCena("Abertura");
	}
	else if (foco == 3) {
		Application.Quit();
	}
}