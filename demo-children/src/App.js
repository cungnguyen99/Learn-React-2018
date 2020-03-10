import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './component/Accordion'
function App() {
  return (
    <div className="App">
      <Accordion heading="Toyota">
        Mercedes-Benz is a German global automobile marque and a division 
        |of Daimler AG. Mercedes-Benz is known for luxury vehicles, vans, trucks, buses, 
        |coaches and ambulances. The headquarters is in Stuttgart, Baden-Württemberg.
      </Accordion>
    </div>
  );
}

export default App;
