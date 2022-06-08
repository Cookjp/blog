import React from 'react';
import {
  Box, Divider, Card, Typography, CardActionArea,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { postType } from 'Types';
import Tags from './Tags';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(20),
  },
  titleAndDate: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(5),
  },
  dateAndReadTime: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    width: '60%',
  },
  tags: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
}));

const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const PostCard = ({ post }) => {
  const classes = useStyles();
  const { frontmatter, timeToRead } = post;

  const date = () => {
    const d = new Date(frontmatter.date);
    return (`${months[d.getMonth()]} ${d.getFullYear()}`);
  };

  return (
    <Card sx={{ borderRadius: 2, mt: 2 }}>
      <CardActionArea sx={{ p: 2 }}>
        <div className={classes.titleAndDate}>
          <Typography variant="h5">
            <Box fontWeight="fontWeightBold">
              {frontmatter.title}
            </Box>
          </Typography>
          <div className={classes.dateAndReadTime}>
            <Typography variant="subtitle2">
              <Box fontStyle="oblique">
                {`${timeToRead} min read`}
              </Box>
            </Typography>
            <Typography variant="body1" className={classes.date}>
              {date()}
            </Typography>
          </div>
        </div>
        <Divider className={classes.divider} />
        {frontmatter.tags
          ? <Tags tags={frontmatter.tags} className={classes.tags} />
          : <Box m={3} /> }
        <Typography>
          {frontmatter.description}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

PostCard.propTypes = {
  post: postType.isRequired,
};
export default PostCard;
