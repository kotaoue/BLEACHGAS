function testDoPost() {
  doPost({ 'parameter': { 'text': 'full' } });
  doPost({ 'parameter': { 'text': 'poem' } });
  doPost({ 'parameter': { 'text': 'title' } });
  doPost({ 'parameter': { 'text': '' } });
  doPost({ 'parameter': { 'text': '', 'payload': '' } });
}

function doPost(e) {
  console.log(e);

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const min = 2;
  const max = sheet.getLastRow();

  const row = Math.floor(Math.random() * (max - min)) + min;
  const no = sheet.getRange(row, 1).getValue();
  const title = sheet.getRange(row, 2).getValue();
  const poem = sheet.getRange(row, 3).getValue();
  const name = sheet.getRange(row, 4).getValue();

  let text = "";
  switch (e.parameter.text) {
    case 'full':
      text = '*' + no + '. ' + title + '*\n\n```' + poem + '```\n\n_' + name + '_';
      break;
    case 'poem':
      text = poem;
      break;
    case 'title':
      text = title;
      break;
    default:
      text = '*' + title + '*\n\n' + poem;
  }
  console.log(text);

  const payload = {
    "response_type": "in_channel",
    "replace_original": false,
    "text": text
  };

  if (e.parameter.response_url) {
    const options = {
      "method": "post",
      "payload": JSON.stringify(payload)
    };
    console.log(e.parameter.response_url);
    UrlFetchApp.fetch(e.parameter.response_url, options);
  }

  // メッセージは空で返す
  return ContentService.createTextOutput();
  // return ContentService.createTextOutput(text);
}

function main() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  let titles = "";
  let poems = "";
  let text = "";
  for (let i = 2; i <= sheet.getLastRow(); i++) {
    const no = sheet.getRange(i, 1).getValue();
    const title = sheet.getRange(i, 2).getValue();
    const poem = sheet.getRange(i, 3).getValue().replace(/\n/g, '\\n');
    titles += title + '\n';
    poems += poem + '\n';
    text += no + ' ' + title + '\\n' + poem + '\n';
  }
  console.log(titles);
  console.log(poems);
  console.log(text);
}
