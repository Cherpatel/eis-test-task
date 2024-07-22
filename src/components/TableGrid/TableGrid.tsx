import TableBody from "@components/TableBody/TableBody";
import TableHeader from "@components/TableHeader/TableHeader";

import "./TableGrid.css";

export default function TableGrid() {
    return (
        <div className="tableGrid">
            <TableHeader />
            <TableBody />
        </div>
    );
}