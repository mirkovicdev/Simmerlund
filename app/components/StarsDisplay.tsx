import React from 'react';
import { IonIcon } from '@ionic/react';
import { star, starHalf, starOutline } from 'ionicons/icons';

// Component to display stars based on the average rating
const StarsDisplay: React.FC<{ averageRating: number }> = ({ averageRating }) => {
  let fullStars = 0;
  let halfStars = 0;

  // Determine the number of full and half stars based on the rating
  if (averageRating >= 4.75) {
    fullStars = 5;
  } else if (averageRating >= 4.25) {
    fullStars = 4;
    halfStars = 1;
  } else if (averageRating >= 3.75) {
    fullStars = 4;
  } else if (averageRating >= 3.25) {
    fullStars = 3;
    halfStars = 1;
  } else if (averageRating >= 2.75) {
    fullStars = 3;
  } else if (averageRating >= 2.25) {
    fullStars = 2;
    halfStars = 1;
  } else if (averageRating >= 1.75) {
    fullStars = 2;
  } else if (averageRating >= 1.25) {
    fullStars = 1;
    halfStars = 1;
  } else if (averageRating >= 0.75) {
    fullStars = 1;
  } else if (averageRating >= 0.25) {
    halfStars = 1;
  }

  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex flex-row">
      {Array.from({ length: fullStars }).map((_, i) => (
        <IonIcon key={`full-${i}`} icon={star} size="large" className="text-yellow-500" />
      ))}
      {Array.from({ length: halfStars }).map((_, i) => (
        <IonIcon key={`half-${i}`} icon={starHalf} size="large" className="text-yellow-500" />
      ))}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <IonIcon key={`empty-${i}`} icon={starOutline} size="large" className="text-gray-300" />
      ))}
    </div>
  );
};

export default StarsDisplay;
