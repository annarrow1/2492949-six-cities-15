import { TOffer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type TOffersListProps = {
  offers: TOffer[];
  handleMouseEnter?: (id: string) => void;
  handleMouseLeave?: () => void;
  page: string;
};

export function OffersBlock({
  offers,
  handleMouseEnter,
  handleMouseLeave,
  page,
}: TOffersListProps): JSX.Element {
  let offersList: React.ReactNode[] = [];
  if (handleMouseEnter && handleMouseLeave) {
    offersList = offers.map((offer) => (
      <OfferCard
        offersData={offer}
        key={offer.id}
        onMouseEnter={() => handleMouseEnter(offer.id)}
        onMouseLeave={handleMouseLeave}
        page={page}
      />
    ));
  } else {
    offersList = offers.map((offer) => (
      <OfferCard offersData={offer} key={offer.id} page={page} />
    ));
  }

  return (
    <div
      className={
        page === 'main'
          ? 'cities__places-list places__list tabs__content'
          : 'favorites__places'
      }
    >
      {offersList}
    </div>
  );
}

export default OffersBlock;
