// https://developers.google.com/apps-script/guides/html/communication
// https://developers.google.com/apps-script/guides/dialogs

function onOpen(e) {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu(`🚀🚀🚀🚀🚀🚀`)
    .addItem(`Open`, `showUi`)
    .addItem(`Test`, `test`)
    .addToUi();
}

function showUi() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createTemplateFromFile(`appendCsv`).evaluate().setTitle(`Sample`)
  );
}

function extGetSheetHeaders() {
  const sheet = SpreadsheetApp.getActive();
  const sheetHeaders = sheet.getDataRange().offset(0, 0, 1).getValues()[0];
  return sheetHeaders;
}

function extExecuteSync(func) {
  console.log(`extExec...`);
  console.log(func);
  console.log(`extExec... Resp...`);
  const resp = new Function(func)();
  console.log(resp);
  console.log(`extExec... Resp... Done.`);
  return resp;
}

function test() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createTemplateFromFile(`poc`).evaluate().setTitle(`PoC`)
  );
  // extExec(`
  // const sheet = SpreadsheetApp.getActive();
  // const sheetHeaders = sheet.getDataRange().offset(0, 0, 1).getValues()[0];
  // return sheetHeaders;
  // `);
}