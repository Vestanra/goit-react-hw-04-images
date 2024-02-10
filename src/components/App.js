import { useState, useEffect, useRef } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from "service/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { LineWave } from 'react-loader-spinner';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout.styled";
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
    
  
  useEffect(() => {
    const getQeury = () => {
    const part = query.split('/');
    return part[part.length - 1];
   }
    const checkedQuery = getQeury();
    if (checkedQuery.trim() === '') {
      return
    }

    const fetchQuery = async () => {
      try {
        setLoading(true);
        const newImages = await fetchImages(checkedQuery, page);
        if (newImages.total === 0) {
          toast.error(`No images for the search "${checkedQuery}". Try again.`);
        }
        setImages(prev => [...prev, ...newImages.hits]);
        setLoadMore(newImages.totalHits > page * 12)
      } catch (error) {
        toast.error(`Oops...`)
      } finally {
        setLoading(false);
      }
    }
    fetchQuery();   
  }, [query, page]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    setQuery(`${Date.now()}/${query}`)
    setImages([])
    setPage(1)
  };
  
  const GalleryRef = useRef();

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
    setTimeout(() => {
      const { top } = (GalleryRef.current.getBoundingClientRect());
      window.scrollTo({ top: -top + 820, behavior: 'smooth' })
    }, 600);
  };
 
  return (
      <Layout>
        <Searchbar
          onSubmit={handleSubmit}
        loading={loading} />
        {loading === true && page === 1 && <LineWave width="100%" color = '#5c5c8a'/>}
      {images.length > 0 && <ImageGallery items={images} ref={GalleryRef} />}
        {(images.length > 0) && loadMore &&
          <Button
            onClick={handleLoadMore}
            loading={loading} />}
        <Toaster position="bottom-center"/>
        <GlobalStyle/>
      </Layout>
     )
};
