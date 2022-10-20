
        import { faEdit } from "@fortawesome/free-regular-svg-icons"
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Container, Grid, Text } from "@nextui-org/react"

const MyConsultancy = ()=> {
 return (
    <Container>
 <Grid.Container gap={2} css={{ justifyContent: 'space-between'}}>
      <Grid>
        <Text h2>My Consultancies</Text>
      </Grid>
      <Grid css={{alignItems: 'center', d: 'flex', justifyContent: 'flex-end'}}>
        <Button color="gradient" auto icon={<FontAwesomeIcon size={"xl"} color="#fff" icon={faAdd} />}>
          Create new Consultancy
        </Button>
      </Grid>
      </Grid.Container>
 </Container>
 )
}
MyConsultancy.auth = {
    role: 'USER'
  }
export default MyConsultancy