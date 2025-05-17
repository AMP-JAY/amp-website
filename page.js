'use client';
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      heading: "Empowering Vietnamese Pop with Korean Songwriting Excellence",
      subheading:
        "Aura Music Publishing connects Korea's top composers with Vietnam’s leading entertainment companies.",
      button: "Request a Song",
    },
    vi: {
      heading: "Nâng tầm V-Pop cùng sáng tác hàng đầu từ Hàn Quốc",
      subheading:
        "Aura Music Publishing kết nối các nhạc sĩ hàng đầu Hàn Quốc với các công ty giải trí hàng đầu tại Việt Nam.",
      button: "Gửi yêu cầu bài hát",
    },
    ko: {
      heading: "대한민국 최고 작곡가와 함께하는 베트남 팝의 도약",
      subheading:
        "Aura Music Publishing은 한국의 작곡가들과 베트남 기획사를 연결합니다.",
      button: "곡 요청하기",
    },
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="flex gap-4 absolute top-4 right-4">
        <button onClick={() => setLanguage("en")}>EN</button>
        <button onClick={() => setLanguage("vi")}>VI</button>
        <button onClick={() => setLanguage("ko")}>KO</button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {content[language].heading}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          {content[language].subheading}
        </p>
        <button className="text-lg px-6 py-3 bg-black text-white rounded">
          {content[language].button}
        </button>
      </motion.div>

      <div className="mt-12 max-w-xl w-full text-center text-sm text-gray-400">
        © 2025 Aura Music Publishing. All rights reserved.
      </div>
    </div>
  );
}