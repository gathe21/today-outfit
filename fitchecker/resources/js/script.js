
// const API_KEY = '3673251fc606677d01d586e7320583bc';
let API_KEY = '70d2cbfccc6d432af28fb727e5b816f5';
const msBase = "https://www.musinsa.com/search/goods?keyword=";
let currentGender = 'mens';
let myChart = null;

const outfitData = {
  mens: [
      { min: -15, max: -10, title: "대장급 패딩 무장", link: msBase+"대장급패딩", clothes: "고어텍스 다운 + 바라클라바 + 기모 팬츠" },
      { min: -15, max: -10, title: "북극 탐험가 스타일", link: msBase+"헤비아우터", clothes: "눕시 자켓 + 후드티 + 방한 조거팬츠" },
      { min: -15, max: -10, title: "노스페이스 콜라보", link: msBase+"노스페이스", clothes: "마운틴 파카 + 다운 베스트 + 비니" },
      { min: -15, max: -10, title: "영하권 스트릿", link: msBase+"패딩팬츠", clothes: "푸퍼 자켓 + 박스로고 티 + 나일론 팬츠" },
      { min: -15, max: -10, title: "방한 철벽 수호", link: msBase+"방한부츠", clothes: "헤비 무스탕 + 데님 + 가죽 장갑" },
      { min: -10, max: -5, title: "프로스트 레이어", link: msBase+"숏패딩", clothes: "크롭 패딩 + 로고 후드티 + 카고 팬츠" },
      { min: -10, max: -5, title: "레더 바이브", link: msBase+"가죽자켓", clothes: "빈티지 레더 + 니트 + 와이드 데님" },
      { min: -10, max: -5, title: "어반 윈터룩", link: msBase+"MA-1", clothes: "항공 점퍼 + 헤비 스웨트 + 조거팬츠" },
      { min: -10, max: -5, title: "포근한 스트릿", link: msBase+"플리스", clothes: "플리스 내피 + 오버사이즈 코트 + 치노팬츠" },
      { min: -10, max: -5, title: "박스로고 데이", link: msBase+"후드티", clothes: "다운 파카 + 박스로고 티 + 생지 데님" },
      { min: -5, max: 0, title: "겨울 드롭 01", link: msBase+"바시티자켓", clothes: "바시티 자켓 + 스웨트팬츠 + 캠프캡" },
      { min: -5, max: 0, title: "겨울 드롭 02", link: msBase+"디트로이트자켓", clothes: "디트로이트 자켓 + 플란넬 셔츠 + 더블니 팬츠" },
      { min: -5, max: 0, title: "겨울 드롭 03", link: msBase+"코듀로이", clothes: "골덴 패딩 + 니트 + 와이드 슬랙스" },
      { min: -5, max: 0, title: "겨울 드롭 04", link: msBase+"무스탕", clothes: "양털 베스트 + 후드티 + 카고 팬츠" },
      { min: -5, max: 0, title: "겨울 드롭 05", link: msBase+"롱코트 코디", clothes: "오버사이즈 코트 + 터틀넥 + 데님" },
      { min: 0, max: 5, title: "간절기 스타일 01", link: msBase+"청자켓", clothes: "데님 자켓 + 후드티 + 카고 팬츠" },
      { min: 0, max: 5, title: "간절기 스타일 02", link: msBase+"코치자켓", clothes: "코치 자켓 + 박스로고 티 + 치노팬츠" },
      { min: 0, max: 5, title: "간절기 스타일 03", link: msBase+"가디건룩", clothes: "가디건 + 옥스퍼드 셔츠 + 와이드 슬랙스" },
      { min: 0, max: 5, title: "간절기 스타일 04", link: msBase+"트랙탑", clothes: "트랙 자켓 + 반팔티 + 스웨트팬츠" },
      { min: 0, max: 5, title: "간절기 스타일 05", link: msBase+"퀼팅자켓", clothes: "퀼팅 베스트 + 니트 + 비니" },
      { min: 5, max: 10, title: "봄 드롭 01", link: msBase+"바람막이", clothes: "윈드브레이커 + 롱슬리브 + 반바지" },
      { min: 5, max: 10, title: "봄 드롭 02", link: msBase+"나일론자켓", clothes: "후드티 + 나일론 베스트 + 카고 + 캡모자" },
      { min: 5, max: 10, title: "봄 드롭 03", link: msBase+"맨투맨 코디", clothes: "크루넥 + 릴렉스 데님 + 덩크 로우" },
      { min: 5, max: 10, title: "봄 드롭 04", link: msBase+"헤링본 자켓", clothes: "해링턴 자켓 + 반팔티 + 치노팬츠" },
      { min: 5, max: 10, title: "봄 드롭 05", link: msBase+"오버핏 셔츠", clothes: "오버사이즈 셔츠 + 반팔티 + 와이드 청바지" },
      { min: 10, max: 15, title: "캐주얼 바이브 01", link: msBase+"데님셔츠", clothes: "데님 셔츠 + 화이트 티셔츠 + 블랙 데님" },
      { min: 10, max: 15, title: "캐주얼 바이브 02", link: msBase+"체크셔츠", clothes: "플란넬 셔츠 + 그래픽 티셔츠 + 카고 반바지" },
      { min: 10, max: 15, title: "캐주얼 바이브 03", link: msBase+"블록코어룩", clothes: "축구 저지 + 와이드 팬츠" },
      { min: 10, max: 15, title: "캐주얼 바이브 04", link: msBase+"후드집업", clothes: "후드 집업 + 반팔티 + 카펜터 팬츠" },
      { min: 10, max: 15, title: "캐주얼 바이브 05", link: msBase+"니트조끼", clothes: "롱슬리브 티셔츠 + 베스트 + 캡모자" },
      { min: 15, max: 20, title: "미드 시즌 01", link: msBase+"반팔티", clothes: "볼드 그래픽 티셔츠 + 데님 + 트러커 햇" },
      { min: 15, max: 20, title: "미드 시즌 02", link: msBase+"치노반바지", clothes: "오버사이즈 셔츠 + 치노 반바지" },
      { min: 15, max: 20, title: "미드 시즌 03", link: msBase+"박스로고", clothes: "박스로고 티셔츠 + 카고 팬츠" },
      { min: 15, max: 20, title: "미드 시즌 04", link: msBase+"베이스볼저지", clothes: "야구 저지 + 화이트 티셔츠 + 스니커즈" },
      { min: 15, max: 20, title: "미드 시즌 05", link: msBase+"피케셔츠", clothes: "폴로 셔츠 + 와이드 데님 + 캠프캡" },
      { min: 20, max: 25, title: "여름 드롭 01", link: msBase+"린넨셔츠", clothes: "린넨 셔츠 + 나일론 반바지 + 슬라이드" },
      { min: 20, max: 25, title: "여름 드롭 02", link: msBase+"메쉬반바지", clothes: "그래픽 티셔츠 + 메쉬 반바지 + 캡모자" },
      { min: 20, max: 25, title: "여름 드롭 03", link: msBase+"민소매룩", clothes: "나시 탑 + 와이드 치노팬츠 + 샌들" },
      { min: 20, max: 25, title: "여름 드롭 04", link: msBase+"포켓티", clothes: "포켓 티셔츠 + 카고 반바지 + 양말 포인트" },
      { min: 20, max: 25, title: "여름 드롭 05", link: msBase+"오픈카라", clothes: "오픈카라 셔츠 + 데님 반바지" },
      { min: 25, max: 30, title: "무더위 바이브 01", link: msBase+"축구저지", clothes: "메쉬 저지 + 나일론 반바지 + 로고 슬리퍼" },
      { min: 25, max: 30, title: "무더위 바이브 02", link: msBase+"빅사이즈반팔", clothes: "오버핏 티셔츠 + 바이크 쇼츠 + 선글라스" },
      { min: 25, max: 30, title: "무더위 바이브 03", link: msBase+"버킷햇 코디", clothes: "민소매 + 카고 반바지 + 버킷햇" },
      { min: 25, max: 30, title: "무더위 바이브 04", link: msBase+"수영복룩", clothes: "그래픽 티셔츠 + 스윔 쇼츠 + 스니커즈" },
      { min: 25, max: 30, title: "무더위 바이브 05", link: msBase+"민소매티", clothes: "민소매 티셔츠 + 메쉬 팬츠" },
      { min: 30, max: 35, title: "폭염 대응 01", link: msBase+"기능성반팔", clothes: "쿨테크 티셔츠 + 린넨 반바지 + 슬라이드" },
      { min: 30, max: 35, title: "폭염 대응 02", link: msBase+"농구나시", clothes: "농구 저지 + 메쉬 반바지" },
      { min: 30, max: 35, title: "폭염 대응 03", link: msBase+"비치웨어", clothes: "얇은 민소매 + 라이트 나일론 반바지" },
      { min: 30, max: 35, title: "폭염 대응 04", link: msBase+"샌들 코디", clothes: "메쉬 캡 + 화이트 티셔츠 + 샌들" },
      { min: 30, max: 35, title: "폭염 대응 05", link: msBase+"한여름 코디", clothes: "슬리브리스 + 반바지. 시원하게 입으세요." }
  ],
  womens: [
      { min: -15, max: -10, title: "여성 한파 대비 01", link: msBase+"여성롱패딩", clothes: "맥시 패딩 + 바라클라바 + 조거팬츠" },
      { min: -15, max: -10, title: "여성 한파 대비 02", link: msBase+"무스탕코트", clothes: "무스탕 코트 + 터틀넥 + 울 팬츠" },
      { min: -15, max: -10, title: "여성 한파 대비 03", link: msBase+"방한부츠 코디", clothes: "고어텍스 다운 + 비니 + 방한 부츠" },
      { min: -15, max: -10, title: "여성 한파 대비 04", link: msBase+"목도리 포인트", clothes: "헤비 파카 + 니트 목도리 + 레깅스" },
      { min: -15, max: -10, title: "여성 한파 대비 05", link: msBase+"퍼자켓룩", clothes: "퍼 자켓 + 후드티 + 레더 팬츠" },
      { min: -10, max: -5, title: "여성 프로스트 01", link: msBase+"크롭패딩", clothes: "크롭 패딩 + 로고 캡 + 스웨트 셋업" },
      { min: -10, max: -5, title: "여성 프로스트 02", link: msBase+"레더자켓", clothes: "빈티지 레더 + 후드티 + 와이드 데님" },
      { min: -10, max: -5, title: "여성 프로스트 03", link: msBase+"테디베어 코트", clothes: "테디 코트 + 니트 스웨터 + 비니" },
      { min: -10, max: -5, title: "여성 프로스트 04", link: msBase+"패딩베스트", clothes: "눕시 베스트 + 오버사이즈 맨투맨 + 조거" },
      { min: -10, max: -5, title: "여성 프로스트 05", link: msBase+"어그부츠 코디", clothes: "다운 코트 + 박스로고 비니 + 어그" },
      { min: -5, max: 0, title: "여성 윈터룩 01", link: msBase+"니트스커트", clothes: "항공 점퍼 + 미니 스커트 + 롱 삭스" },
      { min: -5, max: 0, title: "여성 윈터룩 02", link: msBase+"바이커쇼츠", clothes: "데님 패딩 + 후드티 + 바이커 쇼츠" },
      { min: -5, max: 0, title: "여성 윈터룩 03", link: msBase+"바시티 코디", clothes: "바시티 자켓 + 스웨트 스커트 + 캡모자" },
      { min: -5, max: 0, title: "여성 윈터룩 04", link: msBase+"뽀글이 자켓", clothes: "플리스 자켓 + 카고 팬츠 + 비니" },
      { min: -5, max: 0, title: "여성 윈터룩 05", link: msBase+"핸드메이드 코트", clothes: "오버사이즈 코트 + 니트 탑 + 치노팬츠" },
      { min: 0, max: 5, title: "여성 간절기 01", link: msBase+"데님자켓", clothes: "데님 자켓 + 터틀넥 + 와이드 슬랙스" },
      { min: 0, max: 5, title: "여성 간절기 02", link: msBase+"크롭티 코디", clothes: "코치 자켓 + 크롭 티셔츠 + 카고 팬츠" },
      { min: 0, max: 5, title: "여성 간절기 03", link: msBase+"가디건 스타일", clothes: "가디건 + 옥스퍼드 셔츠 + 미니 스커트" },
      { min: 0, max: 5, title: "여성 간절기 04", link: msBase+"집업 후드", clothes: "트랙탑 + 반팔티 + 조거 팬츠" },
      { min: 0, max: 5, title: "여성 간절기 05", link: msBase+"경량 패딩", clothes: "퀼팅 베스트 + 롱슬리브 + 청바지" },
      { min: 5, max: 10, title: "여성 스프링 01", link: msBase+"윈드브레이커", clothes: "윈드브레이커 + 바이커 쇼츠 + 양말 레이어드" },
      { min: 5, max: 10, title: "여성 스프링 02", link: msBase+"데님 스커트", clothes: "후드티 + 베스트 + 데님 스커트 + 캡모자" },
      { min: 5, max: 10, title: "여성 스프링 03", link: msBase+"아디다스 삼바", clothes: "크루넥 + 릴렉스 데님 + 삼바" },
      { min: 5, max: 10, title: "여성 스프링 04", link: msBase+"자켓 스타일링", clothes: "블레이저 + 그래픽 티셔츠 + 치노팬츠" },
      { min: 5, max: 10, title: "여성 스프링 05", link: msBase+"스트라이프 셔츠", clothes: "스트라이프 셔츠 + 반팔티 + 와이드 청바지" },
      { min: 10, max: 15, title: "여성 플로우 01", link: msBase+"화이트팬츠", clothes: "데님 셔츠 + 크롭 티셔츠 + 화이트 데님" },
      { min: 10, max: 15, title: "여성 플로우 02", link: msBase+"원피스 코디", clothes: "플란넬 셔츠 + 미니 원피스 + 부츠" },
      { min: 10, max: 15, title: "여성 플로우 03", link: msBase+"유니폼 스타일", clothes: "풋볼 저지 + 슬립 스커트" },
      { min: 10, max: 15, title: "여성 플로우 04", link: msBase+"와이드 팬츠룩", clothes: "후드 집업 + 크롭 탑 + 카펜터 팬츠" },
      { min: 10, max: 15, title: "여성 플로우 05", link: msBase+"나일론 베스트", clothes: "롱슬리브 + 나일론 베스트 + 캡모자" },
      { min: 15, max: 20, title: "여성 시즌 01", link: msBase+"그래픽반팔", clothes: "그래픽 티셔츠 + 데님 스커트 + 트러커 햇" },
      { min: 15, max: 20, title: "여성 시즌 02", link: msBase+"오버핏 셔츠", clothes: "오버사이즈 셔츠 + 바이커 쇼츠" },
      { min: 15, max: 20, title: "여성 시즌 03", link: msBase+"카고 반바지", clothes: "박스로고 티셔츠 + 카고 반바지 + 양말 포인트" },
      { min: 15, max: 20, title: "여성 시즌 04", link: msBase+"베이비 티룩", clothes: "베이비 티셔츠 + 와이드 데님 + 벨트" },
      { min: 15, max: 20, title: "여성 시즌 05", link: msBase+"테니스 스커트", clothes: "폴로 셔츠 + 미니 스커트 + 캠프캡" },
      { min: 20, max: 25, title: "여성 여름 01", link: msBase+"린넨코디", clothes: "린넨 셔츠 + 나일론 반바지 + 슬라이드" },
      { min: 20, max: 25, title: "여성 여름 02", link: msBase+"버킷햇 코디", clothes: "크롭 탑 + 메쉬 스커트 + 버킷햇" },
      { min: 20, max: 25, title: "여성 여름 03", link: msBase+"슬리퍼 코디", clothes: "나시 탑 + 와이드 치노팬츠 + 샌들" },
      { min: 20, max: 25, title: "여성 여름 04", link: msBase+"데님 반바지", clothes: "로고 티셔츠 + 데님 반바지 + 선글라스" },
      { min: 20, max: 25, title: "여성 여름 05", link: msBase+"슬립 원피스", clothes: "슬립 원피스 + 스니커즈 + 캡모자" },
      { min: 25, max: 30, title: "여성 히트 01", link: msBase+"저지코디", clothes: "메쉬 저지 + 바이커 쇼츠 + 슬라이드" },
      { min: 25, max: 30, title: "여성 히트 02", link: msBase+"선글라스 포인트", clothes: "크롭 티셔츠 + 나일론 반바지 + 선글라스" },
      { min: 25, max: 30, title: "여성 히트 03", link: msBase+"나시티 코디", clothes: "나시 탑 + 미니 스커트 + 버킷햇" },
      { min: 25, max: 30, title: "여성 히트 04", link: msBase+"수영복 스타일", clothes: "그래픽 티셔츠 + 수영복 + 반바지" },
      { min: 25, max: 30, title: "여성 히트 05", link: msBase+"바디슈트룩", clothes: "민소매 바디슈트 + 와이드 팬츠" },
      { min: 30, max: 35, title: "여성 익스트림 01", link: msBase+"냉감의류", clothes: "쿨테크 크롭 + 미니 반바지 + 슬라이드" },
      { min: 30, max: 35, title: "여성 익스트림 02", link: msBase+"농구복 스타일", clothes: "농구 저지 + 메쉬 반바지" },
      { min: 30, max: 35, title: "여성 익스트림 03", link: msBase+"여름 샌들룩", clothes: "나시 탑 + 린넨 스커트 + 샌들" },
      { min: 30, max: 35, title: "여성 익스트림 04", link: msBase+"메쉬 모자", clothes: "메쉬 캡 + 화이트 티셔츠 + 바이커 쇼츠" },
      { min: 30, max: 35, title: "여성 익스트림 05", link: msBase+"여름 핫템", clothes: "크롭 나시 + 반바지. 시원하게 보내세요." }
  ]
};

function getCategoryColor(temp) {
  if (temp < 0) return '#3f51b5'; 
  if (temp < 15) return '#4caf50'; 
  if (temp < 25) return '#ffeb3b'; 
  return '#f44336'; 
}

async function fetchWeather(lat, lon) {
  try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      const fRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      updateUI(await res.json(), await fRes.json());
  } catch (e) {
      updateUI({ name: "서울", main: { temp: 12, feels_like: 10, humidity: 40 }, weather: [{ main: "Clear" }], wind: { speed: 2 } }, null);
  } finally {
      const splash = document.getElementById('splash-screen');
      if(splash) { splash.style.opacity = '0'; setTimeout(() => splash.remove(), 500); }
  }
}

function updateUI(w, f) {
  const temp = Math.round(w.main.temp);
  document.getElementById('location').innerText = w.name;
  document.getElementById('temp-display').innerText = `${temp}°`;
  document.getElementById('feels-like').innerText = Math.round(w.main.feels_like);

  const gallery = document.getElementById('outfit-gallery');
  gallery.innerHTML = '';

  const filtered = outfitData[currentGender].filter(item => temp >= item.min && temp < item.max);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 5);

  selected.forEach(fit => {
      const card = document.createElement('div');
      card.className = 'outfit-card';
      card.onclick = () => window.open(fit.link, '_blank');
      card.innerHTML = `
          <div class="color-block" style="background-color: ${getCategoryColor(temp)}"></div>
          <div class="outfit-text-area">
              <h3>${fit.title}</h3>
              <p>${fit.clothes}</p>
          </div>
      `;
      gallery.appendChild(card);
  });

  document.getElementById('laundry-idx').innerText = w.main.humidity < 50 ? "좋음" : "눅눅";
  document.getElementById('umbrella-idx').innerText = w.weather[0].main.includes("Rain") ? "필수" : "불필요";
  document.getElementById('wind-idx').innerText = `${w.wind.speed}m/s`;

  if(f) drawChart(f);
}

// 📈 차트 수치 표시 로직 추가
function drawChart(fData) {
  const ctx = document.getElementById('forecastChart').getContext('2d');
  if (myChart) myChart.destroy();
  
  const labels = fData.list.slice(0,6).map(i => `${new Date(i.dt*1000).getHours()}시`);
  const temps = fData.list.slice(0,6).map(i => Math.round(i.main.temp));

  myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: '온도',
              data: temps,
              borderColor: '#03dac6',
              backgroundColor: 'rgba(3, 218, 198, 0.1)',
              fill: true,
              tension: 0.4,
              borderWidth: 3,
              pointRadius: 4,
              pointBackgroundColor: '#03dac6',
              // 수치 표시용 커스텀 설정
              datalabels: { display: true } 
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 20 } }, // 온도 글자가 안 잘리게 여백 추가
          plugins: {
              legend: { display: false },
              // 툴팁 대신 항상 수치가 보이도록 하려면 외부 라이브러리가 필요하지만,
              // 기본 기능에서는 hover 시 수치를 크게 보여주는 팁을 적용합니다.
              tooltip: { enabled: true }
          },
          scales: {
              x: { ticks: { color: '#b0b0b0' }, grid: { display: false } },
              y: { display: false }
          },
          // 애니메이션 완료 후 수치를 캔버스에 직접 그리는 방식 (가장 확실함)
          animation: {
              onComplete: function() {
                  const ctx = this.ctx;
                  ctx.font = "bold 12px sans-serif";
                  ctx.fillStyle = "#03dac6";
                  ctx.textAlign = "center";
                  ctx.textBaseline = "bottom";

                  this.data.datasets.forEach(function(dataset, i) {
                      const meta = myChart.getDatasetMeta(i);
                      meta.data.forEach(function(point, index) {
                          const data = dataset.data[index];
                          ctx.fillText(data + "°", point.x, point.y - 10);
                      });
                  });
              }
          }
      }
  });
}

function init() {
  document.getElementById('date').innerText = new Date().toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
  navigator.geolocation.getCurrentPosition(
      p => fetchWeather(p.coords.latitude, p.coords.longitude),
      () => fetchWeather(37.56, 126.97)
  );
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.onclick = (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentGender = e.target.dataset.gender;
      init();
  };
});

document.getElementById('refresh-btn').onclick = init;
window.onload = init;

API_KEY = '';