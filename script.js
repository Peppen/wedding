/* ==========================
   CONFIGURAZIONE
========================== */

const wedding = {

    bride: "Giulia",

    groom: "Andrea",

    date: "2027-06-14T16:00:00",

    events: [

        {
            time: "15:30",
            title: "Arrivo degli ospiti",
            place: "Chiesa di Santa Maria",
            address: "Via Roma 1, Milano",
            icon: "⛪"
        },

        {
            time: "16:00",
            title: "Cerimonia",
            place: "Chiesa di Santa Maria",
            address: "Via Roma 1, Milano",
            icon: "💍"
        },

        {
            time: "18:00",
            title: "Aperitivo",
            place: "Villa Rose",
            address: "Via Verdi 20, Milano",
            icon: "🥂"
        },

        {
            time: "19:30",
            title: "Cena",
            place: "Villa Rose",
            address: "Via Verdi 20, Milano",
            icon: "🍽️"
        },

        {
            time: "22:30",
            title: "Taglio della torta",
            place: "Giardino",
            address: "Via Verdi 20, Milano",
            icon: "🎂"
        },

        {
            time: "23:00",
            title: "Festa",
            place: "Sala ricevimenti",
            address: "Via Verdi 20, Milano",
            icon: "🎉"
        }

    ]

}

    bride: "Giulia",

    groom: "Andrea",

    date: "2027-06-14T16:00:00",

    church: "Chiesa di Santa Maria",

    address: "Via Roma 1"

};

/* ==========================
   NAVBAR
========================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll",()=>{

    navbar.classList.toggle("scrolled",window.scrollY>80);

});

/* ==========================
   MENU
========================== */

const toggle=document.getElementById("menuToggle");

const menu=document.getElementById("menu");

toggle.addEventListener("click",()=>{

menu.classList.toggle("active");

});

document.querySelectorAll("#menu a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");

});

});

/* ==========================
   COUNTDOWN
========================== */

const targetDate=new Date(wedding.date);

function updateCountdown(){

const now=new Date();

const diff=targetDate-now;

if(diff<=0){

document.getElementById("eventMessage").innerHTML=

"❤️ Oggi è il grande giorno!";

return;

}

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor(diff/(1000*60*60)%24);

const minutes=Math.floor(diff/(1000*60)%60);

const seconds=Math.floor(diff/1000%60);

document.getElementById("days").textContent=days;

document.getElementById("hours").textContent=hours;

document.getElementById("minutes").textContent=minutes;

document.getElementById("seconds").textContent=seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

/* ==========================
   GOOGLE CALENDAR
========================== */

const start = wedding.date.replace(/[-:]/g, "").replace(".000", "");

const endDate = new Date(targetDate.getTime() + 2 * 60 * 60 * 1000);

const end = endDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

document.getElementById("googleCalendar").href =
`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(wedding.bride + " & " + wedding.groom)}&dates=${start}/${end}&location=${encodeURIComponent(wedding.address)}`;

/* ==========================
   FILE ICS
========================== */

document.getElementById("downloadICS").addEventListener("click",()=>{

const ics=`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${wedding.bride} & ${wedding.groom}
DTSTART:${start}
DTEND:${end}
LOCATION:${wedding.address}
END:VEVENT
END:VCALENDAR`;

const blob=new Blob([ics],{type:"text/calendar"});

const url=URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;

a.download="matrimonio.ics";

a.click();

URL.revokeObjectURL(url);

});

function renderTimeline(){

const container=document.getElementById("dayTimeline");

container.innerHTML="";

wedding.events.forEach(event=>{

const maps=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`;

container.innerHTML+=`

<div class="day-card reveal">

<div class="day-time">

${event.time}

</div>

<div class="day-icon">

${event.icon}

</div>

<div class="day-content">

<h3>${event.title}</h3>

<p>

<strong>${event.place}</strong><br>

${event.address}

</p>

<a
class="map-btn"
href="${maps}"
target="_blank">

Apri su Google Maps

</a>

</div>

</div>

`;

});

observer.disconnect();

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

}

renderTimeline();