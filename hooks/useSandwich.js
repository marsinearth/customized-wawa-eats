import { useGLTF } from '@react-three/drei/native';
import { create } from 'zustand';
import Avocado from '../assets/models/Avocado_Slice_Avocado_0.glb';
import BBQSauce from '../assets/models/BBQ_Sauce_Slice_BBQ_sauce_0.glb';
import Bacon from '../assets/models/Bacon_Slice_Bacon_0.glb';
import Bread from '../assets/models/Bread_Slice_Bread_0.glb';
import Cheese from '../assets/models/Cheese_Slice_Cheese_0.glb';
import Chicken from '../assets/models/Chicken_Slice_Chicken_0.glb';
import Cucumber from '../assets/models/Cucumber_Slice_Cucumber_0.glb';
import Egg from '../assets/models/Egg_Slice_Egg_0.glb';
import Halloumi from '../assets/models/Halloumi_Slice_Halloumi_0.glb';
import Ham from '../assets/models/Ham_Slice_Ham_0.glb';
import Ketchup from '../assets/models/Ketchup_Slice_Ketchup_0.glb';
import Lettuce from '../assets/models/Lettuce_Slice_Lettuce_0.glb';
import Mayo from '../assets/models/Mayo_Slice_Mayo_0.glb';
import Butter from '../assets/models/Melted_Butter_Butter_0.glb';
import Mushroom from '../assets/models/Mushroom_Slice_Mushroom_0.glb';
import Mustard from '../assets/models/Mustard_Slice_Mustard_0.glb';
import Olive from '../assets/models/Olive_Slice_Olive_0.glb';
import Onion from '../assets/models/Onion_Slice_Onion_0.glb';
import Patty from '../assets/models/Patty_Slice_Patty_0.glb';
import Pepper from '../assets/models/Pepper_Slice_Pepper_0.glb';
import Pickle from '../assets/models/Pickle_Slice_Pickle_0.glb';
import Pineapple from '../assets/models/Pineapple_Slice_Pineapple_0.glb';
import Salami from '../assets/models/Salami_Slice_Salami_0.glb';
import Salmon from '../assets/models/Salmon_Slice_Salmon_0.glb';
import Sausage from '../assets/models/Sausage_Slice_Sausage_0.glb';
import Shrimp from '../assets/models/Shrimp_Slice_Shrimp_0.glb';
import Tomato from '../assets/models/Tomato_Slice_Tomato_0.glb';
import Anchovies from '../assets/models/anchovies_Slice_Fish_0.glb';

// export type IngredientName =
//   | '빵'
//   | '양상추'
//   | '버섯'
//   | '토마토'
//   | '치즈'
//   | '치킨'
//   | '소세지'
//   | '살라미'
//   | '소고기 패티'
//   | '베이컨'
//   | '멸치'
//   | '아보카도'
//   | '바베큐 소스'
//   | '오이'
//   | '계란'
//   | '케첩'
//   | '마요네즈'
//   | '버터'
//   | '겨자'
//   | '양파'
//   | '올리브'
//   | '피망'
//   | '피클'
//   | '연어'
//   | '새우'
//   | '파인애플'
//   | '햄'
//   | '그릴치즈';

// export type IngredientType = {
//   id: number;
//   name: IngredientName;
// };

// type SandwichState = {
//   ingredients: IngredientType[];
//   total: number;
//   addedToCart: boolean;
//   addIngredient: (ingredientName: IngredientName) => void;
//   removeIngredient: (ingredient: IngredientType) => void;
//   setAddedToCart: (addedToCart: boolean) => void;
// };

export const INGREDIENTS = {
  ['빵']: {
    src: Bread,
    price: 500,
    extraScaleY: 5,
    icon: '🍞',
  },
  ['양상추']: {
    src: Lettuce,
    price: 500,
    icon: '🥬',
  },
  ['버섯']: {
    src: Mushroom,
    price: 1000,
    icon: '🍄',
  },
  ['토마토']: {
    src: Tomato,
    price: 500,
    icon: '🍅',
  },
  ['치즈']: {
    src: Cheese,
    price: 1000,
    icon: '🧀',
  },
  ['치킨']: {
    src: Chicken,
    price: 2000,
    icon: '🍗',
  },
  ['소세지']: {
    src: Sausage,
    price: 1500,
    icon: '🌭',
  },
  ['살라미']: {
    src: Salami,
    price: 1500,
    icon: '🍖',
  },
  ['베이컨']: {
    src: Bacon,
    price: 1500,
    icon: '🥓',
  },
  ['소고기 패티']: {
    src: Patty,
    price: 2000,
    icon: '🍔',
  },
  ['멸치']: {
    src: Anchovies,
    price: 2000,
    icon: '🐟',
  },
  ['아보카도']: {
    src: Avocado,
    price: 2000,
    icon: '🥑',
  },
  ['바베큐 소스']: {
    src: BBQSauce,
    price: 1000,
    icon: '🫗',
  },
  ['오이']: {
    src: Cucumber,
    price: 500,
    icon: '🥒',
  },
  ['계란']: {
    src: Egg,
    price: 1000,
    icon: '🍳',
  },
  ['케첩']: {
    src: Ketchup,
    price: 500,
    icon: '🥫',
  },
  ['마요네즈']: {
    src: Mayo,
    price: 500,
    icon: '🍼',
  },
  ['버터']: {
    src: Butter,
    price: 1000,
    icon: '🧈',
  },
  ['겨자']: {
    src: Mustard,
    price: 500,
    icon: '🍯',
  },
  ['양파']: {
    src: Onion,
    price: 500,
    icon: '🧅',
  },
  ['올리브']: {
    src: Olive,
    price: 500,
    icon: '🫒',
  },
  ['피망']: {
    src: Pepper,
    price: 500,
    icon: '🫑',
  },
  ['피클']: {
    src: Pickle,
    price: 500,
    icon: '🥗',
  },
  ['연어']: {
    src: Salmon,
    price: 2000,
    icon: '🍣',
  },
  ['새우']: {
    src: Shrimp,
    price: 2000,
    icon: '🦐',
  },
  ['파인애플']: {
    src: Pineapple,
    price: 1000,
    icon: '🍍',
  },
  ['햄']: {
    src: Ham,
    price: 1500,
    icon: '🥩',
  },
  ['그릴치즈']: {
    src: Halloumi,
    price: 1500,
    icon: '🥞',
  },
};

Object.keys(INGREDIENTS).forEach((ingredient) => {
  useGLTF.preload(INGREDIENTS[ingredient].src);
});

export const useSandwich = create((set) => ({
  ingredients: [
    {
      id: 0,
      name: '빵',
    },
    {
      id: 1,
      name: '빵',
    },
  ],
  total: 3000,
  addedToCart: false,
  addIngredient: (ingredientName) =>
    set((state) => ({
      total: state.total + INGREDIENTS[ingredientName].price,
      ingredients: [
        ...state.ingredients.slice(0, -1),
        {
          name: ingredientName,
          id: state.ingredients.length,
        },
        {
          name: '빵',
          id: 1,
        },
      ],
    })),
  removeIngredient: (ingredient) =>
    set((state) => ({
      total: state.total - (INGREDIENTS[ingredient.name]?.price || 0),
      ingredients: state.ingredients.filter((ing) => ing.id !== ingredient.id),
    })),
  setAddedToCart: (addedToCart) => set({ addedToCart }),
}));
