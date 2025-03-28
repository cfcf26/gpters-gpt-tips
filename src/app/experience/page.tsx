import Link from "next/link";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] py-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-12 border border-[#FF9A9A]/20 mx-4 relative">
        <div className="absolute top-0 left-0 w-60 h-60 bg-[#5F8B4C]/10 rounded-full -ml-20 -mt-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF9A9A]/20 rounded-full -mr-20 -mb-20"></div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#5F8B4C] relative z-10">
          사례 게시글 작성 GPT, 이렇게 만들었어요!
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center text-[#945034] relative z-10">
          개발자F의 실제 경험
        </h2>

        <div className="relative z-10">
          <p className="text-lg md:text-xl mb-8 text-[#945034] text-center font-medium italic leading-relaxed">
            저는 사례 공유를 더 쉽고 효과적으로 돕기 위한 GPT를 직접 만들어봤어요. 제가 실제로 거쳤던 과정이에요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#FFDDAB]/30 p-6 rounded-xl shadow-md border-l-4 border-[#5F8B4C] transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#5F8B4C]">
                요구사항 정의
              </h3>
              <p className="text-[#945034] leading-relaxed">
                사례 게시글 작성이 어렵다는 문제를 해결하고, AI 및 자동화 툴 사용 경험을 손쉽게 공유할 수 있도록 요구사항을 정리했어요.
              </p>
            </div>

            <div className="bg-[#FF9A9A]/20 p-6 rounded-xl shadow-md border-l-4 border-[#945034] transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#945034]">
                기능 정의
              </h3>
              <p className="text-[#945034] leading-relaxed">
                스타일 선택, 콘텐츠 준비, 초안 작성, 최종 편집까지 지원하도록 기능을 명확히 했어요.
              </p>
            </div>

            <div className="bg-[#5F8B4C]/10 p-6 rounded-xl shadow-md border-l-4 border-[#FF9A9A] transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#5F8B4C]">
                제약사항 정의
              </h3>
              <p className="text-[#945034] leading-relaxed">
                결과물이 지피터스 사례 게시글 마크다운 구조를 따르도록 하고, 콘텐츠의 범위를 명확히 제한했어요.
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-[#5F8B4C]/10 p-8 rounded-xl text-center w-full max-w-xl shadow-inner border border-[#FFDDAB]/50">
              <p className="text-[#945034] font-medium text-lg md:text-xl italic">
                체계적인 정의와 설계가 성공적인 GPT 제작의 비결입니다!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between relative z-10 mt-6">
          <Link
            href="/features"
            className="px-8 py-4 bg-[#FF9A9A] text-white rounded-full hover:bg-[#945034] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            ← 이전: GPT 기능 빠르게 알아보기
          </Link>
          <Link
            href="/references"
            className="px-8 py-4 bg-[#5F8B4C] text-white rounded-full hover:bg-[#945034] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            다음: 레퍼런스 및 프롬프트 설계 →
          </Link>
        </div>
      </div>
    </div>
  );
} 