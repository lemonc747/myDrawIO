## 数据结构

- 底稿导出任务

## 数据存储

参考选型
- indexDB
- levelDB
- sqlite3

indexDB/Dexie.js：基于indexDB的封装，浏览器端的数据库，目前业务场景主要是在主进程端实现任务队列

levelDB：nosql数据库，基于levelDB,node和browser都可用，这里主要用于主进程

sqlite3：关系型数据库，主要是安装环境坑多


## Q&A

Q: 创建任务
A：方案1：在创建任务时，获取所有文件信息，计算所有文件的路径。方案2：在创建任务时，仅记录项目，目录等主要信息，在导出时获取文件信息，计算路径。
方案2: 1.无法展示完整的导出列表，必须下载一部分展示一部分；2.下载中断后继续，定位困难
方案1：创建时计算，实现上逻辑更清晰，但在文件有修改的情况，文件的size会对不上，导致断点续传异常？是否考虑这种场景
方案3：使用方案1，但是下载时携带版本号，只下载创建任务时的版本

Q：
A：

Q: 创建任务耗时随目录增加而增加，该过程放到主进程还是渲染进程？需要为上传下载队列生成专用的线程吗？
A：上传下载主要是请求+I/O操作，都有异步版本，CPU占用并不繁重，没必要使用专用线程





# Node.js环境的level数据库，基础api用法
按字典顺序排序的键值数据库，基于levelDB，用于Node.js的classical-level和browsers的browser-level的包装的入口
- Node.js：基于levelDB
- browser：基于indexDB
以下内容，只包含Node.js的部分
## ref
https://github.com/Level/level

npm install level
## API

### db = new Level(location[, options])

创建一个新的数据库 or 打开一个已存在的数据库

- location：本地路径（相对或绝对路径）
- options：
  - keyEncoding (string or object, default 'utf8'): encoding to use for keys
  - valueEncoding (string or object, default 'utf8'): encoding to use for values.

### db.status
获取当前数据的状态，只读，包括：opening open closing closed

### db.open([callback])
打开数据库，成功或失败后调用callback，失败时参数为一个错误信息（nodejs的error-first模式）

一般来说，不用主动调用open，因为构造函数会自动调用，但也有使用场景
1. 在主动`close`关闭数据库后，再次打开
2. 用于捕获打开失败的错误信息？

### db.close([callback])
关闭数据库，成功或失败后调用callback，失败时参数为一个错误信息（nodejs的error-first模式）

推荐：在使用完后关闭数据库，因为数据库可能有关联的资源，如文件句柄和锁。