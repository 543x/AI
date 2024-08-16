# AutoGPT：构建和使用 AI 代理


**AutoGPT** 是一款功能强大的工具，可让您创建和运行智能代理。这些代理可以自动执行各种任务，让您的生活更轻松。

## 如何开始

https://github.com/user-attachments/assets/8508f4dc-b362-4cab-900f-644964a96cdf

### 🧱 AutoGPT Builder

AutoGPT Builder 是前端。它允许您使用简单的流程图样式设计代理。您可以通过连接块来构建代理，其中每个块执行单个操作。它简单直观！

[阅读本指南](https://docs.agpt.co/server/new_blocks/) 了解如何构建自己的自定义块。

### 💽 AutoGPT 服务器

AutoGPT 服务器是后端。这是您的代理运行的地方。部署后，代理可以由外部源触发并可以持续运行。

### 🐙 示例代理

以下是您可以使用 AutoGPT 执行的操作的两个示例：

1. **Reddit 营销代理**
- 此代理阅读 Reddit 上的评论。
- 它会寻找询问您产品的人。
- 然后它会自动回复他们。

2. **YouTube 内容再利用代理**
- 此代理订阅您的 YouTube 频道。
- 当您发布新视频时，它会将其转录。
- 它使用 AI 编写针对搜索引擎优化的博客文章。
- 然后，它会将此博客文章发布到您的 Medium 帐户。

这些示例仅展示了您可以使用 AutoGPT 实现的一小部分！

---
我们的使命是提供工具，以便您可以专注于重要的事情：

- 🏗️ **构建** - 为一些了不起的事情奠定基础。
- 🧪 **测试** - 将您的代理微调至完美。
- 🤝 **委派** - 让 AI 为您工作，让您的想法变成现实。

成为革命的一部分！**AutoGPT** 将继续走在 AI 创新的最前沿。

**📖 [文档](https://docs.agpt.co)**
&ensp;|&ensp;
**🚀 [贡献](CONTRIBUTING.md)**

---
## 🤖 AutoGPT Classic
> 以下是有关 AutoGPT 经典版本的信息。

**🛠️ [构建您自己的代理 - 快速入门](FORGE-QUICKSTART.md)**
### 🏗️ Forge

**Forge 您自己的代理！** &ndash; Forge 是您的代理应用程序的现成模板。所有样板代码都已处理好，让您可以将所有创造力投入到让您的代理与众不同的事情中。所有教程都位于[此处](https://medium.com/@aiedge/autogpt-forge-e3de53cc58ec)。[`forge.sdk`](/forge/forge/sdk) 中的组件也可以单独使用，以加快开发速度并减少代理项目中的样板。

🚀 [**开始使用 Forge**](https://github.com/Significant-Gravitas/AutoGPT/blob/master/forge/tutorials/001_getting_started.md) &ndash;
本指南将引导您完成创建自己的代理以及使用基准和用户界面的过程。

📘 [详细了解](https://github.com/Significant-Gravitas/AutoGPT/tree/master/forge) Forge

### 🎯 基准测试

**测量代理的性能！** `agbenchmark` 可以与支持代理协议的任何代理一起使用，并且与项目的 [CLI] 集成使其更容易与 AutoGPT 和基于 forge 的代理一起使用。基准测试提供了严格的测试环境。我们的框架允许进行自主、客观的性能评估，确保您的代理为现实世界的行动做好准备。

<!-- TODO：插入演示基准测试的视觉效果 -->

📦 Pypi 上的 [`agbenchmark`](https://pypi.org/project/agbenchmark/)
&ensp;|&ensp;
📘 [详细了解](https://github.com/Significant-Gravitas/AutoGPT/blob/master/benchmark) 有关基准的信息

### 💻 UI

**使代理易于使用！** `frontend` 为您提供了一个用户友好的界面来控制和监控您的代理。它通过 [agent protocol](#-agent-protocol) 连接到代理，确保与我们生态系统内外的许多代理兼容。

<!-- TODO：插入前端屏幕截图 -->

前端可与存储库中的所有代理开箱即用。只需使用 [CLI] 即可运行您选择的代理！

📘 [详细了解](https://github.com/Significant-Gravitas/AutoGPT/tree/master/frontend) 前端

### ⌨️ CLI

[CLI]: #-cli

为了尽可能轻松地使用存储库提供的所有工具，存储库的根目录中包含一个 CLI：

```shell
$ ./run
用法：cli.py [OPTIONS] COMMAND [ARGS]...

选项：
--help 显示此消息并退出。

命令：
agent 用于创建、启动和停止代理的命令
benchmark 用于启动基准测试并列出测试和类别的命令
setup 安装系统所需的依赖项。
```

只需克隆存储库，使用 `./run setup` 安装依赖项，就可以开始了！

## 🤔有疑问？有问题？有建议吗？

### 获取帮助 - [Discord 💬](https://discord.gg/autogpt)

[![在 Discord 上加入我们](https://invidget.switchblade.xyz/autogpt)](https://discord.gg/autogpt)

要报告错误或请求功能，请创建 [GitHub 问题](https://github.com/Significant-Gravitas/AutoGPT/issues/new/choose)。请确保其他人没有为同一主题创建问题。

## 🤝 姊妹项目

### 🔄 代理协议

为了保持统一标准并确保与许多当前和未来的应用程序无缝兼容，AutoGPT 采用了 AI Engineer Foundation 的 [代理协议](https://agentprotocol.ai/) 标准。这标准化了从代理到前端和基准的通信路径。

---

<p align="center">
<a href="https://star-history.com/#Significant-Gravitas/AutoGPT">
<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Significant-Gravitas/AutoGPT&type=Date&theme=dark" />
<source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Significant-Gravitas/AutoGPT&type=Date" />
<img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Significant-Gravitas/AutoGPT&type=Date" />
</picture>
</a>
</p>
---