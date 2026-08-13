# 💍 Wedding Day 

Sito web interattivo per un matrimonio, realizzato con **HTML, CSS e JavaScript vanilla**.

Il progetto presenta un invito digitale elegante e animato, una pagina dedicata al matrimonio, countdown, programma della giornata, modulo RSVP, lista nozze e mappa della location.

---

## ✨ Demo

Il sito è pensato come un vero e proprio **invito digitale interattivo**.

All'apertura viene mostrata una copertina con una busta/invito. L'utente può cliccare sulla **ceralacca** per aprire l'invito e successivamente entrare nel sito.

---

## 🎨 Caratteristiche

* 💌 Invito iniziale animato
* 🔐 Apertura tramite ceralacca
* ✨ Animazione particellare all'apertura
* 🚪 Porte dell'invito con animazione 3D
* 💍 Nome degli sposi e data del matrimonio
* 🧭 Navbar con navigazione alle varie sezioni
* 🌿 Design elegante verde salvia, oro e carta antica
* ⏳ Countdown dinamico al matrimonio
* ⛪ Programma della giornata
* 📝 Modulo RSVP
* 🎁 Sezione lista nozze
* 📍 Mappa Google Maps incorporabile
* 📱 Layout responsive per smartphone e tablet
* 🎞️ Animazioni durante lo scroll
* 👆 Navbar che si nasconde durante lo scroll verso il basso
* ❤️ Footer dinamico con anno corrente
* 🔤 Font Google Fonts
* ⭐ Icone Font Awesome

---

## 🛠️ Tecnologie utilizzate

Il progetto non utilizza framework o librerie JavaScript complesse.

### Frontend

* **HTML5**
* **CSS3**
* **JavaScript Vanilla**

### Risorse esterne

* [Google Fonts](https://fonts.google.com/)

  * Playfair Display
  * Poppins

* [Font Awesome](https://fontawesome.com/)

  * Icone utilizzate nel programma della giornata

* Google Maps

  * Utilizzato tramite `iframe` per la mappa

---

## 📁 Struttura del progetto

```text
wedding-day/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contiene tutta la struttura HTML del sito:

* copertina iniziale
* invito
* navbar
* hero
* countdown
* programma
* RSVP
* lista nozze
* mappa
* footer

### `style.css`

Gestisce:

* colori
* layout
* responsive design
* animazioni
* effetti 3D
* ombre
* pulsanti
* card
* navbar
* invito iniziale

### `script.js`

Gestisce la parte interattiva:

* apertura dell'invito
* animazione della ceralacca
* particelle
* ingresso nel sito
* countdown
* animazioni allo scroll
* gestione del modulo RSVP
* anno automatico nel footer
* comportamento della navbar durante lo scroll

---

# 💌 Apertura dell'invito

La pagina iniziale utilizza un overlay a tutto schermo:

```html
<div id="intro">
```

All'interno viene mostrata la busta:

```html
<div class="envelope" id="envelope">
```

L'utente deve cliccare sulla ceralacca:

```html
<div class="seal" id="seal">
    ❦
</div>
```

JavaScript aggiunge la classe:

```javascript
envelope.classList.add("open");
```

La classe `.open` attiva le animazioni CSS delle porte e della lettera.

---

# ⏳ Countdown

Il countdown è impostato sulla data:

```javascript
const weddingDate = new Date(
    "September 4, 2027 12:00:00"
);
```

Il JavaScript calcola automaticamente:

* giorni
* ore
* minuti
* secondi

e aggiorna la pagina ogni secondo.

## Modificare la data

Per cambiare la data del matrimonio è sufficiente modificare:

```javascript
const weddingDate = new Date(
    "September 4, 2027 12:00:00"
);
```

Ad esempio:

```javascript
const weddingDate = new Date(
    "October 15, 2027 16:00:00"
);
```

È consigliabile utilizzare un formato data/ora non ambiguo.

---

# 📝 RSVP

Il modulo RSVP contiene:

* nome e cognome
* email
* presenza
* numero partecipanti
* allergie/intolleranze
* messaggio

Esempio:

```html
<form id="rsvpForm">
```

Attualmente il modulo **non invia realmente i dati a un database o a Google Sheets**.

Il JavaScript simula solamente l'invio:

```javascript
setTimeout(function(){

    button.innerHTML =
        "Confermato ❤️";

    form.reset();

},1500);
```

## 🔧 Collegare Google Sheets

Per rendere realmente funzionante l'RSVP sarà necessario collegare il form a un backend.

Una possibile soluzione è:

```text
Sito
 ↓
JavaScript
 ↓
Google Apps Script
 ↓
Google Sheets
```

In questo modo ogni conferma potrebbe essere salvata automaticamente in un foglio Google.

Il punto del codice dove effettuare l'integrazione è:

```javascript
// Qui inserire in futuro Google Script URL
```

---

# 📍 Google Maps

La mappa viene caricata tramite:

```html
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18..."
    loading="lazy">
</iframe>
```

L'URL presente nel progetto è attualmente un **placeholder**.

## Inserire la mappa reale

1. Aprire Google Maps.
2. Cercare la location.
3. Selezionare **Condividi**.
4. Selezionare **Incorpora una mappa**.
5. Copiare il codice `iframe`.
6. Sostituire quello presente in `index.html`.

---

# 🎨 Personalizzazione colori

I colori principali sono definiti all'inizio di `style.css` tramite variabili CSS:

```css
:root{

    --sage:#8FA58A;
    --sage-dark:#435443;
    --sage-deep:#324132;

    --gold:#B89A52;
    --gold-light:#D8C48B;

    --paper-light:#F5F7F0;
    --paper:#E5EBDD;
    --paper-dark:#CDD9C5;

    --cream:#FBFAF4;

    --brown:#625542;
}
```

Questo permette di modificare rapidamente il tema grafico senza dover cambiare tutti i colori del CSS.

---

# 🔤 Font

Il sito utilizza due font:

### Playfair Display

Utilizzato principalmente per:

* titoli
* nomi degli sposi
* date
* elementi eleganti

### Poppins

Utilizzato per:

* testo
* menu
* form
* pulsanti

I font vengono caricati da Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
```

---

# 📱 Responsive Design

Il sito dispone di una media query dedicata agli schermi inferiori a `768px`:

```css
@media(max-width:768px){
```

Su smartphone vengono modificati:

* dimensione della navbar
* dimensione dei titoli
* dimensione dell'hero
* dimensione delle card
* countdown
* invito iniziale
* spaziature delle sezioni

---

# 🧭 Navbar

La navbar contiene collegamenti alle sezioni:

```text
Home
Countdown
Programma
RSVP
Lista Nozze
Dove
```

Ogni voce utilizza un'ancora HTML:

```html
<a href="#program">
    Programma
</a>
```

Grazie a:

```css
html{
    scroll-behavior:smooth;
}
```

la navigazione tra le sezioni avviene con uno scroll fluido.

---

# 🎞️ Animazioni

Il progetto utilizza principalmente animazioni CSS e API JavaScript native.

Tra le animazioni presenti:

* ingresso della busta
* apertura delle porte
* comparsa della lettera
* comparsa dei testi
* pulsazione della ceralacca
* particelle
* animazione delle sezioni
* hover delle card
* hover dei pulsanti
* navbar dinamica

---

# 👀 Animazioni allo scroll

Il progetto utilizza `IntersectionObserver`:

```javascript
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
```

Quando una sezione entra nella viewport viene aggiunta la classe:

```css
.visible{
    opacity:1!important;
    transform:translateY(0)!important;
}
```

---

# 🚀 Come avviare il progetto

Non sono necessari Node.js, npm o altri strumenti di build.

È sufficiente scaricare/clonare il progetto e aprire:

```text
index.html
```

nel browser.

Per uno sviluppo più comodo è consigliato utilizzare un server locale, ad esempio **Live Server** in Visual Studio Code.

---

# ✏️ Cosa modificare per un matrimonio reale

Prima della pubblicazione è consigliabile personalizzare almeno:

### 1. Nomi

In `index.html`:

```html
<h1>
    Katia
    <br>
    &
    <br>
    Mario
</h1>
```

e:

```html
<h1>
    Katia & Mario
</h1>
```

### 2. Data

Modificare la data visualizzata:

```html
4 Settembre 2027
```

e la data del countdown in `script.js`.

### 3. Location

Modificare:

```text
Villa Belvedere
Colline Toscane
```

e gli indirizzi della cerimonia e del ricevimento.

### 4. Orari

Aggiornare:

```text
Ore 16:00
Ore 18:00
```

### 5. Mappa

Sostituire l'`iframe` con quello reale di Google Maps.

### 6. RSVP

Collegare il modulo a un backend reale, Google Sheets o altro servizio.

### 7. Lista nozze

Sostituire il testo provvisorio con:

* IBAN
* link alla lista nozze
* eventuale conto viaggio
* informazioni per il bonifico

---

# ⚠️ Note importanti

## Countdown

Il countdown utilizza l'orario locale del dispositivo dell'utente.

Se è importante che il countdown sia perfettamente sincronizzato indipendentemente dal fuso orario, è consigliabile gestire la data in modo esplicito con timezone.

## RSVP

Il modulo attualmente **non salva i dati**.

Il messaggio:

```text
Confermato ❤️
```

è solamente una simulazione lato client.

## Google Maps

L'URL attualmente presente:

```text
https://www.google.com/maps/embed?pb=!1m18...
```

non rappresenta una mappa reale completa e deve essere sostituito prima della pubblicazione.

---

# 🌐 Pubblicazione online

Essendo un progetto statico, può essere pubblicato su diversi servizi di hosting statico.

La struttura minima richiesta è:

```text
index.html
style.css
script.js
```

Una volta caricati sul servizio di hosting, il sito sarà immediatamente accessibile tramite browser.

---

# 📄 Licenza

Questo progetto può essere utilizzato e modificato liberamente per il proprio matrimonio o per progetti personali.

Le risorse esterne utilizzate, come Font Awesome e Google Fonts, rimangono soggette alle rispettive licenze e condizioni d'uso.

---
