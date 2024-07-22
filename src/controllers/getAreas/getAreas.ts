import { apiInstance } from "@controllers/apiInstance";

import type { Area, GetAreasResponseBody } from "./types";
import type { AxiosResponse } from "axios";

export async function getArea(areaId: string): Promise<Area> {
    const { data: { results } } = await apiInstance.get("areas", {
        params: { id__in: areaId },
    }) as AxiosResponse<GetAreasResponseBody>;

    if (!results.length) {
        return {
            address: null,
            id: areaId,
        };
    }
    const { house: { address }, id, str_number_full } = results[0];

    const area: Area = {
        address: `${ address }, ${ str_number_full }`,
        id,
    };

    return area;
}

export async function getAreas(areaIds: string[]): Promise<Area[]> {
    const response = await Promise.all(areaIds.map(id => getArea(id)));

    return response;
}