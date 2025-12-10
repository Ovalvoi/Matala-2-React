import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../App.css';

class ServerLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: []
        };
        this.timerID = null;
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            const newLog = {
                id: uuidv4(),         
                message: "Server Check OK",             
                timestamp: new Date().toLocaleTimeString() 
            };

            console.log('Interval running: Adding new log...');
            console.log('log id:', newLog.id);              

            this.setState(prevState => ({
                logs: [...prevState.logs, newLog]
            }));

        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('Component Unmounted: Timer stopped.');
    }

    render() {
        return (
            <div className='root'>
                <h2>Server Logs</h2>
                <ul>
                    {this.state.logs.map((log) => (
                        <li key={log.id}>
                            {log.timestamp}: {log.message}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ServerLog;