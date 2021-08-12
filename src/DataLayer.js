import React, { createContext, useContext, useReducer} from 'react';

export const DataLayerContext = createContext();

export const DataLayer = ({ 
    intialState, 
    reducer, 
    children }) => (
        <DataLayerContext.provider value ={useReducer(reducer, initialState)}>
            {children}
        </DataLayerContext.provider>
);

