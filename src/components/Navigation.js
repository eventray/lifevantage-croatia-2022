import React from "react";
import MediaQuery from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useLocation } from "react-router-dom";

import logo from "../img/Logo.png";
import burger from "../img/burger.png";

import cx from "classnames";
import gus from "../scss/gus.module.scss";
import styles from "../scss/navigation.module.scss";

function WithScrollHOC({ children }) {
  const [isScrolling, setIsScrolling] = React.useState(false);

  useScrollPosition(({ _, currPos }) => {
    setIsScrolling(currPos.y === 0);
  });

  if (Array.isArray(children)) {
    return children.map((child) => React.cloneElement(child, { isScrolling }));
  }

  return React.cloneElement(children, { isScrolling });
}

class Navigation extends React.Component {
  state = {
    active: " welcome",
  };

  renderNavigation = () => {
    const { pathname } = this.props;
    const linkProps = (to = "/") => {
      return {
        to,
        onClick: () => {
          this.setState({
            active: to,
          });
        },
        style: {
          ...(to.toLowerCase() === pathname.toLowerCase()
            ? { borderBottom: "solid 4px #002856 " }
            : {}),
        },
      };
    };
    return (
      <>
        <div className={styles.logo}>
          <Link {...linkProps("/")}>
            <img src={logo} alt={"Elite Retreat"} />
          </Link>
        </div>
        <ul>
          <li>
            <Link {...linkProps("/")}>Welcome</Link>
          </li>
          <li>
            <Link {...linkProps("/schedule")}>Schedule</Link>
          </li>
          <li>
            <Link {...linkProps("/resorts")}>Resort</Link>
          </li>
          <li>
            <Link {...linkProps("/rooms")}>Rooms</Link>
          </li>
          <li>
            <Link {...linkProps("/dining")}>Dining</Link>
          </li>

          <li>
            <Link {...linkProps("/activities")}>Activities</Link>
          </li>
          <li>
            <Link {...linkProps("/disney3day")}> Disney-3-Day-Hopper</Link>
          </li>

          <li>
            <Link {...linkProps("/faqs")}>FAQs</Link>
          </li>
        </ul>
      </>
    );
  };
  render() {
    const { isScrolling } = this.props;
    return (
      <div
        className={cx(
          {
            [styles.transparent]: !isScrolling,
            [styles.white]: isScrolling,
          },
          styles.navigation
        )}
      >
        <a
          className={cx(styles.secondaryBtn, styles.btn, gus.floatRight)}
          style={{}}
          href={"https://reg.eventray.com/r/first-colony-mortgage/Ohana22"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          Register
        </a>
        <MediaQuery query="(min-width: 1161px)">
          <div>{this.renderNavigation()}</div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1161px)">
          <div>
            <Menu
              className={styles.white}
              customBurgerIcon={<img src={burger} alt={"burger"} />}
            >
              {this.renderNavigation()}
            </Menu>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

function Nav() {
  const { pathname } = useLocation();
  return (
    <WithScrollHOC>
      <Navigation pathname={pathname} />
    </WithScrollHOC>
  );
}

export default Nav;
