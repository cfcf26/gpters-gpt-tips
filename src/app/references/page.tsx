import Link from "next/link";

export default function References() {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] py-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-12 border border-[#FF9A9A]/20 mx-4 relative">
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#FFDDAB]/40 rounded-full -mr-20 -mt-20 blur-lg"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#5F8B4C]/20 rounded-full -ml-20 -mb-20 blur-lg"></div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#5F8B4C] relative z-10">
          레퍼런스 및 프롬프트 설계
        </h1>

        <div className="relative z-10">
          <div className="bg-[#FFDDAB]/30 p-8 rounded-xl mb-8 shadow-md border-t border-r border-[#945034]/20">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#945034]">
              레퍼런스 활용
            </h3>
            <p className="mb-6 text-lg text-[#945034] leading-relaxed">
              공식 OpenAI GPT 빌더 프롬프트 문서를 적극 활용했어요.
            </p>
            <div className="flex justify-center">
              <a
                href="https://platform.openai.com/docs/guides/gpt/prompt-engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#5F8B4C] text-white rounded-full hover:bg-[#945034] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-lg"
              >
                OpenAI GPT 빌더 바로가기
              </a>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-[#945034] text-center">
            프롬프트를 구조적으로 설계해 효율성을 높였어요.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-[#5F8B4C]/20 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              <h4 className="font-bold text-lg mb-3 text-[#5F8B4C]">
                역할(Role) 설정
              </h4>
              <p className="text-[#945034] leading-relaxed">
                GPT에게 명확한 역할을 부여해 목표 지향적으로 작동하도록 했습니다.
              </p>
            </div>

            <div className="bg-white border border-[#FF9A9A]/20 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              <h4 className="font-bold text-lg mb-3 text-[#945034]">
                Few shot 기법
              </h4>
              <p className="text-[#945034] leading-relaxed">
                몇 가지 예시를 통해 GPT가 패턴을 학습하도록 설계했습니다.
              </p>
            </div>

            <div className="bg-white border border-[#FFDDAB]/40 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              <h4 className="font-bold text-lg mb-3 text-[#5F8B4C]">
                CoT(Chain of Thought) 방식
              </h4>
              <p className="text-[#945034] leading-relaxed">
                단계적 사고 과정을 통해 논리적인 결과물이 생성되도록 했습니다.
              </p>
            </div>

            <div className="bg-white border border-[#945034]/20 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              <h4 className="font-bold text-lg mb-3 text-[#945034]">
                Tool call 기능
              </h4>
              <p className="text-[#945034] leading-relaxed">
                GPT가 필요시 외부 도구를 활용할 수 있도록 설계했습니다.
              </p>
            </div>

            <div className="bg-white border border-[#FF9A9A]/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] md:col-span-2 lg:col-span-2">
              <h4 className="font-bold text-lg mb-3 text-[#5F8B4C]">
                XML 구조 활용
              </h4>
              <p className="text-[#945034] leading-relaxed">
                구조화된 데이터 형식으로 정확한 결과물 생성을 유도했습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between relative z-10 mt-6">
          <Link
            href="/experience"
            className="px-8 py-4 bg-[#FF9A9A] text-white rounded-full hover:bg-[#945034] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            ← 이전: 사례 게시글 작성 GPT, 이렇게 만들었어요!
          </Link>
          <Link
            href="/summary"
            className="px-8 py-4 bg-[#5F8B4C] text-white rounded-full hover:bg-[#945034] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            다음: 한눈에 보는 총 정리! →
          </Link>
        </div>
      </div>
    </div>
  );
} 