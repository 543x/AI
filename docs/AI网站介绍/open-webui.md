# Open WebUI（原名 Ollama WebUI）👋

Open WebUI 是一个可扩展、功能丰富且用户友好的自托管 WebUI，旨在完全离线运行。它支持各种 LLM 运行器，包括 Ollama 和 OpenAI 兼容 API。有关更多信息，请务必查看我们的 [Open WebUI 文档](https://docs.openwebui.com/)。

## Open WebUI 的主要功能 ⭐

- 🚀 **轻松设置**：使用 Docker 或 Kubernetes（kubectl、kustomize 或 helm）无缝安装，获得无忧体验，支持 `:ollama` 和 `:cuda` 标记图像。

- 🤝 **Ollama/OpenAI API 集成**：轻松集成 OpenAI 兼容 API，与 Ollama 模型一起实现多功能对话。自定义 OpenAI API URL 以链接到 **LMStudio、GroqCloud、Mistral、OpenRouter 等**。

- 🧩 **Pipelines、Open WebUI 插件支持**：使用 [Pipelines 插件框架](https://github.com/open-webui/pipelines) 将自定义逻辑和 Python 库无缝集成到 Open WebUI 中。启动您的 Pipelines 实例，将 OpenAI URL 设置为 Pipelines URL，并探索无限可能。[示例](https://github.com/open-webui/pipelines/tree/main/examples) 包括 **函数调用**、用户 **速率限制** 以控制访问、使用 Langfuse 等工具进行 **使用情况监控**、**使用 LibreTranslate 进行实时翻译** 以支持多语言、**有毒消息过滤** 等等。

- 📱 **响应式设计**：在台式电脑、笔记本电脑和移动设备上享受无缝体验。

- 📱 **适用于移动设备的渐进式 Web 应用程序 (PWA)**：使用我们的 PWA，在您的移动设备上享受原生应用程序般的体验，提供本地主机上的离线访问和无缝用户界面。

- ✒️🔢 **完全支持 Markdown 和 LaTeX**：通过全面的 Markdown 和 LaTeX 功能提升您的 LLM 体验，实现丰富的交互。

- 🎤📹 **免提语音/视频通话**：通过集成的免提语音和视频通话功能体验无缝通信，从而实现更具动态性和互动性的聊天环境。

- 🛠️ **模型构建器**：通过 Web UI 轻松创建 Ollama 模型。通过 [Open WebUI Community](https://openwebui.com/) 集成轻松创建和添加自定义角色/代理、自定义聊天元素和导入模型。

- 🐍 **原生 Python 函数调用工具**：通过工具工作区中的内置代码编辑器支持增强您的 LLM。只需添加纯 Python 函数即可自带函数 (BYOF)，从而实现与 LLM 的无缝集成。

- 📚 **本地 RAG 集成**：借助突破性的检索增强生成 (RAG) 支持，深入了解聊天交互的未来。此功能将文档交互无缝集成到您的聊天体验中。您可以将文档直接加载到聊天中或将文件添加到文档库中，使用查询前的 `#` 命令轻松访问它们。

- 🔍 **RAG 的 Web 搜索**：使用 `SearXNG`、`Google PSE`、`Brave Search`、`serpstack`、`serper`、`Serply`、`DuckDuckGo` 和 `TavilySearch` 等提供商执行 Web 搜索，并将结果直接注入您的聊天体验中。

- 🌐 **Web 浏览功能**：使用 `#` 命令后跟 URL，将网站无缝集成到您的聊天体验中。此功能允许您将 Web 内容直接合并到您的对话中，从而增强交互的丰富性和深度。

- 🎨 **图像生成集成**：使用 AUTOMATIC1111 API 或 ComfyUI（本地）和 OpenAI 的 DALL-E（外部）等选项无缝集成图像生成功能，通过动态视觉内容丰富您的聊天体验。

- ⚙️ **多种模型对话**：轻松同时与各种模型互动，利用其独特优势获得最佳响应。通过并行利用多种模型来增强您的体验。

- 🔐 **基于角色的访问控制 (RBAC)**：确保使用受限权限的安全访问；只有授权个人才能访问您的 Ollama，并且为管理员保留独有的模型创建/拉取权限。

- 🌐🌍 **多语言支持**：借助我们的国际化 (i18n) 支持，以您喜欢的语言体验 Open WebUI。加入我们，扩大我们支持的语言！我们正在积极寻找贡献者！

- 🌟 **持续更新**：我们致力于通过定期更新、修复和新功能来改进 Open WebUI。

想了解有关 Open WebUI 功能的更多信息？查看我们的 [Open WebUI 文档](https://docs.openwebui.com/features) 以获得全面概述！

## 🔗 还可以查看 Open WebUI 社区！

不要忘记探索我们的姊妹项目 [Open WebUI 社区](https://openwebui.com/)，您可以在其中发现、下载和探索自定义的模型文件。O​​pen WebUI 社区提供了各种令人兴奋的可能性，可增强您与 Open WebUI 的聊天互动！🚀

## 如何o 安装 🚀

> [!NOTE]
> 请注意，对于某些 Docker 环境，可能需要额外的配置。如果您遇到任何连接问题，我们关于 [Open WebUI 文档](https://docs.openwebui.com/) 的详细指南随时为您提供帮助。

### Docker 快速入门 🐳

> [!WARNING]
> 使用 Docker 安装 Open WebUI 时，请确保在 Docker 命令中包含 `-v open-webui:/app/backend/data`。此步骤至关重要，因为它可确保您的数据库正确安装并防止任何数据丢失。

> [!TIP]
> 如果您希望使用包含 Ollama 或 CUDA 加速的 Open WebUI，我们建议使用带有 `:cuda` 或 `:ollama` 标签的官方图像。要启用 CUDA，您必须在 Linux/WSL 系统上安装 [Nvidia CUDA 容器工具包](https://docs.nvidia.com/dgx/nvidia-container-runtime-upgrade/)。

### 使用默认配置安装

- **如果 Ollama 在您的计算机上**，请使用以下命令：

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

- **如果 Ollama 位于不同的服务器上**，请使用以下命令：

要连接到另一台服务器上的 Ollama，请将 `OLLAMA_BASE_URL` 更改为服务器的 URL：

```bash
docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=https://example.com -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

- **要运行支持 Nvidia GPU 的 Open WebUI**，请使用以下命令：

```bash
docker run -d -p 3000:8080 --gpus all --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:cuda
```

### 仅用于 OpenAI API 使用的安装

- **如果您仅使用 OpenAI API**，请使用以下命令：

```bash
docker run -d -p 3000:8080 -e OPENAI_API_KEY=your_secret_key -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

### 使用以下方式安装 Open WebUI捆绑的 Ollama 支持

此安装方法使用将 Open WebUI 与 Ollama 捆绑在一起的单个容器映像，从而允许通过单个命令进行简化的设置。根据您的硬件设置选择适当的命令：

- **支持 GPU**：
通过运行以下命令利用 GPU 资源：

```bash
docker run -d -p 3000:8080 --gpus=all -v ollama:/root/.ollama -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:ollama
```

- **仅适用于 CPU**：
如果您不使用 GPU，请改用此命令：

```bash
docker run -d -p 3000:8080 -v ollama:/root/.ollama -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:ollama
```

这两个命令都有助于实现内置Open WebUI 和 Ollama 的安装过程轻松无忧，确保您可以快速启动并运行一切。

安装后，您可以通过 [http://localhost:3000](http://localhost:3000) 访问 Open WebUI。尽情享受吧！😄

### 其他安装方法

我们提供各种安装替代方案，包括非 Docker 原生安装方法、Docker Compose、Kustomize 和 Helm。访问我们的 [Open WebUI 文档](https://docs.openwebui.com/getting-started/) 或加入我们的 [Discord 社区](https://discord.gg/5rJgQTnV4s) 获取全面指导。

### 故障排除

遇到连接问题？我们的 [Open WebUI 文档](https://docs.openwebui.com/troubleshooting/) 可以帮您解决。如需进一步帮助并加入我们充满活力的社区，请访问 [Open WebUI Discord](https://discord.gg/5rJgQTnV4s)。

#### Open WebUI：服务器连接错误

如果您遇到连接问题，通常是由于 WebUI docker 容器无法访问容器内 127.0.0.1:11434 (host.docker.internal:11434) 处的 Ollama 服务器。使用 docker 命令中的 `--network=host` 标志来解决此问题。请注意，端口从 3000 更改为 8080，从而产生链接：`http://localhost:8080`。

**示例 Docker 命令**:

```bash
docker run -d --network=host -v open-webui:/app/backend/data -e OLLAMA_BASE_URL=http://127.0.0.1:11434 --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

### 保持 Docker 安装最新

如果您想要将本地 Docker 安装更新到最新版本，可以使用 [Watchtower](https://containrrr.dev/watchtower/) 进行操作:

```bash
docker run --rm --volume /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --run-once open-webui
```

在命令的最后一部分，如果容器名称不同，请将 `open-webui` 替换为您的容器名称。

查看我们的 [Open WebUI 文档](https://docs.openwebui.com/migration/) 中提供的迁移指南。

### 使用 Dev 分支 🌙

> [!警告]
> `:dev` 分支包含最新的不稳定功能和更改。请随意使用它风险自负，因为它可能存在错误或功能不完整。

如果您想尝试最新的前沿功能，并且可以接受偶尔的不稳定，可以使用 `:dev` 标签，如下所示：

```bash
docker run -d -p 3000:8080 -v open-webui:/app/backend/data --name open-webui --add-host=host.docker.internal:host-gateway --restart always ghcr.io/open-webui/open-webui:dev
```

## 下一步是什么？🌟

在 [Open WebUI 文档](https://docs.openwebui.com/roadmap/) 中了解我们路线图上即将推出的功能。

## 支持者 ✨

向我们出色的支持者致谢，他们正在帮助实现这个项目！🙏



### 致谢

特别感谢 [Lawrence Kim 教授](https://www.lhkim.com/) 和 [Nick Vincent 教授](https://www.nickmvincent.com/) 提供的宝贵支持和指导，将该项目塑造成一项研究工作。感谢您在整个旅程中的指导！🙌

## 许可证 📜

该项目根据 [MIT 许可证](LICENSE) 获得许可 - 请参阅 [LICENSE](LICENSE) 文件了解详情。📄

## 支持 💬

如果您有任何问题、建议或需要帮助，请打开问题或加入我们的
[Open WebUI Discord 社区](https://discord.gg/5rJgQTnV4s) 与我们联系！ 🤝


由 [Timothy J. Baek](https://github.com/tjbck) - 让我们一起让 Open WebUI 变得更加精彩！💪