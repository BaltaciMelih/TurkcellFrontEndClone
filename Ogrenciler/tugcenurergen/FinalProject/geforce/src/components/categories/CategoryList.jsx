import React, { Component } from "react";
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import "./Accordion.css";
import { bindActionCreators } from "redux";
import Form from "react-bootstrap/Form";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as gameActions from "../../redux/actions/gameActions";

class CategoryList extends Component {
  componentDidMount() {  //componentler yüklendikten sonra kategoriler listelensin
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {  //seçilen kategoriye göre currentCategory değiştirilsin
    this.props.actions.changeCategory(category);
    this.props.actions.getGames(category);
  };

  render() {
    return (
      <div>
        <Accordion className="bg-primary">
          <Accordion.Item
            className="border-0 rounded-0 bg-primary state"
            eventKey="0">
            <Accordion.Header>State</Accordion.Header>
            <Accordion.Body className="text-light">Available</Accordion.Body>
            <Accordion.Body className="text-light">Patching</Accordion.Body>
            <Accordion.Body className="text-light">Maintenance</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className="border-0 rounded-0 bg-primary"
            eventKey="1">
            <Accordion.Header className="bg-primary">
              Genre Filters
            </Accordion.Header>
            <Accordion.Body className=" bg-primary text-light">
              <Form>
                <div key={`inline-radio`} className="m-3">
                  {this.props.categories.map((category) => (
                    <Form.Check
                      onClick={() => this.selectCategory(category)}
                      className="p-2 pb-3"
                      label={category}
                      name="group1"
                      type="radio"
                      key={category}
                      id={category}
                    />
                  ))}
                </div>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getGames: bindActionCreators(gameActions.getGames, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
