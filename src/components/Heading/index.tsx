import React from 'react';

interface headingProps {
  lvl?: number;
  className?: string;
}

const Heading: React.FC<headingProps> = ({ children, lvl, className }) => {
  let Tag = `h${lvl}` as keyof JSX.IntrinsicElements;
  if (!lvl || lvl > 6) {
    Tag = 'p';
  }

  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
