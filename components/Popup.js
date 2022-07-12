export class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_active');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_active');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (event) => {
        if(event.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_active')) {
                this.close();
            }
            if (evt.target.classList.contains('popup__btn-close')) {
                this.close();
            }
        });
    }
}

