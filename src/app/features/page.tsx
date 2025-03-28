import Link from "next/link";

export default function Features() {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] py-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-12 border border-[#FF9A9A]/20 mx-4 relative">
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#FFDDAB]/30 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#5F8B4C]/10 rounded-full -ml-28 -mb-28"></div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#5F8B4C] relative z-10">
          GPT 기능 빠르게 알아보기
        </h1>

        <div className="relative z-10">
          <p className="text-lg md:text-xl mb-8 text-[#945034] text-center font-medium leading-relaxed">
            GPTs에서 사용되는 지침, 지식, 기능, 작업의 각 개념을 다음과 같이 설명할 수 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#5F8B4C]/10 p-6 rounded-xl shadow-sm border-l-4 border-[#5F8B4C] transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#5F8B4C]">
                1. 지침(Instructions)
              </h3>
              <p className="text-[#945034] leading-relaxed mb-3">
                GPT에게 전반적인 역할과 행동 방식을 알려주는 기본 규칙입니다.
              </p>
              <div className="bg-[#FFDDAB]/30 p-3 rounded-lg">
                <p className="text-[#945034] italic">
                  예: &ldquo;너는 사용자의 여행 계획을 세워주는 여행 컨설턴트야.&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-[#FFDDAB]/30 p-6 rounded-xl shadow-sm border-l-4 border-[#FF9A9A] transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#945034]">
                2. 지식(Knowledge)
              </h3>
              <p className="text-[#945034] leading-relaxed mb-3">
                GPT가 답변하는 데 사용하는 특정 정보나 전문 지식을 나타냅니다.
              </p>
              <p className="text-[#945034] leading-relaxed mb-3">
                GPT에게 특정 주제에 대한 세부사항이나 참고 자료를 제공하여 정확한 응답을 돕습니다.
              </p>
              <div className="bg-[#FF9A9A]/20 p-3 rounded-lg">
                <p className="text-[#945034] italic">
                  예: 특정 여행지에 대한 정보나 역사적 배경 정보 제공.
                </p>
              </div>
            </div>

            <div className="bg-[#FF9A9A]/20 p-6 rounded-xl shadow-sm border-l-4 border-[#FF9A9A] transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#945034]">
                3. 기능(Capabilities)
              </h3>
              <p className="text-[#945034] leading-relaxed mb-3">
                GPT가 사용할 수 있는 외부 도구나 연결된 서비스를 말합니다.
              </p>
              <p className="text-[#945034] leading-relaxed mb-3">
                GPT가 단순한 텍스트 생성 이상으로 데이터를 불러오거나 계산, 웹 검색, 이미지 생성과 같은 추가 작업을 수행할 수 있게 해줍니다.
              </p>
              <div className="bg-[#FFDDAB]/30 p-3 rounded-lg">
                <p className="text-[#945034] italic">
                  예: 웹 검색, 이미지 생성, 코드 실행 등 외부 플러그인 사용.
                </p>
              </div>
            </div>

            <div className="bg-[#945034]/10 p-6 rounded-xl shadow-sm border-l-4 border-[#945034] transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#5F8B4C]">
                4. 작업(Tasks)
              </h3>
              <p className="text-[#945034] leading-relaxed mb-3">
                GPT가 사용자를 대신해 실제로 수행해야 하는 구체적인 행동이나 목표를 나타냅니다.
              </p>
              <p className="text-[#945034] leading-relaxed mb-3">
                지침보다는 더 구체적이며, 기능이나 지식을 이용해 특정 결과물을 만들어냅니다.
              </p>
              <div className="bg-[#5F8B4C]/20 p-3 rounded-lg">
                <p className="text-[#945034] italic">
                  예: &ldquo;파리에서 3박 4일 일정짜기&rdquo;, &ldquo;뉴스 요약하기&rdquo;, &ldquo;영어 번역하기&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between relative z-10 mt-6">
          <Link
            href="/"
            className="px-8 py-4 bg-[#FF9A9A] text-white rounded-full hover:bg-[#945034] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            ← 이전: 여는 말
          </Link>
          <Link
            href="/experience"
            className="px-8 py-4 bg-[#5F8B4C] text-white rounded-full hover:bg-[#945034] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            다음: 사례 게시글 작성 GPT, 이렇게 만들었어요! →
          </Link>
        </div>
      </div>
    </div>
  );
} 