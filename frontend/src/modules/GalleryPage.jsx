import hawaii from '../assets/hawaii-trip-oahu-portrait.jpeg';
import pinear from '../assets/internship-website-screenshot-landing-page.png';
import portfolio from '../assets/personal-portfolio-introduction-landing-page.png';
import chess from '../assets/python-atomic-chess-final-project-screenshot.png';

function GalleryPage() {
    const images = [hawaii, pinear, portfolio, chess];
    
    return (
        <>
            <h2>Gallery</h2>
            <article className="gallery">
                {images.map((image, index) => (
                    <figure key={index}>
                        <img src={image} alt="" title="" />
                    </figure>
                ))}
            </article>
        </>
    );
}

export default GalleryPage;
