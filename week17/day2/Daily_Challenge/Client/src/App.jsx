import React, { Component } from 'react';
import './App.css'

class GetMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: null,
      inputValue: '',
      response: null
    };
  }

  componentDidMount() {
    console.log("Component has mounted to the DOM.");

    fetch('http://localhost:5000/api/hello')
      .then(response => response.json())
      .then(data => this.setState({ greeting: data.message }));
  }

  handleSubmit = async () => {
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: this.state.inputValue })
    });
    const data = await response.json();
    this.setState({ response: data.message });
  }

  render() {
    return (
      <>
        <h1>{this.state.greeting}</h1>
        <input
          value={this.state.inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
        /> <button onClick={this.handleSubmit}>Submit</button><br />
        <div>{this.state.response}</div>
      </>
    );
  }
};



function App() {
  return (
    <>
      <GetMessage />
    </>
  )
};

export default App;