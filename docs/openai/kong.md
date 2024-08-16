**Kong** 或 **Kong API Gateway** 是一个云原生、平台无关、可扩展的 API 网关，以其高性能和通过插件扩展性而著称。它还提供高级 AI 功能和多 LLM 支持。

通过提供代理、路由、负载平衡、健康检查、身份验证（以及 [更多](#features)）功能，Kong 可轻松充当编排微服务或传统 API 流量的中央层。

得益于其官方 [Kubernetes Ingress Controller](https://github.com/Kong/kubernetes-ingress-controller)，Kong 可在 Kubernetes 上原生运行。

---

[安装](https://konghq.com/install/#kong-community) | [文档](https://docs.konghq.com) | [讨论](https://github.com/Kong/kong/discussions) | [论坛](https://discuss.konghq.com) | [博客](https://konghq.com/blog) | [构建][kong-master-builds]

---

## 入门

让我们通过在 5 分钟内向 API 添加身份验证来测试 Kong。

我们建议按照以下说明使用 docker-compose 发行版，但如果您希望在无 DB 模式下运行 Kong API 网关，还有一个 [docker 安装](https://docs.konghq.com/gateway/latest/install/docker/#install-kong-gateway-in-db-less-mode) 程序。

无论您是在云端、裸机上运行还是使用容器，您都可以在我们的 [官方安装](https://konghq.com/install/#kong-community) 页面上找到每个受支持的发行版。

1) 首先，克隆 Docker 存储库并导航到 compose 文件夹。
```cmd
$ git clone https://github.com/Kong/docker-kong
$ cd docker-kong/compose/
```

2) 使用以下命令启动 Gateway 堆栈：
```cmd
$ KONG_DATABASE=postgres docker-compose --profile database up
```

Gateway 现在可在 localhost 上的以下端口上使用：

- `:8000` - 通过 Kong 将流量发送到您的服务
- `:8001` - 使用 Admin API 或通过 [decK](https://github.com/kong/deck) 配置 Kong
- `:8002` - 在 [localhost:8002](http://localhost:8002) 上访问 Kong 的管理 Web UI ([Kong Manager](https://github.com/Kong/kong-manager))

接下来，按照 [快速入门指南](https://docs.konghq.com/gateway-oss/latest/getting-started/configuring-a-service/
) 来介绍 Gateway 的功能。

## 功能

通过将通用 API 功能集中到组织的所有服务中，Kong API Gateway 为工程团队创造了更多自由，使他们可以专注于最重要的挑战。

Kong 的主要功能包括：
- 高级路由、负载平衡、健康检查 - 所有这些都可以通过 RESTful 管理 API 或声明性配置进行配置。
- 使用 JWT、基本身份验证、OAuth、ACL 等方法对 API 进行身份验证和授权。
- 代理、SSL/TLS 终止和 L4 或 L7 流量的连接支持。
- 用于实施流量控制、速率限制、req/res 转换、日志记录、监控和包括插件开发人员中心的插件。
- 用于 AI 流量的插件，支持多 LLM 实现和无代码 AI 用例，具有高级 AI 提示工程、AI 可观察性、AI 安全性等。
- 复杂的部署模型，如声明式无数据库部署和混合部署（控制平面/数据平面分离），无需任何供应商锁定。
- 本机 [ingress 控制器](https://github.com/Kong/kubernetes-ingress-controller) 支持为 Kubernetes 提供服务。

[![][kong-benefits]][kong-url]

### 插件中心
插件提供高级功能，可扩展网关的使用。许多 Kong Inc. 和社区开发的插件，如 AWS Lambda、Correlation ID 和 Response Transformer 都在 [插件中心](https://docs.konghq.com/hub/) 上展示。

为插件中心做出贡献，确保您的下一个创新想法能够发布并提供给更广泛的社区！

## 贡献

我们 ❤️ 拉取请求，并且我们一直在努力让开发人员尽可能轻松地做出贡献。在开始使用 Kong API 网关进行开发之前，请熟悉以下开发人员资源：
- 社区承诺 ([COMMUNITY_PLEDGE.md](COMMUNITY_PLEDGE.md))，我们承诺与您（开源社区）互动。
- 贡献者指南 ([CONTRIBUTING.md](CONTRIBUTING.md))，了解如何为 Kong 做出贡献。
- 开发指南 ([DEVELOPER.md](DEVELOPER.md))：设置您的开发环境。
- [CODE_OF_CONDUCT](CODE_OF_C)ONDUCT.md) 和 [版权](版权)

使用 [插件开发指南](https://docs.konghq.com/latest/plugin-development/) 构建新的创意插件，或浏览 [插件开发工具包 (PDK) 参考](https://docs.konghq.com/latest/pdk/) 中 Kong 源代码文档的在线版本。开发人员可以使用 [Lua](https://docs.konghq.com/gateway/latest/plugin-development/)、[Go](https://docs.konghq.com/gateway-oss/latest/external-plugins/#developing-go-plugins) 或 [JavaScript](https://docs.konghq.com/gateway-oss/latest/external-plugins/#developing-javascript-plugins) 构建插件。

## 发布

有关特定版本的更多详细信息，请参阅 [变更日志](CHANGELOG.md)。对 Gateway 发布版本进行版本控制时，将遵循 [SemVer 规范](https://semver.org)。

## 加入社区

- 查看 [文档](https://docs.konghq.com/)
- 加入 [Kong 讨论论坛](https://github.com/Kong/kong/discussions)
- 加入 Kong Nation 论坛上的 Kong 讨论：[https://discuss.konghq.com/](https://discuss.konghq.com/)
- 加入我们的 [Community Slack](http://kongcommunity.slack.com/)
- 在我们的 [博客](https://konghq.com/blog/) 上阅读最新动态
- 在 [X](https://x.com/thekonginc) 上关注我们
- 订阅我们的 [YouTube 频道](https://www.youtube.com/c/KongInc/videos)
- 访问我们的 [主页](https://konghq.com/) 了解更多信息

## Konnect Cloud

Kong Inc. 提供商业订阅，可通过多种方式增强 Kong API 网关。 Kong 的 [Konnect Cloud](https://konghq.com/kong-konnect/) 订阅客户可利用额外的网关功能、商业支持以及对 Kong 托管 (SaaS) 控制平面平台的访问。Konnect Cloud 平台功能包括实时分析、服务目录、开发者门户等等！[开始使用](https://konghq.com/products/kong-konnect/register?utm_medium=Referral&utm_source=Github&utm_campaign=kong-gateway&utm_content=konnect-promo-in-gateway&utm_term=get-started) Konnect Cloud。