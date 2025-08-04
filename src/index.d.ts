declare module 'react-headmaster' {
  import React, { ReactNode } from 'react';

  interface HeadMasterProps {
    title?: string;
    meta?: { [key: string]: string };
  }

  const HeadMaster: React.FC<HeadMasterProps>;

  export default HeadMaster;
}
