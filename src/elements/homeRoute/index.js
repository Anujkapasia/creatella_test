import React, { useState,useEffect } from 'react'
import './index.scss'

import { AiFillEye } from 'react-icons/ai'



function Home() {
    const [productData , setData] = useState([])

    useEffect(()=>{
        var request = new XMLHttpRequest();
        request.open('GET', 'https://private-a88bd-posts33.apiary-mock.com/products');

        request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            var myObject = eval('(' + this.responseText + ')');
            setData(myObject)
        }
        };
        request.send();
    },[])

    

    return (
        <div className="home-container" >
            <div className="filters-wrapper" >
                <div className="current-filter" >Popular</div>
                <div>Auction</div>
                <div>Flat-rate</div>
                <div>Scheduled</div>
            </div>
            <div className="products-container" >
                {
                    productData.map((product,index)=>{
                        return(
                            <Product
                            key={index}
                            {...product}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}




function Product(props){
    return(
        <div className="product-wrapper" >
            <div className="product-images-wrapper" >
                <img className="product-image" src={props.productPic} />
                <img className="profile-pic" src={props.profilePic} />
                <span className="view-counter" ><AiFillEye /> {props.views}</span>
            </div>
            <div className="product-description-wrapper" >
                <div className="product-name" >{props.name}</div>
                <div className="product-description" >{props.about}</div>
                <div className="product-time" >{props.time}</div>
                <div className="product-price" >{props.price}</div>
            </div>
            

        </div>
    )
}

export default Home
