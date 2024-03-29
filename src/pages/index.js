import React from 'react';
import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Intro from 'Components/Intro';
import PostList from 'Components/PostList';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { postType } from 'Types';
import PageTransition from 'Components/layout/PageTransition';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(20),
  },
  postList: {
    marginTop: theme.spacing(15),
  },
}));

const Home = ({ data }) => {
  const classes = useStyles();
  const { allMarkdownRemark: { edges } } = data;
  return (
    <PageTransition key="Home">
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="flex-start"
        className={classes.main}
        spacing={10}
      >
        <Grid item xs={12} sm={6}>
          <Intro />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.postList}>
            <PostList posts={edges} />
          </div>
        </Grid>
      </Grid>
    </PageTransition>
  );
};

export const pageQuery = graphql`
query HomeAllPosts {
  allMarkdownRemark {
    edges {
      node {
        id
        timeToRead
        frontmatter {
          title
          tags
          description
          slug
          date
        }
      }
    }
  }
}
`;

Home.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(postType),
    }),
  }).isRequired,
};

export default Home;
