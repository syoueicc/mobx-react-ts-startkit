import * as React from 'react';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import './App.css';

import AppStore from '../../stores';

@inject("appState")
@observer
class App extends React.Component<{ appState?: AppStore }, {}> {

  render() {
    const { Hello } = this.props.appState;
    const devPanel: JSX.Element = process.env.NODE_ENV == 'production' ? <noscript /> : <DevTools />;
    return (
      <div className="container">
        <h1>hello, {Hello}!</h1>
        {devPanel}
      </div>
    );
  }
}

export default App;
