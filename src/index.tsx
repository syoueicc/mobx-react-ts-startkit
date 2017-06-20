import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import App from './components/App';
import AppStore from './stores';

const store = new AppStore();

ReactDOM.render(
  <Provider appState={store}>
    <App />
  </Provider>,
  document.getElementById('app') as HTMLElement
);
