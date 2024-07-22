import { applySnapshot, types } from "mobx-state-tree";

import { MeterArrayModel } from "@models/MeterModel";

import type { GetMetersReturnWithPage, Meter } from "@controllers/getMeters/types";

export const MeterStore = types
    .model("MeterStore", {
        count: types.number,
        meters: MeterArrayModel,
        page: types.number,
    })
    .actions(self => ({
        add(meter: Meter) {
            self.meters.push(meter);
        },
        countDecrement() {
            self.count = self.count - 1;
        },
        remove(meterId: string) {
            const filteredMeters = self.meters.filter(meter => meter.id !== meterId);

            applySnapshot(self.meters, filteredMeters);
        },
        setData(metersData: GetMetersReturnWithPage) {
            const { count, meters, page } = metersData;

            self.count = count;
            self.page = page;
            self.meters = MeterArrayModel.create(meters);
        },
    }));