import { createContext } from 'react';
import { TemplateType } from '../types/Template';

export const TemplateContext = createContext<null|TemplateType>(null);
export const SetTemplateContext = createContext<Function>(() => {});