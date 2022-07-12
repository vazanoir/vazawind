import React from 'react';

const Page = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="p-6">
    {children}
  </div>
);

export default Page;
