import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { Toolbar } from './Toolbar';

const App: React.FC = () => {

  return <>
    <h1>Template</h1>
    <Toolbar/>

    </>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);