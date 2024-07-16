
const MenuItemsCard = ({item}) => {
    const {name,image, recipe, price} = item
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="flex px-4">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div className="ml-6">
                <h3 className="text-2xl uppercase">{name}-------</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItemsCard;