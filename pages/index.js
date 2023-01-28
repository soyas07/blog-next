import Category from '@/components/Category/Category';
import HeroBox from '@/components/HeroBox/HeroBox';
import Navbar from '@/components/Navbar/Navbar';

const Home = () => {
    return (
        <div className='main-wrapper'>
            <nav>
                <Navbar />
                <hr style={{opacity:"0.2"}} />
            </nav>
            <div className='main-container'>
                <HeroBox />
                <Category />
            </div>
        </div>
    )
}

export default Home