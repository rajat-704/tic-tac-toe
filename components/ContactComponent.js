import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

class Contact extends React.Component {

    static navigationOptions = {
        title: 'Contact Us', 
      }

      sendMail() {
        MailComposer.composeAsync({
            recipients: ['rajatgumber70@gmail.com'],
            subject: 'Feedback',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return (
            <Animatable.View animation="fadeInDown" duration={2000} >
                <Card title='Contact Information'>
                    <Text style={{ margin: 10 }}>Developed by: Rajat Gumber (-: </Text>
                    <Text style={{ margin: 10 }}>Address: MNIT, Jaipur</Text>
                    <Text style={{ margin: 10 }}>Email: rajatgumber70@gmail.com</Text>
                </Card>
                <Button
                        title="Send Email"
                        buttonStyle={{backgroundColor: "#23C4E4",width: 250, marginLeft: 50, marginTop: 20}}
                        onPress={this.sendMail}
                        />
            </Animatable.View>
        );
    }
}

export default Contact;