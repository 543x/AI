import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

const features = [
  {
    title: 'OpenAI📚',
    content: "开放人工智能| 创造造福全人类的安全 AGI。；桌面上的 ChatGPT · 聊天电子邮件、屏幕截图、文件以及屏幕上的任何内容.",
  },
  {
    title: 'Google AI📝',
    content: 'Android 上的Google AI重新构想了您的移动设备体验，帮助您更具创造力、完成更多工作，并通过 Google 提供的强大保护确保安全.',
  },
  {
    title: '人工智能🐱',
    content: '它是计算机科学的一个研究领域，开发和研究使机器能够感知环境并使用学习的方法和软件.',
  },
  {
    title: '什么是人工智能AI？🧠',
    content: '人工智能是一种允许您生成、分类和执行图像分析和语音识别等任务的技术.',
  },
  {
    title: '人工智能 (AI) | 定义 💻',
    content: '人工智能（AI），数字计算机或计算机控制的机器人执行通常与智能生物相关的任务的能力.',
  },
  {
    title: 'AutoGPT 🚀',
    content: 'AutoGPT 的愿景是让每个人都能使用和构建 AI。我们的使命是提供工具，让您可以专注于重要的事情.',
  },
];

const components = [
  {
    title: 'ChatGPT📚',
    content: "ChatGPT 可以回答后续问题、承认错误、挑战不正确的前提并拒绝不适当的请求.",
    url: 'https://chat.openai.com',
  },
  {
    title: '阿里·通义千问📝',
    content: '一个专门响应人类指令的大模型.',
    url: 'https://tongyi.aliyun.com',
  },
  {
    title: '百度·文心一言🐱',
    content: '百度全新一代知识增强大语言模型.',
    url: 'https://yiyan.baidu.com/welcome',
  },
  {
    title: '腾讯Effidit🧠',
    content: '腾讯 AI Lab 开发的智能创作助手.',
    url: 'https://effidit.qq.com',
  },
  {
    title: 'OpenGPT 💻',
    content: 'OpenGPT是一种自然语言处理技..',
    url: 'https://open-gpt.app',
  },
  {
    title: 'websim🚀',
    content: 'Websim 是一个可以想象沉浸式网站和互联网的平台.',
    url: 'https://websim.ai',
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      permalink="/"
      description="Set up a modern web app by running one command."
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create SOLANA logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('blog')}
            >
              立即开始
            </Link>
          </div>
        </div>
      </div>

      {features.length > 0 && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2 className={styles.featureTitle}>{title}</h2>
                  <p className={styles.featureContent}>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {components.length > 0 && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {components.map(({ title, url, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <div className={styles.card}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <Link className="button button--primary" to={url}>
                      访问网站
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;
