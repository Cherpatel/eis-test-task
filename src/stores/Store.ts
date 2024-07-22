import { types } from "mobx-state-tree";

import { AreaStore } from "./AreaStore";
import { MeterStore } from "./MeterStore";

export const Store = types.model("RootStore", {
    areaStore: AreaStore,
    meterStore: MeterStore,
});

export const store = Store.create({
    areaStore: {
        areas: {},
    },
    meterStore: {
        count: 0,
        meters: [],
        page: 0,
    },
});

export type StoreType = typeof store;

export type MeterStoreType = typeof store.meterStore;