import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            markdown: placeholder,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        event.this.setState()
    }

    render(){
        return(
            <div>
                <h1>This is React</h1>
            </div>
        );
    }
}



const placeholder = '# Welcome to Markdown Previewer!'

ReactDOM.render(<App />, document.getElementById('app'))