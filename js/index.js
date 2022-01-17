let randNumber;
let isModalOpen = false;
let contrastToggle;
history.scrollRestoration = 'manual';

// Fake load time for loader function
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
randNumber = randomIntFromInterval(300, 3500)

function initLoader() {
        document.body.classList.add("stop-scrolling");
    setTimeout(() => {
        document.body.classList.remove("stop-scrolling");
        document.getElementById("loader--wrapper").style.display = "none";
    }, randNumber);
 }

// Dark mode toggle with localstorage implementation
if (localStorage.getItem('darkMode')===null) {
    localStorage.setItem('darkMode', "Dark")
}

function CheckStatus() {
    if (localStorage.getItem('darkMode') === "Dark") {
        enableDarkTheme();
        contrastToggle = true;
    }
    else {
        contrastToggle = false;
        particlesJS.load('particles-js', 'particles-light.json')
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    (contrastToggle && localStorage.getItem('darkMode') === "Light") ? enableDarkTheme() : disableDarkTheme();
}

function enableDarkTheme() {
    document.body.classList += " dark-theme"
    document.getElementById("personal-logo").src = "./assets/logo_inverted.svg";
    localStorage.setItem('darkMode', "Dark");
    particlesJS.load('particles-js', 'particles-dark.json')
}

function disableDarkTheme() {
    document.body.classList.remove("dark-theme")
    document.getElementById("personal-logo").src = "./assets/logo.svg";
    localStorage.setItem('darkMode', "Light")
    particlesJS.load('particles-js', 'particles-light.json')
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_5a1g3gy',
            'template_3upc3jw',
            event.target,
            'user_YUqGOfbhTjX61mJSdOviw'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += " modal__overlay--visible"
        console.log('this worked')
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')
        alert (
            "The email service is temporarily unavailable. Please contact me directly on tahseenislam@outlook.com.au"
        )
    })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;     
    document.body.classList += " modal--open"
}

