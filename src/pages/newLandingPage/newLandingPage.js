import React, {  useState } from "react";
import Slider from "react-slick";
import "./newLandingPage.css";

import videoimg from "../../asset/image/video.png";
import playbt from "../../asset/image/play-bt.png";
import bannerimg from "../../asset/image/banner-img.png";
import down from "../../asset/image/down.png";
import logo11 from "../../asset/image/logo-11.png";
import yahoo from "../../asset/image/logo-22.png";
import tiktok from "../../asset/image/logo-3.png";
import jimmy from "../../asset/image/logo-4.png";
import newmen from "../../asset/image/new-men.png";
import newmen1 from "../../asset/image/new-men-1.png";
import newgirl1 from "../../asset/image/new-girl-1.png";
import newgirl from "../../asset/image/new-girl.png";
import checked from "../../asset/image/ch-1.png";
import cancel from "../../asset/image/ch-2.png";
import cir3 from "../../asset/image/cir-3.png";
import cir2 from "../../asset/image/cir-2.png";
import cir1 from "../../asset/image/cir-1.png";
import Testimonial from "../../asset/image/testimonial.png";
import rec from "../../asset/image/rec.png";
import rec1 from "../../asset/image/rec-1.png";

import doll from "../../asset/image/doll.png";
import laptop from "../../asset/image/laptop.png";
import Footer from "../footer/Footer";
import { BusinessPlans } from "../../uility/common";
import PriceCard from "../../components/PriceCards/PriceCard";
import Header from "../../components/MainHeader/Header";

const NewLandingPage = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  const [showFullText, setShowFullText] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);
  const [showFullNote, setShowFullNote] = useState(false);

  const toggleContent = () => {
    setShowFullNote(!showFullNote);
  };

  const boldline = "Please note";

  const noticeContent =
    " that the one time purchase version of our AI Child Prediction App only gives you three chances to generate a desirable result before you have to pay again. We encourage you to double check that the images you select for A.I. analysis are the exact ones you want to use, as you will have to pay again to generate another result if you make a mistake. If you want to avoid this inconvenience and have access to unlimited image variations and faster results that only take minutes instead of several hours to create, we invite you to upgrade to our $99 per year subscription. With this plan, you'll get even more accurate predictions over time as our A.I algorithms learns and adapts to your unique facial feature (and soon genetics). Upgrade now to start visualizing your future family with confidence.";
  console.log(noticeContent);

  const toggleExpand = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  const handleToggle = () => {
    setShowFullText(!showFullText);
  };

  const textContent = [
    "Are you curious who your baby will look like? We have invented the world’s first technology to make it happen with just two photos! Our advanced A.I. algorithm works in real-time to create a prediction of your future baby’s appearance.",
    "Discover your baby’s face shape, skin tone, hair color, eye color and more - all with the MaybeBaby baby face generator! Don’t wait - get started now to unlock the mystery of your future child’s face.",
    "Just upload head shots of both partners and our newly developed algorithms will do the rest. With high quality and color rendering, the baby’s features will match those of the parents’. Get your baby preview today with the Future Baby Generator!",
    "Make your baby look just like you! Choose a gender and age, or let us surprise you. Customize your baby’s face with our easy-to-use settings; the perfect way to create a unique and special little preview of what the future might hold!",
    "Create your perfect baby in minutes with our easy-to-follow instructions! Our advanced artificial intelligence automatically generates your baby’s face, so make sure to follow the directions carefully to help the technology create the most accurate facial analysis possible.",
  ];

  const trimmedText = showFullText ? textContent : textContent.slice(0, 2);
  const buttonText = showFullText ? "Read Less" : "Read More";

  const suggest = [
    {
      id: 1,
      text: "Upload Photos",
      desc: "Upload high-quality photos or take high-quality selfies.",
    },
    {
      id: 2,
      text: "Facing Frontward",
      desc: "Your face and the face of your partner should be facing frontward, with no glasses or hair covering the face.",
    },
    {
      id: 3,
      text: "Optimal Visibility",
      desc: "Make sure your face is clearly visible and it occupies most space in the photo.",
    },

    {
      id: 4,
      text: "Personalize Your Baby",
      desc: "If you wish to generate a result with a celebrity (e.g. movie stars, athletes, musicians, and even Youtube celebrities) simply upload an image of them.",
    },

    {
      id: 5,
      text: "Baby Customization",
      desc: "Baby customization settings include baby’s name, gender, and age.",
    },

    {
      id: 6,
      text: "Change settings",
      desc: "If you want to change customization settings to generate a new baby you will have to buy another image or you can create as many images as you want while your premium membership is active.",
    },

    {
      id: 7,
      text: "Download & share",
      desc: "You can download baby photos to your computer or phone, or easily share them with your friends or family.",
    },

    {
      id: "?",
      text: "Get in Touch with Us",
      desc: "We are here to help in case you have any questions or concerns. Simply contact us by using the Contact Us page.",
    },
  ];

  const data = [
    {
      id: 1,
      Testimonial: Testimonial,
      content:
        " I stumbled upon MaybeBaby while browsing the internet, and it turned out to be a gem! The website is beautifully designed, and the concept is simply brilliant. It's amazing how it combines both parents' features to create realistic baby images. ",
      src: cir3,
      name: "Tatiana Siphron",
      title: "Customer",
    },
    {
      id: 2,
      Testimonial: Testimonial,
      content:
        "MaybeBaby exceeded all my expectations! I was skeptical at first, but after giving it a try, I was blown away. The accuracy of the generated baby images is astonishing. It made the whole process of imagining our future child so much more real and exciting.",
      src: cir2,
      name: "Justin Westervelt",
      title: "Customer",
    },
    {
      id: 3,
      Testimonial: Testimonial,
      content:
        "MaybeBaby has been a game-changer for me and my husband. We were curious about what our baby might look like and stumbled upon this amazing website. Not only is it user-friendly and entertaining, but the generated images are remarkably accurate!",
      src: cir1,
      name: "Nolan Franci",
      title: "Customer",
    },
    {
      id: 4,
      Testimonial: Testimonial,
      content:
        " I stumbled upon MaybeBaby while browsing the internet, and it turned out to be a gem! The website is beautifully designed, and the concept is simply brilliant. It's amazing how it combines both parents' features to create realistic baby images. ",
      src: cir3,
      name: "Tatiana Siphron",
      title: "Customer",
    },
    {
      id: 5,
      Testimonial: Testimonial,
      content:
        "MaybeBaby exceeded all my expectations! I was skeptical at first, but after giving it a try, I was blown away. The accuracy of the generated baby images is astonishing. It made the whole process of imagining our future child so much more real and exciting.",
      src: cir2,
      name: "Justin Westervelt",
      title: "Customer",
    },
    {
      id: 6,
      Testimonial: Testimonial,
      content:
        "MaybeBaby has been a game-changer for me and my husband. We were curious about what our baby might look like and stumbled upon this amazing website. Not only is it user-friendly and entertaining, but the generated images are remarkably accurate!",
      src: cir1,
      name: "Nolan Franci",
      title: "Customer",
    },
  ];

  const suggestSetting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };

  const Sliderdata = [
    { image: doll },
    { image: doll },
    { image: doll },
    { image: doll },
    { image: doll },
    { image: doll },
  ];

  const Pricesetting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(settings.initialSlide);

  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.value);
  };
  // const [isToggled, setIsToggled] = useState(false);

  const hasItems = data.length >= 0;
  console.log(hasItems, "hasItems");
  return (
    <div>
      <Header />

      <section className="video-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="video-content">
                <p class="Unleash-p">
                  Unleash Your Curiosity :
                  <span> Take a Peek Into Your future with MaybeBaby</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="video-sec">
                <img className="img-ab1" src={videoimg} />
                <div className="abs-video">
                  <p className="Maybebaby">
                    Maybebaby utilizes AI technology to combine facial features
                    of two parents and generate a virtual representation of
                    their potential baby's face.
                  </p>
                </div>
                <a href="">
                  <img className="img-ab2" src={playbt} />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="know-content">
                <p className="know-content-p">Meet Your Future Baby</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="know-content-left desktop-future">
                <p>
                  Are you curious who your baby will look like? We have invented
                  the world’s first technology to make it happen with just two
                  photos! Our advanced A.I. algorithm works in real-time to
                  create a prediction of your future baby’s appearance.
                </p>
                <p>
                  Discover your baby’s face shape, skin tone, hair color, eye
                  color and more - all with the MaybeBaby baby face generator!
                  Don’t wait - get started now to unlock the mystery of your
                  future child’s face...
                </p>
                <p>
                  Just upload head shots of both partners and our newly
                  developed algorithms will do the rest. With high quality and
                  color rendering, the baby’s features will match those of the
                  parents’. Get your baby preview today with the Future Baby
                  Generator!
                </p>
                <p>
                  Make your baby look just like you! Choose a gender and age, or
                  let us surprise you. Customize your baby’s face with our
                  easy-to-use settings; the perfect way to create a unique and
                  special little preview of what the future might hold!
                </p>
                <p>
                  Create your perfect baby in minutes with our easy-to-follow
                  instructions! Our advanced artificial intelligence
                  automatically generates your baby’s face, so make sure to
                  follow the directions carefully to help the technology create
                  the most accurate facial analysis possible.
                </p>
              </div>

              <div className="know-content-left mobile-future ">
                {trimmedText.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
                {textContent.length > 2 && (
                  <button onClick={handleToggle}>{buttonText}</button>
                )}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="know-content-right">
                <img className="img-ab3" src={bannerimg} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="upload-content">
                <p className="upload-content-p">
                  <img className="img-ab5" src={down} /> Upload a father and
                  mother photo to start your A.I. face analysis and to generate
                  a baby prediction{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="suggestion-new">
        <div className="container">
          <h6 className="howwork-header">How It Works</h6>

          <div className="row dextop-how-work">
            <div className="col-lg-12">
              <div className="row">
                {suggest.map((item) => (
                  <div className="col-lg-3 col-md-6" key={item.id}>
                    <div className="howwork-common">
                      <div className="common-rotate">
                        <div className="rotate-div"></div>
                        <p>{item.id}</p>
                      </div>
                      <p className="UploadPhotos">{item.text}</p>
                      {item.id === 4 || item.id === 6 ? (
                        <>
                          {expandedItems.includes(item.id) ? (
                            <p className="UploadPhotos1">{item.desc}</p>
                          ) : (
                            <p className="UploadPhotos1">
                              {item.desc.slice(0, 100)}
                              {item.desc.length > 100 && "... "}
                              <span
                                className="read-more-link"
                                onClick={() => toggleExpand(item.id)}
                              >
                                Read More
                              </span>
                            </p>
                          )}
                          {expandedItems.includes(item.id) && (
                            <p
                              className="read-more-link"
                              onClick={() => toggleExpand(item.id)}
                            >
                              Read Less
                            </p>
                          )}
                        </>
                      ) : (
                        <p className="UploadPhotos1">{item.desc}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row mobile-how-work">
            <div className="col-lg-12">
              <div className="slider-mobile-1">
                <Slider {...suggestSetting}>
                  {suggest.map((suggestion) => (
                    <div className="howwork-common">
                      <div className="common-rotate">
                        <div className="rotate-div"></div>
                        <p>{suggestion.id}</p>
                      </div>
                      <p className="UploadPhotos">{suggestion.text}</p>
                      <p className="UploadPhotos1">{suggestion.desc}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="imageSection-new">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="test-lef BT">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="width-left">
                      <div className="row innerImage">
                        <div className="col-lg-6 col-md-6 col-6">
                          <div className="checkImg">
                            <img className="suggest-img" src={newmen} />
                            <img className="suggest-checked" src={checked} />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6">
                          <div className="checkImg">
                            <img className="suggest-img" src={newmen1} />
                            <img className="suggest-checked" src={cancel} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-suggestion">
                      <ul className="suggetions-list">
                        <li>Start by uploading the Father’s photos in the app</li>
                        <li>
                        Face should be facing forward, clearly visible, no glasses
                        </li>
                        <li>
                          The  face in the photo should take up at least 70% of the space
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="test-lef test-rig BT">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="width-left">
                      <div className="row innerImage">
                        <div className="col-lg-6 col-md-6 col-6">
                          <div className="checkImg">
                            <img className="suggest-img" src={newgirl1} />
                            <img className="suggest-checked" src={checked} />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6">
                          <div className="checkImg">
                            <img className="suggest-img" src={newgirl} />
                            <img className="suggest-checked" src={cancel} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-suggestion">
                      <ul className="suggetions-list">
                        <li>Continue by uploading the Mother’s or by taking a selfie</li>
                        <li>
                        Face should be facing forward, clearly visible, no glasses
                        </li>
                        <li>
                        The face in the photo should take up at least 70% of the space
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="suggestion-new mobile-suggest">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="get-content">
                <p className="Get-Started-1">Get Started</p>
                <p className="Get-Started-2">
                  The First App To Generate Adorable Baby Face Predictions By
                  Using Artificial Intelligence To Analyze Over 120+ Facial
                  Features of the Father and Mother.
                </p>
                <div className="switch-image">
                  <img className="laptop-img" src={laptop} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="h3-prew">Testimonials</h3>
              <Slider {...settings}>
                {hasItems ? (
                  data.map((item) => (
                    <div className="outer-dv" key={item.id}>
                      <div className="card-msg">
                        <img src={item.Testimonial} alt={item.name} />
                        <p>{item.content}</p>
                        <div className="flex-name">
                          <img src={item.src} alt={item.name} />
                          <div className="right-g">
                            <h3>{item.name}</h3>
                            <p>{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-items-message">
                    {/* Render a message or any desired content when there are no items */}
                    <p> No items to display.</p>
                    {console.log(hasItems, "no itenms ")}
                  </div>
                )}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="subscription">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="OurPricingPlans">Our Pricing Plans</h3>
            </div>
            <div className="col-lg-12">
              <div className="width-max mobile-price">
                {/* price card slider */}

                <div className="row ">
                  <Slider {...Pricesetting}>
                    {BusinessPlans.map((item, index) => {
                      return (
                        <div
                          className="col-lg-4 mb-3"
                          key={`price-card-${index}`}
                        >
                          <PriceCard
                            heading={item.heading}
                            buttonTxt={item.buttonTxt}
                            popular={item.popular}
                            price={item.price}
                            strikePay={item.strikePay}
                            discountamount={item.discountamount}
                            discountText={item.discountText}
                            subHading={item.subHading}
                            listData={item.listData}
                            pageName="newLandingPage"
                            currentPlant={item.planType}
                            planType={item.planType}
                          />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
              <div className="width-max desktop-price">
                {/* price card slider */}

                <div className="row">
                  {BusinessPlans.map((item, index) => {
                    return (
                      <div
                        className="col-lg-4 mb-3"
                        key={`price-card-${index}`}
                      >
                        <PriceCard
                          heading={item.heading}
                          buttonTxt={item.buttonTxt}
                          popular={item.popular}
                          price={item.price}
                          strikePay={item.strikePay}
                          discountamount={item.discountamount}
                          discountText={item.discountText}
                          subHading={item.subHading}
                          listData={item.listData}
                          pageName="newLandingPage"
                          currentPlant={item.planType}
                          planType={item.planType}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="note-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="notice-div BT">
                <img className="same-class-img" src={rec} />
                <p className="notice">
                  {showFullNote ? (
                    <>
                      {noticeContent}
                      <a href="javascript:void(0)" onClick={toggleContent}>
                        Read Less
                      </a>
                    </>
                  ) : (
                    <>
                      <strong> {boldline}</strong> {noticeContent.slice(0, 502)}
                      {noticeContent.length > 250 && "... "}
                      <a href="javascript:void(0)" onClick={toggleContent}>
                        Read More
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="notice-div BT">
                <img className="same-class-img" src={rec1} />
                <p className="notice">
                  Overall, the monthly subscription to the AI Image Prediction
                  App offers a range of benefits that make it an attractive and
                  valuable option for customers. With unlimited access,
                  affordable monthly fees, faster and more accurate results, and
                  a hassle-free user experience, the monthly subscription is the
                  best choice for regular users of the app who want to get the
                  most out of it. Subscribe now to start using the app with
                  confidence and enjoy all the benefits of a monthly
                  subscription!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="notice-div BT">
                <img className="same-class-img" src={rec} />
                <p className="notice">
                  The yearly subscription plan to our AI image prediction
                  technology offers the same great benefits as the monthly plan.
                  But, it is our best value option. This is for those curious
                  people who want unlimited access to use our app to predict
                  what their kids might look like with somebody at this time
                  next year. Upgrade now to start using the app with confidence
                  and enjoy all the benefits of a yearly subscription!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-new">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="featured-header">Featured In</div>

              <div className="row">
                <div className="col-lg-3 col-md-3 col-6">
                  <img className="logoimages BT" src={logo11} alt="logo11" />
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                  <img className="logoimages BT" src={yahoo} alt="logo11" />
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                  <img className="logoimages BT" src={tiktok} alt="logo11" />
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                  <img className="logoimages BT" src={jimmy} alt="logo11" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewLandingPage;
