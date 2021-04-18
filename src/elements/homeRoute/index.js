import React, { useState,useEffect } from 'react'
import './index.scss'

import { AiFillEye } from 'react-icons/ai'




function Home(props) {
    const [productData , setData] = useState([])
    const [currentFilter,setFilter] = useState("popular")

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
                <div onClick={()=>setFilter("popular")} className={currentFilter==="popular"?"current-filter":""} >Popular</div>
                <div onClick={()=>setFilter("auction")} className={currentFilter==="auction"?"current-filter":""} >Auction</div>
                <div onClick={()=>setFilter("flat-rate")} className={currentFilter==="flat-rate"?"current-filter":""} >Flat-rate</div>
                <div onClick={()=>setFilter("scheduled")} className={currentFilter==="scheduled"?"current-filter":""} >Scheduled</div>
            </div>
            <div className="products-container" >
                {
                    productData.map((product,index)=>{
                        if(props.searchVal!==""){
                            if(!product.name.toLowerCase().includes(props.searchVal)){
                                return
                            }
                        }else if(!product.tags?.includes(currentFilter)){
                            return
                        }
                        
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
