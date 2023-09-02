import Link from 'next/link';
import React from 'react';

const NavButton = ({ title, style, link, action }) => {
    return (
        <Link href={link}>
            <a
                className={`px-4 py-2 text-center rounded-md shadow ${style}`}
                onClick={action}
                style={{ transition: 'all .3s' }}>
                {title}
            </a>
        </Link>
    );
};

export default React.memo(NavButton);
