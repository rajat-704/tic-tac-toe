import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

class home extends React.Component {

    
    static navigationOptions = {
        title: 'TIC-TAC-TOE',
        headerStyle: {
            backgroundColor: '#23C4E4'
        }
    };

    render() {
        return (
            <View style={styles.container}>
            <View>
                <Text style={{color: '#23C4E4', fontSize: 24, marginLeft: 10, fontWeight: "bold"}} >For Two Players</Text>
                <GradientButton
                    style={{ marginVertical: 20 }}
                    text="3 By 3"
                    textSyle={{ fontSize: 20 }}      
                    gradientBegin="#874f00"
                    gradientEnd="#f5ba57"
                    gradientDirection="diagonal"
                    height={60}
                    width={300}
                    radius={15} 
                    blueMarine impact
                    impactStyle='Light'
                    onPressAction={() => this.props.navigation.navigate('Three')}
                />
                <GradientButton
                    text="4 By 4"
                    textSyle={{ fontSize: 20 }}      
                    gradientBegin="#874f00"
                    gradientEnd="#f5ba57"
                    gradientDirection="diagonal"
                    height={60}
                    width={300}
                    radius={15} 
                    blueMarine impact
                    impactStyle='Light'
                    onPressAction={() => this.props.navigation.navigate('Four')}
                />
            </View>
            <View style={{padding:30}}>
                <Text style={{color: '#23C4E4', fontSize: 24, margin: 10, marginBottom: 15, fontWeight: "bold"}} >For Three Players</Text>
                <GradientButton
                    text="4 By 4"
                    textSyle={{ fontSize: 20 }}      
                    gradientBegin="#874f00"
                    gradientEnd="#f5ba57"
                    gradientDirection="diagonal"
                    height={60}
                    width={300}
                    radius={15} 
                    blueMarine impact
                    impactStyle='Light'
                    onPressAction={() => this.props.navigation.navigate('Fourforthree')}
                />
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default home;