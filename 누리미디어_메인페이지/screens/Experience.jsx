const Experience = ({ onNav }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div>
        <Topbar crumbs={['Step 1', '경험정리']}/>
        <div className="loading-screen">
          <div className="loading-spinner"/>
          <div style={{fontSize:14, color:'var(--text-3)', marginTop:4}}>경험을 분석하고 있습니다...</div>
          <div style={{fontSize:12, color:'var(--text-4)'}}>DBpia AI · STAR 구조 분석 중</div>
        </div>
      </div>
    );
  }

  const expCards = [
    {
      title: '잠바주스 산학협력 프로젝트',
      period: '2026.03–04',
      cat: '마케팅 기획',
      stars: ['S 전환율 정체', 'T 고객 리서치', 'A 8매장 방문', 'R +15% 달성'],
      complete: true,
    },
    {
      title: '데이터 분석 공모전',
      period: '2025.09–11',
      cat: '데이터 분석 · 우수상',
      stars: ['Python', '시각화', 'EDA'],
      complete: true,
    },
    {
      title: 'GRU 학회 팀장',
      period: '2026.02–현재',
      cat: '학회 · 리더십',
      stars: ['12명 팀', 'KPI 3건'],
      complete: true,
    },
    {
      title: '외식산업 봉사',
      period: '2026.01',
      cat: '봉사',
      stars: ['S', 'T'],
      complete: false,
    },
  ];

  return (
    <div>
      <Topbar crumbs={['Step 1', '경험정리']}/>
      <div className="content">
        <div className="page-head">
          <div>
            <div className="eyebrow">STEP 1 · 분석 완료</div>
            <h1 className="page-title" style={{marginTop: 6, marginBottom: 12}}>
              유우시님의 커리어 프로필
            </h1>
            <div className="page-sub">총 11개의 경험을 STAR 구조로 분석했습니다.</div>
          </div>
          <div style={{display:'flex', gap: 8}}>
            <button className="btn"><Icon name="rotate" size={13}/> 재분석</button>
            <button className="btn primary" onClick={() => onNav && onNav('insight')}>
              Step 2로 이동 <Icon name="arrow-right" size={13}/>
            </button>
          </div>
        </div>

        {/* 3:7 — AI 추천 직무 | 경험 카드 */}
        <div className="exp-top-grid">
          {/* LEFT: AI 추천 직무 */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">AI 추천 직무</h3>
              <span className="tag mint">AI 측정</span>
            </div>

            <div className="rec-rank-item">
              <div className="rec-rank-num">1순위</div>
              <div className="rec-rank-val">브랜드 마케팅 및 기획</div>
              <div style={{display:'flex', gap:5, flexWrap:'wrap', marginTop:6}}>
                <span className="tag mint">데이터 분석</span>
                <span className="tag mint">F&amp;B 전략</span>
                <span className="tag mint">고객 경험 설계</span>
              </div>
            </div>

            <div className="rec-rank-item">
              <div className="rec-rank-num">2순위</div>
              <div className="rec-rank-val">CX 전략 기획</div>
              <div style={{display:'flex', gap:5, flexWrap:'wrap', marginTop:6}}>
                <span className="tag">리서치</span>
                <span className="tag">고객 분석</span>
              </div>
            </div>

            <div className="rec-rank-item" style={{borderBottom:'none', marginBottom:0, paddingBottom:0}}>
              <div className="rec-rank-num">3순위</div>
              <div className="rec-rank-val">서비스 기획</div>
              <div style={{display:'flex', gap:5, flexWrap:'wrap', marginTop:6}}>
                <span className="tag">UX 리서치</span>
                <span className="tag">프로덕트</span>
              </div>
            </div>
          </div>

          {/* RIGHT: 경험 카드 */}
          <div className="card" style={{padding:0, overflow:'hidden'}}>
            <div style={{padding:'14px 16px 10px', borderBottom:'1px solid var(--line)', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <h3 className="card-title">경험 카드</h3>
              <div style={{display:'flex', gap:6}}>
                <span className="tag">{expCards.length}건 표시</span>
                <button className="btn sm"><Icon name="plus" size={11}/> 추가</button>
              </div>
            </div>
            <div style={{padding:'10px 12px', display:'flex', flexDirection:'column', gap:8}}>
              {expCards.map((card, i) => (
                <div key={i} className="exp-card-tall">
                  <div className="ect-head">
                    <div className="ect-title">{card.title}</div>
                    <span className={`tag ${card.complete ? 'mint' : ''}`}>{card.complete ? 'STAR 완성' : '작성 중'}</span>
                  </div>
                  <div className="ect-meta">{card.period} · {card.cat}</div>
                  <div className="ect-tags">
                    {card.stars.map((s, j) => (
                      <span key={j} className="tag" style={{fontSize:10}}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI 인사이트 */}
        <div className="card" style={{marginBottom: 14}}>
          <div className="card-header">
            <h3 className="card-title">AI 인사이트</h3>
            <span className="tag">DBpia 논문 3건 참조</span>
          </div>
          <div className="insight-bullets">
            <div className="insight-row insight-row--compact">
              <div className="num">1</div>
              <div className="body">
                <b>잠바주스 산학 프로젝트의 "고객 페인포인트 도출 → 타겟 전환" 흐름</b>은 외식/F&amp;B 마케터 직무 공고에서 가장 자주 요구되는 역량 패턴입니다. 잠바주스 · CJ프레시웨이 JD 매칭률이 84% 이상으로 측정되었습니다.
              </div>
            </div>
            <div className="insight-row insight-row--compact">
              <div className="num">2</div>
              <div className="body">
                GRU 학회 팀장 경험은 "정량 KPI 3건"으로 정리되어 있습니다. 자소서 작성 시 <b>"무엇을 했는가" 대신 "수치로 무엇이 변했는가"</b> 프레임으로 풀어내면 설득력이 더 강해집니다.
              </div>
            </div>
            <div className="insight-row insight-row--compact">
              <div className="num">3</div>
              <div className="body">
                데이터 분석 공모전 경험을 통해 <b>Python 텍스트 마이닝 역량</b>이 검증되었습니다. JD에서 요구하는 "디지털 마케팅 데이터 분석"과 직접 연결됩니다.
              </div>
            </div>
          </div>
          <div style={{display:'flex', gap: 8, marginTop: 14}}>
            <button className="btn"><Icon name="file-text" size={13}/> 분석 리포트 다운로드</button>
            <button className="btn primary" onClick={() => onNav && onNav('insight')}>
              Step 2 산업 트렌드 분석 <Icon name="arrow-right" size={13}/>
            </button>
          </div>
        </div>

        {/* 강점 / 보완역량 */}
        <div className="two-col">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">강점 역량</h3>
              <span className="tag mint">상위 3</span>
            </div>
            <ul className="bullet-list">
              <li>
                <b>데이터 기반 기획력</b>
                <span className="meta">고객 로그 분석 → 인사이트 도출 · +15% 달성</span>
                <div className="meta-tags">
                  <span className="tag">잠바주스 산학</span>
                  <span className="tag">데이터 분석 공모전</span>
                </div>
              </li>
              <li>
                <b>타겟 맞춤형 전략 도출</b>
                <span className="meta">F&amp;B 브랜드 페르소나 기획 및 캠페인 메시지 설계</span>
              </li>
              <li>
                <b>리더십 · 조직 운영</b>
                <span className="meta">GRU 학회 팀장 · 12명 · 분기 KPI 3개 달성</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">보완 필요</h3>
              <span className="tag">상위 2</span>
            </div>
            <ul className="bullet-list muted">
              <li>
                <b>글로벌 커뮤니케이션</b>
                <span className="meta">영어 비즈니스 소통 · 현재 학습 3개월차</span>
              </li>
              <li>
                <b>시각적 콘텐츠 구현</b>
                <span className="meta">Figma · Photoshop 활용 · 추천 학습 코스 4건</span>
              </li>
            </ul>
            <div className="info-note" style={{marginTop: 16}}>
              <Icon name="info" size={13}/>
              <span>약점 영역은 Step 4 모의면접에서 별도 코칭 문항이 출제됩니다.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Experience = Experience;
