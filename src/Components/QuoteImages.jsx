import QuoteImage from "./QuoteImage";
export default function QuoteImages() {
    return (
        // Loop through images folder and map them
        <QuoteImage />
    );
}

// import QuoteImage from "./QuoteImage";

// // Import all images from the quote-images folder
// const images = require.context('../../assets/images/quote-images', false, /\.(jpg|jpeg|png|gif)$/);

// export default function QuoteImages() {
//     // Example data for image titles and descriptions (you can replace these with actual data)
//     const imageData = [
//         { title: 'Girl In Water', description: 'Girl at the beach enjoying the water.', image: 'girl.jpg' },
//         { title: 'Boys Jumping In Pool', description: 'Ruinning and jumping at the pool with you friends.', image: 'boys-jumping.jpg' },
//         { title: 'Group Swim', description: 'Kids enjoying swimming together at the beach.', image: 'group-swim.jpg' },

//     ];

//     return (
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
//             {imageData.map((img, index) => (
//                 <QuoteImage
//                     key={index}
//                     image={images(`./${img.image}`).default}
//                     title={img.title}
//                     description={img.description}
//                 />
//             ))}
//         </div>
//     );
// }
