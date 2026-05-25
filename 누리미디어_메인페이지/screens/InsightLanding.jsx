const InsightLanding = ({ onNav }) => {
  const matchedSkills = [
    { skill: '고객 인사이트 도출',    desc: '30명 인터뷰 → 신규 페르소나 발굴' },
    { skill: '데이터 기반 캠페인 설계', desc: '텍스트 마이닝 → 전환율 +15%' },
    { skill: 'F&B 브랜드 기획',       desc: '잠바주스 산학협력 마케팅 전략' },
    { skill: '리더십 · 프로젝트 관리', desc: 'GRU 팀장 · KPI 3건 달성' },
  ];

  const weakSkills = [
    { skill: '글로벌 커뮤니케이션', desc: '영어 비즈니스 소통 · 현재 학습 3개월차' },
    { skill: '시각적 콘텐츠 구현',  desc: 'Figma · Photoshop 활용 경험 부족' },
  ];

  return (
    <div>
      <Topbar crumbs={['Step 2', '직무/산업 분석']}/>
      <div className="content">
        <div className="page-head" style={{marginBottom: 20}}>
          <div>
            <div className="eyebrow">STEP 2 · 직무/산업 분석</div>
            <h1 className="page-title" style={{marginTop: 6}}>
              잠바주스 <span style={{color:'var(--text-4)', fontWeight:400, margin:'0 6px'}}>·</span> 2026 상반기 공채
            </h1>
            <div className="page-sub">JD 분석 + DBpia 학술 데이터 기반 · 분석일 2026.05.21</div>
          </div>
          <button className="btn primary" onClick={() => onNav('resume')}>
            Step 3 자소서 작성 <Icon name="arrow-right" size={13}/>
          </button>
        </div>

        <div className="insight-landing-grid">
          {/* ── 트렌드 카드 ── */}
          <div className="card insight-land-card">
            <div className="card-header">
              <div>
                <div style={{fontSize:11, fontWeight:600, color:'var(--text-4)', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:4}}>F&amp;B 산업 트렌드</div>
                <h3 className="card-title">"공간 내 새로운 경험"이<br/>핵심 키워드입니다</h3>
              </div>
              <span className="tag mint">DBpia 5건</span>
            </div>

            <p style={{fontSize:13, color:'var(--text-2)', lineHeight:1.65, margin:'12px 0'}}>
              MZ세대 소비자는 메뉴·가격보다 <b>매장이 제공하는 비일상적 체험</b>을 브랜드 충성도의 1차 결정 요인으로 인식합니다. 잠바주스 신규 매장 전략과 직접 연결되는 트렌드입니다.
            </p>

            <div style={{display:'flex', gap:6, flexWrap:'wrap', marginBottom:14}}>
              {['공간 경험', '브랜드 충성도', 'MZ세대', '비일상적 체험'].map((k,i) => (
                <span key={i} className="tag">{k}</span>
              ))}
            </div>

            <div style={{borderTop:'1px solid var(--line)', paddingTop:12, marginBottom:16}}>
              <div style={{fontSize:11, color:'var(--text-4)', marginBottom:8}}>참고 논문 (상위 2건)</div>
              {[
                { t:'카페 공간 경험이 브랜드 충성도에 미치는 영향', m:'김지현 외 · 2025' },
                { t:'MZ세대 외식 소비 행동의 변화: 경험재 관점에서', m:'박서연, 이민호 · 2024' },
              ].map((p, i) => (
                <div key={i} style={{display:'flex', gap:8, alignItems:'flex-start', padding:'5px 0', borderBottom:'1px solid var(--line)'}}>
                  <span style={{fontSize:11, color:'var(--text-4)', fontWeight:600, minWidth:16}}>{String(i+1).padStart(2,'0')}</span>
                  <div>
                    <div style={{fontSize:12, color:'var(--text-2)', lineHeight:1.45}}>{p.t}</div>
                    <div style={{fontSize:11, color:'var(--text-4)', marginTop:2}}>{p.m}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="btn primary"
              style={{width:'100%', justifyContent:'center'}}
              onClick={() => onNav('insightDetail')}
            >
              트렌드 자세히보기 <Icon name="arrow-right" size={13}/>
            </button>
          </div>

          {/* ── 매칭 진단 카드 ── */}
          <div className="card insight-land-card">
            <div className="card-header">
              <div>
                <div style={{fontSize:11, fontWeight:600, color:'var(--text-4)', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:4}}>JD 매칭 진단</div>
                <h3 className="card-title">브랜드 마케터 매칭 결과</h3>
              </div>
              <span className="tag">JD 분석</span>
            </div>

            <div style={{marginTop:12, marginBottom:14}}>
              <div style={{fontSize:12, fontWeight:600, color:'var(--text-2)', marginBottom:8}}>
                매칭된 역량 <span style={{color:'var(--mint)'}}>4개</span>
              </div>
              {matchedSkills.map((item, i) => (
                <div key={i} style={{display:'flex', alignItems:'flex-start', gap:8, padding:'5px 0', borderBottom:'1px solid var(--line)'}}>
                  <Icon name="check" size={11} strokeWidth={2.5} style={{color:'var(--mint)', marginTop:3, flexShrink:0}}/>
                  <div>
                    <div style={{fontSize:12.5, fontWeight:500, color:'var(--ink)'}}>{item.skill}</div>
                    <div style={{fontSize:11, color:'var(--text-3)'}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{marginBottom:16}}>
              <div style={{fontSize:12, fontWeight:600, color:'var(--text-2)', marginBottom:8}}>
                보완 필요 <span style={{color:'var(--text-3)'}}>2개</span>
              </div>
              {weakSkills.map((item, i) => (
                <div key={i} style={{display:'flex', alignItems:'flex-start', gap:8, padding:'5px 0', borderBottom:'1px solid var(--line)'}}>
                  <span style={{fontSize:13, color:'var(--text-4)', lineHeight:1, marginTop:2, flexShrink:0}}>○</span>
                  <div>
                    <div style={{fontSize:12.5, fontWeight:500, color:'var(--text-2)'}}>{item.skill}</div>
                    <div style={{fontSize:11, color:'var(--text-3)'}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="btn primary"
              style={{width:'100%', justifyContent:'center'}}
              onClick={() => onNav('insightMatch')}
            >
              매칭 결과 자세히보기 <Icon name="arrow-right" size={13}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

window.InsightLanding = InsightLanding;
