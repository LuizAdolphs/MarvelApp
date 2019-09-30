import React, { useState } from "react";

import {
  Container,
  Row,
  Col
} from "shards-react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import SearchBox from "./components/SearchBox";
import CharactersList from "./components/CharactersList";
import StoriesList from "./components/StoriesList";

const App = () => {

  const centeredCol = { size: 10, offset: 1 };
  const [searchText, setSearchText] = useState(false);

  return (
    <Container>
      <Router>
        <Row>
          <Col sm={centeredCol}>
            <SearchBox className="my-3" onChange={setSearchText}></SearchBox>
          </Col>
        </Row>
        <Row>
          <Col sm={centeredCol}>
              <Switch>
                <Route path="/stories/:id">
                  <StoriesList />
                </Route>
                <Route path="/">
                  <CharactersList searchText={searchText}></CharactersList>
                </Route>
              </Switch>
          </Col>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
