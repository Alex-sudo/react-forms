import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const MyPagination = ({page, changePage, totalPages}) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="row">
                <div className="col-md-12">
                    <div className="my-pagination">
                    {pagesArray.map((p, index) =>
                        <button className={p === page ? "btn btn-primary" : "btn btn-success"}
                            onClick={() => changePage(p)}
                            key={index}
                        >{p}</button>
                    )}
                    </div>
              </div>
        </div>
    );
};

export default MyPagination;