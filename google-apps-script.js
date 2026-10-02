const SPREADSHEET_ID = "INSERISCI_QUI_ID_DEL_FOGLIO";
const SHEET_NAME = "Invitati";

function doPost(e) {

  try {

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(
        'Il foglio "' + SHEET_NAME + '" non è stato trovato.'
      );
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nome || "",
      data.email || "",
      data.presenza || "",
      data.ospiti || "",
      data.allergie || "",
      data.messaggio || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success"
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {

    return ContentService
      .createTextOutput(JSON.stringify({
        result: "error",
        message: err.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
