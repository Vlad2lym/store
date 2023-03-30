import { FC, useState } from "react";
import { IProduct } from "../../types/types";
import styles from '../../styles/product.module.scss'
import ImageProduct from "./imageProduct";
import CategoryStars from "./categoryReviews";

interface ProductProps {
    product: IProduct
}

const Product:FC<ProductProps> = ({product}) => {
    return (
        <div className={styles.product}>
            <ImageProduct product={product}/>
            <CategoryStars product={product}/>
            <div className={styles.brand}>Brand name</div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                <h2>{Math.round(product.price * 70)} &#8381; </h2><p>/шт.</p>
            </div>
        </div>
    )
}

export default Product;