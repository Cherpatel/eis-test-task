import { types } from "mobx-state-tree";

export const AreaModel = types.model("Area", {
    address: types.maybeNull(types.string),
    id: types.string,
});

export const AreaMapModel = types.map(AreaModel);