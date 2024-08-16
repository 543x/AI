# gpt-engineer

gpt-engineer 可让您：
- 用自然语言指定软件
- 坐下来观看 AI 编写和执行代码
- 要求 AI 实施改进

## 入门

### 安装 gpt-engineer

对于**稳定**版本：

- `python -m pip install gpt-engineer`

对于**开发**版本：
- `git clone https://github.com/gpt-engineer-org/gpt-engineer.git`
- `cd gpt-engineer`
- `poetry install`
- `poetry shell` 激活虚拟环境

我们积极支持 Python 3.10 - 3.12。支持 Python 3.8 - 3.9 的最后一个版本是 [0.2.6](https://pypi.org/project/gpt-engineer/0.2.6/)。

### 设置 API 密钥

选择**其中之一**：
- 导出环境变量（您可以将其添加到 .bashrc，这样您就不必在每次启动终端时都这样做）
- `export OPENAI_API_KEY=[您的 api 密钥]`
- .env 文件：
- 创建名为 `.env` 的 `.env.template` 副本
- 在 .env 中添加您的 OPENAI_API_KEY
- 自定义模型：
- 请参阅 [docs](https://gpt-engineer.readthedocs.io/en/latest/open_models.html)，支持本地模型、azure 等。

查看 [Windows README](./WINDOWS_README.md) 了解 Windows 用法。

**其他运行方式：**
- 使用 Docker（[说明](docker/README.md))
- 在浏览器中执行所有操作：
[![在 GitHub Codespaces 中打开](https://github.com/codespaces/badge.svg)](https://github.com/gpt-engineer-org/gpt-engineer/codespaces)

### 创建新代码（默认用法）
- 在计算机上的任何位置为您的项目创建一个空文件夹
- 在新文件夹中创建一个名为“prompt”（无扩展名）的文件，并在其中填充说明
- 使用文件夹的相对路径运行
- 例如：从 gpt-engineer 目录根目录运行“gpte projects/my-new-project”，新文件夹位于“projects/”中

### 改进现有代码
- 在计算机上的任何位置找到包含您想要改进的代码的文件夹
- 在新文件夹中创建一个名为“prompt”（无扩展名）的文件，并在其中填充说明您希望如何改进代码
- 使用文件夹的相对路径运行 `gpte <project_dir> -i`
- 例如：从 gpt-engineer 目录根目录使用 `projects/` 中的文件夹运行 `gpte projects/my-old-project -i`

### 对自定义代理进行基准测试
- gpt-engineer 安装二进制文件“bench”，它为您提供了一个简单的界面，用于根据流行的公共数据集对您自己的代理实现进行基准测试。
- 开始基准测试的最简单方法是查看 [template](https://github.com/gpt-engineer-org/gpte-bench-template) repo，其中包含详细说明和代理模板。
- 当前支持的基准：
- [APPS](https://github.com/hendrycks/apps)
- [MBPP](https://github.com/google-research/google-research/tree/master/mbpp)

运行 gpt-engineer 即表示您同意我们的 [条款](https://github.com/gpt-engineer-org/gpt-engineer/blob/main/TERMS_OF_USE.md)。

## 与 gptengineer.app (GPT Engineer) 的关系
[gptengineer.app](https://gptengineer.app/) 是一个用于自动生成 Web 应用的商业项目。
它为连接到 git 控制的代码库的非技术用户提供了 UI。
gptengineer.app 团队正在积极支持开源社区。

## 功能

### 预提示
您可以通过用您自己的 `preprompts` 版本覆盖 `preprompts` 文件夹来指定 AI 代理的“身份”。您可以通过 `--use-custom-preprompts` 参数执行此操作。

编辑 `preprompts` 是让代理记住项目之间事情的方法。

### 视觉

默认情况下，gpt-engineer 需要通过 `prompt` 文件输入文本。它还可以接受具有视觉功能的模型的图像输入。这对于将 UX 或架构图作为 GPT Engineer 的附加上下文添加很有用。您可以通过使用 `—-image_directory` 标志指定图像目录并在第二个 CLI 参数中设置具有视觉功能的模型来执行此操作。

例如`gpte projects/example-vision gpt-4-vision-preview --prompt_file prompt/text --image_directory prompt/images -i`

### 开源、本地和替代模型

默认情况下，gpt-engineer 通过 OpenAI API 或 Azure OpenAI API 支持 OpenAI 模型，以及 Anthropic 模型。

只需进行一些额外的设置，您还可以使用 WizardCoder 等开源模型运行。请参阅 [文档](https://gpt-engineer.readthedocs.io/en/latest/open_models.html) 获取示例说明。

## 使命

gpt-engineer 社区的使命是 **维护编码代理构建者可以使用的工具并促进开源社区的协作**。

如果您有兴趣为此做出贡献，我们欢迎您。

如果您想了解我们更广泛的抱负，请查看[路线图](https://github.com/gpt-engineer-org/gpt-engineer/blob/main/ROADMAP.md)，并加入
[discord](https://discord.gg/8tcDQ89Ej2)
了解如何为其[贡献](.github/CONTRIBUTING.md)。

gpt-engineer 由长期贡献者委员会[管理](https://github.com/gpt-engineer-org/gpt-engineer/blob/main/GOVERNANCE.md)。如果您贡献定期进行 ute 并且有兴趣塑造 gpt-engineer 的未来，您将被考虑加入董事会。

## 示例

https://github.com/gpt-engineer-org/gpt-engineer/assets/4467025/40d0a9a8-82d0-4432-9376-136df0d57c99