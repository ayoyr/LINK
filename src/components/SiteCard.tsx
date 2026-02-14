import type { Site } from '../data/sites';
import './SiteCard.css';

interface SiteCardProps {
    site: Site;
}

export function SiteCard({ site }: SiteCardProps) {
    const { name, url, accentColor, description, favoriteLinks } = site;

    // Dynamic style for the glow effect
    const cardStyle = {
        '--accent-color': accentColor,
    } as React.CSSProperties;

    return (
        <div className="site-card" style={cardStyle}>
            <div className="card-content">
                <h2 className="site-name" style={{ color: accentColor }}>
                    <a href={url} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        {name}
                    </a>
                </h2>
                <p className="site-description">{description}</p>

                {favoriteLinks.length > 0 && (
                    <div className="favorites-list">
                        <h3>お気に入りリスト</h3>
                        <ul className="favorites-grid">
                            {favoriteLinks.map((link, index) => (
                                <li key={index} className="favorite-item">
                                    <a href={link.url} target="_blank" rel="noreferrer" className="favorite-link">
                                        {link.image && (
                                            <div className="favorite-image-wrapper">
                                                <img src={link.image} alt={link.name} className="favorite-image" />
                                            </div>
                                        )}
                                        <span className="favorite-name">{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="card-background-glow"></div>
        </div>
    );
}
