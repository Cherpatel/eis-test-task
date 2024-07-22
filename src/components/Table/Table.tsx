import TableFooter from "@components/TableFooter/TableFooter";
import TableGrid from "@components/TableGrid/TableGrid";

import "./Table.css";

const Table = () => {
    return (
        <div className="table">
            <TableGrid />
            <TableFooter />
        </div>
    );
};

export default Table;