const roles = [
    { name: "FEST COORDINATORS", members: [
        { name: "Aman Kumar", role: "Lead", img: "https://via.placeholder.com/40" },
        { name: "Ritika Singh", role: "Co-Lead", img: "https://via.placeholder.com/40" }
    ]},
    { name: "MARKETING & SPONSORSHIP", members: [{ name: "Aman Kumar", role: "Lead", img: "https://via.placeholder.com/40" },
        { name: "Ritika Singh", role: "Co-Lead", img: "https://via.placeholder.com/40" }] },
    { name: "EVENTS PLANNING", members: [{ name: "Aman Kumar", role: "Lead", img: "https://via.placeholder.com/40" },
        { name: "Ritika Singh", role: "Co-Lead", img: "https://via.placeholder.com/40" }] },
    { name: "REGISTRATION", members: [{ name: "Aman Kumar", role: "Lead", img: "https://via.placeholder.com/40" },
        { name: "Ritika Singh", role: "Co-Lead", img: "https://via.placeholder.com/40" }] },
    { name: "MEDIA & PR", members: [{ name: "Aman Kumar", role: "Lead", img: "https://via.placeholder.com/40" },
        { name: "Ritika Singh", role: "Co-Lead", img: "https://via.placeholder.com/40" }] },
    { name: "TV TEAM", members: [{ name: "Aman Kumar", role: "Lead", img: "https://via.placeholder.com/40" },
        { name: "Ritika Singh", role: "Co-Lead", img: "https://via.placeholder.com/40" }] },
    { name: "E-SPORTS", members: [] },
    { name: "CREATIVE & DESIGN", members: [{ name: "Aman Kumar", role: "Lead", img: "https://via.placeholder.com/40" },
        { name: "Ritika Singh", role: "Co-Lead", img: "https://via.placeholder.com/40" }] },
    { name: "WEB & APP DEVELOPMENT", members: [{ name: "Aman Kumar", role: "Lead", img: "https://via.placeholder.com/40" },
        { name: "Ritika Singh", role: "Co-Lead", img: "https://via.placeholder.com/40" }] },
    { name: "HOSPITALITY & LOGISTICS", members: [{ name: "Aman Kumar", role: "Lead", img: "https://via.placeholder.com/40" },
        { name: "Ritika Singh", role: "Co-Lead", img: "https://via.placeholder.com/40" }] }
];

const wheel = document.getElementById('roleWheel');
const membersContainer = document.getElementById('members');
const sectionTitle = document.getElementById('section-title');

// Place roles in a circle
const wheelRadius = 175; 
const roleAngleStep = 180 / (roles.length - 1); // semicircle from top to bottom

roles.forEach((role, i) => {
  const angle = -90 + i * roleAngleStep; // -90 = top of semicircle
  const rad = (Math.PI / 180) * angle;

  const x = wheelRadius + wheelRadius * Math.cos(rad);
  const y = wheelRadius + wheelRadius * Math.sin(rad);

  const el = document.createElement("div");
  el.className = "role";
  el.innerText = role.name;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.transform = "translate(-50%, -50%)";

  el.addEventListener("click", () => showMembers(role));
  roleWheel.appendChild(el);
});
// Pirate wheel spokes
// Pirate wheel spokes
const spokeCount = 8;  // pirate wheel handles
const spokeLength = 200;

for (let i = 0; i < spokeCount; i++) {
  const angle = (360 / spokeCount) * i;

  const spoke = document.createElement("div");
  spoke.style.position = "absolute";
  spoke.style.width = "22px";
  spoke.style.height = `${spokeLength}px`;
  spoke.style.background = "linear-gradient(black, #9900ffff)";
  spoke.style.left = "0%";
  spoke.style.top = "50%";
  spoke.style.borderRadius = "6px";
  spoke.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
  spoke.style.transformOrigin = "center bottom";
  spoke.style.boxShadow = "0 0 5px rgba(255, 0, 0, 0.7)";

  roleWheel.appendChild(spoke);
}

// Place roles around wheel (outside arc)


function showMembers(role) {
    sectionTitle.textContent = role.name;
    membersContainer.innerHTML = '';
    role.members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `<img src="${member.img}"><div><strong>${member.name}</strong><br><span>${member.role}</span></div>`;
        membersContainer.appendChild(card);
    });
}
function arrangeCardsOnArc() {
  const cards = membersContainer.querySelectorAll('.member-card');
  const cardCount = cards.length;
  if (cardCount === 0) return;

  const arcRadius = 150;  // radius of the arc where cards will sit
  const startAngle = -90; // top of semicircle
  const endAngle = 90;    // bottom
  const angleStep = cardCount > 1 ? (endAngle - startAngle) / (cardCount - 1) : 0;

  cards.forEach((card, i) => {
    const angle = startAngle + i * angleStep;
    const rad = (Math.PI / 180) * angle;
    const x = arcRadius * Math.cos(rad);
    const y = arcRadius * Math.sin(rad);

    card.style.position = 'absolute';
    card.style.left = `${wheelRadius + x}px`;
    card.style.top = `${wheelRadius + y}px`;
    card.style.transform = 'translate(-50%, -50%)';
  });
}
