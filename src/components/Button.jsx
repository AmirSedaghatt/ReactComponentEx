const Button = ({btn1, btn2}) => {
    return (
        <div className='CardBtn'>
            <div className='BtnWrapper'>
                <button className='Btn'>{btn1}</button>
            </div>
            <div>
                <button className='Btn'>{btn2}</button>
            </div>
        </div>
    )
}

export default Button;