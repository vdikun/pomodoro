export const Colors = {
    redMajor: '#FF5733',
    redMinor: '#D41111',
    greenMajor: '#DAF7A6',
    greenMinor: '#8BD21D',
    offWhite: '#dddfff',
    offGrey: '#444111',
    white: '#fff',
    black: '#000'
}

const defaultContainer = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.offWhite,
};

export default styles = {
    redContainer: {
        ...defaultContainer,
        backgroundColor: Colors.redMajor
    },
    greenContainer: {
        ...defaultContainer,
        backgroundColor: Colors.greenMajor
    },
    settingsContainer: {
        ...defaultContainer
    },
    textInput: {
        margin: 15,
        height: 40,
        borderColor: Colors.offGrey,
        backgroundColor: Colors.white,
        borderWidth: 1
    }
  };