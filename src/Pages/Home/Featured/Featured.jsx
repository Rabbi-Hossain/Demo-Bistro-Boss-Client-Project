import CardTitle from "../../../components/CardTitle/CardTitle";
import feturd from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {

    return (
        <div className="featured-item mt-20 pt-8  bg-fixed">
            <CardTitle
            subHeading="Check it out"
            heading="FROM OUR MENU"
            ></CardTitle>


            <div className="flex justify-center items-center text-white px-20 py-36 ">
                <div>
                    <img src={feturd} alt="" />
                </div>
                <div className="ml-10 bg- bg-opacity-40 bg-slate-500 p-4 ">
                    <p className="text-xl">March 20, 2023</p>
                    <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure provident tenetur architecto, facilis quos impedit unde nostrum totam placeat recusandae veritatis. Corrupti impedit facere eligendi repellat voluptatum animi, quidem ipsam alias eveniet eos porro eum? Voluptates aut animi officiis? Cupiditate minima, eos praesentium numquam ullam distinctio repellendus temporibus nam veniam.</p>
                    <button className="btn mt-8 btn-outline border-0 border-b-4">
                    View Full Menu
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;