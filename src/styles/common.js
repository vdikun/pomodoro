export const Colors = {
    redMajor: '#FF5733',
    redMinor: '#D41111',
    greenMajor: '#DAF7A6',
    greenMinor: '#8BD21D',
    offWhite: '#dddfff',
    white: '#fff',
    black: '#000'
}

export const defaultContainer = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
        ...defaultContainer,
        backgroundColor: Colors.offWhite
    }
  };