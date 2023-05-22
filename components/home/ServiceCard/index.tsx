import { ArrowToRightBlue } from '@/public/assets/svges/ArrowToRightBlue';
import Image from 'next/image';
import Link from 'next/link';
import classes from './index.module.css';

interface IProps {
    image: string;
    title: string;
    description: string;
    link: string
}

const ServiceCard: React.FC<IProps> = ({
    description,
    image,
    link,
    title
}) => {

    return (
        <div className={classes.service}>
            <Image
                alt="service image"
                src={image}
                width={80}
                height={40}
                className={classes.serviceImage}
            />
            <h3 className={classes.serviceTitle}>{title}</h3>
            <p className={classes.serviceDescription}>
                {description }
            </p>
            <Link href='/' className={classes.serviceLink}>
                <ArrowToRightBlue />
                Read More
            </Link>
        </div>
    );
};

export { ServiceCard }