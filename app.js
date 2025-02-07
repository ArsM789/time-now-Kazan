window.addEventListener("load", tim);

function tim() {
  let mouth = new Date();
  let dayNow = new Date();


  arrDay = [
    "Воскресенье",
    "Понидельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  const dayWek = document.getElementById("dayWek");
  const dayNum = document.getElementById('den');
  const mes = document.getElementById('mes')

  arrMes = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря'
  ];

  let dayNumNow = dayNow.getDate();
  dayNum.textContent = dayNumNow;

  let mesNow = arrMes[mouth.getMonth()];
  mes.textContent = mesNow

  let days = arrDay[dayNow.getDay() ];
  dayWek.textContent = days;

  let cha = new Date();
  let min = new Date();
  let sec = new Date();

  let m = min.getMinutes().toString();

  let hour = cha.getHours().toString();

  if(hour.length === 1) {
    hour = "0"+hour;
  }

  if (m.length === 1) {
    m = "0" + m;
  }

  let s = sec.getSeconds().toString();

  if (s.length === 1) {
    s = "0" + s;
  }

  const time = document.getElementById("time");

  time.textContent = hour + ":" + m + ":" + s;

  window.setTimeout(tim, 1000);
}

const alertWindow = document.getElementById("alertPush");
const btnSub = document.getElementById("button-sub");
const btnNo = document.getElementById("button-no");

