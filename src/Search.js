import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";
import DataSet from './DataSet';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      results: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDatas = this.getDatas.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.getDatas();
    event.preventDefault();
    //alert({value: event.target.value})
  }

  getDatas = () => {
    axios
      .get(
        `https://api.behance.net/v2/projects?q=${
          this.state.value
        }&time=week&client_id=6ZgIBcneEtNKtgYCRd42VKZwy8PHv8aN`
      )
      .then(({ data }) => {
        let results = data.projects;
        this.props.onDataFetched(results);
      });
  };

  render() {
    return (
      <div>
        <div class="ui icon input">
          <input
            type="text"
            placeholder="Enter your request here…"
            onChange={this.handleChange}
          />
          <i class="search icon" />
        </div>

        <Button
          primary
          fluid="true"
          floated="right"
          onClick={this.handleSubmit}
        >
          Search butt from Search comp
        </Button>

        <h5>your searching: {this.state.value}</h5>


      </div>
    );
  }
}

export default Search;
