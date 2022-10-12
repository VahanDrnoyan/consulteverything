
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import styles from '../styles/Card.module.css'
import { Avatar } from 'primereact/avatar';
import { Chip } from 'primereact/chip';
interface Props {
    width:string,
    height:string
}
const ConsultancyCard: React.FC = ()=> {
 const header = (
     <div className="text-center">
      <Avatar size={"xlarge"} className="align-self-center p-avatar-circle" image="https://www.primefaces.org/primereact/images/organization/walter.jpg" />
</div>
);
    const footer = (
        <span>
            <div className="my-2">
                <Chip label="Google Analytics" className="text-xs mt-1 ml-1" />
                <Chip label="SEO" className="text-xs mt-1 ml-1" />
                <Chip label="SEO Optimisations" className="text-xs mt-1 ml-1"/>
                <Chip label="GA Metrics" className="text-xs mt-1 ml-1" />
            </div>
            <Button label="Schedule consultancy" className="w-full text-xs p-button-outlined text-bluegray-600" icon="pi pi-calendar"/>
        </span>
    );

    return (
        <div className={styles.cardMaxWidth}>
            <Card title="Google Analytics setup" subTitle="SEO team lead at Ajax Consulting Inc." footer={footer} header={header}>
                <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                     esse, cupiditate neque quas!</p>
            </Card>
        </div>
    )

}
export default ConsultancyCard