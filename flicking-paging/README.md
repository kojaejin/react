## React Flicking Paging

[egjs-flicking](https://naver.github.io/egjs-flicking/)

[@egjs/react-flicking](https://github.com/naver/egjs-flicking/blob/master/packages/react-flicking/README.md)

```tsx
import React, { useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";

const FlickingPaging = ({ itemList }) => {
    const flickingRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(2);
    const totalPage = itemList.length;

    return (
        <>
            <Flicking
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
                        return (<div key={index}>{item}</div>);
                    })
                }
            </Flicking>
            <div className="buttons">
                {
                    [...Array(totalPage)].map((any, index) => {
                        return (
                            <button key={index} onClick={() => flickingRef.current.moveTo(index)}>
                                {index + 1}
                            </button>
                        );
                    })
                }
            </div>
        </>
    );
};

export default FlickingPaging;
```