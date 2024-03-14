import starImage from "../Home/images/star.svg";
import crystalImage from "../Home/images/crystal.svg";
export default function ProductSpecs({ product }) {
  return (
    <div className="product__specs__page">
      <ul className="specs_list">
        <li className="animation-left">- {product.features[0]} -</li>
        <li className="animation-right">- {product.features[1]} -</li>
        <li className="animation-left">- {product.features[2]} -</li>
      </ul>
      <img src={crystalImage} alt="Crystal Image" className="crystal__icon" />
    </div>
  );
}
