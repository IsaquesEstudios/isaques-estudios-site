import styles from '../styles/Home.module.css'
import Image from 'next/image'

import Logo from './../styles/image/logo.png'

export default function Index() {
  return (
    <main className={styles.main}>
      <div>
        <Image src={Logo} height={161} width={240} />
      </div>
      <h1>
        Estamos em manutenção, logo estaremos no ar!
      </h1>
      <h2>Para contratar algum serviço, entre em contato com: (11) 98340-4368</h2>
    </main>
  )
}


