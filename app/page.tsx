import { About } from '@/components/about'
import { Academics } from '@/components/academics'
import { Achievements } from '@/components/achievements'
import { Admissions } from '@/components/admissions'
import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { FloatingActions } from '@/components/floating-actions'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { StudentLife } from '@/components/student-life'
import { Testimonials } from '@/components/testimonials'
import { TrustBar } from '@/components/trust-bar'
import { WhyChoose } from '@/components/why-choose'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustBar />
        <About />
        <WhyChoose />
        <Academics />
        <Achievements />
        <Gallery />
        <StudentLife />
        <Testimonials />
        <Admissions />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
