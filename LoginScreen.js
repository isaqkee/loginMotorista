import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);
  const [senhaVisivel, setSenhaVisivel] = useState(false); // Estado para controlar a visibilidade da senha

  const toggleLembrar = () => {
    setLembrar(!lembrar);
  };

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const handleBackPress = () => {
    // Lógica para voltar à tela anterior
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>
          Bem-Vindo
        </Text>
        <Text style={styles.titleVolta}>de volta</Text>
      </View>

      <View style={styles.contentt}>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!senhaVisivel} // Controle de visibilidade da senha
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity onPress={toggleSenhaVisivel} style={styles.eyeIcon}>
              <Icon
                name={senhaVisivel ? "eye" : "eye-off"} // Alterna entre os ícones
                size={24}
                color="#aaa"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={toggleLembrar} style={styles.checkbox}>
            <View style={[styles.checkbox, lembrar && styles.checkedCheckbox]} />
          </TouchableOpacity>
          <Text style={styles.label}>Lembre-me!</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.registerText}>Não tem uma conta? Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '115%',
    height: 270,
    backgroundColor: '#f5f5f5',
    borderBottomLeftRadius: 60,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 40, // Adicionando um paddingTop para dar espaço ao ícone de voltar
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 30,
    zIndex: 1,
  },
  title: {
    marginLeft: 20,
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentt: {
    position: 'absolute',
    top: 350,
    left: 30,
    width: 350,
  },
  titleVolta: {
    marginLeft: 20,
    marginBottom: 30,
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    color: '#fff',
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#fff',
    marginBottom: 40,
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderColor: '#fff',
    // marginBottom: 40,
    
  },
  eyeIcon: {
    marginBottom: 55,
    marginLeft: -25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#fff',
  },
  label: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#FFD942',
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 28,
  },
  buttonText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

