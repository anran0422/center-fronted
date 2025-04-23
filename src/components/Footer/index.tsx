import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import {NOTE_LINK} from "@/constants";

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'An Ran',
          title: '语雀笔记',
          href: NOTE_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Bai du',
          title: '个人主页',
          href: 'https://github.com/anran0422/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
