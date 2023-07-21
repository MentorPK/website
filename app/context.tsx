import { createContext, useContext } from 'react';

export const RootContext = createContext({
  width: 0,
});

export const useRootContext = () => useContext(RootContext);
