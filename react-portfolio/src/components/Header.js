import React, {useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Box,HStack} from "@chakra-ui/react";
import { faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

const socials = [
   {
       icon: faEnvelope,
       url: "mailto: hello@example.com",
   },
   {
    icon: faGithub,
    url: "https://github.com"
   },
   {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
   },
];

const Header = () => {
    const handleClick = (anchor) => () => {
      const id = `${anchor}-section`;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
  
    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
            <nav>
              {socials.map((social, index) => (
                <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration: "none", color: "white"}}
                >
                 <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </nav>
            <nav>
              <HStack spacing={8}>
                <div>
                <a
                href="#projects-section"
                style={{textDecoration: "none", color:"white"}}
                onClick={handleClick("projects")}
                >
                  Projects
                </a>
                </div>
                
                <div>
                <a 
                href="#contact-section"
                style={{textDecoration:"none", color:"white"}}
                onClick={handleClick("contact")}
                >
                  Contact me
                </a>
                </div>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    );
  };
  export default Header;
  