import React from 'react';

interface Props {
  title?: string;
}
export const LoginLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
    <div className='row'>
      {children}
    </div>
    </>
  );
};
