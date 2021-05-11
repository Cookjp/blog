import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PropTypes, { string } from 'prop-types';

const Tags = ({ tags, className }) => (

  <div className={className}>
    <LocalOfferIcon fontSize="small" />
    <Box m={1} />
    {tags.map((tag) => (
      <Typography variant="caption" key={tag}>
        {`${tag}, `}
      </Typography>
    ))}
  </div>
);

Tags.defaultProps = {
  className: '',
};
Tags.propTypes = {
  tags: PropTypes.arrayOf(string).isRequired,
  className: string,
};

export default Tags;
