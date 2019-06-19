import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
// import Dashboard from '../../routes/Dashboard/Dashboard'
// import ProfileSettings from '../../routes/ProfileSettings/ProfileSettings'
// import Notifications from '../../routes/Notifications/Notifications'

class App extends Component {
    
  render() {
    return (
      <div className='App'>
        <header className='App_navigation'>
          <Navigation />
        </header>
        <main className='App_main'>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              path={'/login'}
              component={LoginPage}
            />
            <Route
              path={'/register'}
              component={RegisterPage}
            />
            {/* <Route
              path={'/dashboard'} 
              component={Dashboard}
            />
            <Route
              path={'/settings'}
              component={ProfileSettings}
            />
            <Route
              path={'/notifications'}
              component={Notifications}
            />
            <Route 
              path={'/guest'}
              component={GuestPage} 
            />        
            <Route
              component={NotFoundPage}
            />   */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;