import React, { Component } from 'react';
import { CSVLink } from 'react-csv';

import data from '../../data/Data';

import './MapComposant.css';

let csvData = [];


class MapComposant extends Component {

    state = {
        magasins: [],
      }

    componentDidMount () {
        this.getMagasins()
        console.log(data.magasins);
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBUSG4eTrMfMJsiwD0QWURy-FLuHxfw-K8&callback=initMap")
        window.initMap = this.initMap
    }

    getMagasins = () => {
        //Obtenir les informations sur les magasins du dossier Data
       this.setState({
           magasins : data.magasins
       },
       this.renderMap())
    }

    initMap = () => {
        //Initialisation de la Map
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 48.8657844, lng: 2.307314099999985},
            zoom: 10
          })
      
          // Creation de l'info Window
          let infowindow = new window.google.maps.InfoWindow()
      
          // Création dynamique des Markers
          this.state.magasins.map(magasin => {
      
            let contentString = `${magasin.adress} - ${magasin.cp} ${magasin.city}`
      
            // Creation du Marker
            let marker = new window.google.maps.Marker({
              position: {lat: magasin.latitude , lng: magasin.longitude},
              map: map,
              adress: magasin.adress,
              cp : magasin.cp,
              city: magasin.city
            })
      
            
            // Click sur le Marker pour obtenir l'adresse du magasin
            marker.addListener('click', function() {
                
            // Stocker les magasins après le click
                // console.log("click detecté ", this.adress, this.cp, this.city)
                csvData.push(
                    {adress : this.adress, cp : this.cp, city : this.city }
                    )
                console.log(csvData)
             
               
            // Informations sur le magasin
              infowindow.setContent(contentString)
      
            // Ouverture de la fenêtre info du Marker
              infowindow.open(map, marker)

            })
        })
    }

    handleClick = () => {
        console.log(csvData)
    }


  render() {
      
    return (

        <div>

            <div id="map"></div>

            <div className="text-center button">

                <p>Cliquez sur le marker d'un magasin pour le rajouter à votre sélection. Téléchargez ensuite les informations désirées</p>
                <CSVLink data={csvData} onClick={this.handleClick} className="link">Download</CSVLink> 

            </div>

        </div>    
        
    );

  }
  
}



function loadScript(url) {
    let index = window.document.getElementsByTagName("script")[0]
    let script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}



export default MapComposant;