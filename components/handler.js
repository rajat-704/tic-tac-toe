import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Four from './four';
import Three from './three';
import Fourforthree from './fourforthree';
import Home from './home';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Contact from './ContactComponent';
import Play from './play';

//play Navigator
const PlayNavigator = createStackNavigator(
  {
    Play: { screen: Play }
  }, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#23C4E4",
      paddingLeft: 15
    },
    headerTitleStyle: {
      color: 'white'
    }, headerLeft: <Icon name='menu' size={28}
      color='white'
      onPress={() => navigation.toggleDrawer()}
    />,
    headerTintColor: "#fff"
  })
});

//contact navigator
const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact }
  }, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#23C4E4",
      paddingLeft: 15 
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerLeft: <Icon name='menu' size={28}
      color='white'
      onPress={() => navigation.toggleDrawer()}
    />,
    headerTintColor: "#fff"
  })
});

//menu navigator
const MenuNavigator = createStackNavigator(
  {
    Home: { screen: Home,
        navigationOptions: ({ navigation }) => ({
          headerStyle: {
            backgroundColor: "#23C4E4",
            paddingLeft: 15
          },
          headerTitleStyle: {
            color: "#fff"
          },
          headerLeft: <Icon name='menu' size={28}
            color='white'
            onPress={() => navigation.toggleDrawer()}
          />,
          headerTintColor: "#fff"
        })
    },
    Three: { screen: Three,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#23C4E4",
        },
        headerTitleStyle: {
          color: "#fff"
        },
        headerTintColor: "#fff"
      }) },
    Four: { screen: Four,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#23C4E4",
        },
        headerTitleStyle: {
          color: "#fff"
        },
        headerTintColor: "#fff"
      }) },
    Fourforthree: { screen: Fourforthree,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#23C4E4",
        },
        headerTitleStyle: {
          color: "#fff"
        },
        headerTintColor: "#fff"
      }) }
  }, );

// drawer navigator
const Drawer = createDrawerNavigator({
  Home:
  {
    screen: MenuNavigator,
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'Home',
      drawerIcon: () => (
        <Icon
          name='home'
          type='font-awesome'
          size={22}
          color='#fff'
        />
      ),
    }
  },
  Help:
  {
    screen: PlayNavigator,
    navigationOptions: {
      title: 'Help',
      drawerLabel: 'Help',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name='list'
          type='font-awesome'
          size={22}
          color='#fff'
        />
      ),
    },
  },
  Contact:
  {
    screen: ContactNavigator,
    navigationOptions: {
      title: 'Contact Us',
      drawerLabel: 'Contact Us',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name='address-card'
          type='font-awesome'
          size={22}
          color='#fff'
        />
      ),
    },
  }
}, {
  drawerBackgroundColor: '#23C4E4',
  navigationOptions: {
    headerMode: 'none'
  },
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor :'#ffffff',
     inactiveTintColor :'#ffffff',
  }
});

class Handler extends React.Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#23C4E4'}}>
        <Drawer />
      </View>
    );
  }
}

export default Handler;