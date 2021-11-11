import { useState} from 'react'
import Slide from './Slide'
import Navigation from './Navigation'

const images = ['https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_960_720.jpg','https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg', 'https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/07/18/18/01/little-girl-2516578_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg', 'https://cdn.pixabay.com/photo/2021/01/27/07/19/baby-5953965_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_960_720.jpg','https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg','https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg','https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg']

const classNames = ['second-slide', 'first-slide', 'active-slide', 'first-slide', 'second-slide']

const Slides = () => {
    const [firstIndex, setFirstIndex] = useState(0)
    const [fiveImages, setFiveImages] = useState(images.slice(firstIndex, firstIndex+5))

    const goForword = () => {
        setFirstIndex(firstIndex+1)
        if(firstIndex > images.length-6){
            setFirstIndex(0)
        }
        setFiveImages(images.slice(firstIndex, firstIndex+5))
    }
    const goBackword = () => {
        setFirstIndex(firstIndex-1)
        console.log(firstIndex)
        if(firstIndex < 1 ){
            setFirstIndex(images.length-5)
        }
        console.log(firstIndex)
        setFiveImages(images.slice(firstIndex, firstIndex+5))
    }
    return(
       <div className='slider-container'>
            <div className='slider'>
                <Navigation className='right-navigation' changeHandler={goBackword}>
                    <i className="fas fa-arrow-left"></i>
                </Navigation>
                {
                    fiveImages.map((image, index) => <Slide className={classNames[index]} imgURL={image} key={index} />)
                }
                <Navigation className='left-navigation' changeHandler={goForword}>
                    <i className="fas fa-arrow-right"></i>
                </Navigation>
            </div>
       </div>
    )
}

export default Slides