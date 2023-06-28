#pragma strict

var dificuldade =0.5f;

function OnMouseDown ()
{
// Ordem de pecas mais dificeis
// TrianguloM
// TrianguloP1
// TrianguloP2
// Losango
// TrianguloG1
// TrianguloG2

   if (Vector3.Distance(GameObject.Find("TrianguloM").transform.position, GameObject.Find("PosTrianguloM").transform.position) > dificuldade) {
		GameObject.Find("TrianguloM").transform.position = GameObject.Find("PosTrianguloM").transform.position;
   	 // Debug.Log(distance);
   }
   else if (Vector3.Distance(GameObject.Find("TrianguloP1").transform.position, GameObject.Find("PosTrianguloP1").transform.position) > dificuldade) {
		GameObject.Find("TrianguloP1").transform.position = GameObject.Find("PosTrianguloP1").transform.position;
   	 // Debug.Log(
   }
   else if (Vector3.Distance(GameObject.Find("TrianguloP2").transform.position, GameObject.Find("PosTrianguloP2").transform.position) > dificuldade) {
		GameObject.Find("TrianguloP2").transform.position = GameObject.Find("PosTrianguloP2").transform.position;
   	 // Debug.Log(distance);
   }
   else if (Vector3.Distance(GameObject.Find("TrianguloG1").transform.position, GameObject.Find("PosTrianguloG1").transform.position) > dificuldade) {
		GameObject.Find("TrianguloG1").transform.position = GameObject.Find("PosTrianguloG1").transform.position;
   	 // Debug.Log(distance);
   }
   else if (Vector3.Distance(GameObject.Find("TrianguloG2").transform.position, GameObject.Find("PosTrianguloG2").transform.position) > dificuldade) {
		GameObject.Find("TrianguloG2").transform.position = GameObject.Find("PosTrianguloG2").transform.position;
   	 // Debug.Log(distance);
   }   
   else if (Vector3.Distance(GameObject.Find("Losango").transform.position, GameObject.Find("PosLosango").transform.position) > dificuldade) {
		GameObject.Find("Losango").transform.position = GameObject.Find("PosLosango").transform.position;
   	 // Debug.Log(distance);
   } 
   else if (Vector3.Distance(GameObject.Find("Paralelogramo").transform.position, GameObject.Find("PosParalelogramo").transform.position) > dificuldade) {
		GameObject.Find("Paralelogramo").transform.position = GameObject.Find("PosParalelogramo").transform.position;
   	 // Debug.Log(distance);
   } 

}

function Update () {

//    var distance = Vector3.Distance(GameObject.Find("Losango").transform.position, GameObject.Find("PosLosango").transform.position);
//   if (distance < dificuldade) {
//		GameObject.Find("Losango").transform.position = GameObject.Find("PosLosango").transform.position;
//   	  Debug.Log(distance);
//   }
//   
//   distance = Vector3.Distance(GameObject.Find("Paralelogramo").transform.position, GameObject.Find("PosParalelogramo").transform.position);
//   if (distance < dificuldade) {
//		GameObject.Find("Paralelogramo").transform.position = GameObject.Find("PosParalelogramo").transform.position;
//   	  Debug.Log(distance);
//   }
//   
//   distance = Vector3.Distance(GameObject.Find("TrianguloP1").transform.position, GameObject.Find("PosTrianguloP1").transform.position);
//   if (distance < dificuldade) {
//		GameObject.Find("TrianguloP1").transform.position = GameObject.Find("PosTrianguloP1").transform.position;
//   	  Debug.Log(distance);
//   }
//   
//   distance = Vector3.Distance(GameObject.Find("TrianguloP2").transform.position, GameObject.Find("PosTrianguloP2").transform.position);
//   if (distance < dificuldade) {
//		GameObject.Find("TrianguloP2").transform.position = GameObject.Find("PosTrianguloP2").transform.position;
//   	  Debug.Log(distance);
//   }
//   
//
//   
//   distance = Vector3.Distance(GameObject.Find("TrianguloG1").transform.position, GameObject.Find("PosTrianguloG1").transform.position);
//   if (distance < dificuldade) {
//		GameObject.Find("TrianguloG1").transform.position = GameObject.Find("PosTrianguloG1").transform.position;
//   	  Debug.Log(distance);
//   }
//   
//   distance = Vector3.Distance(GameObject.Find("TrianguloG2").transform.position, GameObject.Find("PosTrianguloG2").transform.position);
//   if (distance < dificuldade) {
//		GameObject.Find("TrianguloG2").transform.position = GameObject.Find("PosTrianguloG2").transform.position;
//   	  Debug.Log(distance);
//   }

}