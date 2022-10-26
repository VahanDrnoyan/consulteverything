import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useRef, useEffect} from 'react';
import { useRouter } from "next/router";
import heroPic from "../public/khustup1.jpeg"
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
import Footer from '../components/Footer';

type NextPageWithAuth = NextPage & {
    auth?: {
        role: string
    }
};
const Home: NextPageWithAuth = (_props) => {
    const { status } = useSession()
    const router = useRouter()

    const handleNavigateToConsultancies= (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
       
        router.push({
            pathname: '/consultancies/search'
        })
    }
    return (
        <div>
            <Head>
                <title>Consult Everything | Home</title>
                <meta name="description" content="Someone in the world is ready to provide the
                            necessary and highly qualified answers to all of your questions!"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{ height: '550px', position: 'relative', 'display': 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className={styles.heroImage}>
                    <Image
                    
                        width={"2000px"}
                        height={"550px"}
                        src={heroPic.src}
                        alt="Consult Everything"
                        layout='fill'
                        style={{minHeight: '550px',
                        maxHeight:'550px',
                        }}
                    />
                </div>
                <div className={styles.logoConatiner}>
                    <Logo color="#fff" size='6x'/>
                    <Text h3 color="#fff" css={{ mt: 100, mb: 0 }}>Push your boundaries to horizons!</Text>
                    


                </div>

            </div>
            <div className={styles.bottomConatiner}>
            <Container css={{marginTop: '-80px'}}>
    
                <Grid.Container gap={2} justify="center" css={{p:0}}>
                    <Grid xs={12} sm={6}>
                        <Card isHoverable>
                           
                                <div  style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:20}}>
                                    <span style={{display:'block', width: '40px', height:'40px'}}><img src="/mission.svg" /></span>
                                    <Text css={{ m:0,ml: 12, fontWeight: 'normal'}} h4>Our mission</Text>
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

                                    <Button css={{minWidth: '50%'}}light color={"default"}>But not anymore!</Button>
                                    <Button onClick={handleNavigateToConsultancies} css={{ 'bg': '$accents9', 'color': '$white'}}icon={<FontAwesomeIcon size={"1x"} color="#fff" icon={faSearch} />}>See consultancies</Button>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} >
                        <Card isHoverable>
                            
                                <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:' 20px'}}>
                                <span style={{display:'block', width: '40px', height:'40px'}}><img src="/start.svg" /></span>
                                    <Text css={{m:0,ml: 12, fontWeight: 'normal'}} h4>Start solving your everyday problems...</Text>
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
                                        <Button css={{ 'bg': '$accents9', 'color': '$white'}} icon={<FontAwesomeIcon size={"1x"} color="#fff" icon={faUser} />}>Go to dashboard</Button>
                                    ) : ('')}
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                </Grid.Container>
                <Text h3 css={{width: '100%', textAlign: 'center', 'my': '40px'}}>Consult Everything provides the following features:</Text>
                
                <Grid.Container gap={2} justify="center" css={{p: 0}}>
                    <Grid xs={12} md={4} lg={4}>
                        <Card isHoverable>
                            
                                <div className={styles.homeIcons}>
                                <span style={{display:'block', width: '40px', height:'40px'}}><img src="/form.svg" /></span>
                                    <Text h4 css={{ mb: 0 , mt: 10, fontWeight: 'normal'}}>Custom form creation</Text>
                                </div>

                        
                                <Card.Body>
                                <p style={{marginTop: 0}}>
                                    To make the communication process more accurate and productive the platform enables you to create and fill a custom form.
                                </p>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Card isHoverable>
                            
                                <div className={styles.homeIcons}>
                                <span style={{display:'block', width: '40px', height:'40px'}}><img src="/video.svg" /></span>
                                    <Text css={{ mb: 0, mt : 10, fontWeight: 'normal' }} h4>Video call consulting</Text>
                                </div>
                                
                                <Card.Body>
                                <p style={{marginTop: 0}}>Contact the experts in person and ask your questions. </p><p style={{marginTop: 0}}>This approach makes the communication more dynamic and productive and contributes to building strong business relationships.</p>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Card isHoverable>
                            
                                <div className={styles.homeIcons}>
                                <span style={{display:'block', width: '40px', height:'40px'}}><img src="/paid.svg" /></span>
                                    <Text css={{ mb: 0, mt: 10 , fontWeight: 'normal'}}  h4>Get paid for info</Text>
                                </div>
                                
                                <Card.Body>
                                <p style={{marginTop: 0}}>Our subscribers are enabled to establish the fee for their work considering a range of factors, such as time, difficulty, etc.</p>
                            </Card.Body>
                        </Card>
                    </Grid>

                </Grid.Container>
                <Grid.Container gap={2} justify="center" css={{p:0, mt:12}}>
                    <Grid xs={12} md={4} lg={4}>
                        <Card isHoverable>
                            
                                <div className={styles.homeIcons}>
                                <span style={{display:'block', width: '40px', height:'40px'}}><img src="/recording.svg" /></span>
                                    <Text css={{ mb: 0, mt: 10, fontWeight: 'normal'}} h4>Consultancy transcription recording</Text>
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
                        <Card  isHoverable>
                            
                                <div className={styles.homeIcons}>
                                <span style={{display:'block', width: '40px', height:'40px'}}><img src="/time.svg" /></span>
                                    <Text css={{ mb: 0, mt: 10, fontWeight: 'normal'}} h4>Time negotiations</Text>
                                </div>
                                
                                <Card.Body>
                                <p style={{marginTop: 0}}>
                                    The E-mail notifications and calendar inserted into the website to help you plan and implement your arrangements and online meetings.
                                </p>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Card isHoverable>
                           
                                <div className={styles.homeIcons}>
                                <span style={{display:'block', width: '40px', height:'40px'}}><img src="/sharable.svg" /></span>
                                    <Text css={{ mb: 0 , mt: 10, fontWeight: 'normal'}} h4>Sharable consultancy</Text>
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
                <Footer />
            </Container>
            </div>
        </div>)
}
Home.auth = {
    role: 'guest'
}
export default Home
