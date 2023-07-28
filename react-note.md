## 一 代码组织结构

只看渲染进程src下的代码
- constant 常量
- config 配置
- layout 布局
- components 组件
- models （运行期间）共享数据
- pages 所有页面
  - page-a
  - page-b
- service 服务
  - model-1 模块1 或 页面1
    - enum 枚举
    - api 接口定义
    - interface 数据模型
    - otherServices... 其他服务，具体的业务，通常为可服务的业务
  - model-23456...


## 二 react 代码习惯 或 eslint

### 1. 使用useMemo代替useState+useEffect
条件：当state的set方法只在一个useEffect中使用，且useEffect的函数为同步函数时，使用useMemo代替。能使代码更简洁清晰

```ts
// ----- wrong
const [isEdit, setIsEdit] = useState(false);
useEffect(() => {
  const curId = getCurId();
  curId ==== id && setIsEdit(true);
}, [id])
// ----- right
const isEdit = useMemo(() => {
  const curId = getCurId();
  return curId ==== id;
}, [id]);
```

