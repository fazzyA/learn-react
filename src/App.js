import './App.css';
import AddList from './components/AddList';
import AddToDo from './components/AddToDo';
import Header from './components/Header';
import Hi from './components/Hi';
import List from './components/List';
import MediaCard from './components/MediaCard';
import Room from './components/Room';
import Switch from './components/Switch';
import Switch2 from './components/Switch2';
import ToDoList from './components/ToDoList';
import Toggle from './components/Toggle';
import logo from './logo.svg'
function App() {

  return (
    <>
    <Room />
    {/* <MediaCard title='My media card' body='my body text' imageUrl={logo}/>
    <MediaCard title='My media card' body={(<b><i>my text</i></b>)} imageUrl={logo}/>
    <MediaCard title='My media card' body={(<b><i>my text</i></b>)} imageUrl={logo}/> */}
    {/* <Hi name='Faiza' msg='hello class'/> */}
    {/* <Header />
    <List /> */}
    {/* <Switch /> */}
    {/* <Switch2/>
    <Toggle /> */}
  </> 
 );
}

export default App;
