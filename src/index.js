import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';

import * as serviceWorker from './serviceworker';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App/>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
); 

export const useDataLayerValue = () => useContext(DataLayerContext);