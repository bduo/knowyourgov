import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import LandingPage from '../../pages/LandingPage/LandingPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
import GuestPage from '../../pages/GuestPage/GuestPage'
import AppProvider from '../AppProvider/AppProvider';
// import Dashboard from '../../routes/Dashboard/Dashboard'
// import ProfileSettings from '../../routes/ProfileSettings/ProfileSettings'
// import Notifications from '../../routes/Notifications/Notifications'

class AppRouter extends Component {
    
  render() {
    return (
      <div className='AppRouter'>
        <header className='App_navigation'>
          <Navigation />
        </header>
        <main className='App_main'>
          <Switch>
            <AppProvider>
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
            /> */}
            <Route 
              path={'/guest'}
              component={GuestPage} 
            />        
            {/* <Route
              component={NotFoundPage}
            />   */}
            </AppProvider>
          </Switch>
        </main>
      </div>
    );
  }
}

export default AppRouter;