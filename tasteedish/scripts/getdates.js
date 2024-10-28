const displayCurrentYear = () => {
  const currentYear = document.querySelector('.current-year');
  const d = new Date();
  currentYear.textContent = d.getFullYear();
};

export { displayCurrentYear };