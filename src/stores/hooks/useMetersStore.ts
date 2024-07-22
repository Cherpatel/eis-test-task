import { useContext } from "react";

import { StoreContext } from "@components/StoreProvider/StoreProvider";

export function useMeterStore() {
    return useContext(StoreContext).meterStore;
}