import { useLayoutEffect, useRef, useState } from "react";
import { FaFolder, FaFile } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { capitalize } from "./utils";

function VSCodeHierarcy({
  id = -111,
  itemName = "root",
  itemType = "folder",
  parentM = 0,
  setChildListHandler = () => {},
}) {
  const ref = useRef();

  const inputRef = useRef();
  const [currItemType, setCurrItemType] = useState("");
  const [isCreateItemOpen, setIsCreateItemOpen] = useState(false);
  const [childList, setChildList] = useState([]);
  const [parentMargin, setParentMargin] = useState(0);
  const [show, setShow] = useState(true);
  useLayoutEffect(() => {
    if (ref.current) {
      setParentMargin(10 + parentM);
    }
  }, []);

  const handleItemChange = (type = "", open = false) => {
    setCurrItemType(type);
    setIsCreateItemOpen(open);
  };

  const handleItemNameChange = () => {
    if (!inputRef.current) return;
    setChildList((prev) => [
      ...prev,
      {
        name: inputRef?.current?.value,
        type: currItemType,
        id: crypto.randomUUID(),
      },
    ]);
    handleItemChange();
  };

  const ItemButton = ({ btnText, handleClick }) => {
    return <button onClick={handleClick}>{btnText}</button>;
  };

  return (
    <div className={`mt-2 `} ref={ref} style={{ marginLeft: parentMargin }}>
      <div className="flex items-center gap-2">
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="flex items-center gap-2"
        >
          {show ? <FaArrowDown /> : <FaArrowRight />}
          {itemType === "folder" ? <FaFolder /> : <FaFile />}
          {itemName}
        </div>
        {itemType === "folder" && (
          <>
            <ItemButton
              btnText={"Add Folder"}
              handleClick={() => handleItemChange("folder", true)}
            />
            <ItemButton
              btnText={"Add File"}
              handleClick={() => handleItemChange("file", true)}
            />
          </>
        )}
        {id != -111 && (
          <ItemButton
            btnText={`Delete ${capitalize(itemType)}`}
            handleClick={() => {
              setChildListHandler((prev) =>
                prev.filter((item) => item.id !== id)
              );
            }}
          />
        )}
      </div>

      {isCreateItemOpen && (
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            className="border-b focus-visible:outline-none"
            ref={inputRef}
          />

          <ItemButton
            handleClick={() => {
              handleItemNameChange();
            }}
            btnText={"Ok"}
          />
          <ItemButton
            handleClick={() => {
              handleItemChange();
            }}
            btnText={"Cancel"}
          />
        </div>
      )}
      <div className={`${show ? "visible" : "hidden"}`}>
        {childList.length > 0 &&
          childList.map((child) => (
            <VSCodeHierarcy
              key={child?.name}
              id={child?.id}
              parentM={parentMargin}
              itemName={child?.name}
              itemType={child?.type}
              setChildListHandler={setChildList}
            />
          ))}
      </div>
    </div>
  );
}

export default VSCodeHierarcy;
