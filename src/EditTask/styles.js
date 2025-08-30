import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //Estilo principal
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    //Label dos inputs
    label:{
        width: '90%',
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color: '#007BFF',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    //Campo de input do texto
    inputText:{
        width: '90%',
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#007BFF',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    //Botão para incluir nova tarefa (botão flutuante)
    buttonNewTask:{
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: 50,
        left: 20,
        backgroundColor: '#007BFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //Estilo do ícone de inclusão
    iconButton:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    //Dropdown: seleção da prioridade
    dropdown:{
        justifyContent: 'center',
        paddingVertical: 12
    },  
    //Estilo do fundo do modal
    modalOverlay:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00000099'
    },
    //Conteúdo do do modal
    modalContent:{
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10,
        padding: 15
    },
    //Itens do modal
    modalItem:{
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    //Botão de fechar o modal
    modalClose:{
        marginTop: 10,
        textAlign: 'center',
        color: 'red'
    },
    //Rodapé da página
    footer:{
        backgroundColor: '#1976D2',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'flex-start',
        paddingLeft: 15
    },
    //Texto do rodapé
    footerText:{
        color: '#fff',
        fontSize: 14,
        textAlign: 'left'
    }
})

export default styles;