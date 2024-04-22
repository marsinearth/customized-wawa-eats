import { ScrollView, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { INGREDIENTS, useSandwich } from '../hooks/useSandwich';
import { AwesomeButton } from './AwesomeButton';

export const BottomUI = () => {
  const addIngredient = useSandwich((state) => state.addIngredient);
  const [addedToCart, setAddedToCart] = useSandwich((state) => [
    state.addedToCart,
    state.setAddedToCart,
  ]);
  const total = useSandwich((state) => state.total);

  return (
    <SafeAreaView edges={['bottom']}>
      <View
        style={{
          padding: 20,
        }}>
        {addedToCart ? (
          <View>
            <Text style={{ fontSize: 16, fontWeight: '900' }}>
              총 가격: ${total.toLocaleString()}원
            </Text>
            <Text style={{ color: '#666', marginTop: 4,  }}>
              주문하신 샌드위치가 준비되었습니다!
            </Text>
            <Text style={{ color: '#666',  marginBottom: 16 }}>
              곧 배달해 드릴께요 🛵
            </Text>
            <AwesomeButton
              title="주문 취소"
              color="#fff"
              backgroundColor="#7C4DFF"
              bold
              onPress={() => setAddedToCart(false)}
            />
          </View>
        ) : (
          <>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <Text style={{ flexShrink: 1, fontSize: 22, fontWeight: '900' }}>
                JMT 샌드위치 가게
              </Text>
              <Text>⭐️⭐️⭐️⭐️⭐️</Text>
            </View>
            <Text style={{ color: '#666' }}>신선하고 맛있는 최고의 재료들로 엄선했습니다.</Text>
            <View style={{ height: 1, backgroundColor: '#ececec', marginVertical: 20 }} />
            <Text style={{ fontSize: 16, fontWeight: '900', textAlign: 'center' }}>
              커스텀 주문제작 (기본료 3,000원)
            </Text>
            <Text style={{ textAlign: 'center', color: '#666' }}>
              재료를 넣어서 나만의 샌드위치를 제작해 보세요!
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                marginVertical: 8,
                marginHorizontal: -20,
              }}>
              {Object.keys(INGREDIENTS).map((ingredientName) => (
                <View key={ingredientName} style={{ padding: 10 }}>
                  <AwesomeButton
                    title={
                      INGREDIENTS[ingredientName].icon +
                      ` ${ingredientName} (+${INGREDIENTS[ingredientName].price.toLocaleString()}원)`
                    }
                    onPress={() => addIngredient(ingredientName)}
                  />
                </View>
              ))}
            </ScrollView>
            <AwesomeButton
              title={`주문: (${total.toLocaleString()}원)`}
              color="#fff"
              backgroundColor="#7C4DFF"
              bold
              onPress={() => setAddedToCart(true)}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
