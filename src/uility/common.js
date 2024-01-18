export const BASE_URL = "https://api.maybebaby.ai"
export const origin = "https://api.maybebaby.ai"
// export const ALIGN_API_URL = "https://alignapi.maybebaby.ai:8000"
// export const BOY_API_URL = "https://boyapi.maybebaby.ai:8000"
// export const GIRL_API_URL = "https://girlapi.maybebaby.ai:8000"
export const ALIGN_API_URL = "https://baby-gan-predictor-default.tenant-e5286a-devcore.knative.chi.coreweave.com"

export const BOY_API_URL = "https://baby-gan-predictor-default.tenant-e5286a-devcore.knative.chi.coreweave.com"
export const GIRL_API_URL = "https://baby-gan-predictor-default.tenant-e5286a-devcore.knative.chi.coreweave.com"


//ngrok

// export const BASE_URL = "http://localhost:3044";
// export const origin = "http://localhost:3044";

export const getToken = () => {
    return localStorage.getItem('token') || localStorage.getItem('regToken');
}

export const setToken = (value) => {
    localStorage.setItem('token', value);
}

export const removeToken = () => {
    localStorage.removeItem('token')
}

export const getUserInfo = () => {
    const info = localStorage.getItem('userInfo');
    if (info) {
        return JSON.parse(info)
    } else {
        return {}
    }
}

export const setUserInfo = (value) => {
    localStorage.setItem('userInfo', JSON.stringify(value));
}

export const removeUserInfo = () => {
    localStorage.removeItem('userInfo')
}

export const BusinessPlans = [
    {
        id:1,
        heading: "Silver",
        price: "$34.99",
        strikePay : "$47",
        discountamount : "(25% ",
        discountText: "Special Launch Price Discount)",
        subHading: "One Time Payment",
        buttonTxt: "Buy Now",
        planType: "one_time",
        listData: [
            "Uses cutting-edge AI technology to generate high-quality and realistic images.",
            "Accurate predictions based on facial features (and soon genetics).",
            "Easy to use, with a simple and intuitive interface that requires no technical expertise.",
            "Helps individuals or couples make informed decisions about starting a family and planning for the future.",
            "Eliminate the uncertainty of what a potential child may look like.",
            "Make informed decisions about partner choices and possible future children.",
            "Protects customer privacy and security, with all data kept confidential and secure.",
            "Results saved in your image gallery for 30 days of easy access.",
            "Results in just an hour or two (for faster results consider our monthly plans with VIP processing priority)",
            

        ]
    },
    {
        id:2,
        heading: "Gold",
        price: "$39",
        strikePay : "$54.99",
          discountamount : "(30% ",
        discountText: "Special Launch Price Discount)",
        popular : "POPULAR",
        subHading: "Unlimited Monthly Plan",
        buttonTxt: "Buy Now",
        planType: "monthly_plan",
        listData: [
            "Unlimited access to image predictions. Make as many as you want.",
            "Offers the convenience of a single monthly fee, without worrying about needing to keep purchasing more credits.",
            "Faster and more accurate results compared to the one time purchase version, as the AI algorithm learns and adapts your unique features and preferences over time.",
            "Personalized experience for you, with customized results based on your unique  preferences.",
            "Provides customer support and assistance throughout the subscription period.",
            "Results saved your own personal image results archive with unlimited storage limits.",
            "Offers a consistent user experience, without interruptions or delays due to slower image processing times or additional costs.",
            "Encourages regular use of the app, to track changes in your appearance over time.",
            "Early access to our Al advice coaching service for new parents and those in relationships who want unlimited advice 24 hours a day.",
            "Priority waitlist access to our private community of customers who share their results, help each other with tips, and post other new and valuable information."
        ]
    },
    {
        id:3,
        heading: "Platinum",
        price: "$99",
        strikePay : "$399",
        discountamount : "(75% ",
        discountText: "Special Launch Price Discount)",
        subHading: "Unlimited Yearly Plan",
        buttonTxt: "Buy Now",
        planType: "life_time",
        listData: [
            "All of the benefits of the monthly plan, at an even better price. Provides significant cost savings compared to the one time payment version, as well as the monthly plan.",
            "Provides access to an unlimited number of image predictions throughout the year, allowing you to use the app as much as you need without worrying about additional costs every month or whenever you are feeling curious.",
           
        ]
    }
]

export const getCorrectImage = (image) => {
    var temp = image.split("?")[0]
    return temp
}