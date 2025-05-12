export interface ProductDTO{
    name:string;
    price:string;
    specification:string;
    quantity:string,
    img:string,
    id?:string,
    category:string,
}

export interface ErrMsgDTO{
    name:string;
    price:string;
    quantity:string,
    specification:string;
    img:string;
}

export const mapProductDTO = (data:any): ProductDTO =>({
    id: data.id ?? '',
    name: data.name ?? '',
    img: data.img ?? '',
    price: data.price ?? '',
    specification: data.specification ?? '',
    quantity: data.quantity ?? '',
    category: data.category ?? ''
})

export const mapProductListDTO = (data: any): ProductDTO[] => {
    const mapped = Array.isArray(data)
      ? data.map((item) => mapProductDTO(item))
      : [];
    // Debug: Log mapped data (development only)
    if (process.env.NODE_ENV === 'development') {
    }
    return mapped;
  };
  export const ERROR_MESSAGES = {
    FETCH_FAILED: 'Failed to fetch categories', // Updated for categories
  };
  

