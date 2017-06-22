import * as React from 'react';
import { observer, inject } from 'mobx-react';
import AppStore from '../../stores';

@inject('appState')
@observer
export default class AddButton extends React.Component<{btnText?: string, appState?: AppStore}, {}> {

  public render() {
    return (
      <button onClick={()=>{this.props.appState.addWorkItem()}}>{this.props.btnText}</button>
    )
  }
}