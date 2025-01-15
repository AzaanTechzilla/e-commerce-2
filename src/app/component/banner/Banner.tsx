import H1 from "../typography/H1";
import Para from "../typography/Para";
export default function Banner() {
    return(
        <>
        <div className="banner-content">
        <div className="left-content flex items-start flex-col">
            <H1 title="Step-up Your Stride" className="text-2xl" />
            <Para title="Premium Athletic Footwear" className="" />
            <button className="uppercase flex self-start">shop now</button>
        </div>
        </div>
        </>
    )
}