import { useState, useMemo } from 'react';
import { Search, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CHANNELS_DATA from '@/data/channels.json';

const ITEMS_PER_PAGE = 60;

// Country to Flag emoji mapping
const getCountryFlag = (country: string): string => {
    const flagMap: Record<string, string> = {
        'All': '🌍',
        'Global': '🌐',
        'USA': '🇺🇸',
        'UK': '🇬🇧',
        'Canada': '🇨🇦',
        'France': '🇫🇷',
        'Germany': '🇩🇪',
        'Spain': '🇪🇸',
        'Italy': '🇮🇹',
        'Brazil': '🇧🇷',
        'Mexico': '🇲🇽',
        'Argentina': '🇦🇷',
        'India': '🇮🇳',
        'Japan': '🇯🇵',
        'China': '🇨🇳',
        'South Korea': '🇰🇷',
        'Australia': '🇦🇺',
        'Netherlands': '🇳🇱',
        'Belgium': '🇧🇪',
        'Portugal': '🇵🇹',
        'Poland': '🇵🇱',
        'Turkey': '🇹🇷',
        'Russia': '🇷🇺',
        'Sweden': '🇸🇪',
        'Norway': '🇳🇴',
        'Denmark': '🇩🇰',
        'Finland': '🇫🇮',
        'Greece': '🇬🇷',
        'Ireland': '🇮🇪',
        'Switzerland': '🇨🇭',
        'Austria': '🇦🇹',
        'Czech Republic': '🇨🇿',
        'Romania': '🇷🇴',
        'Hungary': '🇭🇺',
        'South Africa': '🇿🇦',
        'Egypt': '🇪🇬',
        'Morocco': '🇲🇦',
        'Saudi Arabia': '🇸🇦',
        'UAE': '🇦🇪',
        'Israel': '🇮🇱',
        'Lebanon': '🇱🇧',
        'Pakistan': '🇵🇰',
        'Bangladesh': '🇧🇩',
        'Thailand': '🇹🇭',
        'Vietnam': '🇻🇳',
        'Philippines': '🇵🇭',
        'Indonesia': '🇮🇩',
        'Malaysia': '🇲🇾',
        'Singapore': '🇸🇬',
        'New Zealand': '🇳🇿',
        'Chile': '🇨🇱',
        'Colombia': '🇨🇴',
        'Peru': '🇵🇪',
        'Venezuela': '🇻🇪',
        'Ecuador': '🇪🇨',
        'Uruguay': '🇺🇾',
        'Paraguay': '🇵🇾',
        'Bolivia': '🇧🇴',
        'Costa Rica': '🇨🇷',
        'Panama': '🇵🇦',
        'Cuba': '🇨🇺',
        'Dominican Republic': '🇩🇴',
        'Puerto Rico': '🇵🇷',
        'Jamaica': '🇯🇲',
        'Trinidad and Tobago': '🇹🇹',
        'Nigeria': '🇳🇬',
        'Kenya': '🇰🇪',
        'Ghana': '🇬🇭',
        'Ethiopia': '🇪🇹',
        'Algeria': '🇩🇿',
        'Tunisia': '🇹🇳',
        'Libya': '🇱🇾',
        'Sudan': '🇸🇩',
        'Jordan': '🇯🇴',
        'Iraq': '🇮🇶',
        'Iran': '🇮🇷',
        'Afghanistan': '🇦🇫',
        'Kazakhstan': '🇰🇿',
        'Uzbekistan': '🇺🇿',
        'Ukraine': '🇺🇦',
        'Belarus': '🇧🇾',
        'Serbia': '🇷🇸',
        'Croatia': '🇭🇷',
        'Slovenia': '🇸🇮',
        'Slovakia': '🇸🇰',
        'Bulgaria': '🇧🇬',
        'Albania': '🇦🇱',
        'North Macedonia': '🇲🇰',
        'Bosnia': '🇧🇦',
        'Montenegro': '🇲🇪',
        'Kosovo': '🇽🇰',
        'Iceland': '🇮🇸',
        'Luxembourg': '🇱🇺',
        'Malta': '🇲🇹',
        'Cyprus': '🇨🇾',
        'Estonia': '🇪🇪',
        'Latvia': '🇱🇻',
        'Lithuania': '🇱🇹',
        'Armenia': '🇦🇲',
        'Georgia': '🇬🇪',
        'Azerbaijan': '🇦🇿',
        'Mongolia': '🇲🇳',
        'Nepal': '🇳🇵',
        'Sri Lanka': '🇱🇰',
        'Myanmar': '🇲🇲',
        'Cambodia': '🇰🇭',
        'Laos': '🇱🇦',
        'Brunei': '🇧🇳',
        'Qatar': '🇶🇦',
        'Kuwait': '🇰🇼',
        'Bahrain': '🇧🇭',
        'Oman': '🇴🇲',
        'Yemen': '🇾🇪',
    };
    return flagMap[country] || '🏳️';
};

export default function ChannelsList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedCountry, setSelectedCountry] = useState("All");
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    // Extract unique countries dynamically
    const { countries } = useMemo(() => {
        const cnts = new Set(["All"]);
        CHANNELS_DATA.forEach(c => {
            cnts.add(c.country);
        });
        return {
            countries: Array.from(cnts).sort()
        };
    }, []);

    // Filter Logic
    const filteredChannels = useMemo(() => {
        return CHANNELS_DATA.filter(channel => {
            const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                channel.category.toLowerCase().includes(searchQuery.toLowerCase());

            // Theme Filtering Logic
            let matchesCategory = true;
            if (selectedCategory !== "All") {
                const catLower = channel.category.toLowerCase();
                const nameLower = channel.name.toLowerCase();

                switch (selectedCategory) {
                    case "Sports":
                        matchesCategory = catLower.includes('sport') || catLower.includes('nfl') || catLower.includes('nba') || catLower.includes('football') || catLower.includes('soccer') || catLower.includes('espn') || catLower.includes('bein') || nameLower.includes('sport');
                        break;
                    case "MoviesSeries":
                        const isMovie = catLower.includes('movie') || catLower.includes('cinema') || catLower.includes('film') || catLower.includes('action') || (catLower.includes('drama') && !catLower.includes('k-drama')) || catLower.includes('comedy') || nameLower.includes('movie') || nameLower.includes('cinema');
                        const isSeries = catLower.includes('serie') || catLower.includes('show') || catLower.includes('season') || catLower.includes('episode');
                        matchesCategory = isMovie || isSeries;
                        break;
                    case "News":
                        matchesCategory = catLower.includes('news') || catLower.includes('cnn') || catLower.includes('bbc') || catLower.includes('weather') || nameLower.includes('news');
                        break;
                    case "Documentary":
                        matchesCategory = catLower.includes('doc') || catLower.includes('history') || catLower.includes('discovery') || catLower.includes('animal') || catLower.includes('geo');
                        break;
                    case "Kids":
                        matchesCategory = catLower.includes('kid') || catLower.includes('cartoon') || catLower.includes('animation') || catLower.includes('disney') || catLower.includes('nick');
                        break;
                    case "Music":
                        matchesCategory = catLower.includes('music') || catLower.includes('mtv') || catLower.includes('radio');
                        break;
                    default:
                        matchesCategory = channel.category === selectedCategory;
                }
            }

            const matchesCountry = selectedCountry === "All" || channel.country === selectedCountry;
            return matchesSearch && matchesCategory && matchesCountry;
        });
    }, [searchQuery, selectedCategory, selectedCountry]);

    // Pagination Logic
    const visibleChannels = filteredChannels.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + ITEMS_PER_PAGE);
    };

    return (
        <div className="min-h-screen bg-[#080c17] text-white">
            <Navigation />
            <div className="pt-24 pb-20">

                {/* Header Section */}
                <div className="container mx-auto px-4 mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Explore Our <span className="text-emerald-400">Channels</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Discover over {CHANNELS_DATA.length.toLocaleString()}+ live TV channels from around the world.
                        Sports, Movies, News, and more in 4K/FHD quality.
                    </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="container mx-auto px-4 mb-8">
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 shadow-xl backdrop-blur-sm">

                        {/* Search Input */}
                        <div className="relative w-full mb-6">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Search for a channel (e.g. BeIN, HBO, ESPN...)"
                                className="pl-10 bg-[#080c17] border-white/10 text-white h-12 focus:ring-emerald-500/50 focus:border-emerald-500/50"
                                value={searchQuery}
                                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
                            />
                        </div>


                        {/* Theme Filter (Replacing Raw Category) */}
                        <div className="mb-8">
                            <label className="text-sm font-semibold text-slate-300 mb-3 block flex items-center gap-2">
                                <Tv className="w-4 h-4 text-emerald-400" />
                                Filter by Theme
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { id: 'All', label: 'All Channels', icon: '📺' },
                                    { id: 'Sports', label: 'Sports', icon: '⚽' },
                                    { id: 'MoviesSeries', label: 'Movies / Series', icon: '🎬🍿' },
                                    { id: 'News', label: 'News', icon: '📰' },
                                    { id: 'Documentary', label: 'Documentary', icon: '🦁' },
                                    { id: 'Kids', label: 'Kids', icon: '🧸' },
                                    { id: 'Music', label: 'Music', icon: '🎵' },
                                ].map(theme => (
                                    <button
                                        key={theme.id}
                                        onClick={() => { setSelectedCategory(theme.id); setVisibleCount(ITEMS_PER_PAGE); }}
                                        className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 border ${selectedCategory === theme.id
                                            ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/25 scale-105'
                                            : 'bg-slate-800/50 text-slate-400 border-white/5 hover:bg-slate-700/50 hover:border-white/10 hover:text-white'
                                            }`}
                                    >
                                        <span className="text-lg">{theme.icon}</span>
                                        <span>{theme.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Country Filter with Flags */}
                        <div>
                            <label className="text-sm font-semibold text-slate-300 mb-3 block flex items-center gap-2">
                                🌍 Filter by Country
                            </label>
                            <div className="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto custom-scrollbar pr-2">
                                {countries.map(country => {
                                    const flag = getCountryFlag(country);
                                    const isSelected = selectedCountry === country;
                                    return (
                                        <button
                                            key={country}
                                            onClick={() => { setSelectedCountry(country); setVisibleCount(ITEMS_PER_PAGE); }}
                                            className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-200 flex items-center gap-2 border ${isSelected
                                                ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                                                : 'bg-slate-800/30 text-slate-400 border-white/5 hover:bg-slate-700/50 hover:text-white'
                                                }`}
                                        >
                                            <span className="text-base">{flag}</span>
                                            <span>{country}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Channels Grid */}
                <div className="container mx-auto px-4">
                    {visibleChannels.length > 0 ? (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                                {visibleChannels.map(channel => (
                                    <div
                                        key={channel.id}
                                        className="group bg-slate-900/40 rounded-xl p-6 border border-white/5 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col items-center gap-4 relative overflow-hidden"
                                    >


                                        <div className="w-24 h-24 flex items-center justify-center bg-white/5 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                                            {channel.logo ? (
                                                <img
                                                    src={channel.logo}
                                                    alt={channel.name}
                                                    className="w-full h-full object-contain drop-shadow-md"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <Tv className="w-10 h-10 text-slate-500" />
                                            )}
                                        </div>

                                        <div className="text-center z-10 w-full">
                                            <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors truncate w-full text-sm" title={channel.name}>
                                                {channel.name}
                                            </h3>
                                            <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
                                                <Badge variant="outline" className="text-[10px] border-white/10 text-slate-400 truncate max-w-[80px]">
                                                    {channel.category}
                                                </Badge>
                                                {channel.country !== "Global" && (
                                                    <Badge variant="secondary" className="text-[10px] bg-white/10 text-white hover:bg-white/20 flex items-center gap-1">
                                                        <span>{getCountryFlag(channel.country)}</span>
                                                        <span>{channel.country}</span>
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {visibleCount < filteredChannels.length && (
                                <div className="mt-12 text-center">
                                    <Button
                                        onClick={handleLoadMore}
                                        size="lg"
                                        className="min-w-[200px]"
                                    >
                                        Load More ({filteredChannels.length - visibleCount} remaining)
                                    </Button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Tv className="w-8 h-8 text-slate-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">No channels found</h3>
                            <p className="text-slate-400">Try adjusting your search or filters.</p>
                            <Button
                                variant="link"
                                className="text-emerald-400 mt-2 hover:text-emerald-300"
                                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setSelectedCountry("All"); }}
                            >
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </div>

            </div>
            <Footer />
        </div>
    );
}

