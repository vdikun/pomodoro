const Colors = {
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
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
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
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  };