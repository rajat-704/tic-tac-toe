import React from 'react';
import { View } from 'react-native';
import Four from './four';
import Three from './three';
import Home from './home';
import { createStackNavigator,createDrawerNavigator } from 'react-navigation';

//menu navigator
const MenuNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Three: { screen: Three },
        Four: { screen: Four }
    }
);

// drawer navigator
const Drawer = createDrawerNavigator({
    Home: 
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home'
        }
      },
      Help: 
      { screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        },
      },
      Contact: 
      { screen: 'Contact',
        navigationOptions: {
          title: 'Contact Us',
          drawerLabel: 'Contact Us'
        }, 
      }
  }, {
  drawerBackgroundColor: '#23C4E4',
  });

class Handler extends React.Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Drawer />
            </View>
        );
    }
}

export default Handler;