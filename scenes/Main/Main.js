import React from 'react';
import { useRef } from 'react'
import { Container } from './styles';
import Header from './components/Header';
import Tabs from './components/Tabs';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


export default function Main({navigation}) {

  const cpfRef = useRef();
  const passwordRef = useRef();

  function updateScreen() {
     
    const callBackService = jsonReceive => {
        
      if (jsonReceive !== null) {
          console.log('qqr coisa');
        } else {
          console.log(errorCallBack.message);
        }


    };

    this.services.executeFunction(callBackService.bind(this));
  }

  return (
    <Container >
      <Header />
      <View style={styles.form}>
        <Text style={styles.label}>SEU CPF *</Text>
        <TextInput
          ref={cpfRef}
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor='#FAFAFA'
          keyboardType='numeric'
          autoCapitalize='none'
          autoCorrect={false}
          onSubmitEditing={() => passwordRef.current.focus()}
          returnKeyType="next"
        />

        <Text style={styles.label}>SENHA *</Text>
        <TextInput
          ref={passwordRef}
          style={styles.input}
          placeholder="Senha de 8 dígitos"
          placeholderTextColor='#FAFAFA'
          secureTextEntry={true}
          maxLength={8}
          autoCapitalize='none'
          autoCorrect={false}
          returnKeyType="send"
        />

        <TouchableOpacity onPress={() => updateScreen()} style={styles.button}>
          <Text style={styles.textButton}>Realizar login</Text>
        </TouchableOpacity>
      </View>
      <Tabs />
    </Container>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30


  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,


  },

  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16

  }

});