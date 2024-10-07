const memberCards = document.getElementById('member-cards');

const displayMembers = (members) => {
  let html = '';
  members.forEach(member => {
    html += `
    <section class="member">
      <img src="${member.images.image}" alt="${member.name}" width="250" height="250" loading="lazy">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      <p>Level = ${member.membership}</p>
    </section>
    `;
  });
  memberCards.innerHTML = html;
};

const getMembers = async (path) => {
  try {
    const response = await fetch(path);
    const memberData = await response.json();
    displayMembers(memberData.members);
  } catch (error) {
    console.error('Fetching error:', error);
  }
};

getMembers('./members.json');

const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');

gridViewBtn.addEventListener('click', () => {
  gridViewBtn.classList.contains('active-btn') ? '' : gridViewBtn.classList.add('active-btn');
  listViewBtn.classList.contains('active-btn') ? listViewBtn.classList.remove('active-btn') : '';
  memberCards.getAttribute('class') !== 'show-grid' ? memberCards.setAttribute('class', 'show-grid') : '';
});

listViewBtn.addEventListener('click', () => {
  gridViewBtn.classList.contains('active-btn') ? gridViewBtn.classList.remove('active-btn') : '';
  listViewBtn.classList.contains('active-btn') ? '' : listViewBtn.classList.add('active-btn');
  memberCards.getAttribute('class') !== 'show-list' ? memberCards.setAttribute('class', 'show-list') : '';
});