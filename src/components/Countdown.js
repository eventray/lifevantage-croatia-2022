import React, { Component } from "react";
import styles from "../scss/countdown.module.scss";
import PropTypes from "prop-types";

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  clone({ element, props = {} }) {
    if (!element) return null;
    return React.cloneElement(element, props);
  }

  ui() {
    const { show, timeStyles, timeLabelStyles } = this.props; // @show can be typeof @string or @array
    const { days, min, sec, hours } = this.state;

    // make <li's/> centered
    const css = {
      display: "inline-block",
      marginRight: "10px",
      float: "none",
      textAlign: "center !important",
    };

    const paragraphStyles = { ...timeStyles };
    const labelStyles = { ...timeLabelStyles };

    const materials = {
      days: (
        <li>
          <p style={paragraphStyles}>{this.addLeadingZeros(days)}</p>
          <label style={labelStyles}>{days === 1 ? "Day" : "Days"}</label>
        </li>
      ),
      hours: (
        <li>
          <p style={paragraphStyles}>{this.addLeadingZeros(hours)}</p>
          <label style={labelStyles}>Hours</label>
        </li>
      ),
      minutes: (
        <li>
          <p style={paragraphStyles}>{this.addLeadingZeros(min)}</p>
          <label style={labelStyles}>Min</label>
        </li>
      ),
      seconds: (
        <li>
          <p style={paragraphStyles}>{this.addLeadingZeros(sec)}</p>
          <label style={labelStyles}>Sec</label>
        </li>
      ),
    };

    /* render based on passed @array and index @countdown */
    if (show && Array.isArray(show)) {
      return show.map((value) => {
        const material = this.clone({
          element: !materials[value] ? null : materials[value],
          /* if show contains all countdown materials don't center the <li's/>*/
          props: { style: show.length > 3 ? {} : css, key: value },
        });

        return material;
      });
    }

    /* render the one @countdown component */
    if (show && ["seconds", "minutes", "hours", "days"].indexOf(show) >= 0) {
      return this.clone({ element: materials[show], props: { style: css } });
    }

    /* render the complete @countdown - here we use scss modules styles*/
    return Object.keys(materials).map((key) => {
      const material = this.clone({
        element: materials[key],
        props: { key: key },
      });
      return material;
    });
  }

  render() {
    return (
      <div className={styles.container} style={{ textAlign: "center" }}>
        <ul>{this.ui()}</ul>
      </div>
    );
  }
}

Countdown.defaultProps = {
  date: new Date(),
};

Countdown.propTypes = {
  show: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default Countdown;
