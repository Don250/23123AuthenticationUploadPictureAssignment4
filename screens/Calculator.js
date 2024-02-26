import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
      setInput((prevInput) => prevInput + value);
  };

  const handleEqualsPress = () => {
    setInput(eval(input).toString());
  };

  const handleClearPress = () => {
    setInput('');
    setResult('');
  };
  const handleBackPress = () => {
    var value='';
    for(var i=0;i<input.length-1;i++)
    {
      value+=input[i];
    }
    setInput(value);
  }
  return (
    <View style={styles.container}>
      
      <TextInput placeholder='0' style={styles.inputText} value={input}></TextInput>
      
      {/* Add more operator buttons (-, *, /) following the same pattern */}
      <View style={styles.buttonRow}>
      <TouchableOpacity
          style={styles.button}
          onPress={handleClearPress}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('+')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('-')}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleBackPress()}
        >
          <Text style={styles.buttonText}>back</Text>
        </TouchableOpacity>
        
      </View>
      {/*  */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('7')}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}i
          onPress={() => handleButtonPress('8')}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('9')}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('*')}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>

{/*  */}
<View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('4')}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('5')}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('6')}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress(')')}
        >
          <Text style={styles.buttonText}>)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('1')}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('2')}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('3')}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('(')}
        >
          <Text style={styles.buttonText}>(</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('0')}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('.')}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('/')}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleEqualsPress}
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
       
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
     padding:1,
     backgroundColor:'white',
    
  },
  input: {
    fontSize: 24,
    marginBottom: 16,
  },
  result: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    marginHorizontal: 8,
    height: 48,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 24,
  },
  headerView:{
    margin:60,
    borderBottomWidth:2,
    alignItems: 'center',
  },
  headerText:{
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputText:{
    borderBottomWidth:2,
    textAlign:'right',
    padding:8,
    fontSize:30,
    fontWeight:'bold',
    marginTop:120,
    marginBottom:25
  }
});

export default Calculator;
