let devMode = true;

const nameInput = document.getElementById('name_input');
const emailInput = document.getElementById('email_input');
const messageInput = document.getElementById('message_input');
const body = document.querySelector('body');
const html = document.querySelector('html');
const menuButton = document.getElementById('menu_button');
const mobileMenu = document.getElementById('mobile_menu');
const mobileMenuList = document.getElementById('mobile_menu_list');
const toggleLightSettingsIcon = document.getElementById('toggle_light_settings');
const resumeDownloadIcon_1 = document.getElementById('resume_download_icon_1');
const resumeDownloadIcon_2 = document.getElementById('resume_download_icon_2');

let toggleTracker = 0;

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    menuButton.parentElement.classList.toggle('-rotate-45');
    body.classList.toggle('overflow-hidden');
    console.log("Menu toggled!");
}

function autofocusForm() {
    nameInput.focus();
    console.log('Autofocused')
}
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
    if (toggleTracker == 0) {
        resumeDownloadIcon_1.src = './assets/download_dark.svg';
        resumeDownloadIcon_2.src = './assets/download_dark.svg';
        menuButton.src = './assets/menu_light.svg'
        toggleTracker = 1
    } else if (toggleTracker == 1) {
        resumeDownloadIcon_1.src = './assets/download_light.svg';
        resumeDownloadIcon_2.src = './assets/download_light.svg';
        menuButton.src = './assets/menu_dark.svg'
        toggleTracker = 0
    }
}


// window.onload = contactPrefill;