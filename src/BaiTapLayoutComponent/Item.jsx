import React from 'react'

const Item = () => {
  return <div className="item col g-5 text-center">
    <div className='border rounded-4 py-4 px-3'>
      <img className='w-50' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png" alt="" />
      <h2>Card title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea optio distinctio quis consectetur magni inventore corporis hic facere vero minima?</p>
      <button className='btn btn-primary'>Find out more</button>
    </div>
  </div>
}

export default Item