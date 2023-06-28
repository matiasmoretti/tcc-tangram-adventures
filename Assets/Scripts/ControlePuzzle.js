#pragma strict

// Posicoes de pecas
static var pos1QuadradoOcupada = false;
static var pos1ParalelogramoOcupada = false;
static var pos1TGrandeOcupada = false;
static var pos2TGrandeOcupada = false;
static var pos3TGrandeOcupada = false;
static var pos1TMedioOcupada = false;
static var pos2TMedioOcupada = false;
static var pos3TMedioOcupada = false;
static var pos4TMedioOcupada = false;
static var pos1TPequenoOcupada = false;
static var pos2TPequenoOcupada = false;
static var pos3TPequenoOcupada = false;
static var pos4TPequenoOcupada = false;
static var pos5TPequenoOcupada = false;
static var pos6TPequenoOcupada = false;

private var pPos1QuadradoOcupada = false;
private var pPos1ParalelogramoOcupada = false;
private var pPos1TGrandeOcupada = false;
private var pPos2TGrandeOcupada = false;
private var pPos3TGrandeOcupada = false;
private var pPos1TMedioOcupada = false;
private var pPos2TMedioOcupada = false;
private var pPos3TMedioOcupada = false;
private var pPos4TMedioOcupada = false;
private var pPos1TPequenoOcupada = false;
private var pPos2TPequenoOcupada = false;
private var pPos3TPequenoOcupada = false;
private var pPos4TPequenoOcupada = false;
private var pPos5TPequenoOcupada = false;
private var pPos6TPequenoOcupada = false;

// Pecas encaixadas
private var peca01Encaixada = false;
private var peca02Encaixada = false;
private var peca03Encaixada = false;
private var peca04Encaixada = false;
private var peca05Encaixada = false;
private var peca06Encaixada = false;
private var peca07Encaixada = false;


function Start () {
	IniciaPuzzle();
}

function IniciaPuzzle(){
	pos1QuadradoOcupada = false;
	pos1ParalelogramoOcupada = false;
	pos1TGrandeOcupada = false;
	pos2TGrandeOcupada = false;
	pos3TGrandeOcupada = false;
	pos1TMedioOcupada = false;
	pos2TMedioOcupada = false;
	pos3TMedioOcupada = false;
	pos4TMedioOcupada = false;
	pos1TPequenoOcupada = false;
	pos2TPequenoOcupada = false;
	pos3TPequenoOcupada = false;
	pos4TPequenoOcupada = false;
	pos5TPequenoOcupada = false;
	pos6TPequenoOcupada = false;
	pPos1QuadradoOcupada = false;
	pPos1ParalelogramoOcupada = false;
	pPos1TGrandeOcupada = false;
	pPos2TGrandeOcupada = false;
	pPos3TGrandeOcupada = false;
	pPos1TMedioOcupada = false;
	pPos2TMedioOcupada = false;
	pPos3TMedioOcupada = false;
	pPos4TMedioOcupada = false;
	pPos1TPequenoOcupada = false;
	pPos2TPequenoOcupada = false;
	pPos3TPequenoOcupada = false;
	pPos4TPequenoOcupada = false;
	pPos5TPequenoOcupada = false;
	pPos6TPequenoOcupada = false;
	peca01Encaixada = false;
	peca02Encaixada = false;
	peca03Encaixada = false;
	peca04Encaixada = false;
	peca05Encaixada = false;
	peca06Encaixada = false;
	peca07Encaixada = false;
}

function Update () {

pPos1QuadradoOcupada = pos1QuadradoOcupada;
pPos1ParalelogramoOcupada = pos1ParalelogramoOcupada;
pPos1TGrandeOcupada = pos1TGrandeOcupada;
pPos2TGrandeOcupada = pos2TGrandeOcupada;
pPos3TGrandeOcupada = pos3TGrandeOcupada;
pPos1TMedioOcupada = pos1TMedioOcupada;
pPos2TMedioOcupada = pos2TMedioOcupada;
pPos3TMedioOcupada = pos3TMedioOcupada;
pPos4TMedioOcupada = pos4TMedioOcupada;
pPos1TPequenoOcupada = pos1TPequenoOcupada;
pPos2TPequenoOcupada = pos2TPequenoOcupada;
pPos3TPequenoOcupada = pos3TPequenoOcupada;
pPos4TPequenoOcupada = pos4TPequenoOcupada;
pPos5TPequenoOcupada = pos5TPequenoOcupada;
pPos6TPequenoOcupada = pos6TPequenoOcupada;



	if ((peca01Encaixada) &&
		(peca02Encaixada) &&
		(peca03Encaixada) &&
		(peca04Encaixada) &&
		(peca05Encaixada) &&
		(peca06Encaixada) &&
		(peca07Encaixada) &&
		(GetComponent(HUD_Puzzle1).statusJogo != 3)){
		
		GetComponent(ContadorRegressivo).ParaContadorRegressivo();
		GetComponent(HUD_Puzzle1).SetaStatusJogo(3);
	}
	
}

function PosicaoOcupada(pos : String){
	if ( pos == "pos1Quadrado") {
		pos1QuadradoOcupada = true;
	} else if ( pos == "pos1Paralelogramo") {
		pos1ParalelogramoOcupada = true;
	} else if ( pos == "pos1TGrande") {
		pos1TGrandeOcupada = true;
	} else if ( pos == "pos2TGrande") {
		pos2TGrandeOcupada = true;
	} else if ( pos == "pos3TGrande") {
		pos3TGrandeOcupada = true;
	} else if ( pos == "pos1TMedio") {
		pos1TMedioOcupada = true;
	} else if ( pos == "pos2TMedio") {
		pos2TMedioOcupada = true;
	} else if ( pos == "pos3TMedio") {
		pos3TMedioOcupada = true;
	} else if ( pos == "pos4TMedio") {
		pos4TMedioOcupada = true;
	} else if ( pos == "pos1TPequeno") {
		pos1TPequenoOcupada = true;
	} else if ( pos == "pos2TPequeno") {
		pos2TPequenoOcupada = true;
	} else if ( pos == "pos3TPequeno") {
		pos3TPequenoOcupada = true;
	} else if ( pos == "pos4TPequeno") {
		pos4TPequenoOcupada = true;
	} else if ( pos == "pos5TPequeno") {
		pos5TPequenoOcupada = true;
	} else if ( pos == "pos6TPequeno") {
		pos6TPequenoOcupada = true;
	}	
}

function PecaEncaixada(name : String){
	if ( name == "Peca01") {
		peca01Encaixada = true;
	} else if ( name == "Peca02") {
		peca02Encaixada = true;
	} else if ( name == "Peca03") {
		peca03Encaixada = true;
	} else if ( name == "Peca04") {
		peca04Encaixada = true;
	} else if ( name == "Peca05") {
		peca05Encaixada = true;
	} else if ( name == "Peca06") {
		peca06Encaixada = true;
	} else if ( name == "Peca07") {
		peca07Encaixada = true;
	}	
}

