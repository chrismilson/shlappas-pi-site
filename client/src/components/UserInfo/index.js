import React from 'react'
import { Link } from 'react-router-dom'

import './UserInfo.scss'

/**
 * Displays the logged in user's information on the screen - providing a link to
 * their profile page. If no user is logged in, displays an option to log in.
 *
 * @param {Object} props
 * @param {'small'|'medium'|'large'} [props.type]
 * @param {Object} [props.user]
 * @param {string} props.user.name
 */
function UserInfo (props) {
  return (
    <div className={`UserInfo ${props.type || ''}`}>
      {
        props.user
          ? `Welcome ${props.user.name}`
          : <Link to='/login'>Log In</Link>
      }
    </div>
  )
}

export default UserInfo
