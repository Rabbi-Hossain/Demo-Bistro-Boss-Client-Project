import { useEffect, useState } from "react";
import CardTitle from "../../../components/CardTitle/CardTitle";
import MenuItemsCard from "../MenuItemsCard/MenuItemsCard";
import useMenu from "../../../hooks/useMenu";

const MenuItems = () => {

    const [menus] = useMenu()
    const popularItems = menus.filter(item => item.category === 'popular')

    return (
        <div>
            <CardTitle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            >
            </CardTitle>

            <div className="grid md:grid-cols-2 gap-4 mt-12">
                {
                    popularItems.map(item => <MenuItemsCard key={item._id} item={item}></MenuItemsCard>)
                }
            </div>


            <div className="text-center">
                <button className="btn mt-8 btn-outline border-0 border-b-4">
                    View Full Menu
                </button>
            </div>


        </div>
    );
};

export default MenuItems;