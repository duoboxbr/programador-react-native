import React, {useCallback, useEffect, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAuth} from '../../hooks/Auth';
import {BaseScreen} from '../BaseScreen';

import {Typographic} from '../../components/Typographic';

import {getBankSlips} from '../../services/getBankSlips';

import {TableHeader} from './styles';

import {BankSlip} from '../../services/getBankSlips/types';
import {BankSlipsScreenParams} from './types';
import {BankSlipRow} from './components/BankSlipRow';

export const BankSlips: React.FC = () => {
  const {
    params: {id},
  } = useRoute<BankSlipsScreenParams>();
  const [bankSlips, setBankSlips] = useState<BankSlip[]>([]);
  const {apiAuthorization} = useAuth();
  const navigation = useNavigation();
  const [selectedBankSlipId, setSelectedBankSlipId] = useState('');

  const fetchBankSlips = useCallback(async () => {
    try {
      const {
        data: {rows},
      } = await getBankSlips(apiAuthorization, id);
      setBankSlips(rows);
    } catch (error) {
      Alert.alert('Erro', 'Aconteceu um erro ao requisitar os boletos', [
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
    }
  }, [apiAuthorization, id, navigation]);

  const handleOpenDetails = (bankSlipId: string) => {
    setSelectedBankSlipId(prevSelectedId =>
      prevSelectedId === bankSlipId ? '' : bankSlipId,
    );
  };

  useEffect(() => {
    fetchBankSlips();
  }, [fetchBankSlips]);

  return (
    <BaseScreen>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <TableHeader>
          <Typographic.Text>Status</Typographic.Text>
          <Typographic.Text>Valor</Typographic.Text>
          <Typographic.Text>Vencimento</Typographic.Text>
          <Typographic.Text>Mensalidade</Typographic.Text>
        </TableHeader>
        {bankSlips.map(bankSlip => (
          <BankSlipRow
            key={bankSlip.id}
            dueDate={bankSlip.data_vencimento}
            monthlyReference={bankSlip.referencia_mensalidade}
            value={bankSlip.valor}
            status={bankSlip.status}
            onPress={() => handleOpenDetails(bankSlip.id)}
            expanded={selectedBankSlipId === bankSlip.id}
          />
        ))}
      </ScrollView>
    </BaseScreen>
  );
};
