import { sites } from './data/sites';
import { SiteCard } from './components/SiteCard';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>FavCollections</h1>
        <p className="subtitle">自分専用のブックマークポータル</p>
      </header>

      <main className="card-grid">
        {sites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </main>
    </div>
  );
}

export default App;
