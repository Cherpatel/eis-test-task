import cn from "classnames";

import type { ReactNode } from "react";

import "./TableCell.scss";

type Props = {
    children?: ReactNode;
    center?: boolean;
    color?: "black" | "gray";
};

export default function TableCell({ center = false, children, color = "black" }: Props) {
    return (
        <div className={ cn("tableCell", { center }, color) }>
            { children }
        </div>
    );
}