import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';
import { inject, observer } from 'mobx-react';

let Login = inject("authStore")( observer(class Login extends Component {

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.authStore.reset();
    };
    
    handleEmailChange(email) {
        this.props.authStore.setEmail(email);
    };

    handlePasswordChange(password) {this.props.authStore.setPassword(password)};
    handleOrgTagChange(orgTag) {this.props.authStore.setOrgTag(orgTag)};
    
    onLoginPress() {
        this.props.authStore.login()
            .then();
    };

    onRegisterPress() {
        this.props.authStore.register();
    }

    onRegisterOrgPress() {
        this.props.authStore.registerToOrg();
    }

    /**
     * @description Example of a secure API call.
     */
    displayMyUser() {
        this.props.authStore.getUser()
        .then((user)=> {
            console.log('user recieved from API with secure call: ' + JSON.stringify(user));
        }).catch(error=>{
            console.log( 'error in retrieving the user');
        })
    }

    render() {
        const { values, errors, inProgress} = this.props.authStore;
        return (
            // An example of Login in mobile
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput placeholder='Email' value={values.email} onChangeText={(email) => this.handleEmailChange(email)}/>
                <TextInput placeholder='Password' value={values.password} onChangeText={ (password) => this.handlePasswordChange(password)}/>
                <View style={{margin:10}} />
                <Button 
                    onPress={() => this.onRegisterPress()}
                    title="Register"
                />


                <Button 
                    onPress={() => this.onLoginPress()}
                    title="Login"
                />


                <TextInput placeholder='orgTag' value={values.orgTag} onChangeText={(orgTag) => this.handleOrgTagChange(orgTag)}/>
                <Button
                    onPress={() => this.onRegisterOrgPress()}
                    title="Register to organisation"
                />

                {/* <Button style={{margin:10}} onPress={() => this.displayMyUser()} title="Display my user (check logs)"/> */}
            </ScrollView>
            )
    }
}));

export default (Login);