import { useContext } from "react";

import { StoreContext } from "@components/StoreProvider/StoreProvider";

export function useAreasStore() {
    return useContext(StoreContext).areaStore;
}