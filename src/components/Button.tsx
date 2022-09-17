
import { BiTrash } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import { BiHighlight } from "react-icons/bi";

interface ButtonProps {
  name: string;
  className: string;
  onClick: any;
}

const Button  = ({ name, className, onClick}: ButtonProps) => {

  return (
    <button 
    onClick={onClick} 
    className={className}
    >{name}</button>
  )
}

export default Button 