import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { TemplateContext, SetTemplateContext } from './contexts/TemplateContext';
import { Toolbar } from './components/Toolbar';
import { TemplateView } from './components/TemplateView';

const App: React.FC = () => {

  const [template, setTemplate] = useState(null);

  return <>
      <h1>.bpt file reader</h1>
      <SetTemplateContext.Provider value={setTemplate}>
        <Toolbar/>
      </SetTemplateContext.Provider>
      <TemplateContext.Provider value={template}>
        <TemplateView/>
      </TemplateContext.Provider>
    </>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);