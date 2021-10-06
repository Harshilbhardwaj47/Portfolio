import React from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native'

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <View style={styles.inputcontainer}>
                <TextInput
                placeholder="Email"
                //value={}
                //onChangeText={text => }
                style={styles.input}
                />
                <TextInput
                placeholder="Passwprd"
                //value={}
                //onChangeText={text => }
                style={styles.input}
                secureTextEntry
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})