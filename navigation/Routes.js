import React from "react";
import {Router, Scene} from "react-native-router-flux";
import {Home} from '../screens/Home';

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Scene key = "root">
                    {/* Home */}
                    <Scene key = "home" component = {Home} title = "Home" initial = {true} />
                    <Scene key = "pricing" component = {Home} title = "Pricing" />
                    <Scene key = "terms" component = {Home} title = "About" />
                    <Scene key = "protectingYourData" component = {Home} title = "About" />

                    {/* Login */}
                    <Scene key = "login" component = {Home} title = "About" />

                    {/* Wingzy creation */}
                    <Scene key = "wingzyIntro" component = {Home} title = "About" />
                    <Scene key = "wingzyCreate" component = {Home} title = "About" />
                    <Scene key = "wingzyCongratulations" component = {Home} title = "About" />

                    {/* Onboarding */}
                    <Scene key = "onboardWelcome" component = {Home} title = "About" />
                    <Scene key = "onboardIntro" component = {Home} title = "About" />
                    <Scene key = "onboardHashtags" component = {Home} title = "About" />
                    <Scene key = "onboardLinks" component = {Home} title = "About" />

                    {/*  Invitation */}
                    <Scene key = "invite" component = {Home} title = "About" />

                    {/* Profile management */}
                    <Scene key = "profile" component = {Home} title = "About" />
                    <Scene key = "profileEdit" component = {Home} title = "About" />

                    {/* Search */}
                    <Scene key = "search" component = {Home} title = "About" />

                    {/* Admin */}
                    <Scene key = "adminOrganisation" component = {Home} title = "About" />
                    <Scene key = "adminUserList" component = {Home} title = "About" />
                </Scene>
            </Router>
        );
    }
}