/* =====================================
   WEDDING RSVP - GOOGLE APPS SCRIPT
===================================== */


/*
   COLONNE DEL FOGLIO GOOGLE SHEETS:

   A - Data
   B - Nome
   C - Email
   D - Presenza
   E - Numero ospiti
   F - Allergie
   G - Messaggio

*/


const SHEET_NAME = "RSVP";



function doPost(e) {


  const sheet =
  SpreadsheetApp
  .getActiveSpreadsheet()
  .getSheetByName(SHEET_NAME);



  const data = e.parameter;



  const timestamp =
  new Date();



  sheet.appendRow([

    timestamp,

    data.nome,

    data.email,

    data.presenza,

    data.ospiti,

    data.allergie,

    data.messaggio

  ]);





  /*
     EMAIL AUTOMATICA
  */


  if(data.email){


    MailApp.sendEmail({

      to:data.email,

      subject:
      "Conferma ricezione RSVP - Wedding Day",


      htmlBody:


      `
      <div style="
      font-family:Arial;
      color:#4c5b50;
      padding:30px;
      ">

      <h2>
      Grazie ${data.nome}
      </h2>


      <p>
      Abbiamo ricevuto la tua conferma
      per il nostro matrimonio.
      </p>


      <p>
      Presenza:
      <strong>
      ${data.presenza}
      </strong>
      </p>


      <p>
      Numero partecipanti:
      <strong>
      ${data.ospiti}
      </strong>
      </p>


      <br>


      <p>
      Non vediamo l'ora di festeggiare
      insieme a te.
      </p>


      <p>
      ❤️ Gli sposi
      </p>


      </div>
      `


    });


  }



  return ContentService

  .createTextOutput(

    JSON.stringify({

      risultato:"OK"

    })

  )

  .setMimeType(
    ContentService.MimeType.JSON
  );


}