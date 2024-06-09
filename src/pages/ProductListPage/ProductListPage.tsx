import ProductItemList from './components/ProductItemList';
import ProductListHeader from './components/ProductListHeader';
import ProductListSelectBar from './components/ProductListSelectBar';
import ProductListTitle from './components/ProductListTitle';
import styles from './ProductListPage.module.css';
import useProducts from '../../hooks/useProducts';

const ProductListPage = () => {
  const {
    products,
    cartItems,
    setPage,
    hasMore,
    isLoading,
    cartItemCount,
    handleSelectBarCondition,
  } = useProducts();

  return (
    <div>
      <ProductListHeader cartItemCount={cartItemCount} />
      <div className={styles.productContentContainer}>
        <ProductListTitle />
        <ProductListSelectBar handleSelectBarCondition={handleSelectBarCondition} />
        <ProductItemList
          products={products}
          cartItems={cartItems}
          setPage={setPage}
          hasMore={hasMore}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ProductListPage;
