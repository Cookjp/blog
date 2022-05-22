import React from 'react';
import { graphql } from 'gatsby';
import { postType } from 'Types';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  container: {
    width: '80%',
    margin: 'auto',
  },
  blogPost: {
    width: '50%',
  },
  markdown: {
    width: '80%',
  },
});

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.blogPost}>
        <h1>{frontmatter.title}</h1>
        <h4>{frontmatter.date}</h4>
        <div
          className={classes.markdown}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }`;

Template.propTypes = {
  data: {
    markdownRemark: postType,
  }.isRequired,
};
export default Template;
