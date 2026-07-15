let turn = 1;
let gold = 25;
let power = 95;

function selectCountry(name){

let text = "";

switch(name){

case "Vatikan":
text="🏛 Vatikan\n\nDünyanın en küçük devleti.\nDiplomatik gücü çok yüksek.";
break;

case "Almanya":
text="🇩🇪 Almanya\n\nGüçlü sanayi ve ordu.";
break;

case "Fransa":
text="🇫🇷 Fransa\n\nİtilaf Devletlerinin liderlerinden.";
break;

case "İtalya":
text="🇮🇹 İtalya\n\nHenüz karar aşamasında.";
break;

case "Avusturya":
text="🇦🇹 Avusturya-Macaristan\n\nSırbistan ile kriz yaşıyor.";
break;

case "Rusya":
text="🇷🇺 Rus İmparatorluğu\n\nSeferberlik hazırlığında.";
break;

case "Birleşik Krallık":
text="🇬🇧 Dünyanın en büyük donanmasına sahip.";
break;

case "Sırbistan":
text="🇷🇸 Krizin merkezinde.";
break;

default:
text=name;
}

document.getElementById("info").innerText=text;

}

function nextTurn(){

turn++;

document.getElementById("turn").innerText="Tur : "+turn;

gold += Math.floor(Math.random()*3);

power += Math.floor(Math.random()*3)-1;

document.getElementById("gold").innerText=gold;

document.getElementById("power").innerText=power;

const events=[

"Avusturya Sırbistan'a ültimatom verdi.",

"Rusya seferberlik ilan etti.",

"Almanya savaş planlarını hazırlıyor.",

"Vatikan barış çağrısı yaptı.",

"İngiltere donanmasını alarma geçirdi."

];

document.getElementById("info").innerText=
events[Math.floor(Math.random()*events.length)];

}