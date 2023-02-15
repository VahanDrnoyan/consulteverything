import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import heroPic from "../public/avatars.png"
import targetIcon from "../public/target1_pink.png"
import playIcon from "../public/play1_pink.png"
import logoIcon from "../public/logo1.png"
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
  faBlog,
  faShare,
  faSubscript,
} from "@fortawesome/free-solid-svg-icons"
import LoginModal from "../components/LoginModal"
import { PressEvent } from "@react-types/shared"
import Logo from "../components/Logo"
import Footer from "../components/Footer"
import { NextPageWithAuth } from "./_app"
import { RGBA } from "graphql-scalars/mocks"

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
            py: "240px",
            m: 0,
            backgroundColor: "#fff",
          }}
        >
          <Logo color="#fff" size={80}></Logo>
          Grow with online consultancy!
          <br />
          <span
            style={{
              fontSize: "12px",
              backgroundColor: "#fff",
            }}
          >
            consulteverything.com <br />
          </span>
        </Text>
      </div>
      <div className={styles.bottomConatiner}>
        <Container
          css={{ marginTop: "0", maxWidth: 1600, alignItems: "start" }}
        >
          <Grid.Container
            gap={4}
            justify="center"
            css={{ p: 0, alignItems: "start" }}
          >
            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable variant="bordered" css={{ p: 0 }}>
                <Card.Body css={{ p: 0, width: "100%" }}>
                  <Text
                    css={{
                      clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      zIndex: 100,
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      //   bgBlur: "#ffffff11",
                      backgroundColor: "rgba(255,255,255, 0.09)",
                      p: 20,
                      color: "#fff",
                      textTransform: "uppercase",
                    }}
                    h4
                  >
                    Our mission...
                  </Text>
                  <Card.Image
                    src={targetIcon.src}
                    alt="Target"
                    css={{ objectFit: "cover" }}
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
                    p: 30,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Row css={{ flexDirection: "column" }}>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.2rem",
                        marginBottom: 20,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      Are you a specialist or a beginner seeking knowledge
                      development in your field of activity?
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.2rem",
                        marginBottom: 20,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      Are you in need of consulting in various institutions such
                      as embassis medical and municipal companies in rather
                      overloaded situations?
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.2rem",
                        marginBottom: 20,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      In this ever-changing world, it can be rather
                      time-consuming and tiresome.
                    </p>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>

            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable variant="bordered" css={{ p: 0 }}>
                <Card.Body css={{ p: 0 }}>
                  <Text
                    css={{
                      clipPath:
                        "polygon(0 0, 0% 100%, 100% 0)",
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      zIndex: 100,
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      //   bgBlur: "#ffffff11",
                      backgroundColor: "rgba(255,255,255, 0.09)",
                      p: 20,
                      color: "#fff",
                      textTransform: "uppercase",
                    }}
                    h4
                  >
                    Start solving problems...
                  </Text>
                  <Card.Image
                    src={playIcon.src}
                    alt="Target"
                    css={{ objectFit: "cover" }}
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
                    p: 30,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Row css={{ flexDirection: "column" }}>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.2rem",
                        marginBottom: 20,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      This platform is designed to receive and provide
                      consulting services for beginners and professionals from
                      around the world.
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.2rem",
                        marginBottom: 20,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      It appears to be a boundless consulting company with
                      constantly growing information stream...{" "}
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.2rem",
                        marginBottom: 20,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      So don’t hesitate to take a chance and join the community.
                    </p>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable variant="bordered" css={{ p: 0 }}>
                <Card.Body css={{ p: 0 }}>
                  <Text
                    css={{
                      clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      zIndex: 100,
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      //   bgBlur: "#ffffff11",
                      p: 20,
                      color: "#fff",
                      backgroundColor: "rgba(255,255,255, 0.09)",
                      textTransform: "uppercase",
                    }}
                    h4
                  >
                    Benefit from global community...
                  </Text>
                  <Card.Image
                    src={logoIcon.src}
                    alt="Community"
                    css={{ objectFit: "cover" }}
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
                    p: 30,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Row
                    css={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 20,
                        fontSize: "1.2rem",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      This platform is designed to receive and provide
                      consulting services for beginners and professionals from
                      around the world.
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.2rem",
                        marginBottom: 20,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      It appears to be a boundless consulting company with
                      constantly growing information stream...{" "}
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.2rem",
                        marginBottom: 20,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      So don’t hesitate to take a chance and join the community.
                    </p>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
        </Container>
        <div style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
          <Container css={{ maxWidth: 1600 }}>
            <Grid.Container gap={4}>
              <Grid
                lg={4}
                css={{ alignItems: "center", justifyContent: "center" }}
              >
                {status === "authenticated" ? (
                  <Button
                    auto
                    ghost
                    shadow={true}
                    css={{ borderRadius: "6px" }}
                    color="secondary"
                    size="xl"
                  >
                    Go to dashboard
                  </Button>
                ) : (
                  ""
                )}
              </Grid>
              <Grid
                lg={4}
                css={{ alignItems: "center", justifyContent: "center" }}
              >
                <Button
                  auto
                  ghost
                  color="secondary"
                  css={{ borderRadius: "6px" }}
                  shadow={true}
                  size="xl"
                >
                  Read our blog
                </Button>
              </Grid>
              <Grid
                lg={4}
                css={{ alignItems: "center", justifyContent: "center" }}
              >
                <Button
                  auto
                  ghost
                  shadow={true}
                  onClick={handleNavigateToConsultancies}
                  color="secondary"
                  size="xl"
                  css={{ borderRadius: "6px" }}
                >
                  Browse in all consultancies
                </Button>
              </Grid>
            </Grid.Container>
          </Container>
        </div>
        <Text
          h6
          css={{
            width: "100%",
            textTransform: "uppercase",
            letterSpacing: 10,
            textAlign: "center",
            m: 0,
            fontSize: "0.8rem",

            color: "#111",
          }}
        >
          Features
        </Text>
        <div
          style={{
            position: "relative",
            backgroundColor: "rgba(255,255,255,0.3)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container
            css={{
              marginTop: "0",
              maxWidth: 1000,
              position: "relative",
              zIndex: 100,
              my: 100,
            }}
          >
            <Grid.Container gap={2}>
              <Grid lg={6}>
                <Card isHoverable>
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",
                        fontSize: "0.8rem",
                        backgroundColor: "rgba(199,43,209, 0.2)",
                        color: "rgba(41,25,100,0.8)",
                      }}
                    >
                      Video call consulting
                    </Text>
                  </div>

                  <Card.Body css={{ p: 25, pt: 10 }}>
                    <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                      <img
                        alt="Video call"
                        width={35 + "px"}
                        height={35 + "px"}
                        src="/video.svg"
                      />
                    </div>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.1rem",
                        marginBottom: 20,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      Contact the experts in person and ask your questions.{" "}
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.1rem",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      This approach makes the communication more dynamic and
                      productive and contributes to building strong business
                      relationships.
                    </p>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid lg={6}>
                <Card isHoverable>
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",
                        fontSize: "0.8rem",
                        backgroundColor: "rgba(199,43,209, 0.3)",
                        color: "rgba(41,25,100,0.8)",
                      }}
                    >
                      Get paid for info
                    </Text>
                  </div>

                  <Card.Body css={{ p: 25, pt: 10 }}>
                    <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                      <img
                        alt="Video call"
                        width={35 + "px"}
                        height={35 + "px"}
                        src="/paid.svg"
                      />
                    </div>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.1rem",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
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
                <Card isHoverable>
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",
                        fontSize: "0.8rem",
                        backgroundColor: "rgba(199,43,209, 0.5)",
                        color: "rgba(41,25,100,0.8)",
                      }}
                    >
                      Transcription recording
                    </Text>
                  </div>

                  <Card.Body css={{ p: 25, pt: 10 }}>
                    <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                      <img
                        alt="Video call"
                        width={35 + "px"}
                        height={35 + "px"}
                        src="/recording.svg"
                      />
                    </div>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.1rem",
                        marginBottom: 20,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      Your live discussion will be recoded so later it will be
                      available as a reference.{" "}
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.1rem",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      Come back at any time to refresh your memory, sort out and
                      highlight the key points of the consultancy.
                    </p>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid lg={6}>
                <Card isHoverable>
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",
                        fontSize: "0.8rem",
                        backgroundColor: "rgba(199,43,209, 0.5)",
                        color: "rgba(41,25,100,0.8)",
                      }}
                    >
                      Time negotiations
                    </Text>
                  </div>

                  <Card.Body css={{ p: 25, pt: 10 }}>
                    <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                      <img
                        alt="Video call"
                        width={35 + "px"}
                        height={35 + "px"}
                        src="/time.svg"
                      />
                    </div>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.1rem",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
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
                <Card isHoverable>
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",
                        fontSize: "0.8rem",
                        backgroundColor: "rgba(199,43,209, 0.9)",
                        color: "#fff",
                      }}
                    >
                      Custom form creation
                    </Text>
                  </div>
                  <Card.Body css={{ p: 25, pt: 10 }}>
                    <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                      <img
                        alt="Video call"
                        width={35 + "px"}
                        height={35 + "px"}
                        src="/form.svg"
                      />
                    </div>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.1rem",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      To make the communication process more accurate and
                      productive the platform enables you to create and fill a
                      custom form.
                    </p>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid lg={6}>
                <Card isHoverable>
                  <div>
                    <Text
                      h6
                      css={{
                        width: "100%",
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: 10,
                        textAlign: "center",
                        py: "20px",
                        backgroundColor: "rgba(199,43,209, 0.9)",
                        color: "#fff",
                      }}
                    >
                      Sharable consultancy
                    </Text>
                  </div>
                  <Card.Body css={{ p: 25, pt: 10 }}>
                    <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                      <img
                        alt="Video call"
                        width={35 + "px"}
                        height={35 + "px"}
                        src="/sharable.svg"
                      />
                    </div>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.1rem",
                        marginBottom: 20,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      Get the shareable link of your form and place it on your
                      social media to engage more requests for your consulting
                      services.
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontSize: "1.1rem",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
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
