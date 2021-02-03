import React from 'react'

const styles = {
    div: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1rem'
    }
}

function Loader () {
    return (
        <div style={styles.div}>
            <div className="lds-dual-ring" />
        </div>
    )
}

export default Loader