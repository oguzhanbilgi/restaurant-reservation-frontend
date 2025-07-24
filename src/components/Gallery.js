import React, { useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = [
        { id: 'all', name: 'Tümü' },
        { id: 'interior', name: 'İç Mekan' },
        { id: 'food', name: 'Yemekler' },
        { id: 'events', name: 'Etkinlikler' },
        { id: 'view', name: 'Manzara' }
    ];

    const galleryImages = [
        {
            src: 'https://source.unsplash.com/random/800x800/?restaurant,interior&1',
            alt: 'Restoran İç Mekan',
            category: 'interior',
            description: 'Modern ve şık iç mekan tasarımı'
        },
        {
            src: 'https://source.unsplash.com/random/800x800/?turkish,food&2',
            alt: 'Özel Menü',
            category: 'food',
            description: 'Şefimizin özel menüsünden seçmeler'
        },
        {
            src: 'https://source.unsplash.com/random/800x800/?bosphorus,view&3',
            alt: 'Boğaz Manzarası',
            category: 'view',
            description: 'Eşsiz İstanbul Boğazı manzarası'
        },
        {
            src: 'https://source.unsplash.com/random/800x800/?wedding,event&4',
            alt: 'Özel Etkinlik',
            category: 'events',
            description: 'Unutulmaz anlar için özel etkinlikler'
        },
        {
            src: 'https://source.unsplash.com/random/800x800/?seafood,plate&5',
            alt: 'Deniz Ürünleri',
            category: 'food',
            description: 'Taze deniz ürünleri'
        },
        {
            src: 'https://source.unsplash.com/random/800x800/?vip,lounge&6',
            alt: 'VIP Salon',
            category: 'interior',
            description: 'Özel davetler için VIP salon'
        },
        {
            src: 'https://source.unsplash.com/random/800x800/?sunset,restaurant&7',
            alt: 'Gün Batımı',
            category: 'view',
            description: 'Büyüleyici gün batımı manzarası'
        },
        {
            src: 'https://source.unsplash.com/random/800x800/?wedding,reception&8',
            alt: 'Düğün Organizasyonu',
            category: 'events',
            description: 'Özel gününüz için kusursuz organizasyon'
        },
        {
            src: 'https://source.unsplash.com/random/800x800/?dessert,plate&9',
            alt: 'Tatlılar',
            category: 'food',
            description: 'El yapımı özel tatlılar'
        }
    ];

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <div className="gallery-page">
            <div className="gallery-hero">
                <div className="gallery-hero-content">
                    <h1>Galeri</h1>
                    <p>Boğaz'ın eşsiz manzarası eşliğinde unutulmaz anlar</p>
                </div>
            </div>

            <div className="container gallery-container">
                <div className="gallery-categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`gallery-category ${selectedCategory === category.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredImages.map((image, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image.src} alt={image.alt} />
                            <div className="gallery-item-overlay">
                                <div className="gallery-item-info">
                                    <h3>{image.alt}</h3>
                                    <p>{image.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
                    <div className="gallery-modal-content">
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <div className="gallery-modal-info">
                            <h3>{selectedImage.alt}</h3>
                            <p>{selectedImage.description}</p>
                        </div>
                        <button className="gallery-modal-close" onClick={() => setSelectedImage(null)}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery; 