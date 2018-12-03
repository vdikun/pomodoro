export const Colors = {
    redMajor: '#FF5733',
    redMinor: '#D41111',
    greenMajor: '#DAF7A6',
    greenMinor: '#8BD21D'
}

const container = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  };

export default styles = {
    redContainer: {
        ...container,
        backgroundColor: Colors.redMajor
    },
    greenContainer: {
        ...container,
        backgroundColor: Colors.greenMajor
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderRadius: 5,
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    buttonTextStyle: {
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: '600'
    },
    timerStyle: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 54,
      fontWeight: '500',
      fontFamily: 'Courier New',
      letterSpacing: 1
    },
    settingsIcon: {
        height: 50,
        width: 50
    },
    settingsButton: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        alignSelf: 'flex-end',
        opacity: 0.9
    }
  };