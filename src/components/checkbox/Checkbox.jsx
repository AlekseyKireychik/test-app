import React from 'react';
import './Checkbox.css';
import PropTypes from 'prop-types'

const Checkbox = ({nameId, label, selected, styleClass, onChange}) => {

    const handleChange = (event) => {
        const {selected} = event.target;
        onChange(selected);
    };

    return (
        <div className={`form-group ${styleClass}`}>
            <input
                id={nameId}
                type="checkbox"
                value={selected}
                defaultChecked={selected}
                onChange={handleChange}/>

            <label
                htmlFor={nameId}>
                {label}
            </label>
        </div>
    )
};
Checkbox.propTypes = {
    styleClass: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
Checkbox.defaultProps = {
    styleClass: ''
}

export default Checkbox;