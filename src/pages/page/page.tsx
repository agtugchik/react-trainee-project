import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[] | string;
};

export const Page = ({ children }: Props) => {
  return <div>{children}</div>;
};
