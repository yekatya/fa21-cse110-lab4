function currentDate() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
setInterval(currentDate, 1000);
