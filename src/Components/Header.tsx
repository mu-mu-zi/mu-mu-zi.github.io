import theme_dark from '@/assets/svg/theme_dark.svg';
import theme_light from '@/assets/svg/theme_light.svg';
import language from '@/assets/svg/language.svg';
import logo from '@/assets/svg/logo.svg';
import useAppStore from '../store/useAppStore';
import useTheme, { THEME } from '../hooks/useTheme';
import RouterLink from './RouterLink';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isLight } = useTheme();
  const setTheme = useAppStore((state) => state.setTheme);

  return (
    <div className="bg-bg flex w-full items-center justify-between p-4">
      <div className="flex gap-[150px]">
        <Link to="/">
          <img className="h-[40px] w-[160px]" src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-5 font-semibold">
          <RouterLink to="share">日常分享</RouterLink>
          <RouterLink to="chat">碎碎念</RouterLink>
          <RouterLink to="/about">关于</RouterLink>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="cursor-pointer" onClick={() => setTheme(isLight ? THEME.dark : THEME.light)}>
          {isLight ? <img className="size-[24px]" src={theme_dark} alt="" /> : <img className="size-[24px]" src={theme_light} alt="" />}
        </div>
        <div className="cursor-pointer">
          <img className="size-[24px]" src={language} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
