import PropTypes from "prop-types";
import './App.css'
import Profile from './profile/profile';
import img from './Aymen Obba.jpg'
import logo from './logo.svg';

Profile.propTypes = {
  Bio: PropTypes.string ,
  fullName:PropTypes.string,
  profession:PropTypes.array,
  children: PropTypes.any
}
Profile.defaultProps = {
  Bio: "Insert Bio here",
  fullName:"insert you fullName here",
  profession:"insert a description of your profession",
  children:logo
  
 };
function App() {
  
  const T={listStyleType:'none'}
  const text = "full stack developer (MERN)\n expert in MongoDB, Express, React and Node";
  const Text1=text.split('\n').map(str => <li style={T}>{str}</li>)
  
  return (
    <Profile fullName='Aymen Obba'
             Bio="My good reasoning ,focus, attention to details adding to it a bit of perfectionism allowed me to finish my projects in time with good results In addition to that, I am serious, committed and can work under stress
             With an ability to adapt to new operations in a short period of time and to keep a steady progress in my work quality."
             profession={Text1} >
              {img}
           
             </Profile>
            
             );
}

export default App;
