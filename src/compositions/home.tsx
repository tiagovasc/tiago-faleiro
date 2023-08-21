import Transformations from 'compositions/transformations'
import LastParagraph from 'compositions/last-paragraph'
import Testimonials from 'compositions/testimonials'
import EbcDiagram from 'compositions/ebc-diagram'
import SigningUp from 'compositions/signing-up'
import Benefits from 'compositions/benefits'
import Services from 'compositions/services'
import Articles from 'compositions/articles'
import Pricing from 'compositions/pricing'
import Contact from 'compositions/contact'
import About from 'compositions/about'
import Footer from 'components/footer'
import Hero from 'compositions/hero'

import Page from 'components/page'
import Nav from 'components/nav'

export default function Home(): JSX.Element {
  return (
    <Page>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <EbcDiagram />
      <Transformations />
      <Testimonials />
      <Pricing />
      <SigningUp />
      <Articles />
      <LastParagraph />
      <Contact />
      <Footer />
    </Page>
  )
}
