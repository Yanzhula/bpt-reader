import { createContext } from 'react';
import { Template } from '../types/Template';

export const TemplateContext = createContext<null|Template>(null);
export const SetTemplateContext = createContext<Function>(() => {});