import { observer } from "mobx-react-lite";
import { useMemo } from "react";

import { createArray } from "@libs/createArray";

import { METERS_LIMIT } from "@controllers/getMeters/consts";

import { useMeterStore } from "@stores/hooks/useMetersStore";

import PaginationItem from "@components/PaginationItem/PaginationItem";

import "./Pagination.css";

const Pagination = observer(() => {
    const { count, page } = useMeterStore();

    const pageArray = useMemo(() => {
        const totalPages = Math.ceil(count / METERS_LIMIT);
        const arr = createArray(totalPages, 0);

        arr[0] = 1; // first page
        arr[totalPages - 1] = totalPages; // last page
        arr[page - 2] = page - 1; // previous page
        arr[page - 1] = page; // current page
        arr[page] = page + 1; // next page
        arr.length = totalPages;

        return arr.filter((elem, i) => elem !== arr[i - 1]);
    }, [count, page]);

    return (
        <div className="pagination">
            {
                pageArray.map((elem, i) => {
                    if (elem === 0) {
                        return <PaginationItem key={ i } />;
                    }

                    return (
                        <PaginationItem
                            key={ i }
                            active={ elem === page }
                            currentPage={ elem }
                            href={ `?page=${ elem }` }
                        />
                    );
                })
            }
        </div>
    );
});

export default Pagination;