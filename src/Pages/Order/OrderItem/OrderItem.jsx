import OrderCard from "../OrderCard/OrderCard";

const OrderItem = ({ items }) => {

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                items.map(item => <OrderCard item={item}></OrderCard>)
            }
        </div>
    );
};

export default OrderItem;