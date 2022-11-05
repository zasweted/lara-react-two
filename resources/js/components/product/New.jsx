import React, { useState } from "react";

const New = () => {

     const [name, setName] = useState('');
     const [description, setDescription] = useState('');
     const [image, setImage] = useState('');
     const [type, setType] = useState('');
     const [price, setPrice] = useState('');
     const [inventory, setInventory] = useState('');

    return(

        <>
            <div className="container">
                <div className="products-create">
                    <div className="titlebar">
                        <div className="titlebar-item">
                            <h1>Add Product</h1>
                        </div>
                        <div className="titlebar-item">
                            <button className="btn">Save</button>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="wrapper-left">
                            <div className="card">
                                <p>Name</p>
                                <input type="text" name="name" />

                                <p>Description</p>
                                <textarea name="description" cols="10" rows ="5"></textarea>

                                <div className="media">
                                    <div className="images-list">
                                        <li className="image-item">
                                            <div className="image-item-img">
                                                <img src="" alt="" width="117px" height="100px" />
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
                                <input type="text" name="type" />

                                <hr className="hr" />
                                
                                <p>Inventory</p>
                                <input type="text" name="inventory" />

                                <hr className="hr" />

                                <p>Price</p>
                                <input type="number" name="price" />

                                <br className="br" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>

    )

}

export default New;