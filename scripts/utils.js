export function openPopup(element) {
    element.classList.add('popup_opened');
    document.addEventListener('keyup', handleKeyUp);
};

const handleKeyUp = (evt) => {
    if (evt.key === 'Escape') {
        const openPopupModal = document.querySelector('.popup_opened');
        closePopup(openPopupModal);
    }
};