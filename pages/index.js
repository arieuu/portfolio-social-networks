import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Cards'
import Descontos from '../components/Descontos'
import Form from '../components/Form'
import Header from '../components/Header'
import Testemunhos from '../components/Testemunhos'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yellow 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='pb-10'>
        <div className='bg-[#FBED04] pt-8 md:h-screen px-10'>
          <Header></Header>
          <Top></Top>
        </div>
        <Cards></Cards>
        <Form></Form>
        <Testemunhos></Testemunhos>
      </main>
    </div>
  )
}
