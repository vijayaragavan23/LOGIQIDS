import React from 'react'
import NewsMasonry from './NewsMasonry';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, ListItemIcon, Divider } from '@mui/material';
import axios from 'axios';

function News() {

    const API_KEY = "ba57bc15204e4fd6a1b4c44ede43f518";

    const [current, setCurrent] = React.useState("general");
    const [drawer, setDrawer] = React.useState(false)
    const toggleDrawer = () => setDrawer(!drawer)
    const change = (category) => {
        setCurrent(category)
        setDrawer(false)
    }

    React.useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${current}&apiKey=${API_KEY}`)
            .then(res => {
                console.log(res.data)
                setNews(res.data)
            })
    }, [current])

    const [news, setNews] = React.useState({
        "status": "ok",
        "totalResults": 38,
        "articles": [
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Bengal To Close Schools From Tomorrow, All Offices To Work With 50% Staff - NDTV",
                "description": "Bengal Covid Curbs: Bengal's Covid restrictions include closing of all schools and colleges, as well as cinema halls, gyms and swimming pools, and beauty salons. Attendance at government and private offices will be capped at 50 per cent.",
                "url": "https://www.ndtv.com/india-news/bengal-to-close-schools-cinema-halls-salons-and-spas-from-tomorrow-all-offices-to-work-with-50-staff-2684436",
                "urlToImage": "https://c.ndtvimg.com/2018-10/5tp21gdg_kolkata-generic_625x300_04_October_18.jpg",
                "publishedAt": "2022-01-02T10:13:00Z",
                "content": "Bengal Covid Restrictions: Bengal has 13,300 active COVID-19 cases at this time (File)\r\nKolkata: Bengal on Sunday re-imposed certain Covid restrictions - closing of schools and colleges, and capping ??? [+1992 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizbot"
                },
                "author": "Tanaya Dutta",
                "title": "Vivo Y21T With Snapdragon 680, 50MP Triple Cameras Goes Official; When Is It Coming To India? - Gizbot",
                "description": "Vivo has announced a mid-range device named the Vivo Y21T in the international market. The handset comes with a Snapdragon processor, Android 11 OS, triple cameras, and so on.",
                "url": "https://www.gizbot.com/mobile/news/vivo-y21t-with-snapdragon-680-50mp-triple-cameras-goes-official-when-is-it-coming-to-india-078487.html",
                "urlToImage": "https://www.gizbot.com/img/2022/01/vivo-y21t-1641113465.jpg",
                "publishedAt": "2022-01-02T08:54:11Z",
                "content": "Vivo has announced a mid-range device named the Vivo Y21T in the international market. The handset comes with a Snapdragon processor, Android 11 OS, triple cameras, and so on. The Vivo Y21T will be a??? [+2483 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "ANI",
                "title": "Health care workers with poor sleep pattern more likely to report depression, anxiety: Study - Hindustan Times",
                "description": "The new study finds that health care workers with poor sleep were twice more likely to report symptoms of depression than their better-rested colleagues.?? | Health",
                "url": "https://www.hindustantimes.com/lifestyle/health/health-care-workers-with-poor-sleep-pattern-more-likely-to-report-depression-anxiety-study-101641111493144.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/01/02/1600x900/50a3aa5a77b5429bae338a53625d5e9e-50a3aa5a77b5429bae338a53625d5e9e-1_1610637254687_1610637263983_1641111757843.jpg",
                "publishedAt": "2022-01-02T08:29:45Z",
                "content": "In a recent study, researchers have studied the effect of the Covid-19 pandemic on health care workers' sleep patterns and the potentially damaging consequences of sleep disturbance on their mental h??? [+3840 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "'Falsehood Doesn't Seem To Stop': Maharashtra Minister Targets Probe Body - NDTV",
                "description": "Maharashtra minister Nawab Malik on Sunday fired a fresh salvo at the Narcotics Control Bureau, alleging that an NCB officer called a 'panch' to sign back-dated panchnama papers in a case.",
                "url": "https://www.ndtv.com/india-news/ncb-official-called-up-panch-to-sign-back-dated-papers-claims-nawab-malik-2684299",
                "urlToImage": "https://c.ndtvimg.com/2021-11/lphboulo_nawab-malik-pti_650x400_10_November_21.jpg",
                "publishedAt": "2022-01-02T08:27:35Z",
                "content": "Nawab Malik's son-in-law was arrested in a drugs case last year. (File photo)\r\nMumbai: Maharashtra minister Nawab Malik on Sunday fired a fresh salvo at the Narcotics Control Bureau, alleging that an??? [+2707 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Changes In Blood Not Heart Could Be The Cause Of Cardiac Thrombosis In COVID Patients | TheHealthSite.com - TheHealthSite",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMigAFodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9uZXdzL2NoYW5nZXMtaW4tYmxvb2Qtbm90LWhlYXJ0LWNvdWxkLWJlLXRoZS1jYXVzZS1vZi1jYXJkaWFjLXRocm9tYm9zaXMtaW4tY292aWQtcGF0aWVudHMtODU1NjA1L9IBAA?oc=5",
                "urlToImage": null,
                "publishedAt": "2022-01-02T08:17:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": null,
                "title": "On cam: 4-year-old girl bitten, dragged by dogs in Bhopal, hospitalised - Times of India",
                "description": "In a horrific video captured on CCTV in Madhya Pradesh's capital Bhopal, a four-year-old girl was chased, pulled to the ground and then bitten by a group of dogs. The stray dogs left the girl only after they were chased away by a passerby. The child has been ???",
                "url": "https://timesofindia.indiatimes.com/videos/news/on-cam-4-year-old-girl-bitten-dragged-by-dogs-in-bhopal-hospitalised/videoshow/88646368.cms",
                "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-88646368,imgsize-63442.cms",
                "publishedAt": "2022-01-02T08:06:55Z",
                "content": "Jan 02, 2022, 01:36PM ISTSource: TOI.inIn a horrific video captured on CCTV in Madhya Pradesh's capital Bhopal, a four-year-old girl was chased, pulled to the ground and then bitten by a group of dog??? [+233 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "Hindustantimes",
                "title": "Severe cold wave grips north India, mercury drops to freezing levels in these states - Hindustan Times",
                "description": "States across India are confronting cold winter waves. Delhi, J&K and Himachal Pradesh recorded markedly low temperatures today. | Latest News India",
                "url": "https://www.hindustantimes.com/india-news/severe-cold-wave-grips-north-india-mercury-drops-to-freezing-levels-in-these-states-101641109152967.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/01/02/1600x900/fire_1641109257830_1641109259985.jpg",
                "publishedAt": "2022-01-02T07:46:17Z",
                "content": "A severe cold wave condition continued to prevail in several parts of the country on Sunday with temperatures dropping to freezing levels in the past few hours.\r\nIn Delhi, the cold weather was accomp??? [+1111 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India Today"
                },
                "author": null,
                "title": "Noise ColorFit Caliber fitness tracker with body temperature monitoring launched at Rs 1,999 - India Today",
                "description": "The Noise ColorFit Caliber smartwatch is priced at Rs 3,999, but it is currently available for Rs 1,999 as an introductory offer.",
                "url": "https://www.indiatoday.in/technology/news/story/noise-colorfit-caliber-fitness-tracker-with-body-temperature-monitoring-launched-at-rs-1-999-1895030-2022-01-02",
                "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/noise_colorfit_caliber_body_te-647x363.jpeg?L_1q3yuNRUpgmNxKx1t4Wj5dH47qAjC5",
                "publishedAt": "2022-01-02T07:26:52Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "India.com"
                },
                "author": "Zee Media Bureau",
                "title": "Tata Motors outnumbers Hyundai to become the second biggest carmaker in India - Zee News",
                "description": "2022 Upcoming SUVs in India: Hyundai Creta facelift, Mahindra Scorpio and more  Tata Motors PV business growth journey continued and set several new milestones during the quarter despite witnessing a shortfall in production due to the ongoing semi-conductor c???",
                "url": "https://zeenews.india.com/mobility/tata-motors-outnumbers-hyundai-to-become-the-second-biggest-carmaker-in-india-2424621.html",
                "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/01/02/1001672-tata-motors-1.jpg",
                "publishedAt": "2022-01-02T07:25:09Z",
                "content": "For the first time in decades, Tata Motors, the homegrown automaker has trumped South Korean Hyundai to become second highest car selling brand in India. Maruti Suzuki remains the top carmaker in the??? [+1402 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "5 Dead, 21 Injured In Russia Bus Accident - NDTV",
                "description": "Five people were killed and 21 were injured in a bus accident south of Moscow in the early hours of Sunday, Russian authorities said.",
                "url": "https://www.ndtv.com/world-news/5-dead-21-injured-in-russia-bus-accident-2684231",
                "urlToImage": "https://c.ndtvimg.com/2019-01/bh5lk67_car-accident-generic-unsplash-650_625x300_24_January_19.jpg",
                "publishedAt": "2022-01-02T07:17:00Z",
                "content": "Two of the injured were under-age (Representational)\r\nMoscow: Five people were killed and 21 were injured in a bus accident south of Moscow in the early hours of Sunday, Russian authorities said.\r\nRu??? [+794 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Moneycontrol"
                },
                "author": null,
                "title": "Six new cars revving up to hit Indian roads in January alone - Moneycontrol.com",
                "description": "There are too many launches scheduled for 2022 and putting them all down in a list with very little information on each is just unnecessary. Instead, here???s one of just January",
                "url": "https://www.moneycontrol.com/news/automobile/six-new-cars-revving-up-to-hit-indian-roads-in-january-alone-7890641.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/01/cars-E-653x435.jpg",
                "publishedAt": "2022-01-02T07:11:16Z",
                "content": "2022 is set to see a whole host of cars hitting the Indian streets for the first time, some with facelifts, and some running on electricity.\r\nBut, with the sheer number that we expect, we are making ??? [+5143 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News18"
                },
                "author": "Payal Mehta",
                "title": "IT Ministry Acts Against App Selling Photos of Muslim Women, Says GitHub, CERT Have Blocked 'Bulli Bai' - News18",
                "description": "The app called 'Bulli Bai' looks like another version of 'Sulli Deals' that triggered a massive controversy in July 2021.",
                "url": "https://www.news18.com/news/india/it-ministry-acts-against-app-selling-photos-of-muslim-women-says-github-cert-have-blocked-bulli-bai-4615484.html",
                "urlToImage": "https://images.news18.com/ibnlive/uploads/2021/10/ashwini-vaishnaw-164110738816x9.jpg",
                "publishedAt": "2022-01-02T07:11:07Z",
                "content": "After another version of Sulli Deals surfaced on the internet displaying Muslim women for sale online, the IT ministry has claimed to have acted swiftly on the matter. The app called Bulli Bai looks ??? [+2274 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India Today"
                },
                "author": "IndiaToday.in",
                "title": "New Zealand vs Bangladesh, 1st Test Day 2: As it happened - India Today",
                "description": "New Zealand (NZ) vs Bangladesh (BAN), 1st Test Day 2 Highlights from Mount Maunganui: Bangladesh dominated proceedings on Day 2, winning all three sessions as they shone with both bat and ball in Mount Maunganui. Najmul Hossain Shanto and Mahmudul Hasan Joy's???",
                "url": "https://www.indiatoday.in/sports/cricket/story/new-zealand-vs-bangladesh-1st-test-nz-v-ban-day-2-live-score-updates-mount-maunganui-1894970-2022-01-02",
                "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202201/nzvban1stesstday2livescore-647x363.jpeg?X2sX41c.UNQejNjVdVYYWP8wz9aT7wTr",
                "publishedAt": "2022-01-02T06:47:20Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Kajal Aggarwal And Husband Gautam Kitchlu Announce Their Pregnancy - NDTV Movies",
                "description": "Gautam Kitchlu dropped a picture of his wife and actor Kajal Aggarwal on his Instagram account",
                "url": "https://www.ndtv.com/entertainment/kajal-aggarwal-and-husband-gautam-kitchlu-announce-their-pregnancy-2684211",
                "urlToImage": "https://c.ndtvimg.com/2022-01/6ogup7io_kajal-aggarwal_625x300_02_January_22.jpg",
                "publishedAt": "2022-01-02T06:40:31Z",
                "content": "Kajal Aggarwal posted this. (Image courtesy: kajalaggarwalofficial)\r\nHighlights\r\n<ul><li>Kajal Aggarwal posted a picture on Instagram\r\n</li><li>\"Here's looking at you 2022,\" wrote Gautam Kitchlu\r\n</l??? [+1785 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "Vedant Yadav",
                "title": "India Predicted XI For 2nd Test vs South Africa: Will Hanuma Vihari Get His Chance In Johannesburg? - NDTVSports.com",
                "description": "SA vs IND: India face South Africa in the 2nd Test of the three-match series, starting from January 3 at the Wanderers Stadium in Johannesburg.",
                "url": "https://sports.ndtv.com/south-africa-vs-india-2021-22/india-predicted-xi-for-2nd-test-vs-south-africa-will-hanuma-vihari-get-his-chance-in-johannesburg-2684170",
                "urlToImage": "https://c.ndtvimg.com/2021-12/65flk4pg_hanuma-vihari_625x300_01_December_21.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
                "publishedAt": "2022-01-02T06:02:04Z",
                "content": "India face South Africa in the 2nd Test of the three-match series, starting from January 3 at the Wanderers Stadium in Johannesburg. The Indian team took a 1-0 lead in the series with a 113-run win a??? [+3376 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Entertainment Desk",
                "title": "Varun Dhawan begins 2022 with dad David Dhawan's blessings, fans call them ???perfect father-son jodi??? - Hindustan Times",
                "description": "Varun Dhawan took to Instagram on Sunday to share pictures with David Dhawan, leading to fans showering love upon them. | Bollywood",
                "url": "https://www.hindustantimes.com/entertainment/bollywood/varun-dhawan-begins-2022-with-dad-david-dhawan-s-blessings-fans-call-them-perfect-father-son-jodi-101641101347804.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/01/02/1600x900/Varun_and_David_1641101412510_1641101438389.jpg",
                "publishedAt": "2022-01-02T05:48:45Z",
                "content": "Actor Varun Dhawan took to his Instagram on Sunday morning to share a couple of pictures with dad David Dhawan, seeking his blessings to begin the New Year.\r\nThe pictures show Varun touching Davids f??? [+1543 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Moneycontrol"
                },
                "author": null,
                "title": "Dalal Street Week Ahead | 10 key factors that will keep traders busy next week - Moneycontrol.com",
                "description": "Investors should focus on the long-term picture rather than the short-term headwinds and position their portfolio accordingly, says Yesha Shah of Samco Securities",
                "url": "https://www.moneycontrol.com/news/business/markets/dalal-street-week-ahead-10-key-factors-that-will-keep-traders-busy-next-week-24-7890261.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2017/05/BSE_Sensex_Markets_Stock_market_Dalal_street1-770x433.jpg",
                "publishedAt": "2022-01-02T05:35:37Z",
                "content": "The market gained 2 percent amid low volumes in the New Year holiday week as investors and traders closely followed the Omicron situation.\r\nThe bulls gained more strength in the week ended December 3??? [+9947 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "TIMESOFINDIA.COM",
                "title": "Coronavirus: Two new Omicron symptoms that have come to light - Times of India",
                "description": "The rapid surge in the number of Omicron cases has become a major source of concern. Several countries have been impacted and health officials around the world have urged people to take all necessary precautions.",
                "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/coronavirus-two-new-omicron-symptoms-that-have-come-to-light/photostory/88614663.cms",
                "urlToImage": "https://static.toiimg.com/photo/88614676.cms",
                "publishedAt": "2022-01-02T05:30:00Z",
                "content": "As of now, the Omicron variant has been associated with mild infections, which has resulted in a number of symptoms resembling common cold.\r\nHaving headaches, a sore throat, a runny nose, feeling fat??? [+596 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India.com"
                },
                "author": "ANI",
                "title": "BlackBerry phones to die on January 4; here`s how the brand came to an end - Zee News",
                "description": "BlackBerry has announced that it will discontinue offering significant services for its existing devices in 2022. As per Mashable, from January 4, the business`s smartphones will be without provisioning services.",
                "url": "https://zeenews.india.com/technology/blackberry-phones-to-die-on-january-4-here-s-how-the-brand-came-to-an-end-2424590.html",
                "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/01/02/1001640-untitled-design-39.jpg",
                "publishedAt": "2022-01-02T05:07:17Z",
                "content": "New Delhi: BlackBerry has announced that it will discontinue offering significant services for its existing devices in 2022. As per Mashable, from January 4, the business`s smartphones will be withou??? [+2425 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Livemint",
                "title": "Delhi: Time to switch your 15-yr-old petrol car! Govt to deregister them soon - Mint",
                "description": "Yesterday, the Delhi government deregistered more than one lakh 10-year-old diesel cars.??Owners of 10-year-old diesel vehicles have now the option to retrofit them with electric kits or sell them in other states",
                "url": "https://www.livemint.com/auto-news/delhi-time-to-switch-your-15-yr-old-petrol-car-govt-to-deregister-them-soon-11641094297713.html",
                "urlToImage": "https://images.livemint.com/img/2022/01/02/600x338/Delhi-traffic__1641098563421_1641098564850.jpg",
                "publishedAt": "2022-01-02T04:45:47Z",
                "content": "Delhi: If you own a petrol car or a two-wheeler, which is older than 15 years then its's time that you switch to a new car, or retrofit them with an electric kit. In an upcoming crackdown on old petr??? [+2044 chars]"
            }
        ]
    })

    return (
        <div>
            <Drawer
                anchor="left"
                open={drawer}
                onClose={toggleDrawer}
            >
                <List className="drawer__list">
                    <ListItem button style={{ fontSize: "25px", fontWeight: "500" }} onClick={toggleDrawer}>
                        Categories&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <IconButton>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </ListItem>
                    <Divider light={true} />
                    <ListItem button className="list_item" onClick={() => change("business")}>
                        <ListItemText primary="Business" className="list_item"/>
                    </ListItem>
                    <ListItem button className="list_item" onClick={() => change("entertainment")}>
                        <ListItemText primary="Entertainment" className="list_item"/>
                    </ListItem>
                    <ListItem button className="list_item" onClick={() => change("general")}>
                        <ListItemText primary="General" className="list_item"/>
                    </ListItem>
                    <ListItem button className="list_item" onClick={() => change("health")}>
                        <ListItemText primary="Health" className="list_item"/>
                    </ListItem>
                    <ListItem button className="list_item" onClick={() => change("science")}>
                        <ListItemText primary="Science" className="list_item"/>
                    </ListItem>
                    <ListItem button className="list_item" onClick={() => change("sports")}>
                        <ListItemText primary="Sports" className="list_item"/>
                    </ListItem>
                    <ListItem button className="list_item" onClick={() => change("technology")}>
                        <ListItemText primary="Technology" className="list_item"/>
                    </ListItem>
                </List>
            </Drawer>
            <div className='header'>
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon fontSize="large" />
                </IconButton>
                <div
                    style={{
                        flex: 1,
                        textAlign: "center",
                        fontSize: "30px",
                        fontWeight: "bold",
                        color: "#000"
                    }}
                >
                    LogIQids News
                </div>
            </div>
            <NewsMasonry articles={news.articles} />
        </div>
    )
}

export default News
