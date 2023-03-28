import { useRouter } from "next/router"
import { InferGetServerSidePropsType, NextPage } from "next/types"
import { getServerSideProps } from ".."

type NextPageWithAuth = NextPage & {
    auth?: {
      role: string
    }
  }
  
  
  const ConsultanciesView: NextPageWithAuth = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
  ) => {
    const router = useRouter();
  const { slug, id } = router.query;
    return (<div>Test{slug}{id}</div>)
  }
  export default ConsultanciesView