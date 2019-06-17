import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Navigation/Navigation'

class App extends Component {
  
  
  
  render() {
    return (
      <main className='App'>
        <header className='App_navigation'>
          <Navigation />
        </header>
      </main>
    );
  }
}

export default App;