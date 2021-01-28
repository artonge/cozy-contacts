import React from 'react'
import PropTypes from 'prop-types'

import ContactRow from './ContactRow'

const ContactsSubList = ({ contacts }) => {
  return (
    <ol className="u-m-0 u-pl-0 u-nolist">
      {contacts.map((contact, index) => (
        <li key={`contact-${contact._id}`}>
          <ContactRow
            style={index === contacts.length - 1 ? { borderBottom: 0 } : null}
            id={contact._id}
            key={contact._id}
            contact={contact}
          />
        </li>
      ))}
    </ol>
  )
}

ContactsSubList.propTypes = {
  contacts: PropTypes.array.isRequired
}

export default ContactsSubList
