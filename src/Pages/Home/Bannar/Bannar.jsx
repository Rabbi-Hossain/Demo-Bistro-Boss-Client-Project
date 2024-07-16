import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banar1 from '../../../assets/home/01.jpg'
import banar2 from '../../../assets/home/02.jpg'
import banar3 from '../../../assets/home/03.png'
import banar4 from '../../../assets/home/04.jpg'
import banar5 from '../../../assets/home/05.png'
import banar6 from '../../../assets/home/06.png'

const Bannar = () => {

    return (
        <div>
            <Carousel>
                <div>
                    <img src={banar1} />
                </div>
                <div>
                    <img src={banar2} />
                </div>
                <div>
                    <img src={banar3} />
                </div>
                <div>
                    <img src={banar4} />
                </div>
                <div>
                    <img src={banar5} />
                </div>
                <div>
                    <img src={banar6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Bannar;