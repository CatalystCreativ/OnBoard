import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <HashRouter>
                Root
                <App/>
            </HashRouter>
        </Provider>
    );
  };
  
  export default Root;