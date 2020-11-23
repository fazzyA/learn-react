import MyLinks from "./MyLinks";
import logo from '../images/hi.jpeg'
function Header(){
    return (
        <>
        <div><img src={logo} alt='' width='150px' /></div>
        <div>heading</div>
        <MyLinks />
        </>
    );

}
export default Header;