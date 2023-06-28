private var corAposEncaixe = Color.grey;
private var pecaEncaixada = false;
private var grausRotacionados = 0;
private var distanciaSnap = 0.15f;

function Start () 
{
//	originalColor = renderer.sharedMaterial.color;
}

function OnMouseEnter ()
{
//	renderer.material.color = mouseOverColor;
}

function OnMouseExit () 
{
//	renderer.material.color = originalColor;
}

function OnMouseOver()
{
	if (!pecaEncaixada) {
		if (Input.GetMouseButtonDown(1)){
			GameObject.Find("Fundo").GetComponent(ControlaSons).ExecutaRotacionaPeca();
			grausRotacionados += 45;
			transform.Rotate(Vector3(0,0,1),45);
			if (grausRotacionados == 360) {	
			    grausRotacionados = 0;
			}
		}
	}
}

function OnMouseDown ()
{
	if (!pecaEncaixada) {
		var screenSpace = Camera.main.WorldToScreenPoint(transform.position);
		var offset = transform.position - Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x, Input.mousePosition.y, screenSpace.z));
		
		GameObject.Find("Fundo").GetComponent("ControlaSons").ExecutaCliquePeca();
	
		while (Input.GetMouseButton(0))
		{
			var curScreenSpace = Vector3(Input.mousePosition.x,Input.mousePosition.y, screenSpace.z);
			var curPosition = Camera.main.ScreenToWorldPoint(curScreenSpace) + offset;
			transform.position = curPosition;
			yield;
		
		}
	}
}

function OnMouseUp (){
	var distancia : float;
	var encaixou = false;
 	// Peca04 - Quadrado
	if (name == "Peca04") {

		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta1Quadrado").transform.position);
	   	if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 45) || (grausRotacionados == 135) || (grausRotacionados == 225) || (grausRotacionados == 315)) {
				transform.position = GameObject.Find("PosCorreta1Quadrado").transform.position;
				encaixou = true;  
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos1Quadrado");
		    }
		}
	// Peca06 - Paralelogramo	
	} else if (name == "Peca06") {
	
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta1Paralelogramo").transform.position);
	   	if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 45) || (grausRotacionados == 225)) {
				transform.position = GameObject.Find("PosCorreta1Paralelogramo").transform.position;
				encaixou = true;
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos1Paralelogramo");
		    }
		}
	// Peca01 e Peca02 - Triangulos Grandes
	} else if ((name == "Peca01") || (name == "Peca02")) {
	
		// Verificacao em relacao a posicao 1
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta1TGrande").transform.position);
	   	if (distancia < distanciaSnap) {
		    if (grausRotacionados == 315) {
				transform.position = GameObject.Find("PosCorreta1TGrande").transform.position;
				encaixou = true;   
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos1TGrande");
		    }
		}
		// Verificacao em relacao a posicao 2
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta2TGrande").transform.position);
		if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 315) && 
		        (!ControlePuzzle.pos2TGrandeOcupada) && 
		        (!ControlePuzzle.pos3TGrandeOcupada) &&		        
		        (!ControlePuzzle.pos2TMedioOcupada) && 
		        (!ControlePuzzle.pos4TMedioOcupada) &&
		        (!ControlePuzzle.pos3TPequenoOcupada) &&  
		        (!ControlePuzzle.pos6TPequenocupada)) {
				transform.position = GameObject.Find("PosCorreta2TGrande").transform.position;
				encaixou = true;
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos2TGrande");   
		    }
		}
		// Verificacao em relacao a posicao 3
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta3TGrande").transform.position);
		if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 135) && 
		        (!ControlePuzzle.pos2TGrandeOcupada) && 
		        (!ControlePuzzle.pos3TGrandeOcupada) && 
		        (!ControlePuzzle.pos1TMedioOcupada) && 
		        (!ControlePuzzle.pos3TMedioOcupada) && 
		        (!ControlePuzzle.pos1TPequenoOcupada) && 
		        (!ControlePuzzle.pos4TPequenocupada)){
				transform.position = GameObject.Find("PosCorreta3TGrande").transform.position;
				encaixou = true;
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos3TGrande");
		    }
		}
				
	// Peca01 e Peca02 - Triangulo Médio
	} else if (name == "Peca07") { 
	
		// Verificacao em relacao a posicao 1
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta1TMedio").transform.position);
	   	if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 180) && 
		        (!ControlePuzzle.pos3TGrandeOcupada) &&
		        (!ControlePuzzle.pos1TMedioOcupada) &&
		        (!ControlePuzzle.pos2TMedioOcupada) &&
		        (!ControlePuzzle.pos1TPequenoOcupada) &&
		        (!ControlePuzzle.pos2TPequenoOcupada) &&
		        (!ControlePuzzle.pos3TPequenoOcupada) &&
		        (!ControlePuzzle.pos6TPequenoOcupada)) {
				transform.position = GameObject.Find("PosCorreta1TMedio").transform.position;
				encaixou = true;
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos1TMedio");  
		    }
		}
		// Verificacao em relacao a posicao 2
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta2TMedio").transform.position);
		if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 90) && 
		        (!ControlePuzzle.pos2TGrandeOcupada) &&
		        (!ControlePuzzle.pos1TMedioOcupada) &&
		        (!ControlePuzzle.pos2TMedioOcupada) &&
		        (!ControlePuzzle.pos1TPequenoOcupada) &&
		        (!ControlePuzzle.pos2TPequenoOcupada) &&
		        (!ControlePuzzle.pos3TPequenoOcupada) &&
		        (!ControlePuzzle.pos4TPequenoOcupada)) {
				transform.position = GameObject.Find("PosCorreta2TMedio").transform.position;
				encaixou = true;
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos2TMedio");   
		    }
		}
		// Verificacao em relacao a posicao 3
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta3TMedio").transform.position);
		if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 270) && 
		        (!ControlePuzzle.pos3TGrandeOcupada) &&
		        (!ControlePuzzle.pos4TMedioOcupada) &&
		        (!ControlePuzzle.pos3TMedioOcupada) &&
		        (!ControlePuzzle.pos3TPequenoOcupada) &&
		        (!ControlePuzzle.pos4TPequenoOcupada) &&
		        (!ControlePuzzle.pos5TPequenoOcupada) &&
		        (!ControlePuzzle.pos6TPequenoOcupada)) {
				transform.position = GameObject.Find("PosCorreta3TMedio").transform.position;
				encaixou = true;
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos3TMedio");  
		    }
		}
		// Verificacao em relacao a posicao 4
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta4TMedio").transform.position);
		if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 0) && 
		        (!ControlePuzzle.pos2TGrandeOcupada) &&
		        (!ControlePuzzle.pos3TMedioOcupada) &&
		        (!ControlePuzzle.pos4TMedioOcupada) &&
		        (!ControlePuzzle.pos1TPequenoOcupada) &&
		        (!ControlePuzzle.pos4TPequenoOcupada) &&
		        (!ControlePuzzle.pos5TPequenoOcupada) &&
		        (!ControlePuzzle.pos6TPequenoOcupada)) {
				transform.position = GameObject.Find("PosCorreta4TMedio").transform.position;
				encaixou = true; 
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos4TMedio"); 
		    }
		}
	// Peca03 e Peca05 - Triangulos pequenos
	} else if ((name == "Peca03") || (name == "Peca05")) {
		// Verificacao em relacao a posicao 1
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta1TPequeno").transform.position);
	   	if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 90) && 
		        (!ControlePuzzle.pos3TGrandeOcupada) && 
		        (!ControlePuzzle.pos1TMedioOcupada) && 
		        (!ControlePuzzle.pos2TMedioOcupada) && 		       
		        (!ControlePuzzle.pos4TMedioOcupada) &&
		        (!ControlePuzzle.pos1TPequenoOcupada) &&
		        (!ControlePuzzle.pos3TPequenoOcupada) &&
		        (!ControlePuzzle.pos4TPequenoOcupada) &&
		        (!ControlePuzzle.pos5TPequenoOcupada) &&
		        (!ControlePuzzle.pos6TPequenoOcupada)) {
				transform.position = GameObject.Find("PosCorreta1TPequeno").transform.position;
				encaixou = true;  
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos1TPequeno"); 
		    }
		}
		// Verificacao em relacao a posicao 2
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta2TPequeno").transform.position);
		if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 0) &&    
		        (!ControlePuzzle.pos1TMedioOcupada) && 
		        (!ControlePuzzle.pos2TMedioOcupada) && 
		        (!ControlePuzzle.pos2TPequenoOcupada) &&
		        (!ControlePuzzle.pos4TPequenoOcupada) &&
		        (!ControlePuzzle.pos5TPequenoOcupada) &&
		        (!ControlePuzzle.pos6TPequenoOcupada)){
				transform.position = GameObject.Find("PosCorreta2TPequeno").transform.position;
				encaixou = true;
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos2TPequeno");   
		    }
		}	
		// Verificacao em relacao a posicao 3
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta3TPequeno").transform.position);
		if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 270) && 
		        (!ControlePuzzle.pos2TGrandeOcupada) && 
		        (!ControlePuzzle.pos1TMedioOcupada) && 
		        (!ControlePuzzle.pos2TMedioOcupada) &&
		        (!ControlePuzzle.pos3TMedioOcupada) &&
		        (!ControlePuzzle.pos1TPequenoOcupada) &&
		        (!ControlePuzzle.pos3TPequenoOcupada) &&
		        (!ControlePuzzle.pos4TPequenoOcupada) &&
		        (!ControlePuzzle.pos5TPequenoOcupada) &&
		        (!ControlePuzzle.pos6TPequenoOcupada)) {
				transform.position = GameObject.Find("PosCorreta3TPequeno").transform.position;
				encaixou = true;  
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos3TPequeno"); 
		    }
		}
		// Verificacao em relacao a posicao 4
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta4TPequeno").transform.position);
		if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 90) &&
		        (!ControlePuzzle.pos3TGrandeOcupada) && 
 		        (!ControlePuzzle.pos2TMedioOcupada) && 
		        (!ControlePuzzle.pos3TMedioOcupada) && 
		        (!ControlePuzzle.pos4TMedioOcupada) &&
		        (!ControlePuzzle.pos1TPequenoOcupada) &&
		        (!ControlePuzzle.pos2TPequenoOcupada) &&
		        (!ControlePuzzle.pos3TPequenoOcupada) &&
		        (!ControlePuzzle.pos4TPequenoOcupada) &&
		        (!ControlePuzzle.pos6TPequenoOcupada)) {
				transform.position = GameObject.Find("PosCorreta4TPequeno").transform.position;
				encaixou = true;
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos4TPequeno"); 
		    }
		} 
		// Verificacao em relacao a posicao 5
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta5TPequeno").transform.position);
		if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 180) &&    
		        (!ControlePuzzle.pos3TMedioOcupada) && 
		        (!ControlePuzzle.pos4TMedioOcupada) &&
		        (!ControlePuzzle.pos1TPequenoOcupada) &&
		        (!ControlePuzzle.pos2TPequenoOcupada) &&
		        (!ControlePuzzle.pos3TPequenoOcupada) &&
		        (!ControlePuzzle.pos5TPequenoOcupada)) {
				transform.position = GameObject.Find("PosCorreta5TPequeno").transform.position;
				encaixou = true; 	 
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos5TPequeno"); 
		    }
		}
		// Verificacao em relacao a posicao 6
		distancia = Vector3.Distance(transform.position, GameObject.Find("PosCorreta6TPequeno").transform.position);
		if (distancia < distanciaSnap) {
		    if ((grausRotacionados == 270) &&
		        (!ControlePuzzle.pos2TGrandeOcupada) && 
		        (!ControlePuzzle.pos1TMedioOcupada) && 
		        (!ControlePuzzle.pos3TMedioOcupada) && 
		        (!ControlePuzzle.pos4TMedioOcupada) &&
		        (!ControlePuzzle.pos1TPequenoOcupada) &&
		        (!ControlePuzzle.pos2TPequenoOcupada) &&
		        (!ControlePuzzle.pos3TPequenoOcupada) &&
		        (!ControlePuzzle.pos4TPequenoOcupada) &&
		        (!ControlePuzzle.pos6TPequenoOcupada)) {
				transform.position = GameObject.Find("PosCorreta6TPequeno").transform.position;
				encaixou = true; 	
				GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PosicaoOcupada("pos6TPequeno"); 
		    }
		}					
	}
	
	if (encaixou) {
		pecaEncaixada = true;
		renderer.material.color = corAposEncaixe;
		GameObject.Find("Main Camera").GetComponent("ControlePuzzle").PecaEncaixada(name);	
		GameObject.Find("Fundo").GetComponent(ControlaSons).ExecutaPosiciona();	
	} else {
		GameObject.Find("Fundo").GetComponent(ControlaSons).ExecutaSoltarPeca();
	}			
	
//	Debug.Log(distancia);	
}

function Update () {
}

