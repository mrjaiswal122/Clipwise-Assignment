
import './App.css'
import Hero from './components/Hero.tsx'
import Products from './components/Products.tsx'
import End from './components/End.tsx'


function App() {

  return (
    <>


    <main className='w-full max-w-[1440px] mx-auto'>
       <Hero/>
       <Products/>
       <End/>
    </main>

    </>
  )
}

export default App
