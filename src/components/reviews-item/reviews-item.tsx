import { TReviews } from '../../types/reviews';

type TReviewsProps = {
  review: TReviews;
};

export function ReviewsItem({ review }: TReviewsProps): JSX.Element {
  const ratingPercent: string = `${Math.round(+review.rating) * 20}%`;
  const date = new Date(review.date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingPercent }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={date.toDateString()}>
          {date.toLocaleString('default', { month: 'long' })}{' '}
          {date.getFullYear()}
        </time>
      </div>
    </li>
  );
}
