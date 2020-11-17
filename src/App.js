import React from 'react';
import './App.css';
import 'h8k-components';

import Mono from './components/Mono';
const title = "Mono app";

function App() {
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Mono />
            </div>
        </div>
    );
}

export default App;
