import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

interface Props {
  path: string;
  children: ReactNode;
}

const PathRouter = ({ path, children }: Props) => (
  <MemoryRouter initialEntries={[path]} initialIndex={0}>
    {children}
  </MemoryRouter>
);

export default PathRouter;
