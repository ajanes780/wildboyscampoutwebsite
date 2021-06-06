import React from 'react';
import { getMarker } from '../firebase/firebaseUtiils.';

export const contestWinners = () => {
  return <div> {getMarker.map((item) => item)}</div>;
};
