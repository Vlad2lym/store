import Image from 'next/image'
import { FC } from 'react'
import styles from '../../styles/imageProduct.module.scss'
import { IProduct } from '../../types/types'

interface ImageProductProps {
    product: IProduct
}

const ImageProduct:FC<ImageProductProps> = ({product}) => {
    return (
        <>
            <Image src={product.image} alt={product.title} width={220} height={220} priority className={styles.image}/>
            {product.rating.count > 300 ?
                <div className={styles.labelHit}>
                    <p>Top</p>
                </div>
            :
                <div style={{width: '64px', height: '24px'}}></div>
            }
        </>
    )
}

export default ImageProduct;