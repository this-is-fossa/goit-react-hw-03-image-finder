import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import { Searchbar } from "components/Searchbar/Searchbar";
import { Message } from "components/Messages/Messages";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";
import { Loader } from "components/Loader/Loader";

import { AppGrid } from './App.styled';


export class App extends Component {

  state = {
    query: '',
    page: 1,
    totalHits: null,
    hitsPerPage: 12,
    largeImageUrl: null,
    loader: true,
  };

  getInputQuery = query => {
    this.setState({ query, page: 1 })
  };

  getImagesInfo = totalHits => {
    this.setState({ totalHits });
  };

  getLargeImg = url => {
    this.setState({ largeImageUrl: url });
  };

  handleClick = () => {
    this.setState( prevState => ({ page: prevState.page + 1 }));
  };

  snowMoreImg = () => {
    const { totalHits, hitsPerPage, page } = this.state;
    if ( totalHits / hitsPerPage <= page) {
      return false; 
    } else {
      return true;
    }
  }

  closeModal = () => {
    this.setState({ largeImageUrl: null, loader: true })
  }

  handleLoad = () => {
    this.setState({ loader: false })
  }

  handleError = () => {
    this.setState({ loader: false })
  }

  

  render() {
    const { largeImageUrl, query, page, hitsPerPage } = this.state;

    return(
      <AppGrid>
        <Searchbar onSubmit={this.getInputQuery}/>
        {this.state.totalHits === 0 && (
          <Message text={`Sorry, no have picture of ${this.state.query}`} />
        )}
        <ImageGallery
          query={query}
          currentPage={page}
          getInfo={this.getImagesInfo}
          hitsPerPage={hitsPerPage}
          getImgUrl={this.getLargeImg}
        />
        {this.snowMoreImg() && <Button onClick={this.handleClick} />}
        {largeImageUrl && (
          <Modal closeModal={this.closeModal}>
            {this.state.loader && <Loader />}
            <img
              src={this.state.largeImageUrl}
              alt=""
              onLoad={this.handleLoad}
              onError={this.handleError}
            />
          </Modal>
        )}
        <ToastContainer/>
      </AppGrid>
    )
  }
}