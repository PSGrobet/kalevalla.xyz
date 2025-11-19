// set constants for link element and theme toggle button
const themeLink = document.getElementById('themeLink');
const themeBtn = document.getElementById('themeBtn');
// retrieve  saved theme, if not, set to 'dark'
const savedTheme = localStorage.getItem('theme') || 'dark';
let nestString = (window.location.href.includes('more') || window.location.href.includes('blog') || window.location.href.includes('archive')) ? '../' : '';
themeLink.href = `${nestString}${savedTheme}.css`;

if (themeBtn) {themeBtn.textContent = savedTheme === 'dark' ? 'light mode' : 'dark mode';}

if (themeBtn) {themeBtn.addEventListener('click', () => {
    // get the theme from localStorage, or set to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    // if the theme is 'dark' set to 'light' or viceversa
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // change the text in the button
    themeBtn.textContent = themeBtn.textContent === 'dark mode' ? 'light mode' : 'dark mode';
    // set the href attribute to the theme string + '.css'
    themeLink.href = `${nestString}${newTheme}.css`;
    // save new theme in localStorage
    localStorage.setItem('theme', newTheme);
});}