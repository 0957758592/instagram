import React from "react";
import { useUserCardStyles } from "../../styles";
import { Link } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";
import { defaultUser } from '../../data'

function UserCard({ user = defaultUser, avatarSize = 44 }) {

  const classes = useUserCardStyles({ avatarSize });
  const { username, name, profile_image } = user || {};

  return (
    <div className={classes.wrapper}>
      <Link to={`/${username}`}>
        <Avatar src={profile_image} alt="User Avatar" className={classes.avatar} />
      </Link>
      <div>
        <Link to={`/${username}`}>
          <Typography variant="subtitle2" className={classes.typography}>
            {username}
          </Typography>
        </Link>
        <Typography
          color='textSecondary'
          variant='body2'
          className={classes.typography}
        >
          {name}
        </Typography>
      </div>
    </div>
  )
}

export default UserCard;
