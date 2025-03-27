import React, { useLayoutEffect, useEffect, useState, useRef } from "react";

export const CommentNew = ({
  comment = "",
  parentM = 0,
  setChildListHandler = () => {},
}) => {
  const ref = useRef();
  const inputRef = useRef();
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [childList, setChildList] = useState([]);
  const [parentMargin, setParentMargin] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setParentMargin(10 + parentM);
    }
  }, []);

  return (
    <div ref={ref} style={{ marginLeft: parentMargin }}>
      {comment && (
        <div
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          />
          {comment}
        </div>
      )}

      {!isCommentOpen ? (
        <div style={{ gap: "10px", display: "flex" }}>
          <button onClick={() => setIsCommentOpen(!isCommentOpen)}>
            {`Add ${parentM ? "Reply" : "Comment"}`}
          </button>
          {comment && (
            <button
              onClick={() => {
                setChildListHandler &&
                  setChildListHandler((prev) =>
                    prev.filter((curr) => curr !== comment)
                  );
              }}
            >
              Delete Comment
            </button>
          )}
        </div>
      ) : (
        <div className="flex gap-x-4">
          <input
            ref={inputRef}
            className="border border-cyan-200"
            type="text"
          />
          <button
            onClick={() => {
              if (!inputRef.current) return;
              console.log(inputRef.current.value);
              setChildList((prev) => [...prev, inputRef.current.value]);
              setIsCommentOpen(false);
            }}
          >
            Ok
          </button>
          <button onClick={() => setIsCommentOpen(false)}>Cancel</button>
        </div>
      )}
      {childList.length > 0 &&
        childList.map((child) => (
          <CommentNew
            key={child}
            parent={comment}
            parentM={parentMargin}
            comment={child}
            setChildListHandler={setChildList}
          />
        ))}
    </div>
  );
};
