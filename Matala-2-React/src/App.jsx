import React, { Component } from 'react';
import ServerLog from './CComponents/ServerLog.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showServerLog: true
    };
  }

  toggleServerLog = () => {
    this.setState(prevState => ({
      showServerLog: !prevState.showServerLog
    }));
  };

  render() {
    return (
      <div className='root'>
        <h1>Matala-2-React</h1>
        <h3>Component Life Cycle</h3>
        <hr />
        <button onClick={this.toggleServerLog}>
          {this.state.showServerLog ? 'Hide & Stop Server Monitor' : 'Show & Start Server Monitor'}
        </button>
        {this.state.showServerLog && <ServerLog />}
        
      </div>
    );
  }
}

export default App;