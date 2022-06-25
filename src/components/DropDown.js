import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../scss/dropdown.module.scss';


function Container({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export function DropDown(
  { links = [], children = [] ,uppercase = false}
) {
  return (
    <Container>
      <div className={styles.featuresTab}>
        <div className={styles.featuresTabSection}>
          {links.map(({ link, to }) => {
            const text = uppercase ? link.toUpperCase() : link
            return (
              <Link to={to} key={to}>
                {text}
              </Link>
            )
          })}
        </div>
        {React.cloneElement(children,{
          "data-dropdown": links.length ? true : false
        })}
      </div>
    </Container>
  );
}