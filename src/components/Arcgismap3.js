import React, { Component } from 'react';
import esriLoader from 'esri-loader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Arcgismap3 extends Component {
    constructor(props) {
        super(props);
        this.tileMapUrl =
          "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer";
          this.state={
            view3D:null
          }
      }
      componentDidMount() {
        this.initMap();
      }
      initMap() {
        // let view3D=null;
        const mapURL = {
          url: "https://js.arcgis.com/4.7/"
        };
        esriLoader.loadModules(
            [
              "esri/Map",
              "esri/views/MapView",
              "esri/views/SceneView",
              "dojo/domReady!"
            ], mapURL)
          .then(([Map, MapView, SceneView]) => {
          
            //实例化地图对象管理和覆盖2D和3D查看共有的图层的属性和方法。
            let map = new Map({
              //基础地图效果basemap:streets街道,satellite卫星视角(现用),streets-night-vector夜间效果
              basemap: 'satellite',
              // 指定地图的曲面属性。ground: "world-elevation"使用Terrain3D服务的默认地面实例。
              ground: "world-elevation"
            });

            
            //3D
            this.state.view3D = new SceneView({
              center: [120.2, 32.1],
              map: map,
              container: "mapDiv3D",
              zoom: 1
            });
          });
      }
      render() {
        let style = {
          width: "100%",
          height: "100%"
        };
        let style2 = {
            width: "100%",
            height: "100%",
        }
        return (
          <div id="GisServerMap" className="mapContent" style={style2}>
            <div id="mapDiv3D" style={style} />
            <div style={{clear: 'both'}} />
          </div>
        );
      }
      componentWillUpdate(nextProps,nextStates) {
        if (nextProps.newPost) {
          console.log('对应响应',nextProps)
          
          if(nextProps.newPost=='111'){
            this.state.view3D.goTo({
              center: [108.93,34.27],
              zoom: 11
            });
          }else{
            this.state.view3D.goTo({
              center: [18.93,14.27],
              zoom: 11
            });
          }
        }
      }
}




const mapStateToProps = state => ({
  newPost: state.posts.item
})

export default connect(mapStateToProps, { })(Arcgismap3);