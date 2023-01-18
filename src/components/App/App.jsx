import { Component } from "react";
import { Searchbar } from "components/Searchbar/Searchbar";
import { Message } from "components/Messages/Messages";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";


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
    this.setState({ largeImage: url });
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

  render() {
    const { query, page, hitsPerPage } = this.state;

    return(
      <div>
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
      </div>
    )
  }
}