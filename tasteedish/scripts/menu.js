// add classes for mobile navigation toggling
const TDbody = document.querySelector("body");
const TDnavbarMenu = document.querySelector("#td-navigation");
export const TDhamburgerMenu = document.querySelector("#td-navigation .td-toggle");

export const menuToggles = () => {
    TDhamburgerMenu.classList.toggle("td-active");
    TDnavbarMenu.classList.toggle("td-active");
    TDbody.classList.toggle("td-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
};

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar
export const scroll = () => {
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
        document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
};

// checks the value of aria expanded on the td-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const TDUL = document.querySelector('#td-expanded');
    const TDExpanded = TDUL.getAttribute('aria-expanded');

    if (TDExpanded === 'false') {
        TDUL.setAttribute('aria-expanded', 'true');
    } else {
        TDUL.setAttribute('aria-expanded', 'false');
    }
}