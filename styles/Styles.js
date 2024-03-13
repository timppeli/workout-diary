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
  historylistItem: {
    backgroundColor: "orange",
    padding: 10,
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
    marginTop: 15
  },
  statsItem: {
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 10,
    color: "#fff"
  },
  dateSelector: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#666",
    backgroundColor: "#fff"
  },
  settings: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50
  },
  settingsText: {
    fontSize: 50
  }
});