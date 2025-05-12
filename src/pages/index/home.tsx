import React, {useEffect, useState} from "react"
import NavBar from '../../components/navbar/navbar'
import './home.scss'
import ProductList from "../products/product-list"
import Slider from "../../components/slider/slider"
import Footer from "../../components/footer/footer"
import { CategoryDTO } from "../../dto/categories.dto"
const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(()=>{
  },[]) 
  ;


 
  // const getCategories = () =>{
  //   dispatch(displayCategories() as any)
  // }

  useEffect(()=>{
  })

    return(
        <div>
          <NavBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />  
          <div className="body"> 
            <div className="top-div">
              
              <div className="slider">
              <Slider />
              </div>
            </div>
            <div className="list">
              <ProductList  searchQuery={searchQuery} />
            </div>
            <div>
            </div>
          </div>
            <div className="footer-div">
              <Footer />
            </div>
        </div>

    )
}

export default HomePage;