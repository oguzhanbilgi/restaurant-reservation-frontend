import React, { useState, useEffect, useMemo } from 'react';
import '../styles/Menu.css';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('kahvalti');
    const [animatedItems, setAnimatedItems] = useState([]);

    const menuCategories = useMemo(() => [
        { id: 'kahvalti', name: 'Kahvaltı', icon: 'fa-coffee' },
        { id: 'anaYemek', name: 'Ana Yemekler', icon: 'fa-utensils' },
        { id: 'tatlilar', name: 'Tatlılar', icon: 'fa-cookie' },
        { id: 'sushi', name: 'Sushi', icon: 'fa-fish' },
        { id: 'icecekler', name: 'İçecekler', icon: 'fa-glass-martini-alt' }
    ], []);

    const menuItems = useMemo(() => ({
        kahvalti: [
            { name: 'Serpme Kahvaltı', description: 'Zengin çeşitlerle hazırlanmış geleneksel kahvaltı tabağı', price: '350₺', image: 'https://source.unsplash.com/random/800x600/?turkish,breakfast&1', popular: true },
            { name: 'Simit Tabağı', description: 'Taze simit, beyaz peynir, domates, salatalık', price: '85₺', image: 'https://source.unsplash.com/random/800x600/?simit,bagel&2' },
            { name: 'Menemen', description: 'Taze domatesli klasik menemen, yanında simit', price: '95₺', image: 'https://source.unsplash.com/random/800x600/?eggs,tomato&3' },
            { name: 'Omlet', description: 'Seçtiğiniz malzemelerle hazırlanan özel omlet', price: '85₺', image: 'https://source.unsplash.com/random/800x600/?omelette&4' }
        ],
        anaYemek: [
            { name: 'Izgara Levrek', description: 'Mevsim sebzeleri ile servis edilir', price: '220₺', image: 'https://source.unsplash.com/random/800x600/?grilled,fish&5', popular: true },
            { name: 'Kuzu Tandır', description: 'Özel baharatlarla marine edilmiş kuzu tandır', price: '280₺', image: 'https://source.unsplash.com/random/800x600/?lamb,meat&6' },
            { name: 'Köfte', description: 'El yapımı köfte, patates kızartması ile', price: '180₺', image: 'https://source.unsplash.com/random/800x600/?meatballs&7' },
            { name: 'Karışık Izgara', description: 'Kuzu pirzola, köfte, tavuk şiş', price: '320₺', image: 'https://source.unsplash.com/random/800x600/?mixed,grill&8', popular: true }
        ],
        tatlilar: [
            { name: 'Künefe', description: 'Antep fıstıklı özel künefe', price: '120₺', image: 'https://source.unsplash.com/random/800x600/?dessert,sweet&9', popular: true },
            { name: 'Katmer', description: 'Geleneksel Gaziantep katmeri', price: '100₺', image: 'https://source.unsplash.com/random/800x600/?pastry,dessert&10' },
            { name: 'Baklava', description: 'Fıstıklı ev yapımı baklava', price: '140₺', image: 'https://source.unsplash.com/random/800x600/?baklava&11' },
            { name: 'Sütlaç', description: 'Fırında geleneksel sütlaç', price: '75₺', image: 'https://source.unsplash.com/random/800x600/?pudding,rice&12' }
        ],
        sushi: [
            { name: 'Somon Roll', description: 'Taze somon, avokado ve salatalık', price: '180₺', image: 'https://source.unsplash.com/random/800x600/?sushi,salmon&13', popular: true },
            { name: 'Tempura Roll', description: 'Tempura karides ve sebzeler', price: '160₺', image: 'https://source.unsplash.com/random/800x600/?tempura,sushi&14' },
            { name: 'Dragon Roll', description: 'Yılan balığı, avokado ve susam', price: '220₺', image: 'https://source.unsplash.com/random/800x600/?dragon,roll&15' },
            { name: 'Rainbow Roll', description: 'Çeşitli balıklar ve avokado', price: '200₺', image: 'https://source.unsplash.com/random/800x600/?sushi,roll&16' }
        ],
        icecekler: [
            { name: 'Türk Kahvesi', description: 'Geleneksel Türk kahvesi', price: '30₺', image: 'https://source.unsplash.com/random/800x600/?turkish,coffee&17' },
            { name: 'Taze Meyve Suyu', description: 'Mevsim meyvelerinden', price: '45₺', image: 'https://source.unsplash.com/random/800x600/?fresh,juice&18' },
            { name: 'Şarap', description: 'Özel seçim şaraplar', price: '180₺', image: 'https://source.unsplash.com/random/800x600/?wine,glass&19', popular: true },
            { name: 'Kokteyl', description: 'Barmenimizin özel kokteylleri', price: '120₺', image: 'https://source.unsplash.com/random/800x600/?cocktail&20' }
        ]
    }), []);

    useEffect(() => {
        setAnimatedItems([]);
        const timer = setTimeout(() => {
            setAnimatedItems(menuItems[activeCategory].map((_, index) => index));
        }, 100);
        return () => clearTimeout(timer);
    }, [activeCategory, menuItems]);

    return (
        <div className="menu-page">
            <div className="menu-hero">
                <div className="menu-hero-content">
                    <h1>Menümüz</h1>
                    <p>Özenle hazırlanmış lezzetli menümüzü keşfedin</p>
                </div>
            </div>

            <div className="container menu-container">
                <div className="menu-categories">
                    {menuCategories.map(category => (
                        <button
                            key={category.id}
                            className={`menu-category ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <i className={`fas ${category.icon}`}></i>
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="menu-grid">
                    {menuItems[activeCategory].map((item, index) => (
                        <div
                            key={index}
                            className={`menu-item ${animatedItems.includes(index) ? 'animate' : ''} ${item.popular ? 'popular' : ''}`}
                        >
                            <div className="menu-item-image">
                                <img src={item.image} alt={item.name} />
                                {item.popular && <span className="popular-tag">Popüler</span>}
                            </div>
                            <div className="menu-item-content">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <span className="price">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="special-offer">
                <div className="container">
                    <div className="special-offer-content">
                        <h2>Özel Fırsatlar</h2>
                        <p>Hafta içi 12:00-15:00 arası %15 indirim!</p>
                        <button className="btn-reservation">Rezervasyon Yap</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu; 