// WINDOW LOADER
const loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

// //Script
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
//Scroll At Testimonial Section
function scrolll() {
    var leftMove = document.querySelector(".lets-go-courasel");
    leftMove.scrollBy(-350, 0)
}
function scrollr() {
    var RightMove = document.querySelector(".lets-go-courasel");
    RightMove.scrollBy(350, 0)
}


const newsContainer = document.querySelector('.news-container');

// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'b1ceb852918642249d76c1de446fce9f';
const apiUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;

let newsData = [];
let currentSlide = 0;
let slideInterval;

function fetchNews() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      newsData = data.articles.slice(0, 16);
      displayNews();
      startSlideInterval();
    })
    .catch(error => {
      console.error('Error fetching news data:', error);
    });
}

function displayNews() {
  newsContainer.innerHTML = newsData.map(article => `
    <div class="news-item">
      <div class="news-square">
        <img src="${article.urlToImage}" alt="News Image">
      </div>
      <div class="news-content">
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      </div>
    </div>
  `).join('');
}

function startSlideInterval() {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % newsData.length;
    moveSlide();
  }, 5000); // Change slide every 5 seconds
}

function moveSlide() {
  const slideWidth = document.querySelector('.news-item').offsetWidth;
  newsContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

newsContainer.addEventListener('mouseenter', stopSlideInterval);
newsContainer.addEventListener('mouseleave', startSlideInterval);

fetchNews();
