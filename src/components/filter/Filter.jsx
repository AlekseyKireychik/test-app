import React from 'react';
import './Filter.css';
import Dropdown from "../dropdown/Dropdown";
const filters = [
    {
        id: 1,
        category: 'Is simply',
        params: [
            {
                id: 1,
                value: 'Is simply',
            },
            {
                id: 2,
                value: 'dummy text',
            },
            {
                id: 3,
                value: 'of the printing',
            },
            {
                id: 4,
                value: 'and typesetting industry',
            }
        ]
    },
    {
        id: 2,
        category: 'Dummy text',
        params: [
            {
                id: 1,
                value: 'Is simply 2',
            },
            {
                id: 2,
                value: 'dummy text 2',
            },
            {
                id: 3,
                value: 'of the printing 2',
            },
            {
                id: 4,
                value: 'and typesetting industry 2',
            }
        ]
    },
    {
        id: 3,
        category: 'Of the printing',
        params: [
            {
                id: 1,
                value: 'Is simply 3',
            },
            {
                id: 2,
                value: 'dummy text 3',
            },
            {
                id: 3,
                value: 'of the printing 3',
            },
            {
                id: 4,
                value: 'and typesetting industry 3',
            }
        ]
    }];
function Filter() {

    return (

        <section className="filter">
            <h2>Lorem Ipsum</h2>
            <ul className="filter__list">
                {filters.map((item, index) => (
                    <li className="filter__item" key={item.id}>
                        <Dropdown title={item.category} chilldren={index} items={item.params} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
export default Filter;