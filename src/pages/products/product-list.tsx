import React,{ useState, useEffect} from "react";
import { ProductDTO } from "../../dto/product.dto";
// import env from "../../../environment/env";
import "./product-list.scss"
import { Link } from "react-router-dom";
import DataService from "../../services/product-service";

const ProductList = ({ searchQuery }: { searchQuery: string }) =>{
    // const [productList, loading, error] = useSelector((state:RootState)=>state.product)
    const [products, setProducts] = useState<ProductDTO[]>()
    const [filteredProducts, setFilteredProducts] = useState<ProductDTO[]>([]);
    const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);

    useEffect(()=>{

      const getProducts = async() =>{
        try{
          let products:ProductDTO[] = DataService.getProducts()!;
          console.log(products[0].img, 'imf')
          setProducts(products)
          setFilteredProducts(products);
          setLoading(false);
        }
        catch (err) {
        setError('Failed to load products');
        setLoading(false);
        console.error('Error fetching products:', err);
      }
      
    }

      getProducts();
    },[])

    useEffect(() => {
    if (searchQuery?.trim() === '') {
      setFilteredProducts(products!);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = products!.filter((product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.specification.toLowerCase().includes(query)
      );
      console.log('Filtered products:', filtered.map(p => ({
        id: p.id,
        name: p.name,
        img: p.img.substring(0, 50) + '...'
      })));
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);
    
  
  
    

   

    return(

        <div className="product-container">
          <div className="flash-products">
            {filteredProducts?.slice(0,6)?.map((product:ProductDTO)=>{
              return(
                <Link to={`/update-product/${product.id}`} className="flash-product" key={product.id}>
                  <div className="img">
                    <div className="flash-price">
                      <span className="price">-30%</span>
                    </div>
                    <img src={`${product.img}`} alt="" />
                  </div>
                  <div className="txt">
                    <span className="name">
                      {product.name}
                    </span>
                    <span className="price">
                      <span className="new-price">
                        N{product.price!}.00
                      </span> 
                      
                            
                    </span>

                  </div>
                </Link>

                )
            })}
          </div>
          <div className="see-all">View all products</div>

          <div className="product-list">
          <div className="product-title">
              <div className="style">
                <span className="icon"></span>
                <div className="txt">Our Products</div>
              </div>
              <div className="title">Explore Our Products</div>
             
            </div>
          </div>
        </div>
    )
}

export default ProductList