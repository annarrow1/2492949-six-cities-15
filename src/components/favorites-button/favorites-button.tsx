import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../../consts';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { setFavorites } from '../../store/api-actions';

type TFavoritesButton = {
  isFavorite: boolean;
  id: string;
  page?: string;
  width: string;
  height: string;
};

function FavoritesButton({
  isFavorite,
  id,
  page,
  width,
  height,
}: TFavoritesButton): JSX.Element {
  const authStatus = useAppSelector((state) => state.user.authStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleFavoritesButton = () => {
    if (
      authStatus !== AuthorizationStatus.NoAuth &&
      authStatus !== AuthorizationStatus.Unknown
    ) {
      dispatch(setFavorites({ id: id, status: isFavorite }));
    } else {
      navigate(AppRoute.Login);
    }
  };

  let buttonClass;
  if (page === 'offer') {
    if (isFavorite) {
      buttonClass = 'offer__bookmark-button offer__bookmark-button--active';
    } else {
      buttonClass = 'offer__bookmark-button';
    }
  } else {
    if (isFavorite) {
      buttonClass =
        'place-card__bookmark-button place-card__bookmark-button--active';
    } else {
      buttonClass = 'place-card__bookmark-button';
    }
  }

  const svgClassName =
    page === 'offer' ? 'offer__bookmark-icon' : 'place-card__bookmark-icon';

  return (
    <button
      className={`${buttonClass} button`}
      id={id}
      type="button"
      onClick={handleFavoritesButton}
    >
      <svg className={svgClassName} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default FavoritesButton;
