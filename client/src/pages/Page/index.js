import React from 'react'
import Meta from 'react-meta-tags'

import './Page.scss'

/**
 * Template class for pages
 *
 * @param {Object} props
 * @param {string} [props.className] - Sets the class of the html element.
 * @param {boolean} [props.unbound] - Disables the max-width and padding.
 * @param {string} [props.title] - Sets the title meta data
 * @param {string} [props.description] - Sets the description meta data.
 */
function Page (props) {
  return (
    <div
      className={[
        'Page',
        props.className,
        props.unbound ? 'unbound' : ''
      ].join(' ')}
    >
      <Meta>
        <title>
          {
            'Shlappas PI' + (props.title ? ' - ' + props.title : '')
          }
        </title>
        <meta
          name='description'
          content={props.description || 'The hub for Shlappas Home'}
        />
      </Meta>
      {props.children}
    </div>
  )
}

export default Page
