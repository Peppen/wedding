/* =====================================================
   WEDDING WEBSITE SCRIPT
===================================================== */



document.addEventListener("DOMContentLoaded", function(){

for(let i=0;i<25;i++){

const p=document.createElement("span");

p.className="particle";

document.body.appendChild(p);

const x=Math.random()*120-60;
const y=Math.random()*120-60;

p.style.left=seal.getBoundingClientRect().left+"px";
p.style.top=seal.getBoundingClientRect().top+"px";

p.animate([
{
transform:"translate(0,0) scale(1)",
opacity:1
},
{
transform:`translate(${x}px,${y}px) scale(0)`,
opacity:0
}
],{
duration:900
});

setTimeout(()=>p.remove(),900);

}

/* =====================================================
   APERTURA INVITO
===================================================== */


const seal = document.getElementById("seal");

const envelope = document.getElementById("envelope");

const enterButton = document.getElementById("enterSite");

const intro = document.getElementById("intro");

const website = document.getElementById("website");





// Nasconde il sito fino all'apertura

if(website){

    website.style.display="none";

}





if(seal){


seal.addEventListener("click", function(){



    envelope.classList.add("open");



    setTimeout(function(){


        enterButton.classList.remove("hidden");

        enterButton.classList.add("show");


    },1800);



});



}







// Entrata nel sito


if(enterButton){



enterButton.addEventListener("click", function(){



    intro.classList.add("hide");



    setTimeout(function(){


        intro.style.display="none";


        website.style.display="block";


        window.scrollTo({

            top:0,
            behavior:"instant"

        });



    },1000);



});



}






/* =====================================================
   COUNTDOWN
===================================================== */



const weddingDate = new Date(
"September 4, 2027 12:00:00"
);




function updateCountdown(){



const now = new Date();



const distance =
weddingDate - now;



if(distance <=0){



document.getElementById("days").innerHTML="0";

document.getElementById("hours").innerHTML="0";

document.getElementById("minutes").innerHTML="0";

document.getElementById("seconds").innerHTML="0";


return;


}





const days =
Math.floor(
distance /
(1000*60*60*24)
);



const hours =
Math.floor(
(distance %
(1000*60*60*24))
/
(1000*60*60)
);





const minutes =
Math.floor(
(distance %
(1000*60*60))
/
(1000*60)
);





const seconds =
Math.floor(
(distance %
(1000*60))
/
1000
);






document.getElementById("days").innerHTML =
days;



document.getElementById("hours").innerHTML =
hours;



document.getElementById("minutes").innerHTML =
minutes;



document.getElementById("seconds").innerHTML =
seconds;



}





setInterval(updateCountdown,1000);


updateCountdown();









/* =====================================================
   ANIMAZIONI SCROLL
===================================================== */


const elements =
document.querySelectorAll(
"section,.card"
);




const observer =
new IntersectionObserver(
(entries)=>{



entries.forEach(entry=>{



if(entry.isIntersecting){


entry.target.classList.add("visible");


}


});



},
{
threshold:.15
}

);




elements.forEach(element=>{


observer.observe(element);


});









/* =====================================================
   RSVP GOOGLE SHEETS
===================================================== */



const form =
document.getElementById("rsvpForm");





if(form){



form.addEventListener(
"submit",
function(e){



e.preventDefault();



const button =
form.querySelector("button");



button.innerHTML =
"Invio...";



button.disabled=true;




// Qui inserire in futuro Google Script URL


setTimeout(function(){



button.innerHTML =
"Confermato ❤️";



form.reset();



},1500);




});



}








/* =====================================================
   ANNO FOOTER
===================================================== */


const footer =
document.querySelector("footer");



if(footer){



footer.innerHTML +=

`
<br><br>
© ${new Date().getFullYear()} Wedding Day
`;



}



});
