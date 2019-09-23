# the mondays

A generator that yields every monday from now until a specific cutoff.

```javascript
const main = require('./')

const limit = Date.now() - (main.oneday * 28)

const weeks = []
for (const week of main(limit)) {
  weeks.push(week)
}
console.log(weeks)
```

The times are yielded as integers since that is what is best for performance. They
can easily be converted to a datetime object with `new Date(week)`.

