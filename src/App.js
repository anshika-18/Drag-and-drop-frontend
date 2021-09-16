import { DndProvider } from "react-dnd";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./drop";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragDrop />
      </div>
    </DndProvider>
  );
}

export default App;