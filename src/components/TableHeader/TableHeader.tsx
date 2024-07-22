import TableCell from "@components/TableCell/TableCell";
import TableRow from "@components/TableRow/TableRow";

import "./TableHeader.css";

export default function TableHeader() {
    return (
        <div className="tableHeader">
            <TableRow>
                <TableCell center>№</TableCell>
                <TableCell>Тип</TableCell>
                <TableCell>Дата установки</TableCell>
                <TableCell>Автоматический</TableCell>
                <TableCell>Текущие показания</TableCell>
                <TableCell>Адрес</TableCell>
                <TableCell>Примечание</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </div>
    );
}