let email = document.getElementById("email");
let form = document.querySelector(".form");
let output = document.querySelector(".output");
let close = document.querySelector(".close");
let formwrapper = document.querySelector(".form-wrapper");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value === "") {
    alert("Please enter your name.");
  }

    form.classList.add("validated");
    output.innerHTML = `Thanks for subscribing to our newsletter!`;
    setTimeout(closeNewsLetter, 3000);
});

close.addEventListener("click", function () {
  formwrapper.style.display = "none";
});

let openNewsletter = function () {
  formwrapper.style.display = "flex";
};

function closeNewsLetter() {
  formwrapper.style.display = "none";
}

setTimeout(openNewsletter, 30000);
