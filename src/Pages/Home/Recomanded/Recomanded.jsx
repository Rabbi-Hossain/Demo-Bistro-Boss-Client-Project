import CardTitle from "../../../components/CardTitle/CardTitle";
import recomandImg from "../../../assets/menu/salad-bg.jpg"
import 'aos/dist/aos.css';

const Recomanded = () => {
    return (
        <div 
        data-aos="fade-left"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine"
        className="mt-20">
            <CardTitle subHeading="Should Try"
                heading="CHEF RECOMMENDS"
            ></CardTitle>

            {/* recomanded card session */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card bg-base-200 border-2">
                    <figure>
                        <img
                            src={recomandImg}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Caeser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="text-center">
                            <button className="btn btn-outline hover:bg-orange-400 uppercase text-yellow-400 border border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 border-2">
                    <figure>
                        <img
                            src={recomandImg}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Caeser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="text-center">
                            <button className="btn btn-outline hover:bg-orange-400 uppercase text-yellow-400 border border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 border-2">
                    <figure>
                        <img
                            src={recomandImg}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Caeser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="text-center">
                            <button className="btn btn-outline hover:bg-orange-400 uppercase text-yellow-400 border border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recomanded;