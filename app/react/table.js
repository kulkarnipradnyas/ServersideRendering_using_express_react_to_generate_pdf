import React, { Component } from 'react';
import style from '../public/index.css'



class Table extends Component {
 

  render() {
    return (

            
            <div className={style.app}>                
                <header className="App-header">
                <h1 className={style.app}>Welcome to React</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button > PDF Download</button>
            
            </div>
           
     )
  }
}

export default Table;
