var sec = 0
var min = 0
var hour = 0
var interval

function start() {
  interval = setInterval(cron, 1000)
}

function pause() {
  clearInterval(interval)
}

function stop() {
  clearInterval(interval)

  sec = 0
  min = 0
  hour = 0

  document.getElementById('watch').innerText = '00:00:00'
}

function cron() {
  sec++
  if (sec == 60) {
    min++
    sec = 0

    if (min == 60) {
      hour++
      min = 0
    }
  }
  var format =
    (hour < 10 ? '0' + hour : hour) +
    ':' +
    (min < 10 ? '0' + min : min) +
    ':' +
    (sec < 10 ? '0' + sec : sec)

  document.getElementById('watch').innerText = format
}
