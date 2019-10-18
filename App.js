import React from 'react';

// FILES
import Router from './src/Navigation/student/router';
import {Provider} from 'react-redux';
import {store} from './src/Screens/store';

const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
export default App;
