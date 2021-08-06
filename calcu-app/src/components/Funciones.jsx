import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const Funciones = ({onClickClear, onClickDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="Clear" clickHandler={onClickClear} />
        <Button text="&larr;" clickHandler={onClickDelete} />
    </section>
)

Funciones.propTypes = {
    onClickClear: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

export default Funciones