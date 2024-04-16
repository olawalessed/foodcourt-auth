


import React from 'react'

export default function HeadingBox({heading, subHeading}: {
    heading: string, subHeading: string
}) {
  return (
    <div className='mb-16'>
        <h3 className='text-4xl font-bold font-book'>{heading}</h3>
        <p className='text-xl font-light'>{subHeading}</p>
    </div>
  )
}
