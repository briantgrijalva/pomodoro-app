import React from 'react';
import Clock from './components/Clock';
import SettingsModal from './components/SettingsModal';


function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="!#">
            <img src={require("./time.png")} alt="" width="30" height="30" className="d-inline-block align-text-top" />
            &nbsp; Pomodoro App
          </a>
        </div>
      </nav>
      <SettingsModal>
        <Clock />
      </SettingsModal>
    </>
  );
}

export default App;
