'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: '여는 말', path: '/' },
    { name: 'GPT 기능', path: '/features' },
    { name: '사례 게시글 작성 GPT', path: '/experience' },
    { name: '레퍼런스', path: '/references' },
    { name: '총 정리', path: '/summary' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFDDAB] shadow-lg shadow-[#945034]/20 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 sm:mb-0">
            <Link href="/" className="text-[#5F8B4C] hover:text-[#945034] transition-colors">
              지피터스 GPT 꿀팁
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`px-3 py-2 rounded-md transition-all duration-300 ${
                  pathname === item.path
                    ? 'bg-[#5F8B4C] text-white shadow-md'
                    : 'text-[#945034] hover:bg-[#FF9A9A]/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
} 