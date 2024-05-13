import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductServices from "../../../services/ProductServices";
import png1 from "../../../assets/img/pngs/1.jpg";
import png01 from "../../../assets/img/pngs/01.jpg";
import png2 from "../../../assets/img/pngs/fe.png";
import png02 from "../../../assets/img/pngs/fi.png";
import png3 from "../../../assets/img/pngs/plantain.jpg";
import png03 from "../../../assets/img/pngs/Tuber.png";
import png4 from "../../../assets/img/pngs/Cashewnut.png";
import png04 from "../../../assets/img/pngs/Coconut.jpg";
import png5 from "../../../assets/img/pngs/Nuts.jpg";
import png05 from "../../../assets/img/pngs/Brown_beans.png";
import png6 from "../../../assets/img/pngs/Yellow_corn.jpg";
import png06 from "../../../assets/img/pngs/Whole_grains.png";
import png7 from "../../../assets/img/pngs/Maize.jpg";
import png07 from "../../../assets/img/pngs/Fresh_Cocoa.jpg";
import png8 from "../../../assets/img/pngs/Grains.jpg";
import png08 from "../../../assets/img/pngs/Dried_Cocoa.jpg";
import png9 from "../../../assets/img/pngs/carrot.jpg";
import png09 from "../../../assets/img/pngs/bell_pepper.jpg";
import png10 from "../../../assets/img/pngs/green_beans.jpg";
import png11 from "../../../assets/img/pngs/tomatoes.jpg";
import png12 from "../../../assets/img/pngs/Fresh_Cocoa.jpg";
import png13 from "../../../assets/img/pngs/Garlic.jpg";
import png14 from "../../../assets/img/pngs/Grains.jpg";
import png15 from "../../../assets/img/pngs/Habanero_pepper.jpg";
import png16 from "../../../assets/img/pngs/Maize.jpg";
import png17 from "../../../assets/img/pngs/Nigerian_Eggplant.png";
import OrderServices from "../../../services/OrderServices";
import Utils from "../../../utils/Utils";


const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1); // Initialize quantity to 1
  const [image, setImage] = useState();

  const detail = [
    { id: 1, ProductId: "Cassava Tuber", Product1: png1, Product2: png1, Productpriceold: "₦25.00", Productdiscountnew: "₦ 25000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Productdiscount: "-33%", Productdiscounttext: "success", discountoffer: "discount", Favorite: "heart", },
    { id: 2, ProductId: "Walnut", Product1: png2, Product2: png02, Productpriceold: "₦25.00", Productdiscountnew: "₦ 57500", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 3, ProductId: "Sweet Potato ", Product1: png01, Product2: png01, Productpriceold: "₦25.00", Productdiscountnew: "₦ 248500", discountoffer: "discount", Productdiscount: "-50%", Productdiscounttext: "info", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 4, ProductId: "Plantain", Product1: png3, Product2: png3, Productpriceold: "₦25.00", Productdiscountnew: "₦ 10000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 5, ProductId: "Tuber", Product1: png03, Product2: png03, Productpriceold: "₦25.00", Productdiscountnew: "₦ 10000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 6, ProductId: "Green beans", Product1: png4, Product2: png4, Productpriceold: "₦25.00", Productdiscountnew: "₦ 12000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 7, ProductId: "Nigerian Eggplant", Product1: png04, Product2: png04, Productpriceold: "₦25.00", Productdiscountnew: "₦ 12000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 8, ProductId: "Brown Beans", Product1: png05, Product2: png05, Productpriceold: "₦25.00", Productdiscountnew: "₦ 12000", discountoffer: "discount", Productdiscount: "-40%", Productdiscounttext: "danger", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 9, ProductId: "Yellow Corn", Product1: png5, Product2: png5, Productpriceold: "₦25.00", Productdiscountnew: "₦ 10050", discountoffer: "discount", Productdiscount: "-40%", Productdiscounttext: "danger", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 10, ProductId: "Whole Grains", Product1: png06, Product2: png06, Productpriceold: "₦25.00", Productdiscountnew: "₦ 10500", discountoffer: "discount", Productdiscount: "-43%", Productdiscounttext: "warning", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 11, ProductId: "Fresh Cocoa", Product1: png07, Product2: png07, Productpriceold: "₦25.00", Productdiscountnew: "₦ 10500", discountoffer: "discount", Productdiscount: "-43%", Productdiscounttext: "warning", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 12, ProductId: "Maize", Product1: png7, Product2: png7, Productpriceold: "₦25.00", Productdiscountnew: "₦ 584700", discountoffer: "discount", Productdiscount: "-43%", Productdiscounttext: "warning", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 13, ProductId: "Beans", Product1: png8, Product2: png8, Productpriceold: "₦25.00", Productdiscountnew: "₦ 584700", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 14, ProductId: "Dried Cocoa", Product1: png08, Product2: png08, Productpriceold: "₦25.00", Productdiscountnew: "₦ 587400", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 15, ProductId: "Green Beans", Product1: png10, Product2: png10, Productpriceold: "₦25.00", Productdiscountnew: "₦ 24500", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 16, ProductId: "Fresh Tomatoes", Product1: png11, Product2: png11, Productpriceold: "₦25.00", Productdiscountnew: "₦ 25000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 17, ProductId: "Garlic", Product1: png13, Product2: png13, Productpriceold: "₦25.00", Productdiscountnew: "₦ 25000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 18, ProductId: "Carrots", Product1: png9, Product2: png9, Productpriceold: "₦25.00", Productdiscountnew: "₦ 5000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 19, ProductId: "Beans", Product1: png14, Product2: png14, Productpriceold: "₦25.00", Productdiscountnew: "₦ 155000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 20, ProductId: "Habanero pepper", Product1: png15, Product2: png15, Productpriceold: "₦25.00", Productdiscountnew: "₦ 20000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 21, ProductId: "Bell pepper", Product1: png17, Product2: png17, Productpriceold: "₦25.00", Productdiscountnew: "₦ 20000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 22, ProductId: "Yellow Corn", Product1: png6, Product2: png06, Productpriceold: "₦25.00", Productdiscountnew: "₦ 20000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
  ];


  useEffect(() => {
    const fetchProduct = async () => {
      const id = window.location.pathname.split('/').pop();
      const response = await ProductServices.get(id);
      setProduct(response.data);

      detail.map(img => {
        if (img.id == id) {
          console.log(id);
          setImage(img.Product1);
        }
      });
    }

    fetchProduct();
  }, []);

  const order = async () => {
    // You can now use 'product' and 'quantity' to place the order
    var response = await OrderServices.insert({ 'product': product.id, 'amount': quantity, 'price': (product.price * quantity) });
    console.log(response.data);
    Utils.Toast('success', response.data);
  }

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  }

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Product Details</h2>
          <Breadcrumb>
            <Breadcrumb.Item>Product Details</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className="custom-card productdesc">
            <Card.Body className="h-100">
              <Row>
                {/* Product Image */}
                <Col xl={6} lg={12} md={12}>
                  <img src={image} alt="Product" className="img-fluid mx-auto d-block" />
                </Col>

                {/* Product Details */}
                <Col xl={6} lg={12} md={12}>
                  <div className="mt-4 mb-4">
                    <h4 className="mt-1 mb-3">{product.name}</h4>

                    <h5 className="mb-2">
                      <span className="text-success">Price:</span>
                      <b>₦ {product.price}</b>
                    </h5>

                    <h6 className="mt-4 fs-16">Description</h6>
                    <p>{product?.description}</p>
                  </div>

                  {/* Quantity Input */}
                  <div className="d-flex mt-2">
                    <div className="mt-2 sizes">Quantity:</div>
                    <div className="d-flex ms-2">
                      <input
                        className="form-control"
                        name="quantity"
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        placeholder="Enter Quantity"
                        max={10}
                        min={1}
                      />
                    </div>
                  </div>

                  {/* Buy Now Button */}
                  <div className="text-center mt-4 mb-4 btn-list">
                    <Link to="#" className="btn ripple btn-success" onClick={order}>
                      <i className="fe fe-credit-card"></i> Buy Now
                    </Link>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductDetails;
