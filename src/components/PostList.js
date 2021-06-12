import React from 'react';
import { Divider, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { postType } from 'Types';
import { Link } from 'gatsby';
import PostCard from './PostCard';

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
  post: {
    paddingBottom: theme.spacing(4),
  },
  dateDivider: {
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.secondary.light,
  },
}));

const YearHeading = ({ date }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4">
        {date}
      </Typography>
      <Divider className={classes.dateDivider} />
    </>
  );
};

const PostList = ({ posts }) => {
  const classes = useStyles();

  const postList = posts.sort((post1, post2) => {
    if (new Date(post1.node.frontmatter.date) > new Date(post2.node.frontmatter.date)) {
      return -1;
    }
    return 1;
  });

  const isDifferentYear = (post1, post2) => new Date(post1.node.frontmatter.date).getFullYear()
    !== new Date(post2.node.frontmatter.date).getFullYear();

  const map1 = (post, index) => {
    const isNewYear = index !== 0 ? isDifferentYear(post, postList[index - 1]) : true;
    return (
      <div key={post.node.id}>
        {isNewYear
          ? (
            <YearHeading date={new Date(post.node.frontmatter.date).getFullYear()} />
          )
          : null}
        <Link to={post.node.frontmatter.slug} style={{ textDecoration: 'none' }}>
          <div className={classes.post}>
            <PostCard post={post.node} />
          </div>
        </Link>
      </div>
    );
  };
  return (
    postList.map(map1)
  );
};

YearHeading.propTypes = {
  date: PropTypes.number.isRequired,
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(postType).isRequired,
};

export default PostList;
