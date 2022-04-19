import React from 'react';
import ReacDOM from 'react-dom';

class App extends React.Component{

    render(){
        return(
            <h1>this is React!</h1>
        )
    }
}

ReacDOM.render(<App />, document.getElementById('root'));