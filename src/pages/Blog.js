import React from 'react';
import '../App.css';
import './Pages.css';
import Footer from '../components/layout/Footer';
import blogPosts from '../data/blog';

export default function Blog() {
  return (
    <>
      <div className='blog-body' style={{ height: '100%' }}>
        {blogPosts.map((post) => (
          <article className='blog-item' key={post.title}>
            <h4>{post.title}</h4>
            <p>
              {post.body}{' '}
              <a href={post.url} target='_blank' rel='noopener noreferrer'>
                Read More
              </a>
            </p>
          </article>
        ))}
      </div>
      <Footer />
    </>
  );
}
