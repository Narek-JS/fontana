import { Container } from '@/components/ui/container';
import { ServiceCard } from '../ServiceCard';
import classes from './index.module.css';

const Services: React.FC = () => {

    const serviesData = [
        {
            image: '/assets/images/firstServiceImage.png',
            title: 'LIABILITY INSURANCE',
            description: 'We offer premier insurance to everyone from owner operators and fleet managers to passenger vehicles and trailers.',
            link: '/'
        },
        {
            image: '/assets/images/seccondServiceImage.png',
            title: 'CARGO INSURANCE',
            description: 'Looking to fully protect your cargo? We provide the best cargo insurance for the best possible price!',
            link: '/'
        },
        {
            image: '/assets/images/theredServiceImaeg.png',
            title: 'PHYSICAL DAMAGE',
            description: 'Protect yourself and your vehicle from any potential damage! We will cover the cost of any damage!',
            link: '/'
        },
        {
            image: '/assets/images/fourthServiceImage.png',
            title: 'ON-HOOK INSURANCE',
            description: 'To protect yourself in case of an accident, you should have On-Hook Towing Insurance in your policy along with other coverages.',
            link: '/'
        },
    ];

    return (
        <section className={classes.section}>
            <Container>
                <div className={classes.services}>
                    { serviesData.map((service, index) => (
                        <ServiceCard {...service} key={index}/>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export { Services };