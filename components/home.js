import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

class home extends React.Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: "#73C6B6"
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Go to Profile Activity"
                    onPress={() => this.props.navigation.navigate('Three')}
                />
                <Button
                    title="Go to Profile Activity"
                    onPress={() => this.props.navigation.navigate('Four')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cf660f',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default home;