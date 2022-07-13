import User from '@/layouts/User';
import { Formik, Field, Form } from 'formik';
import { useAuth } from '@/hooks/auth';
import { useState } from 'react';
import Link from 'next/link';

const Signup = () => {
    const { user, register } = useAuth();

    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);

    const handelSubmitModel = (values) => {
        register({ setErrors, setStatus, ...values });
    };

    return (
        <>
            {/* <!-- ====== Banner Section Start --> */}
            <div className='relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]'>
                <div className='container'>
                    <div className='flex flex-wrap items-center -mx-4'>
                        <div className='w-full px-4'>
                            <div className='text-center'>
                                <h1 className='text-4xl font-semibold text-white'>
                                    Sign Up
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ====== Banner Section End --> */}

            {/* <!-- ====== Forms Section Start --> */}
            <section className='bg-[#F4F7FF] py-14 lg:py-20'>
                <div className='container'>
                    <div className='flex flex-wrap -mx-4'>
                        <div className='w-full px-4'>
                            <div
                                className='wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-14 px-8 text-center sm:px-12 md:px-[60px]'
                                data-wow-delay='.15s'
                            >
                                <div className='mb-10 text-center'>
                                    <a
                                        href='javascript:void(0)'
                                        className='mx-auto inline-block max-w-[160px]'
                                    >
                                        <img
                                            src='assets/images/logo/logo.svg'
                                            alt='logo'
                                        />
                                    </a>
                                </div>

                                <Formik
                                    initialValues={{
                                        email: '',
                                        password: '',
                                    }}
                                    onSubmit={async (values) =>
                                        handelSubmitModel(values)
                                    }
                                >
                                    {({ setFieldValue }) => (
                                        <Form>
                                            <div className='flex flex-col items-center justify-center'>
                                                {/* First Name Filed */}
                                                <div className='w-full mb-6'>
                                                    <Field
                                                        type='text'
                                                        placeholder='First Name'
                                                        className='bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none'
                                                        name='first_name'
                                                    />
                                                </div>

                                                {/* Last Name Filed */}
                                                <div className='w-full mb-6'>
                                                    <Field
                                                        type='text'
                                                        placeholder='Last Name'
                                                        className='bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none'
                                                        name='last_name'
                                                    />
                                                </div>

                                                {/* Email Filed */}
                                                <div className='w-full mb-6'>
                                                    <Field
                                                        type='email'
                                                        placeholder='Email'
                                                        className='bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none'
                                                        name='email'
                                                    />
                                                </div>

                                                {/* Phone Number Filed */}
                                                <div className='w-full mb-6'>
                                                    <Field
                                                        type='number'
                                                        placeholder='Phone Number'
                                                        className='bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none'
                                                        name='phone_number'
                                                    />
                                                </div>

                                                {/* Password Filed */}
                                                <div className='w-full mb-6'>
                                                    <Field
                                                        type='password'
                                                        placeholder='Password'
                                                        className='bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none'
                                                        name='password'
                                                    />
                                                </div>
                                            </div>

                                            {/* Submit & Close Modal */}
                                            <div className='mb-10'>
                                                <input
                                                    type='submit'
                                                    value='Sign In'
                                                    className='w-full px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer bordder-primary bg-primary hover:shadow-md'
                                                />
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                                {/* <p className='mb-4 text-base text-[#adadad]'>
                                    By creating an account you are agree with
                                    our
                                    <a
                                        href='javascript:void(0)'
                                        className='text-primary hover:underline'
                                    >
                                        Privacy
                                    </a>
                                    and
                                    <a
                                        href='javascript:void(0)'
                                        className='text-primary hover:underline'
                                    >
                                        Policy
                                    </a>
                                </p> */}

                                <p className='text-base text-[#adadad]'>
                                    Already have an account?
                                    <Link href={`/signin`}>
                                        <a
                                            href='signin.html'
                                            className='text-primary hover:underline'
                                        >
                                            Sign In
                                        </a>
                                    </Link>
                                </p>

                                <div>
                                    <span className='absolute top-1 right-1'>
                                        <svg
                                            width='40'
                                            height='40'
                                            viewBox='0 0 40 40'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <circle
                                                cx='1.39737'
                                                cy='38.6026'
                                                r='1.39737'
                                                transform='rotate(-90 1.39737 38.6026)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='1.39737'
                                                cy='1.99122'
                                                r='1.39737'
                                                transform='rotate(-90 1.39737 1.99122)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='13.6943'
                                                cy='38.6026'
                                                r='1.39737'
                                                transform='rotate(-90 13.6943 38.6026)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='13.6943'
                                                cy='1.99122'
                                                r='1.39737'
                                                transform='rotate(-90 13.6943 1.99122)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='25.9911'
                                                cy='38.6026'
                                                r='1.39737'
                                                transform='rotate(-90 25.9911 38.6026)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='25.9911'
                                                cy='1.99122'
                                                r='1.39737'
                                                transform='rotate(-90 25.9911 1.99122)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='38.288'
                                                cy='38.6026'
                                                r='1.39737'
                                                transform='rotate(-90 38.288 38.6026)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='38.288'
                                                cy='1.99122'
                                                r='1.39737'
                                                transform='rotate(-90 38.288 1.99122)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='1.39737'
                                                cy='26.3057'
                                                r='1.39737'
                                                transform='rotate(-90 1.39737 26.3057)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='13.6943'
                                                cy='26.3057'
                                                r='1.39737'
                                                transform='rotate(-90 13.6943 26.3057)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='25.9911'
                                                cy='26.3057'
                                                r='1.39737'
                                                transform='rotate(-90 25.9911 26.3057)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='38.288'
                                                cy='26.3057'
                                                r='1.39737'
                                                transform='rotate(-90 38.288 26.3057)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='1.39737'
                                                cy='14.0086'
                                                r='1.39737'
                                                transform='rotate(-90 1.39737 14.0086)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='13.6943'
                                                cy='14.0086'
                                                r='1.39737'
                                                transform='rotate(-90 13.6943 14.0086)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='25.9911'
                                                cy='14.0086'
                                                r='1.39737'
                                                transform='rotate(-90 25.9911 14.0086)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='38.288'
                                                cy='14.0086'
                                                r='1.39737'
                                                transform='rotate(-90 38.288 14.0086)'
                                                fill='#3056D3'
                                            />
                                        </svg>
                                    </span>
                                    <span className='absolute left-1 bottom-1'>
                                        <svg
                                            width='29'
                                            height='40'
                                            viewBox='0 0 29 40'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <circle
                                                cx='2.288'
                                                cy='25.9912'
                                                r='1.39737'
                                                transform='rotate(-90 2.288 25.9912)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='14.5849'
                                                cy='25.9911'
                                                r='1.39737'
                                                transform='rotate(-90 14.5849 25.9911)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='26.7216'
                                                cy='25.9911'
                                                r='1.39737'
                                                transform='rotate(-90 26.7216 25.9911)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='2.288'
                                                cy='13.6944'
                                                r='1.39737'
                                                transform='rotate(-90 2.288 13.6944)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='14.5849'
                                                cy='13.6943'
                                                r='1.39737'
                                                transform='rotate(-90 14.5849 13.6943)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='26.7216'
                                                cy='13.6943'
                                                r='1.39737'
                                                transform='rotate(-90 26.7216 13.6943)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='2.288'
                                                cy='38.0087'
                                                r='1.39737'
                                                transform='rotate(-90 2.288 38.0087)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='2.288'
                                                cy='1.39739'
                                                r='1.39737'
                                                transform='rotate(-90 2.288 1.39739)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='14.5849'
                                                cy='38.0089'
                                                r='1.39737'
                                                transform='rotate(-90 14.5849 38.0089)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='26.7216'
                                                cy='38.0089'
                                                r='1.39737'
                                                transform='rotate(-90 26.7216 38.0089)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='14.5849'
                                                cy='1.39761'
                                                r='1.39737'
                                                transform='rotate(-90 14.5849 1.39761)'
                                                fill='#3056D3'
                                            />
                                            <circle
                                                cx='26.7216'
                                                cy='1.39761'
                                                r='1.39737'
                                                transform='rotate(-90 26.7216 1.39761)'
                                                fill='#3056D3'
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Forms Section End --> */}
        </>
    );
};

export default Signup;

Signup.layout = User;
