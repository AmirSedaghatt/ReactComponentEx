import Image from "./Image"
import Title from "./Title"
import Description from "./Description"
import Button from "./Button"
import '../components/App.css'

const Card = ({img, title, desc, btn1, btn2}) => {
    return (
        <div className="Card">
            <Image img = {img}/>
            <Title title = {title}/>
            <Description desc = {desc}/>
            <Button btn1 = {btn1} btn2 = {btn2}/>
        </div>
    )
}

export default Card;