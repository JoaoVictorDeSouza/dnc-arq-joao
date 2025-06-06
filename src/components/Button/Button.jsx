import './Button.css'
import WhiteArrow from '../../assets/White-arrow.svg'

function Button ({ arrow, buttonStyle, children, ...props }) {
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={WhiteArrow} />}
        </button>
    )
}

export default Button