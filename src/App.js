import React from 'react';
import Clock from './components/Clock';
import SettingsModal from './components/SettingsModal';
import logo from './time.png';


function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top" />
            &nbsp; Pomodoro App
          </div>
        </div>
      </nav>
      <SettingsModal>
        <Clock />
      </SettingsModal>
    </>
  );
}

export default App;
