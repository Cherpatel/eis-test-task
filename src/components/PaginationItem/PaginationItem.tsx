import cn from "classnames";
import { Link } from "react-router-dom";

import "./PaginationItem.scss";

type Props = {
    active?: boolean;
    currentPage?: number;
    href?: string;
};

export default function PaginationItem({ active, currentPage, href }: Props) {
    if (!currentPage) {
        return (
            <div className="paginationItem plain">...</div>
        );
    }

    return (
        <Link
            className={ cn("paginationItem", { active }) }
            to={ href }
        >
            { currentPage }
        </Link>
    );
}