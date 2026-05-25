// Main app
const App = () => {
  const [screen, setScreen] = React.useState('myspace');

  const sidebarCurrent = () => {
    if (['insight', 'insightDetail', 'insightMatch'].includes(screen)) return 'insight';
    return screen;
  };

  const renderScreen = () => {
    switch (screen) {
      case 'myspace':      return <MySpace onNav={setScreen}/>;
      case 'experience':   return <Experience onNav={setScreen}/>;
      case 'insight':      return <InsightLanding onNav={setScreen}/>;
      case 'insightDetail':return <Insight onNav={setScreen}/>;
      case 'insightMatch': return <InsightMatch onNav={setScreen}/>;
      case 'resume':       return <Resume onNav={setScreen}/>;
      case 'interview':    return <Interview/>;
      default:             return <MySpace onNav={setScreen}/>;
    }
  };

  return (
    <div className="app">
      <Sidebar current={sidebarCurrent()} onNav={setScreen}/>
      <main>{renderScreen()}</main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
