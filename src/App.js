import logo from './logo.svg';
import './App.css';
import { Title } from './Components/Title';
import { TopForm } from './Components/TopForm';
import { BottomTable } from './Components/BottomTable';
import { TotalHrsAllocated } from './Components/TotalHrsAllocated';
import { EntryTaskList } from './Components/EntryTaskList';
import { BadTaskList } from './Components/BadTaskList';

function App() {
  return (
    <div className="container-fluid wrapper">
      <Title/>
      <TopForm/>
      <BottomTable/>
      <EntryTaskList/>
      <BadTaskList/>
      <TotalHrsAllocated/>
    </div>
  );
}

export default App;
