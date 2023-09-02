import Link from 'next/link';
import React from 'react';

const LinkButton = ({ title, style, link }) => {
    return (
        <li>
            <Link href={link}>
                <a className={`mr-4 hover:underline md:mr-6 ${style}`}>{title}</a>
            </Link>
        </li>
    );
};

export default React.memo(LinkButton);
