import { Dispatch, SetStateAction } from 'react'

export type Filter = 'all' | 'completed' | 'incomplete'

export interface FiltersProps {
  setFilter: Dispatch<SetStateAction<Filter>>
  filter: Filter
}
