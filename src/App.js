import React, { Component } from 'react';
import './App.css';
import { ToastContainer} from 'react-toastify';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from "react-loader-spinner";
import Button from './components/Button';
import Modal from './components/Modal';



class App extends Component {
  state = {
    mainURL: 'https://pixabay.com/api/',
    secondaryURL:'&image_type=photo&orientation=horizontal&per_page=12',
    images: [],
    myKey:'24253422-4477825d93e6eb518eebc16ed',
    query: '',
    page: 1,
    status: 'idle',
    error: null,
    showModal: false,
    modalImage: '',

  }
  componentDidMount() {
    window.addEventListener('click', e => {
      if (e.target.nodeName === "IMG") {
        this.toggleModal()
      }
    })
  }
  componentDidUpdate(prevProps, prevState) {
    const { mainURL, secondaryURL, query, page, myKey } = this.state;

    window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
        });
    
    if (prevState.query !== query) {
      this.setState({ status: 'pending' })
      
      setTimeout(() => {
        fetch(`${mainURL}?q=${query}&page=${page}&key=${myKey}${secondaryURL}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(new Error(`Can not find ${query}!`));
      })
        .then((response) => {
          this.setState({ images: response.hits, page: page + 1, status: 'resolved' })
        })     
      }, 1000);
      
      
    }
    
  }
  searchQuery = query => {
    this.setState({ query });
    this.setState({page: 1})
  }
  loadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }))
    
    const { mainURL, secondaryURL, query, page, myKey } = this.state;
     
      fetch(`${mainURL}?q=${query}&page=${page}&key=${myKey}${secondaryURL}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(new Error(`Can not find ${query}!`));
      })
      .then((response) => {
        this.setState((prevState) => ({ images: [...prevState.images, ...response.hits], status: 'resolved' }))
        
      })
  }
  
  toggleModal = () => {
    
    this.setState(({ showModal }) => (
      { showModal: !showModal }
    ))
  }
  setImgModal = (img, alt) => {
    this.setState({ modalImage: { img: img, alt: alt } });
  };
 
  render() {
    console.log(this.state.modalImage);
    const { status, images, showModal, modalImage } = this.state
    return (
      <>
      <Searchbar onSubmit={this.searchQuery} />
      <ToastContainer autoClose={3000} />
        {status === 'resolved' &&
          <ImageGallery
          images={images}
          showModal={this.toggleModal}
          onGetImg={this.setImgModal}
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
        {images.length !== 0 && <Button onClick={this.loadMore}/>
        }
        {showModal && <Modal
          onClose={this.toggleModal}
          onGetImg={modalImage}
        />}
    </>
   )
  }
}

export default App