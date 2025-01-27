import SectionProvider from './components/SectionProvider'
import ParallaxSection from './components/ParallaxSection'

function App() {
  return (
    <main>
      <SectionProvider>
        <ParallaxSection />
      </SectionProvider>
      <section
        className="main__section"
        style={{
          height: '1000px',
          backgroundColor: 'var(--dark-secondary)',
        }}
      ></section>
    </main>
  )
}

export default App
