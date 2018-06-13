import React from 'react'

const NoMatch = ({ location: { pathname }}) => (
    <h2>404 Not Found. No Route Matches "{ pathname }"</h2>
)

export default NoMatch 