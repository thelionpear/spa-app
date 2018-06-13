import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { isAuthenticated } from '../fakeAuth'
import axios from 'axios'

class Dashboard extends React.Component {
  state = { products: [] }

  componentDidMount() {
    axios.get('/api/products')
      .then( ({ data }) => this.setState({ products: data }) )
  }

  render() {
    const { products } = this.state
    if (isAuthenticated()) {
      return (
        <ul>
          { products.map( p =>
              <li key={p.id}>
                <Link to={`/products/${p.id}`}>
                  {p.name}
                </Link>
              </li>
            )
          }
        </ul>
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}


export default Dashboard