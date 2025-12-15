import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/common/PageWrapper';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <PageWrapper>
      <div className="blog-page">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="page-tag">Blog</span>
          <h1>Coming Soon</h1>
          <p>I'll be sharing articles about robotics, embedded systems, and web development</p>
        </motion.div>

        <motion.div
          className="coming-soon"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="emoji">📝</span>
          <h2>Stay Tuned!</h2>
          <p>Articles about Arduino, Raspberry Pi, React, and more are on the way.</p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default BlogPage;