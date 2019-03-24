import React from "react";
import styles from "./MapSection.css";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Secrets from "../../secrets";


class MapContainer extends React.Component {
    render() {
        return (
            <Map 
                google={this.props.google}
                zoom={14}
                initialCenter={{
                    lat: 12.959370,
                    lng: 77.661133
                }}
                >
                <Marker
                    title={'Our location'}
                    name={'Location'}
                    position={{ lat: 12.959370, lng: 77.661133 }}
                />
            </Map>
        );
    }
}

class MapSection extends React.Component {
    render() {
        const MapWrapper = GoogleApiWrapper({
            apiKey: Secrets.GOOGLE_MAPS_API_KEY
        })(MapContainer);

        return (
            <section className={styles.MapSection}>
                <MapWrapper />
            </section>
        );
    }
}

export default MapSection;