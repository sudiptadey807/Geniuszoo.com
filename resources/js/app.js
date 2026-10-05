import './bootstrap';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
}));

const massInput = document.querySelector('#massInput');
const energyResult = document.querySelector('#energyResult');
document.querySelector('#energyButton')?.addEventListener('click', () => {
    const mass = Number(massInput.value);
    if (!Number.isFinite(mass) || mass < 0) {
        energyResult.textContent = 'Enter a non-negative mass to calculate.';
        return;
    }
    const energy = mass * 299_792_458 ** 2;
    energyResult.innerHTML = `E = ${energy.toExponential(3)} <span>joules of energy</span>`;
});

document.querySelectorAll('#elementGrid button').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('#elementGrid button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelector('#elementInfo').innerHTML = `<strong>${button.dataset.name}:</strong> ${button.dataset.fact}`;
}));

const topicTrack = document.querySelector('#topicTrack');
document.querySelector('#topicPrev')?.addEventListener('click', () => topicTrack.scrollBy({ left: -topicTrack.clientWidth * 0.8, behavior: 'smooth' }));
document.querySelector('#topicNext')?.addEventListener('click', () => topicTrack.scrollBy({ left: topicTrack.clientWidth * 0.8, behavior: 'smooth' }));
