# Apache Airflow

<picture width="500">
<img
src="https://github.com/apache/airflow/blob/19ebcac2395ef9a6b6ded3a2faa29dc960c1e635/docs/apache-airflow/img/logos/wordmark_1.png?raw=true"
alt="Apache Airflow logo"
/>
</picture>

[Apache Airflow](https://airflow.apache.org/docs/apache-airflow/stable/)（或​​简称 Airflow）是一个以编程方式编写、安排和监控工作流的平台。

当工作流被定义为代码时，它们会变得更易于维护、可版本控制、可测试和协作。

使用 Airflow 将工作流编写为任务的有向无环图 (DAG)。Airflow 调度程序会在遵循指定的依赖项的同时在工作器数组上执行您的任务。丰富的命令行实用程序使对 DAG 执行复杂的操作变得轻而易举。丰富的用户界面让您可以轻松可视化生产中运行的管道、监控进度并在需要时解决问题。

<!-- 结束 Apache Airflow，请在此处保留注释以允许自动更新 PyPI readme.md -->
<!-- 开始 doctoc 生成的目录，请在此处保留注释以允许自动更新 -->
<!-- 请勿编辑此部分，而是重新运行 doctoc 进行更新 -->
**目录**

- [Apache Airflow](#apache-airflow)
  - [项目重点](#项目重点)
  - [原则](#原则)
  - [要求](#要求)
  - [入门](#入门)
  - [从 PyPI 安装](#从-pypi-安装)
  - [官方源代码](#官方源代码)
  - [便利包](#便利包)
  - [用户界面](#用户界面)
  - [语义版本控制](#语义版本控制)
  - [版本生命周期](#版本生命周期)
  - [支持 Python 和 Kubernetes 版本](#支持-python-和-kubernetes-版本)
  - [参考 Airflow 镜像的基本操作系统支持](#参考-airflow-镜像的基本操作系统支持)
  - [Airflow 依赖项的方法](#airflow-依赖项的方法)
    - [Airflow Core 依赖项的方法](#airflow-core-依赖项的方法)
    - [Airflow Providers 和 extras 中依赖项的方法](#airflow-providers-和-extras-中依赖项的方法)
  - [贡献](#贡献)
  - [投票政策](#投票政策)
  - [谁使用 Apache Airflow？](#谁使用-apache-airflow)
  - [谁维护 Apache Airflow？](#谁维护-apache-airflow)
  - [下一个版本将包含哪些内容？](#下一个版本将包含哪些内容)
  - [我可以在我的演示文稿中使用 Apache Airflow 徽标吗？](#我可以在我的演示文稿中使用-apache-airflow-徽标吗)
  - [链接](#链接)

<!-- END doctoc 生成目录请在此处保留评论以允许自动更新 -->

## 项目重点

Airflow 最适合大部分为静态且变化缓慢的工作流程。当 DAG 结构从一次运行到下一次运行相似时，它可以明确工作单元和连续性。其他类似项目包括 [Luigi](https://github.com/spotify/luigi)、[Oozie](https://oozie.apache.org/) 和 [Azkaban](https://azkaban.github.io/)。

Airflow 通常用于处理数据，但其认为任务最好是幂等的（即任务的结果相同，并且不会在目标系统中创建重复数据），并且不应将大量数据从一个任务传递到下一个任务（尽管任务可以使用 Airflow 的 [XCom 功能](https://airflow.apache.org/docs/apache-airflow/stable/concepts/xcoms.html) 传递元数据）。对于大容量、数据密集型任务，最佳做法是委托给专门从事此类工作的外部服务。

Airflow 不是流式传输解决方案，但它通常用于处理实时数据，批量从流中提取数据。

## 原则

- **动态**：Airflow 管道是配置为代码（Python），允许动态生成管道。这允许编写动态实例化管道的代码。
- **可扩展**：轻松定义您自己的操作符、执行器并扩展库，使其适合您环境的抽象级别。
- **优雅**：Airflow 管道精简且明确。使用强大的 **Jinja** 模板引擎，参数化您的脚本内置于 Airflow 的核心中。
- **可扩展**：Airflow 具有模块化架构，并使用消息队列来协调任意数量的工作器。

<!-- START 要求，请在此处保留注释以允许自动更新 PyPI readme.md -->
## 要求

Apache Airflow 已使用以下测试：

\* 实验

**注意**：MySQL 5.x 版本无法或有限制
运行多个调度程序 - 请参阅 [调度程序文档](https://airflow.apache.org/docs/apache-airflow/stable/administration-and-deployment/scheduler.html)。
MariaDB 未经测试/推荐。

**注意**：SQLite 用于 Airflow 测试。请勿在生产中使用它。我们建议
使用最新稳定版本的 SQLite 进行本地开发。

**注意**：Airflow 目前可以在符合 POSIX 标准的操作系统上运行。对于开发，它定期在相当现代的 Linux 发行版和最新版本的 macOS 上进行测试。
在 Windows 上，您可以通过 WSL2（适用于 Linux 2 的 Windows 子系统）或 Linux 容器运行它。
通过 [#10388](https://github.com/apache/airflow/issues/10388) 跟踪添加 Windows 支持的工作，但
这不是高优先级。您应该只使用基于 Linux 的发行版作为“生产”执行环境，因为这是唯一受支持的环境。我们 CI 测试中使用的唯一发行版和 [社区管理的 DockerHub 映像](https://hub.docker.com/p/apache/airflow) 中使用的发行版是 `Debian Bookworm`。如果您想构建自定义映像，我们还支持旧版 ``Debian Bullseye`` 基础映像，但它已被弃用，并且将在随 Airflow 2.9.3 一起提供的 Dockerfile 中删除执行此操作的选项，因此建议您将自定义映像切换到 ``Debian Bookworm``。

<!-- END 要求，请在此处保留注释以允许自动更新 PyPI readme.md -->
<!-- START 入门，请在此处保留注释以允许自动更新 PyPI readme.md -->
## 入门

访问官方 Airflow 网站文档（最新 **稳定** 版本）以获取有关
[安装 Airflow](https://airflow.apache.org/docs/apache-airflow/stable/installation/)、
[入门](https://airflow.apache.org/docs/apache-airflow/stable/start.html) 或浏览更完整的 [教程](https://airflow.apache.org/docs/apache-airflow/stable/tutorial/) 的帮助。

> 注意：如果您正在寻找主分支（最新开发分支）的文档：您可以在 [s.apache.org/airflow-docs](https://s.apache.org/airflow-docs/) 上找到它。

有关 Airflow 改进提案 (AIP) 的更多信息，请访问
[Airflow Wiki](https://cwiki.apache.org/confluence/display/AIRFLOW/Airflow+Improvement+Proposals)。

您可以在 [文档索引](https://airflow.apache.org/docs/) 中找到依赖项目（如提供程序包、Docker 映像、Helm Chart）的文档。

<!-- END 入门，请在此处保留注释以允许自动更新 PyPI readme.md -->
<!-- START 从 PyPI 安装，请在此处保留注释以允许自动更新 PyPI readme.md -->
## 从 PyPI 安装

我们将 Apache Airflow 发布为 PyPI 中的 `apache-airflow` 包。但是，安装它有时可能会很棘手
因为 Airflow 既是库又是应用程序。库通常保持其依赖项开放，而
应用程序通常固定它们，但我们不应该同时做这两项。我们决定尽可能保持
我们的依赖项开放（在 `pyproject.toml` 中），以便用户可以根据需要安装不同版本的库
。这意味着 `pip install apache-airflow` 有时会不起作用或会产生无法使用的 Airflow 安装。

但是，为了实现可重复安装，我们在孤立的 `constraints-main` 和 `constraints-2-0` 分支中保留了一组“已知可行”的约束文件。我们根据主要/次要 Python 版本分别保留这些“已知可行”的约束文件。
从 PyPI 安装 Airflow 时，您可以将它们用作约束文件。请注意，您必须在 URL 中指定
正确的 Airflow 标签/版本/分支和 Python 版本。

1. 仅安装 Airflow：

> 注意：目前仅正式支持 `pip` 安装。

虽然可以使用 [Poetry](https://python-poetry.org) 或
[pip-tools](https://pypi.org/project/pip-tools) 等工具安装 Airflow，但它们与
`pip` 的工作流程不同 - 尤其是在约束与需求管理方面。
目前不支持通过 `Poetry` 或 `pip-tools` 安装。

``bazel`` 存在已知问题，使用它安装 Airflow 时可能会导致循环依赖。如果遇到此类问题，请切换到 ``pip``。``Bazel`` 社区正在努力修复 ``此 PR <https://github.com/bazelbuild/rules_python/pull/1166>`_ 中的问题，因此 ``bazel`` 的新版本可能会处理它。

如果您希望使用这些工具安装 Airflow，则应使用约束文件并将其转换为您的工具所需的适当格式和工作流程。

```bash
pip install 'apache-airflow==2.9.3' \
--constraint "https://raw.githubusercontent.com/apache/airflow/constraints-2.9.3/constraints-3.8.txt"
```

2. 使用 extras 安装（例如 postgres、google）

```bash
pip install 'apache-airflow[postgres,google]==2.8.3' \
--constraint "https://raw.githubusercontent.com/apache/airflow/constraints-2.9.3/constraints-3.8.txt"
```

有关安装提供程序包的信息，请查看
[providers](http://airflow.apache.org/docs/apache-airflow-providers/index.html)。

<!-- END 从 PyPI 安装，请在此处保留注释以允许自动更新 PyPI readme.md -->
<!-- START 官方源代码，请在此处保留注释以允许自动更新 PyPI readme.md -->
## 官方源代码

Apache Airflow 是一个 [Apache 软件基金会](https://www.apache.org) (ASF) 项目，
我们的官方源代码发布：

- 遵循 [ASF 发布政策](https://www.apache.org/legal/release-policy.html)
- 可从 [ASF 分发目录](https://downloads.apache.org/airflow) 下载
- 由发布经理加密签名
- 由 PMC 成员正式投票决定参见
[发布审批流程](https://www.apache.org/legal/release-policy.html#release-approval)

根据 ASF 规则，发布的源包必须足以供用户构建和测试发布版本，前提是他们可以使用适当的平台和工具。

<!-- END 官方源代码，请在此处保留注释以允许自动更新 PyPI readme.md -->
## 便利包

还有其他安装和使用 Airflow 的方法。这些是“便利”方法 - 它们不是 `ASF 发布政策` 所述的“官方发布”，但不想自己构建软件的用户可以使用它们。

这些是 - 按照人们安装 Airflow 的最常见方式排序：

- [PyPI 版本](https://pypi.org/project/apache-airflow/) 使用标准 `pip` 工具安装 Airflow
- [Docker 镜像](https://hub.docker.com/r/apache/airflow) 通过
`docker` 工具安装 airflow，在 Kubernetes、Helm Charts、`docker-compose`、`docker swarm` 等中使用它们。您可以在
[最新文档](https://airflow.apache.org/docs/docker-stack/index.html) 中阅读有关使用、自定义和扩展镜像的更多信息，并在
[镜像](https://airflow.apache.org/docs/docker-stack/index.html) 文档中了解内部细节。
- [GitHub 中的标签](https://github.com/apache/airflow/tags) 检索用于通过 git 生成官方源包的 git 项目源

所有这些工件都不是官方发布的，但它们是使用官方发布的源准备的。
其中一些工件是“开发”或“预发布”工件，它们按照 ASF 政策明确标记为此类。

## 用户界面

- **DAG**：环境中所有 DAG 的概览。

![DAG](https://raw.githubusercontent.com/apache/airflow/main/docs/apache-airflow/img/dags.png)

- **网格**：跨时间的 DAG 的网格表示。

![网格](https://raw.githubusercontent.com/apache/airflow/main/docs/apache-airflow/img/grid.png)

- **图表**：DAG 依赖项及其特定运行的当前状态的可视化。

![图表](https://raw.githubusercontent.com/apache/airflow/main/docs/apache-airflow/img/graph.png)

- **任务持续时间**：不同任务随时间变化所花费的总时间。

![任务持续时间](https://raw.githubusercontent.com/apache/airflow/main/docs/apache-airflow/img/duration.png)

- **甘特图**：DAG 的持续时间和重叠。

![Gantt](https://raw.githubusercontent.com/apache/airflow/main/docs/apache-airflow/img/gantt.png)

- **Code**：查看 DAG 源代码的快捷方式。

![Code](https://raw.githubusercontent.com/apache/airflow/main/docs/apache-airflow/img/code.png)

## 语义版本控制

从 Airflow 2.0.0 开始，我们支持对所有发布的软件包采用严格的 [SemVer](https://semver.org/) 方法。

我们同意了一些具体规则，这些规则定义了不同软件包版本控制的详细信息：

* **Airflow**：SemVer 规则仅适用于核心 airflow（不包括对提供商的任何更改）。
更改 Airflow 依赖项版本的限制本身并不是重大更改。
* **Airflow 提供程序**：SemVer 规则仅适用于特定提供程序代码中的更改。
软件包的 SemVer MAJOR 和 MINOR 版本与 Airflow 版本无关。
例如，`google 4.1.0` 和 `amazon 3.0.3` 提供程序可以顺利地与 `Airflow 2.1.2` 一起安装。如果提供程序和 Airflow 软件包之间存在交叉依赖关系限制，
它们将作为 `install_requires` 限制出现在提供程序中。我们的目标是保持提供程序与所有以前发布的 Airflow 2 版本的向后兼容性，但
有时会发生重大更改，这可能会导致部分或所有
提供程序指定最低 Airflow 版本。
* **Airflow Helm Chart**：SemVer 规则仅适用于图表中的更改。图表的 SemVer MAJOR 和 MINOR
版本与 Airflow 版本无关。我们的目标是保持 Helm Chart 与所有已发布的 Airflow 2 版本的向后兼容性，但某些新功能可能仅从特定的 Airflow 版本开始起作用。但是，我们可能会限制 Helm Chart 依赖于最低限度的 Airflow 版本。
* **Airflow API 客户端**：它们的版本控制与 Airflow 版本无关。它们遵循自己的 SemVer 规则来处理重大更改和新功能 - 例如，这允许更改我们生成客户端的方式。

## 版本生命周期

Apache Airflow 版本生命周期：

有限支持版本将仅支持安全性和关键错误修复。

EOL 版本将不会获得任何修复或支持。
我们始终建议所有用户运行正在使用的主要版本的最新可用次要版本。
我们**强烈**建议在最早方便的时间并在 EOL 日期之前升级到最新的 Airflow 主要版本。

## 支持 Python 和 Kubernetes 版本

从 Airflow 2.0 开始，我们同意遵循某些规则来支持 Python 和 Kubernetes。
它们基于 Python 和 Kubernetes 的官方发布时间表，在
[Python 开发人员指南](https://devguide.python.org/#status-of-python-branches) 和
[Kubernetes 版本偏差策略](https://kubernetes.io/docs/setup/release/version-skew-policy/) 中有很好的总结。

1. 当 Python 和 Kubernetes 版本达到 EOL 时，我们将停止对它们的支持。除了 Kubernetes，如果两个主要云提供商仍为某个版本提供支持，Airflow 将继续支持该版本。我们在 EOL 日期之后立即在主要版本中停止对这些 EOL 版本的支持，并且在我们发布 Airflow 的第一个新 MINOR（如果没有新的 MINOR 版本，则为 MAJOR）时，该支持实际上已被删除。例如，对于 Python 3.8，这意味着我们将在 2023 年 6 月 27 日之后立即在主要版本中停止支持，之后发布的 Airflow 的第一个 MAJOR 或 MINOR 版本将不会提供该支持。

2. 在 Python/Kubernetes 正式发布后，我们会在主要版本中支持新版本，一旦我们让它们在我们的 CI 管道中工作（由于依赖项大多会追赶新版本的 Python，因此可能不会立即生效），我们会根据有效的 CI 设置在 Airflow 中发布新的镜像/支持。

3. 此政策是尽力而为，这意味着如果情况需要，我们可能会提前终止支持。

## 参考 Airflow 镜像的基本操作系统支持

Airflow 社区提供方便打包的容器镜像，这些镜像会在我们发布 Apache Airflow 版本时发布。这些镜像包含：

* 包含安装 Airflow 所需软件包的基本操作系统（稳定的 Debian 操作系统）
* 已发布 Airflow MINOR 版本时支持的版本中的基本 Python 安装（因此例如 2.3 和 2.2 系列可能存在不同版本）
* 连接到支持的数据库所需的库（同样，支持的数据库集取决于 Airflow 的 MINOR 版本）
* 预定义的一组常用提供程序（有关详细信息，请参阅 [Dockerfile](https://raw.githubusercontent.com/apache/airflow/main/Dockerfile)）。
* 可以构建自己的自定义镜像，用户可以在其中选择自己的一组提供程序
和库（请参阅 [构建镜像](https://airflow.apache.org/docs/docker-stack/build.html)）
* 将来，Airflow 可能还会支持不安装提供程序或数据库客户端的“精简”版本

基本操作系统镜像的版本是 Debian 的稳定版本。 Airflow 支持使用所有当前活动的稳定版本 - 一旦所有 Airflow 依赖项都支持构建，并且我们设置了用于构建和测试操作系统版本的 CI 管道。在操作系统上一个稳定版本的常规支持结束前大约 6 个月，Airflow 会将发布的映像切换为使用操作系统的最新支持版本。

例如，由于“Debian Buster”的生命周期结束时间为 2022 年 8 月，Airflow 在 2022 年 2 月/3 月将“main”分支中的映像切换为使用“Debian Bullseye”。切换发生后，该版本将在下一个 MINOR 版本中使用。在 Bullseye 切换的情况下 - 2.3.0 版本使用“Debian Bullseye”。
在上一个 MINOR 版本中发布的映像继续使用 MINOR 版本使用的所有其他版本。在 2023 年 10 月发布 2.8.0 之前，已经实现了从“Debian Bullseye”到“Debian Bookworm”的类似切换，并且从 Airflow 2.9.0 开始，“Debian Bookworm”将是唯一支持的选项。

用户将继续能够使用稳定的 Debian 版本构建他们的图像，直到常规支持结束
并且图像的构建和验证在我们的 CI 中进行，但没有使用“main”分支中的此图像执行单元测试。

## Airflow 依赖项的方法

Airflow 有很多依赖项 - 直接和传递，而且 Airflow 既是库又是应用程序，因此我们对依赖项的策略必须包括应用程序安装的稳定性，
但也必须为开发 DAG 的用户安装较新版本的依赖项的能力。我们开发了一种方法，其中使用“约束”来确保可以重复安装 airflow，同时
我们不限制用户升级大多数依赖项。因此，我们决定默认不对 Airflow 依赖项的版本进行上限限制，除非我们有充分的理由相信由于依赖项的重要性以及升级特定依赖项所涉及的风险而需要对它们进行上限限制。

我们还对我们知道会导致问题的依赖项进行上限限制。

我们的约束机制负责自动查找和升级所有非上限依赖项（前提是所有测试都通过）。我们的 `main` 构建失败将指示是否存在破坏我们测试的依赖项版本 - 表明我们应该对它们进行上限限制，或者我们应该修复我们的代码/测试以考虑来自这些依赖项的上游更改。

每当我们限制这样的依赖项时，我们应该始终评论我们这样做的原因 - 即我们应该有依赖项上限的充分理由。我们还应该提到删除绑定的条件是什么。

### Airflow Core 依赖项的方法

这些依赖项在 ``pyproject.toml`` 中维护。

我们认为很少有依赖项足够重要，默认情况下需要对它们进行上限设置，因为它们遵循可预测的版本控制方案，并且我们知道这些依赖项的新版本很可能会带来重大更改。我们承诺定期审查并尝试在发布依赖项时升级到较新版本，但这是手动过程。

重要的依赖项是：

* `SQLAlchemy`：上限为特定的 MINOR 版本（众所周知，SQLAlchemy 会删除弃用并引入重大更改，尤其是对不同数据库的支持各不相同并以不同的速度变化）
* `Alembic`：以可预测和高效的方式处理我们的迁移非常重要。它是与 SQLAlchemy 一起开发的。我们使用 Alembic 的经验是它在 MINOR 版本中非常稳定
* `Flask`：我们将 Flask 用作 Web UI 和 API 的骨干。我们知道 Flask 的主要版本
很可能会在这些版本中引入重大更改，因此将其限制为 MAJOR 版本是有意义的
* `werkzeug`：已知该库会在新版本中引起问题。它与 Flask
库紧密耦合，我们应该一起更新它们
* `celery`：Celery 是 Airflow 的重要组成部分，因为它用于 CeleryExecutor（和类似版本）。Celery
[遵循 SemVer](https://docs.celeryq.dev/en/stable/contributing.html?highlight=semver#versions)，因此
我们应该将其上限设置为下一个 MAJOR 版本。此外，当我们升级库的上限版本时，
我们应该确保 Celery Provider 的最低 Airflow 版本得到更新。
* `kubernetes`：Kubernetes 是 Airflow 的关键组件，因为它用于 KubernetesExecutor
（及类似组件）。Kubernetes Python 库 [遵循 SemVer](https://github.com/kubernetes-client/python#compatibility)，
因此我们应该将其上限设置为下一个主要版本。此外，当我们升级库的上限版本时，
我们应该确保 Kubernetes Provider 最低 Airflow 版本已更新。

### Airflow Providers 和 extras 中依赖项的方法

Airflow 的主要部分是 Airflow Core，但 Airflow 的强大功能还来自许多
扩展核心功能并单独发布的提供程序，即使我们（目前）为了方便起见将它们保留在同一个 monorepo 中。您可以在
[Providers 文档](https://airflow.apache.org/docs/apache-airflow-providers/index.html) 中阅读有关提供程序的更多信息。我们还实施了一套政策，用于维护和发布社区管理的提供商，以及在 [providers](https://github.com/apache/airflow/blob/main/PROVIDERS.rst) 文档中针对社区与第三方提供商的方法。

这些 `extras` 和 `providers` 依赖项在每个提供商的 `provider.yaml` 中维护。

默认情况下，我们不应该为提供商设置依赖项的上限，但是每个提供商的维护者
可能会决定添加额外的限制（并通过注释说明）。

<!-- 开始贡献，请在此处保留注释以允许自动更新 PyPI readme.md -->

## 贡献

想要帮助构建 Apache Airflow？查看我们的 [贡献文档](https://github.com/apache/airflow/blob/main/contributing-docs/README.rst)。

Apache Airflow 的官方 Docker（容器）镜像在 [images](dev/breeze/doc/ci/02_images.md) 中描述。

<!-- END 贡献者，请在此处保留评论以允许自动更新 PyPI readme.md -->
<!-- START 谁使用 Apache Airflow，请在此处保留评论以允许自动更新 PyPI readme.md -->

## 投票政策

* 提交需要来自非作者提交者的 +1 投票
* 当我们进行 AIP 投票时，PMC 成员和提交者的“+1”都被视为具有约束力的投票。

## 谁使用 Apache Airflow？

我们知道大约有 500 个组织正在使用 Apache Airflow（但可能还有更多）
[在野外](https://github.com/apache/airflow/blob/main/INTHEWILD.md)。

如果您使用 Airflow - 请随时创建 PR 以将您的组织添加到列表中。

<!-- END 谁使用 Apache Airflow，请在此处保留评论以允许自动更新 PyPI readme.md -->
<!-- START 谁维护 Apache Airflow，请在此处保留评论以允许自动更新 PyPI readme.md -->

## 谁维护 Apache Airflow？

Airflow 是 [社区](https://github.com/apache/airflow/graphs/contributors) 的作品，
但 [核心提交者/维护者](https://people.apache.org/committers-by-project.html#airflow)
负责审查和合并 PR 以及引导有关新功能请求的对话。
如果您想成为维护者，请查看 Apache Airflow
[提交者要求](https://github.com/apache/airflow/blob/main/COMMITTERS.rst#guidelines-to-become-an-airflow-committer)。

<!-- END 谁维护 Apache Airflow，请在此处保留评论以允许自动更新 PyPI readme.md -->

## 下一个版本将包含哪些内容？

通常，您会看到分配给 Airflow 版本特定里程碑的问题，或者合并到主分支的 PR，您可能想知道合并的 PR 将在哪个版本中发布，或者修复的问题将在哪个版本中发布。 这个问题的答案和往常一样 - 这取决于各种情况。 PR 和问题的答案不同。

为了添加一些背景信息，我们遵循 [Semver](https://semver.org/) 版本控制方案，如
[Airflow 发布流程](https://airflow.apache.org/docs/apache-airflow/stable/release-process.html) 中所述。更多
详细信息在本 README 的 [语义版本控制](#semantic-versioning) 章节中详细说明，但
简而言之，我们有 Airflow 的 `MAJOR.MINOR.PATCH` 版本。

* 如果有重大更改，`MAJOR` 版本会递增
* 如果有新功能添加，`MINOR` 版本会递增
* 如果有仅错误修复和文档更改，`PATCH` 版本会递增

通常，我们会从以 MINOR 版本命名的分支发布 Airflow 的 `MINOR` 版本。例如

`2.7.*` 版本从 `v2-7-stable` 分支发布，`2.8.*` 版本从 `v2-8-stable`
分支发布，等等。

1. 在我们的发布周期中，大多数情况下，当下一个 `MINOR` 分支的分支尚未创建时，所有

合并到 `main` 的 PR（除非它们被还原）都会进入下一个 `MINOR` 版本。例如

如果最后一个版本是 `2.7.3` 并且 `v2-8-stable` 分支尚未创建，则下一个 `MINOR` 版本

是 `2.8.0`，并且所有合并到 main 的 PR 都将在 `2.8.0` 中发布。但是，一些 PR（错误修复和

仅文档更改）在合并时可以挑选到当前的 `MINOR` 分支并在

下一个 `PATCHLEVEL` 版本中发布。例如，如果 `2.8.1` 已经发布，而我们正在开发 `2.9.0dev`，那么
将 PR 标记为 `2.8.2` 里程碑意味着它将被挑选到 `v2-8-test` 分支并
在 `2.8.2rc1` 中发布，最终在 `2.8.2` 中发布。

2. 当我们准备下一个 `MINOR` 版本时，我们会剪切新的 `v2-*-test` 和 `v2-*-stable` 分支
并为下一个 `MINOR` 版本准备 `alpha`、`beta` 版本，合并到主版本的 PR 仍将在
下一个 `MINOR` 版本中发布，直到剪切 `rc` 版本。发生这种情况的原因是，当准备下一个 `beta` 和 `rc` 版本时，`v2-*-test`
和 `v2-*-stable` 分支会在主版本之上重新建立。
例如，当我们剪切`2.10.0beta1`版本时，在`2.10.0rc1`发布之前合并到主版本的任何内容
都将进入 2.10.0rc1。

3. 然后，一旦我们为 MINOR 版本准备了第一个 RC 候选版本，我们就会停止移动`v2-*-test`和
`v2-*-stable`分支，合并到主版本的 PR 将在下一个`MINOR`版本中发布。
但是，一些 PR（错误修复和仅文档更改）在合并时可以挑选到当前`MINOR`分支并在​​下一个`PATCHLEVEL`版本中发布 - 例如，当`v2-10-stable`分支的最后一个发布版本是`2.10.0rc1`时，提交者可以将主版本中的一些 PR 标记为`2.10.0`里程碑，
发布经理将尝试将它们挑选到发布分支中。
如果成功，它们将在 `2.10.0rc2` 中发布，随后在 `2.10.0` 中发布。这也适用于
后续的 `PATCHLEVEL` 版本。例如，当 `2.10.1` 已经发布时，用
`2.10.2` 里程碑标记 PR 将意味着它将被挑选到 `v2-10-stable` 分支并在 `2.10.2rc1`
中发布，并最终在 `2.10.2` 中发布。

关于挑选的最终决定由发布经理做出。

用里程碑标记问题有点不同。维护者通常不会用里程碑标记问题，
通常只在 PR 中标记。如果与问题相关的 PR（以及“修复问题”）按照上述流程合并并发布在特定版本中，则问题将自动关闭，不会为问题设置里程碑，您需要检查修复问题的 PR 以查看其发布在哪个版本中。

但是，有时维护者会用特定里程碑标记问题，这意味着在准备发布时，该问题对于成为候选者非常重要。由于这是一个开源项目，基本上所有贡献者都自愿贡献时间，因此无法保证特定问题会在特定版本中得到修复。我们不想因为某些问题未修复而暂停发布，因此在这种情况下，发布经理会将这些未修复的问题重新分配给下一个里程碑，以防它们没有及时修复到当前版本。因此，问题的里程碑更多的是一种应该关注的意图，而不是承诺它会在版本中修复。

有关补丁级别版本的更多背景信息和**常见问题**，请参阅
[下一个版本的内容](dev/WHAT_GOES_INTO_THE_NEXT_RELEASE.md) 文档，位于

存储库的 `dev` 文件夹中。

## 我可以在我的演示文稿中使用 Apache Airflow 徽标吗？

可以！请务必遵守 Apache 基金会 [商标政策](https://www.apache.org/foundation/marks/#books) 和 Apache Airflow [品牌手册](https://cwiki.apache.org/confluence/display/AIRFLOW/Brandbook)。最新的徽标可在 [此存储库](https://github.com/apache/airflow/tree/main/docs/apache-airflow/img/logos/) 和 Apache 软件基金会 [网站](https://www.apache.org/logos/about.html) 中找到。

## 链接

- [文档](https://airflow.apache.org/docs/apache-airflow/stable/)
- [聊天](https://s.apache.org/airflow-slack)
- [社区信息](https://airflow.apache.org/community/)