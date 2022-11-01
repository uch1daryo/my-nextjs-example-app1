import Container from "@mui/material/Container";
import Hero from "./Hero";
import Overview from "./Overview";
import Message from "./Message";
import News from "./News";
import Social from "./Social";

export default function Main() {
  return (
    <Container maxWidth="lg">
      <Hero />
      <Overview />
      <Message />
      <News />
      <Social />
    </Container>
  );
}
