import React from 'react'
import './Blogs.css'

function Blogs() {
  return (
    <div class="blogs"><h5 id='blogs__text'>Blogs</h5>
    <div className='blogs__head'>
      <h3>How to organize your CSS</h3>
      <img src='https://source.unsplash.com/200x200/?computer' id="blogs__img"/>
    </div>
    <p>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  </p><br/><p>

Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
<a href='#' id='blogs__link'>dev.to</a>
    </div>
  )
}

export default Blogs