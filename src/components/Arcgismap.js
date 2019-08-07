import React, { Component } from 'react'
import esriLoader from 'esri-loader'

export default class Arcgismap extends Component {
    constructor(props){
        super(props)
        this.tileMapUrl = "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer"
    }
    componentDidMount(){
        this.initMap()
    }
    initMap(){
        const mapURL = {
            url : "https://js.arcgis.com/3.25/"
        }
        esriLoader.loadModules([
          "esri/map", 
          "esri/SpatialReference", 
          "esri/layers/ArcGISTiledMapServiceLayer",
          "esri/geometry/Extent",
          "dojo/domReady!"
        ], mapURL).then(([Map,SpatialReference,ArcGISTiledMapServiceLayer,Extent])=>{
              let  extent = new Extent(95.56, 36.28, 125.65, 45.33, new SpatialReference({ wkid: 4326 }))
              //定义地图
              let map = new Map('mapDiv', {
                  logo: false,
                  slider: false,
                  showLabels: true,
                  extent: extent,
                  zoom: 4
              })
              let tiledLayer = new ArcGISTiledMapServiceLayer(this.tileMapUrl, {
                  id: 'baseMap'
              })
              map.addLayer(tiledLayer);
        })
    }
    render(){
        let style = {
            width: '900px',
            height: '600px'
        }
        return(
            <div>
                <div id="mapDiv" style = {style}></div>
            </div>
        )
    }
}
