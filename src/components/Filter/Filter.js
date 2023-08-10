import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Filter/Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
        className={styles.filterInput}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;