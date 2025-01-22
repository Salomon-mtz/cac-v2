import React, { createContext, useContext, useReducer } from 'react';
import appConfig from '../config/app.config';

// Initial state
const initialState = {
  theme: 'light',
  isMenuOpen: false,
  notifications: [],
  loading: false,
  user: null,
  features: appConfig.features,
};

// Action types
export const APP_ACTIONS = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  TOGGLE_MENU: 'TOGGLE_MENU',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  SET_LOADING: 'SET_LOADING',
  SET_USER: 'SET_USER',
  TOGGLE_FEATURE: 'TOGGLE_FEATURE',
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case APP_ACTIONS.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case APP_ACTIONS.TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case APP_ACTIONS.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case APP_ACTIONS.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notif) => notif.id !== action.payload
        ),
      };
    case APP_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case APP_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case APP_ACTIONS.TOGGLE_FEATURE:
      return {
        ...state,
        features: {
          ...state.features,
          [action.payload]: !state.features[action.payload],
        },
      };
    default:
      return state;
  }
};

// Context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions
  const toggleTheme = () => {
    dispatch({ type: APP_ACTIONS.TOGGLE_THEME });
  };

  const toggleMenu = () => {
    dispatch({ type: APP_ACTIONS.TOGGLE_MENU });
  };

  const addNotification = (notification) => {
    const id = Date.now();
    dispatch({
      type: APP_ACTIONS.ADD_NOTIFICATION,
      payload: { ...notification, id },
    });

    // Auto remove notification after 5 seconds
    setTimeout(() => {
      dispatch({
        type: APP_ACTIONS.REMOVE_NOTIFICATION,
        payload: id,
      });
    }, 5000);
  };

  const removeNotification = (id) => {
    dispatch({
      type: APP_ACTIONS.REMOVE_NOTIFICATION,
      payload: id,
    });
  };

  const setLoading = (isLoading) => {
    dispatch({
      type: APP_ACTIONS.SET_LOADING,
      payload: isLoading,
    });
  };

  const setUser = (user) => {
    dispatch({
      type: APP_ACTIONS.SET_USER,
      payload: user,
    });
  };

  const toggleFeature = (featureName) => {
    dispatch({
      type: APP_ACTIONS.TOGGLE_FEATURE,
      payload: featureName,
    });
  };

  const value = {
    ...state,
    toggleTheme,
    toggleMenu,
    addNotification,
    removeNotification,
    setLoading,
    setUser,
    toggleFeature,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the app context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;