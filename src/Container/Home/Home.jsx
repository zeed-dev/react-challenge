import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import OnBoardingPage from "../On Boarding/OnBoardingPage";
import Register from "../Register/Regsiter";
import Splash from '../Splash/Splash';

class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Splash />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/onboarding">
                        <OnBoardingPage />
                    </Route>
                </Switch>
            </BrowserRouter >
        );
    }
}

export default Home;