import { getPageCount, getPagesArray } from '@/utils/pages'
import { NextPage } from 'next'
import { useMemo, useState } from 'react'
import Product from '../components/product/product'
import styles from '../styles/Home.module.scss'
import { IProduct } from '../types/types'

interface HomeProps {
  store: IProduct[]
}

const Home:NextPage<HomeProps> = ({store}) => {
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = getPageCount(store.length, limit);

  const pagesArray = getPagesArray(pageCount);
  
  const storePagesArray = useMemo(() => {
    let result = [];
    let storeCopy = [...store];
    for (let i = 0; i < pageCount; i++) {
      let dataPageCurrent = storeCopy.splice(0, limit);
      result.push(dataPageCurrent);
    }
    return result;
  }, [limit])

  return (
    <div className={styles.wrapper}>
      {storePagesArray[currentPage-1].map(product => {
        return <Product key={product.id} product={product}/>
      })}
      <div className={styles.page__wrapper}>
        <button 
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          prev
        </button>
          {pagesArray.map(page => {
            return (
              <div
                key={page}
                className={currentPage === page ? `${styles.page} ${styles.page__current}` : styles.page}
              >
                {page}
              </div>
            )
          })}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pagesArray.at(-1)}
        >
          next
        </button>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const store = await response.json()

  return {
    store
  }
}

export default Home;