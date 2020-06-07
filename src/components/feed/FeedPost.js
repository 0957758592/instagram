import React from "react";
import { useFeedPostStyles } from "../../styles";
import UserCard from "../shared/UserCard"
import { MoreIcon, CommentIcon, ShareIcon, UnlikeIcon, LikeIcon } from "../../icons"
import { Link } from 'react-router-dom'
import { Typography, Button, Hidden, Divider } from "@material-ui/core"
import HTMLEllipsis from 'react-lines-ellipsis/lib/html'

function FeedPost({ post }) {
  const classes = useFeedPostStyles();
  const { id, media, likes, user, caption, comments } = post
  const [showCaption, setCaption] = React.useState(false);

  return (
    <>
      <article className={classes.article}>
        {/* Feed Post Header */}
        <div className={classes.postHeader}>
          <UserCard user={user}/>
          <MoreIcon
            className={classes.moreIcon}
          />
        </div>
        {/* Feed Post Image */}
        <div>
          <img src={media} alt="Poeeest Media" className={classes.image} />
        </div>
        {/* FeedPosts Buttons */}
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeButton />
            <Link to={`/p/${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveButton/>
          </div>
          <Typography className={classes.like} variant="subtitle2" >
            {likes === 1 ? '1 like' : `${likes} likes`}
          </Typography>
          <div className={showCaption ? classes.expanded : classes.collapsed}>
            <Link to={`/${user.username}`}>
              <Typography
                variant="subtitle2"
                component='span'
                className={classes.username}
              >
                {user.username}
              </Typography>
            </Link>
            {showCaption ?
              (<Typography
                variant="body2"
                component='span'
                dangerouslySetInnerHTML={{ __html: caption }}
              />) : (
                <div className={classes.captionWrapper}>
                  <HTMLEllipsis
                    unsafeHTML={caption}
                    className={classes.caption}
                    maxLine='0'
                    ellipsis="..."
                    basedOn="letters"
                  />
                  <Button className={classes.moreButton}

                    onClick={() => setCaption(true)}
                  >
                    more
                  </Button>

                </div>
              )
            }
          </div>
          <Link to={`/p/${id}`}>
            <Typography className={classes.commentsLink}
              variant='body2'
              component="div"
            >
              View all {comments.length} comments
            </Typography>
          </Link>
          {comments && comments.map(comment => (
            <div key={comment.id}>
              <Link to={`${comment.user.username}`}>
                <Typography
                  variant="subtitle2"
                  component='span'
                  className={classes.commentUsername}
                >
                  {comment.user.username}
                </Typography> {" "}
                <Typography variant='body2' component='span'>
                  {comment.content}
                </Typography>
              </Link>
            </div>
          ))}

          <Typography color="textSecondary" className={classes.datePosted}>
            5 DAYS AGO
          </Typography>
        </div>
        <Hidden xsDown>
          <Divider />
          <Comment/>
        </Hidden>
      </article>
    </>
  );
}

function LikeButton() {
  const classes = useFeedPostStyles();
  const [liked, setLiked] = React.useState(false);
  const Icon = liked ? UnlikeIcon : LikeIcon
  const className = liked ? classes.liked : classes.like
  const onClick = liked ? handleUnlike : handleLike

  function handleUnlike() {
    setLiked(false);
  }

  function handleLike() {
    setLiked(true);
  }

  return <Icon onClick={onClick} className={className}/>
}

function SaveButton() {
  return 'SaveButton'
}

function Comment() {
  return 'Custom comment'
}

export default FeedPost;
