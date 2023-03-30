import { FC } from "react";
import styles from '../../styles/categoryReviews.module.scss'
import { IProduct } from "../../types/types";

interface CategoryStarsProps {
    product: IProduct
}

const CategoryStars:FC<CategoryStarsProps> = ({product}) => {
    return (
        <div className={styles.categoryReviews}>
            <p>{product.category}</p>
            <p>{product.rating.count} отзывов</p>
        </div>
    )
}

export default CategoryStars;