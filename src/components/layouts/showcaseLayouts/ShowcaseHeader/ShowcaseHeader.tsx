import Badge from '../../../UI/Badge/Badge';
import CartIcon from '../../../UI/icons/CartIcon/CartIcon';
import FavoriteIcon from '../../../UI/icons/FavoriteIcon/FavoriteIcon';
import classes from './ShowcaseHeader.module.css';
import Logo from '../../../../assets/logo.png';
import BaseLink from '../../../UI/BaseLink/BaseLink';
import { PATHS } from '../../../../constants/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import Menu from '../../../showcase/Menu/Menu';
import { Link } from 'react-router-dom';

interface IShowcaseHeaderProps {}

const ShowcaseHeader: React.FC<IShowcaseHeaderProps> = () => {
  const categories = useSelector((state: RootState) => state.category.categories);

  return (
    <header className={classes.header}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to={PATHS.showcase}>
        <img src={Logo} alt="Logo" className={classes.logo} />
        </Link>
        

        <BaseLink to={`${PATHS.admin}${PATHS.products}`} button size={'s'}>
          Перейти в админку
        </BaseLink>
      </div>

      <div className={classes.wrapper}>
        <Menu categories={categories} />

        <div className={classes['badge-wrapper']}>
          <Badge
            icon={<FavoriteIcon width={24} height={24} />}
            onClick={() => console.log('Favorite cliked')}
            count={2}
            title={'Избранное'}
          />

          <Badge
            icon={<CartIcon width={24} height={24} />}
            onClick={() => console.log('Cart cliked')}
            count={15}
            title={'Корзина'}
          />
        </div>
      </div>
    </header>
  );
};

export default ShowcaseHeader;