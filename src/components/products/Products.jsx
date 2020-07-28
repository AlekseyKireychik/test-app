import React from 'react';
import Product from "./product/Product";
import './Products.css';

const productList = [
    {
        id: 1,
        image: 'prod-img.jpg',
        title: 'Is simply',
        cost: 999,
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        information: [
            {
                id: 1,
                name: 'Is simply',
                text: 'Lorem Ipsum',
            },
            {
                id: 2,
                name: 'dummy',
                text: 'has been the industry',
            },
            {
                id: 3,
                name: 'text',
                text: 'Is simply',
            }
        ]
    },
    {
        id: 2,
        image: 'aa11111.jpg',
        title: 'Is simply',
        cost: 999,
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        information: [
            {
                id: 1,
                name: 'Is simply',
                text: 'Lorem Ipsum',
            },
            {
                id: 2,
                name: 'dummy',
                text: 'has been the industry',
            },
            {
                id: 3,
                name: 'text',
                text: 'Is simply',
            }
        ]
    }, {
        id: 3,
        image: 'prod-img.jpg',
        title: 'Is simply',
        cost: 999,
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        information: [
            {
                id: 1,
                name: 'Is simply',
                text: 'Lorem Ipsum',
            },
            {
                id: 2,
                name: 'dummy',
                text: 'has been the industry',
            },
            {
                id: 3,
                name: 'text',
                text: 'Is simply',
            }
        ]
    }, {
        id: 4,
        image: 'prod-img.jpg',
        title: 'Is simply',
        cost: 999,
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        information: [
            {
                id: 1,
                name: 'Is simply',
                text: 'Lorem Ipsum',
            },
            {
                id: 2,
                name: 'dummy',
                text: 'has been the industry',
            },
            {
                id: 3,
                name: 'text',
                text: 'Is simply',
            }
        ]
    }, {
        id: 5,
        image: 'prod-img.jpg',
        title: 'Is simply',
        cost: 999,
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        information: [
            {
                id: 1,
                name: 'Is simply',
                text: 'Lorem Ipsum',
            },
            {
                id: 2,
                name: 'dummy',
                text: 'has been the industry',
            },
            {
                id: 3,
                name: 'text',
                text: 'Is simply',
            }
        ]
    }, {
        id: 6,
        image: 'prod-img.jpg',
        title: 'Is simply',
        cost: 999,
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        information: [
            {
                id: 1,
                name: 'Is simply',
                text: 'Lorem Ipsum',
            },
            {
                id: 2,
                name: 'dummy',
                text: 'has been the industry',
            },
            {
                id: 3,
                name: 'text',
                text: 'Is simply',
            }
        ]
    }, {
        id: 7,
        image: 'prod-img.jpg',
        title: 'Is simply',
        cost: 999,
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        information: [
            {
                id: 1,
                name: 'Is simply',
                text: 'Lorem Ipsum',
            },
            {
                id: 2,
                name: 'dummy',
                text: 'has been the industry',
            },
            {
                id: 3,
                name: 'text',
                text: 'Is simply',
            }
        ]
    }, {
        id: 8,
        image: 'prod-img.jpg',
        title: 'Is simply',
        cost: 999,
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        information: [
            {
                id: 1,
                name: 'Is simply',
                text: 'Lorem Ipsum',
            },
            {
                id: 2,
                name: 'dummy',
                text: 'has been the industry',
            },
            {
                id: 3,
                name: 'text',
                text: 'Is simply',
            }
        ]
    }];

function Products() {
    return (
        <div className="product">
            <ul className="product__list">
                {productList.map(elem => (
                    <Product key={elem.id}
                             image={elem.image}
                             title={elem.title}
                             information={elem.information}
                             cost={elem.cost}
                             children={elem.description}/>
                ))}
            </ul>
        </div>
    );
}

export default Products;