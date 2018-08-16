import React, { Component } from "react";
import { Button, Container, Header, Grid, Image } from "semantic-ui-react";
import Search from './Search';
import DataSet from './DataSet'





class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.handleResultChange = this.handleResultChange.bind(this);
  }

  handleResultChange (results) {
    this.setState({results})

  }

  render() {
    return (
      <div className="App">
        <Container>


          <Grid>
            <Grid.Row>
              <Grid.Column columns={1}>
                  <Header as="h1">Welcome to Inspiratops</Header>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
              <Grid.Column width={8}>
                <h2> Content Here </h2>
                <DataSet results={this.state.results} />

              </Grid.Column>
              <Grid.Column width={4} >
                <h2> Controls here </h2>
                <Search onDataFetched={this.handleResultChange}/>

              </Grid.Column>
            </Grid.Row>
          </Grid>



        </Container>
      </div>
    );
  }
}

export default App;
