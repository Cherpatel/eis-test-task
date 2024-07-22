import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";

import { parseAddress } from "@libs/parseAddress";

import { METERS_LIMIT } from "@controllers/getMeters/consts";

import { useAreasStore } from "@stores/hooks/useAreasStore";
import { useMeterStore } from "@stores/hooks/useMetersStore";

import CellType from "@components/CellType/CellType";
import TableCell from "@components/TableCell/TableCell";
import TableRow from "@components/TableRow/TableRow";
import TrashButton from "@components/TrashButton/TrashButton";

import "./TableBody.css";

const TableBody = observer(() => {
    const { meters, page } = useMeterStore();
    const { areas } = useAreasStore();

    const ref = useRef(null);

    useEffect(() => {
        ref?.current.scrollTo(0, 0);
    }, [ page ]);

    return (
        <div
            ref={ ref }
            className="tableBody"
        >
            {
                meters.map((meter, i) => {
                    const {
                        areaId,
                        description,
                        id,
                        installationDate,
                        isAutomatic,
                        type,
                        value,
                    } = meter;

                    const date = new Date(installationDate);
                    const formatedDate = new Intl.DateTimeFormat("ru-RU").format(date);
                    const isAutomaticText = isAutomatic ? "Да" : "Нет";
                    const index = (page - 1) * METERS_LIMIT + i + 1;
                    const addressFromStore = areas.get(areaId).address;
                    const address = addressFromStore ? parseAddress(addressFromStore) : "Нет данных";

                    return (
                        <TableRow key={ id }>
                            <TableCell center>{ index }</TableCell>
                            <TableCell>
                                <CellType type={ type } />
                            </TableCell>
                            <TableCell>{ formatedDate }</TableCell>
                            <TableCell>{ isAutomaticText }</TableCell>
                            <TableCell>{ value }</TableCell>
                            <TableCell>{ address }</TableCell>
                            <TableCell color="gray">{ description }</TableCell>
                            <TableCell><TrashButton id={ id } /></TableCell>
                        </TableRow>
                    );
                })
            }
        </div>
    );
});

export default TableBody;