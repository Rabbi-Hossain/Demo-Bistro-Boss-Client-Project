import CardTitle from "../../../components/CardTitle/CardTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// rating

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (
        <div className="mt-10 space-y-20">
            <CardTitle
                subHeading="What Our Clients Say"
                heading="TESTIMONIALS"
            >
            </CardTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <div className="mx-16 text-center">
                    {
                        review.map(item => <SwiperSlide key={item._id}>
                            <div className="flex mx-16 flex-col item-center text-center justify-center  space-y-10">
                                <Rating
                                className="mx-auto"
                                    style={{ maxWidth: 180 }}
                                    value={item.rating}
                                    readOnly
                                />
                                <p>{item.details}</p>
                                <h2 className="text-orange-400 mt-4 text-2xl">{item.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>

        </div>
    );
};

export default Testimonials;