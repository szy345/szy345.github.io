// 文章分类的共享定义，供列表页 / 首页卡片 / 详情页复用
export const categories = [
  { key: 'db-ops', icon: '🗄️', name: '数据库运维', desc: '多年大厂经验的实战沉淀：慢SQL、故障、架构' },
  { key: 'ai-db', icon: '🤖', name: 'AI×数据库', desc: 'AI 怎么改 SQL、做巡检、建知识库' },
  { key: 'service', icon: '🛠️', name: '技术服务', desc: '技术支持 / 外包，能帮你解决什么问题' },
  { key: 'story', icon: '📝', name: '转型记录', desc: '一个数据库工程师的 AI 转型之路' },
];

export function getCategory(key) {
  return categories.find((c) => c.key === key);
}
