const currentYearElement = document.getElementById('currentYear');
const lastModifiedElement = document.getElementById('lastModified');

currentYearElement.textContent += ` ${new Date().getFullYear()}`;
lastModifiedElement.textContent = document.lastModified;