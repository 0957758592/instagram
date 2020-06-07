import React from "react";
import { useNavbarStyles } from "../../styles";
import { AppBar, Hidden, InputBase, Avatar } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import { LoadingIcon, AddIcon, HomeIcon, HomeActiveIcon, ExploreActiveIcon, ExploreIcon, LikeActiveIcon, LikeIcon } from "../../icons";
import { defaultCurrentUser } from "../../data";

function Navbar({ minimalNavbar }) {
  const classes = useNavbarStyles();
  const history = useHistory();
  const path = history.location.pathname

  return (
    <AppBar className={classes.appBar}>
      <section className={classes.section}>
        <Logo />
        {minimalNavbar && (
          <>
            <Search />
            <Links path={path} />
          </>
        )}
      </section>
    </AppBar>
  );
}

function Logo() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.logoContainer}>
      <Link to="/">
        <div className={classes.logoWrapper}>
          <img src={logo} alt="Instagram" className={classes.logo} />
        </div>
      </Link>
    </div>
  );
}

function Search() {
  const classes = useNavbarStyles();
  const [query, setQuery] = React.useState('');
  let loading = false;

  function handleClearInput() {
    setQuery('')
  }

  return (
    <Hidden xsDown>
      <InputBase
        className={classes.input}
        onChange={e => setQuery(e.target.value)}
        startAdornment={<span className={classes.searchIcon} />}
        endAdornment={
          loading ? (
            <LoadingIcon />
          ) : (
              <span onClick={handleClearInput} className={classes.clearIcon} />
            )}
        placeholder='Search...'
        value={query}
      />
    </Hidden>
  )
}

function Links({ path }) {
  const classes = useNavbarStyles()
  const [showList, setList] = React.useState(false)

  return (
    <div className={classes.linksContainer}>
      <div className={classes.linksWrapper}>
        <Hidden xsDown>
          <AddIcon />
        </Hidden>
        <Link to="/">
          {path === '/' ? <HomeActiveIcon /> : <HomeIcon />}
        </Link>
        <Link to="/explore">
          {path === '/explore' ? <ExploreActiveIcon /> : <ExploreIcon />}
        </Link>
        <div className={classes.notification}>
          {showList ? <LikeActiveIcon /> : <LikeIcon />}
        </div>
        <Link to={`/${defaultCurrentUser.username}`}>
          <div className={path === `/${defaultCurrentUser.username}` ? classes.profileActive : ""}>
          </div>
          <Avatar
            src={defaultCurrentUser.profile_image}
            className={classes.profile_image}
          />
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
