import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import { Response, PhotoItemProps } from './components/Api/types';
import { fetchPhotoItems } from './components/Api/apiPhotos';
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  const [error, setError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<PhotoItemProps[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setError(null);
      try {
        const results: Response = await fetchPhotoItems();
        setPhotos(results); 
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Something went wrong');
      }
    };
    fetchData();
  }, []);

  const onHandleSubmit = (): void => {
    setPhotos([]);
  };

  return (
    <>
  {error && <p>Something wrong, try again...</p>}
  <Search onSubmit={onHandleSubmit} />
  {photos.length > 0 && <ImageGallery photos={photos}  />}
    </>
  );
}

export default App;