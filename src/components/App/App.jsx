import { Component } from "react";
import { Searchbar } from "components/Searchbar/Searchbar";

export class App extends Component {

  state = {
    query: '',
      page: 1
  };

  getInputQuery = query => {
    this.setState({ query, page: 1 })
  };

  render() {

    return(
      <div>
        <Searchbar onSubmit={this.getInputQuery}/>
      </div>
    )
  }
}