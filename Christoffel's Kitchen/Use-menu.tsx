import { useState, useEffect } from 'react';

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
}

export interface MenuData {
  starters: Dish[];
  mains: Dish[];
  desserts: Dish[];
  drinks: Dish[];
}

const defaultMenuData: MenuData = {
  starters: [
    {
      id: '1',
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls with black truffle and parmesan',
      price: 'R120',
      image: 'https://images.unsplash.com/photo-1640209872074-dd584b38f2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXIlMjBzdGFydGVyJTIwZm9vZCUyMGVsZWdhbnR8ZW58MXx8fHwxNzU3MzkxNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'starters'
    },
    {
      id: '2',
      name: 'Seared Scallops',
      description: 'Pan-seared scallops with cauliflower purée and pancetta',
      price: 'R150',
      image: 'https://images.unsplash.com/photo-1640209872074-dd584b38f2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXIlMjBzdGFydGVyJTIwZm9vZCUyMGVsZWdhbnR8ZW58MXx8fHwxNzU3MzkxNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'starters'
    },
    {
      id: '3',
      name: 'Burrata Caprese',
      description: 'Fresh burrata with heirloom tomatoes and basil oil',
      price: 'R95',
      image: 'https://images.unsplash.com/photo-1640209872074-dd584b38f2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXIlMjBzdGFydGVyJTIwZm9vZCUyMGVsZWdhbnR8ZW58MXx8fHwxNzU3MzkxNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'starters'
    }
  ],
  mains: [
    {
      id: '4',
      name: 'Wagyu Beef Tenderloin',
      description: 'Premium wagyu with roasted vegetables and red wine jus',
      price: 'R350',
      image: 'https://images.unsplash.com/photo-1644704265419-96ddaf628e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWluJTIwY291cnNlJTIwc3RlYWslMjBkaW5uZXJ8ZW58MXx8fHwxNzU3MzQ3OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'mains'
    },
    {
      id: '5',
      name: 'Lobster Thermidor',
      description: 'Maine lobster in rich brandy cream sauce with herbs',
      price: 'R280',
      image: 'https://images.unsplash.com/photo-1644704265419-96ddaf628e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYWluJTIwY291cnNlJTIwc3RlYWslMjBkaW5uZXJ8ZW58MXx8fHwxNzU3MzQ3OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'mains'
    },
    {
      id: '6',
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with cherry gastrique and wild rice',
      price: 'R220',
      image: 'https://images.unsplash.com/photo-1644704265419-96ddaf628e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYWluJTIwY291cnNlJTIwc3RlYWslMjBkaW5uZXJ8ZW58MXx8fHwxNzU3MzQ3OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'mains'
    }
  ],
  desserts: [
    {
      id: '7',
      name: 'Chocolate Soufflé',
      description: 'Warm dark chocolate soufflé with vanilla bean ice cream',
      price: 'R85',
      image: 'https://images.unsplash.com/photo-1737700088028-fae0666feb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZXNzZXJ0JTIwY2hvY29sYXRlJTIwY2FrZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzU3MzkxNTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'desserts'
    },
    {
      id: '8',
      name: 'Lemon Tart',
      description: 'Classic lemon curd tart with fresh berries and mint',
      price: 'R70',
      image: 'https://images.unsplash.com/photo-1737700088028-fae0666feb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZXNzZXJ0JTIwY2hvY29sYXRlJTIwY2FrZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzU3MzkxNTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'desserts'
    },
    {
      id: '9',
      name: 'Tiramisu',
      description: 'Traditional Italian tiramisu with espresso and mascarpone',
      price: 'R80',
      image: 'https://images.unsplash.com/photo-1737700088028-fae0666feb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZXNzZXJ0JTIwY2hvY29sYXRlJTIwY2FrZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzU3MzkxNTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'desserts'
    }
  ],
  drinks: [
    {
      id: '10',
      name: 'Signature Martini',
      description: 'House gin with dry vermouth and botanical garnish',
      price: 'R110',
      image: 'https://images.unsplash.com/photo-1723408409535-4e57e443280b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGRyaW5rJTIwZ2xhc3MlMjBlbGVnYW50fGVufDF8fHx8MTc1NzM5MTUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'drinks'
    },
    {
      id: '11',
      name: 'Aged Bordeaux',
      description: '2018 Château Margaux - full-bodied red wine',
      price: 'R140',
      image: 'https://images.unsplash.com/photo-1723408409535-4e57e443280b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGRyaW5rJTIwZ2xhc3MlMjBlbGVnYW50fGVufDF8fHx8MTc1NzM5MTUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'drinks'
    },
    {
      id: '12',
      name: 'Craft Beer Flight',
      description: 'Selection of three local craft beers',
      price: 'R90',
      image: 'https://images.unsplash.com/photo-1723408409535-4e57e443280b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGRyaW5rJTIwZ2xhc3MlMjBlbGVnYW50fGVufDF8fHx8MTc1NzM5MTUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'drinks'
    }
  ]
};

const STORAGE_KEY = 'christoffels-kitchen-menu';

export function useMenu() {
  const [menuData, setMenuData] = useState<MenuData>(defaultMenuData);

  useEffect(() => {
    const savedMenu = localStorage.getItem(STORAGE_KEY);
    if (savedMenu) {
      try {
        setMenuData(JSON.parse(savedMenu));
      } catch (error) {
        console.error('Failed to parse saved menu:', error);
      }
    }
  }, []);

  const saveMenuToStorage = (data: MenuData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const addDish = (dish: Dish) => {
    const newMenu = { ...menuData };
    newMenu[dish.category].push(dish);
    setMenuData(newMenu);
    saveMenuToStorage(newMenu);
  };

  const updateDish = (updatedDish: Dish) => {
    const newMenu = { ...menuData };
    const category = updatedDish.category;
    const index = newMenu[category].findIndex(dish => dish.id === updatedDish.id);
    
    if (index !== -1) {
      newMenu[category][index] = updatedDish;
      setMenuData(newMenu);
      saveMenuToStorage(newMenu);
    }
  };

  const deleteDish = (dishId: string, category: keyof MenuData) => {
    const newMenu = { ...menuData };
    newMenu[category] = newMenu[category].filter(dish => dish.id !== dishId);
    setMenuData(newMenu);
    saveMenuToStorage(newMenu);
  };

  return {
    menuData,
    addDish,
    updateDish,
    deleteDish
  };
}

