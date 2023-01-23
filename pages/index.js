import HeroBox from '@/components/HeroBox/HeroBox';
import Navbar from '@/components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <nav>
                <Navbar />
                <hr style={{opacity:"0.2"}} />
            </nav>
            <div className='main-container'>
                <HeroBox />
            </div>
        </div>
    )
}

export default Home