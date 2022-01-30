import React, { useState, useEffect, useContext } from 'react';
import { useTimer } from 'react-timer-hook';
import { ModalContext } from './SettingsModal';


const Clock = () => {

    const {handleShow, worktime, relaxtime} = useContext(ModalContext);

    {
        const time = new Date();
        
        // time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
        // time.setSeconds(time.getSeconds() + 600);
        time.setSeconds(time.getSeconds() + (60 * worktime)); // 25 minutes
        return (
            <div>
                <MyTimer expiryTimestamp={time} />
            </div>
        );
    }

    function MyTimer({ expiryTimestamp }) {
        const {
          seconds,
          minutes,
          pause,
          resume,
          restart,
        } = useTimer({ expiryTimestamp, onExpire: () => {
            // console.warn('onExpire called'); 
            // setCounter(counter + 1);

            if (timerWorkBolEnd === true) {
                setTimerWorkBolEnd(false);
                // console.log(timerWorkBolEnd);
                
            } else if (timerWorkBolEnd === false) {
                setTimerWorkBolEnd(true);
                // console.log(timerWorkBolEnd);
            };   
        }
    }
    );
    
    const [pauseBol, setPauseBol] = useState(false);
    const [counter, setCounter] = useState(0);
    const [timerWorkBolEnd, setTimerWorkBolEnd] = useState(true);
    const [timerRelaxEnd, setTimerRelaxEnd] = useState();

    useEffect(() => {
        if (pauseBol === true) {
            pause();
        } else {
            resume();
        }; 
       
        // eslint-disable-next-line
    }, [pauseBol]);
    
    useEffect(() => {
        if (timerWorkBolEnd === true) { 
            restarTimerWork();       
        } else if (timerWorkBolEnd === false) {
            restarTimerRelax();
        };

        // eslint-disable-next-line
    }, [timerWorkBolEnd]);

    useEffect(() => {
      if (timerRelaxEnd === true) {
        restarTimerRelax();
      }else if (timerRelaxEnd === false) {
        restarTimerWork();
      };
    
      // eslint-disable-next-line
    }, [timerRelaxEnd]);
    
    
    const onHandlePlayPause = () => {
        if (pauseBol === false) {
            setPauseBol(true);
        } else {
            setPauseBol(false);
        }
        // console.log(pauseBol);
    }

    const restarTimerWork = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + (60 * worktime));
        restart(time);
        setTimerRelaxEnd(false);
    }

    const restarTimerRelax = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + (60 * relaxtime));
        restart(time);
        setTimerRelaxEnd(true);
        setCounter(counter + 0.5); // llega hasta aqui
    }
    
    return ( 

        <div className="container">
            <div className="row">
                <div className="col-12 clock">{minutes}:{seconds}</div>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 sesiones-count">Numero de sesiones: <span>{counter}</span></div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="d-grid gap-2">
                    {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
                        <button
                            type="button"
                            className="btn btn-dark mt-4"
                            onClick={onHandlePlayPause}
                        >
                            Play/Pausar
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="d-grid gap-2">
                        <button 
                            type="button"
                            className="btn btn-dark mt-4"
                            onClick={handleShow}
                        >
                            Ajustes
                        </button>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
        
     );
}

}
 
export default Clock;