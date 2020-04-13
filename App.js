import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Root } from 'native-base';

import LoginScreen from './src/pages/LoginScreen';
import RegisterScreen from './src/pages/RegisterScreen';
import RecipeScreen from './src/pages/RecipeScreen';
import CartScreen from './src/pages/CartScreen';
import OrderScreen from './src/pages/OrderScreen';
import OrderDetailsScreen from './src/pages/OrderDetailsScreen';
import AuthLoadingScreen from './src/pages/AuthLoadingScreen';
import AccountScreen from './src/pages/AccountScreen';
import AddressScreen from './src/pages/AddressScreen';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

import { Provider } from 'react-redux';
import store from './src/redux/store';

const AuthenticationNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Register: {
      screen: RegisterScreen
    }
  },
  {
    headerMode: 'none'
  }
);

const OrderNavigator = createStackNavigator({
  OrdersList: {
    screen: OrderScreen
  },
  OrderDetails: {
    screen: OrderDetailsScreen
  }
});

const CartNavigator = createStackNavigator({
  OrdersList: {
    screen: CartScreen
  },
  Address: {
    screen: AddressScreen
  }
});

const AccountNavigator = createStackNavigator({
  AccountDetails: {
    screen: AccountScreen
  }
});

const MainNavigator = createBottomTabNavigator(
  {
    Recipe: {
      screen: RecipeScreen
    },
    Orders: {
      screen: OrderNavigator
    },
    Cart: {
      screen: CartNavigator
    },
    Account: {
      screen: AccountNavigator
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Recipe') {
          iconName = 'food';
        } else if (routeName === 'Orders') {
          iconName = 'receipt';
        } else if (routeName === 'Cart') {
          iconName = 'cart';
        } else if (routeName === 'Account') {
          iconName = 'account';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
        );
      }
    }),
    headerMode: 'screen',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);

const RootSwitch = createSwitchNavigator(
  {
    AuthLoading: {
      screen: AuthLoadingScreen
    },
    Auth: {
      screen: AuthenticationNavigator
    },
    Main: {
      screen: MainNavigator
    }
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
const AppContainer = createAppContainer(RootSwitch);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider>
    );
  }
}
