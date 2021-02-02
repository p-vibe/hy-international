import styled from 'styled-components/native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from 'src/styles/color';
import RNText from 'src/components/text/RNText';
import RNTextInput from 'src/components/input/RNTextInput';

interface Props {
  width: string;
  height: string;
  marginTop: string;
  marginBottom: string;
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

const AtSignView = styled.View`
  height: 100%
  width: 10%
  background-color: ${colors.blue_signiture};
  align-items: center;
  justify-content: center;
`;

const AtSign = styled(RNText).attrs({
  fontType: 'BOLD',
  textColor: colors.white,
})`
  font-size: 25px;
`;

const EmailInput: React.FC<Props> = ({
  width,
  height,
  marginTop,
  marginBottom,
}: Props) => {
  const radius: number = 10;
  const [setValue] = useState(null);
  const [setItems] = useState([]);

  return (
    <Container
      style={{
        width,
        height,
        marginTop,
        marginBottom,
      }}>
      <RNTextInput
        borderTopLeftRadius={radius}
        borderBottomLeftRadius={radius}
        placeHolder=" Email ID"
        placeholderTextColor={colors.gray500}
        containerWidth="50%"
        containerHeight="100%"
      />
      <AtSignView>
        <AtSign>@</AtSign>
      </AtSignView>
      <DropDownPicker
        items={[
          {
            label: 'hanyang.ac.kr',
            value: 'hanyang.ac.kr',
          },
          {
            label: 'hmail.hanyang.ac.kr',
            value: 'hmail.hanyang.ac.kr',
          },
        ]}
        // controller={(instance) => {
        //   controller = instance;
        // }}
        containerStyle={{
          width: '40%',
          height: '100%',
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
        }}
        labelStyle={{
          fontSize: 12,
        }}
        style={{
          backgroundColor: colors.gray20,
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: radius,
          borderBottomRightRadius: radius,
        }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: colors.gray20}}
        onChangeList={(items, callback) => {
          new Promise((resolve) => resolve(setItems(items)))
            .then(() => callback())
            .catch(() => {});
        }}
        defaultValue="hanyang.ac.kr"
        onChangeItem={(item) => setValue(item.value)}
      />
    </Container>
  );
};

export default EmailInput;
