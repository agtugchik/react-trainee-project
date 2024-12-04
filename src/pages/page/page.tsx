import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Page = ({ children }: Props) => {
  return <div>{children}</div>;
};
