import React, { useState } from "react";

const New = () => {

     const [name, setName] = useState('');
     const [description, setDescription] = useState('');
     const [image, setImage] = useState('');
     const [type, setType] = useState('');
     const [price, setPrice] = useState('');
     const [quantity, setQuantity] = useState('');

     const changeHandler = (e) => {

        let file = e.target.files[0]
        let reader = new FileReader()
        let limit = 2024 * 2024 * 4
        if(file['size'] > limit) {
            Swal.fire({
                type: 'error',
                title: 'Ooops....',
                text: 'Something Went Wrong',
                footer: 'Why do i have this issue?',

            })
        }
        reader.onloadend = (file) => {
            console.log(reader.result);
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
     }

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
                                <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />

                                <p>Description</p>
                                <textarea name="description" cols="10" rows ="5" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>

                                <div className="media">
                                    <div className="images-list">
                                        <li className="image-item">
                                            <div className="image-item-img">
                                                <img src={image} alt="upload-image" width="117px" height="100px" />
                                            </div>
                                        </li>
                                        <li className="image-item">
                                            <form className="image-item-form">
                                                <label className="image-item-form--label">Add Image</label>
                                                <input type="file" name="image" className="image-item-form--input" onChange={changeHandler}/>
                                            </form>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-right">
                            <div className="card">
                                <p>Product Type</p>
                                <input type="text" name="type" value={type} onChange={(e)=>{setType(e.target.value)}} />

                                <hr className="hr" />
                                
                                <p>Quantity</p>
                                <input type="number" name="quantity" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} />

                                <hr className="hr" />

                                <p>Price</p>
                                <input type="number" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />

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