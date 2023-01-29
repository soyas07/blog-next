import Card from '@/components/Card/Card';
import Category from '@/components/Category/Category';
import HeroBox from '@/components/HeroBox/HeroBox';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import instaIcon from '@/public/assets/icons/instagram-white.svg';
import cardImage from '@/public/assets/images/card.svg';
import section1Img from '@/public/assets/images/section1.svg';
import Button from '@/components/Button/Button';
import instaPostImg from '@/public/assets/images/instagram-post.svg';

const Home = () => {
    const cards = [
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
    ]

    const recipeCards = [
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
        {
            title: "Big and Juicy Wagyu Beef Cheeseburger",
            featureImg: cardImage,
            timerTxt: "30 Minutes",
            typeTxt: "Snack",
        },
    ]

    const instaPosts = [instaPostImg, instaPostImg, instaPostImg, instaPostImg];
    

    return (
        <div className='main-wrapper'>
            <nav>
                <Navbar />
                <hr style={{opacity:"0.2"}} />
            </nav>
            <div className='main-container'>
                <HeroBox />
                <Category />
                <div className='recipe-container'>
                    <div className='recipe-titles'>
                        <h1>Simple and tasty recipes</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    <div className='recipe-card-container'>
                        {cards.map((card,key) => {
                            if (key == 5) {
                                return (<Card key={key} type="featured" />)
                            }
                            return (
                                <Card 
                                    key={key}
                                    title={card.title}
                                    featureImg={card.featureImg}
                                    timerTxt={card.timerTxt}
                                    typeTxt={card.typeTxt}
                                    marginBottom="2rem"
                                />
                            );
                        })}
                    </div>
                </div>
                <div className='section-1'>
                    <div className='section-1-left'>
                        <h1>Everyone can be a chef in their own kitchen</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                        <Button 
                            type="primary"
                            bgcolor='#000'
                            color="#fff"
                            width="11.25rem"
                            text="Learn More"
                        />
                    </div>
                    <div className='section-1-right'>
                        <img src={section1Img.src} alt="section-image" />
                    </div>
                </div>
            </div>
            <div className='featured-section'>
                <div className='featured-section-titles'>
                    <h1>Check out @foodieland on Instagram</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                </div>
                <div className='featured-section-insta-post main-container'>
                    {instaPosts.map((post,key) => <img key={key} src={post.src} alt="instagram-post" />)}
                </div>
                <div className='featured-section-btn'>
                    <Button 
                        type="primary"
                        icon={instaIcon}
                        text="Visit Our Instagram"
                        width="14.31rem"
                    />
                </div>
            </div>
            <div className='main-container'> 
                <div className='section-2'>
                    <div className='section-2-titles'>
                        <h1>Try this delicious recipe to make your day</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                    </div>
                    <div className='recipe-wrapper'>
                        {recipeCards.map((card,key) => (
                            <Card 
                                key={key}
                                type="secondary"
                                title={card.title}
                                featureImg={card.featureImg}
                                timerTxt={card.timerTxt}
                                typeTxt={card.typeTxt}
                                marginBottom="2rem"
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home