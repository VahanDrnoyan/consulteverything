
        import { faEdit } from "@fortawesome/free-regular-svg-icons"
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Container, Grid, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { NextPage } from "next/types"
type NextPageWithAuth = NextPage & {
  auth?: {
      role: string
  }
};
const MyConsultancy:NextPageWithAuth = (props)=> {
  const router = useRouter()
  const navigateToEdit = ()=> {
    router.push('/dashboard/edit')
  }
 return (
    <Container>
 <Grid.Container gap={2} css={{ justifyContent: 'space-between'}}>
      <Grid>
        <Text h2>Dashboard</Text>
      </Grid>
      <Grid css={{alignItems: 'center', d: 'flex', justifyContent: 'flex-end'}}>
        
      </Grid>
      </Grid.Container>
 </Container>
 )
}
MyConsultancy.auth = {
    role: 'USER'
  }
export default MyConsultancy