import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { postRequestSend } from '../../Api/RequestMethod';
import { LOGOUT_URL } from '../../Api/Urls';
import setLocalStoreData from '../../Hooks/SetLocalStoreData';
import { remove_token } from '../../Redux/actions/auth';
import { run_spinner, stop_spinner } from '../../Redux/actions/spinner';
import CloseIcon from '../../public/icon/close-icon.svg';
import MenuIcon from '../../public/icon/menu-icon.svg';
import LinkButton from './LinkButton';
import NavButton from './NavButton';

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    const token = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(run_spinner());
        postRequestSend(LOGOUT_URL, { authorization: token.token }, {}).then((respons) => {
            if (respons.status === 200) {
                toast.success(respons.data.message);
                setLocalStoreData('auth_token', '');
                dispatch(remove_token({ token: '' }));
                dispatch(stop_spinner());
            } else {
                toast.error(respons.data.message);
                dispatch(stop_spinner());
            }
        });
    };

    return (
        <nav className="w-full bg-[#3056d3] shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <a>
                                <h2 className="text-2xl font-bold text-white">Trello App</h2>
                            </a>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 pb-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <Image width={'30'} height={'20'} src={CloseIcon} alt={''} />
                                ) : (
                                    <Image width={'30'} height={'20'} src={MenuIcon} alt={''} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? 'block' : 'hidden'
                        }`}>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <LinkButton title={'Home'} link={'/'} />
                            <LinkButton title={'Doc'} link={'/doc'} />
                            <LinkButton title={'Contact'} link={'/contact'} />
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            {!token.token && (
                                <>
                                    <NavButton
                                        title={'Login'}
                                        style={
                                            'inline-block w-full text-gray-800 bg-white hover:bg-gray-200'
                                        }
                                        link={'/auth/login'}
                                        action={() => {}}
                                    />
                                    <NavButton
                                        title={'Register'}
                                        style={
                                            'inline-block w-full text-white bg-gray-800 hover:bg-white hover:text-gray-800'
                                        }
                                        link={'/auth/register'}
                                        action={() => {}}
                                    />
                                </>
                            )}
                            {token.token && (
                                <NavButton
                                    title={'Logout'}
                                    style={
                                        'inline-block w-full text-gray-800 bg-white hover:bg-gray-200'
                                    }
                                    link={'/'}
                                    action={logout}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    {!token.token && (
                        <>
                            <NavButton
                                title={'Login'}
                                style={' text-gray-800 bg-white hover:bg-gray-800 hover:text-white'}
                                link={'/auth/login'}
                                action={() => {}}
                            />
                            <NavButton
                                title={'Register'}
                                style={'text-white bg-gray-800 hover:bg-white hover:text-gray-800'}
                                link={'/auth/register'}
                                action={() => {}}
                            />
                        </>
                    )}
                    {token.token && (
                        <NavButton
                            title={'Logout'}
                            style={' text-gray-800 bg-white hover:bg-gray-800 hover:text-white'}
                            link={'/'}
                            action={logout}
                        />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default React.memo(NavBar);
