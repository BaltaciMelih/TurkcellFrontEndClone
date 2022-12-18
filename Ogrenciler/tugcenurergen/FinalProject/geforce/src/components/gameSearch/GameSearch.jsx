import React, { Component } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import "./GameSearch.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as gameActions from "../../redux/actions/gameActions";


class GameSearch extends Component {

  //formdaki value'yu getGames'e gönderir ve value'ya göre oyunları çeker
  onChangeHandler= (e) => {
    this.props.actions.getGames("",e.target.value);
  }

  render() {
    return (
      <div className="gameSearch-div d-flex flex-column align-items-center justify-content-center ">
        <Container>
          <Row>
            <Col className="text-center ">
              <h2>Lorem ipsum dolor sit amet consectetur.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
                numquam dolorum et at quia omnis provident praesentium officia
                nisi enim.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="w-100 m-auto mt-3">
                <Form.Group controlId="formBasicText">
                  <Form.Control
                    onChange={this.onChangeHandler}  //form girdisi değiştikçe handler edilir
                    className="rounded-0 formControlSearch ps-5 "
                    type="text"
                    placeholder="Search Games"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    games: state.gameListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getGames: bindActionCreators(gameActions.getGames, dispatch),
      // searchGames: bindActionCreators(gameActions.searchGames, dispatch),
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(GameSearch);

