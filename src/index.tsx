import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { TemplateContext, SetTemplateContext } from './contexts/TemplateContext';
import { Toolbar } from './components/Toolbar';
import { Template } from './components/Template';

const App: React.FC = () => {

  const [template, setTemplate] = useState(null);

  return <>
      <h1>.bpt file reader</h1>
      <SetTemplateContext.Provider value={setTemplate}>
        <Toolbar/>
      </SetTemplateContext.Provider>
      <TemplateContext.Provider value={template}>
        <Template/>
      </TemplateContext.Provider>
    </>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);