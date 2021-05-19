import React from 'react';

interface headingProps {
  lvl?: number;
  className?: string;
}

const Heading: React.FC<headingProps> = ({ children, lvl, className }) => {
  const Tag = `h${lvl}` as keyof JSX.IntrinsicElements;

  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
