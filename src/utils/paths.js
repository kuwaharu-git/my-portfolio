// ベースパスを考慮した画像パスを生成するユーティリティ関数
export const getImagePath = (path) => {
  // パスが既に完全なURLの場合はそのまま返す
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // ベースパスを追加
  const basePath = import.meta.env.BASE_URL;
  
  // パスが / で始まる場合は / を除去してベースパスと結合
  if (path.startsWith('/')) {
    return `${basePath}${path.slice(1)}`;
  }
  
  // パスが / で始まらない場合はそのままベースパスと結合
  return `${basePath}${path}`;
};
