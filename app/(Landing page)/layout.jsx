import Footer from '@/components/footer'

const LandingLayout = async ({ children }) => {
  return (
    <main className="h-full bg-white overflow-y-auto w-full">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
      <Footer />
    </main>
  )
}

export default LandingLayout
