export interface PlanPrice {
    price: number;
    originalPrice: number;
    planId: string;
    savings: string;
    checkoutUrl: string; // Storing the full URL for reference, though we'll likely just use planId in the app
}

export interface Plan {
    id: string;
    name: string;
    duration: string;
    popular?: boolean;
    bestValue?: boolean;
    features: string[];
    prices: {
        [key: string]: PlanPrice; // Key is number of devices '1', '2', '3', '5'
    };
}

export const plans: Plan[] = [
    {
        id: '1-month',
        name: '1 Month',
        duration: '1 Month',
        features: [
            'Premium Servers',
            'Thousands of Live Channels',
            'Massive Movies & Series Library',
            '4K/HD Quality Streaming',
            'Anti-Freezing Technology',
            'TV Guide (EPG)',
            '100% Device Compatibility',
            'Catch-Up & Replay',
            'Instant Activation',
            '24/7 Support',
        ],
        prices: {
            '1': { price: 14.99, originalPrice: 14.99, planId: 'plan_n9C7HrkfriFIf', savings: '', checkoutUrl: '' },
            '2': { price: 20.99, originalPrice: 29.98, planId: 'plan_ipi9LfURfS39a', savings: '30% OFF', checkoutUrl: '' },
            '5': { price: 52.47, originalPrice: 74.95, planId: 'plan_T8rDE4spYq3ze', savings: '30% OFF', checkoutUrl: '' },
        },
    },
    {
        id: '3-months',
        name: '3 Months',
        duration: '3 Months',
        popular: true,
        features: [
            'Premium Servers',
            'Thousands of Live Channels',
            'Massive Movies & Series Library',
            '4K/HD Quality Streaming',
            'Anti-Freezing Technology',
            'TV Guide (EPG)',
            '100% Device Compatibility',
            'Catch-Up & Replay',
            'Instant Activation',
            '24/7 Support',
        ],
        prices: {
            '1': { price: 29.99, originalPrice: 29.99, planId: 'plan_7eUK34e2s50He', savings: '', checkoutUrl: 'https://whop.com/checkout/plan_7eUK34e2s50He' },
            '2': { price: 49.99, originalPrice: 59.98, planId: 'plan_1saFHGnFGEPlb', savings: '30% OFF', checkoutUrl: 'https://whop.com/checkout/plan_1saFHGnFGEPlb' },
            '3': { price: 69.99, originalPrice: 89.97, planId: 'plan_5vexAsi8Z911S', savings: 'SAVE 22%', checkoutUrl: 'https://whop.com/checkout/plan_5vexAsi8Z911S' },
            '5': { price: 104.97, originalPrice: 149.95, planId: 'plan_4svgbFsyLhACZ', savings: '30% OFF', checkoutUrl: 'https://whop.com/checkout/plan_4svgbFsyLhACZ' },
        },
    },
    {
        id: '6-months',
        name: '6 Months',
        duration: '6 Months',
        features: [
            'Premium Servers',
            'Thousands of Live Channels',
            'Massive Movies & Series Library',
            '4K/HD Quality Streaming',
            'Anti-Freezing Technology',
            'TV Guide (EPG)',
            '100% Device Compatibility',
            'Catch-Up & Replay',
            'Instant Activation',
            '24/7 Support',
        ],
        prices: {
            '1': { price: 41.99, originalPrice: 49.99, planId: 'plan_g8JAOu3uugAsB', savings: '', checkoutUrl: 'https://whop.com/checkout/plan_g8JAOu3uugAsB' },
            '2': { price: 69.99, originalPrice: 83.98, planId: 'plan_5vexAsi8Z911S', savings: '30% OFF', checkoutUrl: 'https://whop.com/checkout/plan_5vexAsi8Z911S' },
            '3': { price: 104.97, originalPrice: 125.97, planId: 'plan_4svgbFsyLhACZ', savings: 'SAVE 17%', checkoutUrl: 'https://whop.com/checkout/plan_4svgbFsyLhACZ' },
            '5': { price: 174.97, originalPrice: 209.95, planId: 'plan_vNFyfoC75ki4L', savings: '30% OFF', checkoutUrl: 'https://whop.com/checkout/plan_vNFyfoC75ki4L' },
        },
    },
    {
        id: '1-year',
        name: '1 Year',
        duration: '12 Months',
        bestValue: true,
        features: [
            'Premium Servers',
            'Thousands of Live Channels',
            'Massive Movies & Series Library',
            '4K/HD Quality Streaming',
            'Anti-Freezing Technology',
            'TV Guide (EPG)',
            '100% Device Compatibility',
            'Catch-Up & Replay',
            'Instant Activation',
            '24/7 Support',
        ],
        prices: {
            '1': { price: 69.99, originalPrice: 69.99, planId: 'plan_5vexAsi8Z911S', savings: '', checkoutUrl: 'https://whop.com/checkout/plan_5vexAsi8Z911S' },
            '2': { price: 104.97, originalPrice: 139.98, planId: 'plan_4svgbFsyLhACZ', savings: '30% OFF', checkoutUrl: 'https://whop.com/checkout/plan_4svgbFsyLhACZ' },
            '3': { price: 139.98, originalPrice: 209.97, planId: 'plan_0EpfIFz0BgeHq', savings: 'SAVE 33%', checkoutUrl: 'https://whop.com/checkout/plan_0EpfIFz0BgeHq' },
            '5': { price: 174.97, originalPrice: 349.95, planId: 'plan_vNFyfoC75ki4L', savings: '50% OFF', checkoutUrl: 'https://whop.com/checkout/plan_vNFyfoC75ki4L' },
        },
    },
    {
        id: '2-years',
        name: '2 Years',
        duration: '24 Months',
        features: [
            'Premium Servers',
            'Thousands of Live Channels',
            'Massive Movies & Series Library',
            '4K/HD Quality Streaming',
            'Anti-Freezing Technology',
            'TV Guide (EPG)',
            '100% Device Compatibility',
            'Catch-Up & Replay',
            'Instant Activation',
            '24/7 Support',
        ],
        prices: {
            '1': { price: 104.99, originalPrice: 139.98, planId: 'plan_4svgbFsyLhACZ', savings: 'BEST DEAL', checkoutUrl: 'https://whop.com/checkout/plan_4svgbFsyLhACZ' },
            '2': { price: 139.98, originalPrice: 199.98, planId: 'plan_0EpfIFz0BgeHq', savings: '30% OFF', checkoutUrl: 'https://whop.com/checkout/plan_0EpfIFz0BgeHq' },
            '3': { price: 174.97, originalPrice: 314.97, planId: 'plan_vNFyfoC75ki4L', savings: 'SAVE 44%', checkoutUrl: 'https://whop.com/checkout/plan_vNFyfoC75ki4L' },
            '5': { price: 244.97, originalPrice: 524.95, planId: 'plan_aG703lsTLZcuI', savings: 'SAVE 53%', checkoutUrl: 'https://whop.com/checkout/plan_aG703lsTLZcuI' },
        },
    },
];
