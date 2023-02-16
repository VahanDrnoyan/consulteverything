import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link  from "next/link";
import React from "react"
interface Props {
    color: string;
    size: number;
}
const Logo: React.FC<Props> = ({color, size: X})=> {
    return (<Link  href="/">
        <span>
   <img alt="logo" width={X+ 'px'} className="logo" style={{transform: 'rotate(180deg)'}} height={X+ 'px'} src="/l3pink.svg" />
   </span>
  </Link>
    )
    
}
export default Logo;