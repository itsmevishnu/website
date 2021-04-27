import React from 'react';
import {Map, View} from 'ol';
import * as ol from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import OLTileLayer from "ol/layer/Tile";
import 'ol/ol.css';
class MyMap extends React.Component {
    componentDidMount() {
        var map = new Map({
            target: this.refs.mapContainer,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [19.135350, 72.912580],
                zoom: 7
            })
        })
    }
    render() {
        return (
            <div ref="mapContainer" className="map" id="map">
            
            </div>
            )
        }
    }
    
    export default MyMap;