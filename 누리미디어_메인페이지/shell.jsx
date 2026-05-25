// Sidebar + Topbar shell
const NAV = [
  { id: 'myspace',    label: 'My Space',     icon: 'home',   step: null,     sub: ['홈', '경험파일', 'STAR 정리', '지원 관리', '마스터 자소서'] },
  { id: 'experience', label: '경험정리',       icon: 'folder', step: 'STEP 1' },
  { id: 'insight',    label: '직무/산업 분석', icon: 'bulb',   step: 'STEP 2' },
  { id: 'resume',     label: '자소서 작성',    icon: 'edit',   step: 'STEP 3' },
  { id: 'interview',  label: '모의면접',       icon: 'video',  step: 'STEP 4' },
];

const Sidebar = ({ current, onNav }) => {
  const [subOpen, setSubOpen] = React.useState(current === 'myspace');

  React.useEffect(() => {
    if (current === 'myspace') setSubOpen(true);
  }, [current]);

  const handleNav = (id) => {
    if (id === 'myspace') setSubOpen(o => !o);
    onNav(id);
  };

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">D</div>
        <div className="brand-text">
          DBpia AI Career UP
          <small>powered by Nurimedia</small>
        </div>
      </div>

      <div className="nav-section-label">Career Flow</div>
      {NAV.map(item => (
        <React.Fragment key={item.id}>
          <div
            className={`nav-item ${current === item.id ? 'active' : ''}`}
            onClick={() => handleNav(item.id)}
          >
            <Icon name={item.icon} size={17}/>
            <span>{item.label}</span>
            {item.step && <span className="step-num">{item.step}</span>}
            {item.sub && (
              <span className="nav-chevron">
                <Icon name={subOpen && current === 'myspace' ? 'chevron-down' : 'chevron-right'} size={11}/>
              </span>
            )}
          </div>
          {item.sub && subOpen && current === 'myspace' && (
            <div className="nav-submenu">
              {item.sub.map((s, i) => (
                <div key={i} className={`nav-subitem ${i === 0 ? 'active' : ''}`}>
                  <span className="sub-dot"/>
                  {s}
                </div>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}

      <div className="nav-section-label" style={{marginTop: 14}}>Library</div>
      <div className="nav-item">
        <Icon name="book" size={17}/>
        <span>DBpia 논문 라이브러리</span>
      </div>
      <div className="nav-item">
        <Icon name="briefcase" size={17}/>
        <span>지원 관리</span>
      </div>

      <div className="sidebar-bottom">
        <div className="nav-item" style={{marginBottom: 0}}>
          <Icon name="user" size={17}/>
          <span>계정</span>
        </div>
        <div className="nav-item">
          <Icon name="app" size={17}/>
          <span>앱 다운로드</span>
        </div>
        <div className="user">
          <div className="avatar">YS</div>
          <div className="user-meta">
            <div className="user-name">유우시</div>
            <div className="user-plan">PRO · 2026 졸업</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const Topbar = ({ crumbs = [] }) => (
  <div className="topbar">
    <div className="crumbs">
      {crumbs.map((c, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep">/</span>}
          <span className={i === crumbs.length - 1 ? 'cur' : ''}>{c}</span>
        </React.Fragment>
      ))}
    </div>
    <div className="spacer"/>
    <div className="search">
      <Icon name="search" size={14}/>
      <span>경험·논문·JD 통합 검색</span>
    </div>
    <button className="icon-btn" title="알림"><Icon name="bell" size={16}/></button>
    <button className="icon-btn" title="히스토리"><Icon name="history" size={16}/></button>
  </div>
);

window.Sidebar = Sidebar;
window.Topbar = Topbar;
window.NAV = NAV;
