import React from "react";
import {useRouter} from "next/router";
import Link from 'next/link'
interface Props {
    color: string
}
const Logo: React.FC<Props> = ({color}) => {

    return (<Link  href="/"><span className="text-center relative inline-flex mb-2 cursor-pointer border-0 outline-none  p-2 text-900 lg:text-3xl sm:text-3xl font-bold "><i
        className={color + " pi pi-circle lg:text-6xl sm:text-6xl font-bold"}></i></span></Link>)
}
export default Logo;