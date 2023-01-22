import Button from '@/components/Button/Button';
import playIcon from '@/public/assets/icons/play.svg';
import instagramIcon from '@/public/assets/icons/instagram.svg';
import timerIcon from '@/public/assets/icons/timer.svg';
import forkKnifeIcon from '@/public/assets/icons/fork-knife.svg';

const Home = () => {
    return (
        <div>
            Home
            <Button 
                type="primary"
                text="View Recipes"
                icon={playIcon} 
                width="12.5rem"
            /><br/>
            <Button 
                type="primary"
                text="Learn More" 
                width="11.25rem"
            /><br/>
            <Button 
                type="primary"
                text="View Our Instagram"
                icon={instagramIcon} 
                width="14.31rem"
            /><br/>
            <Button 
                type="primary"
                text="View All Categories"
                width="12.5rem"
                bgcolor="#E7FAFE"
                color="#000"
            /><br/>
            <Button 
                type="secondary"
                text="30 Minutes"
                icon={timerIcon} 
                width="8.68rem"
            /><br/>
            <Button 
                type="secondary"
                text="Chicken"
                icon={forkKnifeIcon} 
                width="7.43rem"
            /><br/>
        </div>
    )
}

export default Home