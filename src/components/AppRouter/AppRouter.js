import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import LandingPage from '../../pages/LandingPage/LandingPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
import GuestPage from '../../pages/GuestPage/GuestPage'
import Dashboard from '../../pages/Dashboard/Dashboard'
import PrivateRoute from '../../helpers/PrivateRoute'
import PublicRoute from '../../helpers/PublicRoute'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
// import ProfileSettings from '../../routes/ProfileSettings/ProfileSettings'
// import Notifications from '../../routes/Notifications/Notifications'

class AppRouter extends Component {
    state = { 
      errorPresent: false,
      isLoggedIn: false 
    }
    
    static getDerivedStateFromError(error) {
      console.error(error)
      return { errorPresent: true }
    }

  render() {
    return (
      <div className='AppRouter'>
          <header className='App_navigation'>
            <Navigation />
          </header>
          <main className='App_main'>
            {this.state.errorPresent && <p className='red'>We have an error! Please try again!</p>}
            <Switch>
              <Route
                exact
                path={'/'}
                component={LandingPage}
              />
              <PublicRoute
                path={'/login'}
                component={LoginPage}
              />
              <PublicRoute
                path={'/register'}
                component={RegisterPage}
              />
              <PrivateRoute
                path={'/dashboard'} 
                component={Dashboard}
              />
              {/* <PrivateRoute
                path={'/settings'}
                component={ProfileSettings}
              />
              <PrivateRoute
                path={'/notifications'}
                component={Notifications}
              /> */}
              <PublicRoute 
                path={'/guest'}
                component={GuestPage} 
              />        
              <Route
                component={NotFoundPage}
              />
          </Switch>
        </main>
      </div>
    );
  }
}

export default AppRouter;