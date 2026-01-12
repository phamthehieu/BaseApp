import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '@/features/auth';
import { RootStackParamList, AuthStackParamList, MainStackParamList } from './types';
import LoginScreen from '@/features/auth/screens/LoginScreen';
import { HomeScreen } from '@/screens/HomeScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();

/**
 * Auth Navigator - Stack for unauthenticated users
 */
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen 
        name="Login" 
        component={LoginScreen as React.ComponentType<{}>} 
      />
    </AuthStack.Navigator>
  );
};

/**
 * Main Navigator - Stack for authenticated users
 */
const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: 'Trang chủ',
      }}
    >
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

/**
 * Root Navigator - Handles authentication flow
 */
export const AppNavigator = () => {
  const { isAuthenticated, isLoading } = useAuthStore();

  // Show loading state if checking authentication
  if (isLoading) {
    return null; // You can add a loading screen here
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuthenticated ? (
          <RootStack.Screen name="Main" component={MainNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
