import { useNavigation } from '@react-navigation/core'
import React, {useEffect,useState} from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'

const LoginScreen = () => {

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const navigation = useNavigation()

    useEffect(()=>{
     const unsubscribe = auth.onAuthStateChanged(user=>{
         if(user){
             navigation.replace("Home")
         }
     })
     return unsubscribe
    }, [])

    const handleSignUp =()=>{
        auth    
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log('Registered with user',user.email);
        })
        .cath(error=>alert(error.message))
    }

    const handleLogIn =()=>{
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log('Logged in with user', user.email);
        })
        .cath(error=>alert(error.message))
    }

    const handleforgot =()=>{
        console.log(hello)
    }

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <View style={styles.inputcontainer}>
                <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text) }
                style={styles.input}
                />
                <TextInput
                placeholder="Passwprd"
                value={password}
                onChangeText={text =>setPassword(text) }
                style={styles.input}
                secureTextEntry
                />
            </View>

            <View style={styles.buttoncontainer}>
                <TouchableOpacity
                onPress = {handleLogIn}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {handleSignUp}
                style={[styles.button , styles.buttonOutline]}
                >
                <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                onPress = {handleforgot}
                style={styles.forgotbutton}
                ><Text>Forgot Password ?</Text></TouchableOpacity>
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
    },

    inputcontainer:{
        width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttoncontainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width:'100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    forgotbutton: {
        marginTop: 5,
    },


})