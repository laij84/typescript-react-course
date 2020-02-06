import React, { useState } from 'react'
import { Legend, Fieldset, Optionset, Radio } from './Filters.styles'
import { FiltersProps, Filter } from './Filters.types'

export const Filters: React.FC<FiltersProps> = ({ onChange, initialValue }) => {
  const [filter, setFilter] = useState<Filter>(initialValue || 'all')
  return (
    <Fieldset>
      <Legend>Filter by:</Legend>
      <Optionset>
        <li>
          <Radio
            type="radio" //
            name="filters"
            id="all"
            value="all"
            checked={filter === 'all'}
            onChange={e => {
              setFilter('all')
              onChange(e)
            }}
          />
          <label htmlFor="all">All</label>
        </li>
        <li>
          <Radio
            type="radio"
            name="filters"
            id="completed"
            value="completed"
            checked={filter === 'completed'}
            onChange={e => {
              setFilter('completed')
              onChange(e)
            }}
          />
          <label htmlFor="completed">Completed</label>
        </li>
        <li>
          <Radio
            type="radio"
            name="filters"
            id="incomplete"
            value="incomplete"
            checked={filter === 'incomplete'}
            onChange={e => {
              setFilter('incomplete')
              onChange(e)
            }}
          />
          <label htmlFor="incomplete">Incomplete</label>
        </li>
      </Optionset>
    </Fieldset>
  )
}
