import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DigitalClockWithButton from './DigitalClockWithButton';
import Counter from './Counter';
import './index.css';
import DigitalAutomaticClock from './DigitalAutomaticClock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>
        <App />
        {/* <DigitalAutomaticClock /> */}
        {/* <DigitalClockWithButton /> */}
        {/* <Counter /> */}
        </>
    </React.StrictMode>
)










// OLD METHOD
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <>
//     <h1>abcd</h1>
//     </>,
//     document.getElementById('root')
// );