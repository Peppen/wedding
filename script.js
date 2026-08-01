/* =====================================
   WEDDING WEBSITE - STYLE CSS
   Tema: Verde Salvia Elegante
===================================== */

const openButton =
document.getElementById(
"openInvitation"
);


const invitation =
document.getElementById(
"invitation"
);



if(openButton){


openButton.addEventListener(
"click",

()=>{


invitation.classList.add(
"open"
);



setTimeout(()=>{


invitation.classList.add(
"hide-invitation"
);



},2000);



}

);


}

/* RESET GENERALE */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    font-family: 'Poppins', sans-serif;
    background: #f8f7f2;
    color: #4c5b50;
    line-height: 1.6;
}


/* VARIABILI COLORI */

:root {

    --sage: #7b927f;
    --sage-dark: #5d7362;
    --sage-light: #dce5db;

    --cream: #f8f7f2;
    --white: #ffffff;

    --gold: #c7aa6d;

    --text: #4c5b50;

}



/* TITOLI */

h1,
h2,
h3 {

    font-family: 'Playfair Display', serif;

    font-weight: 700;

}


h2 {

    text-align: center;

    font-size: 42px;

    color: var(--sage-dark);

    margin-bottom: 50px;

    position: relative;

}


h2::after {

    content: "";

    width: 70px;

    height: 2px;

    background: var(--gold);

    display: block;

    margin: 15px auto;

}



/* LINK */

a {

    text-decoration: none;

    color: inherit;

}



/* NAVBAR */

.navbar {

    position: fixed;

    top: 0;

    left: 0;

    width: 100%;

    height: 80px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 8%;

    background: rgba(255,255,255,0.85);

    backdrop-filter: blur(10px);

    z-index: 1000;

    box-shadow: 0 5px 20px rgba(0,0,0,0.05);

}



.logo {

    font-family: 'Playfair Display', serif;

    font-size: 28px;

    color: var(--sage-dark);

}



.navbar ul {

    display: flex;

    list-style: none;

    gap: 25px;

}



.navbar ul li a {

    font-size: 14px;

    color: var(--text);

    transition: .3s;

}



.navbar ul li a:hover {

    color: var(--sage);

}



/* HERO */

.hero {

    height: 100vh;

    background:

    linear-gradient(
        rgba(80,100,85,.45),
        rgba(80,100,85,.45)
    ),

    url("images/hero.jpg");

    background-size: cover;

    background-position: center;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    color:white;

}



.overlay {

    animation: fadeUp 1.5s ease;

}



.hero h1 {

    font-size: 80px;

    letter-spacing: 2px;

    margin-bottom: 20px;

}



.hero p {

    font-size: 25px;

    margin-bottom: 35px;

}



.btn {

    display: inline-block;

    background: var(--sage);

    color:white;

    padding:15px 35px;

    border-radius:50px;

    transition:.3s;

}



.btn:hover {

    background: var(--sage-dark);

    transform: translateY(-3px);

}



/* SEZIONI */

section {

    padding:100px 8%;

}



.container {

    max-width:900px;

    margin:auto;

    text-align:center;

    font-size:18px;

}



/* COUNTDOWN */

.timer {

    display:flex;

    justify-content:center;

    gap:25px;

    flex-wrap:wrap;

}



.timer div {

    background:white;

    width:140px;

    height:140px;

    border-radius:20px;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    box-shadow:

    0 15px 35px rgba(0,0,0,.08);

}



.timer span {

    font-size:45px;

    color:var(--sage-dark);

    font-family:'Playfair Display',serif;

}



.timer p {

    color:#777;

}

/* =====================================
   PROGRAMMA MATRIMONIO
===================================== */


.cards {

    display:flex;

    justify-content:center;

    gap:35px;

    flex-wrap:wrap;

}



.card {

    background:var(--white);

    width:350px;

    padding:40px 30px;

    border-radius:25px;

    text-align:center;

    box-shadow:

    0 15px 40px rgba(0,0,0,.08);

    transition:.4s;

    border-top:4px solid var(--sage);

}



.card:hover {

    transform:translateY(-10px);

    box-shadow:

    0 25px 50px rgba(0,0,0,.12);

}



.card h3 {

    font-size:28px;

    color:var(--sage-dark);

    margin-bottom:20px;

}



.card p {

    margin:10px 0;

    color:#666;

}





/* =====================================
   GALLERIA FOTOGRAFICA
===================================== */


.gallery {

    display:grid;

    grid-template-columns:

    repeat(3,1fr);

    gap:25px;

}



.gallery img {

    width:100%;

    height:320px;

    object-fit:cover;

    border-radius:20px;

    transition:.5s;

    box-shadow:

    0 10px 25px rgba(0,0,0,.1);

}



.gallery img:hover {

    transform:scale(1.05);

}





/* =====================================
   RSVP FORM
===================================== */


.rsvp-card {

    max-width:700px;

    margin:auto;

    background:white;

    padding:45px;

    border-radius:25px;

    box-shadow:

    0 20px 45px rgba(0,0,0,.08);

}



#rsvpForm input,

#rsvpForm select,

#rsvpForm textarea {


    width:100%;

    padding:15px;

    margin-bottom:20px;

    border-radius:12px;

    border:1px solid #ddd;

    font-family:'Poppins',sans-serif;

    font-size:15px;

    background:#fafafa;


}



#rsvpForm input:focus,

#rsvpForm select:focus,

#rsvpForm textarea:focus {


    outline:none;

    border-color:var(--sage);

    background:white;


}



#rsvpForm textarea {

    resize:none;

    min-height:120px;

}



#rsvpForm button {


    width:100%;

    padding:16px;

    background:var(--sage);

    color:white;

    border:none;

    border-radius:50px;

    font-size:17px;

    cursor:pointer;

    transition:.3s;


}



#rsvpForm button:hover {


    background:var(--sage-dark);

    transform:translateY(-3px);


}



#success {


    text-align:center;

    margin-top:20px;

    color:var(--sage-dark);

    font-weight:600;

}





/* =====================================
   LISTA NOZZE
===================================== */


.gift-box {


    max-width:800px;

    margin:auto;

    padding:45px;

    background:

    linear-gradient(

        135deg,

        #ffffff,

        #edf2eb

    );


    border-radius:25px;

    text-align:center;

    font-size:18px;


    box-shadow:

    0 15px 35px rgba(0,0,0,.08);


}





/* =====================================
   MAPPA
===================================== */


#map iframe {


    width:100%;

    height:450px;

    border:0;

    border-radius:25px;

    box-shadow:

    0 15px 35px rgba(0,0,0,.1);


}





/* =====================================
   FOOTER
===================================== */


footer {


    background:var(--sage-dark);

    color:white;

    padding:45px 20px;

    text-align:center;

    font-size:16px;


}



footer p {

    max-width:700px;

    margin:auto;

}





/* =====================================
   ANIMAZIONI
===================================== */


@keyframes fadeUp {


    from {

        opacity:0;

        transform:translateY(40px);

    }


    to {

        opacity:1;

        transform:translateY(0);

    }


}



@keyframes fade {


    from {

        opacity:0;

    }


    to {

        opacity:1;

    }


}



/* ELEMENTI ANIMATI */

.card,

.gallery img,

.timer div,

.gift-box {

    animation:fadeUp 1s ease both;

}

/* =====================================
   RESPONSIVE DESIGN
   Tablet e Smartphone
===================================== */


/* TABLET */

@media (max-width: 1024px) {


    .navbar {

        padding:0 5%;

    }


    .hero h1 {

        font-size:60px;

    }


    .gallery {

        grid-template-columns:

        repeat(2,1fr);

    }


    section {

        padding:80px 5%;

    }


}





/* SMARTPHONE */

@media (max-width:768px) {


    /* NAVBAR MOBILE */


    .navbar {

        height:auto;

        padding:20px;

        flex-direction:column;

        gap:15px;

    }



    .navbar ul {

        flex-wrap:wrap;

        justify-content:center;

        gap:15px;

    }



    .navbar ul li a {

        font-size:13px;

    }




    /* HERO */


    .hero {

        height:90vh;

    }



    .hero h1 {

        font-size:42px;

        line-height:1.2;

    }



    .hero p {

        font-size:18px;

    }



    .btn {

        padding:13px 28px;

    }




    /* TITOLI */


    h2 {

        font-size:34px;

    }




    /* COUNTDOWN */


    .timer {

        gap:15px;

    }



    .timer div {

        width:110px;

        height:110px;

    }



    .timer span {

        font-size:34px;

    }




    /* CARD */


    .card {

        width:100%;

        padding:30px 20px;

    }




    /* GALLERIA */


    .gallery {

        grid-template-columns:

        repeat(1,1fr);

    }



    .gallery img {

        height:280px;

    }




    /* RSVP */


    .rsvp-card {

        padding:25px 20px;

    }




    /* MAPPA */


    #map iframe {

        height:300px;

    }



}





/* =====================================
   DETTAGLI DECORATIVI MATRIMONIO
===================================== */


/* Bordo elegante sezioni */


section:not(:first-child)::before {


    content:"";

    display:block;

    width:100px;

    height:1px;

    background:

    linear-gradient(

        to right,

        transparent,

        var(--gold),

        transparent

    );


    margin:

    -50px auto 50px;


}





/* Effetto vetro */

.rsvp-card,

.card,

.gift-box {


    backdrop-filter:

    blur(5px);


}





/* Pulsanti eleganti */


button,
.btn {


    letter-spacing:1px;

    font-weight:500;


}





/* Immagini più raffinate */


img {

    user-select:none;

}





/* Scroll morbido */


html {

    scroll-padding-top:90px;

}





/* Cuoricino decorativo */


footer::before {


    content:"♥";

    display:block;

    color:#e8c6c6;

    font-size:25px;

    margin-bottom:15px;


}





/* Nascondere eventuali scrollbar orizzontali */


body {

    overflow-x:hidden;

}





/* Effetto entrata */

section {

    animation:fade 1s ease;

}

document.addEventListener("DOMContentLoaded", function(){


    const button = document.getElementById("openInvitation");

    const envelope = document.getElementById("envelope");

    const invitation = document.getElementById("invitation");


    button.addEventListener("click", function(){


        envelope.classList.add("open");


        setTimeout(function(){

            invitation.classList.add("hide-invitation");

        },2000);


    });


});
