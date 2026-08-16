/* =====================================================
   WEDDING WEBSITE SCRIPT
===================================================== */



document.addEventListener("DOMContentLoaded", function(){


/* =====================================================
   APERTURA INVITO
===================================================== */

const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");
const enterButton = document.getElementById("enterSite");
const intro = document.getElementById("intro");
const website = document.getElementById("website");


/* =====================================================
   NASCONDE IL SITO ALL'INIZIO
===================================================== */

if (website) {

    website.style.display = "none";

}


/* =====================================================
   APERTURA DELLA BUSTA
===================================================== */

if (seal && envelope) {

    seal.addEventListener("click", function () {

        /*
         * Evita che il click venga eseguito
         * più volte
         */

        if (envelope.classList.contains("open")) {
            return;
        }


        /* ---------------------------------------------
           Effetto particelle della ceralacca
        --------------------------------------------- */

        for (let i = 0; i < 25; i++) {

            const p = document.createElement("span");

            p.className = "particle";

            document.body.appendChild(p);


            const rect =
                seal.getBoundingClientRect();


            const x =
                Math.random() * 160 - 80;

            const y =
                Math.random() * 160 - 80;


            p.style.left =
                rect.left + rect.width / 2 + "px";

            p.style.top =
                rect.top + rect.height / 2 + "px";


            p.animate(

                [
                    {
                        transform:
                            "translate(0,0) scale(1)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(${x}px,${y}px) scale(0)`,
                        opacity: 0
                    }
                ],

                {
                    duration: 900,
                    easing: "ease-out"
                }

            );


            setTimeout(function () {

                p.remove();

            }, 900);

        }


        /* ---------------------------------------------
           APRE LA BUSTA
        --------------------------------------------- */

        envelope.classList.add("open");


        /*
         * Il pulsante viene gestito dal CSS:
         *
         * .envelope.open #enterSite
         *
         * quindi non dobbiamo più aggiungere
         * classi "show" o "hidden".
         */

    });

}


/* =====================================================
   ENTRA NEL SITO
===================================================== */

if (enterButton && intro && website) {

    enterButton.addEventListener("click", function (event) {

        /*
         * Impedisce eventuali comportamenti indesiderati
         */

        event.preventDefault();

        event.stopPropagation();


        /*
         * Evita doppi click
         */

        if (enterButton.disabled) {
            return;
        }

        enterButton.disabled = true;


        /*
         * Inizia la dissolvenza della copertina
         */

        intro.classList.add("hide");


        /*
         * Aspetta che termini il fade-out
         */

        setTimeout(function () {

            intro.style.display = "none";

            website.style.display = "block";


            /*
             * Torna all'inizio del sito
             */

            window.scrollTo({

                top: 0,

                behavior: "instant"

            });


            /*
             * Riabilita il pulsante
             */

            enterButton.disabled = false;

        }, 1000);

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

   const navbar = document.querySelector("nav");

let lastScroll = 0;


if(navbar){

    window.addEventListener("scroll", function(){

        let currentScroll = window.pageYOffset;


        if(currentScroll > lastScroll && currentScroll > 100){

            // scroll verso il basso
            navbar.classList.add("hide-nav");


        } else {

            // scroll verso l'alto
            navbar.classList.remove("hide-nav");

        }


        lastScroll = currentScroll;


    });

}



});
