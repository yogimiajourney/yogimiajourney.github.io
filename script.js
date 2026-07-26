// ===============================
// OUR JOURNEY v1.0
// ===============================

// Greeting berdasarkan waktu
const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 11) {
    greeting.textContent = "☀️ Good Morning";
} else if (hour < 15) {
    greeting.textContent = "🌤️ Good Afternoon";
} else if (hour < 18) {
    greeting.textContent = "🌇 Good Evening";
} else {
    greeting.textContent = "🌙 Good Night";
}


// Semua checkbox
const checkboxes = document.querySelectorAll(".task input");

const progressBar = document.getElementById("progressBar");
const percentText = document.getElementById("percent");

// Load data yang tersimpan
loadProgress();

// Event saat checkbox diubah
checkboxes.forEach((box, index) => {

    box.addEventListener("change", () => {

        localStorage.setItem(
            "task_" + index,
            box.checked
        );

        updateProgress();

    });

});


// Update progress
function updateProgress(){

    let checked = 0;

    checkboxes.forEach(box=>{

        if(box.checked){

            checked++;

        }

    });

    const percent = Math.round(
        checked / checkboxes.length * 100
    );

    progressBar.style.width = percent + "%";

    percentText.textContent = percent + "%";

}


// Load data
function loadProgress(){

    checkboxes.forEach((box,index)=>{

        const saved = localStorage.getItem("task_"+index);

        if(saved==="true"){

            box.checked = true;

        }

    });

    updateProgress();

}


// Easter Egg ❤️
const logo = document.querySelector(".logo");

let tap = 0;

logo.addEventListener("click",()=>{

    tap++;

    if(tap>=7){

        alert("❤️ Thank you for being part of this journey.");

        tap = 0;

    }

});


// Quote acak
const quotes = [

"Every memory begins with a simple hello.",

"The best adventures are together.",

"Little moments, big memories.",

"Our story is just getting started.",

"Home is wherever we're together."

];

const quote = document.querySelector(".quote");

quote.textContent =
quotes[Math.floor(Math.random()*quotes.length)];
