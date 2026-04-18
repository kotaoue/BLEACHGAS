# BLEACHGAS

A Google Apps Script (GAS) Slack bot that randomly posts opening poems from the manga *BLEACH*.

## Overview

BLEACHGAS is a Slack slash command bot built on Google Apps Script. It reads the chapter-opening poems from the manga *BLEACH* stored in a Google Spreadsheet and posts a randomly selected poem to Slack when invoked.

### How it works

1. Poem data (number, title, poem text, author) is stored in a Google Spreadsheet.
2. The GAS `doPost` function is exposed as a Web App endpoint and acts as the Slack slash command handler.
3. When the slash command is triggered, the bot picks a random row from the spreadsheet and formats a reply based on the optional `text` parameter:

| `text` parameter | Response format |
|---|---|
| `full` | Number, title (bold), poem (code block), and author (italic) |
| `poem` | Poem text only |
| `title` | Title only |
| *(omitted)* | Title (bold) and poem text |

4. The response is sent back to Slack as an in-channel message via the `response_url`.

### Repository structure

```
src/
└── main.js   # GAS source: doPost handler and utility functions
```

The project is managed and deployed with [google/clasp](https://github.com/google/clasp).

## Links

- [ブリーチ巻頭ポエム (Spreadsheet)](https://docs.google.com/spreadsheets/d/1Lo3sj4rmw15TmU5mPsU2z4YUuaFpAlhKIkWjOzoRwfE)
  - [GAS Project](https://script.google.com/home/projects/1jBq5s0CVw4y7eiKV1P0KbSFpc0R3NKIfCpl7JatYEVK-K4JNBz_yLQrz)
- [google/clasp](https://github.com/google/clasp)
