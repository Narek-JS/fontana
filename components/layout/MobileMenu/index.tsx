import { useContext, useMemo } from 'react';
import { GlobalDatasContext } from '@/context/globalDatas';
import { OperatorIcon } from '@/public/assets/svges/OperatorIcon';
import { CertificateIcon } from '@/public/assets/svges/CertificateIcon';
import { EmailIcon } from '@/public/assets/svges/EmailIcon';
import Link from 'next/link';
import classes from './index.module.css';

const MobileMenu: React.FC = () => {
    const {
        menus: { data: menuData },
        menuBar: { toogleIsOpen },        
    } = useContext(GlobalDatasContext);

    const links: Array<{
        title: string;
        link: string;
        id: number;
    }> = useMemo(() => {
        if(menuData?.topHeaderItems?.length){
            const centerItems = menuData.topHeaderItems.find(item => item?.title === 'Center');
            if(centerItems && centerItems.children && centerItems.children.length) {
                return centerItems.children.map(item => ({
                    id: item.id,
                    title: item.title,
                    link: item.url
                }))
            };
        };
        return [];
    }, [menuData]);

    return (
        <div className={classes.mobileMenu}>
                <ul className={classes.links}>
                    { links.map(({ id, link, title }) => (
                        <li key={id} className={classes.link}>
                            <Link href={link} onClick={toogleIsOpen}>{title}</Link>
                        </li>
                    ))}
                </ul>
                <div className={classes.contactsInfo}>
                    { menuData?.contactInfo?.phone?.url && (
                        <a>
                            <OperatorIcon />
                            {menuData?.contactInfo?.phone?.url}
                        </a>
                    )}
                    { menuData?.contactInfo?.Mail?.url && (
                        <a>
                            <EmailIcon />
                            {menuData?.contactInfo?.Mail?.url}
                        </a>
                    )}
                    <a>
                        <CertificateIcon />
                        Certificate Request
                    </a>
                </div>
        </div>
    );
};

export { MobileMenu };