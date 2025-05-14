import MultiForm from "./MultiForm";
import { FormItemsContextProvider } from "./MultiForm/Context/FormItemsContext";

function App() {
  return (
    <div className="w-full h-full">
      <FormItemsContextProvider>
        <MultiForm />
      </FormItemsContextProvider>
    </div>
  );
}

export default App;
