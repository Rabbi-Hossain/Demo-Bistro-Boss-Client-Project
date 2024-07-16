import Bannar from "../Bannar/Bannar";
import BistroBoss from "../BistroBoss/BistroBoss";
import CategoryItems from "../CategoryItems/CategoryItems";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";
import MenuItems from "../MenuItems/MenuItems";
import Recomanded from "../Recomanded/Recomanded";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
          <Bannar></Bannar>
          <CategoryItems></CategoryItems>
          <BistroBoss></BistroBoss>
          <MenuItems></MenuItems>
          <ContactUs></ContactUs>
          <Recomanded></Recomanded>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;