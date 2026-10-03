import { statsCards, recentActivity } from './data/mock';
import './index.css';

const typeColors: Record<string, string> = {
  upgrade: '#6366f1',
  ticket: '#f59e0b',
  user: '#10b981',
  payment: '#3b82f6',
  deactivate: '#ef4444',
};

export default function App() {
  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">⚡ Dash</div>
        <nav className="nav">
          {['Overview', 'Analytics', 'Users', 'Revenue', 'Settings'].map(item => (
            <a key={item} href="#" className={`nav-item ${item === 'Overview' ? 'active' : ''}`}>
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="main">
        <header className="topbar">
          <div>
            <h1>Overview</h1>
            <p className="subtitle">Welcome back, Kauã 👋</p>
          </div>
          <button className="btn">Export Report</button>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          {statsCards.map(card => (
            <div key={card.label} className="stat-card">
              <p className="stat-label">{card.label}</p>
              <p className="stat-value">{card.value}</p>
              <p className={`stat-change ${card.up ? 'up' : 'down'}`}>
                {card.up ? '▲' : '▼'} {card.change} vs last month
              </p>
            </div>
          ))}
        </section>

        {/* Activity */}
        <section className="card">
          <div className="card-header">
            <h2>Recent Activity</h2>
            <a href="#" className="link">View all →</a>
          </div>
          <ul className="activity-list">
            {recentActivity.map((item, i) => (
              <li key={i} className="activity-item">
                <div className="activity-dot" style={{ background: typeColors[item.type] }} />
                <div className="activity-info">
                  <p><strong>{item.user}</strong> — {item.action}</p>
                  <p className="activity-time">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
