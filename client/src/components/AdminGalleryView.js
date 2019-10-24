import React from 'react';
import GalLargeImage from './GalLargeImage'
import GalSmallImage from './GalSmallImage'
import './styles/GalleryView.css';
import Axios from 'axios';

class GalleryView extends React.Component {

    state =  { images: [], }

   componentDidMount() {
        Axios.get(`/api/images`)
            .then( res => {
            this.setState({ images: res.data })
            })
            .catch( err => {
                console.log(err);
            })
    
        }
     


    render() {
        const { images } = this.state;

        return(
            <>
                <div className="header-container">
                    <div className="gallery-header">Gallery</div>
                    <div className="gallery-header-text">Lorem Ipsum is simply dummy text of the printing</div>
                </div>
                <div className="gallery-nav-container">
                    <a href="#All" className="a">ALL</a>
                    <a href="#Hotel&Ground" className="a">HOTEL & GROUND</a>
                    <a href="#Room/Suite" className="a">ROOM/SUITE</a>  
                    <a href="#Bathroom" className="a">BATHROOM</a>  
                    <a href="#Dining" className="a">DINING</a>  
                </div>
                <div className="content-container">
         
                        <GalSmallImage image={images[0]}/>
                        <GalLargeImage image={images[1]}/>
                        <GalSmallImage image={images[2]}/>
                        <GalLargeImage image={images[3]}/>
                        <GalLargeImage image={images[4]}/>
                        <GalSmallImage image={images[5]}/>
                        <GalLargeImage image={images[6]}/>
                        <GalSmallImage image={images[7]}/>
                        <GalSmallImage image={images[8]}/>
                        <GalSmallImage image={images[9]}/>
                        <GalLargeImage image={images[10]}/>
                        <GalLargeImage image={images[11]}/>
                        <GalLargeImage image={images[12]}/>
                        <GalSmallImage image={images[13]}/>
                        <GalLargeImage image={images[14]}/>
                        <GalSmallImage image={images[15]}/>
                </div>
            </>
        )
    };
};


export default GalleryView;


