import {StyleSheet} from 'react-native';

const common = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF'
    },
    containerHPadded: {
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF'
    },
    containerTPadded: {
        paddingTop: 26,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF'
    },
    containerHTPadded: {
        paddingTop: 26,
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF'
    },
    containerTopPaddedCentered: {
        paddingTop: 26,
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textGrayed: {
        fontSize: 18,
        color: '#AAAAAA'
    },
    listContainer: {
        borderTopWidth: 0.5,
        borderTopColor: '#C7C8CC',
        borderBottomWidth: 0.5,
        borderBottomColor: '#C7C8CC'
    },
    signInForm: {
        marginTop: 40,
        alignItems: 'center',
        width: '100%',
    },
    statusBar: {
        height: 20,
        backgroundColor: '#3F3F3C'
    }
};

const signIn = {
    container: {
        ...common.containerHPadded,
        paddingTop: 50,
        justifyContent: 'flex-start',
    },
    logoImage: {
        resizeMode: 'contain'
    },
    logoText: {
        marginVertical: 20,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    },
    button: {
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6BE56'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500'
    },
    textInput: {
        height: 40,
        borderBottomWidth: 0.5,
        borderBottomColor: '#AAAAAA'
    },
    errorMessage: {
        marginTop: 20,
        textAlign: 'center',
        color: 'red'
    },
    signUpButton: {
        backgroundColor: 'transparent',
        marginTop: 10
    },
    signUpButtonText: {
        fontSize: 16,
        color: '#3E7BEE',
        textAlign: 'center'
    }
};

const listItem = {
    containerWrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#C7C8CC'
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 16,
        fontWeight: '500'
    },
    accessoryWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
};

const tab = {
    icon: {
        height: 20,
        width: 20
    },
    iconLarge: {
        height: 25,
        width: 25
    }
};

const buttonCreate = {
    width: '50%',
    backgroundColor: '#3F3F3C',
    borderRadius: 3,
    alignItems: 'center',
    padding: 5
};

const buttonsText = {
    fontSize: 11,
    marginLeft: 5,
    backgroundColor: 'transparent'
};

const create = {
    menu: {
        backgroundColor: 'transparent'
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: '#FBFBFA',
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
    buttonGroupButtons: {
        ...buttonCreate,
        borderWidth: 1,
        borderColor: '#737370'
    },
    buttonGroupButtonsActive: {
        ...buttonCreate,
        backgroundColor: '#30302F'
    },
    buttonEditAdd: {
        borderRadius: 3,
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#5C5C59',
        width: '100%'
    },
    buttonEditAddActive: {
        borderRadius: 3,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#30302F',
        width: '100%'
    },
    buttonsTextActive: {
        ...buttonsText,
        color: '#FBFBFA'
    },
    buttonsText: {
        ...buttonsText,
        color: '#737370'
    },
    buttonCircle: {
        backgroundColor: '#30302F',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 5,
        height: 50,
        width: 50
    },
    buttonCircleText: {
        fontSize: 7,
        color: '#737370'
    },
    lineChart: {
        height: 130,
        width: '70%'
    },
    buttonsView: {
        flexDirection: 'column',
        marginTop: 10,
        width: '20%'
    },
    statsView: {
        flexDirection: 'row'
    },
    usersView: {
        height: 80,
        width: 50,
        backgroundColor: '#30302F',
        margin: 2,
        flex: 1,
        borderRadius: 3
    },
    viewUserImage: {
        height: '80%',
        backgroundColor: 'transparent',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewUserName: {
        height: '20%',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userNameText: {
        fontSize: 6,
        color: '#fff',
        fontWeight: 'bold'
    },
    listView: {
        width: '80%',
        padding: 8
    },
    imageView: {
        width: '90%',
        height: 45,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'orange'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    xData: {
        width: '70%',
        height: 20,
        marginLeft: '20%'
    },
    xLabelData: {
        color: 'grey',
        backgroundColor: 'transparent',
        fontSize: 7
    }
};

const progress = {
    view: {
        height: 150,
        width: '100%'
    },
    line1: {
        height: 150,
        width: '100%'
    },
    line2: {
        height: 130,
        position: 'absolute',
        width: '100%',
        marginTop: '4%'
    },
    line3: {
        height: 110,
        position: 'absolute',
        width: '100%',
        marginTop: '8.5%'
    },
    line4: {
        height: 90,
        position: 'absolute',
        width: '100%',
        marginTop: '13%'
    }
};

export const commonStyles = StyleSheet.create(common);
export const signInStyles = StyleSheet.create(signIn);
export const listItemStyles = StyleSheet.create(listItem);
export const tabBarStyles = StyleSheet.create(tab);

export const progressBarStyles = StyleSheet.create(progress);
export const createStyles = StyleSheet.create(create);