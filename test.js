const main = require('./')

const limit = Date.now() - (main.oneday * 28)

const weeks = []
for (const week of main(limit)) {
  weeks.push(week)
}

require('assert').ok(weeks.length = 4)
