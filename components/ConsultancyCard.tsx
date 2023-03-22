
import React from 'react';
import styles from '../styles/Card.module.css'
import { Card, Grid, Text, Button, Row, Avatar, Badge } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { Consultancy } from '../generated/graphql-frontend'
interface Props {
   consultancy?:Consultancy | null;
   key?: string;
}
const ConsultancyCard: React.FC<Props> = ({consultancy})=> {
  if(consultancy){
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
            <Text b>{consultancy.title}p</Text>
            <Text css={{mb:0, 'color': '$accents8'}} >{consultancy.short_description}</Text>
          </Card.Header>
         
          <Card.Body css={{ py: "$0" }}>
            <Text>
            {consultancy.long_description}
           
            </Text>
          </Card.Body>
          
          <Card.Footer>
            <Row css={{flexDirection: 'column'}}>
                <div>
                  {consultancy?.tags && consultancy?.tags?.map((tag)=>{
                      return (<Badge  key={ tag.id } css={{  'bg': '$accents4', 'color': '$accents8',  'border': 'none'  }}>
                     {tag.name}
                  </Badge>)
                  })}
       
       
       
        </div>
              <Button color="secondary"size="md" css={{ mt: '$2'}}icon={<FontAwesomeIcon size={"1x"} color="var(--nextui-colors-accents9)" icon={faCalendar} />} >Schedule consultancy</Button>
            </Row>
          </Card.Footer>
        </Card>
    )
                }
                return null;

}
export default ConsultancyCard