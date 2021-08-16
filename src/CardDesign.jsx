import React from 'react'
import { Col,Row,Container,Card, Button, Nav } from 'react-bootstrap'
import imageTitle from './illustration-hero.svg'
import imageSound from './icon-music.svg'
import { Redirect } from 'react-router'

//const imageSource = "https://www.wfla.com/wp-content/uploads/sites/71/2020/06/spongebobgay.jpg?w=640";

const imageSource = "./public/illustration-hero.svg"


const soundImage = "data:image/png;base64,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";

class CardDesign extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            purple: true,
            color_change: true,
            color_cancel: true,
            redirect: false
        }
        this.handleClickPayment = this.handleClickPayment.bind(this);
        this.handleClickChange = this.handleClickChange.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this); 
    }

    handleClickPayment(){
        this.setState({
            purple: !this.state.purple
        }
        )
    }
    handleClickChange(){
        this.setState({
            color_change: !this.state.color_change
        }
        )
    }
    handleClickCancel(){
        this.setState({
            color_cancel: !this.state.color_cancel
        }
        )
    }

    handleProceedPaymentClick = ()=> {
        this.setState(
            {
                redirect : true
            }
        )
    }

    render(){
        let btn_Payment = this.state.purple ? "#382ae1" : "#766cf1";
        let btn_Change = this.state.color_change ? "#382ae1" : "#766ada";
        let btn_Cancel = this.state.color_cancel ? "#6d7690" : "#2f3956"

        if (this.state.redirect) {
            return <Redirect push to="/correct-payment" />;
        }
        return(
            <Card style={{ width: '26rem', height: '37rem'}} className="round-borders">
                <img src={ imageTitle } style={{ overflow: "hidden" }}  />
                <Card.Body>
                    <Card.Title className="text-center mt-4 mb-3" >
                        <h4 >Order Summary</h4>
                        </Card.Title>
                    <Card.Text >
                        <div className="d-flex justify-content-center">
                        <div style={{ width: '300px', height: '90px'}}>
                            <p className="text-center">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p> 
                        </div>
                        </div>
                        <Container className="cost-content mb-4 round-borders " style={{ width: '300px'}}>
                            <Row>
                                <Col xs={2}>
                                <div className="image-positon">
                                <img src={ imageSound } alt="Error" width="40" height="40"/>
                                </div>
                                </Col>
                                <Col xs={6} >
                                    <div className="spacing-div">
                                        <h6 className="text-resize">Annual Plan</h6>
                                        <p className="text-resize">$59.99/year</p>
                                    </div>
                                    
                                </Col>
                                <Col className="d-flex align-items-center justify-content-center">
                                        <p><b><a href="#" style={{ color : btn_Change }} onMouseEnter={this.handleClickChange} onMouseLeave={this.handleClickChange}>Change</a></b></p>
                                </Col>
                            </Row>
                        </Container>
                        <div className="d-flex justify-content-center ">
                        <div className="d-grid mb-4" style={{ width: '300px'}}>
                        <Button variant="primary" style={{ background : btn_Payment}} className="box-shadow--8dp" onMouseEnter={this.handleClickPayment} onMouseLeave={()=>this.handleClickPayment()} onClick={this.handleProceedPaymentClick}>Proceed to Payment</Button> 
                        </div>
                        </div>
                        <div className="d-flex justify-content-center ">
                        <div className="d-grid mb-2" style={{ width: '300px'}}>
                        <Button variant="light" style={{ background : "#ffffff", color : btn_Cancel}} onMouseEnter={ this.handleClickCancel } onMouseLeave={ this.handleClickCancel } >Cancel Order</Button> 
                        </div>
                          
                        </div>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            
        )
    }
}

export default CardDesign;