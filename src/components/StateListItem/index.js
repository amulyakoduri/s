import './index.css'

const StateListItem = props => {
  const {stateListDetails} = props
  const {
    name,
    conformed,
    active,
    recovered,
    deceased,
    population,
  } = stateListDetails

  return (
    <li className="">
      <p>{name}</p>
      <p>{conformed}</p>
      <p>{active}</p>
      <p>{recovered}</p>
      <p>{deceased}</p>
      <p>{population}</p>
    </li>
  )
}

export default StateListItem
