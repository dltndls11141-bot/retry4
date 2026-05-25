const RadarChart = ({ data, size = 200, max = 100 }) => {
  const cx = size / 2, cy = size / 2;
  const r = size * 0.36;
  const n = data.length;
  const angle = i => (-Math.PI / 2) + (i * 2 * Math.PI / n);

  const point = (val, i) => {
    const a = angle(i);
    return [cx + r * (val / max) * Math.cos(a), cy + r * (val / max) * Math.sin(a)];
  };
  const axisEnd = i => {
    const a = angle(i);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };
  const labelPos = i => {
    const a = angle(i);
    return [cx + (r + 28) * Math.cos(a), cy + (r + 28) * Math.sin(a)];
  };

  const rings = [0.25, 0.5, 0.75, 1].map(f =>
    data.map((_, i) => {
      const a = angle(i);
      return [cx + r * f * Math.cos(a), cy + r * f * Math.sin(a)];
    }).map(p => p.join(',')).join(' ')
  );

  const avgVals = [62, 65, 70, 58, 66];
  const avgPts  = avgVals.map((v, i) => point(v, i).join(',')).join(' ');
  const polyPts = data.map((d, i) => point(d.value, i).join(',')).join(' ');

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{overflow:'visible'}}>
      {rings.map((p, i) => <polygon key={i} points={p} fill="none" stroke="#EEEEEE" strokeWidth="1"/>)}
      {data.map((_, i) => {
        const [ex, ey] = axisEnd(i);
        return <line key={i} x1={cx} y1={cy} x2={ex} y2={ey} stroke="#EEEEEE" strokeWidth="1"/>;
      })}
      <polygon points={avgPts} fill="rgba(0,0,0,0.03)" stroke="#D0D0D0" strokeWidth="1" strokeDasharray="3,3" strokeLinejoin="round"/>
      <polygon points={polyPts} fill="rgba(46,203,164,0.13)" stroke="#2ECBA4" strokeWidth="2" strokeLinejoin="round"/>
      {data.map((d, i) => {
        const [px, py] = point(d.value, i);
        return <circle key={i} cx={px} cy={py} r="3.5" fill="#2ECBA4" stroke="#fff" strokeWidth="1.5"/>;
      })}
      {data.map((d, i) => {
        const [lx, ly] = labelPos(i);
        const a = angle(i);
        let anchor = 'middle';
        if (Math.cos(a) > 0.25) anchor = 'start';
        else if (Math.cos(a) < -0.25) anchor = 'end';
        return (
          <text key={i} x={lx} y={ly + 4} fontSize="11" fontWeight="600" fill="#4A4D54" textAnchor={anchor}>
            {d.label}
          </text>
        );
      })}
    </svg>
  );
};

const MySpace = () => {
  const radarData = [
    { label: '기획력',      value: 93 },
    { label: 'Data 분석',   value: 76 },
    { label: '커뮤니케이션', value: 44 },
    { label: '리더십',      value: 84 },
    { label: '실행력',      value: 31 },
  ];

  const timeline = [
    { month: '2026.05', current: true,
      items: [{ t: '잠바주스 결과 발표', cat: '마케팅', highlight: true }] },
    { month: '2026.04',
      items: [
        { t: '잠바주스 산학', cat: '마케팅', highlight: true },
        { t: '영어 회화 시작', cat: '학습' },
      ] },
    { month: '2026.03',
      items: [{ t: '논문 리뷰 3건', cat: '학술' }] },
    { month: '2026.02',
      items: [
        { t: 'GRU 팀장 선임', cat: '학회' },
        { t: 'SQL 부트캠프', cat: '데이터' },
      ] },
    { month: '2026.01',
      items: [{ t: '외식산업 봉사', cat: '봉사' }] },
    { month: '2025.12',
      items: [{ t: '데이터 분석 공모전', cat: '데이터' }] },
    { month: '2025.11',
      items: [{ t: 'GRU 학회 가입', cat: '학술' }] },
  ];

  const expBreakdown = [
    { cat: '프로젝트', n: 3 },
    { cat: '봉사·심화', n: 3 },
    { cat: '데이터', n: 2 },
    { cat: '공모전', n: 2 },
    { cat: '학회', n: 1 },
  ];

  return (
    <div>
      <Topbar crumbs={['My Space']}/>
      <div className="content">
        <div className="page-head">
          <div>
            <div className="eyebrow">2026 봄학기 · D-187</div>
            <h1 className="page-title" style={{marginTop: 6}}>안녕하세요, 유우시님</h1>
            <div className="page-sub">11개의 경험과 3개의 자소서가 분석되었습니다.</div>
          </div>
          <div style={{display:'flex', gap: 8}}>
            <button className="btn"><Icon name="plus" size={14}/> 경험 추가</button>
            <button className="btn primary">AI 리포트 생성</button>
          </div>
        </div>

        <div className="dash-grid dash-compact">
          {/* TOP LEFT — radar */}
          <div className="card card--hero">
            <div className="card-header">
              <div>
                <h3 className="card-title">나의 역량 레이더</h3>
                <div className="card-sub">11개 경험 기반 AI 분석</div>
              </div>
              <span className="tag mint">AI 측정</span>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'6px 0'}}>
              <RadarChart data={radarData} size={188}/>
            </div>
            <div className="radar-legend-row">
              <span className="rl-item"><span className="rl-dot--mint"/>내 점수</span>
              <span className="rl-item"><span className="rl-dash"/>업계 평균</span>
            </div>
            <div className="radar-summary">
              <span className="rs-item">
                <span className="rs-lab">가장 강한 역량</span>
                <span className="rs-val rs-val--strong">기획력</span>
              </span>
              <span className="rs-sep"/>
              <span className="rs-item">
                <span className="rs-lab">가장 보완 필요</span>
                <span className="rs-val rs-val--weak">실행력</span>
              </span>
            </div>
          </div>

          {/* TOP RIGHT — timeline */}
          <div className="card tl-card">
            <div className="card-header">
              <div>
                <h3 className="card-title">내 타임라인</h3>
                <div className="card-sub">최근 7개월 활동 흐름</div>
              </div>
            </div>
            <div className="htl-scroll">
              <div className="htl-track">
                <div className="htl-line"/>
                {[...timeline].reverse().map((col, i) => (
                  <div key={i} className={`htl-node ${col.current ? 'current' : ''}`}>
                    <div className="htl-date">{col.month}</div>
                    <div className="htl-dot"/>
                    <div className="htl-events">
                      {col.items.map((item, j) => (
                        <div key={j} className={`htl-event ${item.highlight ? 'highlight' : ''}`}>
                          <div className="htl-t">{item.t}</div>
                          <span className="htl-cat">{item.cat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM LEFT — 희망 직무 (compact inline) */}
          <div className="card cic-card">
            <div className="cic-head">
              <div className="col-icon"><Icon name="check" size={14} strokeWidth={2.5}/></div>
              <span className="cic-title">희망 직무</span>
              <div className="cic-pills">
                <span className="hope-pill-xs"><span className="n">①</span> 브랜드 마케팅</span>
                <span className="hope-pill-xs"><span className="n">②</span> F&amp;B 기획</span>
                <span className="hope-pill-xs"><span className="n">③</span> CX 전략</span>
              </div>
            </div>
            <div className="cic-body">
              <div className="hope-attrs">
                <div className="hope-attr">
                  <span className="lab">강점</span>
                  <span className="val">데이터 기반 기획력</span>
                </div>
                <div className="hope-attr">
                  <span className="lab">약점</span>
                  <span className="val">글로벌 커뮤니케이션</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT — 커리어 현황 (compact inline) */}
          <div className="card cic-card">
            <div className="cic-head">
              <div className="col-icon"><Icon name="file-text" size={14}/></div>
              <span className="cic-title">커리어 현황</span>
              <div className="cic-pills">
                {[{n:'11',l:'경험'},{n:'6',l:'JD'},{n:'3',l:'자소서'},{n:'4곳',l:'지원'}].map((s,i) => (
                  <span key={i} className="career-pill-xs"><b>{s.n}</b> {s.l}</span>
                ))}
              </div>
            </div>
            <div className="cic-body">
              <div className="exp-breakdown">
                <div className="eb-header">경험 유형</div>
                {expBreakdown.map((b, i) => (
                  <div key={i} className="eb-row">
                    <span className="eb-cat">{b.cat}</span>
                    <div className="eb-track">
                      <div className="eb-fill" style={{width:`${Math.round((b.n/11)*100)}%`}}/>
                    </div>
                    <span className="eb-n">{b.n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.MySpace = MySpace;
