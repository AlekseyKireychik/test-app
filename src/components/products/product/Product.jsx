import React from 'react';
import './Product.css';
import PropTypes from 'prop-types'

function Product({image, title, information, cost, children}) {

    return (

        <li className="product__item">
            <header>
                <img src={image} alt={title}/>
                <h2>{title}</h2>
                <div className="information">
                    {information.map(item => (
                        <div className="row" key={item.id}>
                            <span className="title">{item.name}:</span>
                            <p>{item.text}</p>
                        </div>
                    ))}

                </div>
            </header>
            <div className="bottom">
                <div className="cost">{cost}$</div>
                <div className="functions">
                    <a
                        className="btn"
                        href="/"
                    >
                        Buy
                    </a>
                    <div className="inf">
                        <div className="icon">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.9 16.5H12.1V9.9H9.9V16.5ZM11 0C4.95 0 0 4.95 0 11C0 17.05 4.95 22 11 22C17.05 22 22 17.05 22 11C22 4.95 17.05 0 11 0ZM11 19.8C6.16 19.8 2.2 15.84 2.2 11C2.2 6.16 6.16 2.2 11 2.2C15.84 2.2 19.8 6.16 19.8 11C19.8 15.84 15.84 19.8 11 19.8ZM9.9 7.7H12.1V5.5H9.9V7.7Z"
                                    fill="#BDBDBD"/>
                            </svg>
                        </div>
                        <div className="description">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

Product.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    information: PropTypes.array.isRequired,
    cost: PropTypes.number.isRequired,
    chilldren: PropTypes.string.isRequired,
};
Product.defaultProps = {
    image: 'prod-img.jpg',
    title: '',
    cost: '',
    information: [],
    chilldren: '',
}

export default Product;