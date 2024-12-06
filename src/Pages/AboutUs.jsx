export const AboutUs = () => {
    return (
        <div
            className="about-us-container"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            <h2 style={{ marginBottom: '20px' }}>Sobre Nosotros</h2>
            <p style={{ marginBottom: '10px', maxWidth: '800px' }}>
                Bienvenidos a <strong>Serenidad</strong>, un espacio dedicado a transformar ambientes y emociones a través de los productos de la reconocida marca <strong>Aromanza</strong>. Desde nuestros inicios, nuestra pasión ha sido ofrecerte sahumerios, fragancias textiles y una amplia gama de productos aromáticos que inspiran serenidad y bienestar en cada momento de tu vida.
            </p>
            <p style={{ marginBottom: '10px', maxWidth: '800px' }}>
                En <strong>Serenidad</strong>, cada producto es cuidadosamente seleccionado para asegurarte calidad y autenticidad. Nuestro objetivo es que cada visita a nuestra tienda se convierta en una experiencia única, llena de aromas y sensaciones que te acompañen en tu día a día.
            </p>
            <p style={{ marginBottom: '10px', maxWidth: '800px' }}>
                Gracias por elegirnos como tu aliado en la creación de momentos inolvidables. ¡Déjate envolver por la magia de Aromanza y encuentra la serenidad que buscas!
            </p>
        </div>
    );
};
