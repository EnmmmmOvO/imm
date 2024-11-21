import Index from '../mobile-menu';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMobileNav } from '../../store';
import { useTranslation } from 'react-i18next';
import Option from './option';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(0);
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();

  const scrollCheck = () => {
    const scrollTop = window.scrollY;
    const threshold = 300;
    const buffer = 100;

    if (scrollTop > lastScrollTop) {
      if (scrollTop > threshold + buffer) {
        setShowHeader(false);
        dispatch(closeMobileNav());
        setScrollThreshold(scrollTop);
      }
    } else {
      if (scrollTop < scrollThreshold - buffer) {
        setShowHeader(true);
        setScrollThreshold(scrollTop);
      }
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  const languageChange = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en').catch()
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollCheck);
    return () => {
      window.removeEventListener('scroll', scrollCheck);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollTop]);


  return (
    <header
      className={`fixed w-full z-30 top-0 right-0 ${showHeader ? 'header-show' : 'header-hidden'}`}
      style={{ transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          <div className="flex-1">
            <img src={"/logo.png"} alt="Logo" className="h-8" />
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-center flex-wrap items-center">
              <Option title={t('home')} to="/" />
              <Option title={t('about')} to="/about" />
              <Option title={t('blog')} to="/integrations" />
              <Option title={t('contact')} to="/pricing" />
            </ul>
          </nav>

          <ul className="flex-1 flex justify-end items-center">
            <LanguageIcon
              className="w-5 h-5 text-slate-300 hover:text-white transition duration-150 ease-in-out cursor-pointer"
              onClick={languageChange}
            />
          </ul>

          <Index/>

        </div>
      </div>
    </header>
  )
}

export default Header;
