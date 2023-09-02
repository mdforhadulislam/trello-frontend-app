import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Layout from '../Components/Layout';

export default function Home() {
    const router = useRouter();
    const token = useSelector((state) => state.auth);

    if (token.token) router.push('/dashboard');

    return (
        <Layout title={'Home'}>
            <h1 className="text-4xl">Home</h1>
        </Layout>
    );
}
