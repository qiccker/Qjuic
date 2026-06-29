import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Capabilities from '../components/Capabilities';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>QJUIC — Digital Experiences Crafted | Web Developer & Designer</title>
        <meta name="description" content="QJUIC — Digital Brutalism & Creative Web Development. Premium websites, e-commerce stores, and web applications. View pricing and transmit your signal." />
        <meta property="og:title" content="QJUIC — Digital Experiences Crafted" />
        <meta property="og:description" content="Transforming raw ideas into high-impact digital products. View portfolio and website making charges." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero />
      <Works />
      <Capabilities />
      <Pricing />
      <About />
      <Contact />
    </>
  );
}
