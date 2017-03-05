const timeFormt = (time) => {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = add0(date.getMonth() + 1)
  let day = add0(date.getDate())
  let hours = add0(date.getHours())
  let minutes = add0(date.getMinutes())

  return `${year}-${month}-${day} ${hours}:${minutes}`

  function add0(num) {
    return num > 10 ? num : '0' + num
  }
}

export {
  timeFormt
}
