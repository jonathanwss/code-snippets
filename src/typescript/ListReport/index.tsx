import React, { useCallback, useEffect, useState } from 'react'
import { Keyboard, ScrollView, ActivityIndicator } from 'react-native'
import Button from 'components/commons/Button'
import Message, { MessageData } from 'components/commons/Message'
import Header from 'components/commons/Header'
import MicroscopioImg from 'assets/icons/microscopio.svg'
import { useNavigation } from '@react-navigation/native'

import { useTheme } from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  Card,
  Footer,
  Content,
  Container,
  CardTopText,
  SafeAreaHeader,
  CardBottomText,
  SafeAreaViewFooter,
} from './styles'
import ListItem from './ListItem'
import ReportDataService from '../../../services/ReportDataService'

const ListReport: React.FC = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<MessageData>()
  const theme = useTheme()
  const navigation = useNavigation()

  const clearMessage = () => {
    setMessage(undefined)
  }

  function handleOnMessageClose() {
    clearMessage()
  }

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const response = await ReportDataService.get()
        setData(response.data)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [setLoading, setData])

  const fetchFeelingDetail = useCallback(
    async (id: string) => {
      try {
        setLoading(true)
        return await ReportDataService.getFeelingDetail(id)
      } finally {
        setLoading(false)
      }
    },
    [setLoading]
  )

  const fetchSymptomDetail = useCallback(
    async (id: string) => {
      try {
        setLoading(true)
        return await ReportDataService.getSymptomDetail(id)
      } finally {
        setLoading(false)
      }
    },
    [setLoading]
  )

  const fetchDetail = useCallback(
    async (data: any) =>
      data.type === 'feeling'
        ? fetchFeelingDetail(data.id)
        : fetchSymptomDetail(data.id),
    [fetchFeelingDetail, fetchSymptomDetail]
  )

  return (
    <Container>
      <SafeAreaHeader />
      <Header title="Meu relatório" hasBackButton />
      {loading && (
        <ActivityIndicator
          size="large"
          color={theme.colors.background.green}
          style={{
            height: '80%',
          }}
        />
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Content>
          {data.length && !loading ? (
            <>
              {data.map(d => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <TouchableOpacity
                    onPress={async () =>
                      navigation.navigate('detailItemReport', {
                        detailItem: await fetchDetail(d),
                      })
                    }
                  >
                    <ListItem item={d} />
                  </TouchableOpacity>
                )
              })}
            </>
          ) : (
            !loading && (
              <Card>
                <MicroscopioImg width={90} height={90} />
                <CardTopText>Você ainda não relatou nada.</CardTopText>

                <CardBottomText>
                  Informe um sintoma ou sentimento para ver seu relatório.
                </CardBottomText>
              </Card>
            )
          )}
        </Content>
      </ScrollView>

      <Message data={message} onClose={handleOnMessageClose} />
      {data.length && !loading ? (
        <Footer>
          <Button
            title="Exportar Relatório"
            loading={loading}
            filled
            onPress={() => {
              Keyboard.dismiss()
              navigation.navigate('exportReport')
            }}
          />
        </Footer>
      ) : (
        <></>
      )}

      <SafeAreaViewFooter />
    </Container>
  )
}

export default ListReport
