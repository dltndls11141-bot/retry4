const Resume = () => {
  const [activeStage, setActiveStage] = React.useState('edit');
  const [activeQ, setActiveQ] = React.useState(0);
  const [matOpen, setMatOpen] = React.useState(true);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const stages = [
    { id: 'draft',    label: '초안 생성', state: 'done' },
    { id: 'edit',     label: '직접 편집', state: 'active' },
    { id: 'feedback', label: 'AI 피드백', state: 'todo' },
    { id: 'save',     label: '저장',      state: 'todo' },
  ];

  const questions = [
    '문항 1 · 지원동기',
    '문항 2 · 직무역량',
    '문항 3 · 팀워크',
    '문항 4 · 성장과정',
  ];

  const expCards = [
    {
      id: 1,
      title: '잠바주스 산학협력 프로젝트',
      meta: '2026.03–04 · 마케팅 기획',
      tags: [
        { k: 'S', v: '전환율 정체' },
        { k: 'T', v: '고객 리서치' },
        { k: 'A', v: '8매장 방문' },
        { k: 'R', v: '+15% 달성' },
      ],
      detail: '결제 전환율 15% 상승, 30명 고객 인터뷰, 텍스트 마이닝으로 페인포인트 도출 후 타겟 전환 제안.',
    },
    {
      id: 2,
      title: '데이터 분석 공모전',
      meta: '2025.09–11 · 데이터 분석 · 우수상',
      tags: [
        { k: 'Python', v: null },
        { k: '시각화', v: null },
      ],
      detail: null,
    },
  ];

  const gridCols = [matOpen ? '240px' : '48px', '1fr'].join(' ');

  return (
    <div>
      <Topbar crumbs={['Step 3', '자소서 작성']}/>
      <div className="content writer-content">
        <div className="page-head" style={{marginBottom: 16}}>
          <div>
            <div className="eyebrow">STEP 3 · 자소서 작성</div>
            <h1 className="page-title" style={{marginTop: 6}}>
              잠바주스 <span style={{color:'var(--text-4)', fontWeight:400, margin:'0 6px'}}>·</span> 2026 상반기 공채
            </h1>
          </div>
          <div style={{display:'flex', gap: 8, alignItems:'center'}}>
            <div style={{fontSize: 12, color:'var(--text-3)'}}>마지막 저장 2분 전</div>
            <button className="btn"><Icon name="download" size={13}/> 내보내기</button>
            <button className="btn primary"><Icon name="check" size={13}/> 저장</button>
          </div>
        </div>

        <div className="progress-pill-row">
          {stages.map((s, i) => (
            <React.Fragment key={s.id}>
              <button
                className={`progress-pill ${activeStage === s.id ? 'active' : (s.state === 'done' ? 'done' : '')}`}
                onClick={() => setActiveStage(s.id)}
              >
                <span className="pn">{s.state === 'done' ? <Icon name="check" size={10} strokeWidth={3}/> : (i + 1)}</span>
                {s.label}
              </button>
              {i < stages.length - 1 && <span className="progress-pill-sep"><Icon name="chevron-right" size={14}/></span>}
            </React.Fragment>
          ))}
        </div>

        <div className="writer-grid" style={{gridTemplateColumns: gridCols}}>
          {/* LEFT — 재료 패널 */}
          {matOpen ? (
            <div className="card mat-panel">
              <div className="mat-head">
                <div className="ttl">재료 패널</div>
                <div style={{display:'flex', alignItems:'center', gap:8}}>
                  <button className="panel-collapse panel-collapse--inline" onClick={() => setMatOpen(false)} title="접기">
                    <Icon name="chevron-left" size={14}/>
                  </button>
                </div>
              </div>

              <div className="mat-section">
                <div className="sec-lab">
                  경험 카드
                  <button className="btn sm" style={{padding:'3px 8px', fontSize:11}}><Icon name="plus" size={10}/></button>
                </div>

                {expCards.map(card => (
                  <div
                    key={card.id}
                    className={`exp-card-mat ${selectedCard === card.id ? 'active' : ''}`}
                    onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
                    style={{cursor:'pointer'}}
                  >
                    <div className="ec-title">{card.title}</div>
                    <div className="ec-meta">{card.meta}</div>
                    {selectedCard === card.id && (
                      <>
                        <div className="ec-tags">
                          {card.tags.map((t, j) => (
                            <span key={j} className="tag">
                              {t.v ? `${t.k} ${t.v}` : t.k}
                            </span>
                          ))}
                        </div>
                        {card.detail && (
                          <div className="ec-detail">
                            <b>R 상세</b>: {card.detail}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className="mat-section">
                <div className="sec-lab">NAVIGATOR 인사이트</div>
                <div className="nav-insight-row">
                  <div className="ic-wrap"><Icon name="trend" size={15}/></div>
                  <div style={{flex:1}}>
                    <div className="nir-title">F&amp;B 산업 트렌드</div>
                    <div className="nir-desc">"공간 내 새로운 경험"이 카페 시장 핵심 키워드. 충성도 결정 1차 요인.</div>
                    <div className="nir-tags">
                      <span className="tag mint"><Icon name="check" size={9} strokeWidth={3}/> DBpia 검증됨</span>
                    </div>
                  </div>
                </div>
                <div className="nav-insight-row">
                  <div className="ic-wrap"><Icon name="file-text" size={15}/></div>
                  <div style={{flex:1}}>
                    <div className="nir-title">직무 역량 (JD 분석)</div>
                    <div className="nir-desc">"고객 인사이트 도출 · 데이터 기반 캠페인 설계" 요구 — 매칭률 84%.</div>
                    <div className="nir-tags">
                      <span className="tag">JD 분석</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mat-section">
                <button className="btn" style={{width:'100%', justifyContent:'center'}}>
                  <Icon name="plus" size={13}/> 다른 재료 추가하기
                </button>
              </div>
            </div>
          ) : (
            <button className="panel-rail" onClick={() => setMatOpen(true)} title="재료 패널 펼치기">
              <Icon name="chevron-right" size={14}/>
              <span className="rail-label">재료 패널</span>
            </button>
          )}

          {/* RIGHT — 에디터 */}
          <div className="card editor-panel">
            {selectedCard ? (
              <>
                <div className="editor-tabs">
                  {questions.map((q, i) => (
                    <button key={i} className={`editor-tab ${activeQ === i ? 'active' : ''}`} onClick={() => setActiveQ(i)}>{q}</button>
                  ))}
                </div>

                <div className="editor-body">
                  <div className="editor-prompt-row">
                    <div className="editor-prompt">
                      기존의 틀을 깨고 새로운 타겟을 발굴하여 전략을 수립한 경험을 서술해 주십시오.
                    </div>
                    <div className="editor-counter"><b>421</b> / 500자</div>
                  </div>

                  <div className="editor-area" contentEditable suppressContentEditableWarning>
                    <p>
                      <span className="h-link">최근 외식 산업 소비자 행동 연구에 따르면,</span> MZ세대는 카페를 단순한 음료 구매처가 아닌 "비일상적 경험의 공간"으로 인식하고 있습니다. 잠바주스 산학협력 프로젝트에서 저는 이 가설을 출발점 삼아 새로운 타겟을 발굴했습니다.
                    </p>
                    <p>
                      기존 잠바주스의 핵심 타겟은 20대 직장인이었으나, 8개 매장을 직접 방문해 약 30명을 인터뷰한 결과, 평일 오후 매장 체류 시간이 가장 긴 집단은 <b>"스터디형 30대 1인 고객"</b>이라는 새로운 페르소나를 발견했습니다.
                    </p>
                    <p>
                      팀장으로서 텍스트 마이닝을 통해 페인포인트를 도출하고, 이들을 위한 "1인용 좌석 × 카페인 부스터 세트" 캠페인을 기획했습니다. 그 결과 4월 말 결제 전환율이 <span className="h-underline">15% 상승했습니다.</span>
                    </p>
                  </div>

                  <div className="editor-meta-row">
                    <div className="editor-meta-left">
                      <span className="ed-status"><Icon name="check" size={11} strokeWidth={2.5}/> 자동 저장됨</span>
                      <span className="ed-status-sep">·</span>
                      <span className="ed-status">마지막 편집 14:32</span>
                    </div>
                    <div style={{display:'flex', gap:6}}>
                      <button className="btn sm"><Icon name="rotate" size={11}/> 되돌리기</button>
                      <button className="btn sm primary">AI 다시 검토</button>
                    </div>
                  </div>
                </div>

                <div className="feedback-section">
                  <div className="feedback-section-head">
                    <div className="fsh-left">
                      <Icon name="trend" size={15}/>
                      <span className="fsh-title">AI 피드백</span>
                      <span className="fsh-count">2</span>
                    </div>
                    <button className="btn sm ghost">모두 접기 <Icon name="chevron-up" size={11}/></button>
                  </div>

                  <div className="fb-card accent">
                    <div className="fb-head">
                      <div className="fb-title">
                        <span className="fb-priority">!</span>
                        수치 보강 — 경험 카드에서 수치를 발견했습니다
                      </div>
                      <button className="fb-dismiss" title="무시"><Icon name="close" size={13}/></button>
                    </div>
                    <div className="fb-msg"><b>"상승했습니다"</b>가 모호합니다. 경험 카드 R에 기록된 수치로 바꿔주세요.</div>
                    <div className="fb-compare">
                      <div className="fb-box now"><div className="lab">현재</div>결제 전환율이 상승했습니다.</div>
                      <div className="fb-arrow"><Icon name="arrow-right" size={14}/></div>
                      <div className="fb-box sug"><div className="lab">제안</div>결제 전환율이 <b>15%</b> 상승했습니다.</div>
                    </div>
                    <div className="fb-actions">
                      <button className="btn primary sm"><Icon name="check" size={12}/> 적용</button>
                      <button className="btn sm">무시</button>
                      <div style={{flex:1}}/>
                      <span className="fb-source">출처 · 잠바주스 산학 경험 카드 R 필드</span>
                    </div>
                  </div>

                  <div className="fb-card">
                    <div className="fb-head">
                      <div className="fb-title">
                        <span className="fb-priority fb-priority--info">i</span>
                        DBpia 근거 확인 — 첫 문단의 트렌드 주장은 학술 데이터로 뒷받침됩니다
                      </div>
                      <button className="fb-dismiss" title="무시"><Icon name="close" size={13}/></button>
                    </div>
                    <div className="fb-msg">
                      "MZ세대가 카페를 비일상적 경험 공간으로 인식한다"는 진술은 DBpia 논문 <b>「MZ세대 외식 소비 행동의 변화」</b>(박서연 외, 2024)의 핵심 결론과 일치합니다.
                    </div>
                    <div className="fb-actions">
                      <button className="btn sm"><Icon name="arrow-up-right" size={11}/> 논문 원문 보기</button>
                      <button className="btn sm"><Icon name="plus" size={11}/> 각주로 추가</button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="editor-empty-state">
                <div className="ees-icon"><Icon name="edit" size={28}/></div>
                <div className="ees-title">경험 카드를 선택해주세요</div>
                <div className="ees-desc">왼쪽 재료 패널에서 경험 카드를 선택하면<br/>AI가 해당 경험을 바탕으로 자소서를 작성합니다.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

window.Resume = Resume;
