import Link from "next/link";

export default function Summary() {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] py-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-12 border border-[#FF9A9A]/20 mx-4 relative">
        <div className="absolute top-0 left-0 w-60 h-60 bg-[#5F8B4C]/10 rounded-full -ml-20 -mt-20"></div>
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#FFDDAB]/30 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FF9A9A]/20 rounded-full -ml-20 -mb-20"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#945034]/10 rounded-full -mr-20 -mb-20"></div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#5F8B4C] relative z-10">
          한눈에 보는 총 정리!
        </h1>

        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#5F8B4C]/10 p-6 rounded-xl shadow-md border-b-2 border-[#5F8B4C]">
              <h3 className="text-xl font-semibold mb-3 text-center text-[#5F8B4C]">
                목적
              </h3>
              <p className="text-center font-medium text-[#945034] leading-relaxed">
                AI 및 자동화 경험을 쉽게 공유하는 사례 게시글 작성 GPT
              </p>
            </div>

            <div className="bg-[#FFDDAB]/30 p-6 rounded-xl shadow-md border-b-2 border-[#FF9A9A] transform hover:scale-[1.01] transition-transform duration-300 md:row-span-2">
              <h3 className="text-xl font-semibold mb-3 text-[#945034]">
                필수 요소
              </h3>
              <div className="space-y-4 text-[#945034]">
                <div>
                  <p className="font-medium">1. 지침(Instructions)</p>
                  <p className="text-sm leading-relaxed">GPT에게 전반적인 역할과 행동 방식을 알려주는 기본 규칙</p>
                  <p className="text-sm italic">예: "너는 사용자의 여행 계획을 세워주는 여행 컨설턴트야."</p>
                </div>
                
                <div>
                  <p className="font-medium">2. 지식(Knowledge)</p>
                  <p className="text-sm leading-relaxed">GPT가 답변하는 데 사용하는 특정 정보나 전문 지식</p>
                  <p className="text-sm italic">예: 특정 여행지에 대한 정보나 역사적 배경 정보 제공</p>
                </div>
                
                <div>
                  <p className="font-medium">3. 기능(Capabilities)</p>
                  <p className="text-sm leading-relaxed">GPT가 사용할 수 있는 외부 도구나 연결된 서비스</p>
                  <p className="text-sm italic">예: 웹 검색, 이미지 생성, 코드 실행 등 외부 플러그인 사용</p>
                </div>
                
                <div>
                  <p className="font-medium">4. 작업(Tasks)</p>
                  <p className="text-sm leading-relaxed">GPT가 사용자를 대신해 실제로 수행해야 하는 구체적인 행동이나 목표</p>
                  <p className="text-sm italic">예: "파리에서 3박 4일 일정짜기", "뉴스 요약하기"</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FF9A9A]/20 p-6 rounded-xl shadow-md border-b-2 border-[#945034] transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#5F8B4C]">
                GPT 구축 핵심 과정
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-[#945034]">
                <li className="leading-relaxed">요구사항 정의 → 기능 정의 → 제약사항 정의</li>
                <li className="leading-relaxed">OpenAI 공식 문서 활용</li>
              </ol>
            </div>

            <div className="bg-[#945034]/10 p-6 rounded-xl shadow-md border-b-2 border-[#5F8B4C] transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#945034]">
                프롬프트 설계 핵심
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-[#945034]">
                <li className="leading-relaxed">역할</li>
                <li className="leading-relaxed">Few shot</li>
                <li className="leading-relaxed">CoT</li>
                <li className="leading-relaxed">Tool call</li>
                <li className="leading-relaxed">XML 구조</li>
              </ul>
            </div>

            <div className="bg-[#5F8B4C]/10 p-6 rounded-xl shadow-md border-b-2 border-[#FF9A9A] transform hover:scale-[1.01] transition-transform duration-300 md:col-span-2">
              <h3 className="text-xl font-semibold mb-3 text-[#5F8B4C]">
                최종 결과물 형식
              </h3>
              <p className="mb-4 text-[#945034] leading-relaxed">
                제목 → 소개 → 진행 방법 → 결과와 배운 점 → 도움 받은 글(선택)
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between relative z-10 mt-6">
          <Link
            href="/references"
            className="px-8 py-4 bg-[#FF9A9A] text-white rounded-full hover:bg-[#945034] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            ← 이전: 레퍼런스 및 프롬프트 설계
          </Link>
          <Link
            href="/"
            className="px-8 py-4 bg-[#5F8B4C] text-white rounded-full hover:bg-[#945034] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            처음으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
} 