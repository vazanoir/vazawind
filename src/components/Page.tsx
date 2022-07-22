import React from 'react';

const Page = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="p-6 flex flex-col h-screen">
    {children}
  </div>
);

export default Page;
