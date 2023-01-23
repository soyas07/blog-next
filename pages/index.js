import HeroBox from '@/components/HeroBox/HeroBox';
import Navbar from '@/components/Navbar/Navbar';

const Home = () => {
    return (
        <div className='main-container'>
            <Navbar />
            <HeroBox />
        </div>
    )
}

export default Home