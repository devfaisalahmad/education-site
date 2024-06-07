import React from 'react'
import { icons } from '../../../shared/libs/icons'
import HeroBox from './HeroBox'

const HeroMobile = () => {
  return (
    <div className="container">
       <div className="mt-[2rem] flex-col flex gap-5 md:hidden">
                <HeroBox
                  title="BEST INDUSTRY LEADERS"
                  icons={icons.education}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
                <HeroBox
                  title="LEARN COURSES ONLINE"
                  icons={icons.speech}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
                <HeroBox
                  title="BOOK LIBRARY & STORE"
                  icons={icons.book}
                  links="View More"
                  rightArrow={icons.rightArrow}
                />
              </div> 
    </div>
    
  )
}

export default HeroMobile
