import React from 'react'
import BlogsCategorys from './BlogsCategorys'

const Services = () => {
  return (
    <div>
       <div className="py-[177px]  text-center text-white px-4">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-black">
                    Services Page
                </h2>
                <div className='text-black'>
                  <BlogsCategorys/>
                </div>
            </div>
    </div>
  )
}

export default Services