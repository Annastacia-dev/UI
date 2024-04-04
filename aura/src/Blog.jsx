import React from 'react';
import { FaUserEdit } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";


const articles = [
  {
    id: 1,
    title: 'The Best Skincare Routine for Oily Skin',
    image: '/blog/2.jpeg',
    content: 'Oily skin can be a challenge to manage, but with the right products and routine, you can keep it under control. In this article, we’ll share our top tips for caring for oily skin and recommend some of our favorite products to help you achieve a healthy, balanced complexion.',
    author: 'Jane Doe',
    date: 'Jan 10, 2024'
  },
  {
    id: 2,
    title: 'How to Build a Skincare Routine for Dry Skin',
    image: '/blog/3.jpeg',
    content: 'Dry skin requires extra care and attention to keep it hydrated and healthy. In this article, we’ll walk you through the steps of building a skincare routine that will nourish and moisturize your dry skin, leaving it soft, smooth, and radiant.',
    author: 'John Smith',
    date: 'Feb 15, 2024'
  },
  {
    id: 3,
    title: 'The Benefits of Using a Vitamin C Serum',
    image: '/blog/1.jpeg',
    content: 'Vitamin C serums are a popular skincare product that can help brighten, firm, and protect the skin. In this article, we’ll explore the benefits of using a vitamin C serum in your skincare routine and share some of our favorite products to try.',
    author: 'Sarah Johnson',
    date: 'Mar 20, 2024'
  },
  {
    id: 4,
    title: '5 Common Skincare Mistakes to Avoid',
    image: '/blog/4.jpeg',
    content: 'Skincare is an essential part of our daily routine, but it’s easy to make mistakes that can harm our skin. In this article, we’ll highlight five common skincare mistakes to avoid and provide tips on how to keep your skin healthy and glowing.',
    author: 'Emily Brown',
    date: 'Apr 25, 2024'
  }
]

const Blog = () => {
  return (
    <div className="bg-gray-50 py-16 sm:px-5 px-2" id="blog">
      <div className="flex flex-col gap-2">
        <h5 className="font-playfair font-bold capitalize text-xl">
          Get the Latest Skin Care Tips and Tricks
        </h5>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
        {
          articles.map(article => (
            <div key={article.id} className='bg-white rounded-lg shadow-md overflow-hidden relative'>
              <img src={article.image} alt={article.title} className='w-full h-full object-cover' />
              <div className='p-4 absolute top-0 bg-black/70 text-white h-full flex flex-col gap-8 items-start'>
                <h5 className='font-playfair font-bold text-lg mt-10 text-tan'>{article.title}</h5>
                <p className='text-sm  mt-2'>{article.content.slice(0, 100)
                }...
                </p>
                <button className='text-white  text-sm underline'>Read More {'->'}</button>
                <div className='flex flex-col justify-center gap-3 absolute bottom-5'>
                  <p className='text-sm flex gap-2 items-center'>
                    <FaUserEdit />
                    {article.author}
                  </p>
                  <p className='text-sm flex gap-2 items-center'>
                    <FaClock />
                    {article.date}
                  </p>
                </div>
              </div>
            </div>
          ))
        }

      </div>

  </div>);
};

export default Blog;
