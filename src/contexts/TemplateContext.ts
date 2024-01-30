import { createContext } from 'react';

export const TemplateContext = createContext<null|Object>(null);
export const SetTemplateContext = createContext<Function>(() => {});