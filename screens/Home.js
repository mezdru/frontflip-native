import React from 'react'
import { TouchableOpacity, Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Login from './Login';

export class Home extends React.Component {
    goToPricing(){
        Actions.pricing()
    }

    render(){
        return(    
            <View>
                <Login />
                <TouchableOpacity style = {{ margin: 128 }} onPress = {this.goToPricing}>
                    <Text>This is HOME!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}