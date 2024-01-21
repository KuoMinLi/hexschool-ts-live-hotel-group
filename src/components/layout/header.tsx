"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../assets/image/desktop/logo.png';

const Header = () => {

  const [headerMenu, setHeaderMenu] = useState({
    isLogin: false,
  });
  const [menuShow, setMenuShow] = useState(false);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <nav className="flex items-center justify-between mx-20 my-6 sticky-top w-">
        <Image src={Logo} alt="logo" className="w-[196px] object-fit-contain" />
        <h1 className='hidden'>享樂酒店</h1>
        <ul className="flex items-center gap-1.5 hidden lg:flex">
          <li className="nav-item">
            <a href="" className="p-4 nav-link">客房旅宿</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="p-4 nav-link">會員登入</a>
          </li>
          {/* <li className="nav-item relative">
            <div className="p-3 header-link nav-link flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined">account_circle</span>
              Jessica
            </div>

            <ul className="absolute bg-white rounded-6 top-full right-0 userMenu overflow-hidden">
              <li>
                <a href="/user" className="block px-5 py-3 pointer font-bold bg-primary-10 text-primary text-decoration-none">我的帳戶</a>
              </li>
              <li className="px-5 py-3 pointer font-bold" onClick={signOut}>登出</li>
            </ul>
          </li> */}
          <li className="nav-item">
            <input type="button" value="立即訂房" className="bg-primary rounded-lg px-8 py-4" />
          </li>
        </ul>

        <span className="material-symbols-outlined text-white p-2 lg:hidden" onClick={() => setMenuShow(true)}> menu </span>
      </nav>

      <div className={`menu bg-black fixed top-0 min-h-screen p-4  flex-col ${menuShow ? 'flex' : 'hidden'}`}>
        <div className="menu-top text-end">
          <span className="material-symbols-outlined text-white text-2xl p-2 cursor-pointer" onClick={() => setMenuShow(false)}> close </span>
        </div>
        <ul className="nav flex-col justify-center text-center flex-grow">
          <li className="nav-item">
            <a href="" className="p-3 nav-link" onClick={() => setMenuShow(false)}>客房旅宿</a>
          </li>
          <li className="nav-item">
            <a 
              href={headerMenu.isLogin ? '/user' : '/login'} 
              className="p-3 nav-link" 
              onClick={() => setMenuShow(false)}
            >{headerMenu.isLogin ? '我的帳戶' : '會員登入'}
            </a>
          </li>
          <li className="nav-item">
            <input type="button" value="立即訂房" className="btn btn-primary py-3 px-6 w-full" onClick={() => setMenuShow(false)} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
