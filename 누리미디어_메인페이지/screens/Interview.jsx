const Interview = () => {
  const [seconds, setSeconds] = React.useState(90);
  const TOTAL = 120;

  React.useEffect(() => {
    if (seconds <= 0) return;
    const t = setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [seconds]);

  const size = 200;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;
  const progress = seconds / TOTAL;
  const dash = C * progress;

  return (
    <div>
      <Topbar crumbs={['Step 4', '모의면접']}/>
      <div className="interview-wrap">

        <div className="interview-eyebrow">Step 04 · 면접 응시하기</div>

        {/* Step progress */}
        <div className="step-progress">
          <div className="step done">
            <span className="dot"><Icon name="check" size={11} strokeWidth={3}/></span>
            <span>면접 유의사항 안내</span>
          </div>
          <div className="line done"/>
          <div className="step current">
            <span className="dot">2</span>
            <span>면접 진행</span>
          </div>
          <div className="line"/>
          <div className="step">
            <span className="dot">3</span>
            <span>제출 완료</span>
          </div>
          <div style={{flex:1}}/>
          <div style={{fontSize:12, color:'var(--text-3)'}}>
            응시번호 <b style={{color:'var(--text)'}}>JBJ-2026-0421</b>
          </div>
        </div>

        {/* Question */}
        <div className="q-block">
          <div className="q-tag-top">공통질문 Q3 / Q3</div>
          <div className="q-text">
            공모전에서 백엔드 개발자, 디자이너와 협업을 통해 좋은 결과를<br/>
            만들어낼 수 있다고 했는데, 협업 과정에서 어려운 점은 없었나요?
          </div>
          <div style={{marginTop: 14, fontSize: 12, color:'var(--text-3)', display:'flex', justifyContent:'center', gap: 16}}>
            <span>답변 권장 시간 90–120초</span>
            <span>·</span>
            <span>최대 1회 재답변 가능</span>
          </div>
        </div>

        {/* Grid: video + timer — same size */}
        <div className="iv-grid iv-grid--equal">
          <div className="video-card">
            <div className="rec-badge">
              <span className="pulse"/> REC
            </div>
            <div className="preview-area">
              <div className="silhouette"/>
            </div>
            <div className="video-overlay-bottom">
              <span>FaceTime HD 카메라 · 정상</span>
              <div className="audio-bars">
                <span/><span/><span/><span/><span/>
              </div>
            </div>
          </div>

          <div className="timer-card">
            <div className="timer-ring-wrap">
              <svg width={size} height={size} style={{transform:'rotate(-90deg)'}}>
                <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#F0F0F0" strokeWidth={stroke}/>
                <circle
                  cx={size/2} cy={size/2} r={r}
                  fill="none" stroke="#2ECBA4" strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={`${dash} ${C}`}
                />
              </svg>
              <div className="timer-num">
                <div className="n">{seconds}</div>
                <div className="lab">SECONDS</div>
              </div>
            </div>
            <div className="timer-hint">
              <b>차분히, 핵심부터 답변해 보세요.</b><br/>
              남은 시간이 30초 이하가 되면 알림이 표시됩니다.
            </div>
          </div>
        </div>

        {/* Hardware status */}
        <div style={{display:'flex', justifyContent:'center', gap: 20, marginTop: 12, marginBottom: 16, fontSize: 12, color:'var(--text-3)'}}>
          <span style={{display:'inline-flex', alignItems:'center', gap:5}}>
            <span style={{width:6, height:6, borderRadius:'50%', background:'var(--mint)'}}/>마이크 정상
          </span>
          <span style={{display:'inline-flex', alignItems:'center', gap:5}}>
            <span style={{width:6, height:6, borderRadius:'50%', background:'var(--mint)'}}/>카메라 정상
          </span>
          <span style={{display:'inline-flex', alignItems:'center', gap:5}}>
            <span style={{width:6, height:6, borderRadius:'50%', background:'var(--text-4)'}}/>조명 보통
          </span>
        </div>

        {/* Q list — camera 바로 아래 */}
        <div className="card" style={{marginBottom: 16}}>
          <div className="card-header">
            <div>
              <h3 className="card-title">전체 질문 진행 현황</h3>
              <div className="card-sub">오늘의 면접 · 총 3문항</div>
            </div>
            <span className="tag mint">2/3 완료</span>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 10}}>
            {[
              { n: 'Q1', t: '본인의 강점 한 가지를 사례와 함께 말씀해 주세요.', state: 'done' },
              { n: 'Q2', t: '입사 후 가장 먼저 시도해보고 싶은 것은 무엇인가요?', state: 'done' },
              { n: 'Q3', t: '협업 과정에서 어려운 점은 없었나요?', state: 'current' },
            ].map((q, i) => (
              <div key={i} style={{
                border: `1px solid ${q.state === 'current' ? 'var(--mint-border)' : 'var(--line)'}`,
                background: q.state === 'current' ? 'var(--mint-softer)' : '#fff',
                borderRadius: 8, padding: '12px 14px',
              }}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 8}}>
                  <span style={{fontSize: 11, fontWeight: 700, color:'var(--text-3)', letterSpacing:'0.04em'}}>{q.n}</span>
                  {q.state === 'done' && (
                    <span style={{display:'inline-flex', alignItems:'center', gap:3, fontSize:11, color:'var(--text-2)', fontWeight:500}}>
                      <Icon name="check" size={11} strokeWidth={2.5}/> 완료
                    </span>
                  )}
                  {q.state === 'current' && <span className="tag mint-solid" style={{fontSize:10}}>진행 중</span>}
                </div>
                <div style={{fontSize: 12.5, color: q.state === 'current' ? 'var(--ink)' : 'var(--text-2)', lineHeight: 1.5, fontWeight: q.state === 'current' ? 500 : 400}}>{q.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions — 맨 마지막 */}
        <div className="iv-actions">
          <button className="btn"><Icon name="rotate" size={13}/> 재답변</button>
          <button className="btn primary">답변 제출하기 <Icon name="chevron-right" size={13}/></button>
        </div>

      </div>
    </div>
  );
};

window.Interview = Interview;
