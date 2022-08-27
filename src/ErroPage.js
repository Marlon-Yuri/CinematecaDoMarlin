import React from 'react'
import {Link} from 'react-router-dom'

export default function ErroPage() {
  return (
    <div>
        <h1>A página não existe</h1>
        <Link to = '/'>Home Page</Link>
    </div>
  )
}
