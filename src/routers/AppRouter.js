import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import {firebase} from '../firebase/firebaseConfig'
import {useDispatch} from 'react-redux'
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute} from './PublicRoute'


export const AppRouter = () => {
  const dispatch = useDispatch()

  const [checking, setchecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

useEffect(() => {
  firebase.auth().onAuthStateChanged((user)=>{

    if(user?.uid){
      dispatch(login(user.uid,user.displayName))
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    setchecking(false)
  })

}, [dispatch])

if ( checking) {
  return(
    <h1>Please wait...</h1>
  )
}
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}

                    />
                    <PrivateRoute
                        exact
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={JournalScreen}

                    />

                    <Redirect
                        to="/auth/login"
                    />
                </Switch>
            </div>

        </Router>
    )
}
