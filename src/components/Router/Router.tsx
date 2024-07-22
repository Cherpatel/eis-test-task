import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { getPageQueryByUrl } from "@libs/getPageQueryByUrl";

import { getAreas } from "@controllers/getAreas/getAreas";
import { METERS_LIMIT } from "@controllers/getMeters/consts";
import { getMeters } from "@controllers/getMeters/getMeters";

import { store } from "@stores/Store";

import Main from "@components/Main/Main";

const metersLoader = async({ request }) => {
    const page = getPageQueryByUrl(request.url);
    const offset = METERS_LIMIT * (page - 1);

    const metersData = {
        ...await getMeters(METERS_LIMIT, offset),
        page,
    };
    const areaIdsArr = metersData.meters.map(({ areaId }) => areaId);
    const areaIdsUniqueRequired = Array.from(new Set(areaIdsArr)).filter(id => !store.areaStore.areas.has(id));
    const areasData = await getAreas(areaIdsUniqueRequired);

    store.meterStore.setData(metersData);
    store.areaStore.setData(areasData);

    return metersData;
};

const router = createBrowserRouter([
    {
        element: <Main />,
        loader: metersLoader,
        path: "/",
    },
    {
        element: <Navigate to="/" />,
        path: "*",
    },
]);

export default function Router() {
    return (
        <RouterProvider router={ router } />
    );
}