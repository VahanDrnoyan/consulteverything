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
    routename?: string
}
export default function Navigation() {
    const { data: session } = useSession()
    const router = useRouter()
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
        ])
    }
        return navItems
    }, [session]);
    
    return (

        <Navbar disableBlur isCompact shouldHideOnScroll variant="sticky" containerCss={{'bg': '$blue100'}} css={{'bg': '$blue100'}}>
            <Navbar.Brand>
                <Navbar.Toggle css={{
                    '@sm': {
                        display: 'none',
                    }
                }}
                    aria-label="toggle navigation" />

                <Logo color="var(--nextui-colors-primary)" size="2x" />
                <Input
                status="primary"
                    css={{
                        ml: 10
                    }}
                    labelRight={<FontAwesomeIcon size={"1x"} fill="currentColor" icon={faSearch} />}
                    placeholder="Search"
                />
            </Navbar.Brand>
            {session && session?.user ? (
                <Navbar.Content enableCursorHighlight hideIn="sm" variant="underline-rounded">
                    <>{responsiveNavItems.map((item, index) => (
                    <Navbar.Item isActive={router.pathname === item.routename} key={item.id}>
                            <Link
                                href={item.url}
                            >
                                {item.name}
                            </Link>
                            
                        </Navbar.Item>
                            
                ))}<Dropdown>
                                <Navbar.Item>
                                    <Dropdown.Button
                                        auto
                                        light
                                        css={{
                                            px: 0,
                                            dflex: "center",
                                            svg: { pe: "none" },
                                        }}
                                    
                                        ripple={false}
                                    >
                                        My consultancy
                                    </Dropdown.Button>
                                </Navbar.Item>
                                <Dropdown.Menu
                                    aria-label="ACME features"
                                    css={{
                                        $$dropdownMenuWidth: "340px",
                                        $$dropdownItemHeight: "70px",
                                        "& .nextui-dropdown-item": {
                                            py: "$4",
                                            // dropdown item left icon
                                            svg: {
                                                color: "$secondary",
                                                mr: "$4",
                                            },
                                            // dropdown item title
                                            "& .nextui-dropdown-item-content": {
                                                w: "100%",
                                                fontWeight: "$semibold",
                                            },
                                        },
                                    }}
                                >
                                    <Dropdown.Item
                                        key="autoscaling"
                                        showFullDescription
                                        description="ACME scales apps to meet user demand, automagically, based on load."
                                        
                                    >
                                        Autoscaling
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        key="usage_metrics"
                                        showFullDescription
                                        description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                                        
                                    >
                                        Usage Metrics
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        key="production_ready"
                                        showFullDescription
                                        description="ACME runs on ACME, join us and others serving requests at web scale."
                                        
                                    >
                                        Production Ready
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        key="99_uptime"
                                        showFullDescription
                                        description="Applications stay on the grid with high availability and high uptime guarantees."
                                        
                                    >
                                        +99% Uptime
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        key="supreme_support"
                                        showFullDescription
                                        description="Overcome any challenge with a supporting team ready to respond."
                                    >
                                        +Supreme Support
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></>
        
                    
                
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
                                        color="primary"
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
