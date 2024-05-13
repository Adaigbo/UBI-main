import React, { Fragment, useEffect, useState } from "react";
import png1 from "../../../assets/img/pngs/1.jpg";
import Utils from "../../../utils/Utils";
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
import { Badge, Breadcrumb, Button, Card, Col, Form, Pagination, Row, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductPopup from './ProductPopup';
// import ProductServices from "../../../services/ProductServices";
// import OfferServices from "../../../services/OfferServices";

const Productdetails =
  [
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


function Products() {
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      // var _products = await ProductServices.get();
      // setProducts(_products.data);
      // console.log(_products.data);

      // var _offers = await OfferServices.get();
      // setOffers(_offers);
      // console.log(_offers);
    }

    fetch();
  }, []);


  const [showModal, setShowModal] = useState(false);


  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Products</h2>
          <Breadcrumb >
            <Breadcrumb.Item active aria-current="page">Products</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {Utils.can('Create Products') && false &&
          <div className="d-flex">
            <div className="justify-content-center">
              <Button
                onClick={() => setShowModal(true)}
                variant="primary"
                type="button"
                className="my-2 btn-icon-text"
              >
                + Add Product
              </Button>
            </div>
          </div>
        }
        <ProductPopup showModal={showModal} setShowModal={setShowModal} id={null} />
      </div>




      {/* <Row className="row-sm">
        <Col md={12}>
          <Row className="row-sm">
            {products.map((items, index) => (
              <Col md={6} lg={6} xl={4} sm={6} key={index} data-index={index}>
                <Card className="custom-card">
                  <div className="p-0 ht-100p">
                    <div className="product-grid">
                      <div className="product-image">
                        <Link to={`${process.env.PUBLIC_URL}/productdeatils/`} className="image">
                          <img className="pic-2" alt="product2" src={items.image} />
                        </Link>
                      </div>
                      <div className="product-content">
                        <h3 className="title"><Link to="#">{items.name}</Link></h3>
                        <div className="price">
                          <span className="text-danger">${items.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row> */}







      <Row className="row-sm">
        <Col md={12} xl={12}>
          <Row className="row-sm">
            {Productdetails.map((items, index) => (
              <Col md={6} lg={6} xl={4} sm={6} key={index} data-index={index}>
                <Card className="custom-card">
                  <div className="p-0 ht-100p">
                    <div className="product-grid">
                      <div className="product-image" style={{ height: '30vh' }}>
                        <Link to={`${process.env.PUBLIC_URL}/productdeatils/${items.id}`} className="image">
                          <img className="pic-1" alt="product1" src={items.Product1} />
                        </Link>
                      </div>
                      <div className="product-content">
                        <h3 className="title"><Link to="#">{items.ProductId}</Link></h3>
                        <div className="price text-danger">
                          {items.Productdiscountnew}
                        </div>
                        <br />
                        {/* <div className="price">
                          <span>{items.Productdiscountnew}</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* <Col md={4} xl={3}>
          <Row className="row-sm">
            <Col md={12} lg={12}>
              <Card className="custom-card">
                <Card.Header className="custom-card-header">
                  <h6 className="main-content-label mb-3">Filter</h6>
                </Card.Header>
                <Card.Body>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Check type="radio" name="example-radios" defaultValue="option1" label="Under $25" defaultChecked />
                    <Form.Check type="radio" name="example-radios" defaultValue="option2" label="$25 to $50" />
                    <Form.Check type="radio" name="example-radios" defaultValue="option2" label="$50to $100" />
                  </Form.Group>
                  <Link to className="btn ripple btn-primary btn-block mt-3" href="#">
                    Apply Filter
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col> */}
      </Row>
    </Fragment>
  );
}

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
