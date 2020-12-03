import './App.css';
import AddList from './components/AddList';
import AddToDo from './components/AddToDo';
import BookList from './components/BookList';
import Header from './components/Header';
import Hi from './components/Hi';
import Life2 from './components/Life2';
import LifeCycle from './components/LifeCycle';
import List from './components/List';
import MediaCard from './components/MediaCard';
import Room from './components/Room';
import Switch from './components/Switch';
import Switch2 from './components/Switch2';
import ToDoList from './components/ToDoList';
import Toggle from './components/Toggle';
import ThemeContextProvider from './context/ThemeContext';
import logo from './logo.svg'
function App() {

  return (
    <ThemeContextProvider>
      <BookList />
    </ThemeContextProvider>
    
  );
}

export default App;
