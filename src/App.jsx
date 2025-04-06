import './App.css'
import Counter from './components/counter/counter.component'
import HomepageGallery from './components/homepage-gallery/homepage-gallery.component'
import ApplicationNavbar from "./components/navbar/navbar.component"
import PostListing from './components/post-listing/post-listing.component'

function App() {
  return (
    <div>
      <ApplicationNavbar />
      <HomepageGallery />
      <Counter />
      <PostListing />
    </div>
  )
}

export default App
