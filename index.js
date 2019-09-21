const oneday = 1000 * 60 * 60 * 24

const previousMonday = () => {
  const now = new Date()
  const day = now.getDay()
  let prev
  /* istanbul ignore next */
  if (now.getDay() === 0) {
    prev = new Date().setDate(now.getDate() - 7)
  } else {
    prev = new Date().setDate(now.getDate() - day)
  }
  const str = (new Date(prev)).toISOString().slice(0, 10)
  return (new Date(str)).getTime()
}

module.exports = function * (limit) {
  let last = previousMonday()
  while (last > limit) {
    yield last
    last -= (oneday * 7)
  }
}
module.exports.oneday = oneday
