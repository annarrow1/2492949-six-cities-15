import { useState } from 'react';

type TOffersListProps = {
  setSortingType: (key: string) => void;
  sortingType: string;
};

export function OffersSorting({
  setSortingType,
  sortingType,
}: TOffersListProps): JSX.Element {
  const [isOpened, setOpened] = useState(false);

  function chooseSortingType(type: string) {
    setOpened(!isOpened);
    setSortingType(type);
  }

  const sortClass = isOpened ? 'places__options--opened' : null;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setOpened(!isOpened)}
      >
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className={` places__options places__options--custom ${sortClass}`}>
        <li
          className={
            sortingType === 'Popular'
              ? 'places__option places__option--active'
              : 'places__option'
          }
          tabIndex={0}
          id="Popular"
          onClick={() => chooseSortingType('Popular')}
        >
          Popular
        </li>
        <li
          className={
            sortingType === 'Price: low to high'
              ? 'places__option places__option--active'
              : 'places__option'
          }
          tabIndex={0}
          id="Price: low to high"
          onClick={() => chooseSortingType('Price: low to high')}
        >
          Price: low to high
        </li>
        <li
          className={
            sortingType === 'Price: high to low'
              ? 'places__option places__option--active'
              : 'places__option'
          }
          tabIndex={0}
          id="Price: high to low"
          onClick={() => chooseSortingType('Price: high to low')}
        >
          Price: high to low
        </li>
        <li
          className={
            sortingType === 'Top rated first'
              ? 'places__option places__option--active'
              : 'places__option'
          }
          tabIndex={0}
          id="Top rated first"
          onClick={() => chooseSortingType('Top rated first')}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}
