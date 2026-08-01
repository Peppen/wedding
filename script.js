/* =====================================
   WEDDING WEBSITE - SCRIPT JS
===================================== */


/* =====================================
   COUNTDOWN MATRIMONIO
===================================== */


const weddingDate = new Date(
    "September 7, 2027 11:00:00"
).getTime();



function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    if (distance < 0) {

        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";

        return;

    }


    const days = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );


    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");


    if(daysElement){

        daysElement.innerHTML = days;

    }


    if(hoursElement){

        hoursElement.innerHTML = hours;

    }


    if(minutesElement){

        minutesElement.innerHTML = minutes;

    }


    if(secondsElement){

        secondsElement.innerHTML = seconds;

    }

}



setInterval(updateCountdown,1000);

updateCountdown();





/* =====================================
   APERTURA INVITO PERGAMENA
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const seal = document.getElementById("openInvitation");
    const envelope = document.getElementById("envelope");
    const invitation = document.getElementById("invitation");
    const enter = document.getElementById("enterSite");

    seal.addEventListener("click", () => {

        envelope.classList.add("open");

        setTimeout(() => {

            enter.classList.remove("hidden");
            enter.classList.add("show");

        },1800);

    });

    enter.addEventListener("click", () => {

        invitation.style.opacity="0";

        setTimeout(()=>{

            invitation.style.display="none";

        },700);

    });

});




/* =====================================
   ANIMAZIONI SCORRIMENTO
===================================== */


document.addEventListener(
"DOMContentLoaded",
function(){


    const elements =
    document.querySelectorAll(
        "section, .card, .gallery img"
    );



    const observer =
    new IntersectionObserver(
    function(entries){


        entries.forEach(
        function(entry){


            if(entry.isIntersecting){


                entry.target.classList.add(
                    "visible"
                );


            }


        });


    },
    {
        threshold:0.15
    });



    elements.forEach(
    function(element){


        observer.observe(element);


    });


});





/* =====================================
   RSVP GOOGLE SHEETS
===================================== */


/*
Inserire qui il link
generato da Google Apps Script
*/


const scriptURL =
"INSERISCI_URL_GOOGLE_SCRIPT";



document.addEventListener(
"DOMContentLoaded",
function(){


    const form =
    document.getElementById(
        "rsvpForm"
    );


    const message =
    document.getElementById(
        "success"
    );



    if(form){


        form.addEventListener(
        "submit",
        function(event){


            event.preventDefault();



            const button =
            form.querySelector(
                "button"
            );


            button.innerHTML =
            "Invio...";


            button.disabled = true;



            fetch(
                scriptURL,
                {
                    method:"POST",
                    body:new FormData(form)
                }
            )

            .then(
            function(){


                if(message){

                    message.innerHTML =
                    "💚 Grazie! La tua presenza è stata confermata.";

                }


                form.reset();


                button.innerHTML =
                "Invia conferma";


                button.disabled = false;


            })

            .catch(
            function(){


                if(message){

                    message.innerHTML =
                    "Si è verificato un errore. Riprova.";

                }


                button.innerHTML =
                "Invia conferma";


                button.disabled = false;


            });


        });


    }


});





/* =====================================
   ANNO AUTOMATICO FOOTER
===================================== */


document.addEventListener(
"DOMContentLoaded",
function(){


    const footer =
    document.querySelector(
        "footer"
    );


    if(footer){


        footer.innerHTML +=
        `
        <br>
        © ${new Date().getFullYear()} Wedding Day
        `;


    }


});
