import type { ReactNode } from "react";

import "./TableRow.scss";

type Props = {
    children: ReactNode;
};

export default function TableRow({ children }: Props) {
    return (
        <div className="tableRow">
            { children }
        </div>
    );
}