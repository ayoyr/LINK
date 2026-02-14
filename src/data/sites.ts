export interface Link {
    name: string;
    url: string;
    image?: string;
    group?: string;
}

export interface Site {
    id: string;
    name: string;
    url: string;
    accentColor: string;
    description?: string;
    favoriteLinks: Link[];
}

// Helper to generate image path
const getImg = (group: string, file: string) => `/images/${group}/${file}`;

// Helper to encode Korean for URL
const getKgirlsUrl = (koreanName: string) =>
    `https://www.kgirls.net/index.php?act=IS&search_target=title_content&is_keyword=${encodeURIComponent(koreanName)}`;

const getIdolFapUrl = (slug: string) =>
    `https://jp.idolfap.com/idols/${slug}/`;

// Data with mappings
const favorites = {
    ive: [
        { name: 'Rei', file: 'Rei.jpg', korean: '레이', slug: 'rei' },
        { name: 'Wonyoung', file: 'Wonyong.jpg', korean: '장원영', slug: 'wonyoung' },
        { name: 'Yujin', file: 'Yujin.jpeg', korean: '안유진', slug: 'yujin' },
    ],
    lesserafim: [
        { name: 'Chaewon', file: 'chaewon.jpg', korean: '김채원', slug: 'chaewon' },
        { name: 'Kazuha', file: 'kazuha.jpg', korean: '카즈하', slug: 'kazuha' },
    ],
    twice: [
        { name: 'Mina', file: 'mina.webp', korean: '미나', slug: 'mina' },
        { name: 'Momo', file: 'momo.jpg', korean: '모모', slug: 'momo' },
        { name: 'Nayeon', file: 'nayeon.jpg', korean: '나연', slug: 'nayeon' },
        { name: 'Tzuyu', file: 'tzuyu.jpg', korean: '쯔위', slug: 'tzuyu' },
    ],
    aespa: [
        { name: 'Karina', file: 'karina.jpg', korean: '카리나', slug: 'karina' },
        { name: 'Winter', file: 'winter.webp', korean: '윈터', slug: 'winter' },
    ]
};

export const sites: Site[] = [
    {
        id: 'kgirls',
        name: 'KGirls',
        url: 'https://www.kgirls.net',
        accentColor: '#ff4081', // Pink
        description: '韓国アイドルのギャラリーサイト',
        favoriteLinks: [
            ...favorites.ive.map(m => ({
                name: m.name,
                url: getKgirlsUrl(m.korean),
                image: getImg('IVE', m.file),
                group: 'IVE'
            })),
            ...favorites.lesserafim.map(m => ({
                name: m.name,
                url: getKgirlsUrl(m.korean),
                image: getImg('LE SSELAFIM', m.file),
                group: 'LE SSERAFIM'
            })),
            ...favorites.twice.map(m => ({
                name: m.name,
                url: getKgirlsUrl(m.korean),
                image: getImg('TWICE', m.file),
                group: 'TWICE'
            })),
            ...favorites.aespa.map(m => ({
                name: m.name,
                url: getKgirlsUrl(m.korean),
                image: getImg('aespa', m.file),
                group: 'aespa'
            }))
        ]
    },
    {
        id: 'erome',
        name: 'Erome',
        url: 'https://www.erome.com/explore',
        accentColor: '#00e676', // Green
        description: '写真・動画共有プラットフォーム',
        favoriteLinks: []
    },
    {
        id: 'idolfap',
        name: 'IdolFap',
        url: 'https://jp.idolfap.com',
        accentColor: '#6200ea', // Deep Purple
        description: 'アイドル画像まとめ',
        favoriteLinks: [
            { name: '人気ランキング', url: 'https://jp.idolfap.com/rankings' },
            ...favorites.ive.map(m => ({
                name: m.name,
                url: getIdolFapUrl(m.slug),
                image: getImg('IVE', m.file)
            })),
            ...favorites.lesserafim.map(m => ({
                name: m.name,
                url: getIdolFapUrl(m.slug),
                image: getImg('LE SSELAFIM', m.file)
            })),
            ...favorites.twice.map(m => ({
                name: m.name,
                url: getIdolFapUrl(m.slug),
                image: getImg('TWICE', m.file)
            })),
            ...favorites.aespa.map(m => ({
                name: m.name,
                url: getIdolFapUrl(m.slug),
                image: getImg('aespa', m.file)
            })),
        ]
    },
    {
        id: 'kkzz',
        name: 'KKZZ',
        url: 'https://kkzz.kr',
        accentColor: '#ffa000', // Amber/Orange
        description: 'K-POP GIFまとめ',
        favoriteLinks: []
    },
    {
        id: 'realdeepfakes',
        name: 'RealDeepFakes',
        url: 'https://realdeepfakes.com/',
        accentColor: '#d32f2f', // Red
        description: 'Deepfake Video Search',
        favoriteLinks: [
            ...favorites.ive.map(m => ({
                name: m.name,
                url: `https://realdeepfakes.com/search/${encodeURIComponent(m.name)}/`,
                image: getImg('IVE', m.file),
                group: 'IVE'
            })),
            ...favorites.lesserafim.map(m => ({
                name: m.name,
                url: `https://realdeepfakes.com/search/${encodeURIComponent(m.name)}/`,
                image: getImg('LE SSELAFIM', m.file),
                group: 'LE SSERAFIM'
            })),
            ...favorites.twice.map(m => ({
                name: m.name,
                url: `https://realdeepfakes.com/search/${encodeURIComponent(m.name)}/`,
                image: getImg('TWICE', m.file),
                group: 'TWICE'
            })),
            ...favorites.aespa.map(m => ({
                name: m.name,
                url: `https://realdeepfakes.com/search/${encodeURIComponent(m.name)}/`,
                image: getImg('aespa', m.file),
                group: 'aespa'
            }))
        ]
    },
    {
        id: 'pmvhaven',
        name: 'PMVHaven',
        url: 'https://pmvhaven.com/',
        accentColor: '#ec407a', // Pinkish Red
        description: 'PMV Search',
        favoriteLinks: [
            ...favorites.ive.map(m => ({
                name: m.name,
                url: `https://pmvhaven.com/search?q=${encodeURIComponent(m.name)}`,
                image: getImg('IVE', m.file),
                group: 'IVE'
            })),
            ...favorites.lesserafim.map(m => ({
                name: m.name,
                url: `https://pmvhaven.com/search?q=${encodeURIComponent(m.name)}`,
                image: getImg('LE SSELAFIM', m.file),
                group: 'LE SSERAFIM'
            })),
            ...favorites.twice.map(m => ({
                name: m.name,
                url: `https://pmvhaven.com/search?q=${encodeURIComponent(m.name)}`,
                image: getImg('TWICE', m.file),
                group: 'TWICE'
            })),
            ...favorites.aespa.map(m => ({
                name: m.name,
                url: `https://pmvhaven.com/search?q=${encodeURIComponent(m.name)}`,
                image: getImg('aespa', m.file),
                group: 'aespa'
            }))
        ]
    }
];
