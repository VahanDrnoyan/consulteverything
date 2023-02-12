import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Button, Text, Input } from "@nextui-org/react";
import Link from "next/link"
import { useSession } from "next-auth/react";
import { Dropdown, Avatar, Grid } from "@nextui-org/react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import LoginModal from "./LoginModal";
import Image from "next/image"
import logoSmall from "../public/logo_small.png"

type NavItems = {
    id:string;
    name:string;
    url: string;
    routename?: string
}
export default function Navigation() {
    const [showModal, setShowModal] = useState(false);
    const { data: session } = useSession()
    const router = useRouter()
    const showModalhandler = () => {
        setShowModal(true);
    }
    const responsiveNavItems = useMemo(()=>{
        let navItems:NavItems[]  = []
        let allNavItems:NavItems[] = [
            {id: 'home', name:"Home",url:'/', routename:'/'},
            {id: 'browse', name:"Browse",url: router.pathname === 'consultancies/search/[[...term]]'? '': '/consultancies/search', routename: '/consultancies/search/[[...term]]' }
        ];
        if(session && session.user){
            navItems = allNavItems.concat([
                {id: 'myRequests', name:"My request", url: '#', routename: ''},
                {id: 'schedule', name:"Schedule", url: '#', routename:''},
                {id: 'chatHistory', name:"Chat history", url: '#', routename:''},
                {id: 'myConsultancy', name:"My consultancy", url: '/dashboard/consultancies', routename:'myConsultancy'},
        ])
    }
        return navItems
    }, [session]);
    
    return (

        <><Navbar    disableShadow={true} maxWidth="fluid" variant="sticky" containerCss={{ 'bg': '#2b224c !important', opacity: 1 }} css={{ 'bg': '#2b224c' }}>
            <Navbar.Brand>
                <Navbar.Toggle css={{
                    '@sm': {
                        display: 'none',
                    }
                }}
                    aria-label="toggle navigation" />
<Image
  width={50}
  height={50}  
  src={logoSmall.src}
  alt="Default Image"
  objectFit="cover"
  style={{ borderRadius: '50%' }}
/>
                {/* <Logo color="#000" size="50" /> */}
            </Navbar.Brand>
            {session && session?.user ? (
                <Navbar.Content enableCursorHighlight hideIn="sm" variant="underline-rounded">
                    <>{responsiveNavItems.map((item, index) => (
                        <Navbar.Item isActive={router.pathname === item.routename} key={item.id} css={{ color: '#fff'}}>
                            <Link
                                href={item.url}
                            >
                                {item.name}
                            </Link>

                        </Navbar.Item>

                    ))} </></Navbar.Content>

            ) : ('')}
            <Navbar.Content>
                {session && session?.user ? (
                    <Grid.Container justify="flex-start" gap={2}>
                        <Grid>
                            <Dropdown placement="bottom-left">
                                <Dropdown.Trigger>
                                    <Avatar
                                        bordered
                                        size="lg"
                                        as="button"
                                        color="default"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                </Dropdown.Trigger>
                                <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                                    <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                        <Text b color="inherit" css={{ d: "flex" }}>
                                            {session.user.email}
                                        </Text>
                                    </Dropdown.Item>
                                    <Dropdown.Item key="dashboard">
                                        <Link style={{display: 'block',width:'100%'}} href={'/dashboard'}>

                                            Dashboard

                                        </Link>

                                    </Dropdown.Item>
                                    <Dropdown.Item key="settings" withDivider>
                                        My profile
                                    </Dropdown.Item>
                                    <Dropdown.Item key="team_settings">Settings</Dropdown.Item>
                                    <Dropdown.Item key="analytics" withDivider>
                                        Payment method
                                    </Dropdown.Item>
                                    <Dropdown.Item key="logout" color="error" withDivider>
                                        Log Out
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid>
                    </Grid.Container>
                ) : (<Navbar.Item>
                    <Button color={"default"} css={{'bg': '$accents9'}} href="#" onClick={showModalhandler}>
                        Enter with email
                    </Button>
                </Navbar.Item>)}

            </Navbar.Content>
            <Navbar.Collapse>
                {responsiveNavItems.map((item, index) => (
                    <Navbar.CollapseItem key={item.id}>
                        <Link
                            href={item.url}
                        >
                            {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar><LoginModal show={showModal} setShow={setShowModal} /></>
    )
}
