import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from '../containers/productsList'

// this  products_component  will be presentation component
class ProductsComponent extends Component {
  render() {
    // load and render pureComponent
    return ( <ProductList data={this.props.products} /> )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps)(ProductsComponent)