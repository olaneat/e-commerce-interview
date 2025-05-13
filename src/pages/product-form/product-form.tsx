import React,{useState, useEffect, ChangeEvent, useRef} from "react";
import InputField from "../../components/input-field/input-field";
import Button from "../../components/btns/btn";
import DataService from "../../services/product-service";
import { ProductDTO, ErrMsgDTO } from "../../dto/product.dto";
import { useParams, useNavigate } from 'react-router-dom';
import './style.scss'
const AddProduct =() =>{
  const navigate = useNavigate();
  const params:any = useParams();
  const [productId, setProductId] = useState(0);
  const [disabledFlag, setDisableFlag] = useState(true); 
  const [productDetail, setProductDetail] = useState<ProductDTO>();
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [errors, setErrors] = useState<Partial<ProductDTO>>({});
   const fileInputRef = useRef<HTMLInputElement>(null);

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
    }, [productDetail]);
 
  const createProduct = () =>{
    if(!productDetail){
      DataService.addProduct(formData)
    }else{
      DataService.updatedProduct(params.id, formData)
    }
    navigate('/')

  }

  const getData=(name:string, data:any)=>{
    setFormData((prev)=>({
      ...prev, 
      [name]:data
    }))
   
    if(formData.name && formData.price && formData.quantity){
        setDisableFlag(false)
    }
  }


 const handleImageUpload = (
  e: React.ChangeEvent<HTMLInputElement>,
    setFormData: React.Dispatch<React.SetStateAction<ProductDTO>>,
    setErrors: React.Dispatch<React.SetStateAction<Partial<ProductDTO>>>,
    maxSizeMB: number = 5
  ) => {

    if (!e.target) {
      setErrors((prev) => ({ ...prev, img: 'Invalid input event' }));
      return;
    }

    const { name, files } = e.target;

    if (!files || !files[0]) {
      setErrors((prev) => ({ ...prev, img: 'No file selected' }));
      return;
    }

    const file = files[0];
    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({ ...prev, img: 'Please upload an image file' }));
      return;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, img: `File size exceeds ${maxSizeMB}MB` }));
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const imgUrl = reader.result as string;
      setFormData((prev) => ({ ...prev, [name]: imgUrl }));
      setErrors((prev) => ({ ...prev, img: undefined }));
    };

    reader.onerror = () => {
      setErrors((prev) => ({ ...prev, img: 'Error reading file' }));
    };

    reader.readAsDataURL(file);
  };

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
            name="img"
            type="file"
           onChange={(e:any) => handleImageUpload(e, setFormData, setErrors)}
            placeholder="select file type"
            onBlur={handleErr}
            accept="image/*"
            previewUrl={formData.img}
            ref={fileInputRef}

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