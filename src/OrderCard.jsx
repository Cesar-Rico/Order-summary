import React from "react"
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import CardDesign from './CardDesign'
class OrderCard extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container className="centerContainer mt-5">
                <CardDesign></CardDesign>
            </Container>
        )
    }

    componentDidMount(){
        document.body.style.backgroundColor = "#e0e8ff"
    }
    componentWillUnmount(){
        document.body.style.backgroundColor = "#ffffff"
    }
}

export default OrderCard;