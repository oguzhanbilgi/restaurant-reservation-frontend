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
            { name: 'Serpme Kahvaltı', description: 'Zengin çeşitlerle hazırlanmış geleneksel kahvaltı tabağı', price: '350₺', image: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
            { name: 'Simit Tabağı', description: 'Taze simit, beyaz peynir, domates, salatalık', price: '85₺', image: 'https://images.unsplash.com/photo-1583959837873-a077b05b3ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { name: 'Menemen', description: 'Taze domatesli klasik menemen, yanında simit', price: '95₺', image: 'https://images.unsplash.com/photo-1635321593200-5cfa4f767554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { name: 'Omlet', description: 'Seçtiğiniz malzemelerle hazırlanan özel omlet', price: '85₺', image: 'https://images.unsplash.com/photo-1612487439139-c2962324385d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
        ],
        anaYemek: [
            { name: 'Izgara Levrek', description: 'Mevsim sebzeleri ile servis edilir', price: '220₺', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
            { name: 'Kuzu Tandır', description: 'Özel baharatlarla marine edilmiş kuzu tandır', price: '280₺', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { name: 'Köfte', description: 'El yapımı köfte, patates kızartması ile', price: '180₺', image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { name: 'Karışık Izgara', description: 'Kuzu pirzola, köfte, tavuk şiş', price: '320₺', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true }
        ],
        tatlilar: [
            { name: 'Künefe', description: 'Antep fıstıklı özel künefe', price: '120₺', image: 'https://images.unsplash.com/photo-1576612119302-5c8a6e35c3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
            { name: 'Katmer', description: 'Geleneksel Gaziantep katmeri', price: '100₺', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { name: 'Baklava', description: 'Fıstıklı ev yapımı baklava', price: '140₺', image: 'https://images.unsplash.com/photo-1583582101524-0b003ef24c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { name: 'Sütlaç', description: 'Fırında geleneksel sütlaç', price: '75₺', image: 'https://images.unsplash.com/photo-1585937067130-51cc02d05fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
        ],
        sushi: [
            { name: 'Somon Roll', description: 'Taze somon, avokado ve salatalık', price: '180₺', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
            { name: 'Tempura Roll', description: 'Tempura karides ve sebzeler', price: '160₺', image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { name: 'Dragon Roll', description: 'Yılan balığı, avokado ve susam', price: '220₺', image: 'https://images.unsplash.com/photo-1617196034454-1a5c0eb66605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { name: 'Rainbow Roll', description: 'Çeşitli balıklar ve avokado', price: '200₺', image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
        ],
        icecekler: [
            { name: 'Türk Kahvesi', description: 'Geleneksel Türk kahvesi', price: '30₺', image: 'https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { name: 'Taze Meyve Suyu', description: 'Mevsim meyvelerinden', price: '45₺', image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { name: 'Şarap', description: 'Özel seçim şaraplar', price: '180₺', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
            { name: 'Kokteyl', description: 'Barmenimizin özel kokteylleri', price: '120₺', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
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
                                <img src={item.image} alt={item.name} loading="lazy" />
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