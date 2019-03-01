function changeTitle(classn ,value){
	document.querySelector(classn).innerHTML=value;
}

changeTitle(".jumbotron-heading","Ce que j'ai appris à THP");
changeTitle(".lead","THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");
 function changeCallToActions(n,lien,tetxt){
document.getElementsByClassName("btn")[n].href=lien;
document.getElementsByClassName("btn")[n].innerHTML=tetxt;
}
changeCallToActions(0,"http://www.thehackingproject.org","OK je veux tester !");
changeCallToActions(1,"https://www.pole-emploi.fr/accueil/","Non Merci");
 function changeLogoName(classn){
document.getElementsByTagName(classn)[0].innerHTML="The THP Experience";
document.getElementsByTagName(classn)[0].style.fontSize="2em";
 }
 changeLogoName("strong");
 let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
 function populateImages(x,y){
 	document.getElementsByClassName("card-img-top")[x].src = imagesArray[y];
 };
 for (var i = 0; i < 8; i++) {
 	populateImages(i,i);
 };
 function deleteLastCards(x){
 var el =document.getElementsByClassName('card')[x] ;
el.remove();
 };
let card =document.getElementsByClassName('card');
 for (var i =card.length-1 ; i < card.length; i++) {
 	deleteLastCards(i);
 	deleteLastCards(i-1);
 	deleteLastCards(i-2);
 }
function changeCardsText(x,z){
	document.getElementsByClassName("card-text")[x].textContent=z;
};
let mots=["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web","Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML","JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
for (var i = 0; i <mots.length; i++) {
	changeCardsText(i,mots[i])
};
let btn =document.getElementsByClassName("btn-outline-secondary")
function changeViewButtons(x){
	btn[x].setAttribute("class","btn btn-success");
}
for (var i = 0; i < btn.length; i++) {
	changeViewButtons(i);
}
let newDiv=document.createElement("div.row");
let div=document.getElementsByClassName("container")[3];
div.appendChild(newDiv);
let divJs = document.getElementsByClassName("col-md-4")[5];
newDiv.appendChild(divJs);
