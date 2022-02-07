import './button.scss'

const Button = props => {
    return (
        <div className={`btn ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Button;
