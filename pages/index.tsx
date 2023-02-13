import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import heroPic from "../public/avatars.png"
import targetIcon from "../public/target1.png"
import playIcon from "../public/play1.png"
import logoIcon from "../public/logo.png"
import logoSmall from "../public/logo_small.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircle,
  faListAlt,
  faFileVideo,
  faMoneyBill1,
  faEdit,
  faCalendar,
  faUser,
} from "@fortawesome/free-regular-svg-icons"
import {
  Text,
  Avatar,
  Grid,
  Container,
  Card,
  Row,
  Button,
} from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"
import {
  faArrowRight,
  faHome,
  faHomeAlt,
  faHomeLg,
  faSearch,
  faShare,
  faSubscript,
} from "@fortawesome/free-solid-svg-icons"
import LoginModal from "../components/LoginModal"
import { PressEvent } from "@react-types/shared"
import Logo from "../components/Logo"
import Footer from "../components/Footer"
import { NextPageWithAuth } from "./_app"

const Home: NextPageWithAuth = (_props) => {
  const { status } = useSession()
  const router = useRouter()

  const handleNavigateToConsultancies = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    router.push({
      pathname: "/consultancies/search",
    })
  }
  return (
    <div style={{ background: "#dedede" }}>
      <Head>
        <title>Consult Everything | Home</title>
        <meta
          name="description"
          content="Someone in the world is ready to provide the
                            necessary and highly qualified answers to all of your questions!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text
          h1
          css={{
            width: "100%",
            textTransform: "uppercase",
            letterSpacing: 4,
            textAlign: "center",
            py: "40px",
            m: 0,
            backgroundColor: "#fff",
          }}
        >
          Grow with online consultancy!
        </Text>
        <Text
          h4
          css={{
            textAlign: "center",
            width: "100%",
            m: 0,
            backgroundColor: "#fff",
          }}
        >
          consulteverything.com <br />
          <br />
        </Text>
      </div>
      <div className={styles.bottomConatiner}>
        <Container css={{ marginTop: "0" }}>
          <Grid.Container gap={4} justify="center" css={{ p: 0 }}>
            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable css={{ p: 0 }}>
                <div
                  style={{
                    position: "absolute",
                    zIndex: 100,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Text
                    css={{ textAlign: "center", bgBlur: "#ffffff99", p: 20 }}
                    h2
                  >
                    Our mission
                  </Text>
                </div>

                <Card.Body css={{ p: 0, maxHeight: "1000px" }}>
                  <Card.Image
                    src={targetIcon.src}
                    alt="Target"
                    css={{ maxHeight: "1000px", objectFit: "cover" }}
                  />
                </Card.Body>

                <Card.Footer
                  isBlurred
                  css={{
                    // position: "absolute",
                    bgBlur: "#ffffff99",
                    // top:'55%',
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Row css={{ flexDirection: "column", mb: 20 }}>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                      }}
                    >
                      Are you a specialist or a beginner seeking knowledge
                      development in your field of activity?
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                      }}
                    >
                      Are you in need of consulting in various institutions such
                      as embassis medical and municipal companies in rather
                      overloaded situations?
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                      }}
                    >
                      In this ever-changing world, it can be rather
                      time-consuming and tiresome.
                    </p>
                  </Row>
                  <Row
                    css={{ alignItems: "flex-end", justifyContent: "flex-end" }}
                  >
                    <Button css={{ minWidth: "50%" }} light color={"default"}>
                      But not anymore!
                    </Button>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>

            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable css={{ p: 0 }}>
                <div
                  style={{
                    position: "absolute",
                    zIndex: 100,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Text
                    css={{ textAlign: "center", bgBlur: "#ffffff99", p: 20 }}
                    h2
                  >
                    Start solving problems...
                  </Text>
                </div>

                <Card.Body css={{ p: 0, maxHeight: "1000px" }}>
                  <Card.Image
                    src={playIcon.src}
                    alt="Target"
                    css={{ maxHeight: "1000px", objectFit: "cover" }}
                  />
                </Card.Body>

                <Card.Footer
                  css={{
                    // position: "absolute",
                    bgBlur: "#ffffff99",
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    // top: '55%',
                    zIndex: 1,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Row css={{ flexDirection: "column", mb: 20 }}>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                      }}
                    >
                      This platform is designed to receive and provide
                      consulting services for beginners and professionals from
                      around the world.
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                      }}
                    >
                      It appears to be a boundless consulting company with
                      constantly growing information stream...{" "}
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                      }}
                    >
                      So don’t hesitate to take a chance and join the community.
                    </p>
                  </Row>
                  <Row
                    justify="flex-end"
                    css={{
                      xs: {
                        flexDirection: "column",
                      },
                    }}
                  >
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable css={{ p: 0 }}>
                <div
                  style={{
                    position: "absolute",
                    zIndex: 100,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Text
                    css={{ textAlign: "center", bgBlur: "#ffffff99", p: 20 }}
                    h2
                  >
                    Benefit from global community
                  </Text>
                </div>
                <Card.Body css={{ p: 0, maxHeight: "1000px" }}>
                  <Card.Image
                    src={logoIcon.src}
                    alt="Community"
                    css={{ maxHeight: "1000px", objectFit: "cover" }}
                  />
                </Card.Body>
                <Card.Footer
                  css={{
                    // position: "absolute",
                    bgBlur: "#ffffff99",
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    // top: '55%',
                    zIndex: 1,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Row css={{ flexDirection: "column", mb: 20 }}>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                      }}
                    >
                      This platform is designed to receive and provide
                      consulting services for beginners and professionals from
                      around the world.
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                      }}
                    >
                      It appears to be a boundless consulting company with
                      constantly growing information stream...{" "}
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                      }}
                    >
                      So don’t hesitate to take a chance and join the community.
                    </p>
                  </Row>
                  <Row
                    justify="flex-end"
                    css={{
                      xs: {
                        flexDirection: "column",
                      },
                    }}
                  ></Row>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
        </Container>
        <div style={{ paddingTop: '8rem', paddingBottom: '8rem'}}>
          <Container>
            <Grid.Container gap={4}>
            <Grid lg={4} css={{ alignItems: 'center', justifyContent: "center"}}>
                {status === "authenticated" ? (
                  <Button
                    color="success"
                    icon={
                      <FontAwesomeIcon size={"1x"} color="#fff" icon={faUser} />
                    }
                    size="xl"
                  >
                    Go to dashboard
                  </Button>
                ) : (
                  ""
                )}
              </Grid>
              <Grid lg={4} css={{ alignItems: 'center', justifyContent: "center"}}></Grid>
              <Grid lg={4} css={{ alignItems: 'center', justifyContent: "center"}}>
                <Button
                  onClick={handleNavigateToConsultancies}
                  css={{ paddingLeft: 60 }}
                  color="secondary"
                  icon={
                    <FontAwesomeIcon size={"1x"} color="#fff" icon={faSearch} />
                  }
                  size="xl"
                >
                Browse in all consultancies
                </Button>
              </Grid>
            </Grid.Container>
          </Container>
        </div>
        <div style={{ backgroundColor: "#010101", paddingBottom: '60px'}}>
          <Text
            h6
            css={{
              width: "100%",
              textTransform: "uppercase",
              letterSpacing: 10,
              textAlign: "center",
              py: "40px",
              my: 80,
              color: "#fff",
            }}
          >
            Features
          </Text>
          <Container css={{ marginTop: "0", maxWidth: 1000 }}>
            <Grid.Container gap={2}>
              <Grid lg={6}>
                <Card isHoverable variant="flat">
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",

                        backgroundColor: "#444",
                        color: "#fff",
                      }}
                    >
                      Video call consulting
                    </Text>
                  </div>

                  <Card.Body>
                    <p style={{ marginTop: 0, fontSize: "1.4rem" }}>
                      Contact the experts in person and ask your questions.{" "}
                    </p>
                    <p style={{ marginTop: 0, fontSize: "1.4rem" }}>
                      This approach makes the communication more dynamic and
                      productive and contributes to building strong business
                      relationships.
                    </p>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid lg={6}>
                <Card isHoverable variant="flat">
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",

                        backgroundColor: "#444",
                        color: "#fff",
                      }}
                    >
                      Get paid for info
                    </Text>
                  </div>

                  <Card.Body>
                    <p style={{ marginTop: 0, fontSize: "1.4rem" }}>
                      Our subscribers are enabled to establish the fee for their
                      work considering a range of factors, such as time,
                      difficulty, etc.
                    </p>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
              <Grid lg={6}>
                <Card isHoverable variant="flat">
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",

                        backgroundColor: "#444",
                        color: "#fff",
                      }}
                    >
                      Transcription recording
                    </Text>
                  </div>

                  <Card.Body>
                    <p style={{ marginTop: 0, fontSize: "1.4rem" }}>
                      Your live discussion will be recoded so later it will be
                      available as a reference.{" "}
                    </p>
                    <p style={{ marginTop: 0, fontSize: "1.4rem" }}>
                      Come back at any time to refresh your memory, sort out and
                      highlight the key points of the consultancy.
                    </p>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid lg={6}>
                <Card isHoverable variant="flat">
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",

                        backgroundColor: "#444",
                        color: "#fff",
                      }}
                    >
                      Time negotiations
                    </Text>
                  </div>

                  <Card.Body>
                    <p style={{ marginTop: 0, fontSize: "1.4rem" }}>
                      The E-mail notifications and calendar inserted into the
                      website to help you plan and implement your arrangements
                      and online meetings.
                    </p>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
              <Grid lg={6}>
                <Card isHoverable variant="flat">
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",

                        backgroundColor: "#444",
                        color: "#fff",
                      }}
                    >
                      Custom form creation
                    </Text>
                  </div>
                  <Card.Body>
                    <p style={{ marginTop: 0, fontSize: "1.4rem" }}>
                      To make the communication process more accurate and
                      productive the platform enables you to create and fill a
                      custom form.
                    </p>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid lg={6}>
                <Card isHoverable variant="flat">
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",
                        backgroundColor: "#444",
                        color: "#fff",
                      }}
                    >
                      Sharable consultancy
                    </Text>
                  </div>
                  <Card.Body>
                    <p style={{ marginTop: 0, fontSize: "1.4rem" }}>
                      Get the shareable link of your form and place it on your
                      social media to engage more requests for your consulting
                      services.
                    </p>
                    <p style={{ marginTop: 0, fontSize: "1.4rem" }}>
                      Turn free social traffic into a consistent source of
                      income!
                    </p>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>
          </Container>
        </div>
        <Footer />
      </div>
    </div>
  )
}
Home.auth = {
  role: "guest",
}
export default Home
