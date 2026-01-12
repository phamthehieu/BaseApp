import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert
} from 'react-native';
import { useAuthStore } from '../store/authStore';
import { useLoginMutation } from '../api/authApi';

const LoginScreen = () => {
  const [username, setUsername] = useState('0962591400');
  const [password, setPassword] = useState('123@123aA');
  
  const { isAuthenticated, logout, token } = useAuthStore();
  const loginMutation = useLoginMutation();

  const handleLogin = () => {
    if (!username || !password) {
        Alert.alert("Lỗi", "Vui lòng nhập tài khoản mật khẩu");
        return;
    }
    
    loginMutation.mutate({
      username,
      password,
    });
  };

  if (isAuthenticated) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Xin chào!</Text>
        <Text style={styles.subText}>Bạn đã đăng nhập thành công.</Text>
        <Text style={styles.tokenText}>Token: {token?.slice(0, 20)}...</Text>
        
        <TouchableOpacity style={styles.buttonLogout} onPress={logout}>
          <Text style={styles.buttonText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Đăng nhập</Text>
        )}
      </TouchableOpacity>

      {loginMutation.isError && (
        <Text style={styles.errorText}>
            Đăng nhập thất bại. Vui lòng kiểm tra lại!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center',
      color: '#333',
    },
    subText: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 10,
    },
    tokenText: {
      fontSize: 12,
      color: '#888',
      textAlign: 'center',
      marginBottom: 30,
      fontFamily: 'monospace'
    },
    input: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonLogout: {
      backgroundColor: '#FF3B30',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    errorText: {
      color: 'red',
      marginTop: 15,
      textAlign: 'center',
    },
  });

export default LoginScreen;