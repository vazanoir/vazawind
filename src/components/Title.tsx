import React from 'react';

const Title = ({
  children,
}: {
  children: React.ReactNode
}) => <h1 className="text-6xl font-bold">{children}</h1>;

export default Title;
