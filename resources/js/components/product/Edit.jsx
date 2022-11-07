import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {


        const navigate = useNavigate();
        const { id } = useParams();

        const [name, setName] = useState('');
        const [description, setDescription] = useState('');
        const [image, setImage] = useState('');
        const [type, setType] = useState('');
        const [price, setPrice] = useState('');
        const [quantity, setQuantity] = useState('');
        const [avatar, setAvatar] = useState(true);

        useEffect(()=> {
            getProduct()
        }, [])

        const getProduct = async () => {
            await axios.get(`/api/get_edit_product/${id}`)
            .then(({data})=>{
                const { name, description, image, type, quantity, price } = data.product
                setName(name)
                setDescription(description)
                setImage(image)
                setType(type)
                setQuantity(quantity)
                setPrice(price)
            })
            .catch(({response:{data}})=>{

            })
        }

        return(

            <>
                <div className="container">
                    <div className="product-edit">
                    <div className="titlebar">
                        <div className="titlebar-item">
                            <h1>Edit Product</h1>
                        </div>
                        <div className="titlebar-item">
                            <button className="btn" >Save</button>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="wrapper-left">
                            <div className="card">
                                <p>Name</p>
                                <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  />

                                <p>Description</p>
                                <textarea name="description" cols="10" rows ="5" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>

                                <div className="media">
                                    <div className="images-list">
                                        <li className="image-item">
                                            <div className="image-item-img">
                                                <img src={image ? image : null}  width="117px" height="100px" />
                                            </div>
                                        </li>
                                        <li className="image-item">
                                            <form className="image-item-form">
                                                <label className="image-item-form--label">Add Image</label>
                                                <input type="file" name="image" className="image-item-form--input" />
                                            </form>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-right">
                            <div className="card">
                                <p>Product Type</p>
                                <input type="text" name="type" value={type} onChange={(e)=>{setType(e.target.value)}}  />

                                <div className="hr"></div>
                                
                                <p>Quantity</p>
                                <input type="number" name="quantity" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} />

                                <div className="hr"></div>

                                <p>Price</p>
                                <input type="number" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}  />

                                <div className="br"></div>
                            </div>
                        </div>
                    </div>
                    <div className="titlebar">
                        <div className="titlebar-item">

                        </div>
                        <div className="titlebar-item">
                            <button className="btn" >Save</button>
                        </div>
                    </div>
                    </div>
                </div>
            </>

        )
}

export default Edit;