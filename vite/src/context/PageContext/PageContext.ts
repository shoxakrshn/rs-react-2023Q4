import React, { useContext } from 'react';

export const PageContext = React.createContext<number>(1);

export const usePageContext = () => useContext(PageContext);
