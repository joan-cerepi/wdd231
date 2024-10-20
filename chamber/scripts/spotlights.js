const spotlights = document.getElementById('spotlights');

const displaySpotlights = (members) => {
  const goldMembers = members.filter(member => member.membership === "3 (Gold)" || member.membership === "2 (Silver)");
  const randNumsPicked = [];
  let html = '';
  
  while (randNumsPicked.length < 3 && randNumsPicked.length < goldMembers.length) {
    const randomNumber = Math.floor(Math.random() * goldMembers.length);
    if (randNumsPicked.includes(randomNumber)) continue;
    randNumsPicked.push(randomNumber);
  }
  
  randNumsPicked.forEach(randNum => {
    const goldMember = goldMembers[randNum];
    html += `
      <section class="gold-member-card">
        <h2>${goldMember.name}</h2>
        <img src="${goldMember.images.image}" alt="${goldMember.name}" width="50" height="50" loading="lazy">
        <p>${goldMember.phone}</p>
        <p>${goldMember.address}</p>
        <p><a href="${goldMember.website}" target="_blank">Website</a></p>
        <p>Level ${goldMember.membership}</p>
      </section>
    `;
  });

  spotlights.innerHTML = html;
};

const getRandomSpotlights = async (path) => {
  const response = await fetch(path);
  try {
    if (!response.ok) throw Error('Something went wrong with response from network.');
    const memberData = await response.json();
    displaySpotlights(memberData.members);
  } catch (error) {
    console.log(error);
  }
};

getRandomSpotlights('./members.json');