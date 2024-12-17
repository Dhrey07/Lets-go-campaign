// //Mail Script
// function SendMail(){
// 	var params = {
// 		last_name : document.getElementById("last_name").value,
//         phone_number : document.getElementById("phone_number").value,
//         address : document.getElementById("address").value,
//         choice : document.getElementById("choice").value,
// 		from_name : document.getElementById("f_name").value,
// 		email_id : document.getElementById("email_id").value,
// 		message : document.getElementById("message").value,
// 	}
// 	emailjs.send("service_77ebd5b", "template_vu5nbyn", params).then(function (res){
// 		alert("Success! " + res.status);
// 	})
// }


// Countdown target date
const targetDate = new Date('2024-12-26T00:00:00');

// Function to update the countdown
function updateCountdown() {
  const currentDate = new Date();
  const diff = targetDate - currentDate;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = "It's 26th December 2024!";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize countdown
updateCountdown();