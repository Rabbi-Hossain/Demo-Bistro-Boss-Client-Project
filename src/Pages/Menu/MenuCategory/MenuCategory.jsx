import { Link } from "react-router-dom";
import MenuItemsCard from "../../Home/MenuItemsCard/MenuItemsCard";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, title, image }) => {
    return (
        <div>
            {title && <Cover title={title} img={image}></Cover>}
            <div className="grid md:grid-cols-2 gap-4 mt-20 mt-8">
                {
                    items.map(item => <MenuItemsCard key={item._id} item={item}></MenuItemsCard>)
                }
            </div>
            <div className="text-center mb-20 mt-8">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 ">
                        Order Your Food
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;