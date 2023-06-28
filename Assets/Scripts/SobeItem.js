#pragma strict

private var count = 0;
var velocidade=1;
private var acionaSubirItem = false;
private var encontrado = false;
private var tempo = 0;
private var podeDestruir = false;


function Update () {
	if (!encontrado){
		if (acionaSubirItem) {
			if (count < 150){
			   transform.Translate(Time.deltaTime*Vector3(0,velocidade,0));
			   count ++;
			} else {
//			else if (count == 150) {
				encontrado = true;
				tempo = Time.time;
				podeDestruir = true;		
			}
		}
	}
	transform.Rotate(0,Time.deltaTime*50,0,Space.Self);	
	if ((Time.time - tempo > 10) && (podeDestruir)) {
		GameObject.Destroy(GameObject.Find(this.name));
	}
}

function SubirItem(posicao : String){
	transform.position = GameObject.Find(posicao).GetComponent("Transform").transform.position; 
	acionaSubirItem = true;
}
