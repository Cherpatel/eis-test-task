import { createContext } from "react";

import { store } from "@stores/Store";

import type { StoreType } from "@stores/Store";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const StoreContext = createContext<StoreType | null>(null);

export default function StoreProvider({ children }: Props) {
    return (
        <StoreContext.Provider value={ store }>
            { children }
        </StoreContext.Provider>
    );
}