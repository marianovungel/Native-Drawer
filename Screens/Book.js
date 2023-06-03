import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
    
    export default function Book() {
      return (
        <View style={styles.container}>
            {/* <View style={styles.viewHeader} >
                <View style={styles.header}>
                    <View style={styles.drawer}>
                        <Feather name="menu" size={30} color="black" />
                    </View>
                    <View style={styles.imgHeader}>
                        <Image 
                            style={styles.imgHeaderCont}
                            source={{uri: 'https://www.hypeness.com.br/1/2017/07/Nyakim13.jpg'}}
                        />
                    </View>
                </View>
            </View> */}
            <View style={styles.viewHeaderCAt}>
                <View style={styles.TextContentCAt}>
                    <Image 
                        style={styles.imgbody}
                        source={{uri:'https://cdnm.westwing.com.br/glossary/uploads/br/2015/07/15022409/sala-de-estar-com-decora%C3%A7%C3%A3o-na-cor-branca_pexels_c-a3735.jpg'}}
                    />
                </View>
            </View>
            <View style={styles.viewHeaderCAt}>
                <View style={styles.TextContentCAtflex}>
                    <Text style={styles.bhk}>4 BHK</Text>
                    <Text style={styles.nove}>9000 R$ / Month</Text>
                </View>
            </View>
            <View style={styles.viewHeaderCAt}>
                <View style={styles.TextContentCAt}>
                    <Text style={styles.TextContentCAtP}>
                        Não há quem não queira decorar a sua sala
                        de estar para deixá-la bela,
                        aconchegante e até mesmo requintada e luxuosa.
                    </Text>
                </View>
            </View>
            <View style={styles.viewHeaderCAt}>
                <View style={styles.TextContentCAt}>
                    <View style={styles.aling}>
                        <FontAwesome name="map-marker" size={24} color="black" />
                        <Text style={styles.Cat}>More Proprieties</Text>
                    </View>
                </View>
            </View>
            <ScrollView
                style={styles.scroll}
                horizontal={true} showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity  style={styles.containerCard}>
                    <Feather name="home" size={24} color="#fff" />
                    <Text style={styles.textCard}>4 BHK</Text>
                </TouchableOpacity >
                <TouchableOpacity  style={styles.containerCardwhite}>
                    <Feather name="home" size={24} color="#000" />
                    <Text style={styles.tectCardColor}>4 BHK</Text>
                </TouchableOpacity >
                <TouchableOpacity  style={styles.containerCardwhite}>
                    <Feather name="home" size={24} color="#000" />
                    <Text style={styles.tectCardColor}>4 BHK</Text>
                </TouchableOpacity >
                <TouchableOpacity  style={styles.containerCardwhite}>
                    <Feather name="home" size={24} color="#000" />
                    <Text style={styles.tectCardColor}>4 BHK</Text>
                </TouchableOpacity >
                <TouchableOpacity  style={styles.containerCardwhite}>
                    <Feather name="home" size={24} color="#000" />
                    <Text style={styles.tectCardColor}>4 BHK</Text>
                </TouchableOpacity >
            </ScrollView>
            <View style={styles.viewHeaderCAtBottom}>
                <View style={styles.TextContentCAt}>
                    <Image 
                        style={styles.imgbody}
                        source={{uri:'https://img.freepik.com/fotos-premium/moderna-sala-de-jantar-e-sala-de-estar-com-decoracao-de-luxo_105762-1646.jpg'}}
                    />
                </View>
            </View>
            <View style={styles.viewHeaderCAtBottom}>
                <View style={styles.TextContentCAt}>
                    <TouchableOpacity style={styles.BookBottom}>
                        <Text style={styles.BookText}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
      )
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          width: '100%',
          backgroundColor: '#dddddd66',
        },
        viewHeader: {
            width: '100%',
            height: 80,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        viewHeaderCAt:{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
        viewHeaderCAtBottom:{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -10
        },
        viewHeaderAvai:{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -15
        },
        header:{
            width: '90%',
            height: 80,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        drawer:{
            width: '40%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        NameHeader:{
            fontWeight: 500
        },
        imgHeader:{
            width: '40%',
            height: 80,
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'flex-end',
            alignItems: 'center'
        },
        imgHeaderCont:{
            width: 35,
            height: 35,
            borderRadius: 50
        },
        TextContent:{
            width: '90%',
            height: 80,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        TextContentCAt:{
            width: '90%',
            marginBottom:10,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        TextContentCAtflex:{
            width: '90%',
            marginBottom:10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        TextOne:{
            fontWeight: 700,
            fontSize: 26,
            color: '#080808'
        },
        Cat:{
            fontSize: 20,
            fontWeight: 500,
            color: '#666'
        },
        containerCard:{
            width:150,
            height: 50,
            borderRadius: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#969',
            alignItems: 'center',
            marginRight: 20,
            borderWidth: 0.1,
        },
        containerCardwhite:{
            width:150,
            height: 50,
            borderRadius: 9,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderColor: '#666',
            borderWidth: 0.1,
            alignItems: 'center',
            marginRight: 20,
            shadowColor: '#666',
        },
        textCard:{
            color: '#fff',
            fontSize:20
        },
        scroll:{
            marginLeft: 20,
            maxHeight: 50,
            width:'100%',
            paddingEnd: 14,
            marginBottom: 30
        },
        tectCardColor:{
            color: '#000',
            fontSize: 20,
            fontWeight: 500
        },
        whiteDivCardWidth:{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        whiteDivCard:{
            width: '90%',
            height: 400,
            padding: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#ffffffca',
            borderRadius: 20
        },
        DivImg:{
            width:'100%',
            height: 200,
            borderRadius: 10,
            backgroundColor: '#d97a'
        },
        imgStyle:{
            width: '100%',
            height: 200,
            borderRadius: 10,
        },
        textCardImg:{
            width: '100%',
            height: 200,
            alignItems: 'flex-start',
            justifyContent: 'center'
        },
        Hcard:{
            fontSize: 22,
            fontWeight: 700
        },
        Pcard:{
            fontWeight: 400
        },
        wTexts:{
            marginTop: 10,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        firstText:{
            fontWeight: 500,
            fontSize: 17
        },
        imgbody:{
            width: '100%',
            height: 200,
            borderRadius: 20
        },
        bhk:{
            fontSize: 18,
            fontWeight: 600
        },
        nove:{
            fontSize: 15,
            fontWeight: 400
        },
        TextContentCAtP:{
            fontWeight:500
        },
        aling:{
            flexDirection:'row',
            alignItems: 'center'
        },
        BookBottom:{
            width:'100%',
            height:50,
            flexDirection:'row',
            alignItems:'center',
            justifyContent: 'center',
            backgroundColor: '#969',
            marginTop: 20,
            borderRadius: 10
        },
        BookText:{
            fontSize: 18,
            fontWeight: 600,
            color: '#fff'
        }
      });