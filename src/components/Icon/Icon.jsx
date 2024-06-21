import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'

function Icon({name}){
  if(name === "X") return <FaTimes size={50}/>;
  if(name === "O") return <FaRegCircle size={50}/>
  return <FaPen size={25}/>
}
export default Icon;
