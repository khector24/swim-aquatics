import Rating from '@mui/material/Rating';

export default function ReviewRating({ value }) {
    return (
        <Rating name="read-only" value={value} readOnly />
    );
}
