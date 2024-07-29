import Baner from './components/Baner'
import Bestsellers from './components/Bestsellers/Bestsellers'
import Blogs from './components/Blogs/Blogs'
import Audio from './components/boltAudio/Audio'
import Brands from './components/Brands/Brands'
import Category from './components/Category/Category'
import Deals from './components/Deals/Deals'
import Discount from './components/Discount/Discount'
import Features from './components/Features/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NewLaunches from './components/NewLaunches/NewLaunches'
import Press from './components/Press/Press'
import Trending from './components/Trending/Trending'


function App() {

  return (
    <>
      <Navbar/>
      <Baner/>
      <Brands/>
      <Features/>
      <NewLaunches/>
      <Bestsellers/>
      <Discount/>
      <Category/>
      <Trending/>
      <Deals/>
      <Audio/>
      <img src="https://www.fireboltt.com/cdn/shop/files/fireboltt_banner_1920_2_1700x.jpg?v=1689828512" className='p-8 border-t' alt="" />
      <Blogs/>
      <Press/>
      <Footer/>
      
        
    </>
  )
}

export default App
