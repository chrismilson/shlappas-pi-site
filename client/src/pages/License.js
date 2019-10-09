import React from 'react'
import Page from './Page'

function License (props) {
  return (
    <Page className='License'>
      <div className='col text'>
        <h1>License</h1>
        <h2>Copyright 2019 Chris Milson</h2>
        <p>
          Permission to use, copy, modify, and/or distribute this software for
          any purpose with or without fee is hereby granted, provided that the
          above copyright notice and this permission notice appear in all
          copies.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL
          WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
          WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
          AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL
          DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR
          PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
          TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
          PERFORMANCE OF THIS SOFTWARE.
        </p>
      </div>
    </Page>
  )
}

export default License
