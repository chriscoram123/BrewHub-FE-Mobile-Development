import { StyleSheet, Text, View, Image, Animated, ImageBackground, Button, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { SvgUri } from 'react-native-svg';

export default function LiquoresPage({ navigation: { navigate } }) {
    
    // UseState for hamburger menu
    const [isOpen, setOpen] = useState(false)

    return (
        <View>
            <View style={styles.headerCon}>
                {/* logo header container */}
                <View style={styles.logoImgCon}> 
                    <Image 
                        source={require('../../assets/logo.png')}
                        style={styles.logoImage}
                        // resizeMode='center'
                    />
                </View>
                
                {/* Hamburger Menu Icon */}
                <View style={styles.menuImgCon}> 
                    <Image 
                        source={require('../../assets/icon.png')}
                        style={styles.menuImage}
                        resizeMode='center'
                    />
                </View>
            </View>



            <View style={styles.scrollViewCon}>
                <ScrollView horizontal={true}>
                    
                    <View style={styles.iconCon}>

                        {/* Card One */}
                        <View style={styles.cardConOne}>
                            <Image 
                                source={require('../../assets/beer_icon.png')}
                                style={styles.iconImage}
                                // resizeMode='center'
                            />
                        </View>

                        {/* Card Two */}
                        <View style={styles.cardConTwo}>
                            {/* <Image 
                                source={require('../../assets/icon.png')}
                                style={styles.iconImage}
                                resizeMode='center'
                            /> */}
                        </View>
                    </View>
                    
                </ScrollView>
            </View>

            
            {/* Article Containers */}
            <SafeAreaView style={styles.container}>
            <View style={styles.articleViewCon}>
                <ScrollView vertical={true}>

                    <View style={styles.articleConOne}>
                        <ImageBackground  style={styles.imageBackground} source={require('../../assets/drinks-2578446_1920.jpg')}>
                            
                            {/* Article Container */}
                            <View style={styles.articleTextCon}>
                                {/* Article Header */}
                                <View style={styles.articleHeaderCon}>
                                    {/* Profile Icon */}
                                    <View style={styles.articleProfileCon}>
                                        {/* <SvgUri
                                            width="100%"
                                            height="100%"
                                            source={require('../../assets/profile_icon.svg')}
                                        /> */}
                                        <Image 
                                            source={require('../../assets/pexels-jeandaniel-francoeur-1182238 1.png')}
                                            style={styles.iconImage}
                                            resizeMode='center'
                                        />
                                    </View>
                                    {/* Article Info */}
                                    <View style={styles.articleInfoCon}>
                                        <Text> John Doe </Text>
                                        <Text> 05/03/2022 </Text>
                                    </View>
                                </View>

                                {/* Article Header */}
                                <View style={styles.articleTitleCon}>
                                    <Text style={styles.articleText}>“The Best Recipes For The Best Drinking Experiences”</Text>
                                </View>

                                {/* Article Paragraph */}
                                <View style={styles.articleParagraphCon}>
                                    <Text>Drinking with friends can be an enjoyable experience. But why not take it up a notch and add some flare to the fun! Below you’ll find enjoyable recipes, simple and easy, that the whole party will crave!  </Text>
                                </View>

                                {/* Article Paragraph */}
                                <View style={styles.articleReviewCon}>
                                    <Text>One recipe that is absolutely amazing with a couple of shots of Don Julio </Text>
                                </View>

                                <ScrollView horizontal={true}>
                                    <View style={styles.articleHashTagsCon}>
                                        <Text>#NewRecipes  #Events  #Party  #HappyHour </Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </ImageBackground>
                    </View>


                    <View style={styles.articleConOne}>
                    <ImageBackground  style={styles.imageBackground} source={require('../../assets/wines-1761613_1920.jpg')}>
                            
                            {/* Article Container */}
                            <View style={styles.articleTextCon}>
                                {/* Article Header */}
                                <View style={styles.articleHeaderCon}>
                                    {/* Profile Icon */}
                                    <View style={styles.articleProfileCon}>
                                        <Image 
                                            source={require('../../assets/icon.png')}
                                            style={styles.profileImage}
                                            resizeMode='center'
                                        />
                                    </View>
                                    {/* Article Info */}
                                    <View style={styles.articleInfoCon}>
                                        <Text> John Doe </Text>
                                        <Text> 05/03/2022 </Text>
                                    </View>
                                </View>

                                {/* Article Header */}
                                <View style={styles.articleTitleCon}>
                                    <Text style={styles.articleText}>“The Best Recipes For The Best Drinking Experiences”</Text>
                                </View>

                                {/* Article Paragraph */}
                                <View style={styles.articleParagraphCon}>
                                    <Text>Drinking with friends can be an enjoyable experience. But why not take it up a notch and add some flare to the fun! Below you’ll find enjoyable recipes, simple and easy, that the whole party will crave!  </Text>
                                </View>

                                {/* Article Paragraph */}
                                <View style={styles.articleReviewCon}>
                                    <Text>One recipe that is absolutely amazing with a couple of shots of Don Julio </Text>
                                </View>

                                <ScrollView horizontal={true}>
                                    <View style={styles.articleHashTagsCon}>
                                        <Text>#NewRecipes  #Events  #Party  #HappyHour </Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={styles.scrollViewFooter} />
                </ScrollView>
            </View>
            </SafeAreaView>

            <View style={styles.buttonCon}>
                <Button title="BaseLiquores" color='black' onPress={() => navigate('BaseLiquores')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerCon: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "blue",
        marginVertical: 10,
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    container: {
        // flex: 1,
    },
    buttonCon: {
        marginVertical: 100,
        backgroundColor: "red",
    },
    scrollViewCon: {
        // backgroundColor: "purple",
        paddingVertical: "5%",
    },
    articleViewCon: {
        maxHeight: "90%",
    },
    iconCon: {
        paddingHorizontal: "5%",
        backgroundColor: "green",
        marginLeft: "10%",
    },
    cardConOne: {
        maxHeight: "100%",
        // maxWidth: 50,
        paddingHorizontal: 40,
        // justifyContent: "center",
        // flex: 1,
    },
    iconImage: {
        maxWidth: 100,
    },
    logoImage: {
        maxHeight: 40,
        maxWidth: "100%",
    },
    logoImgCon: {
        // flexDirection: "row",
        // flex:1,
        maxHeight: 20,
        marginBottom: 10,
    },
    profileImage: {
        maxHeight: 40,
        maxWidth: 40,
    },
    menuImage: {
        maxHeight: 30,
        maxWidth: 50,
    },
    menuImgCon: {
        maxHeight: 20,
        marginBottom: 10,
    },

    imageBackground: {
        marginVertical: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    scrollViewFooter: {
        backgroundColor: "red",
        marginVertical: "50%",
    },






    articleConOne: {
        marginHorizontal: 20,
    },
    articleProfileCon: {
        maxHeight: 100,
        // backgroundColor: "red",
    },
    articleInfoCon: {
        // backgroundColor: "blue",
    },
    articleText: {
        justifyContent: "center",
        flexDirection: "row",
    },
    articleTextTwo: {
        justifyContent: "center",
        flexDirection: "row",
    },
    // articleConOne: {
    //     backgroundColor: "blue",
    //     // justifyContent: "center",
    //     marginVertical: 100,
    //     marginHorizontal: 30,
    // },
    // articleImgCon: {
    //     backgroundColor: "red",
    //     paddingVertical: 10,
    //     marginVertical: 100,
    //     justifyContent: "center",
    //     flexDirection: "row",
    // },
    // articleImage: {
    //     maxHeight: 100,
    //     maxWidth: 100,
    // },
    articleTextCon: {
        backgroundColor: "white",
        borderRadius: "#331A25",
        borderWidth: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingVertical: 30,
        marginTop: "50%",
        justifyContent: "space-evenly",
        flexDirection: "column",
    },
    articleHeaderCon: {
        // backgroundColor: "green",
        flex: 1,
        marginRight: 100,
        marginLeft: 20,
        // paddingHorizontal: 10,
        // justifyContent: "space-evenly",
        flexDirection: "row",
        maxHeight: 40,
    },
    articleTitleCon: {
        // backgroundColor: "blue",
        marginVertical: 20,
        marginHorizontal: 20,
        // display: "flex",
        justifyContent: "center",
        // flexDirection: "column",
    },
    articleParagraphCon: {
        // backgroundColor: "purple",
        marginVertical: 5,
        marginHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    },
    articleReviewCon: {
        // backgroundColor: "pink",
        marginVertical: 20,
        marginHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    },
    articleHashTagsCon: {
        // backgroundColor: "yellow",
        marginVertical: 10,
        marginHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    },
}); 