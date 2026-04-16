import Link from 'next/link'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col pt-10 px-5 bg-white dark:bg-[#1a1a1a] text-[#2d2d2d] dark:text-[#e5e5e5] transition-colors duration-300">
      <div className="max-w-[700px] w-full mx-auto flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-5xl font-medium">404</h1>
          <p className="text-lg text-[#666] dark:text-[#999]">
            Page not found
          </p>
          <p>
            The page you are looking for doesn't exist or has been moved
          </p>
          <Link
            href="/"
            className="underline underline-offset-[4px]"
          >
            Go back home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
