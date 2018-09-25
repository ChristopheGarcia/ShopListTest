import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

import Header from '../../components/Header/Header';
import MapComposant from '../../components/MapComposant/MapComposant';

import './App.css';


class App extends Component {

  render() {

    return (

      <div>

        <Header />  

        <Container>

          <Row>

            <Col>

              <MapComposant />

            </Col>

          </Row>
          
        </Container>
        
      </div>
      
    );
  }
}

export default App;
