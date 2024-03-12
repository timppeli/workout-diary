import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'start',
    marginTop: 10,
    padding: 20
  },
  input: {
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#666',
    backgroundColor: "#fff"
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10
  },
  option: {
    color: '#111'
  },
  currentOption: {
    color: 'white'
  },
  unselected: {
    backgroundColor: 'orange',
    margin: 5,
    padding: 20,
    borderRadius: 10
  },
  selected: {
    backgroundColor: 'teal',
    color: 'red',
    margin: 6,
    padding: 20,
    borderRadius: 10
  },
  radiobuttons: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  buttonstyle: {
    backgroundColor: "red"
  }
});