import Head from 'next/head'
import Link from 'next/link'

import Footer from '../comps/Footer'
import Nav from '../comps/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <>
    <Head>
      <title>Users List | Home</title>
      <meta name="keywords" content="users"/>
    </Head>
   <div >
     
     <h1 className={styles.title}>Home</h1>
     <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga architecto cumque pariatur nulla nam, facilis molestias nobis inventore voluptas at deleniti assumenda, autem, sunt qui! Aperiam sapiente commodi consectetur laudantium</p>
     <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga architecto cumque pariatur nulla nam, facilis molestias nobis inventore voluptas at .</p>
     <Link href="/users" ><a className={styles.btn}>Users List</a></Link>
   </div>
   </>
  )
}
