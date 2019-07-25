const remUnit = 75;
const width = 375;
document.querySelector('html').style.fontSize = remUnit * (window.innerWidth / width) + 'px';
window.addEventListener('resize', () => {
    document.querySelector('html').style.fontSize = remUnit * (window.innerWidth / width) + 'px';
})