import berlin from './pictures/berlin.jpg';
import london from './pictures/london.jpg';
import paris from './pictures/paris.png';

function Galerii(props) {
    return (
        <div className="Galerii">
        <div className="row">
        <div className="col-md-4"> {/*notes*/}
            <div className="thumbnail"> 
                <img src= {berlin} alt="Berliin" width='100%'/>
                <div className="caption">
                <h1>{props.pildinimetus}</h1> 
                <p>Autor: {props.pildiautor} </p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="thumbnail">          
                <img src= {london} alt="London" width='100%' />
                <div className="caption">
                <h1>{props.pildinimetus1}</h1> 
                <p>Autor: {props.pildiautor1} </p>
                </div>           
            </div>
        </div>
        <div className="col-md-4">
            <div className="thumbnail">
                <img src= {paris} alt="Pariis" width='100%' />
                <div className="caption">
                <h1>{props.pildinimetus2}</h1> 
                <p>Autor: {props.pildiautor2} </p>
                </div>
            </div>
        </div>
        </div>
        </div>    
    )
}

export default Galerii;