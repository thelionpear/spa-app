import React from 'react'
import { Redirect } from 'react-router-dom'
import { isAuthenticated } from '../fakeAuth'
import axios from 'axios'

class Dashboard extends React.Component {
    state = { products: [] } 

    componentDidMount() {
        axios.get('/api/products')
            .then( res => this.setState({ products: res.data }))
    }
}

export default Dashboard 