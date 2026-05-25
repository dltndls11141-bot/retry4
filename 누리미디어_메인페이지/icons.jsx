// Icon set — minimal stroke icons
const Icon = ({ name, size = 18, strokeWidth = 1.7, className = '' }) => {
  const props = {
    width: size, height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round',
    className: `ic ${className}`,
  };
  switch (name) {
    case 'home':
      return <svg {...props}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/></svg>;
    case 'folder':
      return <svg {...props}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>;
    case 'bulb':
      return <svg {...props}><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.7 1.5 1.4 1.5 2.5h5c0-1.1.7-1.8 1.5-2.5A6 6 0 0 0 12 3z"/></svg>;
    case 'edit':
      return <svg {...props}><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>;
    case 'video':
      return <svg {...props}><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></svg>;
    case 'user':
      return <svg {...props}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>;
    case 'download':
      return <svg {...props}><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>;
    case 'search':
      return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>;
    case 'bell':
      return <svg {...props}><path d="M6 8a6 6 0 1 1 12 0c0 6 2 7 2 7H4s2-1 2-7"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>;
    case 'chevron-down':
      return <svg {...props}><path d="m6 9 6 6 6-6"/></svg>;
    case 'chevron-right':
      return <svg {...props}><path d="m9 6 6 6-6 6"/></svg>;
    case 'chevron-left':
      return <svg {...props}><path d="m15 6-6 6 6 6"/></svg>;
    case 'chevron-up':
      return <svg {...props}><path d="m6 15 6-6 6 6"/></svg>;
    case 'close':
      return <svg {...props}><path d="M6 6l12 12M18 6 6 18"/></svg>;
    case 'plus':
      return <svg {...props}><path d="M12 5v14"/><path d="M5 12h14"/></svg>;
    case 'check':
      return <svg {...props}><path d="m5 13 4 4L19 7"/></svg>;
    case 'arrow-right':
      return <svg {...props}><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>;
    case 'arrow-up-right':
      return <svg {...props}><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>;
    case 'sparkle':
      return <svg {...props}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    case 'book':
      return <svg {...props}><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z"/><path d="M8 7h7M8 11h7"/></svg>;
    case 'trend':
      return <svg {...props}><path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>;
    case 'mic':
      return <svg {...props}><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>;
    case 'camera':
      return <svg {...props}><path d="M23 19V7a2 2 0 0 0-2-2h-3l-2-2H8L6 5H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2z"/><circle cx="12" cy="13" r="4"/></svg>;
    case 'play':
      return <svg {...props}><path d="m6 4 14 8-14 8z" fill="currentColor"/></svg>;
    case 'briefcase':
      return <svg {...props}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>;
    case 'file-text':
      return <svg {...props}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></svg>;
    case 'send':
      return <svg {...props}><path d="m4 12 16-8-6 18-3-7-7-3z"/></svg>;
    case 'rotate':
      return <svg {...props}><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v6h6"/></svg>;
    case 'warn':
      return <svg {...props}><path d="m12 2 10 18H2z"/><path d="M12 9v4M12 17h.01"/></svg>;
    case 'info':
      return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5"/></svg>;
    case 'link':
      return <svg {...props}><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>;
    case 'history':
      return <svg {...props}><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v6h6"/><path d="M12 7v5l3 2"/></svg>;
    case 'star':
      return <svg {...props}><path d="m12 3 2.7 6 6.3.5-4.8 4.2 1.5 6.3L12 16.8 6.3 20l1.5-6.3L3 9.5 9.3 9z"/></svg>;
    case 'app':
      return <svg {...props}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>;
    default: return null;
  }
};

window.Icon = Icon;
