import React from 'react';
import { View } from 'react-native';
import Four from './four';
import Three from './three';
import Home from './home';
import { createStackNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Three: { screen: Three },
        Four: { screen: Four }
    }
);

class Handler extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0ff', paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MenuNavigator />
            </View>
        );
    }
}

export default Handler;