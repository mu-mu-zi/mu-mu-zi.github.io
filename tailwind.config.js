/** @type {import("tailwindcss").Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        zIndex: {
          /* scroll area */
          'scroll-area': 5,
          /* 导航栏 */
          navbar: 10,
          /* modal 弹窗 */
          dialog: 50,
          /* 下拉菜单，小 Tips */
          dropdown: 100,
          /* 全屏 Loading */
          backdrop: 800,
          /* Toast, 通知 */
          toast: 900
        }
      }
    },
    plugins: []
  };