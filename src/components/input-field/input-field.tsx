import React, {useEffect, useState, ChangeEvent} from "react";
import Icons from "../../constant/imgs.constant";
import './style.scss'
const InputField = (props:any)=>{
    const imgUrl = Icons;
  
   let  handleChange =(event:any)=>{
     const value = event.target.value
      props.onChange(props.name, value );
    }

    let handleBlur=(event:any)=>{
      props.onBlur(props.name, event)
    }


  
    return (
      <div className="fields">
        {
          props.type=="text" ?
          <span className="field-span">
            {
              props.img ?
              <img src={props.img} className="img" />
              : ""
            }
            <input 
              name={props.name}
              type="text" 
              className="field"  
              placeholder={props.placeholder}
              onChange={handleChange}
              id="text"
              value={props?.value}

            />
          </span>
          
          : props.type=="search"
          ? <span className="field-span">
              <img src={imgUrl.search} className="img" alt="" />
              <input 
                name={props.name}
                type="search" 
                placeholder={props.placeholder}
                className="search-field" 
                onChange={handleChange}
                id="search"
              />
          </span>
          
          : props.type=="number"
          ? <span>
            <span className="field-span">
            {/* <img src={imgUrl.email} alt="" className="img"/> */}
            <input 
              type="number" 
              name={props.name}
              id="number"
              placeholder={props.placeholder}
              className={`field ${props.err ?'err-field': '' }`} 
              onChange={handleChange}
              onBlur={handleBlur}
              value={props?.value}

            />
          </span>
           { props.err
             ? <small className="err-msg"> {props.err}</small>
             : ''
            }
          </span>
          : props.type=="file"
          ? <span>
            <span className="field-span">
            <input 
              type="file" 
              name={props.name}
              className={`field ${props.err ?'err-field': '' }`} 
              onChange={handleChange}
              onBlur={handleBlur}
              accept="image/*" 
            />
          </span>
           { props.err
             ? <small className="err-msg"> {props.err}</small>
             : ''
            }
          </span>
          : ""
        }
      </div>
    )
}


export default InputField
