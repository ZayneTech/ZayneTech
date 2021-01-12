import react from 'react';
import {Link} from 'react-router-dom';
import design from '../assets/svgs/computeruidesign.svg';
import developer from '../assets/svgs/Developer.svg';
import server from '../assets/svgs/databaseserver.svg';
import greenarrow from '../assets/svgs/green arrow.svg';


const Services = () => {

    return (

        <div className="wrapper" id="services-section">
         
            
            <h1 className="page-content" id="services-header"> Services </h1>

            <div id="services-cards">

                <Link to="/services/design"     id="service-card-1">
                    <h2>UI / UX Design</h2>
                    <img src={design} id="designcomputer"/>
                    <p>Lorem Ipsum Lorem Ipsum and <br />random text Ipsum Lorem blah  <br /> 
                       fill this space up, and this line <br /> too make it a decent sized <br />
                        description.
                    </p>
                   <img src={greenarrow} className="service-arrow"/>
                </Link>
                <Link to="/services/frontend" id="service-card-2">
                    <h2> Frontend Web <br /> Development</h2>
                    <img src={developer} id="developer"/>
                    <p>Lorem Ipsum Lorem Ipsum and <br />random text Ipsum Lorem blah  <br /> 
                       fill this space up, and this line <br /> too make it a decent sized <br />
                        description.
                    </p>
                    <img src={greenarrow} className="service-arrow"/>
                </Link>
                <Link to="/services/backend" id="service-card-3">
                    <h2> Backend Web <br /> Development</h2>
                    <img src={server} id="server"/>
                    <p>Lorem Ipsum Lorem Ipsum and <br />random text Ipsum Lorem blah  <br /> 
                        fill this space up, and this line <br /> too make it a decent sized <br />
                        description.
                    </p>
                    <img src={greenarrow} className="service-arrow"/>
                </Link>
            </div>
        </div>
           
     

        
    )
}



export default Services;