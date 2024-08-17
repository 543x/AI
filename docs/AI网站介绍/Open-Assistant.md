<h1 align="center">
<span>Open-Assistant</span>
<img width="auto" height="50px" src="https://github.com/LAION-AI/Open-Assistant/blob/main/assets/logo_crop.png"/>
</h1>

<blockquote>
<p>:memo: <strong>注意</strong>：OpenAssistant 已完成，项目现已完成。感谢所有贡献者！查看我们的<a href="https://projects.laion.ai/Open-Assistant/blog/2023/10/25/open-assistant-is-completed">博客文章</a>了解更多信息。最终发布的 oasst2 数据集可在 HuggingFace 上找到，网址为 <a href="https://huggingface.co/datasets/OpenAssistant/oasst2">OpenAssistant/oasst2</a></p>
</blockquote>

# 目录

- [什么是 Open Assistant？](#what-is-open-assistant)
- [有用的链接](#useful-links)
- [如何试用](#how-to-try-it-out)
- [愿景](#the-vision)
- [计划](#the-plan)
- [您可以如何提供帮助](#how-you-can-help)

---

## 什么是 Open Assistant？

<p align="center">
Open Assistant 是一个旨在让每个人都能访问基于聊天的大型语言模型的项目。
</p>

我们相信，通过这样做，我们将在语言创新方面掀起一场革命。就像稳定扩散帮助世界以新的方式创造艺术和

图像一样，我们希望 Open Assistant 能够通过改进语言本身来帮助改善世界。

# 有用的链接

- [数据收集](https://open-assistant.io)

- [聊天](https://open-assistant.io/chat)

- [项目文档](https://projects.laion.ai/Open-Assistant/)

## 如何尝试

### 与 AI 聊天

聊天前端现已上线 [此处](https://open-assistant.io/chat)。登录并

开始聊天！聊天时，请尝试用竖起大拇指或竖起大拇指来回应助手的

响应。

### 为数据收集做出贡献

数据收集前端现已上线 [此处](https://open-assistant.io/)。登录并开始执行任务！我们希望收集大量优质数据。
通过提交、排名和标记模型提示和响应，您将直接帮助提高 Open Assistant 的功能。

### 在本地运行开发设置（无聊天）

**除非您正在为开发过程做出贡献，否则您无需在本地运行项目。上面的网站链接将带您进入公共网站，您可以在其中使用数据收集应用程序和聊天。**

如果您想在本地运行数据收集应用程序进行开发，您可以使用 Docker 设置运行 **Open-Assistant** 所需的整个堆栈，包括网站、后端和相关的依赖服务。

要启动演示，请在存储库的根目录中运行此程序（如果您遇到问题，请查看
[此常见问题解答](https://projects.laion.ai/Open-Assistant/docs/faq#docker-compose-instead-of-docker-compose)
）：

```sh
docker compose --profile ci up --build --attach-dependencies
```

> **注意：**在使用 M1 芯片的 MacOS 上运行时，您必须使用：
> `DB_PLATFORM=linux/x86_64 docker compose ...`

然后，导航到 `http://localhost:3000`（启动可能需要一些时间）并与网站交互。

> **注意：**如果构建时出现问题，请前往
> [常见问题解答](https://projects.laion.ai/Open-Assistant/docs/faq) 并查看
> 有关 Docker 的条目。

> **注意：**通过电子邮件登录时，导航至 `http://localhost:1080` 以获取神奇的电子邮件登录链接。

> **注意：**如果您想在标准化开发环境（a
> ["devcontainer"](https://code.visualstudio.com/docs/devcontainers/containers))
> 中使用
> [vscode 本地](https://code.visualstudio.com/docs/devcontainers/create-dev-container#_create-a-devcontainerjson-file)
> 或在 Web 浏览器中使用
> [GitHub Codespaces](https://github.com/features/codespaces) 运行此程序，您可以使用
> 提供的 [`.devcontainer`](.devcontainer/) 文件夹。

### 在本地运行聊天开发设置

**除非您正在为开发过程做出贡献，否则无需在本地运行项目。上面的网站链接将带您进入公共网站
您可以在其中使用数据收集应用程序和聊天。**

**另请注意，本地设置仅用于开发，并不意味着用作本地聊天机器人，除非您知道自己在做什么。**

如果您确实知道自己在做什么，请查看`inference`文件夹以启动并运行推理系统，或者查看上述命令中的`--profile ci`和`--profile inference`。

##愿景

我们不会止步于复制ChatGPT。我们希望打造未来的助手，不仅能够撰写电子邮件和求职信，还能做有意义的工作，使用API​​，动态研究信息等等，任何人都可以个性化和扩展。我们希望以一种开放和可访问的方式做到这一点，这意味着我们不仅要打造一个出色的助手，还要让它足够小巧高效，可以在消费者硬件上运行。

## 计划

##### 我们希望通过以下 3 个步骤尽快获得初始 MVP在 [InstructGPT 论文](https://arxiv.org/abs/2203.02155) 中概述

1. 收集高质量的人工生成的指令执行样本
（提示 + 响应），目标 >50k。我们设计了一个众包流程来收集
和审查提示。我们不想在
泛滥/有毒/垃圾邮件/垃圾/个人信息数据上进行训练。我们将有一个
排行榜来激励展示进度和最活跃
用户的社区。Swag 将提供给顶级贡献者。
2. 对于每个收集到的提示，我们将抽样多个完成情况。
然后，一个提示的完成情况将随机显示给用户，以
从最好到最差对其进行排名。同样，这应该通过众包进行，例如，我们需要
处理不可靠的潜在恶意用户。至少需要收集多个独立用户的投票来衡量整体一致性。收集到的排名数据将用于训练奖励模型。
3. 现在根据提示和奖励模型进入 RLHF 训练阶段。

然后，我们可以采用生成的模型，并继续完成采样步骤 2 以进行下一次迭代。

### 幻灯片

[愿景和路线图](https://docs.google.com/presentation/d/1n7IrAOVOqwdYgiYrXc8Sj0He8krn5MVZO_iLkCjTtu0/edit?usp=sharing)

[重要数据结构](https://docs.google.com/presentation/d/1iaX_nxasVWlvPiSNs0cllR9L_1neZq0RJxd6MFEalUY/edit?usp=sharing)

## 您如何提供帮助

所有开源项目都始于像您这样的人。开源是一种信念，如果我们合作，我们就可以共同将我们的知识和技术奉献给世界，造福人类。

查看我们的[贡献指南]（CONTRIBUTING.md）以开始使用。