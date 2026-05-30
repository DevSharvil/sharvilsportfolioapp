import { Helmet } from 'react-helmet-async'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Resume } from '@/components/sections/Resume'
import { Photography } from '@/components/sections/Photography'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sharvil Bidkar — React.js Frontend Developer</title>
        <meta
          name="description"
          content="Sharvil Bidkar is a React.js Frontend Developer with 4 years of experience building enterprise dashboards, finance workflows, and performant web applications."
        />
      </Helmet>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Photography />
        <Contact />
      </main>
    </>
  )
}
