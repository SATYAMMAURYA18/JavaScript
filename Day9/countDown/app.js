let countdownInterval;

function startCountdown() {
  const input = document.getElementById("dateTimeInput").value;
  const targetDate = new Date(input).getTime();

  if (!input) {
    alert("Please select a date and time!");
    return;
  }

  clearInterval(countdownInterval); // reset if already running

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("message").innerText = "⏰ Time's Up!";
      document.getElementById("days").innerText = 0;
      document.getElementById("hours").innerText = 0;
      document.getElementById("minutes").innerText = 0;
      document.getElementById("seconds").innerText = 0;
      return;
    }
//calculating days,hours,minutes and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }, 1000);
}
