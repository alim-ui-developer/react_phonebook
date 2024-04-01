import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row className='contactItem'>
      <Col lg={2} className='imageBox'>
        <img src={item.profileImage} alt="profile" />
      </Col>
      <Col lg={10} className='textBox'>
        <h3>{item.name}</h3>
        <p>{item.phoneNumber}</p>
      </Col>
    </Row>
  )
}

export default ContactItem