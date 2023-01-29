import Card from '@/components/Card/Card';
import Category from '@/components/Category/Category';
import HeroBox from '@/components/HeroBox/HeroBox';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import cardImage from '@/public/assets/images/card.svg';

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

    return (
        <div className='main-wrapper'>
            <nav>
                <Navbar />
                <hr style={{opacity:"0.2"}} />
            </nav>
            <div className='main-container'>
                {/* <HeroBox />
                <Category /> */}
                <div className='recipe-container'>
                    <div className='recipe-titles'>
                        <h1>Simple and tasty recipes</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    {/* <div className='recipe-card-container'>
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
                    </div> */}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home