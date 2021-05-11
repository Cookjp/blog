/* eslint-disable import/prefer-default-export */
import {
  shape, string, number, arrayOf,
} from 'prop-types';

export const postType = shape({
  node: shape({
    id: string.isRequired,
    timeToRead: number,
    frontmatter: shape({
      title: string.isRequired,
      tags: arrayOf(string),
      description: string.isRequired,
      slug: string.isRequired,
      date: string.isRequired,
    }),
  }),
});
