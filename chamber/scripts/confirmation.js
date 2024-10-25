const getFormData = (link) => {
  const dataFromLink = link.substring(link.indexOf('?') + 1, link.indexOf('&submit'));
  const dataArray = dataFromLink.split('&')
  const userData = {};

  dataArray.forEach(part => {
    const prop = part.split('=')[0];
    const value = part.split('=')[1];
    userData[prop] = value;
  });
  return userData;
}

const displayUserData = () => {
  const infoContainer = document.getElementById('user-info');
  const user = getFormData(window.location.href);
  const timestamp = new Date(Number(user.timestamp));
  infoContainer.innerHTML = `
    <h2>Submitted Data Review</h2>
    <p>First Name: ${user['first-name']}</p>
    <p>Last Name: ${user['last-name']}</p>
    <p>Email: ${decodeURIComponent(user['email'])}</p>
    <p>Phone: ${user['phone']}</p>
    <p>Organization Title: ${user['org-title']}</p>
    <p>Timestamp from Form: ${timestamp}</p>
  `;
};

displayUserData();