import './App.css'
import Counter from './components/counter/counter.component'
import HomepageGallery from './components/homepage-gallery/homepage-gallery.component'
import ApplicationNavbar from "./components/navbar/navbar.component"

function App() {
  return (
    <div>
      <ApplicationNavbar />
      <HomepageGallery />
      <Counter/>
    </div>
  )
}

export default App
