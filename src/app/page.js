import Link from 'next/link';
import React from 'react';
// import PostPage from './posts/page';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-4xl font-semibold text-center my-8'>Welcome to the BTST</h1>

      <p className='text-2xl'>I apologize i tried to use given  gitBucket repository but somehow tailwindcss is not working so that's why i created another nextjs file</p>

      <h2 className='text-2xl text-green-700 font-bold'>Layout: </h2>

      <div className='text-xl font-semibold my-8'>
        <p>Created a responsive layout for the blog page.---------- Done</p>
        <p>Home page and Blog page.------------ Done</p>
      </div>

      <h2 className='text-2xl text-green-700 font-bold'>Blog Posts API Integration:: </h2>
      <div className='text-xl font-semibold my-8'>
        <p>Api from jsonplaceholder. And i used (photos api).---------- Done</p>
        <p>In this api there are only ( title , url , thumbnailUrl. there are no description).------------ Done</p>
      </div>


      <h2 className='text-2xl text-green-700 font-bold'>Display Blog Posts::: </h2>
      <div className='text-xl font-semibold my-8'>
        <p>Displayed Posts in Blog route .---------- Done</p>
        <p>added read more .---------- Done</p>
        <p>and you said (  You don't need to create the detailed post pages for this assignment.). ------------ Done</p>
        <p>So didn't create one.</p>
      </div>


      <h2 className='text-2xl text-green-700 font-bold'>Responsive Design:: </h2>
      <div className='text-xl font-semibold my-8'>
        <p> This is responsive---------- Done</p>
        <p>I used Grid .------------ Done</p>
      </div>


      <h2 className='text-2xl text-green-700 font-bold'>Styling:: </h2>
      <div className='text-xl font-semibold my-8'>
        <p>Used Tailwindcss .---------- Done</p>
        <p>And Daisy UI------------ Done</p>
      </div>

      <div className='my-8 ' >
        <Link className='ml-3' href="https://www.linkedin.com/in/khaladshifullah"><button className='btn btn-accent'>LinkedIn</button></Link>
        <Link className='ml-3' href="https://github.com/khalad007"><button className='btn btn-accent'>Github</button></Link>
        <Link className='ml-3' href="https://drive.google.com/file/d/1I3prC9ZB9ztNwnZe2CjVs9-mqRuXAO8L/view?usp=sharing"><button className='btn btn-accent'>Resume</button></Link>
      </div>


      {/* <PostPage></PostPage> */}
    </div>
  );
};

export default HomePage;