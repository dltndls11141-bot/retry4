const Insight = () => {
  const [activeTab, setActiveTab] = React.useState('trend');
  const [openFaq, setOpenFaq] = React.useState(0);

  const papers = [
    { t: '카페 공간 경험이 브랜드 충성도에 미치는 영향', m: '김지현 외 · 2025' },
    { t: 'MZ세대 외식 소비 행동의 변화: 경험재 관점에서', m: '박서연, 이민호 · 2024' },
    { t: '스페셜티 카페 vs 대중 카페: 타겟팅 전략 비교', m: '정유진 · 2024' },
    { t: '브랜드 인지도 형성의 공간적 요인 분석', m: '최태원 외 · 2023' },
    { t: '국내 카페 산업의 소비자 인사이트 보고서', m: '한국외식산업연구원 · 2026' },
  ];

  const faqs = [
    {
      q: '이 트렌드를 제 경험에 어떻게 녹일 수 있나요?',
      a: <>
        잠바주스 산학 프로젝트에서 유우시님이 도출한 <b>"매장 내 체류 시간 × 결제 전환율"</b> 분석은 본 트렌드의 "공간 경험 → 충성도" 가설과 직접 연결됩니다. 자소서 1번 문항에서 "F&amp;B 브랜드의 공간을 단순 판매처가 아닌 <b>경험 플랫폼</b>으로 재정의한 사례"로 풀어내면, 잠바주스 JD가 요구하는 "고객 경험 설계 역량"과 정확히 매칭됩니다.
      </>,
      actions: ['Step 1 경험 연동', '자소서 활용 추천'],
    },
    { q: '실무적 리스크와 해결책은 무엇인가요?', a: null },
    { q: '자소서 어느 문항에 활용하면 좋을까요?', a: null },
  ];

  return (
    <div>
      <Topbar crumbs={['Step 2', '인사이트']}/>
      <div className="content">
        <div className="breadcrumb">STEP 2 · <b>산업 트렌드</b></div>

        <div className="tabs-row">
          <div>
            <h1 className="page-title">
              잠바주스 <span style={{color:'var(--text-4)', fontWeight:400, margin:'0 6px'}}>·</span> 브랜드 마케터
            </h1>
            <div className="page-sub">JD 분석 + DBpia 학술 데이터 기반 · 분석일 2026.05.21</div>
          </div>
          <div className="pill-tabs">
            <button className={`pill-tab ${activeTab === 'trend' ? 'active' : ''}`} onClick={() => setActiveTab('trend')}>산업 트렌드</button>
            <button className={`pill-tab ${activeTab === 'match' ? 'active' : ''}`} onClick={() => setActiveTab('match')}>매칭 진단</button>
          </div>
        </div>

        {/* HERO */}
        <div className="hero-card hero-card--split">
          <div className="hero-main">
            <div className="tags">
              <span className="tag mint">AI 리포트 요약</span>
              <span className="tag">DBpia 논문 5건 분석</span>
            </div>
            <h2>"공간 내 새로운 경험"이<br/>카페 시장의 핵심 키워드입니다.</h2>
            <div className="sub-desc">
              2024–2026 국내 외식 산업 학술 문헌 5건을 종합한 결과, MZ세대 소비자는 메뉴·가격보다 <b>매장이 제공하는 비일상적 체험</b>을 충성도의 1차 결정 요인으로 인식합니다. 잠바주스 신규 매장 전략과 직접 연결되는 트렌드입니다.
            </div>
          </div>
          <div className="hero-stat">
            <div className="hs-n">+38%</div>
            <div className="hs-l">공간 경험 키워드<br/>언급량 YoY</div>
            <div className="hs-sub">2024 → 2026</div>
          </div>
        </div>

        {/* 논문(70%) + 더 궁금한점(30%) 나란히 */}
        <div className="insight-two-col">
          <div className="card">
            <div className="card-header">
              <div style={{display:'flex', alignItems:'baseline', gap:10, flexWrap:'wrap'}}>
                <h3 className="card-title">참고 논문 5건</h3>
                <span style={{fontSize:12, color:'var(--text-3)', fontWeight:400}}>AI가 분석에 사용한 학술 문헌 · DBpia</span>
              </div>
              <button className="btn sm"><Icon name="download" size={12}/> 인용 다운로드</button>
            </div>
            <div>
              {papers.map((p, i) => (
                <div key={i} className="paper-row">
                  <div className="pn">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div className="pt">{p.t}</div>
                    <div className="pm">{p.m}</div>
                  </div>
                  <a className="pl" href="#">DBpia <Icon name="arrow-up-right" size={11}/></a>
                </div>
              ))}
            </div>
          </div>

          <div className="ask-bar ask-bar--panel">
            <div className="lab">더 궁금한 점이 있나요?</div>
            <div className="ask-row">
              <input placeholder="예) 외식업계 글로벌 진출 사례"/>
              <button className="btn primary sm">전송</button>
            </div>
            <div style={{display:'flex', gap: 6, marginTop: 12, flexWrap:'wrap'}}>
              <span style={{fontSize: 11, color:'var(--text-4)', width:'100%', marginBottom:4}}>추천 질문</span>
              {['경쟁사 분석', '최근 소셜 언급량', '핵심 KPI'].map((q, i) => (
                <button key={i} className="tag" style={{cursor:'pointer'}}>{q}</button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ — 맨 아래 */}
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">자주 묻는 질문</h3>
              <div className="card-sub">AI가 유우시님의 경험을 바탕으로 미리 분석했습니다</div>
            </div>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <div className="q-tag">Q{i + 1}</div>
                  <div className="q-text">{f.q}</div>
                  <Icon name="chevron-down" size={16} className="q-arrow"/>
                </button>
                {openFaq === i && f.a && (
                  <div className="faq-a">
                    {f.a}
                    {f.actions && (
                      <div className="actions">
                        {f.actions.map((a, j) => (
                          <button key={j} className="action-tag">
                            <Icon name="link" size={11}/> {a}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

window.Insight = Insight;
