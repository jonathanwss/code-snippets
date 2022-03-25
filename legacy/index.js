import React, { PureComponent } from 'react';
import {
  Container,
  Form,
  Item,
  Label,
  CardItem,
  Input,
  View,
  Button
} from 'native-base';
import {
  TouchableOpacity,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Text
} from 'react-native';

import { DrawerActions } from 'react-navigation';

import styles from '../styles/investmentForm';

import Header from '../containers/HeaderContainer';

import { SUBMIT_FORM_MENSAGE } from './constants';
import { TextInputMask } from 'react-native-masked-text';
import { investmentForm } from '../state/actions/investment.actions';

export default class InvestmentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      nome: this.props.isAuthenticated === true ? this.props.userList.nome : '',
      email:
        this.props.isAuthenticated === true ? this.props.userList.email : '',
      telefone: '',
      mensagem: '',
      tipo: 'SOLICITOU_INVESTIMENTO'
    };
  }

  clearForm() {
    this.setState({ telefone: '' }), this.setState({ mensagem: '' });
  }
  showDrawer() {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  }

  changeNome = event => {
    this.setState({ nome: event.nativeEvent.text });
  };

  changeEmail = event => {
    this.setState({ email: event.nativeEvent.text });
  };

  changeTelefone = event => {
    this.setState({ telefone: event.nativeEvent.text });
  };

  changeMensagem = event => {
    this.setState({ mensagem: event.nativeEvent.text });
  };

  postForm = async () => {
    const info = {
      nome: this.state.nome,
      email: this.state.email,
      telefone: this.state.telefone,
      mensagem: this.moneyField.getRawValue(),
      tipo: this.state.tipo
    };

    const sended = investmentForm(info);
    if (info.telefone === '' && info.email === '') {
      Alert.alert('Email ou telefone obrigatório!');
    } else {
      if (sended) {
        this.setState({ tipo: 'SOLICITOU_INVESTIMENTO' });
        this.props.navigation.navigate(SUBMIT_FORM_MENSAGE);
        await this.clearForm();
      } else {
        Alert.alert('Erro no envio do formulário');
      }
    }
  };
  postFormHidden = async () => {
    const sended = investmentForm(this.state);
    if (this.props.isAuthenticated === false && sended) {
      await this.setState({ tipo: 'EXPLOROU_INVESTIMENTO' });
    } else {
      return;
    }
  };

  render() {
    const { nome, email, telefone, mensagem } = this.state;
    return (
      <Container
        style={{
          paddingTop: Platform.select({ android: 24 })
        }}
      >
        <Header
          onOpenDrawer={this.showDrawer.bind(this)}
          title={'Quero Investir'}
          navigation={this.props.navigation}
        />

        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView>
            <View style={styles.view}>
              <Text style={styles.text}>Venha investir com a gente!</Text>
            </View>
            <View>
              <Form>
                <CardItem style={styles.cardItemInput}>
                  <Label style={{ color: '#575757', fontSize: 14 }}>
                    Seu nome{' '}
                  </Label>
                  <Input
                    style={{
                      borderBottomColor: '#D2D2D2',
                      borderBottomWidth: 1,
                      width: '100%',
                      marginTop: -2,
                      color: '#000',
                      paddingLeft: 5,
                      paddingRight: 5,
                      fontSize: 17
                    }}
                    value={nome}
                    onChange={this.changeNome}
                  />
                </CardItem>

                <CardItem style={styles.cardItemInputLast}>
                  <Label style={{ color: '#575757', fontSize: 14 }}>
                    Seu e-mail
                  </Label>
                  <Input
                    keyboardType="email-address"
                    autoCompleteType="email"
                    value={email}
                    onChange={this.changeEmail}
                    onSubmitEditing={this.postFormHidden}
                    keyboardAppearance="dark"
                    style={{
                      borderBottomColor: '#D2D2D2',
                      borderBottomWidth: 1,
                      width: '100%',
                      marginTop: -2,
                      color: '#000',
                      paddingLeft: 5,
                      paddingRight: 5,
                      fontSize: 17
                    }}
                  />
                </CardItem>
                <CardItem style={styles.cardItemInputLast}>
                  <Label style={{ color: '#575757', fontSize: 14 }}>
                    Seu telefone
                  </Label>

                  <TextInputMask
                    type={'cel-phone'}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99) '
                    }}
                    value={telefone}
                    onChange={this.changeTelefone}
                    style={{
                      borderBottomColor: '#D2D2D2',
                      borderBottomWidth: 1,
                      width: '100%',
                      paddingTop: 5,
                      paddingBottom: 12,
                      color: '#000',
                      paddingLeft: 5,
                      paddingRight: 5,
                      fontSize: 17
                    }}
                  />
                </CardItem>

                <CardItem style={styles.cardItemInputLast}>
                  <Label style={{ color: '#575757', fontSize: 14 }}>
                    Valor que gostaria de investir (opcional)
                  </Label>
                  <TextInputMask
                    onChange={this.changeMensagem}
                    type={'money'}
                    options={{
                      precision: 2,
                      separator: ',',
                      delimiter: '.',
                      unit: 'R$',
                      suffixUnit: ''
                    }}
                    value={mensagem}
                    style={{
                      borderBottomColor: '#D2D2D2',
                      borderBottomWidth: 1,
                      width: '100%',
                      paddingTop: 5,
                      paddingBottom: 12,
                      color: '#000',
                      paddingLeft: 5,
                      paddingRight: 5,
                      fontSize: 17
                    }}
                    ref={ref => (this.moneyField = ref)}
                  />
                </CardItem>

                <Button
                  onPress={() => {
                    this.postForm();
                  }}
                  style={{
                    ...styles.linearGradientButton,
                    backgroundColor: '#0e92df'
                  }}
                  full
                >
                  <Text style={styles.textEnter}>Enviar</Text>
                </Button>
              </Form>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
