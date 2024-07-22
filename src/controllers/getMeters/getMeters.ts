import { apiInstance } from "@controllers/apiInstance";

import type { Meter, GetMetersResponseBody, GetMetersReturn } from "./types";
import type { AxiosResponse } from "axios";

export async function getMeters(limit: number, offset: number): Promise<GetMetersReturn> {
    const { data } = await apiInstance.get("meters", {
        params: {
            limit,
            offset,
        },
    }) as AxiosResponse<GetMetersResponseBody>;

    const meters: Meter[] = data.results.map(meter => {
        const {
            _type,
            area,
            description,
            id,
            initial_values,
            installation_date,
            is_automatic,
        } = meter;

        return {
            areaId: area.id,
            description: description ?? "",
            id,
            installationDate: installation_date,
            isAutomatic: Boolean(is_automatic),
            type: _type[0],
            value: String(initial_values[0]),
        };
    });

    return {
        count: data.count,
        meters,
    };
}