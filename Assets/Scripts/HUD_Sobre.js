var Fundo : Texture;
var sfxVoltar : AudioClip;

function Update(){
	if (Input.GetKeyDown("space") || Input.GetKeyDown("return")) {
		audio.PlayOneShot(sfxVoltar);
		Application.LoadLevel("Menu");
    }
}

function OnGUI () {
	Screen.showCursor = false;
 	GUI.DrawTexture(Rect(0,0,1024,768),Fundo, ScaleMode.StretchToFill, true, 0);    	
}