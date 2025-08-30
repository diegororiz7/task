//Importações de componentes e firebase
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity, Platform} from 'react-native';
import database from '../../config/firebase_config';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

//Função principal do New Task
export default function NewTask({navigation}){

    //Variáveis a serem manipuladas
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Média');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    //Função definir formato de data DD/MM/AAAA
    useEffect(() => {
        setDate(new Date());
    },[]);

    //Função para validar os inputs
    const validateInputs = () => {
        if(!description.trim()){
            Platform.OS === 'web'
            ? window.alert('Informe a descrição da tarefa')
            : Alert.alert('Erro', 'Informe a descrição da tarefa!');
            return false;
        }

        if(!priority.trim()){
            Alert.alert('Erro', 'Informe a prioridade da tarefa!');
            return false;
        }

        if(!date){
            Alert.alert('Erro', 'Informe a data da tarefa!');
            return false;
        }

        return true;
    }

    //Função para adicionar tarefas no projeto
    const addTask = () => {
        if(validateInputs()){
            const taskDate = new Date(date);
            taskDate.setHours(0,0,0,0);

            database.collection('Tasks').add({
                description: description,
                priority: priority,
                date: taskDate,
                finished: false 
            });

            navigation.navigate('Task');
        }
    }

    //Função para adicionar data (web)
    const handleWebDateChange = (e) => {
        const [year, month, day] = e.target.value.split('-').map(Number);
        const newDate = new Date(year, month - 1, day);
        setDate(newDate);
    }

    //Função para adicionar data (mobile)
    const onDateChange = (event, selectedDate) => {
        if(selectedDate){
            setDate(selectedDate);
        }

        setShowDatePicker(false);
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.label}>Descrição</Text>

            <TextInput
                style = {styles.inputText}
                value= {description}
                onChangeText={setDescription}
                placeholder='Informe a tarefa (Ex. Estudar React Native)'
            />  

            <Text style = {styles.label}>Prioridade</Text>

            <Picker
                style = {styles.inputText}
                value = {priority}
                onValueChange={(itemValue) => setPriority(itemValue)}
            >
                <Picker.Item label='Urgente' value= 'Urgente'/>
                <Picker.Item label='Alta' value= 'Alta'/>
                <Picker.Item label='Média' value= 'Média'/>
                <Picker.Item label='Baixa' value= 'Baixa'/>
            </Picker>

            <Text style = {styles.label}>Data</Text>

            {/*Verifica se é Mobile para exibir o DatePicker */}

            {Platform.OS === 'web' ? (
                <input
                    type = 'date'
                    value={date.toISOString().split('T')[0]}
                    onChange={handleWebDateChange}
                    onKeyDown={(e) => e.preventDefault()}
                    style = {{
                    width: '90%',
                    marginTop: 10,
                    padding: 10,
                    height: 50,
                    borderBottomWidth: 1,
                    borderBottomColor:'#007BFF',
                    border: 'none',
                    borderBottom: '1px solid #007BFF',
                    outline: 'none',
                    fontSize: 16,
                    boxSizing: 'border-box',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                    }}
                />

            ):(
                <>
                    <TouchableOpacity
                        onPress={() => setShowDatePicker(true)}
                        style = {{
                            ...styles.inputText,
                            justifyContent: 'center',
                            paddingHorizontal: 10
                        }}
                    >
                        <Text>{date.toLocaleDateString()}</Text>
                    </TouchableOpacity>

                    {showDatePicker && (
                        <DateTimePicker
                          value = {date}
                          mode = 'date'
                          display='default'
                          onChange={onDateChange}
                        />
                    )}
                </>
            )}

            <TouchableOpacity
                style = {styles.buttonNewTask}
                onPress={addTask}
            >
               <FontAwesome
                    name = 'save'
                    size = {20}
                    color = '#FFF'
               />
            </TouchableOpacity>

            {/*Rodapé da página */}
            <View style = {styles.footer}>
                <Text style = {styles.footerText}>
                    Desenvolvido por ADS FASM - 5 Período 2025
                </Text>
            </View>
        </View>
    );
}