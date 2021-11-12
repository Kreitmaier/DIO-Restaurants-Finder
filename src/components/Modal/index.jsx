import React, { useEffect } from 'react';

import Portal from './Portal';

import { Overlay, Diaglog } from './styles';


const Modal = ({ children, open, onClose }) => {

    useEffect(()=> {
        function onEsc(e){
            if(e.keyCode === 27) onClose();
        }

        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        };
    }, [onClose]);

    if(!open) return null;

    function onOverlayClick(){
        onClose();
    }

    function onDialogClick(e){
        e.stopPropagation();
    }
    return(
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Diaglog onClick={onDialogClick}>{ children }</Diaglog>
            </Overlay>
        </Portal>
    );
}

export default Modal;