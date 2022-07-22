import React from 'react';

const NavigationButtons = ({
  children,
}: {
  children: React.ReactNode
}) => <div className="flex justify-between">{children}</div>;

export default NavigationButtons;
