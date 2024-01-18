import React from "react";
import Header from "../../MainHeader/Header";
import Footer from "../../../pages/footer/Footer";
import blog1 from "../../../asset/image/blog-1.png";
import blog2 from "../../../asset/image/blog-2.png";
import blog3 from "../../../asset/image/blog-3.png";
import blog4 from "../../../asset/image/blog-4.png";
import blog5 from "../../../asset/image/blog-5.png";
import blog6 from "../../../asset/image/blog-6.png";
import blog7 from "../../../asset/image/blog-7.png";
const BlogSection = () => {

  const blogs = [
    {
      id: 1,
      image: blog1,
      author: 'Wilson Franci',
      date: ' . 05 Jun 2023',
      title: 'Empowering Parental Bonding',
      description: 'Beyond the sheer excitement of seeing your future child\'s face, Maybebaby nurtures a deeper connection between parents.',
      icon: blog7,
    },
    {
      id: 2,
      image: blog2,
      author: 'Alec Whitten',
      date: ' . 02 jun 2023',
      title: 'The Science Behind the Magic',
      description: 'Maybebaby employs sophisticated algorithms and artificial intelligence to simulate the genetic inheritance patterns of facial traits.',
      icon: blog7,
    },

    {
      id: 3,
      image: blog3,
      author: 'Talan Rhiel Madsen',
      date: ' . 30 May 2023',
      title: 'The Joy of Anticipation',
      description: 'One of the most exciting aspects of parenthood is the anticipation of what your child will look like. It offers a delightful way to explore that anticipation.',
      icon: blog7,
    },

    {
      id: 4,
      image: blog4,
      author: 'Haylie Carder',
      date: ' . 05 jun 2023',
      title: 'Celebrating the Unpredictable',
      description: 'Despite the wonders of the Mother-Father Baby Face Generator, it is essential to remember that every child is a blend of their parents features.',
      icon: blog7,
    },

    {
      id: 5,
      image: blog5,
      author: 'Phillip Culhane',
      date: ' .  24 May 2023',
      title: ' Benefits and Emotional Impact',
      description: 'Maybebaby holds tremendous potential in several aspects. Firstly, it allows parents to share an interactive and engaging experience',
      icon: blog7,
    },

    {
      id: 6,
      image: blog6,
      author: 'Livia Saris',
      date: ' . 30 May 2023',
      title: 'Sharing the Excitement',
      description: 'The journey towards parenthood is often shared with loved ones, and Maybebaby encourages this joyous spirit of sharing.',
      icon: blog7,
    },
    // Add more blog objects as needed
  ];
  return (
    <>
      <Header />

      <section className="about-new blog-new">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="AboutUshead">Our Blogs</h3>
            </div>
          </div>
    


          <div className="row">
        {blogs.map((blog) =>(
           <div className="col-lg-4">
           <div className="blog-same BT">
             <img className="blog-img" src={blog.image} alt="" />
             <p className="blog-same-p1">{blog.author}<span>{blog.date}</span></p>
             <p className="blog-same-p2">{blog.title} <span><img src={blog.icon} alt="" /></span></p>
             <p className="blog-same-p3">{blog.description}</p>
           </div>
         </div>
        ))}
          </div>



          <div className="row">
            <div className="col-lg-12">
              <div className="button-load">
                <button className="load-bt BT">Load More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogSection;





