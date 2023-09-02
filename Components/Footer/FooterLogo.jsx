import Link from 'next/link';
import React from 'react';

const FooterLogo = () => {
    return (
        <Link href={'/'}>
            <a className="flex items-center justify-center mb-4 sm:mb-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                    Trello App
                </span>
            </a>
        </Link>
    );
};

export default React.memo(FooterLogo);
