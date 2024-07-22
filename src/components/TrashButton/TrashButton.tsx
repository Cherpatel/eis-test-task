import { useCallback } from "react";

import { deleteMeter } from "@controllers/deleteMeter/deleteMeter";
import { getArea } from "@controllers/getAreas/getAreas";
import { METERS_LIMIT } from "@controllers/getMeters/consts";
import { getMeters } from "@controllers/getMeters/getMeters";

import { useAreasStore } from "@stores/hooks/useAreasStore";
import { useMeterStore } from "@stores/hooks/useMetersStore";

import Trash from "@assets/svgs/trash.svg";

import "./TrashButton.scss";

type Props = {
    id: string;
};

export default function TrashButton({ id }: Props) {
    const {
        add,
        countDecrement,
        page,
        remove,
    } = useMeterStore();
    const { areas, setData } = useAreasStore();

    const onClickHandler = useCallback(async() => {
        const { meters: [ meter ] } = await getMeters(1, page * METERS_LIMIT);

        if (meter) {
            if (!areas.has(meter.areaId)) {
                const address = await getArea(meter.areaId);

                setData(address);
            }
        }

        await deleteMeter(id);
        remove(id);
        countDecrement();
        if (meter) add(meter);
    }, [page, id, add, remove, countDecrement, areas, setData]);

    return (
        <button
            className="trashButton"
            onClick={ onClickHandler }
        >
            <Trash height="16px" width="16px" />
        </button>
    );
}