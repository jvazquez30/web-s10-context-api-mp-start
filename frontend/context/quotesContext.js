// Create your context here
import React from "react";
import { createContext } from "react";

const quotes = {
    quotes: ['Hello there', 'Goodbye there']
}

export const QuotesContext = createContext()

export const QuotesProvider = ({ children }) => (
    <QuotesContext.Provider value={quotes}>
        {children}
    </QuotesContext.Provider>
)