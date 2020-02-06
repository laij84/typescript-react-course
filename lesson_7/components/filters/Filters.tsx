import React from 'react'
import { Legend, Fieldset, Optionset, Radio } from './Filters.styles'
import { FiltersProps } from './Filters.types'

export const Filters: React.FC<FiltersProps> = ({ setFilter, filter }) => {
  return (
    <Fieldset>
      <Legend>Filter by:</Legend>
      <Optionset>
        <li>
          <Radio
            type="radio" //
            name="filters"
            id="all"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
          <label htmlFor="all">All</label>
        </li>
        <li>
          <Radio
            type="radio"
            name="filters"
            id="completed"
            checked={filter === 'completed'}
            onChange={() => setFilter('completed')}
          />
          <label htmlFor="completed">Completed</label>
        </li>
        <li>
          <Radio
            type="radio"
            name="filters"
            id="incomplete"
            checked={filter === 'incomplete'}
            onChange={() => setFilter('incomplete')}
          />
          <label htmlFor="incomplete">Incomplete</label>
        </li>
      </Optionset>
    </Fieldset>
  )
}
