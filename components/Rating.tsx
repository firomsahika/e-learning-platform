// StarRating.tsx
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number; // Rating out of 5
}

const Rating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex text-yellow-300">
      {[...Array(totalStars)].map((star, index) => {
        const starClass = index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />;
        return starClass;
      })}
    </div>
  );
};

export default Rating;
