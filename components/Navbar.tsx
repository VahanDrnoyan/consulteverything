import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Button, Text, Input } from "@nextui-org/react";
import Link from "next/link"
import { useSession } from "next-auth/react";
import { Dropdown, Avatar, Grid } from "@nextui-org/react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { useMemo } from "react";
type NavItems = {
    id:string;
    name:string;
    url: string;
}
export default function Navigation() {
    const { data: session } = useSession()
    const router = useRouter()
    const responsiveNavItems = useMemo(()=>{
        let navItems:NavItems[]  = []
        let allNavItems:NavItems[] = [
            {id: 'home', name:"Home",url:'/'},
            {id: 'browse', name:"Browse",url:'consultancies/search'}
        ];
        if(session && session.user){
            navItems = allNavItems.concat([
                {id: 'myConsultancies', name:"My consultancy", url: '#'},
                {id: 'schedule', name:"Schedule", url: '#'},
                {id: 'chatHistory', name:"Chat history", url: '#'},
        ])
    }
        return navItems
    }, [session]);
    
    return (

        <Navbar variant="sticky">
            <Navbar.Brand>
                <Navbar.Toggle css={{
                    '@sm': {
                        display: 'none',
                    }
                }}
                    aria-label="toggle navigation" />

                <Logo color="#333" size="2x" />
                <Input
                    css={{
                        ml: 10
                    }}
                    labelRight={<FontAwesomeIcon size={"1x"} fill="currentColor" icon={faSearch} />}
                    placeholder="Search"
                />
            </Navbar.Brand>
            {session && session?.user ? (
                <Navbar.Content enableCursorHighlight hideIn="sm" variant="underline-rounded">
                    <Navbar.Item isActive ={router.pathname === '/consultancies/search/[[...term]]'? true: false }><Link href={'consultancies/search'}>Browse</Link></Navbar.Item>
                    <Navbar.Item>
                        My consultancy
                    </Navbar.Item>
                    <Navbar.Item>Schedule</Navbar.Item>
                    <Navbar.Item>Chat history</Navbar.Item>
                </Navbar.Content>
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
                                        color="secondary"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                                    <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                        <Text b color="inherit" css={{ d: "flex" }}>
                                            {session.user.email}
                                        </Text>
                                    </Dropdown.Item>
                                    <Dropdown.Item key="dashboard">
                                        <Link href={'/dashboard'}>

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
                    <Button auto flat href="#">
                        Sign Up
                    </Button>
                </Navbar.Item>)}

            </Navbar.Content>
            <Navbar.Collapse >
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
        </Navbar>
    )
}
