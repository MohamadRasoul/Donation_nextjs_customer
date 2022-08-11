import User from '@/layouts/User';

const DonatioPost = ({ }) => {
    return <section className="-m-[7.5rem] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
            <div className="flex flex-wrap justify-center -mx-4">
                <div className="w-full px-4">

                    {/* Header */}
                    <div
                        className="wow fadeInUp relative z-20 mb-[60px] h-[300px] overflow-hidden rounded md:h-[400px] lg:h-[500px]"
                        data-wow-delay=".1s
            "
                    >
                        <img
                            src="/assets/images/blog/1.jpg"
                            alt="image"
                            className="object-cover object-center w-full h-full"
                        />
                        <div
                            className="absolute top-0 left-0 z-10 flex items-end w-full h-full bg-gradient-to-t from-dark-700 to-transparent"
                        >
                            <div className="flex flex-wrap items-center p-4 pb-4 sm:p-8">
                                <div className="flex items-center mb-4 mr-5 md:mr-10">
                                    <div className="w-10 h-10 mr-4 overflow-hidden rounded-full">
                                        <img
                                            src="https://api.lorem.space/image/face?w=150&h=150"
                                            alt="image"
                                            className="w-full"
                                        />
                                    </div>
                                    <p className="text-base font-medium text-white">
                                        By
                                        <a
                                            href="javascript:void(0)"
                                            className="text-white hover:opacity-70"
                                        >
                                            Samuyl Joshi
                                        </a>
                                    </p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <p
                                        className="flex items-center mr-5 text-sm font-medium text-white md:mr-8"
                                    >
                                        <span className="mr-3">
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M3.8958 8.67529H3.10715C2.96376 8.67529 2.86816 8.77089 2.86816 8.91428V9.67904C2.86816 9.82243 2.96376 9.91802 3.10715 9.91802H3.8958C4.03919 9.91802 4.13479 9.82243 4.13479 9.67904V8.91428C4.13479 8.77089 4.03919 8.67529 3.8958 8.67529Z"
                                                />
                                                <path
                                                    d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z"
                                                />
                                                <path
                                                    d="M8.93779 8.67529H8.14914C8.00575 8.67529 7.91016 8.77089 7.91016 8.91428V9.67904C7.91016 9.82243 8.00575 9.91802 8.14914 9.91802H8.93779C9.08118 9.91802 9.17678 9.82243 9.17678 9.67904V8.91428C9.17678 8.77089 9.08118 8.67529 8.93779 8.67529Z"
                                                />
                                                <path
                                                    d="M11.472 8.67529H10.6833C10.5399 8.67529 10.4443 8.77089 10.4443 8.91428V9.67904C10.4443 9.82243 10.5399 9.91802 10.6833 9.91802H11.472C11.6154 9.91802 11.711 9.82243 11.711 9.67904V8.91428C11.711 8.77089 11.5915 8.67529 11.472 8.67529Z"
                                                />
                                                <path
                                                    d="M3.8958 11.1606H3.10715C2.96376 11.1606 2.86816 11.2562 2.86816 11.3996V12.1644C2.86816 12.3078 2.96376 12.4034 3.10715 12.4034H3.8958C4.03919 12.4034 4.13479 12.3078 4.13479 12.1644V11.3996C4.13479 11.2562 4.03919 11.1606 3.8958 11.1606Z"
                                                />
                                                <path
                                                    d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z"
                                                />
                                                <path
                                                    d="M8.93779 11.1606H8.14914C8.00575 11.1606 7.91016 11.2562 7.91016 11.3996V12.1644C7.91016 12.3078 8.00575 12.4034 8.14914 12.4034H8.93779C9.08118 12.4034 9.17678 12.3078 9.17678 12.1644V11.3996C9.17678 11.2562 9.08118 11.1606 8.93779 11.1606Z"
                                                />
                                                <path
                                                    d="M11.472 11.1606H10.6833C10.5399 11.1606 10.4443 11.2562 10.4443 11.3996V12.1644C10.4443 12.3078 10.5399 12.4034 10.6833 12.4034H11.472C11.6154 12.4034 11.711 12.3078 11.711 12.1644V11.3996C11.711 11.2562 11.5915 11.1606 11.472 11.1606Z"
                                                />
                                                <path
                                                    d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z"
                                                />
                                            </svg>
                                        </span>
                                        26 Feb 2023
                                    </p>

                                    <p
                                        className="flex items-center mr-5 text-sm font-medium text-white md:mr-8"
                                    >
                                        <span className="mr-3">
                                            <svg
                                                width="18"
                                                height="13"
                                                viewBox="0 0 18 13"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M15.9754 0H2.02539C1.09727 0 0.337891 0.759375 0.337891 1.6875V10.6875C0.337891 11.3062 0.647266 11.8406 1.18164 12.15C1.43477 12.2906 1.74414 12.375 2.02539 12.375C2.30664 12.375 2.58789 12.2906 2.86914 12.15L5.34414 10.7156C5.45664 10.6594 5.56914 10.6312 5.68164 10.6312H15.9473C16.8754 10.6312 17.6348 9.87187 17.6348 8.94375V1.6875C17.6629 0.759375 16.9035 0 15.9754 0ZM16.6785 8.94375C16.6785 9.3375 16.3691 9.64687 15.9754 9.64687H5.70977C5.42852 9.64687 5.11914 9.73125 4.86602 9.87187L2.39102 11.3063C2.16602 11.4187 1.91289 11.4187 1.68789 11.3063C1.46289 11.1938 1.35039 10.9688 1.35039 10.7156V1.6875C1.35039 1.29375 1.65977 0.984375 2.05352 0.984375H16.0035C16.3973 0.984375 16.7066 1.29375 16.7066 1.6875V8.94375H16.6785Z"
                                                />
                                                <path
                                                    d="M12.5721 3.375H5.03457C4.75332 3.375 4.52832 3.6 4.52832 3.88125C4.52832 4.1625 4.75332 4.3875 5.03457 4.3875H12.6002C12.8814 4.3875 13.1064 4.1625 13.1064 3.88125C13.1064 3.6 12.8533 3.375 12.5721 3.375Z"
                                                />
                                                <path
                                                    d="M11.3908 6.55322H5.03457C4.75332 6.55322 4.52832 6.77822 4.52832 7.05947C4.52832 7.34072 4.75332 7.56572 5.03457 7.56572H11.4189C11.7002 7.56572 11.9252 7.34072 11.9252 7.05947C11.9252 6.77822 11.6721 6.55322 11.3908 6.55322Z"
                                                />
                                            </svg>
                                        </span>
                                        05
                                    </p>
                                    <p className="flex items-center text-sm font-medium text-white">
                                        <span className="mr-3">
                                            <svg
                                                width="20"
                                                height="12"
                                                viewBox="0 0 20 12"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z"
                                                />
                                                <path
                                                    d="M19.7559 5.625C17.6934 2.375 14.1309 0.4375 10.2559 0.4375C6.38086 0.4375 2.81836 2.375 0.755859 5.625C0.630859 5.84375 0.630859 6.125 0.755859 6.34375C2.81836 9.59375 6.38086 11.5312 10.2559 11.5312C14.1309 11.5312 17.6934 9.59375 19.7559 6.34375C19.9121 6.125 19.9121 5.84375 19.7559 5.625ZM10.2559 10.4375C6.84961 10.4375 3.69336 8.78125 1.81836 5.96875C3.69336 3.1875 6.84961 1.53125 10.2559 1.53125C13.6621 1.53125 16.8184 3.1875 18.6934 5.96875C16.8184 8.78125 13.6621 10.4375 10.2559 10.4375Z"
                                                />
                                            </svg>
                                        </span>
                                        05
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-wrap mb-10 -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div>
                                <h2
                                    className="wow fadeInUp mb-6 text-[26px] font-bold leading-snug text-dark sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug"
                                    data-wow-delay=".1s"
                                >
                                    Facing a challenge is kind of a turn-on for an easy rider
                                </h2>
                                <p
                                    className="mb-8 text-base leading-relaxed wow fadeInUp text-body-color"
                                    data-wow-delay=".1s"
                                >
                                    There's a time and place for everything… including asking
                                    for reviews. For instance: you should not asking for a
                                    review on your checkout page. The sole purpose of this page
                                    is to guide your customer to complete their purchase, and
                                    this means that the page should be as minimalist and
                                    pared-down possible. You don't want to have any unnecessary
                                    elements or Call To Actions.
                                </p>
                                <p
                                    className="mb-10 text-base leading-relaxed wow fadeInUp text-body-color"
                                    data-wow-delay=".1s"
                                >
                                    There's a time and place for everything… including asking
                                    for reviews. For instance: you should not asking for a
                                    review on your checkout page. The sole purpose of this page
                                    is to guide your customer to complete their purchase, and
                                    this means that the page should be as minimalist and
                                    pared-down possible. You don't want to have any unnecessary
                                    elements or Call To Actions.
                                </p>
                                
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div>
                                <div
                                    className="wow fadeInUp relative mb-12 overflow-hidden rounded bg-primary py-[60px] px-11 text-center lg:px-8"
                                    data-wow-delay=".1s
                  "
                                >
                                    <h3 className="mb-8 text-2xl font-semibold text-white">
                                    Donate Here
                                    </h3>
                                    {/* <p className="mb-8 text-base text-white">
                                        Donate Here
                                    </p> */}
                                    <form>
                                        <input
                                            type="email"
                                            placeholder="Donate ..."
                                            className="mb-4 h-[50px] w-full rounded border border-transparent bg-white bg-opacity-20 text-center text-sm font-medium text-white placeholder-white outline-none focus:border-white focus-visible:shadow-none"
                                        />
                                        <input
                                            type="submit"
                                            value="Donate Now"
                                            className="mb-6 h-[50px] w-full cursor-pointer rounded bg-[#13C296] text-center text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                                        />
                                    </form>

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

                    
                </div>
            </div>


            {/* Relate Articale */}
            {/* <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 wow fadeInUp mt-14" data-wow-delay=".2s">
                    <h2
                        className="relative pb-5 text-2xl font-semibold text-dark sm:text-[28px]"
                    >
                        Related Articles
                    </h2>
                    <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-6/12">
                    <div className="mb-10 wow fadeInUp group" data-wow-delay=".1s">
                        <div className="mb-8 overflow-hidden rounded">
                            <a href="blog-details.html" className="block">
                                <img
                                    src="assets/images/blog/blog-01.jpg"
                                    alt="image"
                                    className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <div>
                            <span
                                className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary"
                            >
                                Dec 22, 2023
                            </span>
                            <h3>
                                <a
                                    href="blog-details.html"
                                    className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                >
                                    Meet AutoManage, the best AI management tools
                                </a>
                            </h3>
                            <p className="text-base text-body-color">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-6/12">
                    <div className="mb-10 wow fadeInUp group" data-wow-delay=".15s">
                        <div className="mb-8 overflow-hidden rounded">
                            <a href="blog-details.html" className="block">
                                <img
                                    src="assets/images/blog/blog-02.jpg"
                                    alt="image"
                                    className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <div>
                            <span
                                className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary"
                            >
                                Mar 15, 2023
                            </span>
                            <h3>
                                <a
                                    href="blog-details.html"
                                    className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                >
                                    How to earn more money as a wellness coach
                                </a>
                            </h3>
                            <p className="text-base text-body-color">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-6/12">
                    <div className="mb-10 wow fadeInUp group" data-wow-delay=".2s">
                        <div className="mb-8 overflow-hidden rounded">
                            <a href="blog-details.html" className="block">
                                <img
                                    src="assets/images/blog/blog-03.jpg"
                                    alt="image"
                                    className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <div>
                            <span
                                className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary"
                            >
                                Jan 05, 2023
                            </span>
                            <h3>
                                <a
                                    href="blog-details.html"
                                    className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                >
                                    The no-fuss guide to upselling and cross selling
                                </a>
                            </h3>
                            <p className="text-base text-body-color">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </section>;
};

export default DonatioPost;

DonatioPost.layout = User;
