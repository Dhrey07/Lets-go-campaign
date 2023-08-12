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