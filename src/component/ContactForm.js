import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const PROFILE_IMAGE_ARR = [
  "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp", 
  "https://i.namu.wiki/i/jtQmllGb5XztKurgXD3gIH-o874OJN_LrCr37LiIhB6zhWKhWOR6Fy-VeBWtTlJtRXnvfgNkoBq4x__gGM6F6w.webp",
  "https://i.namu.wiki/i/kihxAyVbq3aEhemgBPUvth1NHcOlSD0dFr5YNf6OcHrPJtDY62Epb2tvRWksjpNvB3XrhlL__1O6nWnZDmcJcw.webp",
]

const ContactForm = () => {
  const [ name, setName ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ profileImage, setProfileImage] = useState('');
  const dispatch = useDispatch();

  const getPhoneNumber = ( event ) => {
    let value = event.target.value
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(value)) {
      setPhoneNumber(value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }

  const addContact = ( event ) => {
    event.preventDefault();
    dispatch({type:'ADD_CONTACT', payload:{profileImage:profileImage, name:name, phoneNumber:phoneNumber}})
  }

  return (
    <Form className='contactForm' onSubmit={addContact}>
    <p>친구의 프로필 이미지를 골라보세요!</p>
      <div className='profileImageRadioButtons'>
        {PROFILE_IMAGE_ARR && PROFILE_IMAGE_ARR.map((image, index) => (
          <div key={`profile${index}`}>
            <label htmlFor={`profileImage${index}`} >
              <img src={PROFILE_IMAGE_ARR[index]} alt="" />
            </label>
            <input type="radio" name="profileImage" id={`profileImage${index}`} onChange={() => setProfileImage(PROFILE_IMAGE_ARR[index])} />
          </div>
          ))}
      </div>
      <Form.Group className="row mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해 주세요" onChange={(event) => setName(event.target.value)} value={name} />
      </Form.Group>
      <Form.Group className="row mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="tel" maxLength={13} placeholder="전화번호를 입력해 주세요" onChange={getPhoneNumber} value={phoneNumber} />
      </Form.Group>
      <Button variant="primary" type="submit" className="btn_add">
        추가
      </Button>
    </Form>
  )
}

export default ContactForm