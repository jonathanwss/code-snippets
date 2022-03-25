/* eslint-disable no-nested-ternary */
import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import Header from 'components/commons/Header'
import { useRoute, RouteProp } from '@react-navigation/native'

import SadImg from 'assets/icons/sad.svg'
import SickImg from 'assets/icons/sick.svg'
import HappyImg from 'assets/icons/happy.svg'
import SmileImg from 'assets/icons/smile.svg'
import CryingImg from 'assets/icons/crying.svg'
import TextImg from 'assets/icons/text-blue.svg'
import SmilingImg from 'assets/icons/smiling.svg'
import ImageImg from 'assets/icons/image-blue.svg'
import ConfusedImg from 'assets/icons/confused.svg'

import { useTheme } from 'styled-components/native'
import { TypeUser } from '../ListItem'
import {
  Line,
  Content,
  LineTop,
  TitleText,
  LineTitle,
  Container,
  FirstIcon,
  ViewRadius,
  TitleTextBold,
  CardBottomText,
  SafeAreaHeader,
  SafeAreaViewFooter,
  CardBottomTextDate,
  DescriptionTextLevel,
  DescriptionTextLowMarginTop,
} from './styles'

type DetailItem = {
  id: string
  level: number
  type: TypeUser
  name: string
  createdAt: string
  attachments: string[]
  levelDescription: string
  userDescription: string
}

type Props = {
  detailItem: DetailItem
}

const DetailItem: React.FC = () => {
  const theme = useTheme()

  const route = useRoute<RouteProp<Props, 'detailItem'>>()
  const detailItem = route.params?.detailItem

  const title = () =>
    detailItem.type === TypeUser.feeling
      ? 'Sentimento'
      : `Sintoma nível ${detailItem.level}`

  const icon = () =>
    detailItem.type === TypeUser.feeling ? (
      <SmileImg color={theme.colors.icon.green} width={45} height={45} />
    ) : (
      <SickImg color={theme.colors.icon.green} width={45} height={45} />
    )

  const iconFelling = () =>
    detailItem.level === 1 ? (
      <CryingImg width={45} height={45} />
    ) : detailItem.level === 2 ? (
      <SadImg width={45} height={45} />
    ) : detailItem.level === 3 ? (
      <ConfusedImg width={45} height={45} />
    ) : detailItem.level === 4 ? (
      <HappyImg width={45} height={45} />
    ) : (
      <SmilingImg />
    )

  const textFeeling = () =>
    detailItem.level === 1
      ? 'Muito Mal'
      : detailItem.level === 2
      ? 'Mal'
      : detailItem.level === 3
      ? 'Mais ou Menos'
      : detailItem.level === 4
      ? 'Bem'
      : 'Muito Bem'

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('pt-BR')

  return (
    <Container>
      <SafeAreaHeader />
      <Header title="Detalhe" hasBackButton />
      <ViewRadius>
        <FirstIcon>{icon()}</FirstIcon>
        <CardBottomText>{title()}</CardBottomText>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Content>
            {detailItem.type === TypeUser.feeling && (
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                {iconFelling()}
              </View>
            )}
            {detailItem.type === TypeUser.symptom && (
              <TitleTextBold>{detailItem.name}</TitleTextBold>
            )}
            {detailItem.type === TypeUser.feeling && (
              <TitleText>{textFeeling()}</TitleText>
            )}
            <CardBottomTextDate>
              {formatDate(detailItem.createdAt)}
            </CardBottomTextDate>
            {detailItem.type === TypeUser.symptom && (
              <DescriptionTextLevel>
                {detailItem.levelDescription}
              </DescriptionTextLevel>
            )}
            {detailItem.userDescription ? (
              <>
                <Line>
                  <LineTop>
                    <TextImg
                      color={theme.colors.icon.green}
                      width={24}
                      height={24}
                    />
                    <LineTitle>Texto anexado</LineTitle>
                  </LineTop>
                </Line>
                <DescriptionTextLowMarginTop>
                  {detailItem.userDescription}
                </DescriptionTextLowMarginTop>
              </>
            ) : (
              <></>
            )}
            {detailItem.attachments.length > 0 ? (
              <>
                <Line>
                  <LineTop>
                    <ImageImg
                      color={theme.colors.icon.green}
                      width={24}
                      height={24}
                    />
                    <LineTitle>Imagem anexada</LineTitle>
                  </LineTop>
                </Line>
                {detailItem.attachments.map((attachment: any) => {
                  return (
                    <View key={attachment} style={{ marginBottom: 10 }}>
                      <Image
                        style={{ width: 200, height: 200 }}
                        source={{ uri: attachment }}
                      />
                    </View>
                  )
                })}
              </>
            ) : (
              <></>
            )}
          </Content>
        </ScrollView>
      </ViewRadius>
      <SafeAreaViewFooter />
    </Container>
  )
}

export default DetailItem
