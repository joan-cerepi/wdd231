const welcomeUser = () => {
  // DOM
  const visitorCard = document.querySelector('.visitor-card');
  const userVisit = document.querySelector('.user-visit');

  // VARIABLES
  const dateNow = Date.now();
  const millisecondsInDay = 86400000;
  let lastVisitDate = localStorage.getItem('lastVisitDate');

  if (!lastVisitDate) {
    localStorage.setItem('lastVisitDate', Date.now());
    userVisit.textContent = 'New Visitor';
    visitorCard.innerHTML += '<p>Welcome! Let us know if you have any questions.</p>';
  
  } else {
    lastVisitDate = parseInt(lastVisitDate);
    const millisecondsToDays = Math.floor(dateNow / millisecondsInDay);
    
    userVisit.textContent = 'Returning User';
    dateNow - lastVisitDate < millisecondsInDay ? visitorCard.innerHTML += '<p>Back so soon! Awesome!</p>' :
    millisecondsInDay === 1 ? visitorCard.innerHTML += `<p>You last visited ${millisecondsToDays} day ago.</p>` :
    visitorCard.innerHTML += `<p>You last visited ${millisecondsToDays} days ago.</p>`;

    const d = new Date(lastVisitDate);
    const lastVisitDay = d.getDate();
    const lastVisitMonth = d.getMonth() + 1;
    const lastVisitYear = d.getFullYear();
    visitorCard.innerHTML += `<p>Date of Last Visit: ${lastVisitMonth}/${lastVisitDay}/${lastVisitYear}</p>`;
  }
};

welcomeUser();