import { Colors } from './../../styles';

const SPACING = 10;

export default styles = {
    buttonStyle: {
        backgroundColor: Colors.white,
        borderRadius: SPACING / 2,
        alignSelf: 'stretch',
        marginLeft: SPACING,
        marginRight: SPACING,
        borderWidth: 1,
        borderColor: Colors.black
    },
    buttonTextStyle: {
        alignSelf: 'center',
        paddingTop: SPACING,
        paddingBottom: SPACING,
        fontSize: 20,
        fontWeight: '600'
    }
  };