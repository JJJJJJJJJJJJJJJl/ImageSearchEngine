import React, { useState } from 'react';

interface IGlobalContextProps {
  images: Array<Blob>;
  images_url: Array<string>;
  set_images: (user: Array<Blob>) => void;
  set_images_url: (loading: Array<string>) => void;
  MAX_IMAGE_UPLOAD: number;
}

export const GlobalContext = React.createContext<IGlobalContextProps>(null);

export const GlobalContextProvider = ({children}) => {
  const [images, set_images] = useState<Array<Blob>>([]);
  const [images_url, set_images_url] = useState<Array<string>>([]);
  const MAX_IMAGE_UPLOAD: number = 20;

  return (
    <GlobalContext.Provider value={{images, set_images, images_url, set_images_url, MAX_IMAGE_UPLOAD}}>
      {children}
    </GlobalContext.Provider>
  );
};