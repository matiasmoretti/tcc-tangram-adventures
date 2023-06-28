#pragma strict

var sfxAcabouTempo : AudioClip;
var sfxCliquePeca : AudioClip;
var sfxRotacionaPeca : AudioClip;
var sfxPosiciona : AudioClip;
var sfxSoltarPeca : AudioClip;
var sfxMudarOpcao : AudioClip;
var sfxAplausos : AudioClip;


function ExecutaAcabouTempo(){
	audio.PlayOneShot(sfxAcabouTempo);
}

function ExecutaCliquePeca(){
	audio.PlayOneShot(sfxCliquePeca);
}

function ExecutaRotacionaPeca(){
	audio.PlayOneShot(sfxRotacionaPeca);
}

function ExecutaPosiciona(){
	audio.PlayOneShot(sfxPosiciona);
}

function ExecutaSoltarPeca(){
	audio.PlayOneShot(sfxSoltarPeca);
}

function ExecutaMudarOpcaoMenu(){
	audio.PlayOneShot(sfxMudarOpcao);
}

function ExecutaAplausos(){
	audio.PlayOneShot(sfxAplausos);
}