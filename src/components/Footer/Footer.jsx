import React from 'react'


const Footer = ({title, description}) => {
  return (
    <div className='Footer'>
        <h4>{title}</h4>
        <h5>{description}</h5>
    </div>
  )
};

export default Footer