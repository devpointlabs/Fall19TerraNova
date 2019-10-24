import React from 'react';
import './styles/GalleryView.css';

class GalleryView extends React.Component {
    state = {
        _isMounted: false,
        tab: "all",
        all: [
            "image2", "image3", "image5", "image16", "image7", "image8",
            "image9", "image17", "image10", "image11", "image2", "image18",
            "image13", "image14", "image15", "image19", "image20", "image21",
            "image22", "image23", "image24", "image25", "image26", "image27"
        ],
        hotel: ["image2", "image3", "image5", "image16", "image20", "image21"],
        room: ["image7", "image8", "image9", "image17", "image22", "image23"],
        bathroom: ["image10", "image11", "image2", "image18", "image24", "image25"],
        dining: ["image13", "image14", "image15", "image19", "image26", "image27"],
        active: []
    }

    componentDidMount() {
        // var all = [];
        // for (var i=0; i<this.state.hotel.length; i++) {
        //     all.push(this.state.hotel[i])
        // }
        // for (var i=0; i<this.state.room.length; i++) {
        //     all.push(this.state.room[i])
        // }
        // for (var i=0; i<this.state.bathroom.length; i++) {
        //     all.push(this.state.bathroom[i])
        // }
        // for (var i=0; i<this.state.dining.length; i++) {
        //     all.push(this.state.dining[i])
        // }
        // this.setState({ _isMounted: true, all, active: all })
        this.setState({ _isMounted: true, active: this.state.all });
    }

    changeTab = (tab) => {
        this.setState({ tab });
        switch(tab) {
            case "all":
                this.setState({ active: this.state.all });
                break;
            case "hotel":
                this.setState({ active: this.state.hotel });
                break;
            case "room":
                this.setState({ active: this.state.room });
                break;
            case "bathroom":
                this.setState({ active: this.state.bathroom });
                break;
            case "dining":
                this.setState({ active: this.state.dining });
                break;
            default:
                this.setState({ active: this.state.all });
                break;
        }
    }

    render() {
        return(
            this.state._isMounted &&
            <>
                <div className="header-container">
                <div className="gallery-header">Gallery</div>
                <div className="gallery-header-text">Lorem Ipsum is simply dummy text of the printing</div>
                </div>
                <div className="gallery-nav-container">
                    <a style={{cursor: "pointer"}} onClick={() => this.changeTab("all")} className="a">ALL</a>
                    <a style={{cursor: "pointer"}} onClick={() => this.changeTab("hotel")}  className="a" >HOTEL & GROUND</a>
                    <a style={{cursor: "pointer"}} onClick={() => this.changeTab("room")}  className="a">ROOM/SUITE</a>  
                    <a style={{cursor: "pointer"}} onClick={() => this.changeTab("bathroom")}  className="a">BATHROOM</a>  
                    <a style={{cursor: "pointer"}} onClick={() => this.changeTab("dining")}  className="a">DINING</a>  
                </div>
                    { this.state.active !== this.state.all ?
                        <div className="content-container-small">
                            <div className="small-img-column">
                                <div className="small-img-column-img1">
                                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[0]}.jpg`)} style={{maxWidth: "100%" }}/>
                                </div>
                                <div className="small-img-column-img2">
                                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[4]}.jpg`)} style={{maxWidth: "100%" }}/>
                                </div>
                            </div>
                            <div className="large-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[1]}.jpg`)} style={{width: "100%" }}/>
                            </div>
                            <div className="small-img-column">
                                <div className="small-img-column-img1">
                                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[2]}.jpg`)} style={{maxWidth: "100%" }}/>
                                </div>
                                <div className="small-img-column-img2">
                                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[5]}.jpg`)} style={{maxWidth: "100%" }}/>
                                </div>
                            </div>
                            <div className="large-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[3]}.jpg`)} style={{width: "100%" }}/>
                            </div> 
                        </div>
                        :
                        <div className="content-container-large">
                            <div className="small-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[0]}.jpg`)} style={{maxWidth: "100%" }}/>
                            </div>
                            <div className="large-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[1]}.jpg`)} style={{width: "100%" }}/>
                            </div>
                            <div className="small-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[2]}.jpg`)} style={{maxWidth: "100%" }}/>
                            </div>
                            <div className="large-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[3]}.jpg`)} style={{width: "100%" }}/>
                            </div> 
                            <div className="small-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[16]}.jpg`)} style={{width: "100%" }}/>
                            </div> 
                            <div className="small-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[17]}.jpg`)} style={{width: "100%" }}/>
                            </div> 
                <div className="large-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[8]}.jpg`)} style={{maxWidth: "100%" }}/>
                </div>
                <div className="small-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[9]}.jpg`)} style={{maxWidth: "100%" }}/>
                </div>
                <div className="small-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[23]}.jpg`)} style={{maxWidth: "100%" }}/>
                            </div>
                <div className="large-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[14]}.jpg`)} style={{maxWidth: "100%" }}/>
                </div>
                <div className="small-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[7]}.jpg`)}style={{maxWidth: "100%" }}/>
                </div>
                <div className="small-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[18]}.jpg`)} style={{width: "100%" }}/>
                            </div> 
                            <div className="small-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[19]}.jpg`)} style={{width: "100%" }}/>
                            </div> 
                <div className="small-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[4]}.jpg`)} style={{maxWidth: "100%" }}/>
                </div>
                <div className="large-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[5]}.jpg`)} style={{maxWidth: "100%" }}/>
                </div>
                <div className="large-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[10]}.jpg`)} style={{maxWidth: "100%" }}/>
                </div>
                <div className="small-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[11]}.jpg`)} style={{maxWidth: "100%"}}/>
                </div>
                <div className="small-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[20]}.jpg`)} style={{width: "100%" }}/>
                            </div> 
                            <div className="small-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[21]}.jpg`)} style={{width: "100%" }}/>
                            </div> 
                <div className="large-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[12]}.jpg`)} style={{maxWidth: "100%" }}/>
                </div>
                <div className="small-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[13]}.jpg`)} style={{maxWidth: "100%" }}/>
                </div>
                <div className="small-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[6]}.jpg`)} style={{maxWidth: "100%" }}/>
                </div>
                <div className="large-img-container">
                    <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[15]}.jpg`)} style={{maxWidth: "100%" }}/>
                </div>
                <div className="small-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[22]}.jpg`)} style={{width: "100%" }}/>
                            </div> 
                            <div className="small-img-container">
                                <img alt="views" src={require(`../images/galleryviewimages/${this.state.active[23]}.jpg`)} style={{width: "100%" }}/>
                            </div> 
                </div>
                }
            </>
        );
    };
};

export default GalleryView;