import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.scss';

const Profile = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        <img src={user.avatar} className={styles.card__img} alt="face" />
        <h2 className={styles.card__name}> {user.name} </h2>{' '}
        <p className={styles.card__tag}> {user.tag} </p>{' '}
        <p className={styles.card__location}> {user.location} </p>{' '}
      </div>{' '}
      <ul className={styles.card__list}>
        <li className={styles.card__listItem}>
          <span> followers: </span> <span> {user.stats.followers} </span>{' '}
        </li>{' '}
        <li className={styles.card__listItem}>
          <span> views: </span> <span> {user.stats.views} </span>{' '}
        </li>{' '}
        <li className={styles.card__listItem}>
          <span> likes: </span> <span> {user.stats.likes} </span>{' '}
        </li>{' '}
      </ul>{' '}
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;
