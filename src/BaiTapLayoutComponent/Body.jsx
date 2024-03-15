import React from 'react'
import Item from './Item'
import Banner from './Banner'

const Body = () => {
  return (
    <div className='container my-3'>
      <Banner />
      <section id='item' className="row row-cols-4">
        <Item />
        <Item />
        <Item />
        <Item />

      </section>
    </div>
  )
}

export default Body