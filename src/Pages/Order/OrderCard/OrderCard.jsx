
const OrderCard = ({item}) => {
    const {name,image, recipe} = item

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary uppercase">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;