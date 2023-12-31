import useSWR from 'swr';
import axios from '../lib/axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useAuth = () => {
    const router = useRouter();

    const {
        data: user,
        error,
        revalidate,
    } = useSWR('auth/profile', () =>
        axios
            .get('auth/profile')
            .then((res) => {
                return res.data.data.user;
            })
            .catch((error) => {
                if (error.response.status !== 409) throw error;

                router.push('/verify-email');
            })
    );

    const register = async ({ setErrors, ...props }) => {
        setErrors([]);

        axios
            .post(`auth/register/1`, props)
            .then((res) => {
                localStorage.setItem('token', res.data.data.access_token);
                window.location.pathname = '/';

                return revalidate();
            })
            .catch((error) => {
                // if (error.response.status !== 422) throw error
                // setErrors(Object.values(error.response.data.errors).flat())
            });
    };

    const login = async ({ setErrors, setStatus, ...props }) => {
        setErrors([]);
        setStatus(null);

        axios
            .post(`auth/login/1`, props)
            .then((res) => {
                localStorage.setItem('token', res.data.data.access_token);
                window.location.pathname = '/';

                return revalidate();
            })
            .catch((error) => {
                // if (error.response.status !== 422) throw error
                // setErrors(Object.values(error.response.data.errors).flat())
            });
    };

    const logout = async () => {
        if (!error) {
            await axios.get('auth/logout');
            
            localStorage.removeItem('token');

            // return revalidate();
        }

        window.location.pathname = '/signin';
    };

    useEffect(() => {
        console.log(user);

        // if (user) {
        //     router.push('/');
        // }
    }, [user, error]);

    return {
        user,
        register,
        login,
        logout,
    };
};
