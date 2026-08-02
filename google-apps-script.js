const SHEET_NAME = "Tabella Invitati";

function doPost(e) {

  try {

    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName(SHEET_NAME);

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nome,
      data.email,
      data.presenza,
      data.ospiti,
      data.allergie,
      data.messaggio
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success"
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {

    return ContentService
      .createTextOutput(JSON.stringify({
        result: "error",
        message: err.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }

}
