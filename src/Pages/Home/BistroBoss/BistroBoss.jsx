import bistroImg from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div  
            className="hero h-[600px] bg-fixed"
            style={{
                backgroundImage: `url('${bistroImg}')`,
            }}>
            <div className="text-center bg-white py-20">
                <div className="max-w-md md:max-w-screen-md lg:max-w-screen-lg px-16">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero <br /> accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;