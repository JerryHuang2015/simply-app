import React, {PureComponent} from 'react'

// pureComponent, only display data from props 
class ProductList extends PureComponent {
  render(){
      return this.props.data.products.map((product, index) => {
        return (<p key={index}> {product.name} </p>)
      })
  }
}
export default ProductList