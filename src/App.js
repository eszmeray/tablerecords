import './App.css';
import {Table} from "./tables/tblUserRecords/tblUserRecords";
import {Buttons} from "./tables/tblUserRecords/Buttons";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Buttons/>
      <Table />
    </div>
  );
}


export default App;