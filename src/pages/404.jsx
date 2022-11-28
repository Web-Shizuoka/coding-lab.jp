import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFound = () => {
  return (
    <Layout
      pageTitle="404 Not Found"
      pageDescription="存在しないページです。"
    >
      <p>すみません。指定された URLのページは存在しません。</p>
      <Link to="/">&gt;&gt; トップページへ</Link>
    </Layout>
  )
};

export default NotFound;