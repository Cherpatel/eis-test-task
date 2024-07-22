import { types } from "mobx-state-tree";

import { AreaMapModel, AreaModel } from "@models/AreaModel";

import type { Area } from "@controllers/getAreas/types";

export const AreaStore = types
    .model("AreaStore", {
        areas: AreaMapModel,
    })
    .actions(self => ({
        setData(areasData: Area[] | Area) {
            if (!Array.isArray(areasData)) areasData = [ areasData ];

            areasData.forEach(area => self.areas.set(area.id, AreaModel.create(area)));
        },
    }));