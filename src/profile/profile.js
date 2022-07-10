import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Profile(props) {
    const {children,fullName,Bio,profession}=props
    const textstyle = { fontWeight: 500, fontSize: 25, marginLeft: '5cm', color: 'rgb(165, 185, 255)' }
     const imgstyle = { width: '6cm', height: '8.5cm', marginLeft: '5cm', marginTop: "1cm" }
     const purple={ color: 'purple' }
     const white={ color: 'white' }

    return (

        <CardGroup >
            <Card  style={{backgroundColor: 'rgb(132, 055, 155)'}}>
            <img style={imgstyle} src={children} alt="myimage"></img>
                <Card.Body>
                    <p style={textstyle}>{fullName}</p>
                    
                </Card.Body>
                <Card.Footer>
                    <small style={white} className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card style={{backgroundColor: 'rgb(35, 055, 155)'}}>

                <Card.Body  >
                    <br></br><br></br><br></br>
                    <h2 style={purple}>Bio</h2>
                    <p style={white}>{Bio}
                    </p>
                    <br></br>
                    <h2 style={purple}>Profession</h2>
                    <p style={white}>{profession}</p>
                        
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">___</small>
                </Card.Footer>
            </Card>

        </CardGroup>

         
    )
}
export default Profile
