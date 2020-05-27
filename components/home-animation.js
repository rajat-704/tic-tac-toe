import React from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, Easing, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Board extends React.Component {

    render() {
        return (
            <View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={[styles.title, { borderLeftWidth: 0, borderTopWidth: 0 }]}><Animatable.Text style={styles.textStyle} animation="fadeInDown" duration={2000} delay={500} >TIC</Animatable.Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.title, { borderTopWidth: 0 }]}></TouchableOpacity>
                    <TouchableOpacity style={[styles.title, { borderRightWidth: 0, borderTopWidth: 0 }]}></TouchableOpacity>

                </View>

                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={[styles.title, { borderLeftWidth: 0 }]}></TouchableOpacity>
                    <TouchableOpacity style={styles.title}><Animatable.Text style={styles.textStyle} animation="fadeInDown" duration={2000} delay={1000}>TAC</Animatable.Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.title, { borderRightWidth: 0 }]}></TouchableOpacity>

                </View>

                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={[styles.title, { borderLeftWidth: 0, borderBottomWidth: 0 }]}></TouchableOpacity>
                    <TouchableOpacity style={[styles.title, { borderBottomWidth: 0 }]}></TouchableOpacity>
                    <TouchableOpacity style={[styles.title, { borderRightWidth: 0, borderBottomWidth: 0 }]}><Animatable.Text style={styles.textStyle} animation="fadeInDown" duration={2000} delay={1500}>TOE</Animatable.Text></TouchableOpacity>
                </View>
            </View>
        )
    }

}

class Home_animations extends React.Component {

    render() {
        return (
            <View style={styles.container} >
                <Animatable.View animation="fadeOut" duration={2000} delay={4000}>
                    <Animatable.View animation="fadeInDown" duration={2000} >
                        <Board />
                    </Animatable.View>
                </Animatable.View>
            </View>);

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#23C4E4',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        borderWidth: 5,
        borderColor: '#fff',
        width: 100,
        height: 100
    },

    textStyle: {
        fontSize: 35,
        color: '#fff',
        justifyContent: 'center',
        margin: 10,
        marginTop: 15
    }
});


export default Home_animations;