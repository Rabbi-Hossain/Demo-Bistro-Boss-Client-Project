import Cover from "../Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import CardTitle from "../../../components/CardTitle/CardTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItemsCard from "../../Home/MenuItemsCard/MenuItemsCard";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menus] = useMenu()

    const offeredItems = menus.filter(item=>item.category === 'offered')
    const dessertItems = menus.filter(item=>item.category === 'dessert')
    const pizzaItems = menus.filter(item=>item.category === 'pizza')
    const saladItems = menus.filter(item=>item.category === 'salad')
    const soupItems = menus.filter(item=>item.category === 'soup')
    
    return (
        <div>
            <Cover title="OUR MENU" img={coverImg}></Cover>
            <CardTitle 
            subHeading="Don't miss"
            heading="TODAY'S OFFER"
            ></CardTitle>
            {/* offer card items */}
            <MenuCategory items={offeredItems}></MenuCategory>
            {/* deseert card items */}
           <MenuCategory items={saladItems} image={saladImg} title="desserts"></MenuCategory>
            <MenuCategory items={pizzaItems} image={pizzaImg} title="pizza"></MenuCategory>
            <MenuCategory items={dessertItems} image={dessertImg} title="Salad"></MenuCategory>
           <MenuCategory items={soupItems} image={soupImg} title="soup"></MenuCategory>
        </div>
    );
};

export default Menu;