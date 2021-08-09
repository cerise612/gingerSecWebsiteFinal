// local storage initiation
function localStorageSupported() {
    try {
     return "localStorage" in window && window["localStorage"] !== null;
    } catch (e) {
     return false;
    }
   }
   console.log('are you listening local storage...' + localStorage.getItem(localStorage))

// dark mode listener
var checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'selected'),
        localStorage.setItem('theme', 'selected')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'default'),
        localStorage.setItem('theme', 'default')
    }
    console.log('click click boom' + checkbox)
})

// transition from default to selected theme
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
console.log('which theme am I...' + localStorage.getItem('theme'))

// store user preference
var data = localStorage.getItem('theme');
console.log('I have stored...' + localStorage.getItem('theme'))

// stack overflow answer
let prev = localStorage.getItem('theme') || 'default';
document.documentElement.setAttribute('data-theme', prev);
checkbox.checked = prev === 'selected';

// accept cookies button
document.getElementById("cookieButton").addEventListener("click", function() {
    console.log('cookies accepted')
  });

//   mobile navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

// cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

