import { useEffect, useState } from "react";
import "./App.css";
import css from "./App.module.css";
import Search from "./components/Search/Search";
import { Response, PhotoItemProps } from "./components/Api/types";
import { fetchPhotoItems } from "./components/Api/apiPhotos";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";

import { MdOutlineDarkMode } from "react-icons/md";

function App() {
  const [error, setError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<PhotoItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    setLoading(true);
    setPhotos([]);
    fetchData();
  }, []);
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

  // Применять позже
  // useEffect(() => {
  //   const succes = (position: GeolocationPosition) => {
  //     console.log("coords-", position);
  //   };

  //   const error = () => {
  //     console.log("err-");
  //   };
  //   navigator.geolocation.getCurrentPosition(succes, error);
  // }, []);

  return (
    <>
      <div className={isDarkMode ? css.dark : css.light}>
        <Layout>
          <Search onSubmit={onHandleSubmit} />
          <button onClick={toggleTheme}>
            <MdOutlineDarkMode size={32} />
          </button>
        </Layout>
        {loading && <Loader />}
        {error && <p>Something wrong, try again...</p>}
        {photos.length > 0 && <ImageGallery photos={photos} />}
        {photos.length === 0 && <p>Click button</p>}
      </div>
    </>
  );
}

export default App;
