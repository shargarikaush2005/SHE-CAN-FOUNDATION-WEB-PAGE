const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("successMsg").innerHTML =
"✅ Form Submitted Successfully!";

form.reset();

});

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter,20);

}
else{
counter.innerText = target + "+";
}

};

updateCounter();

});
