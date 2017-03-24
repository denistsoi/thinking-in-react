import React from 'react'

export const FilterableProductTable = React.createClass({
  render() {
    return (
      <SearchBar/>
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