import React from 'react';
import Slider from 'react-slick';
import BlogCard from './BlogCard';

const Blog = () => {

    const myBlog = [
        {
            title: "JavaScript — 10 most important and useful functions",
            text: `JS String : indexOf( )
            1. Takes a string as a parameter that can be called “searchTerm”.
            2. Returns the first occurrence of the index where the “searchTerm” stands.
            3. It can take an integer number as the second parameter from where searching the “searchTerm” will be started.It’s Default value is 0. `,
            link: "https://dnsdhrubo.medium.com/js-most-used-functions-f184f8be9792"
        },
        {
            title: "DOM and ReactJS Fundamentals",
            text: `Document Object Model (DOM)
            When a web page or document is fully loaded on the browser, the browser creates a html object. We can consider the structure of this object as a tree. And this thing is like a model or a structure. So, finally we can say that, this tree structured model is a html document-object-model or DOM. `,
            link: "https://dnsdhrubo.medium.com/dom-and-reactjs-fundamentals-3051e0f25998"
        },
        {
            title: "10 Important things about Web Accessibility",
            text: `Why Video caption is important on your website?
            Suppose you are in a library and need to see a tutorial video and you have no ear-phone right now. In this situation, how can you understand the tutorial without audio? Or think about someone who is unable to hear.
            Here video caption plays an important role. `,
            link: "https://dnsdhrubo.medium.com/10-important-things-about-web-accessibility-5bfa8687d3cb"
        },
        {
            title: "JavaScript Hot Topics",
            text: `Spread operator vs rest parameter
            The spread operator unpacks elements of iterable objects such as arrays, sets, and maps into a list. The spread operator can be used to clone an iterable object or merge iterable objects into one.
            The rest parameter is also denoted by three dots `,
            link: "https://dnsdhrubo.medium.com/spread-operator-vs-rest-parameter-e00f3f8ef112"
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <div className="project-slides">
                <div className=" text-center  mb-5">
                    <h2 className="text-brand">My Blogs</h2>
                </div>
                <Slider className="mx-2 bg-slider py-2" {...settings}>
                    {
                        myBlog.map((each, index) => <BlogCard blogData={each} />)
                    }
                </Slider>
            </div>
        </div> 
    );
};

export default Blog;