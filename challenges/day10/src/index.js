const clockTitle = document.querySelector(".js-clock");

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeap(year) {
  if (year % 400 === 0) return true;
  else if (year % 100 === 0) return false;
  else if (year % 4 === 0) return true;
  else return false;
}

function date365(year, month, date) {
  let result = date;
  for (let i = 0; i < month; i++) result += days[i];
  if (isLeap(year) && month > 1) result++;
  return result;
}

function getClock() {
  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth();
  const currDate = date.getDate();
  const currHours = date.getHours();
  const currMinutes = date.getMinutes();
  const currSeconds = date.getSeconds();
  let currDate365 = date365(currYear, currMonth, currDate);
  let dueDate365 = date365(currYear, 12 - 1, 25);
  let currSeconds86400 = currHours * 3600 + currMinutes * 60 + currSeconds;
  let dueSeconds86400 = 86400;
  if (currDate365 === dueDate365) {
    clockTitle.innerText = "It is Christmas Today!!";
  } else {
    if (currDate365 > dueDate365)
      dueDate365 += 365 + (isLeap(currYear + 1) ? 1 : 0);

    let remainedDates365 = dueDate365 - currDate365 - 1;
    let remainedSeconds86400 = dueSeconds86400 - currSeconds86400;
    if (remainedSeconds86400 === 86400) {
      remainedDates365++;
      remainedSeconds86400 = 0;
    }

    const remainedHours = parseInt(remainedSeconds86400 / 3600, 10);
    const remainedMinutes = parseInt((remainedSeconds86400 % 3600) / 60, 10);
    const remainedSeconds = remainedSeconds86400 % 60;

    const remainedHoursString = String(remainedHours).padStart(2, "0");
    const remainedMinutesString = String(remainedMinutes).padStart(2, "0");
    const remainedSecondsString = String(remainedSeconds).padStart(2, "0");

    clockTitle.innerText = `${remainedDates365}d ${remainedHoursString}h ${remainedMinutesString}m ${remainedSecondsString}s`;
  }
}

getClock();
setInterval(getClock, 1000);
