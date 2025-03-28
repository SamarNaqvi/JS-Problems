import React, { useRef, useState, useEffect } from "react";

const ROW_HEIGHT = 25;
const CONTAINER_HEIGHT = 400;
const TOTAL_ITEMS = 10000;
const rowPadding = 20;

const ListVirtualization = () => {
  const containerRef = useRef(null);
  const [startPosition, setStartPosition] = useState(0);
  const arrayList = Array.from({ length: 10000 }).map((item, index) => index);
  let visibleNodes = Math.floor(CONTAINER_HEIGHT / ROW_HEIGHT + 2*rowPadding);
  visibleNodes = Math.min(TOTAL_ITEMS - startPosition, visibleNodes);
  let filteredArray = [];
  for (let i = 0; i < visibleNodes; i++) {
    const index = i + startPosition;
    filteredArray.push({ key: index, index });
  }

  const handleScroll = () => {
    if (containerRef.current) {
      const startIndex = Math.floor(
        parseInt(containerRef.current.scrollTop) / ROW_HEIGHT - rowPadding
      );

      setStartPosition(Math.max(0, startIndex));
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <div>
      <p>Scrollabe Container - Virtualized Lists</p>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="w-[500px]  overflow-y-scroll border border-solid"
        style={{ height: CONTAINER_HEIGHT }}
      >
        <div style={{height: `${TOTAL_ITEMS * ROW_HEIGHT}px`}}>
        <div
          style={{
            transform: `translateY(${startPosition * ROW_HEIGHT}px)`,
          }}
        >
          {filteredArray.map(({key, index}) => (
            <div
              key={key}
              style={{height:ROW_HEIGHT}}
            >{`item-${index}`}</div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ListVirtualization;
