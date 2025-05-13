import React, {useEffect, useState} from "react";
import  './navbar.scss'
import { Link } from "react-router-dom";
import InputField from "../input-field/input-field";
import Icons from "../../constant/imgs.constant";
const NavBar = ({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (query: string) => void }) =>{
  const icons = Icons
  const getData =(name:string, value:string)=>{
    if(name=='search' && value !== ''){
      console.log(value, 'val')
      setSearchQuery(value);
    }

  }

  const handleClearSearch = () => {
    setSearchQuery('');
  };
  useEffect(()=>{
  },[])


  const [showSidebar, setShowSidebar] = useState(false)
  const [dropDownMenu, setdropDownMenu] = useState(false);
  const [dropDown, setdropDown] = useState(false);
  // const { categories, isLoading, error } = useSelector((state: RootState) => state.category);
  
  // const [Categories, setCategories] = useState<CategoryDTO[]>([]);
 
  useEffect(()=>{

  })

  const toggleSidebar = () =>{
    
    if(showSidebar){
      setShowSidebar(false)
    }else{
      setShowSidebar(true)
    }

  }
 
  const toggleDropdown =()=>{
    if(dropDownMenu){
      setdropDownMenu(false);
    }else{
      setdropDownMenu(true);
    }
  }

  const accountToogle = () =>{
    if(dropDown){
      setdropDown(false);
    }else{
      setdropDown(true)
    }
  }

  const titleCase =(element:string) =>{
    if(element == null || element === ""){
      return false;
    }
    return element.replace(/\w\s*/g, 
      function convertTxt(txt:string){
        return txt.charAt(0).toLocaleUpperCase() + txt.substring(1);
      }
    )
  }

  
    return(
      <div>
        <div className="container ">
          <div className="lg-screen">

          <div className="company-name">
            <span className="title">Neat Storez</span>
            <span className="drop-down-btn" onClick={toggleDropdown}>
              <img src="icons/menu-white.avif" alt="" />

              {
                dropDownMenu ? (
                  <div className="dropdown">
                    <span className="title">All Categories</span>
                      <span className="categories">
{/* 
                      { categories?.map((catgory:CategoryDTO)=>
                        (
                        <span key={catgory?.id} className="items"> {catgory?.name?.toLocaleUpperCase()}</span>
                      )
                    )} */}
                      </span>
                  </div>
                ): ''
              }
            </span>
          </div>
          
          <div className="search-div">
            <InputField
              type="search"
              name="search"
              placeholder="what can i search for You"
              onChange={getData}
              value={searchQuery}
            />
            {/* <input 
              type="search" 
              placeholder="what can i search for u?" 
              className="search-field"
            /> */}
          </div>
          <div className="nav-content" >
            <span className="txt" >Home</span>
            <span  >
              <Link className="txt" to="add-new-product">
                <span className="txt" >Add New Item</span>
              </Link>
             
            </span>
            
          

          </div>
          </div>
          <div className="sm-screen">
            { showSidebar ? 
              <div className="sidebar" onClick={toggleSidebar}>
                <div className="top">
                  <div className="lft">
                    <span className="close">X</span>
                    <span className="name">NeatFarmz</span>
                  </div>
                  
                </div>

                <div className="list">
                  <Link className="txt" to="">
                    <span className="txt" >Home</span>
                  </Link>
                  <Link className="txt" to="add-new-product">
                    <span className="txt" >Add New Item</span>
                  </Link>

                </div>
                <div className="categories">
                  <div className="cat-list">
                    {/* {
                      categories?.map((catgory:CategoryDTO)=>
                        (
                        <span key={catgory?.id} className="items"> {catgory?.name?.toLocaleUpperCase()}</span>
                      ))
                    } */}
                  </div>
                </div>
              </div>
              :
              <div className="menu-div">
                <span className="menu-bar" onClick={toggleSidebar}>
                  <img src={icons.toggleIcon} alt="" />
                </span>
                
              </div>
            }
            
          </div>
        </div>    
        

      </div>
    )
}


export default NavBar
