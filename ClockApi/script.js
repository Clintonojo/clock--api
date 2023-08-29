
function getCurrentTime() {
  fetch('http://worldtimeapi.org/api/ip')
    .then(response => response.json())
    .then(data => {
      const currentTime = data.datetime;
      displayCurrentTime(currentTime);
    })
    .catch(error => {
      console.error('Error fetching time:', error);
    });
}

function displayCurrentTime(time) {
  const timeElement = document.getElementById('current-time');
  timeElement.textContent = time;
}

getCurrentTime(); // call getCurrentTime() to display the current time on page load

