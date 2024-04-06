import { Fragment, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { submitReview } from '../../store/api-actions';
import { FormEvent } from 'react';
import { ChangeEvent } from 'react';

const rating = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' },
];

function ReviewsForm(): JSX.Element {
  const id = useAppSelector((state) => state.singleOffer.offer.id);
  const dispatch = useAppDispatch();
  const [review, setReview] = useState({ comment: '', rating: 0 });

  function handleInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setReview({
      ...review,
      comment: e.target.value,
    });
  }

  function handleRatingChange(e: ChangeEvent<HTMLInputElement>) {
    setReview({
      ...review,
      rating: Number(e.target.value),
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (id) {
      console.log(id, review);
      dispatch(submitReview({ id, review: review }));
    }
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {rating.map(({ value, label }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              id={`${value}-stars"`}
              type="radio"
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${value}-stars"`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleInputChange}
        defaultValue={''}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            review.comment.length < 50 ||
            review.comment.length > 300 ||
            review.rating === 0
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default ReviewsForm;
