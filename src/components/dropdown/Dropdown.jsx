import React, {useState} from 'react';
import './Dropdown.css';
import Checkbox from '../checkbox/Checkbox'
import PropTypes from 'prop-types'

function Dropdown({title, items, chilldren}) {
    const [open, setOpen] = useState(false);
    const [acceptance, setСhange] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <div className="dropdown">
            {open ? (
            <div className="dropdown__head open"
                 role="button"
                 onKeyPress={() => toggle(!open)}
                 onClick={() => toggle(!open)}>
                <p>{title}</p>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8L0.803848 0.500001L11.1962 0.5L6 8Z" fill="#C4C4C4"/>
                </svg>

            </div>
            ) : (<div className="dropdown__head"
                      role="button"
                      onKeyPress={() => toggle(!open)}
                      onClick={() => toggle(!open)}>
                <p>{title}</p>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8L0.803848 0.500001L11.1962 0.5L6 8Z" fill="#C4C4C4"/>
                </svg>
            </div>)}
            {open && (
                <ul className="dropdown__list">
                    {items.map(item => (
                        <li className="dropdown__item" key={item.id}>
                            <Checkbox label={item.value} selected={acceptance} nameId={`filter-check-${chilldren}-${item.id}`} onChange={setСhange} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
Dropdown.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array.isRequired,
    chilldren: PropTypes.number.isRequired,
};
Dropdown.defaultProps = {
    title: '',
    items: [],
    chilldren: '',
}
export default Dropdown;