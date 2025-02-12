import CardTitle from "../../../components/CardTitle/CardTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'

const CategoryItems = () => {

    return (
        <div className="my-20">
            <CardTitle
                subHeading="From 11:00am to 10:00pm"
                heading="ORDER ONLINE"
            >
            </CardTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-10"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <p className="uppercase text-center  text-white -mt-12">Slads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className="uppercase text-center text-white -mt-12">Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <p className="uppercase text-center text-white -mt-12">PIZZAS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <p className="uppercase text-center text-white -mt-12">desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <p className="uppercase text-center text-white -mt-12">Slads</p>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default CategoryItems;