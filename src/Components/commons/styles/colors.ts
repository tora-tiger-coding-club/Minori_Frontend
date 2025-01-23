export const COLORS = {
  // 주요 브랜드 컬러
  PRIMARY: '#FCA', // 메인 컬러
  PRIMARY_HOVER: 'rgba(255, 204, 170, 0.8)',
  PRIMARY_SHADOW: {
    LIGHT: 'rgba(255, 204, 170, 0.25)',
    MEDIUM: 'rgba(255, 204, 170, 0.15)',
    DARK: 'rgba(255, 204, 170, 0.1)',
  },

  // 텍스트 컬러
  TEXT: {
    PRIMARY: '#1E1E1E',
    SECONDARY: '#818181',
    PLACEHOLDER: '#CECCCD',
  },

  // 배경 컬러
  BACKGROUND: {
    WHITE: '#FFF',
    GRAY: '#CCC',
  },

  // 테두리 컬러
  BORDER: {
    DEFAULT: '#CCC',
  },

  // 그림자 효과
  SHADOW: {
    DEFAULT: 'rgba(0, 0, 0, 0.05)',
  },

  // 추가되는 색상들
  HOVER: {
    LIGHT: '#FFE5D5',
    GRAY: '#F0F0F0',
  },

  CATEGORY: {
    BORDER: '#E0E0E0',
  },

  TITLE: {
    GRAY: '#646464',
  },
} as const;
