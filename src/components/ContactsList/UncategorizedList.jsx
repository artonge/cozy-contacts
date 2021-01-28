import React from 'react'
import PropTypes from 'prop-types'

import { Table } from 'cozy-ui/transpiled/react/Table'

import ContactsSubList from './ContactsSubList'

const UncategorizedList = ({ contacts }) => {
  return (
    <Table className="u-nolist">
      <li key="no-category">
        <ContactsSubList contacts={contacts} />
      </li>
    </Table>
  )
}

UncategorizedList.propTypes = {
  contacts: PropTypes.array.isRequired
}

export default UncategorizedList
