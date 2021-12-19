import React from 'react'
import Image from 'next/image'

import styles from "../styles/Testimonials.module.css"
import Circle from './Circle'
import { users } from '../data'

 
const Testimonials = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="darkblue" left="0" right="0" top="-70vh"/>
            <h1 className={styles.title}>Testimonials</h1>
            <div className={styles.wrapper}>
                {users.map(user =>{
                        return (<div key={user.id} className={styles.card}>
                            <Image alt={user.logo} 
                                src={`/img/${user.logo}`} 
                                width="30"
                                height="30"
                                />
                            <p className={styles.comment}>
                                {user.comment}
                            </p>
                            <div className={styles.person}>
                                <Image alt={user.avatar}
                                    src={`/img/${user.avatar}`}
                                    width="45" height="45"
                                    objectFit="cover"
                                    className={styles.avatar}
                                    />
                                <div className={styles.info}>
                                    <span className={styles.username}>{user.name}</span>
                                    <span className={styles.jobTitle}>{user.title}</span>
                                </div>
                            </div>
                        </div>)
                    })}
            </div>     
        </div>
    )
}

export default Testimonials
