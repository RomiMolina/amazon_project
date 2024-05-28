import ProductBadge from "./ProductBadge"
import ProductRatings from "./ProductRatings"

function ProductDetails({product, ratings}) {
  return (
    <div className="mb-1">
        <div className="text-xl xl:text-2xl font-medium mb-1">{product.title} </div>
        <div className="text-sm xl:text-base mb-1">by<span className="ml-3 text-blue-500 text-sm">{product.brand}</span></div>
        {
          ratings && 
           <div className="text-sm xl:text-base mb-1">
            <ProductRatings avgRating={product.avgRating} ratings={product.ratings} />
          </div>
        }
        <div className="text-xl xl:text-sm font-bold mb-1">{product.attribute} </div>
        <div><ProductBadge badge={product.badge}/> </div>
    </div>
  )
}

export default ProductDetails