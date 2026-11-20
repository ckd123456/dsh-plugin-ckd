# dsh-plugin-ckd

dsh 插件脚手架，基于 `@opencode-ai/plugin`。

- 作者：ckd123456
- 版本：0.1.0
- 许可证：MIT

## 结构

```
plugin.json     插件清单（id / 版本 / 入口 / 工具）
package.json    包元数据
src/index.js    插件入口（导出 Plugin 函数）
```

## 使用

```bash
npm install
node --check src/index.js
```

安装到项目：将 `src/index.js` 复制为 `.opencode/plugin/dsh-plugin-ckd.js`。

## 工具

| 工具 | 说明 |
| --- | --- |
| `dsh_hello` | 返回插件版本与当前工作目录 |

## 自定义

修改 `plugin.json` 的 `id`/`version`/`tools`，并在 `src/index.js` 的 `tool` 对象中新增工具。

## License

MIT © 2026 ckd123456
