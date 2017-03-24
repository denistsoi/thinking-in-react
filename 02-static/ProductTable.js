import React from 'react'

export const FilterableProductTable = React.createClass({
  render() {
    const products = this.props.products
    return (
      <div>
        <SearchBar/>
        <ProductTable products={products} />
      </div>
    )
  }
})

export const SearchBar = React.createClass({
  render() {
    return (
      <input type="search" />
    )
  }
})

//
export const ProductTable = React.createClass({
  render() {
    const products = this.props.products;
    const rows = []
    let currentCategory;

    products.forEach((product)=>{
      if (product.category !== currentCategory){
        currentCategory = product.category;
        rows.push((
          <ProductCategoryRow
          key={currentCategory}
          category={currentCategory}
          />
        ))
      }
      rows.push((
        <ProductRow key={product.name} product={product} />
      ))
    });
    return (
      <div>
        {rows}
      </div>
    )
  }
})

export const ProductCategoryRow = React.createClass({
  render() {
    return(
      <div>{this.props.category}</div>
    )
  }
})

export const ProductRow = React.createClass({
  render() {
    const product = this.props.product;

    return (
      <div>
        <span>{ product.name }</span>
        <span>{ product.price }</span>
      </div>
    )
  }
})