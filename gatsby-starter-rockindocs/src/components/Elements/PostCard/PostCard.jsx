import React from 'react';
import Image from '../Image/Image'
import { Link } from 'gatsby'

export const PostCard = ({ path, title, date, image }) => {
  return (
    <div className="post-card-wrapper">
      <article key={ path } className="post-card">
        <div className="post-card__image">
          <Image alt={ title } filename={ image } />
        </div>
        <header>
        <div className="post-card__body">
          <h3 className="post-card__link">
            <Link style={{ boxShadow: `none` }} to={ path }>
              { title }
            </Link>
          </h3>
          <p className="post-card__date">
            { date }
          </p>
        </div>
        </header>
      </article>
    </div>
  );
}

export default PostCard;