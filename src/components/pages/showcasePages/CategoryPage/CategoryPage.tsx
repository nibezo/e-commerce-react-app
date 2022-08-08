import classes from './CategoryPage.module.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import ProductCardList from '../../../showcase/ProductCardList/ProductCardList';
import { Category } from '../../../../types/common';
import Loader from '../../../UI/Loader/Loader';
import Placeholder from '../../../UI/Placeholder/Placeholder';
import { NO_PRODUCTS_MESSAGE } from '../../../../constants/messages';

const CategoryPage: React.FC = () => {
  const location = useLocation();
  const { id, name, description } = location.state as Category;
  const { products, isLoading } = useSelector((state: RootState) => state.product);
  const categoryProducts = products.filter((product) => product.category.id === id);
  const hasProducts = !isLoading && categoryProducts.length > 0;
  const noProducts = !isLoading && categoryProducts.length === 0;

  return (
    <section className={classes['category-page']}>
      <div className={classes['header-wrapper']}>
        <h1 className={classes.title}>{name}</h1>
        {description && <p className={classes.description}>{description}</p>}
      </div>

      <div className={classes['body-wrapper']}>
        {isLoading && <Loader />}

        {hasProducts && <ProductCardList products={categoryProducts} />}
        {noProducts && <Placeholder text={NO_PRODUCTS_MESSAGE} size={'38px'} />}
      </div>
    </section>
  );
};

export default CategoryPage;
