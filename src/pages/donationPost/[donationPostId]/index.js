import DonationPostRelatedCard from '@/components/Cards/DonationPostRelatedCard';
import Spinner from '@/components/UI/Spinner';
import User from '@/layouts/User';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Formik, Field, Form } from 'formik'
import { DatePicker } from 'rsuite';
import axios from '@/lib/axios';
import toast from 'react-hot-toast'


const DonatioPost = ({ }) => {

    //#region State   ####################################
    const [donationPost, setDonationPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [donationPostsRelated, setDonationPostsRelated] = useState([]);
    //#endregion

    //#region Hook   ####################################
    const router = useRouter();
    const { donationPostId, donationPostType } = router.query;

    const { data: donationPostData, donationPostError } =
        useSWR(`/user/donationPost/${donationPostId}/show`);

    const { data: donationPostsRelatedData, donationPostsRelatedError } = useSWR(
        `/user/donationPost/indexRandomly?filter[post_type_id]=${donationPostType}`,
        { refreshInterval: 0 },
    );
    useEffect(() => {
        setLoading(true);

        if (donationPostData && donationPostsRelatedData) {
            setDonationPost(
                donationPostData.data.donationPost)
            setDonationPostsRelated(donationPostsRelatedData.data.donationPosts);
            setLoading(false);
        }

    }, [donationPostData, donationPostsRelatedData]);
    //#endregion

    //#region Function   ####################################
    const handleSubmitSponsor = async values => {
        await axios
            .post(`/user/donationPost/${donationPost.id}/sponsor`,
                values)
            .then(res => {
                router.back()

                toast.success(`Success Sponsor..`)
            })
            .catch(err => {
                toast.error(`Sorry... Some Thing Wrong`)
            })
    }

    const handleSubmitDonate = async values => {
        await axios
            .post(`/user/donationPost/${donationPost.id}/donate`,
                values)
            .then(res => {
                router.back()

                toast.success(`Success Donate..`)
            })
            .catch(err => {
                toast.error(`Sorry... Some Thing Wrong`)
            })
    }
    //#endregion

    //#region Jsx   ####################################
    return <section className="-m-[7.5rem] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
            <div className="flex flex-wrap justify-center -mx-4">
                <div className="w-full px-4">

                    {/* Header */}
                    <div
                        className="wow fadeInUp relative z-20 mb-[60px] h-[300px] overflow-hidden rounded md:h-[400px] lg:h-[500px]"
                        data-wow-delay=".1s"
                    >
                        <img
                            src={donationPost.image}
                            alt="image"
                            className="object-cover object-center w-full h-full"
                        />
                        <div
                            className="absolute top-0 left-0 z-10 flex items-end w-full h-full bg-gradient-to-t from-dark-700 to-transparent"
                        >

                        </div>
                    </div>

                    <Spinner loading={loading}>
                        <div className="flex flex-wrap mb-5 -mx-4">

                            {/* Left Side  */}
                            <div className="w-full px-4 lg:w-6/12">

                                <div className="flex flex-wrap items-center justify-between pb-6 pr-4 wow fadeInUp" data-wow-delay=".1s">
                                    <Link href={`/charitableFoundations/${donationPost.charitableFoundation_id}`}>
                                        <a >
                                            <div className="flex items-center mb-4 mr-5 md:mr-10">
                                                <div className="w-10 h-10 mr-4 overflow-hidden rounded-full">
                                                    <img
                                                        src={donationPost.charitableFoundation_image}
                                                        alt="image"
                                                        className="w-full"
                                                    />
                                                </div>
                                                <p className="text-base font-medium text-dark">
                                                    By {' '}
                                                    {donationPost.charitableFoundation}
                                                </p>
                                            </div>
                                        </a >
                                    </Link>
                                    <div className="flex items-center mb-4">

                                        <div
                                            className="flex items-center m-auto mr-5 text-sm font-medium text-dark md:mr-8"
                                        >
                                            <span className="mr-3">
                                                <i class="fa-regular fa-map"></i>
                                            </span>
                                            <p>{donationPost.city}</p>
                                        </div>

                                        <div
                                            className="flex items-center m-auto mr-5 text-sm font-medium text-dark md:mr-8"
                                        >
                                            <span className="mr-3">
                                                <i class="fa-regular fa-calendar-days"></i>
                                            </span>
                                            <p>
                                                {moment(donationPost.start_date).format('MMMM Do YYYY')}
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <p
                                        className="mb-8 text-lg leading-relaxed wow fadeInUp text-body-color"
                                        data-wow-delay=".1s"
                                    >
                                        {donationPost.description}
                                    </p>
                                </div>
                            </div>


                            {/* Right Side  */}
                            <div className="w-full px-4 lg:w-6/12">
                                <div>
                                    <div
                                        className="wow fadeInUp relative mb-12 overflow-hidden rounded bg-primary py-[60px] px-11 text-center lg:px-8"
                                        data-wow-delay=".1s
                  "
                                    >
                                        <h2
                                            className="mb-8 text-3xl font-bold leading-snug text-white wow fadeInUp sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug"
                                            data-wow-delay=".1s"
                                        >
                                            {donationPost.title}

                                        </h2>
                                        <h3 className="mb-8 text-xl text-white">
                                            Your little help transforms their reality.
                                        </h3>

                                        {
                                            donationPost.post_type_id == '2' ?
                                                <>
                                                    <div className="flex flex-col items-center justify-center mb-8 text-base text-white">
                                                        <p className="uppercase">MONTHLY SPONSORSHIP AMOUNT</p>
                                                        <p className="text-3xl"> ${donationPost.amount_required}</p>
                                                    </div>
                                                    <Formik
                                                        initialValues={{
                                                            month_count: 1,
                                                            month_to_pay: "",
                                                        }}
                                                        onSubmit={async values => handleSubmitSponsor(values)}>
                                                        {({ values, setFieldValue }) => (
                                                            <Form>
                                                                <div className="flex flex-col items-center justify-center">
                                                                    {/* month count Filed */}
                                                                    <div className="w-full mb-6">

                                                                        <Field
                                                                            type="number"
                                                                            name="month_count"
                                                                            placeholder="Enter number of month..."
                                                                            className="block w-full p-2 text-sm text-gray-900 bg-white border rounded-lg " />
                                                                    </div>

                                                                    {/* DatePicker Filed */}

                                                                    <DatePicker
                                                                        selected={values.month_to_pay}
                                                                        format="MMMM d, yyyy"
                                                                        placeholder="Select Date here..."
                                                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                                                        name="start_date"
                                                                        id="start_date"
                                                                        onChange={date =>
                                                                            setFieldValue(
                                                                                'month_to_pay',
                                                                                moment(date).format('DD-MM-yyyy'),
                                                                            )
                                                                        }
                                                                    />

                                                                    {/* Submit Card */}
                                                                    <div className="w-full modal-action ">
                                                                        <input
                                                                            type="submit"
                                                                            value="Sponsor"
                                                                            className="mb-6 h-[50px] w-full cursor-pointer rounded bg-[#13C296] text-center text-xl font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </Form>
                                                        )}
                                                    </Formik>
                                                </>

                                                :
                                                // Progress Bar
                                                <>
                                                    <div className="mb-8">
                                                        <div className="flex items-center justify-start text-base text-white">
                                                            <p className="uppercase">REQUIRED AMOUNT</p>
                                                            <p className="m-auto ml-3"> ${donationPost.amount_required}</p>
                                                        </div>
                                                        <progress
                                                            className="w-full h-4 m-auto my-1 progress progress-success"
                                                            value={Math.round(
                                                                (donationPost.amount_donated /
                                                                    donationPost.amount_required) *
                                                                100
                                                            )}
                                                            max='100'>
                                                        </progress>
                                                        <div className="flex items-center justify-between text-base text-white">
                                                            <div className="flex items-center">
                                                                <p className="uppercase">Paid</p>
                                                                <p className="m-auto ml-2"> ${donationPost.amount_donated}</p>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <p className="uppercase">Left</p>
                                                                <p className="m-auto ml-2"> ${donationPost.amount_required - donationPost.amount_donated}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Formik
                                                        initialValues={{
                                                            amount: 1,
                                                        }}
                                                        onSubmit={async values => handleSubmitDonate(values)}>
                                                        {({ values, setFieldValue }) => (
                                                            <Form>
                                                                <div className="flex flex-col items-center justify-center">
                                                                    {/* Amount Filed */}
                                                                    <div className="w-full mb-6">

                                                                        <Field
                                                                            type="number"
                                                                            name="amount"
                                                                            placeholder="Enter Amount..."
                                                                            className="block w-full p-2 text-sm text-gray-900 bg-white border rounded-lg "
                                                                        />
                                                                    </div>



                                                                    {/* Submit Card */}
                                                                    <div className="w-full modal-action ">
                                                                        <input
                                                                            type="submit"
                                                                            value="Donate"
                                                                            className="mb-6 h-[50px] w-full cursor-pointer rounded bg-[#13C296] text-center text-xl font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </Form>
                                                        )}
                                                    </Formik>
                                                </>
                                        }



                                        <div>
                                            <span className="absolute top-0 right-0">
                                                <svg
                                                    width="46"
                                                    height="46"
                                                    viewBox="0 0 46 46"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="1.39737"
                                                        cy="44.6026"
                                                        r="1.39737"
                                                        transform="rotate(-90 1.39737 44.6026)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="1.39737"
                                                        cy="7.9913"
                                                        r="1.39737"
                                                        transform="rotate(-90 1.39737 7.9913)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="13.6943"
                                                        cy="44.6026"
                                                        r="1.39737"
                                                        transform="rotate(-90 13.6943 44.6026)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="13.6943"
                                                        cy="7.9913"
                                                        r="1.39737"
                                                        transform="rotate(-90 13.6943 7.9913)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="25.9911"
                                                        cy="44.6026"
                                                        r="1.39737"
                                                        transform="rotate(-90 25.9911 44.6026)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="25.9911"
                                                        cy="7.9913"
                                                        r="1.39737"
                                                        transform="rotate(-90 25.9911 7.9913)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="38.288"
                                                        cy="44.6026"
                                                        r="1.39737"
                                                        transform="rotate(-90 38.288 44.6026)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="38.288"
                                                        cy="7.9913"
                                                        r="1.39737"
                                                        transform="rotate(-90 38.288 7.9913)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="1.39737"
                                                        cy="32.3058"
                                                        r="1.39737"
                                                        transform="rotate(-90 1.39737 32.3058)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="13.6943"
                                                        cy="32.3058"
                                                        r="1.39737"
                                                        transform="rotate(-90 13.6943 32.3058)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="25.9911"
                                                        cy="32.3058"
                                                        r="1.39737"
                                                        transform="rotate(-90 25.9911 32.3058)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="38.288"
                                                        cy="32.3058"
                                                        r="1.39737"
                                                        transform="rotate(-90 38.288 32.3058)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="1.39737"
                                                        cy="20.0086"
                                                        r="1.39737"
                                                        transform="rotate(-90 1.39737 20.0086)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="13.6943"
                                                        cy="20.0086"
                                                        r="1.39737"
                                                        transform="rotate(-90 13.6943 20.0086)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="25.9911"
                                                        cy="20.0086"
                                                        r="1.39737"
                                                        transform="rotate(-90 25.9911 20.0086)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="38.288"
                                                        cy="20.0086"
                                                        r="1.39737"
                                                        transform="rotate(-90 38.288 20.0086)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="absolute bottom-0 left-0">
                                                <svg
                                                    width="46"
                                                    height="46"
                                                    viewBox="0 0 46 46"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="1.39737"
                                                        cy="44.6026"
                                                        r="1.39737"
                                                        transform="rotate(-90 1.39737 44.6026)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="1.39737"
                                                        cy="7.9913"
                                                        r="1.39737"
                                                        transform="rotate(-90 1.39737 7.9913)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="13.6943"
                                                        cy="44.6026"
                                                        r="1.39737"
                                                        transform="rotate(-90 13.6943 44.6026)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="13.6943"
                                                        cy="7.9913"
                                                        r="1.39737"
                                                        transform="rotate(-90 13.6943 7.9913)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="25.9911"
                                                        cy="44.6026"
                                                        r="1.39737"
                                                        transform="rotate(-90 25.9911 44.6026)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="25.9911"
                                                        cy="7.9913"
                                                        r="1.39737"
                                                        transform="rotate(-90 25.9911 7.9913)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="38.288"
                                                        cy="44.6026"
                                                        r="1.39737"
                                                        transform="rotate(-90 38.288 44.6026)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="38.288"
                                                        cy="7.9913"
                                                        r="1.39737"
                                                        transform="rotate(-90 38.288 7.9913)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="1.39737"
                                                        cy="32.3058"
                                                        r="1.39737"
                                                        transform="rotate(-90 1.39737 32.3058)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="13.6943"
                                                        cy="32.3058"
                                                        r="1.39737"
                                                        transform="rotate(-90 13.6943 32.3058)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="25.9911"
                                                        cy="32.3058"
                                                        r="1.39737"
                                                        transform="rotate(-90 25.9911 32.3058)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="38.288"
                                                        cy="32.3058"
                                                        r="1.39737"
                                                        transform="rotate(-90 38.288 32.3058)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="1.39737"
                                                        cy="20.0086"
                                                        r="1.39737"
                                                        transform="rotate(-90 1.39737 20.0086)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="13.6943"
                                                        cy="20.0086"
                                                        r="1.39737"
                                                        transform="rotate(-90 13.6943 20.0086)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="25.9911"
                                                        cy="20.0086"
                                                        r="1.39737"
                                                        transform="rotate(-90 25.9911 20.0086)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                    <circle
                                                        cx="38.288"
                                                        cy="20.0086"
                                                        r="1.39737"
                                                        transform="rotate(-90 38.288 20.0086)"
                                                        fill="white"
                                                        fill-opacity="0.44"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Spinner>


                </div>
            </div>


            <Spinner loading={loading}>
                {/* Relate Articale */}
                <div className="flex flex-wrap mb-8 -mx-4">
                    <div className="w-full px-4 wow fadeInUp mt-14" data-wow-delay=".2s">
                        <h2
                            className="relative pb-5 text-2xl font-semibold text-dark sm:text-[28px]"
                        >
                            Related Articles
                        </h2>
                        <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
                    </div>

                    {
                        donationPostsRelated.slice(0, 4).map((donationPostRelated) => (
                            <DonationPostRelatedCard donationPost={donationPostRelated} />
                        ))
                    }

                </div>
            </Spinner>
        </div >
    </section >;
    //#endregion

};

export default DonatioPost;

DonatioPost.layout = User;
