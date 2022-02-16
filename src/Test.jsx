import React from 'react'

export default function Test(props) {

    console.log('props.state', props.state)

    props.state.age = 20

    return (
        <div>Test</div>
    )
}
