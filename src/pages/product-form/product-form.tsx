import React,{useState, useEffect, ChangeEvent} from "react";
import InputField from "../../components/input-field/input-field";
import Button from "../../components/btns/btn";
import DataService from "../../services/product-service";
import { ProductDTO, ErrMsgDTO } from "../../dto/product.dto";
import { useParams } from 'react-router-dom';
import './style.scss'
const AddProduct =() =>{
  const params:any = useParams();
  const [productId, setProductId] = useState(0);
  const [disabledFlag, setDisableFlag] = useState(true); 
  const [productDetail, setProductDetail] = useState<ProductDTO>();
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [formData, setFormData] = useState<ProductDTO>({
    name: '',
    img:  '',
    specification: '',
    quantity: '',
    id: '',
    price: '', 
    category: ''

  }) 

  const [errMsg, setErrMsg] = useState<ErrMsgDTO>({
    price: '',
    img:'',
    specification:'',
    quantity: '',
    name: ''
  })

 const  handleErr =(name:string) =>{
    if(name=="name"){
      setErrMsg((prev)=>({
        ...prev,
        name: 'Product Name cannot be blank'
      }))
    }
    if(name=="img"){
      setErrMsg((prev)=>({
        ...prev,
        img: 'Product img cannot be blank'
      }))
    }
    if(name=="price"){
      setErrMsg((prev)=>({
        ...prev,
        price: 'Price cannot be blank'
      }))
    }
    if(name=="isAvailable"){
      setErrMsg((prev)=>({
        ...prev,
        isAvailable: 'Product availablity cannot be blank'
      }))
    }
    if(name=="price"){
      setErrMsg((prev)=>({
        ...prev,
        price: 'Price cannot be blank'
      }))
    }

  }

useEffect(()=>{
    if(params.id){
        setLoading(true);
        const fetchedProduct = DataService.getProductDetail(params.id);
        if(fetchedProduct){
          setProductDetail(fetchedProduct);
        } else {
          setFetchError('Product not found');
        }
        setLoading(false);
    }
    // getProduct();
},[params.id])

useEffect(()=>{
    if (productDetail) {
        console.log('heheh', productDetail)
        setFormData({
          name: productDetail.name,
          img: productDetail.img,
          specification: productDetail.specification,
          quantity: productDetail.quantity,
          price: productDetail.price,
          category: productDetail.category
        });
        setImgUrl(productDetail.img.startsWith('data:') ? '' : productDetail.img)
      }
      console.log(formData)
    }, [productDetail]);
 
  const createProduct = () =>{
    console.log(formData);
    DataService.addProduct(formData);
  }

  const getData=(name:string, data:any)=>{
    console.log(data, 'jsjsj')
    setFormData((prev)=>({
      ...prev, 
      [name]:data
    }))
   
    if(formData.name && formData.price && formData.quantity){
        setDisableFlag(false)
    }
  }

  const getImg = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     if (!e.target) {
      // console.error('Event target is undefined:', e);
      return;
    }

    

    const { name, value, files } = e.target as HTMLInputElement;
    if (name === 'img' && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        console.log('File uploaded, base64:', base64String.substring(0, 50) + '...');
        setFormData((prev) => ({ ...prev, img: base64String }));
        setImgUrl(''); // Clear URL input
      };
      reader.onerror = () => {
        setErrMsg((prev) => ({ ...prev, img: 'Error reading file' }));
      };
      reader.readAsDataURL(files[0]);
    } else if (name === 'imgUrl') {
      setImgUrl(value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImgUpload = (e: ChangeEvent<HTMLInputElement>) =>{
    console.log(e)
    const file = e;

    if (!file) return;
     const reader = new FileReader();
    reader.onload = () => {
      let imgUrl = reader.result as string
      console.log(imgUrl)
  
    };
  }
  return (
    <div className="form-container">
      <span className="form-title">Product Form</span>
      <div className="product-form">
        <div className="field">
            <InputField 
              name="name"
              type="text"
              placeholder="Enter Product Name"
              onChange={getData}
              onBlur={handleErr}
              value={formData.name}            
            />
        </div>
        <div className="field">
          <InputField 
            name="specification"
            type="text"
            placeholder="Enter Product Specification"
            onChange={getData}
            onBlur={handleErr}
            value={formData.specification}
          />
        </div>
        <div className="multiple-fields">
          <div className="field">
            <InputField 
              name="quantity"
              type="number"
              placeholder="Enter Product Quantity Available"
              onChange={getData}
              onBlur={handleErr}
              value={formData.quantity}
            />
          </div>
          <div className="field">
            <InputField 
              name="price"
              type="number"
              placeholder="Enter Price of Product"
              onChange={getData}
              onBlur={handleErr}
              value={formData.price}

            
            />
        </div>
        <div className="field">
          <InputField 
            name="specification"
            type="text"
            placeholder="Enter Product Specification"
            onChange={getData}
            onBlur={handleErr}
            value={formData.specification}
          />
        </div>
        <div className="field">
          <InputField 
            name="img"
            type="file"
            placeholder="select file type"
            onChange={handleImgUpload}
            onBlur={handleErr}

          />
        </div>
        </div>
      </div>

      <div className="btn">
      <Button name="Create account" disabled={disabledFlag} handleClick={createProduct}  className="btn" type="primary" />
      </div>
    </div>
  )
}

export default AddProduct