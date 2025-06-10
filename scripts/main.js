// ♒♒♒♒♒♒♒♒♒♒
// 🌱 Sélection des éléments
// ♒♒♒♒♒♒♒♒♒♒

const taskInput            = document.getElementById("nameTask");
const dateInput            = document.getElementById("dateTask");
const descriptionInput     = document.getElementById("zone");
const addBtn               = document.getElementById("ajouter");
const triBtn               = document.getElementById("tri");
const displayDiv           = document.getElementById("displayTask");
const stockageData         = [];







// ♒♒♒♒♒♒♒♒♒
// 🧠 Variables globales
// ♒♒♒♒♒♒♒♒♒



// ♒♒♒♒♒♒♒♒
// 🚀 Fonctionnalités
// ♒♒♒♒♒♒♒♒


function addTask() {
  // Récupérer les valeurs actuelles des champs
  const taskValue = taskInput.value.trim();
  const dateValue = dateInput.value;
  const descriptionValue = descriptionInput.value.trim();

  // Vérification : tous les champs doivent être remplis
  if (!taskValue || !dateValue || !descriptionValue) {
    alert("Tous les champs doivent être remplis !");
    return;
  }
  const taskObj = {
    name: taskValue,
    date: dateValue,
    description: descriptionValue,
  };

  // Stockage dans le tableau
  stockageData.push(taskObj);

  // Création de l'affichage
  const div = document.createElement("div");
  div.classList.add("task-card"); // à styliser si tu veux

  div.innerHTML = `
    <input type="checkbox" name="" id="">
    <h3>${taskObj.name}</h3>
    <p> Date ${taskObj.date}</p>
    <p>${taskObj.description}</p>
  `;


    let span = document.createElement("span");
    // innerhtml et le tring que je vais afficher dans le span 
    span.innerHTML = "✖️"
    // je fais accoucher le span a la balise div
    div.appendChild(span);

  displayDiv.appendChild(div);

  // Réinitialisation des champs
  taskInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
}

// je vais créer un sauvegarde
function sauvegarde() {
    // je crée l'objet et sa clé + sa valeur
    localStorage.setItem("save",displayDiv.innerHTML);
}


function reDisplay() {
    displayDiv.innerHTML = localStorage.getItem("save")
}
reDisplay();



// ♒♒♒♒♒♒♒
//  🧲 Événements
// ♒♒♒♒♒♒♒


addBtn.addEventListener("click",() =>{
    event.preventDefault();
    addTask();
    // j'oublie pas d'activer ma save a l'event 🤭
    sauvegarde();
});



displayDiv.addEventListener('click',function (e) {
    // si je click sur une balise nommée ainsi alors
    if (e.target.closest(".task-card") && e.target.tagName !== "SPAN") {
        // toggle pour add/remove la classe
       e.target.closest(".task-card").classList.toggle("checked");
        sauvegarde();

    // si je click sur une balise nommée span alors
    }else if (e.target.tagName === "SPAN"){
        //si je le fais sur le span , je lui applique un remove de niveau 5
        e.target.parentElement.remove();
        //je rappelle la save ici
       sauvegarde();
    }
});

triBtn.addEventListener("click",function (e) {
   
})