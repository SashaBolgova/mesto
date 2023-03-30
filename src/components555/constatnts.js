const graficLinkList = [
   "https://snapshots.raintank.io/dashboard/snapshot/TWagoaS6E5itZbCqxmlYTbpCIO0OQzUN",
   "https://snapshots.raintank.io/dashboard/snapshot/YMlT2T59bvCSoIzb7EN4bF5BpcwX8BnT",
   "https://snapshots.raintank.io/dashboard/snapshot/ktQDMRANfmrXhELzDJ3bRD0hYjhl5tKU",
   "https://snapshots.raintank.io/dashboard/snapshot/DpsH9vmzWjzJOYPW46O3Ie0RKnKoqwi4",
   "https://snapshots.raintank.io/dashboard/snapshot/Pn7B90hZtCBZLLXrfyosljMzkET2jy3D",
   "https://snapshots.raintank.io/dashboard/snapshot/dVPpjm89hUwuxt2P4oJgazJBBLXU6IMe",
   "https://snapshots.raintank.io/dashboard/snapshot/fWiGmyVktY5o84sapG75RUXQkumNognK",
]

const graficWindow = document.querySelector('.grafics__grafana');
const rightButton = document.querySelector('.grafics__next_left');

let i = 0;

rightButton.addEventListener('click', function () {
    if (i === graficLinkList.length-1) {
        i = 0;
    } else {
        i++
    }
    graficWindow.src = graficLinkList[i];
})

const leftButton = document.querySelector('.grafics__next_right');

leftButton.addEventListener('click', function () {
    if (i <= 0) {
        i = graficLinkList.length-1;
    } else {
        i--
    }
    graficWindow.src = graficLinkList[i];
})

const videoLinkList = [
    "https://www.youtube.com/embed/jbqT0fTj088"
]

const videoButton = document.querySelector('.grafics__on_video');

videoButton.addEventListener('click', function() {
    graficWindow.src = videoLinkList[0];
    leftButton.classList.add('grafics__next_disable');
    rightButton.classList.add('grafics__next_disable');
})

const diagramsLinkList = [
    "https://snapshots.raintank.io/dashboard/snapshot/cv717BytYCbQtTsGbry4STmyFT4ZYMYG"
]

const diagramButton = document.querySelector('.grafics__on_diagramm');

diagramButton.addEventListener('click', function() {
    graficWindow.src = diagramsLinkList[0];
    leftButton.classList.add('grafics__next_disable');
    rightButton.classList.add('grafics__next_disable');
})

const graficButton = document.querySelector('.grafics__on_grafic');
graficButton.addEventListener('click', function() {
    let i = 6;
    graficWindow.src = graficLinkList[i];
    leftButton.classList.remove('grafics__next_disable');
    rightButton.classList.remove('grafics__next_disable');
})