import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Layout({ children }) {
    return (
      <div className='main-wrapper'>
        <nav>
            <Navbar />
            <hr style={{opacity:"0.2"}} />
        </nav>
            <main>{children}</main>
        <div className='main-container main-wrapper'> 
          <Footer />
        </div>
      </div>
    )
}