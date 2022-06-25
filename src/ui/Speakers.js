import React from 'react'
import {Grid} from "../components/Grid"

import faker from "faker";
import placeholder from "../img/user-placeholder.jpg"

const users = Array.from({length: 10},(entry) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    src: placeholder,
    alt: faker.random.uuid(),
    description: `${firstName} ${lastName}`
  }
})

export function Speakers() {
  return (
    <div>
      <Grid images={users}/>
    </div>
  )
}
