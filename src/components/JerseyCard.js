import ruth from '../images/ruth.jpg'
import bogaerts from '../images/bogaerts.jpg'
import clemens from '../images/clemens.jpg'
import devers from '../images/devers.jpg'
import gehrig from '../images/gehrig.jpg'
import hosmer from '../images/hosmer.jpg'
import jeter from '../images/jeter.jpg'
import judge from '../images/judge.jpg'
import ortiz from '../images/ortiz.jpg'
import stanton from '../images/stanton.jpg'
import torres from '../images/torres.jpg'
import yas from '../images/yas.jpg'


function JerseyCard(props) {
    const {item, addCart, removeCart, key} = props
    var imagePath = ruth

    switch(item.id){
        case 2:
            imagePath = gehrig;
            break;
        case 3:
            imagePath = jeter;
            break;
        case 4:
            imagePath = judge;
            break;
        case 5:
            imagePath = torres;
            break;
        case 6:
            imagePath = stanton;
            break;
        case 7:
            imagePath = clemens;
            break;
        case 8:
            imagePath = ortiz;
            break;
        case 9:
            imagePath = yas;
            break;
        case 10:
            imagePath = bogaerts;
            break;
        case 11:
            imagePath = devers;
            break;
        case 12:
            imagePath = hosmer;
            break;
    }

    return (
        <div className="jersey-card">
            <div className="jersey-image">
                <img className="j-image" src={imagePath}></img>
            </div>
            <h2 className="jersey-name">{item.name}</h2>
            <div className="jersey-team">{item.team}</div>
            <div className="jersey-status">{item.status}</div>
            
            <div className='option-wrapper'>
                <button onClick = {() => {removeCart(item)}}>Remove</button>
                <div>${item.price}</div>
                <button onClick ={() => {addCart(item)}}>Add to Cart</button>
            </div>
        </div>
    );
}
  
export default JerseyCard;