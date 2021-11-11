const Navigation = ({children, className, changeHandler}) => {
    return(
        <button className={className} onClick={() => changeHandler()}>
            {children}
        </button>
    )
}
export default Navigation