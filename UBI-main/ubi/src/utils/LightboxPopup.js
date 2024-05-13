import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const LightboxPopup = ({ image, isOpen, setIsOpen }) => {

    // const [isOpen, setIsOpen] = useState(open);

    // const closeNow = () => {
    //     setIsOpen(false);
    // }

    return (
        <div>
            {isOpen &&
                <Lightbox
                    mainSrc={image}
                    // nextSrc={images[(photoIndex + 1) % images.length]}
                    // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                // onMovePrevRequest={() =>
                //     this.setState({
                //         photoIndex: (photoIndex + images.length - 1) % images.length,
                //     })
                // }
                // onMoveNextRequest={() =>
                //     this.setState({
                //         photoIndex: (photoIndex + 1) % images.length,
                //     })
                // }
                />
            }
        </div>
    );
}

LightboxPopup.propTypes = {};

LightboxPopup.defaultProps = {};

export default LightboxPopup;