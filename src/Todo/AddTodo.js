import React, {useState} from 'react'
import PropTypes from 'prop-types'

const styles = {
    form: {
        marginBottom: '1rem'
    },
    input: {
        marginRight: '1rem',
        outline: 'none'
    }
    
} 

function useInputValue(defaulValue = '') {
    const [value, setValue] = useState(defaulValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    }
}

function AddTodo ({onCreate}) {
    const input = useInputValue('')
    
    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input 
                style={styles.input}
                {...input.bind}
            />
            <button type="submit">
                Add todo
            </button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo