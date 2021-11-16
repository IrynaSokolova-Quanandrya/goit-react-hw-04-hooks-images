import { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer} from 'react-toastify';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from "react-loader-spinner";
import Button from './components/Button';
import Modal from './components/Modal';

const MY_KEY = '24253422-4477825d93e6eb518eebc16ed';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');

  

  useEffect(() => {
    if (!query) {
      return
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    
    setStatus('pending')
      
    setTimeout(() => {
      fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(new Error(`Can not find ${query}!`));
        })
        .then((response) => {
          setImages(response.hits);
          setPage(prev => prev + 1);
          setStatus('resolved');
        })
        .catch(error => alert("Ой что-то пошло не так((("))
        .finally(() => setStatus('resolved'))
    }, 1000);
  }, [query]);
  
  useEffect(() => {
    window.addEventListener('click', e => {
      if (e.target.nodeName === "IMG") {
        toggleModal()
      }
    })
  });
 const searchQuery = query => {
    setQuery(query);
   setPage(1);
   setImages([]);
  }
 const loadMore = () => {
   setPage(prev => prev + 1)
         
      fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(new Error(`Can not find ${query}!`));
      })
      .then((response) => {
        setImages(prevState => [...prevState, ...response.hits])
        setStatus('resolved')
        
      })
        .catch(error => alert("Ой что-то пошло не так((("))
   .finally(()=>setStatus('resolved'))
  }
  
  const toggleModal = () => {
    setShowModal(prev => !prev)
  }
 const setImgModal = (img, alt) => {
   setModalImg({ img: img, alt: alt });
  };
    return (
      <>
      <Searchbar onSubmit={searchQuery} />
      <ToastContainer autoClose={3000} />
        {status === 'resolved' &&
          <ImageGallery
          images={images}
          showModal={toggleModal}
          onGetImg={setImgModal}
        />
        }
        {status === 'pending' &&
          <Loader
            className='Loader'
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          timeout={3000}
         style={({margin: '0 50%'})}/>
        
        }
        {images.length !== 0 && <Button onClick={loadMore}/>
        }
        {showModal && <Modal
          onClose={toggleModal}
          onGetImg={modalImg}
        />}
    </>
   )
}

export default App