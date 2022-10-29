
import React from 'react';
import styles from '../styles/Card.module.css'
import { Card, Grid, Text, Button, Row, Avatar, Badge } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
interface Props {
    width:string,
    height:string
}
const ConsultancyCard: React.FC = ()=> {
    return (
        <Card >
          <Card.Header css={{flexDirection:'column', justifyConetnt: 'flex-start', alignItems: 'start'}}>
          <Avatar
          css={{alignSelf: 'center', mb: 10}}
          size="lg"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          color="primary"
          bordered
        />
            <Text b>Google Analytics setup</Text>
            <Text css={{mb:0, 'color': '$accents8'}} >SEO team lead at Ajax Consulting Inc.</Text>
          </Card.Header>
         
          <Card.Body css={{ py: "$0" }}>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                     esse, cupiditate neque quas!
            </Text>
          </Card.Body>
          
          <Card.Footer>
            <Row css={{flexDirection: 'column'}}>
                <div>
            <Badge  css={{m: '$1', 'bg': '$accents4', 'color': '$accents8',  'border': 'none'}}>
            Google Analytics
        </Badge>
        <Badge  css={{m: '$1', 'bg': '$accents4', 'color': '$accents8', 'border': 'none'}}>
          SEO
        </Badge>
        <Badge  css={{m: '$1', 'bg': '$accents4', 'color': '$accents8',  'border': 'none'}}>
        SEO Optimisations
        </Badge>
        <Badge  css={{m: '$1', 'bg': '$accents4', 'color': '$accents8',  'border': 'none'}}>
        GA Metrics
        </Badge>
        </div>
              <Button color="warning"size="md" css={{'bg':'$accents7',width: '100%', mt: '$2'}}icon={<FontAwesomeIcon size={"1x"} color="var(--nextui-colors-accents9)" icon={faCalendar} />} >Schedule consultancy</Button>
            </Row>
          </Card.Footer>
        </Card>
    )

}
export default ConsultancyCard