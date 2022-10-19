import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link  from "next/link";
import React from "react"
interface Props {
    color: string;
    size: SizeProp;
}
const Logo: React.FC<Props> = ({color, size: X})=> {
    return (<Link  href="/">
   <FontAwesomeIcon size={X} color={color} icon={faCircle} />
  </Link>
    )
    
}
export default Logo;