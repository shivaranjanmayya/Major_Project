import React from 'react';
import ProductCategory from '../../Components/Category';
import './styles.scss'
const HomePage = props => {
    return (
        <section className='homepage'>
            <ProductCategory />
        </section>
    );
};

export default HomePage;