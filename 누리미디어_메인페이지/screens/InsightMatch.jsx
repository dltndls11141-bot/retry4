const InsightMatch = ({ onNav }) => {
  const matchedItems = [
    {
      skill: '고객 인사이트 도출',
      exp:   '잠바주스 산학협력 프로젝트',
      detail: '30명 고객 인터뷰를 통해 기존 타겟(20대 직장인) 대신 "스터디형 30대 1인 고객"이라는 신규 페르소나를 발굴하고 타겟 전환 전략을 수립했습니다.',
      tags:  ['인터뷰', '페르소나'],
    },
    {
      skill: '데이터 기반 캠페인 설계',
      exp:   '데이터 분석 공모전 · 잠바주스 산학',
      detail: '텍스트 마이닝으로 고객 페인포인트를 도출, "1인용 좌석 × 카페인 부스터 세트" 캠페인을 설계해 4월 결제 전환율 15% 개선을 달성했습니다.',
      tags:  ['텍스트 마이닝', 'Python', '+15%'],
    },
    {
      skill: 'F&B 브랜드 기획',
      exp:   '잠바주스 산학협력 프로젝트',
      detail: '8개 매장 직접 방문 조사를 바탕으로 브랜드 리포지셔닝 방향을 제안하고 실행 로드맵을 수립했습니다.',
      tags:  ['현장 리서치', '전략 기획'],
    },
    {
      skill: '리더십 · 프로젝트 관리',
      exp:   'GRU 학회 팀장 활동',
      detail: '12명 팀을 이끌며 분기 KPI 3개를 달성했습니다. 협업 프로세스 설계 및 성과 관리 경험을 보유하고 있습니다.',
      tags:  ['팀장', 'KPI 달성'],
    },
  ];

  const weakItems = [
    {
      skill: '글로벌 커뮤니케이션',
      detail: '영어 비즈니스 소통 역량이 요구됩니다. 현재 학습 3개월차로, Step 4 모의면접에서 영어 답변 코칭 문항이 별도 출제됩니다.',
    },
    {
      skill: '시각적 콘텐츠 구현',
      detail: 'Figma, Photoshop 등 디자인 툴 활용 역량이 필요합니다. DBpia 라이브러리에서 추천 학습 코스 4건을 확인하세요.',
    },
  ];

  return (
    <div>
      <Topbar crumbs={['Step 2', '직무/산업 분석', '매칭 진단']}/>
      <div className="content">
        <div className="page-head" style={{marginBottom: 20}}>
          <div>
            <button
              className="btn sm"
              style={{marginBottom: 10}}
              onClick={() => onNav('insight')}
            >
              <Icon name="chevron-left" size={12}/> 직무/산업 분석으로
            </button>
            <div className="eyebrow">STEP 2 · JD 매칭 진단</div>
            <h1 className="page-title" style={{marginTop: 6}}>
              잠바주스 <span style={{color:'var(--text-4)', fontWeight:400, margin:'0 6px'}}>·</span> 브랜드 마케터 매칭 결과
            </h1>
            <div className="page-sub">유우시님의 경험 11건 분석 기반 · 분석일 2026.05.21</div>
          </div>
          <button className="btn primary" onClick={() => onNav('resume')}>
            Step 3 자소서 작성 <Icon name="arrow-right" size={13}/>
          </button>
        </div>

        {/* 매칭된 역량 */}
        <div className="card" style={{marginBottom: 16}}>
          <div className="card-header">
            <div>
              <h3 className="card-title">매칭된 역량</h3>
              <div className="card-sub">JD 요구 역량과 유우시님의 경험이 연결된 항목</div>
            </div>
            <span className="tag mint">4개 매칭</span>
          </div>
          <div>
            {matchedItems.map((item, i) => (
              <div key={i} className="match-row match-row--yes">
                <div className="match-check">
                  <Icon name="check" size={12} strokeWidth={2.5}/>
                </div>
                <div className="match-content">
                  <div className="match-skill">{item.skill}</div>
                  <div className="match-exp">{item.exp}</div>
                  <div className="match-detail">{item.detail}</div>
                  <div style={{display:'flex', gap:5, marginTop:6, flexWrap:'wrap'}}>
                    {item.tags.map((t,j) => <span key={j} className="tag mint">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 보완 필요 */}
        <div className="card" style={{marginBottom: 16}}>
          <div className="card-header">
            <div>
              <h3 className="card-title">보완 필요 역량</h3>
              <div className="card-sub">Step 4 모의면접에서 별도 코칭 문항이 출제됩니다</div>
            </div>
            <span className="tag">2개</span>
          </div>
          <div>
            {weakItems.map((item, i) => (
              <div key={i} className="match-row match-row--no">
                <div className="match-check match-check--no">○</div>
                <div className="match-content">
                  <div className="match-skill match-skill--muted">{item.skill}</div>
                  <div className="match-detail">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-note">
          <Icon name="info" size={13}/>
          <span>보완 역량은 Step 4 모의면접에서 집중 코칭 문항으로 다뤄집니다. 자소서에서는 강점 중심으로 서술하는 것을 권장합니다.</span>
        </div>
      </div>
    </div>
  );
};

window.InsightMatch = InsightMatch;
