// Cache DOM.
const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-content');
const membershipLinks = document.querySelectorAll('.membership-link');

const updateModalContent = (content) => {
  const span = document.createElement('span');
  const paragraph = document.createElement('p');

  // Set attributes to HTML tags.
  span.setAttribute('class', 'close');

  // Set content of HTML tags.
  span.innerHTML = '&times;';
  paragraph.textContent = content;

  modalContent.innerHTML = '';
  modalContent.appendChild(span);
  modalContent.appendChild(paragraph);

  span.onclick = () => modal.style.display = 'none';
  modal.style.display = 'block';
};

membershipLinks.forEach(membershipLink => {
  membershipLink.addEventListener('click', (event) => {
    const target = event.target;
    event.preventDefault();

    const nonProfitContent = 'Our NP Membership is specifically designed for non-profit organizations looking to connect with the community and enhance their visibility. Enjoy access to valuable resources, networking opportunities, and a platform to promote your mission—all at no cost. Join us to collaborate with fellow non-profits and make a greater impact together!';
    const bronzeContent = 'The Bronze Membership is perfect for small businesses and start-ups looking to establish their presence in the community. With this entry-level membership, you’ll benefit from promotional opportunities, access to networking events, and inclusion in our online directory. Take the first step in growing your business and connecting with local resources!';
    const silverContent = 'Upgrade to our Silver Membership to unlock additional benefits tailored for growing businesses. Enjoy all the advantages of Bronze Membership, plus enhanced visibility through featured listings, priority access to events, and exclusive educational workshops. Additionally, your company will be showcased on the chamber of commerce homepage, giving you increased exposure to the community. Strengthen your network and position your business for success with this dynamic membership level!';
    const goldContent = 'Our premier Gold Membership offers the ultimate package for established businesses aiming to maximize their influence and outreach. In addition to all Silver Membership benefits, you’ll receive personalized marketing support, priority speaking opportunities at events, and access to exclusive leadership forums. As a Gold Member, your company will be prominently showcased on the chamber of commerce homepage, ensuring maximum visibility and engagement with potential clients. Elevate your business’s profile and drive growth through strategic connections and resources tailored for your success!';
  
    target.classList.contains('non-profit-link') ? updateModalContent(nonProfitContent) :
    target.classList.contains('bronze-link') ? updateModalContent(bronzeContent) :
    target.classList.contains('silver-link') ? updateModalContent(silverContent) :
    updateModalContent(goldContent);
  })
});

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};