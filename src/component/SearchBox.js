import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';


const SearchBox = () => {
  const [ keyword, setKeyword ] = useState('');
  const dispatch = useDispatch();

  const doSearch = ( event ) => {
    event.preventDefault();
    dispatch({type:'SEARCH_BY_KEYWORD', payload:{ keyword:keyword }})
  }

  return (
    <Form onSubmit={doSearch}>
      <Row className='searchBox'>
        <Col lg={10}>
          <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(event) => setKeyword(event.target.value)} />
        </Col>
        <Col lg={2}>
          <Button type="submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox