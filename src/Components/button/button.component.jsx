import "./button.styles.scss"
const Sixty={
google:"google-sign-in ",
    inverted:"inverted"
}
const Button=({children,buttontype,...otherProps})=>{


    return(
        <div>
            
       
        <button className={`button-container  ${Sixty[buttontype]}`} {...otherProps}>{children}</button>
     
        </div>
    )
}
export default Button