import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import {FaYoutube,FaTwitter, FaInstagramSquare,FaFacebookF} from 'react-icons/fa'; 
const Footer = () => {
  return (
    <Box className="bg-dark-subtle">
      {/* <h1 style={{ color: "black", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
       BOOK STORE: A Portal For Computer Science Books
      </h1> */}
      <br></br>
      <br></br>
      <Container>
        <Row>
        <Column>
            <Heading>Home</Heading>
            <FooterLink href="/Home">Home Page</FooterLink>
          </Column>
          <Column>
            <Heading>Books</Heading>
            <FooterLink href="/Book1">Books Page</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="/Contact">Contact Page</FooterLink>
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/About">About Page</FooterLink>
          </Column>
          <Column>
            <Heading>Cart</Heading>
            <FooterLink href="/Cart">Cart Page</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <Row>
            <Column>
            <FooterLink href="https://www.google.com/search?q=book+store+facebook+link&oq=book+store+facebook+link&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIKCAUQIRgWGB0YHjIKCAYQIRgWGB0YHjIMCAcQIRgPGBYYHRgeMgoICBAhGBYYHRgeMgoICRAhGBYYHRge0gEJMTQ0NzlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">
            < FaFacebookF size={30}/>
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
            </FooterLink> 
            </Column>
            <Column>
            <FooterLink href="https://www.google.com/search?q=book+store+instagram+link&sca_esv=554677110&ei=-8fRZO6uH_XdseMP9NSEkAI&oq=book+store+insta+link&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWJvb2sgc3RvcmUgaW5zdGEgbGluayoCCAAyCBAhGKABGMMEMggQIRigARjDBDIIECEYoAEYwwRIvEtQzTlY7DlwAngBkAEBmAGzAaABmgWqAQMwLjS4AQHIAQD4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp">
            < FaInstagramSquare size={30}/>
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
            </FooterLink>
            </Column>
            <Column>
            <FooterLink href="https://www.google.com/search?q=book+store+twitter+link&sca_esv=554677110&ei=T8jRZP-WBrrVseMP8KCyoAM&ved=0ahUKEwi_-uO1oMyAAxW6amwGHXCQDDQQ4dUDCA8&uact=5&oq=book+store+twitter+link&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2Jvb2sgc3RvcmUgdHdpdHRlciBsaW5rMggQIRigARjDBDIIECEYoAEYwwQyCBAhGKABGMMEMggQIRigARjDBEjRKVDgCViBF3ABeAGQAQCYAeUBoAGxB6oBBTIuNC4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICDRAAGEcY1gQYyQMYsAPCAgsQABiKBRiSAxiwA8ICChAhGKABGMMEGAriAwQYACBBiAYBkAYJ&sclient=gws-wiz-serp">
            < FaTwitter size={30}/>
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
            </FooterLink>
            </Column>
            <Column>
            <FooterLink href="https://www.google.com/search?q=book+store+youtube+link&sca_esv=554677110&ei=b8jRZIWoCbW5seMPxpWauA8&ved=0ahUKEwjFm4jFoMyAAxW1XGwGHcaKBvcQ4dUDCA8&uact=5&oq=book+store+youtube+link&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2Jvb2sgc3RvcmUgeW91dHViZSBsaW5rMgUQIRigATIFECEYoAFI93JQrwtYzDhwAXgBkAEAmAGfAaABtwmqAQMyLji4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIIECEYoAEYwwTCAgUQABiABMICBhAAGAUYHsICCBAAGAgYHhgKwgIGEAAYCBgewgIIEAAYigUYhgPCAgoQIRigARjDBBgK4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp">
            < FaYoutube size={30}/>
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
            </FooterLink>
            </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

