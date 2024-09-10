// import girlImage from "../../assets/images/quote-images/girl.jpg";

// // /Users/kennyhector/Desktop/Web-Dev/swim-aquatics/src/assets/images/quote-images

// export default function UnderQuote() {
//     return (
//         <div style={{ display: "flex" }}>
//             <div style={{
//                 height: 600,
//                 width: 200,
//                 backgroundImage: `url(${girlImage})`,
//                 backgroundSize: "150% auto",
//                 backgroundPosition: "center"
//             }}>

//             </div>
//             <div style={{
//                 height: 600,
//                 width: 200,
//                 backgroundImage: `url(${girlImage})`,
//                 backgroundSize: "150% auto",
//                 backgroundPosition: "center"
//             }}>

//             </div>
//             <div style={{
//                 height: 600,
//                 width: 200,
//                 backgroundImage: `url(${girlImage})`,
//                 backgroundSize: "150% auto",
//                 backgroundPosition: "center"
//             }}>

//             </div>
//             <div style={{
//                 height: 600,
//                 width: 200,
//                 backgroundImage: `url(${girlImage})`,
//                 backgroundSize: "150% auto",
//                 backgroundPosition: "center"
//             }}>

//             </div>
//             <div style={{
//                 height: 600,
//                 width: 200,
//                 backgroundImage: `url(${girlImage})`,
//                 backgroundSize: "150% auto",
//                 backgroundPosition: "center"
//             }}>

//             </div>
//             <div style={{
//                 height: 600,
//                 width: 200,
//                 backgroundImage: `url(${girlImage})`,
//                 backgroundSize: "150% auto",
//                 backgroundPosition: "center"
//             }}>

//             </div>
//             <div style={{
//                 height: 600,
//                 width: 200,
//                 backgroundImage: `url(${girlImage})`,
//                 backgroundSize: "150% auto",
//                 backgroundPosition: "center"
//             }}>

//             </div>
//         </div>
//     );
// }

import girlImage from "../../assets/images/quote-images/girl.jpg";
import boysJumping from "../../assets/images/quote-images/boys-jumping.jpeg";
import groupSwim from "../../assets/images/quote-images/group-swim.jpg";
import pexel from "../../assets/images/quote-images/pexel.jpeg";
import kid from "../../assets/images/quote-images/kid.jpg";

export default function UnderQuote() {
    const images = [girlImage, boysJumping, kid, groupSwim, pexel];

    return (
        <div style={{ display: "flex", width: "100vw" }}>
            {images.map((image, index) => (
                <div key={index} style={{
                    height: "75vh",
                    flex: 1,
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                </div>
            ))}
        </div>
    );
}

