import React, { useState, useEffect } from "react"
import { Container, Text, Button } from "@nextui-org/react"
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          color="gradient"
          css={{ minWidth: 'auto' }}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            padding: "2rem 1.6rem",
            fontWeight: 'bold'
          }}
        >
          Top
        </Button>
      )}
    </div>
  )
}
export default BackToTopButton
