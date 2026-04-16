import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ProfileHeader from '@/components/ProfileHeader'
import Projects from '@/components/Projects'
import SocialSidebar from '@/components/SocialSidebar'
import WorkExperience from '@/components/WorkExperience'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between px-5">
      <SocialSidebar />

      <div className="max-w-[700px] w-full mx-auto pt-5">
        <ProfileHeader />
        <div className="flex flex-col gap-3">
          <WorkExperience />
          <Projects />
          <Contact />
        </div>
      </div>

      <Footer />
    </main>
  )
}
