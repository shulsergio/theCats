import { useEffect, useState } from "react";
import "./App.css";
// import css from "./App.module.css";
import Search from "./components/Search/Search";
import { Response, PhotoItemProps } from "./components/Api/types";
import { fetchPhotoItems } from "./components/Api/apiPhotos";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";

import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./components/Api/theme";

function App() {
  const [error, setError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<PhotoItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
  const [theme, setTheme] = useState<string>("light");
  const switchTheme = (): void => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
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
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Layout>
          <h2>Random cats photo</h2>
          <button onClick={switchTheme}>
            <MdOutlineDarkMode size={24} />
          </button>
        </Layout>
        <Search onSubmit={onHandleSubmit} />
        {loading && <Loader />}
        {error && <p>Something wrong, try again...</p>}
        {photos.length > 0 && <ImageGallery photos={photos} />}
      </ThemeProvider>
    </>
  );
}

export default App;
