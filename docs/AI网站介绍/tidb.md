

## 什么是 TiDB？

TiDB (/’taɪdiːbi:/，“Ti”代表 Titanium) 是一个开源分布式 SQL 数据库，支持混合事务和分析处理 (HTAP) 工作负载。它兼容 MySQL，具有水平可扩展性、强一致性和高可用性。

- [主要功能](https://docs.pingcap.com/tidb/stable/overview#key-features)
- [架构](#architecture)
- [MySQL 兼容性](https://docs.pingcap.com/tidb/stable/mysql-compatibility)

在 [TiDB Playground](https://play.tidbcloud.com/?utm_source=github&utm_medium=tidb_readme) 在线查看 TiDB 的功能。

有关更多详细信息和最新更新，请参阅 [TiDB 文档](https://docs.pingcap.com/tidb/stable) 和 [发行说明](https://docs.pingcap.com/tidb/dev/release-notes)。

有关未来计划，请参阅 [TiDB 路线图](roadmap.md)。

## 快速入门

### 从 TiDB Cloud 开始

TiDB Cloud 是 TiDB 的全托管服务，目前可在 AWS 和 GCP 上使用。

通过 [免费试用](https://tidbcloud.com/free-trial) 快速试用 TiDB Cloud。

请参阅 [TiDB Cloud 快速入门指南](https://docs.pingcap.com/tidbcloud/tidb-cloud-quickstart)。

### 从 TiDB 开始

请参阅 [TiDB 快速入门指南](https://docs.pingcap.com/tidb/stable/quick-start-with-tidb)。

### 开始使用 TiDB 进行开发

请参阅 [TiDB 开发者指南](https://docs.pingcap.com/tidb/stable/dev-guide-overview) 和 [TiDB Cloud 开发者指南](https://docs.pingcap.com/tidbcloud/dev-guide-overview)。

## 社区

您可以加入以下群组或频道讨论或提问有关 TiDB 的问题，并随时了解最新的 TiDB 更新：

- 使用 TiDB 时寻求帮助
- TiDB 论坛：[英文](https://ask.pingcap.com/)、[中文](https://asktug.com)
- [Discord](https://discord.gg/KVRZBR2DrG?utm_source=github)
- Slack 频道：[#everyone](https://slack.tidb.io/invite?team=tidb-community&channel=everyone&ref=pingcap-tidb) (英文)、[#tidb-japan](https://slack.tidb.io/invite?team=tidb-community&channel=tidb-japan&ref=github-tidb) (日文)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/tidb) (问题标签为#tidb)
- 讨论 TiDB 的实现和设计
- [TiDB 内部论坛](https://internals.tidb.io/)
- 获取最新的 TiDB 新闻或更新
- 在 Twitter 上关注 [@PingCAP](https://twitter.com/PingCAP)
- 阅读 PingCAP [英文博客](https://www.pingcap.com/blog/?from=en) 或 [中文博客](https://cn.pingcap.com/blog/)

如需支持，请联系 [PingCAP](http://bit.ly/contact_us_via_github)。

## 贡献

[社区仓库](https://github.com/pingcap/community) 包含有关 TiDB 社区的所有信息，包括 [如何为 TiDB 贡献](https://github.com/pingcap/community/blob/master/contributors/README.md)、TiDB 社区如何管理、[团队](https://github.com/pingcap/community/blob/master/teams/README.md) 如何组织。

欢迎并非常感谢您的贡献。您可以从 [good first issues](https://github.com/pingcap/tidb/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) 或 [help wanted issues](https://github.com/pingcap/tidb/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) 之一开始。有关典型贡献工作流程的更多详细信息，请参阅 [贡献 TiDB](https://pingcap.github.io/tidb-dev-guide/contribute-to-tidb/introduction.html)。有关从哪里开始的更多贡献信息，请单击下面的贡献者图标。



## 案例研究

- [英文案例研究](https://www.pingcap.com/customers/)
- [中文用户案例](https://cn.pingcap.com/case/)

## 架构

![TiDB 架构]

## 许可

TiDB 遵循 Apache 2.0 许可。详情请参阅 [LICENSE](./LICENSE) 文件。

## 致谢

- 感谢 [cznic](https://github.com/cznic) 提供一些很棒的开源工具。
- 感谢 [GolevelDB](https://github.com/syndtr/goleveldb)、[BoltDB](https://github.com/boltdb/bolt) 和 [RocksDB](https://github.com/facebook/rocksdb) 强大的存储引擎。