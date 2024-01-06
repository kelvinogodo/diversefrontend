import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const TypoAnime = () => {
  return (
       <TypeAnimation
      sequence={[
        'gold stock',
        1000, 
        'real estate',
        1000,
        'forex $ crypto',
        1000,
        'oil industry',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'block',fontFamily:"poppins",color:'rgb(34, 168, 205)', fontWeight:600 }}
      repeat={Infinity}
    />
  )
}

export default TypoAnime