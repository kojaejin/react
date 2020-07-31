import React, { useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";

import "./flicking.css";

const FlickingPaging = ({ itemList }) => {
    const flickingRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(2);
    const totalPage = itemList.length;

    return (
        <>
            <Flicking
                className="flicking flicking0"
                gap={10}
                onMoveEnd={e => {
                    const flicking = e.currentTarget;
                    setCurrentPage(flicking.getIndex());
                }}
                defaultIndex={currentPage}
                ref={flickingRef}
            >
                {
                    itemList.map((item, index) => {
                        return (
                            <div key={index}
                                className={"panel"}>
                                {item}
                            </div>
                        );
                    })
                }
            </Flicking>
            <div className="buttons">
                {
                    [...Array(totalPage)].map((any, index) => {
                        return (
                            <button key={index}
                                style={{ 'font-weight': (index === currentPage) ? 'bold' : 'normal' }}
                                onClick={() => flickingRef.current.moveTo(index)}>{index + 1}
                            </button>
                        );
                    })
                }
            </div>
        </>
    );
};

export default FlickingPaging;
