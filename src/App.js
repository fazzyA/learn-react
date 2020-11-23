import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar'
import SideBar2 from './components/SideBar2';
import Show from './components/Show';
function App() {
  return (
    <>
    <Header />
    <Show />
    {/* <Block color='red' /> */}
    {/* <SideBar color='red' name= 'hira' /> */}
  <div className="w3-container">
  <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
    tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
  <div classcolor="w3-row">
    <div classcolor="w3-col m8 s12">
      <p><button classcolor="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
    </div>
    <div classcolor="w3-col m4 w3-hide-small">
      <p><span classcolor="w3-padding-large w3-right"><b>Comments  </b> <span classcolor="w3-tag">0</span></span></p>
    </div>
  </div>
</div>
 </> );
}

export default App;
