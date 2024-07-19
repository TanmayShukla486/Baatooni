import React from 'react';

interface GradientBorderProps {
  children: React.ReactNode;
  startColor: string;
  endColor: string;
  className: string;
}

const GradientBorder = ({
  children,
  startColor,
  endColor,
  className,
}: GradientBorderProps) => {
  return (
    <div className={`bg-gradient-to-br ${startColor} ${endColor} ${className}`}>
      {children}
    </div>
  );
};

export default GradientBorder;
