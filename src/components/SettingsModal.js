import React, {createContext, useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';

export const ModalContext = createContext();

const SettingsModal = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialForm = {
        worktime: 25,
        relaxtime: 5
    }

    const [ {worktime, relaxtime}, handleInputChange ] = useForm( initialForm );
    return (           
        <>
        <ModalContext.Provider
            value={{
                handleClose,
                handleShow,
                setShow,
                show,
                worktime,
                relaxtime
            }}
        >
            {props.children}
            
        </ModalContext.Provider>
        {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button> */}
        
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label className="form-label" htmlFor="customRange3"> Duración de la sesión de trabajo</label>
                <span> {worktime}</span>
                <input 
                    type="range" 
                    className="form-range" 
                    min="5" 
                    max="60" 
                    step="5" 
                    id="customRange3"
                    name="worktime"
                    value={worktime}
                    onChange={handleInputChange}
                />

                <label className="form-label" htmlFor="customRange3relax">Duración del descanso </label>
                <span> {relaxtime}</span>
                <input 
                    type="range" 
                    className="form-range" 
                    min="1" 
                    max="25" 
                    step="1" 
                    id="customRange3relax"
                    name="relaxtime"
                    value={relaxtime}
                    onChange={handleInputChange}
                />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="dark" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
     );
}
 
export default SettingsModal;