
const CardTitle = ({heading, subHeading}) => {

    return (
        <div className="md:w-4/12 text-center mx-auto mt-10">
            <p className="text-yellow-600 italic mb-2">---{subHeading}---</p>
            <p className="uppercase text-2xl border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default CardTitle;