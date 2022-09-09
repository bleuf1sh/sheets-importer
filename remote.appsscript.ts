// https://developers.google.com/apps-script/guides/html/communication
// https://developers.google.com/apps-script/guides/dialogs

function onOpen(e) {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu(`🚀🚀🚀🚀🚀🚀`)
    .addItem(`Open`, `showUi`)
    .addToUi();
}

function showUi() {
  HtmlService.createHtmlOutput()
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createTemplateFromFile(`sidebar`).evaluate().setTitle(`Sample`)
  );
}

function extGetSheetHeaders() {
  const sheet = SpreadsheetApp.getActive();
  const sheetHeaders = sheet.getDataRange().offset(0, 0, 1).getValues()[0];
  return sheetHeaders;
}

function extGetEmail() {
  return Session.getActiveUser().getEmail();
}