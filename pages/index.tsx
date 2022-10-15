import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useRef, useEffect} from 'react';
import { useRouter } from "next/router";
import heroPic from "../public/galaxy_cropped.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faListAlt, faFileVideo, faMoneyBill1, faEdit, faCalendar, faUser } from '@fortawesome/free-regular-svg-icons'
import { Image, Text, Avatar, Grid, Container, Card, Row, Button } from "@nextui-org/react";
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import { faArrowRight, faHome, faHomeAlt, faHomeLg, faSearch, faShare, faSubscript } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../components/LoginModal';
import { PressEvent} from '@react-types/shared';
type NextPageWithAuth = NextPage & {
    auth?: {
        role: string
    }
};
const Home: NextPageWithAuth = (props) => {
    const { status } = useSession()
    const [showModal, setShowModal] = useState(false);
    const showModalhandler = (event: PressEvent) => {
        setShowModal(true);
    }
    return (
        <div>
            <Head>
                <title>Consult Everything | Home</title>
                <meta name="description" content="Someone in the world is ready to provide the
                            necessary and highly qualified answers to all of your questions!"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{ minHeight: '700px', position: 'relative', 'display': 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ 'position': 'absolute', 'width': '100%' }}>
                    <Image
                        showSkeleton
                        width={"100%"}
                        height={"700px"}
                        maxDelay={10000}
                        src={heroPic.src}
                        alt="Consult Everything"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.logoConatiner}>
                    <FontAwesomeIcon size={"6x"} color="#ffffff" icon={faCircle} />
                    <Text h3 color="#fff" css={{ mt: 100, mb: 0 }}>Push your boundaries to horizons!</Text>
                    


                </div>

            </div>
            <div className={styles.bottomConatiner}>
            <Container css={{marginTop: '-100px'}}>
    
                <Grid.Container gap={2} justify="center">
                    <Grid xs={6}>
                        <Card variant='shadow' isHoverable>
                           
                                <div className={styles.homeTopIcons}>
                                    <Avatar color="primary" size="lg" icon={<FontAwesomeIcon size={"xl"} color="#fff" icon={faCircle} />} />
                                    <Text css={{ ml: 12 }} h4>Our mission</Text>
                                </div>
                            
                                <Card.Body>
                                <p>Are you a specialist or a beginner seeking knowledge
                                    development in your field of activity?</p>
                                <p>Are you in need of consulting in various institutions such as embassies, universities,
                                    medical and
                                    municipal companies in rather overloaded situations?
                                </p>
                                <p>In this ever-changing world, it can be rather
                                    time-consuming and tiresome.
                                </p>



                            </Card.Body>
                            
                            <Card.Footer>
                                <Row justify="flex-end">

                                    <Button light color={"secondary"}>But not anymore!</Button>
                                    <Button shadow css={{minWidth: '50%'}}icon={<FontAwesomeIcon size={"1x"} color="#fff" icon={faSearch} />} color="gradient">Browse consultancies</Button>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                    <Grid xs={6}>
                        <Card variant='shadow' isHoverable>
                            
                                <div className={styles.homeTopIcons}>
                                    <Avatar size="lg" color={"primary"} icon={<FontAwesomeIcon size={"xl"} color="#fff" icon={faArrowRight} />} />
                                    <Text css={{ml: 12}} h4>Start solving your everyday problems...</Text>
                                </div>
                                
                                <Card.Body>
                                <p>This platform is designed to receive and provide consulting services for beginners and
                                    professionals
                                    from around the world.</p>
                                <p>It appears to be a boundless consulting company with constantly
                                    growing information stream... </p>
                                <p>So don’t hesitate to take a chance and join the community.</p>

                            </Card.Body>
                            
                            <Card.Footer>
                                <Row justify="flex-end">
                                    {status === 'authenticated' ? (
                                        <Button css={{minWidth: '50%'}} icon={<FontAwesomeIcon size={"1x"} color="#fff" icon={faUser} />} shadow color={"gradient"}>Go to dashboard</Button>
                                    ) : (<Button css={{minWidth: '50%'}} onPress={showModalhandler} icon={<FontAwesomeIcon size={"1x"} color="#fff" icon={faUser} />} shadow color={"gradient"}>Enter with email
                                    </Button>)}
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                </Grid.Container>
                <Text h2 css={{width: '100%', textAlign: 'center', marginTop: '40px'}}>Consult Everything provides the following features:</Text>
                
                <Grid.Container gap={2} justify="center">
                    <Grid xs={12} md={4} lg={4}>
                        <Card variant='flat' isHoverable>
                            
                                <div className={styles.homeIcons}>
                                    <Avatar size="lg" color="primary" icon={<FontAwesomeIcon size={"xl"} color="#fff" icon={faListAlt} />} />
                                    <Text h4 css={{ mb: 0 }}>Custom form creation</Text>
                                </div>

                        
                                <Card.Body>
                                <p>
                                    To make the communication process more accurate and productive the platform enables you to create and fill a custom form.
                                </p>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Card variant='flat' isHoverable>
                            
                                <div className={styles.homeIcons}>
                                    <Avatar size="lg" color={"primary"} icon={<FontAwesomeIcon size={"xl"} color="#fff" icon={faFileVideo} />} />
                                    <Text css={{ mb: 0 }} h4>Video call consulting</Text>
                                </div>
                                
                                <Card.Body>
                                <p>Contact the experts in person and ask your questions. This approach makes the communication more dynamic and productive and contributes to building strong business relationships.</p>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Card variant='flat' isHoverable>
                            
                                <div className={styles.homeIcons}>
                                    <Avatar size="lg" color={"primary"} icon={<FontAwesomeIcon size={"xl"} color="#fff" icon={faMoneyBill1} />} />
                                    <Text css={{ ml: 10 }} h4>Get paid for info</Text>
                                </div>
                                
                                <Card.Body>
                                <p>Our subscribers are enabled to establish the fee for their work considering a range of factors, such as time, difficulty, etc.</p>
                            </Card.Body>
                        </Card>
                    </Grid>

                </Grid.Container>
                <Grid.Container gap={4} justify="center">
                    <Grid xs={12} md={4} lg={4}>
                        <Card variant='flat' isHoverable>
                            
                                <div className={styles.homeIcons}>
                                    <Avatar color="primary" size="lg" icon={<FontAwesomeIcon size={"xl"} color="#fff" icon={faEdit} />} />
                                    <Text css={{ mb: 0 }} h4>Consultancy transcription recording</Text>
                                </div>
                                
                                
                                <Card.Body>
                                    <p>
                                    Your live discussion will be recoded so later it will be available as a reference. Come back at any time to refresh your memory, sort out and highlight the key points of the consultancy.
                                </p>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Card variant='flat' isHoverable>
                            
                                <div className={styles.homeIcons}>
                                    <Avatar size="lg" color="primary" icon={<FontAwesomeIcon size={"xl"} color="#fff" icon={faCalendar} />} />
                                    <Text css={{ mb: 0 }} h4>Time negotiations</Text>
                                </div>
                                
                                <Card.Body>
                                <p>
                                    The E-mail notifications and calendar inserted into the website to help you plan and implement your arrangements and online meetings.
                                </p>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Card variant='flat' css={{ $$cardColor: '$colors$pimary' }} isHoverable>
                           
                                <div className={styles.homeIcons}>
                                    <Avatar color="primary" size="lg" icon={<FontAwesomeIcon size={"xl"} color="#fff" icon={faShare} />} />
                                    <Text css={{ mb: 0 }} h4>Sharable consultancy</Text>
                                </div>
                               
                                <Card.Body>
                                <p>
                                    Get the shareable link of your form and place it on your social media to engage more requests for your consulting services.
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
