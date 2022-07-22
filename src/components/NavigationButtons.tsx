import React from 'react';

const NavigationButtons = ({
  children,
}: {
  children: React.ReactNode
}) => <div className="flex justify-between flex-1 items-end">{children}</div>;

export default NavigationButtons;
