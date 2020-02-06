export type Filter = 'all' | 'completed' | 'incomplete'

export interface FiltersProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  initialValue?: Filter
}
