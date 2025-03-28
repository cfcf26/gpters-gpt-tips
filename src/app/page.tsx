import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] py-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-12 border border-[#FF9A9A]/20 mx-4">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#5F8B4C]/20 rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FF9A9A]/30 rounded-full"></div>
          <h1 className="text-3xl md:text-5xl font-bold text-center mt-4 mb-8 text-[#5F8B4C] relative z-10">
            지피터스가 사례게시글 작성 GPT를 만든 꿀팁
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-[#945034]">
            by 개발자F
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 my-10">
          <div className="bg-[#FFDDAB]/30 rounded-xl p-6 md:p-8 md:w-1/2 border-l-4 border-[#945034]">
            <p className="text-lg md:text-xl text-center italic text-[#945034] leading-relaxed">
              "AI가 내 경험까지 대신 써주는 세상 ✍️<br />
              지피터스와 개발자F가 꼼꼼히 만든 '사례 게시글 작성 GPT'로<br />
              직접 써본 리얼한 후기와 제작 꿀팁까지 모두 공개합니다 😎✨<br />
              지금부터 솔직하게 들려드릴게요!"
            </p>
          </div>

          <div className="relative group md:w-1/2 flex justify-center">
            <div className="absolute inset-0 bg-[#5F8B4C]/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <Image
              src="/ai-writing.png"
              alt="AI Writing Illustration"
              width={500}
              height={375}
              className="rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 relative z-10"
              priority
              style={{ objectFit: 'contain' }}
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF9A9A]/20 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
          <a
            href="https://chatgpt.com/g/g-67e27ac185e881918a2d7b5c437d7de1-gaebaljafyi-sarye-gesigeul-mandeulgi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#FF9A9A] text-white text-lg rounded-full hover:bg-[#945034] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center mb-4 md:mb-0"
          >
            개발자F의 사례 게시글 만들기
          </a>
          
          <Link
            href="/features"
            className="px-8 py-4 bg-[#5F8B4C] text-white text-lg rounded-full hover:bg-[#945034] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
          >
            다음: GPT 기능 빠르게 알아보기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
