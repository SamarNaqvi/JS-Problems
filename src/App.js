import { Checkbox } from "./CheckBox";
import "./App.css";

function App() {
  return (
    <>
      <Checkbox label={"Parent"} />
      <div className="customMargin">
        <Checkbox label={"Parent1"} parent="Parent" />
        <div className="customMargin">
          <Checkbox label={"Child1"} parent={"Parent_Parent1"} />
          <Checkbox label={"Child2"} parent={"Parent_Parent1"} />
          <Checkbox label={"Child3"} parent={"Parent_Parent1"} />
        </div>
        <Checkbox label={"Parent2"} parent="Parent" />
        <div className="customMargin">
          <Checkbox label={"Child1"} parent={"Parent_Parent2"} />
          <Checkbox label={"Child2"} parent={"Parent_Parent2"} />
          <Checkbox label={"Child3"} parent={"Parent_Parent2"} />
        </div>
      </div>
    </>
  );
}

export default App;
