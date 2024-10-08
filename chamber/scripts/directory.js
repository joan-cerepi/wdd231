const memberCards = document.getElementById('member-cards');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');

const displayMembers = (members) => {
  const fragment = document.createDocumentFragment();
  members.forEach(member => {
    const section = document.createElement('section');
    section.className = 'member';
    section.innerHTML = `
      <img src="${member.images.image}" alt="${member.name}" width="250" height="250" loading="lazy">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      <p>Level = ${member.membership}</p>
    `;
    fragment.appendChild(section);
  });
  memberCards.innerHTML = '';
  memberCards.appendChild(fragment);
};

const getMembers = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Network response was not ok');
    const memberData = await response.json();
    displayMembers(memberData.members);
  } catch (error) {
    console.error('Fetching error:', error);
  }
};

const toggleView = (activeBtn, inactiveBtn, viewClass) => {
  activeBtn.classList.add('active-btn');
  inactiveBtn.classList.remove('active-btn');
  memberCards.className = viewClass;
};

gridViewBtn.addEventListener('click', () => toggleView(gridViewBtn, listViewBtn, 'show-grid'));
listViewBtn.addEventListener('click', () => toggleView(listViewBtn, gridViewBtn, 'show-list'));

getMembers('./members.json');