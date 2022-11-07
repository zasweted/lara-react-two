import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const newProduct = () => {
        navigate('/product/new')
    }

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        await axios.get("/api/get_all_products")
            .then(({ data }) => {
                setProducts(data.products)
            })
    }

    const editProduct = (id) => {
        navigate("/product/edit/" + id)
    }

    return (
        <>
            <div className="container">
                <div className="products-list">
                    <div className="titlebar">
                        <div className="titlebar-item">
                            <h1>Products</h1>
                        </div>
                        <div className="titlebar-item">
                            <div className="btn" onClick={() => newProduct()}>
                                Add Product
                            </div>
                        </div>
                    </div>
                    <div className="table">
                        <div className="list-header">
                            <p>Image</p>
                            <p>Product</p>
                            <p>Type</p>
                            <p>Inventory</p>
                            <p>Actions</p>
                        </div>

                        {
                            products.length > 0 && (
                                products.map((item, key) => (
                                    <div className="list-items" key={key}>
                                        <img src={`/upload/${item.image}`} height="40px" alt="" />
                                        <a href="">{item.name}</a>
                                        <p>{item.type}</p>
                                        <p>{item.quantity}</p>
                                        <div className="btn-container">
                                            <button className="btn-icon success" onClick={()=> editProduct(item.id)}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button className="btn-icon danger">
                                                <i className="far fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;