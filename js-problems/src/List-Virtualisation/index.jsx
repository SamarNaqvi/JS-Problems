import React, { useRef, useState, useEffect } from "react";

const ROW_HEIGHT = 25;
const CONTAINER_HEIGHT = 400;
const TOTAL_ITEMS = Math.floor(CONTAINER_HEIGHT / ROW_HEIGHT);

const ListVirtualization = () => {
  const containerRef = useRef(null);
  const [startPosition, setStartPosition] = useState(0);
  const arrayList = Array.from({ length: 10000 }).map((item, index) => index);
  const filteredArray = arrayList.slice(
    startPosition,
    startPosition + TOTAL_ITEMS
  );

  const handleScroll = () => {
    if (containerRef.current) {
      const startIndex = Math.ceil(
        parseInt(containerRef.current.scrollTop) / ROW_HEIGHT
      );
      console.log("startIndex", startIndex,  parseInt(containerRef.current.scrollTop));
      setStartPosition(startIndex);
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
      
        className="w-[500px] h-[400px] overflow-y-scroll border border-solid"
      >
        <div
          className="p-4 relative"
        >
          {filteredArray.map((item) => (
            <div
              key={item}
              className={`absolute`}
              style={{ top: `${item * ROW_HEIGHT}px` }}
            >{`item-${item}`}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListVirtualization;
