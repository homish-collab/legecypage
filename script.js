
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
const radius = 180;
roles.forEach((role, i) => {
    const angle = (i / roles.length) * 2 * Math.PI;
    const x = radius + radius * Math.cos(angle);
    const y = radius + radius * Math.sin(angle);
    
    const el = document.createElement('div');
    el.className = 'role';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.textContent = role.name;
    el.addEventListener('click', () => showMembers(role));
    wheel.appendChild(el);
});

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
