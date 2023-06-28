var dificuldade = 0.01F;
var mensagem = '';

function OnGUI () {
   var contagem = 0;
   var distance = Vector3.Distance(GameObject.Find("Losango").transform.position, GameObject.Find("PosLosango").transform.position);
   if (distance < dificuldade) {
   		contagem++;	
   }
   
   distance = Vector3.Distance(GameObject.Find("Paralelogramo").transform.position, GameObject.Find("PosParalelogramo").transform.position);
   if (distance < dificuldade) {
   		contagem++;
   }
   
   distance = Vector3.Distance(GameObject.Find("TrianguloP1").transform.position, GameObject.Find("PosTrianguloP1").transform.position);
   if (distance < dificuldade) {
   		contagem++;
   }
   
   distance = Vector3.Distance(GameObject.Find("TrianguloP2").transform.position, GameObject.Find("PosTrianguloP2").transform.position);
   if (distance < dificuldade) {
   		contagem++;
   }
   
   distance = Vector3.Distance(GameObject.Find("TrianguloM").transform.position, GameObject.Find("PosTrianguloM").transform.position);
   if (distance < dificuldade) {
   		contagem++;
   }
   
   distance = Vector3.Distance(GameObject.Find("TrianguloG1").transform.position, GameObject.Find("PosTrianguloG1").transform.position);
   if (distance < dificuldade) {
   		contagem++;
   }
   
   distance = Vector3.Distance(GameObject.Find("TrianguloG2").transform.position, GameObject.Find("PosTrianguloG2").transform.position);
   if (distance < dificuldade) {
   		contagem++;
   }
   
   if (contagem == 1) {
   		mensagem = 'Opa já encaixou uma (14% solucionado)';
   
   } else if (contagem == 2) {
   		mensagem = 'Legal já encaixou duas (28% solucionado)';
   
   } else if (contagem == 3) {
   		mensagem = 'Ótimo, mais uma encaixada (42% já solucionado)';
   
   } else if (contagem == 4) {
   		mensagem = 'Passou da metade (57% já solucionado)';
   
   } else if (contagem == 5) {
   		mensagem = 'Faltam só duas (71% já solucionado)';

   } else if (contagem == 6) {
   		mensagem = 'Resta só mais uma (85% já solucionado)';
   
   } else if (contagem == 7) { 
   		mensagem = 'Parabéns!!!! você completou 100%';
   
   } else {
   		mensagem = 'Vamos lá?';
   }
      
    GUI.Label (Rect (300, 30, 400, 50), mensagem);
}
