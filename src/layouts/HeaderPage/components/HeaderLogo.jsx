export default function HeaderLogo() {
  return (
    <>
    <div className="headerLogo">
      <a className="headerLogo__logo-link align-middle active:opacity-50 duration-200" href="#">
        <img className="headerLogo__logo-image object-contain w-[159px] h-[38px] md:w-[204px] md:h-[51px]" src="/public/icons/header__logo.svg" alt="logo__icon" />
      </a>
    </div>
    </>
  )
}
