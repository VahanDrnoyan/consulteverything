import {useRouter} from "next/router";
import {useEffect} from "react";

const ConsultanciesHome = ()=>{
    const router = useRouter()
    useEffect(() => {
        router.push({
            pathname: '/consultancies/search'
        })
        return () => {

        };
    }, []);

}
ConsultanciesHome.auth ={
    role: 'guest'
}
export default ConsultanciesHome