#pragma strict


var velocidade=1;
private var cavando = false;
private var count = 0;

function Start () {

}

function Update () {
	if (cavando){
		if (count < 100) {
			count ++;
			if (count < 50) {
		  	   transform.Translate(Time.deltaTime*Vector3(0,0,velocidade));
			}
			else {
		  	   transform.Translate(Time.deltaTime*Vector3(0,0,-velocidade));			
			}
		} else {
			transform.Translate(Time.deltaTime*Vector3(0,0,-200));
			cavando = false;
		}
	}
}

function Cavar (posicao : String) {
	transform.position = GameObject.Find(posicao).GetComponent("Transform").transform.position; 
	cavando = true;
	count = 1;
}