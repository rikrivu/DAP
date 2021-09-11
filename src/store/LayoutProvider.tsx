import { createContext, useContext } from 'react';
import { LayoutContextState } from './type';
const contextDefaultValues: LayoutContextState = {
    result : [],
    // setOutputResult: () => {}
};
export const LayoutContext = createContext<LayoutContextState>( contextDefaultValues);
export const useOutpuResult = () => useContext(LayoutContext);