'use client';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// using the react-circular-progressbar library to add the progress bar
const ProgressBar = ({ value, text, strokeWidth, styles }) => {
  return (
    <CircularProgressbar
      value={value}
      text={text}
      strokeWidth={strokeWidth}
      styles={styles}
    />
  );
};

export default ProgressBar; 