import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import heroPic from "../public/avatars.png"
import targetIcon from "../public/target1.png"
import playIcon from "../public/play1.png"
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
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={styles.logoConatiner} style={{ marginTop: "35px" }}>
            <div
              className={styles.heroImage}
              style={{ width: "200px", height: "200px;" }}
            >
              <Image
                width="200px"
                height="200px"
                src={logoSmall.src}
                alt="Default Image"
                objectFit="cover"
style={{ borderRadius:'50%' }}
/>
            </div>

            <Text
              h3
              color="#222"
              css={{ mt: 10, mb: 100, textAlign: "center" }}
            >
              Push your boundaries, <br />
              with consultancy!
            </Text>
          </div>
        </div>
      </Container>
      <div className={styles.bottomConatiner}>
        <Container css={{ marginTop: "0" }}>
          <Grid.Container gap={2} justify="center" css={{ p: 0 }}>
            <Grid xs={12} sm={6}>
              <Card isHoverable css={{ p: 0 }}>
                <div
                  style={{
                    position: "absolute",
                    zIndex: 100,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Text css={{ textAlign: "center", bgBlur: "#ffffff66" }} h2>
                    Our mission
                  </Text>
                </div>

                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={targetIcon.src}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Target"
                  />
                </Card.Body>

                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Row css={{ flexDirection: "column", mb: 20 }}>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      Are you a specialist or a beginner seeking knowledge
                      development in your field of activity?
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "2rem",
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
                        fontSize: "2rem",
                      }}
                    >
                      In this ever-changing world, it can be rather
                      time-consuming and tiresome.
                    </p>
                  </Row>
                  <Row>
                    <Button css={{ minWidth: "50%" }} light color={"default"}>
                      But not anymore!
                    </Button>
                    <Button
                      onClick={handleNavigateToConsultancies}
                      css={{ bg: "$accents7", color: "$white" }}
                      icon={
                        <FontAwesomeIcon
                          size={"1x"}
                          color="#fff"
                          icon={faSearch}
                        />
                      }
                    >
                      See consultancies
                    </Button>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={12} sm={6}>
              <Card isHoverable>
                <div
                  style={{
                    position: "absolute",
                    zIndex: 100,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Text css={{ textAlign: "center", bgBlur: "#ffffff66" }} h2>
                    Start solving your everyday problems...
                  </Text>
                </div>

                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={playIcon.src}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Target"
                  />
                </Card.Body>

                <Card.Footer
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,

                    zIndex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Row css={{ flexDirection: "column", mb: 20 }}>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "2rem",
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
                        fontSize: "2rem",
                      }}
                    >
                      It appears to be a boundless consulting company with
                      constantly growing information stream...{" "}
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        fontWeight: "bold",
                        fontSize: "2rem",
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
                    {status === "authenticated" ? (
                      <Button
                        css={{ bg: "$accents7", color: "$white" }}
                        icon={
                          <FontAwesomeIcon
                            size={"1x"}
                            color="#fff"
                            icon={faUser}
                          />
                        }
                      >
                        Go to dashboard
                      </Button>
                    ) : (
                      ""
                    )}
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
          <Text h3 css={{ width: "100%", textAlign: "center", my: "40px" }}>
            Consult Everything provides the following features:
          </Text>

          <Grid.Container gap={2} justify="center" css={{ p: 0 }}>
            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable>
                <div className={styles.homeIcons}>
                  <span
                    style={{ display: "block", width: "40px", height: "40px" }}
                  >
                    <img src="/form.svg" />
                  </span>
                  <Text h4 css={{ mb: 0, mt: 10, fontWeight: "normal" }}>
                    Custom form creation
                  </Text>
                </div>

                <Card.Body>
                  <p style={{ marginTop: 0 }}>
                    To make the communication process more accurate and
                    productive the platform enables you to create and fill a
                    custom form.
                  </p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable>
                <div className={styles.homeIcons}>
                  <span
                    style={{ display: "block", width: "40px", height: "40px" }}
                  >
                    <img src="/video.svg" />
                  </span>
                  <Text css={{ mb: 0, mt: 10, fontWeight: "normal" }} h4>
                    Video call consulting
                  </Text>
                </div>

                <Card.Body>
                  <p style={{ marginTop: 0 }}>
                    Contact the experts in person and ask your questions.{" "}
                  </p>
                  <p style={{ marginTop: 0 }}>
                    This approach makes the communication more dynamic and
                    productive and contributes to building strong business
                    relationships.
                  </p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable>
                <div className={styles.homeIcons}>
                  <span
                    style={{ display: "block", width: "40px", height: "40px" }}
                  >
                    <img src="/paid.svg" />
                  </span>
                  <Text css={{ mb: 0, mt: 10, fontWeight: "normal" }} h4>
                    Get paid for info
                  </Text>
                </div>

                <Card.Body>
                  <p style={{ marginTop: 0 }}>
                    Our subscribers are enabled to establish the fee for their
                    work considering a range of factors, such as time,
                    difficulty, etc.
                  </p>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center" css={{ p: 0, mt: 12 }}>
            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable>
                <div className={styles.homeIcons}>
                  <span
                    style={{ display: "block", width: "40px", height: "40px" }}
                  >
                    <img src="/recording.svg" />
                  </span>
                  <Text css={{ mb: 0, mt: 10, fontWeight: "normal" }} h4>
                    Consultancy transcription recording
                  </Text>
                </div>

                <Card.Body>
                  <p style={{ marginTop: 0 }}>
                    Your live discussion will be recoded so later it will be
                    available as a reference.{" "}
                  </p>
                  <p style={{ marginTop: 0 }}>
                    Come back at any time to refresh your memory, sort out and
                    highlight the key points of the consultancy.
                  </p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable>
                <div className={styles.homeIcons}>
                  <span
                    style={{ display: "block", width: "40px", height: "40px" }}
                  >
                    <img src="/time.svg" />
                  </span>
                  <Text css={{ mb: 0, mt: 10, fontWeight: "normal" }} h4>
                    Time negotiations
                  </Text>
                </div>

                <Card.Body>
                  <p style={{ marginTop: 0 }}>
                    The E-mail notifications and calendar inserted into the
                    website to help you plan and implement your arrangements and
                    online meetings.
                  </p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
              <Card isHoverable>
                <div className={styles.homeIcons}>
                  <span
                    style={{ display: "block", width: "40px", height: "40px" }}
                  >
                    <img src="/sharable.svg" />
                  </span>
                  <Text css={{ mb: 0, mt: 10, fontWeight: "normal" }} h4>
                    Sharable consultancy
                  </Text>
                </div>

                <Card.Body>
                  <p style={{ marginTop: 0 }}>
                    Get the shareable link of your form and place it on your
                    social media to engage more requests for your consulting
                    services.
                  </p>
                  <p style={{ marginTop: 0 }}>
                    Turn free social traffic into a consistent source of income!
                  </p>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
          <Footer />
        </Container>
      </div>
    </div>
  )
}
Home.auth = {
  role: "guest",
}
export default Home
