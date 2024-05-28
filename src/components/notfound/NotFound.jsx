import React from 'react'
import error from '../../assets/error.avif'

function NotFound() {
  return (
    <div style={{textAlign:'center'}}>
      <img style={{height:'max-content', width:"max-content"}} src={error} alt="Not Found" />
    </div>
  )
}

export default NotFound
