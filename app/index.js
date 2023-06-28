import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from "react-native";
import axios from 'axios';

export default function Page() {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const registroData = () => {
    let err = [];

    axios.post("http://localhost:3000/register", {
      nome: nome,
      email: email,
      senha: password,
    }).then(function (response){
      console.log(response);
      err = true;
    }).catch(function (error){
      console.log(error);
    });

    if(err == true){
      alert('erro');
    } else {
      alert('Cadastro realizado com sucesso!');
    }

  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{flex: 1, width: '100%'}} behavior={Platform.OS === 'ios' ? 'height' : 'position'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.main}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={[styles.input, styles.nameArea]} name={'nameInput'} placeholder={'Nome'} onChangeText={(text) => setNome(text)}/>
            <TextInput style={[styles.input, styles.emailArea]} name={'emailInput'} placeholder={'Email'} onChangeText={(text) => setEmail(text)}/>
            <TextInput style={[styles.input, styles.emailArea]} name={'passwordInput'} placeholder={'Senha'}  onChangeText={(text) => setPassword(text)} secureTextEntry/>

            <TouchableOpacity style={styles.btn} onPress={() => registroData()}><Text style={{color: '#fff', fontSize: 20,}}>Login</Text></TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
        
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    marginHorizontal: "auto",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    margin: 20,
  },

  input:{
    width: '80%',
    height: 50,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 2,
    color: '#fff',
    backgroundColor: '#666',
  },

  btn:{
    width: '80%',
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});
