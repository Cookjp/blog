import React from 'react';
import { graphql } from 'gatsby';
import { postType } from 'Types';
import makeStyles from '@mui/styles/makeStyles';
import PageTransition from 'Components/layout/PageTransition';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 'auto',
    '& h2, h1': {
      color: theme.palette.secondary.main,
    },
    '& h4': {
      color: theme.palette.secondary.main,
    },
  },
  markdown: {
    width: '80%',
    fontSize: '1.2em',
  },
  p: {
    fontSize: '1.2em',
  },
}));

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const classes = useStyles();

  return (
    <PageTransition key={frontmatter.slug}>
      <div className={classes.container}>
        <div>
          <h1>{frontmatter.title}</h1>
          <h4>
            by
            {' '}
            <b>James Cook</b>
            {' '}
            on
            {' '}
            {frontmatter.date}
          </h4>
          <div
            className={classes.markdown}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </PageTransition>
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
