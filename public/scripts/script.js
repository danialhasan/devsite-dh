/**
 * TODO
 * [] Submit contact form with Axios/Fetch API 
 * [x] Animate buttons and links on hover
 * [x] Animate buttons on click
 */
function navigate(nav, target) {
    if (target !== '_blank') {
        window.location.href = `/${nav}`;
        nameInput.focus()
    } else {
        window.open(nav, target);
    }
}

async function navigateNewPage(page, target) {
    /**
     * Sends a request to the server to serve the specified page. 
     * This will be defunct in the netlify version, its just to develop the 
     * pages on the node version. In the netlify version i'll just use anchor tags 
     * or window.location.href to navigate to the specifed page. 
     */

    fetch('/page_portfolio')
        .then(res => console.log(res))
}

let devMode = true;

const nameInput = document.getElementById('name_input');
const emailInput = document.getElementById('email_input');
const messageInput = document.getElementById('message_input');
const body = document.querySelector('body');
const html = document.querySelector('html');
const menuButton = document.getElementById('menu_button');
const mobileMenu = document.getElementById('mobile_menu');
const mobileMenuList = document.getElementById('mobile_menu_list');
const blurElement = document.getElementById('blurElement');
const mobileMenuBlurScreen = document.getElementById('mobile_menu_blur_screen');
const toggleLightSettingsIcon = document.getElementById('toggle_light_settings');
const resumeDownloadIcon_1 = document.getElementById('resume_download_icon_1');
const resumeDownloadIcon_2 = document.getElementById('resume_download_icon_2');

const header = document.getElementById('header');
const projects = document.getElementById('projects_section');
const logo = document.getElementById('logo');

// style="filter:blur(5px);"
let toggleTracker1 = 0;
let toggleTracker2 = 0;

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    menuButton.parentElement.classList.toggle('-rotate-45');
    body.classList.toggle('overflow-hidden');
    console.log("Menu toggled!");

    if (toggleTracker2 == 0) {
        logo.style.filter = "blur(12px)"
        header.style.filter = "blur(12px)"
        projects.style.filter = "blur(12px)"
        toggleTracker2 = 1
    } else if (toggleTracker2 == 1) {
        logo.style.filter = "blur(0px)"
        header.style.filter = "blur(0px)"
        projects.style.filter = "blur(0px)"
        toggleTracker2 = 0;
    }


    // logo.classList.toggle('background-filter-safari');
    // header.classList.toggle('background-filter-safari');
    // projects.classList.toggle('background-filter-safari');
    // header.classList.toggle('filter');
    // header.classList.toggle('blur-md');

    /**
     * Because background blur is not supported by all backgrounds, 
     * I will blur all elements above the fold that are not the mobileMenu container.
     * This means I will blur #header, #projects_section, and the logo.
     * 

     */
    console.log("Background blurred!");
}

function autofocusForm() {

    nameInput.focus();
    console.log('Autofocused')
}
nameInput.addEventListener('click', () => console.log("Clicked"))
// const contactPrefill = () => {
//     if (devMode) {
//         nameInput.value = 'Danial Hasan';
//         emailInput.value = 'danialhasan@gmail.com';
//         messageInput.value = 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?';
//     }
// }

function toggleLightSettings() {
    console.log('Light mode altered');
    html.classList.toggle('dark'); //activates all dark: classes in document
    //using a manual toggle mechanism since we can't toggle image src
    if (toggleTracker1 == 0) {
        resumeDownloadIcon_1.src = './assets/download_dark.svg';
        resumeDownloadIcon_2.src = './assets/download_dark.svg';
        menuButton.src = './assets/menu_light.svg'
        toggleTracker1 = 1
    } else if (toggleTracker1 == 1) {
        resumeDownloadIcon_1.src = './assets/download_light.svg';
        resumeDownloadIcon_2.src = './assets/download_light.svg';
        menuButton.src = './assets/menu_dark.svg'
        toggleTracker1 = 0
    }
}

// window.onload = contactPrefill;

// mobileMenuList.children[0].addEventListener('click', () => {
//     projects.scrollIntoView({
//         behavior: "smooth"
//     });

//     console.log('Scrolled projects into view');
// })