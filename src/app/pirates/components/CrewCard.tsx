import React from 'react'
import styles from './crew-card.module.css'

type Props = {
    name: string,
    description: string
}

export default function CrewCard({name,description}: Props) {
  return (
    <div className={styles.main}>
        {name}
        <br />
        {description}
    </div> 
  )
}
