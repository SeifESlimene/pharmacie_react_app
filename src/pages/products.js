import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from './../components/layout/Layout';
//import ShowSelect from "../components/ecommerce/Filter/ShowSelect";
//import SortSelect from "../components/ecommerce/Filter/SortSelect";
//import CategoryProduct2 from "./../components/ecommerce/Filter/CategoryProduct2";
//import PriceRangeSlider from "./../components/ecommerce/Filter/PriceRangeSlider";
//import SizeFilter from "./../components/ecommerce/Filter/SizeFilter";
//import VendorFilter from "./../components/ecommerce/Filter/VendorFilter";
//import Pagination from "./../components/ecommerce/Pagination";
//import QuickView from "./../components/ecommerce/QuickView";
//import SingleProduct from "./../components/ecommerce/SingleProduct";
//import { fetchProduct } from "./../redux/action/product";

const Products = ({ products, productFilters, fetchProduct }) => {
  const [searchparams] = useSearchParams();
  console.log(searchparams.get('search'));
  // const searchTerm = searchparams.get('search');

  //showLimit = 12,
  //showPagination = 4;

  //let [pagination, setPagination] = useState([]);
  // let [limit, setLimit] = useState(showLimit);
  // let [pages, setPages] = useState(Math.ceil(products.items.length / limit));
  // let [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // fetchProduct(searchTerm, "/static/product.json", productFilters);
    // cratePagination();
  });
  //, [productFilters, limit, pages, products.items.length]);

  //   const cratePagination = () => {
  //     // set pagination
  //     let arr = new Array(Math.ceil(products.items.length / limit))
  //       .fill()
  //       .map((_, idx) => idx + 1);

  //     setPagination(arr);
  //     setPages(Math.ceil(products.items.length / limit));
  //   };

  //   const startIndex = currentPage * limit - limit;
  //   const endIndex = startIndex + limit;
  //   const getPaginatedProducts = products.items.slice(startIndex, endIndex);

  //   let start = Math.floor((currentPage - 1) / showPagination) * showPagination;
  //   let end = start + showPagination;
  //   const getPaginationGroup = pagination.slice(start, end);

  //   const next = () => {
  //     setCurrentPage((page) => page + 1);
  //   };

  //   const prev = () => {
  //     setCurrentPage((page) => page - 1);
  //   };

  //   const handleActive = (item) => {
  //     setCurrentPage(item);
  //   };

  //   const selectChange = (e) => {
  //     setLimit(Number(e.target.value));
  //     setCurrentPage(1);
  //     setPages(Math.ceil(products.items.length / Number(e.target.value)));
  //   };
  return (
    <>
      <Layout noBreadcrumb='d-none'>
        <section className='mt-50 mb-50'>
          <div className='container mb-30'>
            <div className='row flex-row-reverse'>
              <div className='col-lg-4-5'>
                <div className='shop-product-fillter'>
                  <div className='totall-product'>
                    <p>
                      We found
                      <strong className='text-brand'>
                        {/* {products.items.length} */}
                      </strong>
                      items for you!
                    </p>
                  </div>
                  <div className='sort-by-product-area'>
                    <div className='sort-by-cover mr-10'>
                      {/* <ShowSelect
                        selectChange={selectChange}
                        showLimit={showLimit}
                      /> */}
                    </div>
                    <div className='sort-by-cover'>{/*<SortSelect />*/}</div>
                  </div>
                </div>
                <div className='row product-grid'>
                  {/* {getPaginatedProducts.length === 0 && (
                    <h3>No Products Found </h3>
                  )} */}

                  {/* {getPaginatedProducts.map((item, i) => (
                    <div
                      className='col-lg-1-5 col-md-4 col-12 col-sm-6'
                      key={i}
                    >
                      <SingleProduct product={item} />
                      <SingleProductList product={item} />
                    </div>
                  ))} */}
                </div>

                <div className='pagination-area mt-15 mb-sm-5 mb-lg-0'>
                  <nav aria-label='Page navigation example'>
                    {/* <Pagination
                      getPaginationGroup={getPaginationGroup}
                      currentPage={currentPage}
                      pages={pages}
                      next={next}
                      prev={prev}
                      handleActive={handleActive}
                    /> */}
                  </nav>
                </div>
              </div>
              <div className='col-lg-1-5 primary-sidebar sticky-sidebar'>
                <div className='sidebar-widget widget-category-2 mb-30'>
                  <h5 className='section-title style-1 mb-30'>Category</h5>
                  {/* <CategoryProduct2/> */}
                </div>

                <div className='sidebar-widget price_range range mb-30'>
                  <h5 className='section-title style-1 mb-30'>Fill by price</h5>

                  <div className='price-filter'>
                    <div className='price-filter-inner'>
                      <br />
                      {/*<PriceRangeSlider />*/}
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <WishlistModal /> */}
        {/* <CompareModal /> */}
        {/* <CartSidebar /> */}
        {/* <QuickView /> */}
        {/* <div className='container'>
          <div className='row'>
            <div className='col-xl-6'>
              <Search />
            </div>
            <div className='col-xl-6'>
              <SideBarIcons />
            </div>
          </div>
          <div className='row justify-content-center text-center'>
            <div className='col-xl-6'>
              <CategoryProduct />
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-3'></div>
            <div className='col-md-9'></div>
          </div>
        </div> */}
      </Layout>
    </>
  );
};

/*const mapStateToProps = (state) => ({
    products: state.products,
    productFilters: state.productFilters,
});

const mapDidpatchToProps = {
    // openCart,
    fetchProduct,
    // fetchMoreProduct,
};

export default connect(mapStateToProps, mapDidpatchToProps)(Products);*/
export default Products;