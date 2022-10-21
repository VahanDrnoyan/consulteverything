import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useRef, useEffect} from 'react';
import { useRouter } from "next/router";
import heroPic from "../public/galaxy_cropped.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faListAlt, faFileVideo, faMoneyBill1, faEdit, faCalendar, faUser } from '@fortawesome/free-regular-svg-icons'
import { Text, Avatar, Grid, Container, Card, Row, Button } from "@nextui-org/react";
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import { faArrowRight, faHome, faHomeAlt, faHomeLg, faSearch, faShare, faSubscript } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../components/LoginModal';
import { PressEvent} from '@react-types/shared';
import Logo from '../components/Logo';

type NextPageWithAuth = NextPage & {
    auth?: {
        role: string
    }
};
const Home: NextPageWithAuth = (_props) => {
    const { status } = useSession()
    const router = useRouter()

    const [showModal, setShowModal] = useState(false);
    const showModalhandler = (_event: PressEvent) => {
        setShowModal(true);
    }
    const handleNavigateToConsultancies= (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
       
        router.push({
            pathname: '/consultancies/search'
        })
    }
    return (
        <div style={{backgroundColor: 'var(--nextui-colors-blue800)'}}>
            <Head>
                <title>Consult Everything | Home</title>
                <meta name="description" content="Someone in the world is ready to provide the
                            necessary and highly qualified answers to all of your questions!"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{ height: '700px', position: 'relative', 'display': 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className={styles.heroImage}>
                    <Image
                    
                        width={"2000px"}
                        height={"700px"}
                        src={heroPic.src}
                        alt="Consult Everything"
                        layout='fill'
                        style={{minHeight: '700px',
                        maxHeight:'700px',
                        opacity: 0.4,
                        }}
                    />
                </div>
                <div className={styles.logoConatiner}>
                    <Logo color="#fff" size='6x'/>
                    <Text h3 color="#fff" css={{ mt: 100, mb: 0 }}>Push your boundaries to horizons!</Text>
                    


                </div>

            </div>
            <div className={styles.bottomConatiner}>
            <Container css={{marginTop: '-100px'}}>
    
                <Grid.Container gap={2} justify="center" css={{p:0}}>
                    <Grid xs={12} sm={6}>
                        <Card css={{'bg': '$blue100'}} variant='flat' isHoverable>
                           
                                <div className={styles.homeTopIcons}>
                                    <Avatar squared color="default" size="lg" icon={<FontAwesomeIcon size={"xl"} color="var(--nextui-colors-primary)" icon={faCircle} />} />
                                    <Text css={{ ml: 12 }} h4>Our mission</Text>
                                </div>
                            
                                <Card.Body>
                                <p style={{marginTop: 0}}>Are you a specialist or a beginner seeking knowledge
                                    development in your field of activity?</p>
                                <p style={{marginTop: 0}}>Are you in need of consulting in various institutions such as embassies, universities,
                                    medical and
                                    municipal companies in rather overloaded situations?
                                </p>
                                <p style={{marginTop: 0}}>In this ever-changing world, it can be rather
                                    time-consuming and tiresome.
                                </p>



                            </Card.Body>
                            
                            <Card.Footer>
                                <Row justify="flex-end" css={{'@xs':{flexDirection:'column', alignItems: 'flex-end'}, '@md': {flexDirection: 'row'}}} >

                                    <Button css={{minWidth: '50%'}}light color={"secondary"}>But not anymore!</Button>
                                    <Button onClick={handleNavigateToConsultancies} css={{minWidth: '50%', 'bg': '$blue300', 'color': '$accents9'}}icon={<FontAwesomeIcon size={"1x"} color="var(--nextui-colors-primary)" icon={faSearch} />}>Browse consultancies</Button>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} >
                        <Card variant='flat' css={{'bg': '$blue100'}} isHoverable>
                            
                                <div className={styles.homeTopIcons}>
                                    <Avatar size="lg" squared color="default" icon={<FontAwesomeIcon size={"xl"} color="var(--nextui-colors-primary)" icon={faArrowRight} />} />
                                    <Text css={{ml: 12}} h4>Start solving your everyday problems...</Text>
                                </div>
                                
                                <Card.Body>
                                <p style={{marginTop: 0}}>This platform is designed to receive and provide consulting services for beginners and
                                    professionals
                                    from around the world.</p>
                                <p style={{marginTop: 0}}>It appears to be a boundless consulting company with constantly
                                    growing information stream... </p>
                                <p style={{marginTop: 0}}>So don’t hesitate to take a chance and join the community.</p>

                            </Card.Body>
                            
                            <Card.Footer>
                                <Row justify="flex-end" css={{
                        xs: {
                            flexDirection:'column'
                        }
                    }}>
                                    {status === 'authenticated' ? (
                                        <Button css={{minWidth: '50%', 'bg': '$blue300', 'color': '$accents9'}} icon={<FontAwesomeIcon size={"1x"} color="var(--nextui-colors-primary)" icon={faUser} />}>Go to dashboard</Button>
                                    ) : (<Button css={{minWidth: '50%', 'bg': '$blue300', 'color': '$accents9'}} onPress={showModalhandler} icon={<FontAwesomeIcon size={"1x"} color="var(--nextui-colors-primary)" icon={faUser} />}>Enter with email
                                    </Button>)}
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                </Grid.Container>
                <Text h3 css={{color:'$accents2',width: '100%', textAlign: 'center', 'my': '40px'}}>Consult Everything provides the following features:</Text>
                
                <Grid.Container gap={2} justify="center" css={{p: 0}}>
                    <Grid xs={12} md={4} lg={4}>
                        <Card variant='flat' css={{'bg': '$blue100'}} isHoverable>
                            
                                <div className={styles.homeIcons}>
                                    <Avatar size="lg" squared color="default" icon={<FontAwesomeIcon size={"xl"} color="var(--nextui-colors-primary)" icon={faListAlt} />} />
                                    <Text h4 css={{ mb: 0 }}>Custom form creation</Text>
                                </div>

                        
                                <Card.Body>
                                <p style={{marginTop: 0}}>
                                    To make the communication process more accurate and productive the platform enables you to create and fill a custom form.
                                </p>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Card css={{'bg': '$blue100'}}  variant='flat' isHoverable>
                            
                                <div className={styles.homeIcons}>
                                    <Avatar size="lg" squared color="default" icon={<FontAwesomeIcon size={"xl"} color="var(--nextui-colors-primary)" icon={faFileVideo} />} />
                                    <Text css={{ mb: 0 }} h4>Video call consulting</Text>
                                </div>
                                
                                <Card.Body>
                                <p style={{marginTop: 0}}>Contact the experts in person and ask your questions. </p><p style={{marginTop: 0}}>This approach makes the communication more dynamic and productive and contributes to building strong business relationships.</p>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Card css={{'bg': '$blue100'}} variant='flat' isHoverable>
                            
                                <div className={styles.homeIcons}>
                                    <Avatar size="lg" squared color="default" icon={<FontAwesomeIcon size={"xl"} color="var(--nextui-colors-primary)" icon={faMoneyBill1} />} />
                                    <Text css={{ mb: 0 }}  h4>Get paid for info</Text>
                                </div>
                                
                                <Card.Body>
                                <p style={{marginTop: 0}}>Our subscribers are enabled to establish the fee for their work considering a range of factors, such as time, difficulty, etc.</p>
                            </Card.Body>
                        </Card>
                    </Grid>

                </Grid.Container>
                <Grid.Container gap={2} justify="center" css={{p:0, mt:12}}>
                    <Grid xs={12} md={4} lg={4}>
                        <Card css={{'bg': '$blue100'}} variant='flat' isHoverable>
                            
                                <div className={styles.homeIcons}>
                                    <Avatar squared color="default" size="lg" icon={<FontAwesomeIcon size={"xl"} color="var(--nextui-colors-primary)" icon={faEdit} />} />
                                    <Text css={{ mb: 0 }} h4>Consultancy transcription recording</Text>
                                </div>
                                
                                
                                <Card.Body>
                                    <p style={{marginTop: 0}}>
                                    Your live discussion will be recoded so later it will be available as a reference. </p>
                                    <p style={{marginTop: 0}}>Come back at any time to refresh your memory, sort out and highlight the key points of the consultancy.
                                </p>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Card css={{'bg': '$blue100'}} variant='flat' isHoverable>
                            
                                <div className={styles.homeIcons}>
                                    <Avatar size="lg" squared color="default" icon={<FontAwesomeIcon size={"xl"} color="var(--nextui-colors-primary)" icon={faCalendar} />} />
                                    <Text css={{ mb: 0 }} h4>Time negotiations</Text>
                                </div>
                                
                                <Card.Body>
                                <p style={{marginTop: 0}}>
                                    The E-mail notifications and calendar inserted into the website to help you plan and implement your arrangements and online meetings.
                                </p>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Card css={{'bg': '$blue100'}} variant='flat' isHoverable>
                           
                                <div className={styles.homeIcons}>
                                    <Avatar size="lg" squared color="default" icon={<FontAwesomeIcon size={"xl"} color="var(--nextui-colors-primary)" icon={faShare} />} />
                                    <Text css={{ mb: 0 }} h4>Sharable consultancy</Text>
                                </div>
                               
                                <Card.Body>
                                <p style={{marginTop: 0}}>
                                    Get the shareable link of your form and place it on your social media to engage more requests for your consulting services.
                                    </p>
                                    <p style={{marginTop: 0}}>
                                    Turn free social traffic into a consistent source of income!
                                    
                                </p>
                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid.Container>
                <footer className={styles.footer}>
                <span> Powered by &copy;consulteverything.com</span>
            
            </footer>
            </Container>
            </div>
            <LoginModal show={showModal} setShow={setShowModal}/>
        </div>)
}
Home.auth = {
    role: 'guest'
}
export default Home
