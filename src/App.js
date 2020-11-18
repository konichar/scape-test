import React from 'react';
import './App.css';
import 'h8k-components';

import Mono from './components/Mono';
const title = "Mono app";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFormValid: false
        };
    }

    render(){
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="App">
                    <Mono isFormValid={this.state.isFormValid}/>
                </div>
            </div>
        );
    }
}

export default App;
