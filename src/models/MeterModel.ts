import { types } from "mobx-state-tree";

export const MeterModel = types.model("Meter", {
    areaId: types.string,
    description: types.string,
    id: types.string,
    installationDate: types.string,
    isAutomatic: types.boolean,
    type: types.string,
    value: types.string,
});

export const MeterArrayModel = types.array(MeterModel);