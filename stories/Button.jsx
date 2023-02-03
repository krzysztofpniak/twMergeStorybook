import React from 'react';
import {twMerge} from 'tailwind-merge';

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
