private var colisionInfo:String = "Collision info";
var sfxPeca : AudioClip;
var sfxOsso : AudioClip;
var sfxRelogio : AudioClip;
var sfxVazio : AudioClip;

function Update () {
}

function OnTriggerEnter(col : Collider){
	if (col.gameObject.name.Substring(0,6) == "Sensor") {
		GameObject.Find("Main Camera").GetComponent("HUD_Fase1").EmAcao(true);
		GameObject.Find("Main Camera").GetComponent("HUD_Fase1").AreaAcao(col.gameObject.name.Substring(6,4));
	}
}
 
function OnTriggerExit(col : Collider){
    colisionInfo = "Collision Exit (Trigger) : ";
	GameObject.Find("Main Camera").GetComponent("HUD_Fase1").EmAcao(false);
}
 
function OnTriggerStay(col : Collider){
    colisionInfo = col.gameObject.name.Substring(10,2) + "Collision Stay (Trigger) : aperte o espaco ";
	if (Input.GetKeyDown("space")) {
		if (col.gameObject.name.Substring(0,6) == "Sensor") {
		    if (col.gameObject.name.Substring(6,4) == "Peca") {
	 			GameObject.Find("psCavando").GetComponent("Cavando").Cavar(col.gameObject.name);
				GameObject.Find(col.gameObject.name.Substring(6,6)).GetComponent("SobeItem").SubirItem(col.gameObject.name);
				GameObject.Destroy(GameObject.Find(col.gameObject.name));
				GameObject.Find("Main Camera").GetComponent("HUD_Fase1").EncontrouPeca(parseInt(col.gameObject.name.Substring(10,2)));
				GameObject.Find("Main Camera").GetComponent("HUD_Fase1").EmAcao(false);	
			} else if (col.gameObject.name.Substring(6,4) == "Pzzl") {
				if (GameObject.Find("Main Camera").GetComponent(HUD_Fase1).jaEncontrou7Pecas){
					GameObject.Find("Main Camera").GetComponent("HUD_Fase1").EmAcao(false);
					GameObject.Destroy(GameObject.Find(col.gameObject.name));	
					GameObject.Find("Main Camera").GetComponent(ContadorRegressivo).SetaTempoRestantePassagem();	
					Application.LoadLevel("Puzzle1");	
				} else {
	   				audio.PlayOneShot(sfxVazio);
				}
			
			} else if (col.gameObject.name.Substring(6,4) == "Vzio") {
				GameObject.Destroy(GameObject.Find(col.gameObject.name));
				GameObject.Find("Main Camera").GetComponent("HUD_Fase1").EmAcao(false);	
			}

 		}
 		
 		if (col.gameObject.name.Substring(6,4) == "Peca") {
			audio.PlayOneShot(sfxPeca);
 		} else if (col.gameObject.name.Substring(6,4) == "Osso") {
 			audio.PlayOneShot(sfxOsso);
 		} else if (col.gameObject.name.Substring(6,4) == "Relo") {
  			audio.PlayOneShot(sfxRelogio);
 		} else if (col.gameObject.name.Substring(6,4) == "Vzio") {
  			audio.PlayOneShot(sfxVazio);
 		}
    }
}
 
function OnGUI(){
//    GUI.Label(Rect(200,75,300,100),colisionInfo);
}