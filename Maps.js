import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude: -8.11376,
          longitude: 115.077476
        },
        title: 'Pegadaian. PT Persero',
        subtitle: 'JL. Jenderal Ahmad Yani, No. 42, Banyuasri, Buleleng, Banyuasri, Singaraja, Kabupaten Buleleng, Bali 81119'
      },
      {
        key:2,
        latlng: {
          latitude: -8.11329,
          longitude: 115.101509
        },
        title: 'Pegadaian UPC Banyuning',
        subtitle: 'Jl. Gempol No.146, Banyuning, Kec. Buleleng, Kabupaten Buleleng, Bali 81151'
      },
      {
        key:3,
        latlng: {
          latitude: -8.112959,
          longitude: 115.080738
        },
        title: 'Pegadaian UPC Banyu Asri',
        subtitle: 'Jl. A. Yani, Banyuasri, Kec. Buleleng, Kabupaten Buleleng, Bali 81116'
      }
      ,
      {
        key:4,
        latlng: {
          latitude: -8.109475,
          longitude: 115.087991
        },
        title: 'Pegadaian',
        subtitle: 'Jl. A. Yani No.42, Kaliuntu, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key:5,
        latlng: {
          latitude:-8.117176,
          longitude: 115.082240
        },
        title: 'Pegadaian Singaraja',
        subtitle: 'Jl. Jend. A. Yani No.42, Banyuasri, Buleleng Sub-District, Buleleng Regency, Bali 81116'
      },
      {
        key:6,
        latlng: {
          latitude:-8.656985,
          longitude: 115.210010
        },
        title: 'Pegadaian Denpasar',
        subtitle: 'Jl. Thamrin No.39, Pemecutan, Denpasar Barat, Pemecutan, Denpasar Bar., Kota Denpasar, Bali 80119'
      },
      {
        key:7,
        latlng: {
          latitude:-8.656985,
          longitude: 115.210010
        },
        title: 'Pegadaian Denpasar',
        subtitle: 'Jl. Thamrin No.39, Pemecutan, Denpasar Barat, Pemecutan, Denpasar Bar., Kota Denpasar, Bali 80119'
      },
      {
        key:8,
        latlng: {
          latitude: -8.674125,
          longitude: 115.206963
        },
        title: 'Pegadaian UPC Teuku Umar',
        subtitle: 'Jl. Nusa Kambangan No.214, Dauh Puri Kauh, Denpasar Bar., Kota Denpasar, Bali 80113'
      },
      {
        key:9,
        latlng: {
          latitude:-8.524824,
          longitude: 115.105612
        },
        title: 'Pegadaian UPC Kerambitan',
        subtitle: 'Jl. Raya Kerambitan, (Sebelah Barat Pasar Kerambitan), Samsam, Tabanan Sub-District, Tabanan Regency, Bali 80161'
      },
      {
        key:10,
        latlng: {
          latitude:-8.524824,
          longitude: 115.105612
        },
        title: 'Pegadaian UPC Kerambitan',
        subtitle: 'Jl. Raya Kerambitan, (Sebelah Barat Pasar Kerambitan), Samsam, Tabanan Sub-District, Tabanan Regency, Bali 80161'
      },
      {
        key:11,
        latlng: {
          latitude:-8.524824,
          longitude: 115.105612
        },
        title: 'Pegadaian UPC Kerambitan',
        subtitle: 'Jl. Raya Kerambitan, (Sebelah Barat Pasar Kerambitan), Samsam, Tabanan Sub-District, Tabanan Regency, Bali 80161'
      },
      {
        key:12,
        latlng: {
          latitude:-8.536532,
          longitude: 115.119356
        },
        title: 'Pegadaian Tabanan Dauh Peken',
        subtitle: 'Jl. P. Seribu No.18, Dauh Peken, Kec. Tabanan, Kabupaten Tabanan, Bali 82111'
      },
      {
        key:13,
        latlng: {
          latitude:-8.169250,
          longitude: 114.435483
        },
        title: 'Pegadaian Gilimanuk',
        subtitle: 'Jl. Raya Denpasar - Gilimanuk, Gilimanuk, Melaya, Kabupaten Jembrana, Bali'
      },
      {
        key:14,
        latlng: {
          latitude:-8.443284,
          longitude: 115.617153
        },
        title: 'Pegadaian UPC Pasar Amlapura',
        subtitle: 'Jl. Kesatrian, Karangasem, Kec. Karangasem, Kabupaten Karangasem, Bali 80811'
      },
      {
        key:15,
        latlng: {
          latitude:-8.511914,
          longitude: 115.274663
        },
        title: 'Pegadaian Ubud',
        subtitle: 'Jl. Cokorde Rai No.5, Peliatan Ubud, Peliatan, Gianyar, Bali 80571'
      },


   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Center Pegadaian di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> PegadaianWidiartana@Copyright </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#49ED4D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#49ED4D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
