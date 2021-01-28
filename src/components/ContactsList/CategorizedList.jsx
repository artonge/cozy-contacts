import React from 'react'
import PropTypes from 'prop-types'

import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import { Table } from 'cozy-ui/transpiled/react/Table'

import ContactHeaderRow from './ContactHeaderRow'
import ContactsSubList from './ContactsSubList'
import { categorizeContacts } from '../../helpers/contactList'

const CategorizedList = ({ contacts }) => {
  const { t } = useI18n()
  const categorizedContacts = categorizeContacts(contacts, t('empty-list'))

  return (
    <Table className="u-nolist">
      {Object.entries(categorizedContacts).map(([header, contacts]) => (
        <li key={`cat-${header}`}>
          <ContactHeaderRow key={header} header={header} />
          <ContactsSubList contacts={contacts} />
        </li>
      ))}
    </Table>
  )
}

CategorizedList.propTypes = {
  contacts: PropTypes.array.isRequired
}

export default CategorizedList
