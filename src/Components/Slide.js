const Slide = ({imgURL, className}) => {
    return(
        <div className={'slide ' + className} style={{backgroundImage: `url(${imgURL})`}}>
        </div>
    )
}

export default Slide