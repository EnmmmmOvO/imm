import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div
        className="h1 text-6xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-10"
        data-aos="fade-down"
      >
        {t('error.title')}
      </div>
      <p className="text-lg text-center px-10 text-slate-300 mb-8" data-aos="fade-down" data-aos-delay="200">
        {t('error.content')}
      </p>
      <div>
        <Link
          to="/"
          className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group cursor-pointer">
          {t('error.back')}
        </Link>
      </div>
</div>
)
}

export default Error;