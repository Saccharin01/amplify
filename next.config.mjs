/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', //정적 사이트 생성(Static Site Generation, SSG) 모드를 활성화하는 데 사용
  distDir: 'build',  // 빌드 결과물을 저장할 디렉터리 지정
};
  
export default nextConfig;