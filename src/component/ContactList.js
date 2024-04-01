import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [ searchResultList, setSearchResultList ] = useState([]);

  useEffect(() => {
    if( keyword === '') {
      setSearchResultList(contactList);
    } else {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setSearchResultList(list)
      console.log(list)
    }
  },[contactList, keyword])

  return (
    <div>
      <SearchBox />
      <p>저장된 연락처 {searchResultList.length}개</p>
      {searchResultList.map((item, index) => (
        <ContactItem key={item.name} item={item} />
      ))}
    </div>
  )
}

export default ContactList