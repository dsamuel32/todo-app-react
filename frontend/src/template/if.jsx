import React from 'react'

export default props => {
    if (props.test === false) {
        return props.children
    } else {
        return false;
    }
}