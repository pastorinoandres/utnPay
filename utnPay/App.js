
//dependecies
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './state/store';
import { createAppContainer } from 'react-navigation';
import { Navigator } from './navigation/index';
import SignInScreen from './screens/SignInScreen';


const ReactNavigationContainer = createAppContainer(Navigator);

class App extends React.Component {
  render() {
    return ( 
      <ReduxProvider store={store}>        
        <ReactNavigationContainer/>
      </ReduxProvider>
    );
  }
}


export default App;
