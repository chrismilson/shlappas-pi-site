import React from 'react'
import { Link } from 'react-router-dom'

function NavItem (props) {
  return props.name ? <Link to={props.path || '/'}>{props.name}</Link> : null
}

/**
 * Lists links to each of the pages in props.routes
 * @param {{routes: {name: string, path: string}[]}} props
 */
function Navigator (props) {
  return (
    <div className='Navigator'>
      {
        props.routes.map((r, idx) => <NavItem key={idx} {...r} />)
      }
    </div>
  )
}

export default Navigator
