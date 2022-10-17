
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
        <Card isHoverable>
          <Card.Header css={{flexDirection:'column', justifyConetnt: 'flex-start', alignItems: 'start'}}>
          <Avatar
          css={{alignSelf: 'center', mb: 10}}
          size="lg"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          color="primary"
          bordered
        />
            <Text b>Google Analytics setup</Text>
            <Text css={{mb:0}} >SEO team lead at Ajax Consulting Inc.</Text>
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
            <Badge css={{m: '$1'}}variant="flat">
            Google Analytics
        </Badge>
        <Badge css={{m: '$1'}}variant="flat">
          SEO
        </Badge>
        <Badge css={{m: '$1'}}variant="flat">
        SEO Optimisations
        </Badge>
        <Badge css={{m: '$1'}}variant="flat">
        GA Metrics
        </Badge>
        </div>
              <Button color="gradient"size="md" css={{width: '100%', mt: '$1'}}icon={<FontAwesomeIcon size={"1x"} color="#fff" icon={faCalendar} />} >Schedule consultancy</Button>
            </Row>
          </Card.Footer>
        </Card>
    )

}
export default ConsultancyCard