import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import { Response, PhotoItemProps } from "./components/Api/types";
import { fetchPhotoItems } from "./components/Api/apiPhotos";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

function App() {
  const [error, setError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<PhotoItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (): Promise<void> => {
    setError(null);

    try {
      const results: Response = await fetchPhotoItems();
      setPhotos(results);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const onHandleSubmit = (): void => {
    setLoading(true);
    setPhotos([]);
    fetchData();
  };

  return (
    <>
      <Search onSubmit={onHandleSubmit} />
      {loading && <Loader />}
      {error && <p>Something wrong, try again...</p>}
      {photos.length > 0 && <ImageGallery photos={photos} />}
    </>
  );
}

export default App;
