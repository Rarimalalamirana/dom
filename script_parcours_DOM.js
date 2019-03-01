
console.log(`il  y a : ${document.getElementsByTagName("p").length} das cette body`);
console.log(`ce qu'il y a dans le p portant l'id coucou:${document.getElementById("coucou").textContent}`);
console.log(`Le lin dans le troisieme lien:${document.links[3].href}`);
console.log(`Il y a ${document.getElementsByClassName("compte-moi").length} dans cette body`);
console.log(`Il y a ${document.querySelectorAll("li.compte-moi").length} de li ayant la class compte-moi`);
console.log(`IL y a :${document.querySelectorAll("ol>li.compte-moi").length} li ayant la class compte-moi et il esr dans un ol  dans le body`);
console.log(document.querySelectorAll("div>ul")[1].children[0].textContent);
