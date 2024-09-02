import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);

  const toggleLembrar = () => {
    setLembrar(!lembrar);
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
        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 20 }}>
        Bem-Vindo
      </Text>
        <Text style={styles.titleVolta}>de volta</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />

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
    height: 200,
    backgroundColor: '#f5f5f5',
    borderBottomLeftRadius: 60,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 40, // Adicionando um paddingTop para dar espaço ao ícone de voltar
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
  },
  title: {
    marginLeft: 20,
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
  },
  titleVolta: {
    marginLeft: 20,
    marginBottom: 20,
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 150,
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#333',
    borderWidth: 1,
    height: 50, // Altura fixa para garantir que o campo seja de uma linha
    fontSize: 16, // Tamanho da fonte para manter o texto legível
    lineHeight: 18, // Altura da linha para manter o texto em uma linha
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
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#fff',
    textAlign: 'center',
  },
});
